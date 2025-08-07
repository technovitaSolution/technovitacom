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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const contactData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
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
