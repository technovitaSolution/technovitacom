import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { FormData } from '@/types/form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { formData }: { formData: FormData } = await request.json();

    // Validate required fields
    if (!formData.fullName || !formData.mobileNumber) {
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
            <h1 style="color: #ec4899; font-size: 28px; margin: 0;">New Growth Consultation Request</h1>
            <p style="color: #6b7280; margin: 10px 0 0 0;">Business Growth Strategy Request</p>
          </div>
          
          <div style="border-left: 4px solid #ec4899; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Personal Information</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Full Name:</strong> ${formData.fullName}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
          </div>

          ${formData.businessName ? `
          <div style="border-left: 4px solid #10b981; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Business Information</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Business Name:</strong> ${formData.businessName}</p>
            ${formData.businessType ? `<p style="margin: 8px 0; color: #4b5563;"><strong>Business Type:</strong> ${formData.businessType}</p>` : ''}
            ${formData.businessDescription ? `<p style="margin: 8px 0; color: #4b5563;"><strong>Description:</strong> ${formData.businessDescription}</p>` : ''}
            ${formData.monthlyRevenue ? `<p style="margin: 8px 0; color: #4b5563;"><strong>Monthly Revenue:</strong> ${formData.monthlyRevenue}</p>` : ''}
          </div>
          ` : ''}

          ${formData.interestedPlatforms.length > 0 ? `
          <div style="border-left: 4px solid #3b82f6; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Platform Interest</h2>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Interested Platforms:</strong></p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
              ${formData.interestedPlatforms.map(platform => 
                `<span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${platform}</span>`
              ).join('')}
            </div>
          </div>
          ` : ''}

          ${formData.currentChallenges ? `
          <div style="border-left: 4px solid #f59e0b; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">Current Challenges</h2>
            <p style="margin: 8px 0; color: #4b5563; line-height: 1.6;">${formData.currentChallenges}</p>
          </div>
          ` : ''}

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Consultation request submitted on ${new Date().toLocaleString('en-IN', { 
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
      from: 'TechnoVita Solutions <onboarding@resend.dev>', // Replace with your verified domain
      to: ['technovitasolution@gmail.com'],
      subject: `New Business Growth Consultation Request - ${formData.fullName}`,
      html: emailContent,
      replyTo: formData.mobileNumber ? `${formData.fullName} <technovitasolution@gmail.com>` : undefined,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
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