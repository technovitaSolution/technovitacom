import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Paytm Account Management Services | Technovita Solution',
  description: 'Professional Paytm account management services to grow your e-commerce business. Expert Paytm seller account setup, product listing, and sales optimization.',
  keywords: 'paytm account management, paytm seller services, paytm account setup, paytm product listing, paytm seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/paytm-account-management'
  },
  openGraph: {
    title: 'Paytm Account Management Services | Technovita Solution',
    description: 'Professional Paytm account management services to grow your e-commerce business. Expert Paytm seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/paytm-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/paytmaccount.png',
        width: 1200,
        height: 630,
        alt: 'Paytm Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paytm Account Management Services | Technovita Solution',
    description: 'Professional Paytm account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/paytmaccount.png'],
  }
};

export default function PaytmAccountManagement() {
  return (
    <ContentProtectionProvider>
      <AccountTemplate
        accountManagementService="Paytm Account Management Services"
        accServiceName="Paytm"
        imgUrl="/Images/account-management/account-managment-featured-image/paytm-account-management.webp"
        imgAlt="Paytm Account Management Services - Professional E-commerce Support"
        articleImgUrl="/Images/account-management/article/paytmaccount.webp"
        articleImgAlt="Paytm Account Management Services - Professional Support"
      />
    </ContentProtectionProvider>
  );
}