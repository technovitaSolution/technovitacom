import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface GeneralContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
  service: string;
}

export async function POST(request: NextRequest) {
  try {
    const contactData: GeneralContactFormData = await request.json();

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.mobile || !contactData.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate mobile number format
    const mobileRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (!mobileRegex.test(contactData.mobile)) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    const emailContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; padding: 0; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: white; font-size: 32px; margin: 0; font-weight: 700;">New Contact Form Submission</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 18px;">${contactData.service}</p>
        </div>
        
        <div style="background-color: white; padding: 40px 30px; margin: 0;">
          <!-- Contact Information Section -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: white; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Contact Information</h2>
            <div style="display: grid; gap: 15px;">
              <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; backdrop-filter: blur(10px);">
                <div style="color: #fbbf24; font-weight: 600; font-size: 14px; margin-bottom: 5px;">👤 FULL NAME</div>
                <div style="color: white; font-size: 18px; font-weight: 500;">${contactData.name}</div>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; backdrop-filter: blur(10px);">
                <div style="color: #fbbf24; font-weight: 600; font-size: 14px; margin-bottom: 5px;">📧 EMAIL ADDRESS</div>
                <div style="color: white; font-size: 18px; font-weight: 500;">${contactData.email}</div>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; backdrop-filter: blur(10px);">
                <div style="color: #fbbf24; font-weight: 600; font-size: 14px; margin-bottom: 5px;">📱 MOBILE NUMBER</div>
                <div style="color: white; font-size: 18px; font-weight: 500;">${contactData.mobile}</div>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; backdrop-filter: blur(10px);">
                <div style="color: #fbbf24; font-weight: 600; font-size: 14px; margin-bottom: 5px;">🎯 SERVICE INTEREST</div>
                <div style="color: white; font-size: 18px; font-weight: 500;">${contactData.service}</div>
              </div>
            </div>
          </div>

          <!-- Message Section -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: white; font-size: 24px; margin: 0 0 20px 0; font-weight: 600; display: flex; align-items: center;">
              <span style="margin-right: 10px;">💬</span> Customer Message
            </h2>
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; backdrop-filter: blur(10px);">
              <p style="color: white; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${contactData.message}</p>
            </div>
          </div>

          <!-- Action Items -->
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: white; font-size: 20px; margin: 0 0 15px 0; font-weight: 600;">🚀 Recommended Next Steps</h2>
            <ul style="color: white; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Respond within 2 hours for optimal customer experience</li>
              <li>Call the customer at <strong>${contactData.mobile}</strong></li>
              <li>Send a personalized email to <strong>${contactData.email}</strong></li>
              <li>Prepare service information for <strong>${contactData.service}</strong></li>
            </ul>
          </div>

          <!-- Quick Actions -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="tel:${contactData.mobile}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px 10px 0; font-size: 16px;">
              📞 Call ${contactData.name}
            </a>
            <a href="mailto:${contactData.email}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px 10px 0; font-size: 16px;">
              📧 Email ${contactData.name}
            </a>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 25px 30px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            📅 Form submitted on ${new Date().toLocaleString('en-IN', {
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })} (IST)
          </p>
          <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 12px;">
            TechnoVita Solutions - Professional E-commerce Services
          </p>
        </div>
      </div>
    `;

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: 'TechnoVita Solutions <onboarding@resend.dev>',
      to: ['technovitasolution@gmail.com'],
      subject: `🔥 New ${contactData.service} Inquiry from ${contactData.name}`,
      html: emailContent,
      replyTo: contactData.email,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationEmailContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: white; font-size: 28px; margin: 0; font-weight: 700;">Thank You, ${contactData.name}! 🎉</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">We've received your inquiry</p>
        </div>
        
        <div style="background-color: white; padding: 30px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <span style="color: white; font-size: 36px;">✓</span>
            </div>
            <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 10px 0;">Message Received Successfully!</h2>
            <p style="color: #6b7280; font-size: 16px; margin: 0;">Your inquiry about <strong>${contactData.service}</strong> has been submitted.</p>
          </div>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; font-weight: 600;">What happens next?</h3>
            <ul style="color: #4b5563; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Our expert team will review your requirements</li>
              <li>We'll contact you within <strong>24 hours</strong></li>
              <li>You'll receive a personalized consultation</li>
              <li>We'll provide a customized solution for your needs</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 25px 0;">
            <p style="color: #4b5563; margin: 0 0 20px 0;">Need immediate assistance?</p>
            <a href="tel:+917451073504" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px; font-size: 14px;">
              📞 Call +91 7451073504
            </a>
            <a href="https://wa.me/917451073504" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px; font-size: 14px;">
              💬 WhatsApp
            </a>
          </div>
        </div>
        
        <div style="background-color: #1f2937; padding: 20px 30px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            TechnoVita Solutions - Your Trusted E-commerce Partner
          </p>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
            📧 info@technovitasolution.com | 🌐 technovitasolution.com
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'TechnoVita Solutions <onboarding@resend.dev>',
      to: [contactData.email],
      subject: `Thank you for your inquiry, ${contactData.name}! We'll be in touch soon 🚀`,
      html: confirmationEmailContent,
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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
