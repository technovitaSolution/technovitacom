import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Nykaa Account Management Services | Technovita Solution',
  description: 'Professional Nykaa account management services to grow your e-commerce business. Expert Nykaa seller account setup, product listing, and sales optimization.',
  keywords: 'nykaa account management, nykaa seller services, nykaa account setup, nykaa product listing, nykaa seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/nykaa-account-management'
  },
  openGraph: {
    title: 'Nykaa Account Management Services | Technovita Solution',
    description: 'Professional Nykaa account management services to grow your e-commerce business. Expert Nykaa seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/nykaa-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/nykaaaccount.png',
        width: 1200,
        height: 630,
        alt: 'Nykaa Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nykaa Account Management Services | Technovita Solution',
    description: 'Professional Nykaa account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/nykaaaccount.png'],
  }
};

export default function NykaaAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Nykaa Account Management Services"
      accServiceName="Nykaa"
      imgUrl="/Images/account-management/account-managment-featured-image/nykaa-account-management.webp"
      imgAlt="Nykaa Account Management Services - Professional E-commerce Support"
      articleImgUrl="/Images/account-management/article/nykaaaccount.webp"
      articleImgAlt="Nykaa Account Management Services - Professional Support"
    />
  );
}

