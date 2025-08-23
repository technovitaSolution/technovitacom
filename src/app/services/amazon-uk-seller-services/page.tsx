import React from 'react';
import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Amazon UK Seller Services - Technovita Solution | Professional Amazon UK Marketplace Management',
  description: 'Professional Amazon UK marketplace management and support. Expert Amazon UK seller account optimization and growth services.',
  keywords: 'Amazon UK seller services, Amazon UK marketplace, Amazon UK account management, Amazon UK optimization, Technovita Solution',
  openGraph: {
    title: 'Amazon UK Seller Services - Technovita Solution',
    description: 'Professional Amazon UK marketplace management and support.',
    type: 'website',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Amazon UK Seller Services' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK Seller Services - Technovita Solution',
    description: 'Professional Amazon UK marketplace management and support.',
    images: ['/logo.webp']
  }
};

const AmazonUKSellerServicesPage: React.FC = () => {
  return (
    <ComingSoon 
      serviceName="Amazon UK Seller Services"
      description="Professional Amazon UK marketplace management and support. We're building comprehensive solutions to help you dominate the UK e-commerce market."
      expectedDate="Coming Soon"
    />
  );
};

export default AmazonUKSellerServicesPage;
