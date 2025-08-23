import React from 'react';
import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Amazon Australia Seller Services - Technovita Solution | Complete Amazon Australia Marketplace Solutions',
  description: 'Complete Amazon Australia marketplace solutions and optimization. Expert Amazon Australia seller account management and growth services.',
  keywords: 'Amazon Australia seller services, Amazon Australia marketplace, Amazon Australia account management, Amazon Australia optimization, Technovita Solution',
  openGraph: {
    title: 'Amazon Australia Seller Services - Technovita Solution',
    description: 'Complete Amazon Australia marketplace solutions and optimization.',
    type: 'website',
    url: 'https://technovitasolution.com/services/amazon-australia-seller-services',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Amazon Australia Seller Services' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Australia Seller Services - Technovita Solution',
    description: 'Complete Amazon Australia marketplace solutions and optimization.',
    images: ['/logo.webp']
  }
};

const AmazonAustraliaSellerServicesPage: React.FC = () => {
  return (
    <ComingSoon 
      serviceName="Amazon Australia Seller Services"
      description="Complete Amazon Australia marketplace solutions and optimization. We're developing expert services to help you succeed in the growing Australian e-commerce market."
      expectedDate="Coming Soon"
    />
  );
};

export default AmazonAustraliaSellerServicesPage;
