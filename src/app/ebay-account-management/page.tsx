import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'eBay Account Management Services | Technovita Solution',
  description: 'Professional eBay account management services to grow your e-commerce business. Expert eBay seller account setup, product listing, and sales optimization.',
  keywords: 'ebay account management, ebay seller services, ebay account setup, ebay product listing, ebay seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/ebay-account-management'
  },
  openGraph: {
    title: 'eBay Account Management Services | Technovita Solution',
    description: 'Professional eBay account management services to grow your e-commerce business. Expert eBay seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/ebay-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/ebayaccount.png',
        width: 1200,
        height: 630,
        alt: 'eBay Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eBay Account Management Services | Technovita Solution',
    description: 'Professional eBay account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/ebayaccount.png'],
  }
};

export default function EbayAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Ebay Account Management Services"
      accServiceName="Ebay"
      imgUrl="/Images/account-management/account-managment-featured-image/ebay-account-management.webp"
      imgAlt="eBay Account Management Services - Professional E-commerce Support"
      articleImgUrl="/Images/account-management/article/ebayaccount.webp"
      articleImgAlt="eBay Account Management Services - Professional Support"
    />
  );
}

