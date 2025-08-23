import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Myntra Account Management Services | Technovita Solution',
  description: 'Professional Myntra account management services to grow your e-commerce business. Expert Myntra seller account setup, product listing, and sales optimization.',
  keywords: 'myntra account management, myntra seller services, myntra account setup, myntra product listing, myntra seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/myntra-account-management'
  },
  openGraph: {
    title: 'Myntra Account Management Services | Technovita Solution',
    description: 'Professional Myntra account management services to grow your e-commerce business. Expert Myntra seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/myntra-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/myntraaccount.png',
        width: 1200,
        height: 630,
        alt: 'Myntra Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myntra Account Management Services | Technovita Solution',
    description: 'Professional Myntra account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/myntraaccount.png'],
  }
};

export default function MyntraAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Myntra Account Management Services"
      accServiceName="Myntra"
      imgUrl="/Images/account-management/account-managment-featured-image/Myntra Account Management Solutions Graphic.webp"
      imgAlt="Myntra Account Management Services - Professional E-commerce Support"
      articleImgUrl="/Images/account-management/article/myntraaccount.webp"
      articleImgAlt="Myntra Account Management Services - Professional Support"
    />
  );
}

