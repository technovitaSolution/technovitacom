import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Flipkart Account Management Services | Technovita Solution',
  description: 'Professional Flipkart account management services to grow your e-commerce business. Expert Flipkart seller account setup, product listing, and sales optimization.',
  keywords: 'flipkart account management, flipkart seller services, flipkart account setup, flipkart product listing, flipkart seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/flipkart-account-management'
  },
  openGraph: {
    title: 'Flipkart Account Management Services | Technovita Solution',
    description: 'Professional Flipkart account management services to grow your e-commerce business. Expert Flipkart seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/flipkart-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/flipkartaccount.png',
        width: 1200,
        height: 630,
        alt: 'Flipkart Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flipkart Account Management Services | Technovita Solution',
    description: 'Professional Flipkart account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/flipkartaccount.png'],
  }
};

export default function FlipkartAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Flipkart Account Management Services"
      accServiceName="Flipkart"
      imgUrl="/Images/AccManagement/flipkartaccount.png"
      imgAlt="flipkart Account Management service"
    />
  );
}

