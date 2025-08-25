import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';
import { ContentProtectionProvider } from '@/components/ContentProtection';

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
    <ContentProtectionProvider>
      <AccountTemplate
        accountManagementService="Meesho Account Management Services"
        accServiceName="Meesho"
        imgUrl="/Images/account-management/account-managment-featured-image/meesho-account-management.webp"
        imgAlt="Meesho Account Management Services - Professional E-commerce Support"
        articleImgUrl="/Images/account-management/article/meeshoaccount.webp"
        articleImgAlt="Meesho Account Management Services - Professional Support"
      />
    </ContentProtectionProvider>
  );
}

