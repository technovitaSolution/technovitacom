import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Ajio Account Management Services | Technovita Solution',
  description: 'Professional Ajio account management services to grow your e-commerce business. Expert Ajio seller account setup, product listing, and sales optimization.',
  keywords: 'ajio account management, ajio seller services, ajio account setup, ajio product listing, ajio seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/ajio-account-management'
  },
  openGraph: {
    title: 'Ajio Account Management Services | Technovita Solution',
    description: 'Professional Ajio account management services to grow your e-commerce business. Expert Ajio seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/ajio-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/ajioaccount.png',
        width: 1200,
        height: 630,
        alt: 'Ajio Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajio Account Management Services | Technovita Solution',
    description: 'Professional Ajio account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/ajioaccount.png'],
  }
};

export default function AjioAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Ajio Account Management Services"
      accServiceName="AJIO"
      imgUrl="/Images/AccManagement/ajioaccount.png"
      imgAlt="ajio Account Management service"
    />
  );
}

