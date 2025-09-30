import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  source: string;
}

// Simple in-memory rate limiter (best-effort; may reset between deployments)
const ipToTimestamps: Map<string, number[]> = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // per IP per window

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

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(email);
}

function looksLikeSpam(message: string): boolean {
  const lower = message.toLowerCase();
  const hasLink = /https?:\/\//i.test(message) || /www\./i.test(message);
  const blacklisted = ['viagra', 'sex', 'porn', 'crypto', 'loan', 'casino', 'betting'];
  const hasBlacklist = blacklisted.some((w) => lower.includes(w));
  const tooShort = lower.trim().length < 10;
  const repeatedChars = /(.)\1{7,}/.test(lower);
  return hasLink || hasBlacklist || tooShort || repeatedChars;
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
  if (!origin && !referer) return true; // allow non-browser clients if other checks pass
  return isAllowed(origin) || isAllowed(referer) || isAllowed(host);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Honeypot check: bots often fill hidden fields
    const honey = (formData.get('company') as string) || '';
    if (honey.trim() !== '') {
      return NextResponse.redirect(new URL('/contact?error=true', request.url));
    }

    // Timing check: require at least 3 seconds on page
    const formTsRaw = (formData.get('form_ts') as string) || '';
    const formTs = Number(formTsRaw);
    if (!Number.isFinite(formTs) || Date.now() - formTs < 3000) {
      return NextResponse.redirect(new URL('/contact?error=true', request.url));
    }

    // Same-origin check
    if (!isSameOrigin(request)) {
      return NextResponse.redirect(new URL('/contact?error=true', request.url));
    }

    // Rate limit per IP
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.redirect(new URL('/contact?error=true', request.url));
    }

    // Combine country code with phone number (prefix)
    const countryCodeRaw = (formData.get('countryCode') as string) || '';
    const countryCodePrefix = countryCodeRaw.split('-')[0] || '';
    const rawPhone = ((formData.get('phone') as string) || '').replace(/\D+/g, '');
    const formattedPhone = rawPhone
      ? `${countryCodePrefix}${rawPhone}`
      : '';

    const contactData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formattedPhone,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      source: formData.get('source') as string
    };

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Additional validation
    if (!isValidEmail(contactData.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (looksLikeSpam(contactData.message)) {
      return NextResponse.redirect(new URL('/contact?error=true', request.url));
    }

    // Format the email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ec4899; font-size: 28px; margin: 0;">New Contact Form Submission</h1>
            <p style="color: #6b7280; margin: 10px 0 0 0;">Contact Us Page Inquiry</p>
          </div>
          
          <div style="border-left: 4px solid #ec4899; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Contact Information</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Full Name:</strong> ${contactData.name}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p style="margin: 8px 0; color: #4b5563;"><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            ${contactData.service ? `<p style="margin: 8px 0; color: #4b5563;"><strong>Service of Interest:</strong> ${contactData.service}</p>` : ''}
          </div>

          <div style="border-left: 4px solid #10b981; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Message</h2>
            <p style="margin: 8px 0; color: #4b5563; line-height: 1.6;">${contactData.message}</p>
          </div>

          <div style="border-left: 4px solid #3b82f6; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Submission Details</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Source:</strong> ${contactData.source}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Contact form submitted on ${new Date().toLocaleString('en-IN', { 
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

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'TechnoVita Solutions <onboarding@resend.dev>',
      to: ['technovitasolution@gmail.com'],
      subject: `New Contact Form Submission - ${contactData.name}`,
      html: emailContent,
      replyTo: contactData.email,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Redirect back to contact page with success message
    return NextResponse.redirect(new URL('/contact?success=true', request.url));

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.redirect(new URL('/contact?error=true', request.url));
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
