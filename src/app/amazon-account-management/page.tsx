import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Amazon Account Management Services | Technovita Solution',
  description: 'Professional Amazon account management services to grow your e-commerce business. Expert Amazon seller account setup, product listing, and sales optimization.',
  keywords: 'amazon account management, amazon seller services, amazon account setup, amazon product listing, amazon seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/amazon-account-management'
  },
  openGraph: {
    title: 'Amazon Account Management Services | Technovita Solution',
    description: 'Professional Amazon account management services to grow your e-commerce business. Expert Amazon seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/amazon-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/amazonaccount.png',
        width: 1200,
        height: 630,
        alt: 'Amazon Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Account Management Services | Technovita Solution',
    description: 'Professional Amazon account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/amazonaccount.png'],
  }
};

export default function AmazonAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Amazon Account Management Services"
      accServiceName="AMAZON"
      imgUrl="/Images/account-management/account-managment-featured-image/amazon-account-managemnt.webp"
      imgAlt="Amazon Account Management Services - Professional E-commerce Support"
      articleImgUrl="/Images/account-management/article/amazonaccount.webp"
      articleImgAlt="Amazon Account Management Services - Professional Support"
    />
  );
}

