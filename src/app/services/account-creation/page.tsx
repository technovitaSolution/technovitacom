import React from 'react';
import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Account Creation Services - Technovita Solution | End-to-End Seller Account Setup',
  description: 'End-to-end seller account setup on major platforms with expert guidance. Professional account creation services for all e-commerce marketplaces.',
  keywords: 'account creation services, seller account setup, e-commerce account creation, marketplace registration, Technovita Solution',
  openGraph: {
    title: 'Account Creation Services - Technovita Solution',
    description: 'End-to-end seller account setup on major platforms with expert guidance.',
    type: 'website',
    url: 'https://technovitasolution.com/services/account-creation',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Account Creation Services' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Account Creation Services - Technovita Solution',
    description: 'End-to-end seller account setup on major platforms with expert guidance.',
    images: ['/logo.webp']
  }
};

const AccountCreationPage: React.FC = () => {
  return (
    <ComingSoon 
      serviceName="Account Creation Services"
      description="End-to-end seller account setup on major platforms with expert guidance. We're developing comprehensive solutions to streamline your marketplace registration process."
      expectedDate="Coming Soon"
    />
  );
};

export default AccountCreationPage;
