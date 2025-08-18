import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Meesho Account Management Services | Technovita Solution',
  description: 'Professional Meesho account management services to grow your e-commerce business. Expert Meesho seller account setup, product listing, and sales optimization.',
  keywords: 'meesho account management, meesho seller services, meesho account setup, meesho product listing, meesho seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/meesho-account-management'
  },
  openGraph: {
    title: 'Meesho Account Management Services | Technovita Solution',
    description: 'Professional Meesho account management services to grow your e-commerce business. Expert Meesho seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/meesho-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/meeshoaccount.png',
        width: 1200,
        height: 630,
        alt: 'Meesho Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meesho Account Management Services | Technovita Solution',
    description: 'Professional Meesho account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/meeshoaccount.png'],
  }
};

export default function MeeshoAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Meesho Account Management Services"
      accServiceName="Meesho"
      imgUrl="/Images/AccManagement/meeshoaccount.png"
      imgAlt="meesho Account Management service"
    />
  );
}

