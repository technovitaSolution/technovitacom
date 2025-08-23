import React from 'react';
import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Amazon UAE Seller Services - Technovita Solution | Expert Amazon UAE Marketplace Management',
  description: 'Expert Amazon UAE marketplace management and growth. Professional Amazon UAE seller account optimization and expansion services.',
  keywords: 'Amazon UAE seller services, Amazon UAE marketplace, Amazon UAE account management, Amazon UAE optimization, Technovita Solution',
  openGraph: {
    title: 'Amazon UAE Seller Services - Technovita Solution',
    description: 'Expert Amazon UAE marketplace management and growth.',
    type: 'website',
    url: 'https://technovitasolution.com/services/amazon-uae-seller-services',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Amazon UAE Seller Services' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UAE Seller Services - Technovita Solution',
    description: 'Expert Amazon UAE marketplace management and growth.',
    images: ['/logo.webp']
  }
};

const AmazonUAESellerServicesPage: React.FC = () => {
  return (
    <ComingSoon 
      serviceName="Amazon UAE Seller Services"
      description="Expert Amazon UAE marketplace management and growth. We're building comprehensive solutions to help you expand your business in the dynamic UAE e-commerce market."
      expectedDate="Coming Soon"
    />
  );
};

export default AmazonUAESellerServicesPage;
