import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface DiwaliOfferData {
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
    console.log('Diwali Offer API: Received request');
    const body = await request.json();
    console.log('Diwali Offer API: Request body:', body);
    const { name, mobile, offer, source }: DiwaliOfferData = body;

    // Rate limiting
    const ip = getClientIp(request);
    console.log('Diwali Offer API: Client IP:', ip);
    if (isRateLimited(ip)) {
      console.log('Diwali Offer API: Rate limited');
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Same-origin check (relaxed for development)
    const origin = request.headers.get('origin') || '';
    const referer = request.headers.get('referer') || '';
    console.log('Diwali Offer API: Origin:', origin, 'Referer:', referer);
    
    // Skip same-origin check in development
    if (process.env.NODE_ENV === 'production' && !isSameOrigin(request)) {
      console.log('Diwali Offer API: Same-origin check failed');
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

    // Format the email content with Diwali theme
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #fff5e6 0%, #ffe8cc 100%);">
        <div style="background: linear-gradient(135deg, #ff9933 0%, #ff6600 50%, #ff3366 100%); padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
          <h1 style="color: white; font-size: 32px; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            🪔 DIWALI SPECIAL OFFER ALERT! 🪔
          </h1>
          <p style="color: #fff; margin: 10px 0 0 0; font-size: 18px; font-weight: bold;">
            New Lead from Diwali Offer Popup
          </p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          <div style="text-align: center; margin-bottom: 25px; padding: 15px; background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%); border-radius: 10px; border: 2px solid #ff9933;">
            <p style="margin: 0; color: #d63031; font-size: 20px; font-weight: bold;">
              🎁 FREE AJIO ONBOARDING WITH MYNTRA 🎁
            </p>
          </div>

          <div style="border-left: 5px solid #ff9933; padding-left: 20px; margin-bottom: 25px; background: #fff5e6; padding: 20px; border-radius: 5px;">
            <h2 style="color: #d63031; font-size: 22px; margin: 0 0 15px 0;">👤 Customer Information</h2>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Mobile:</strong> <a href="tel:${mobile}" style="color: #ff6600; text-decoration: none; font-weight: bold;">${mobile}</a></p>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Source:</strong> ${source}</p>
          </div>

          <div style="border-left: 5px solid #00b894; padding-left: 20px; margin-bottom: 25px; background: #e6f7f4; padding: 20px; border-radius: 5px;">
            <h2 style="color: #00b894; font-size: 22px; margin: 0 0 15px 0;">🎯 Offer Details</h2>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Offer Claimed:</strong> ${offer}</p>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Campaign:</strong> Diwali Special 2024</p>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Lead Type:</strong> High-Intent Seasonal Offer</p>
          </div>

          <div style="border-left: 5px solid #6c5ce7; padding-left: 20px; margin-bottom: 25px; background: #f0eeff; padding: 20px; border-radius: 5px;">
            <h2 style="color: #6c5ce7; font-size: 22px; margin: 0 0 15px 0;">📊 Lead Context</h2>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Interest Area:</strong> Ajio & Myntra Seller Onboarding</p>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>Engagement:</strong> Clicked through Diwali promotional popup</p>
            <p style="margin: 10px 0; color: #2d3436; font-size: 16px;"><strong>User Journey:</strong> Browsed website → Viewed Diwali offer → Submitted details</p>
          </div>

          <div style="background: linear-gradient(135deg, #ff9933 0%, #ff6600 100%); padding: 25px; border-radius: 10px; margin-top: 30px; text-align: center; border: 3px solid #d63031;">
            <h3 style="color: white; font-size: 20px; margin: 0 0 15px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">🚨 IMMEDIATE ACTION REQUIRED</h3>
            <p style="margin: 0; color: white; font-size: 16px; line-height: 1.6;">
              This is a <strong>DIWALI SPECIAL OFFER</strong> lead! Customer expects FREE Ajio onboarding with Myntra seller onboarding service. 
              <br><br>
              <strong>Response Time Goal: Within 2 hours</strong>
              <br>
              Contact them immediately to confirm the offer and start the onboarding process!
            </p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 25px; text-align: center; border: 2px dashed #fdcb6e;">
            <p style="margin: 0; color: #2d3436; font-size: 14px;">
              🕉️ <strong>शुभ दिवाली!</strong> 🪔
              <br>
              Lead captured on ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} IST
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 50%, #ffeaa7 100%); border-radius: 10px; text-align: center;">
            <p style="margin: 0; color: #d63031; font-size: 18px; font-weight: bold;">
              ✨ Wishing you a prosperous Diwali filled with successful deals! ✨
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; padding: 15px;">
          <p style="color: #636e72; font-size: 12px; margin: 0;">
            🔔 This is an automated notification from TechnoVita Solutions Diwali Campaign
          </p>
        </div>
      </div>
    `;

    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error('Diwali Offer API: RESEND_API_KEY not set');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('Diwali Offer API: Sending email...');
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'TechnoVita Solutions <onboarding@resend.dev>',
      to: ['technovitasolution@gmail.com'],
      subject: `🪔 DIWALI SPECIAL - ${name} - FREE Ajio + Myntra Onboarding 🎁`,
      html: emailContent,
      replyTo: `${name} <technovitasolution@gmail.com>`,
    });

    console.log('Diwali Offer API: Email response:', emailResponse);

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Diwali offer lead captured successfully',
      emailId: emailResponse.data?.id
    });

  } catch (error) {
    console.error('Diwali Offer API error:', error);
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

