import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';
import { ContentProtectionProvider } from '@/components/ContentProtection';

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
    <ContentProtectionProvider>
      <AccountTemplate
        accountManagementService="Flipkart Account Management Services"
        accServiceName="Flipkart"
        imgUrl="/Images/account-management/account-managment-featured-image/Flipkart Account Management by Technovita.webp"
        imgAlt="Flipkart Account Management Services - Professional E-commerce Support"
        articleImgUrl="/Images/account-management/article/flipkartaccount.webp"
        articleImgAlt="Flipkart Account Management Services - Professional Support"
      />
    </ContentProtectionProvider>
  );
}

