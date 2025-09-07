import { NextRequest, NextResponse } from 'next/server';

interface CertificateData {
  id: string;
  employeeName: string;
  position: string;
  startDate: string;
  endDate: string;
  status: 'verified' | 'invalid';
  issuedDate: string;
  company: string;
}

// Static certificate database - in a real application, this would be stored in a database
const certificates: Record<string, CertificateData> = {
  'E1008': {
    id: 'E1008',
    employeeName: 'MUKESH KUMAR BAGARIA',
    position: 'FULL STACK DEVELOPER',
    startDate: '24 JULY 2023',
    endDate: '31 AUGUST 2025',
    status: 'verified',
    issuedDate: '4 SEPTEMBER 2025',
    company: 'Technovita Solution'
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { certificateId } = body;

    if (!certificateId) {
      return NextResponse.json(
        { error: 'Certificate ID is required' },
        { status: 400 }
      );
    }

    // Convert to uppercase for consistent lookup
    const normalizedId = certificateId.toString().toUpperCase().trim();

    // Check if certificate exists
    const certificate = certificates[normalizedId];

    if (!certificate) {
      return NextResponse.json(
        { error: 'Certificate not found. Please verify the certificate ID and try again.' },
        { status: 404 }
      );
    }

    // Return the certificate data
    return NextResponse.json(certificate, { status: 200 });

  } catch (error) {
    console.error('Certificate verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle GET requests for direct certificate lookup
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const certificateId = searchParams.get('id');

    if (!certificateId) {
      return NextResponse.json(
        { error: 'Certificate ID is required' },
        { status: 400 }
      );
    }

    // Convert to uppercase for consistent lookup
    const normalizedId = certificateId.toString().toUpperCase().trim();

    // Check if certificate exists
    const certificate = certificates[normalizedId];

    if (!certificate) {
      return NextResponse.json(
        { error: 'Certificate not found. Please verify the certificate ID and try again.' },
        { status: 404 }
      );
    }

    // Return the certificate data
    return NextResponse.json(certificate, { status: 200 });

  } catch (error) {
    console.error('Certificate verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
