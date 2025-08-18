import React from 'react';
import { Metadata } from 'next';
import AccountTemplate from '@/components/AccountTemplate';

export const metadata: Metadata = {
  title: 'Shopee Account Management Services | Technovita Solution',
  description: 'Professional Shopee account management services to grow your e-commerce business. Expert Shopee seller account setup, product listing, and sales optimization.',
  keywords: 'shopee account management, shopee seller services, shopee account setup, shopee product listing, shopee seller support',
  alternates: {
    canonical: 'https://technovitasolution.com/shopee-account-management'
  },
  openGraph: {
    title: 'Shopee Account Management Services | Technovita Solution',
    description: 'Professional Shopee account management services to grow your e-commerce business. Expert Shopee seller account setup, product listing, and sales optimization.',
    url: 'https://technovitasolution.com/shopee-account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/AccManagement/shopeeaccount.png',
        width: 1200,
        height: 630,
        alt: 'Shopee Account Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopee Account Management Services | Technovita Solution',
    description: 'Professional Shopee account management services to grow your e-commerce business.',
    images: ['/Images/AccManagement/shopeeaccount.png'],
  }
};

export default function ShopeeAccountManagement() {
  return (
    <AccountTemplate
      accountManagementService="Shopee Account Management Services"
      accServiceName="Shopee"
      imgUrl="/Images/AccManagement/shopeeaccount.png"
      imgAlt="shopee Account Management service"
    />
  );
}

