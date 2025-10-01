import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface PopupLeadData {
  name: string;
  mobile: string;
  offer: string;
  source: string;
}

// Simple in-memory rate limiter
const ipToTimestamps: Map<string, number[]> = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // per IP per window

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) {
    return xff.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp;
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipToTimestamps.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  ipToTimestamps.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function isValidMobile(mobile: string): boolean {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobile.replace(/\D/g, ''));
}

function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin') || '';
  const referer = req.headers.get('referer') || '';
  const host = req.headers.get('host') || '';
  const allowedHosts = [
    'technovitasolution.com',
    'www.technovitasolution.com',
    'localhost:3000',
    '127.0.0.1:3000',
  ];
  const isAllowed = (val: string) => allowedHosts.some((h) => val.includes(h));
  if (!origin && !referer) return true;
  return isAllowed(origin) || isAllowed(referer) || isAllowed(host);
}

export async function POST(request: NextRequest) {
  try {
    console.log('API: Received request');
    const body = await request.json();
    console.log('API: Request body:', body);
    const { name, mobile, offer, source }: PopupLeadData = body;

    // Rate limiting
    const ip = getClientIp(request);
    console.log('API: Client IP:', ip);
    if (isRateLimited(ip)) {
      console.log('API: Rate limited');
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Same-origin check (relaxed for development)
    const origin = request.headers.get('origin') || '';
    const referer = request.headers.get('referer') || '';
    console.log('API: Origin:', origin, 'Referer:', referer);
    
    // Skip same-origin check in development
    if (process.env.NODE_ENV === 'production' && !isSameOrigin(request)) {
      console.log('API: Same-origin check failed');
      return NextResponse.json(
        { success: false, message: 'Invalid request origin' },
        { status: 403 }
      );
    }

    // Validate required fields
    if (!name || !mobile || !offer || !source) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate mobile number
    if (!isValidMobile(mobile)) {
      return NextResponse.json(
        { success: false, message: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ec4899; font-size: 28px; margin: 0;">🎯 New Nykaa Calculator Lead</h1>
            <p style="color: #6b7280; margin: 10px 0 0 0;">High-Intent Lead from Nykaa Seller Calculator</p>
          </div>
          
          <div style="border-left: 4px solid #ec4899; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Lead Information</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Mobile:</strong> ${mobile}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Source:</strong> ${source}</p>
          </div>

          <div style="border-left: 4px solid #10b981; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Offer Interest</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Interested In:</strong> ${offer}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Lead Quality:</strong> High-Intent (Used Calculator)</p>
          </div>

          <div style="border-left: 4px solid #3b82f6; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Lead Context</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Calculator Used:</strong> Nykaa Seller Commission Calculator</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>User Intent:</strong> Actively calculating profit margins</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Engagement Level:</strong> High (Popup interaction)</p>
          </div>

          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #f59e0b;">
            <h3 style="color: #92400e; font-size: 16px; margin: 0 0 10px 0;">🚨 High Priority Lead</h3>
            <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5;">
              This lead came from the Nykaa Calculator page and showed interest in our services. 
              They are actively researching Nykaa selling and calculating profits - perfect timing for outreach!
            </p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Lead captured on ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
    `;

    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error('API: RESEND_API_KEY not set');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('API: Sending email...');
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'TechnoVita Solutions <onboarding@resend.dev>',
      to: ['technovitasolution@gmail.com'],
      subject: `🎯 New Nykaa Calculator Lead - ${name} (${offer})`,
      html: emailContent,
      replyTo: `${name} <technovitasolution@gmail.com>`,
    });

    console.log('API: Email response:', emailResponse);

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      emailId: emailResponse.data?.id
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle CORS for any other methods
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


