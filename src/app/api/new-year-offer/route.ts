import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface NewYearOfferData {
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
        console.log('New Year Offer API: Received request');
        const body = await request.json();
        console.log('New Year Offer API: Request body:', body);
        const { name, mobile, offer, source }: NewYearOfferData = body;

        // Rate limiting
        const ip = getClientIp(request);
        console.log('New Year Offer API: Client IP:', ip);
        if (isRateLimited(ip)) {
            console.log('New Year Offer API: Rate limited');
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Same-origin check (relaxed for development)
        const origin = request.headers.get('origin') || '';
        const referer = request.headers.get('referer') || '';
        console.log('New Year Offer API: Origin:', origin, 'Referer:', referer);

        // Skip same-origin check in development
        if (process.env.NODE_ENV === 'production' && !isSameOrigin(request)) {
            console.log('New Year Offer API: Same-origin check failed');
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

        // Format the email content with New Year theme
        const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
          <h1 style="color: white; font-size: 32px; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            🎉 NEW YEAR OFFER ALERT! 🎉
          </h1>
          <p style="color: #fff; margin: 10px 0 0 0; font-size: 18px; font-weight: bold;">
            New Lead from New Year Offer Popup
          </p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          <div style="text-align: center; margin-bottom: 25px; padding: 15px; background: linear-gradient(90deg, #dbeafe 0%, #e9d5ff 100%); border-radius: 10px; border: 2px solid #8b5cf6;">
            <p style="margin: 0; color: #7c3aed; font-size: 20px; font-weight: bold;">
              🎁 FREE AJIO ONBOARDING WITH MYNTRA 🎁
            </p>
          </div>

          <div style="border-left: 5px solid #3b82f6; padding-left: 20px; margin-bottom: 25px; background: #eff6ff; padding: 20px; border-radius: 5px;">
            <h2 style="color: #2563eb; font-size: 22px; margin: 0 0 15px 0;">👤 Customer Information</h2>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Mobile:</strong> <a href="tel:${mobile}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${mobile}</a></p>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Source:</strong> ${source}</p>
          </div>

          <div style="border-left: 5px solid #10b981; padding-left: 20px; margin-bottom: 25px; background: #ecfdf5; padding: 20px; border-radius: 5px;">
            <h2 style="color: #059669; font-size: 22px; margin: 0 0 15px 0;">🎯 Offer Details</h2>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Offer Claimed:</strong> ${offer}</p>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Campaign:</strong> New Year Special 2025</p>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Lead Type:</strong> High-Intent Seasonal Offer</p>
          </div>

          <div style="border-left: 5px solid #8b5cf6; padding-left: 20px; margin-bottom: 25px; background: #f5f3ff; padding: 20px; border-radius: 5px;">
            <h2 style="color: #7c3aed; font-size: 22px; margin: 0 0 15px 0;">📊 Lead Context</h2>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Interest Area:</strong> Ajio & Myntra Seller Onboarding</p>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>Engagement:</strong> Clicked through New Year promotional popup</p>
            <p style="margin: 10px 0; color: #1e293b; font-size: 16px;"><strong>User Journey:</strong> Browsed website → Viewed New Year offer → Submitted details</p>
          </div>

          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 25px; border-radius: 10px; margin-top: 30px; text-align: center; border: 3px solid #7c3aed;">
            <h3 style="color: white; font-size: 20px; margin: 0 0 15px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">🚨 IMMEDIATE ACTION REQUIRED</h3>
            <p style="margin: 0; color: white; font-size: 16px; line-height: 1.6;">
              This is a <strong>NEW YEAR SPECIAL OFFER</strong> lead! Customer expects FREE Ajio onboarding with Myntra seller onboarding service. 
              <br><br>
              <strong>Response Time Goal: Within 2 hours</strong>
              <br>
              Contact them immediately to confirm the offer and start the onboarding process!
            </p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 10px; margin-top: 25px; text-align: center; border: 2px dashed #cbd5e1;">
            <p style="margin: 0; color: #475569; font-size: 14px;">
              🎉 <strong>Happy New Year!</strong> 🎊
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

          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(90deg, #dbeafe 0%, #e9d5ff 50%, #fbcfe8 100%); border-radius: 10px; text-align: center;">
            <p style="margin: 0; color: #7c3aed; font-size: 18px; font-weight: bold;">
              ✨ Wishing you a prosperous New Year filled with successful deals! ✨
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; padding: 15px;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">
            🔔 This is an automated notification from TechnoVita Solutions New Year Campaign
          </p>
        </div>
      </div>
    `;

        // Check if RESEND_API_KEY is set
        if (!process.env.RESEND_API_KEY) {
            console.error('New Year Offer API: RESEND_API_KEY not set');
            return NextResponse.json(
                { success: false, message: 'Email service not configured' },
                { status: 500 }
            );
        }

        console.log('New Year Offer API: Sending email...');
        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: 'TechnoVita Solutions <onboarding@resend.dev>',
            to: ['technovitasolution@gmail.com'],
            subject: `🎉 NEW YEAR SPECIAL - ${name} - FREE Ajio + Myntra Onboarding 🎁`,
            html: emailContent,
            replyTo: `${name} <technovitasolution@gmail.com>`,
        });

        console.log('New Year Offer API: Email response:', emailResponse);

        if (emailResponse.error) {
            console.error('Resend error:', emailResponse.error);
            return NextResponse.json(
                { success: false, message: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'New Year offer lead captured successfully',
            emailId: emailResponse.data?.id
        });

    } catch (error) {
        console.error('New Year Offer API error:', error);
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
