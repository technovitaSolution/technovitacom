import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Account Management Services | Technovita Solution - Professional E-commerce Management',
  description: 'Comprehensive account management services for all major e-commerce platforms. Expert Amazon, Flipkart, Meesho, Paytm, eBay, Myntra, Nykaa, Shopee & Ajio account management.',
  keywords: 'account management services, e-commerce account management, amazon account management, flipkart account management, seller account services, marketplace management',
  alternates: {
    canonical: 'https://technovitasolution.com/services/account-management'
  },
  openGraph: {
    title: 'Account Management Services | Technovita Solution - Professional E-commerce Management',
    description: 'Comprehensive account management services for all major e-commerce platforms. Expert Amazon, Flipkart, Meesho, Paytm, eBay, Myntra, Nykaa, Shopee & Ajio account management.',
    url: 'https://technovitasolution.com/services/account-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Account Management Services - Technovita Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Account Management Services | Technovita Solution',
    description: 'Comprehensive account management services for all major e-commerce platforms.',
    images: ['/Images/account-management/account-management-services.webp'],
  }
};

const accountManagementServices = [
  {
    title: 'Amazon Account Management Services',
    description: 'Professional Amazon seller account management including account setup, product listing, inventory management, and sales optimization.',
    image: '/Images/account-management/account-managment-featured-image/amazon-account-managemnt.webp',
    link: '/amazon-account-management',
    features: ['Account Setup & Verification', 'Product Listing Optimization', 'Inventory Management', 'PPC Campaign Management', 'Performance Analytics']
  },
  {
    title: 'Flipkart Account Management Services',
    description: 'Complete Flipkart seller account management services to maximize your sales and growth on India\'s largest e-commerce platform.',
    image: '/Images/account-management/account-managment-featured-image/Flipkart Account Management by Technovita.webp',
    link: '/flipkart-account-management',
    features: ['Seller Account Setup', 'Category Approval', 'Product Cataloging', 'Order Management', 'Marketing Support']
  },
  {
    title: 'Meesho Account Management Services',
    description: 'Expert Meesho seller account management to help you succeed in the social commerce marketplace with professional support.',
    image: '/Images/account-management/account-managment-featured-image/meesho-account-management.webp',
    link: '/meesho-account-management',
    features: ['Account Registration', 'Product Upload', 'Price Management', 'Order Processing', 'Customer Support']
  },
  {
    title: 'Paytm Account Management Services',
    description: 'Comprehensive Paytm marketplace account management services for seamless selling and business growth on Paytm Mall.',
    image: '/Images/account-management/account-managment-featured-image/paytm-account-management.webp',
    link: '/paytm-account-management',
    features: ['Seller Onboarding', 'Product Management', 'Payment Processing', 'Marketing Campaigns', 'Analytics Tracking']
  },
  {
    title: 'eBay Account Management Services',
    description: 'Professional eBay seller account management services for international and domestic marketplace success.',
    image: '/Images/account-management/account-managment-featured-image/ebay-account-management.webp',
    link: '/ebay-account-management',
    features: ['Global Account Setup', 'Listing Optimization', 'International Shipping', 'Buyer Communication', 'Dispute Resolution']
  },
  {
    title: 'Myntra Account Management Services',
    description: 'Specialized Myntra seller account management for fashion and lifestyle brands looking to excel in the fashion marketplace.',
    image: '/Images/account-management/account-managment-featured-image/Myntra Account Management Solutions Graphic.webp',
    link: '/myntra-account-management',
    features: ['Brand Registration', 'Fashion Cataloging', 'Size Chart Management', 'Style Guide Creation', 'Trend Analysis']
  },
  {
    title: 'Nykaa Account Management Services',
    description: 'Expert Nykaa seller account management for beauty and wellness brands to maximize visibility and sales.',
    image: '/Images/account-management/account-managment-featured-image/nykaa-account-management.webp',
    link: '/nykaa-account-management',
    features: ['Beauty Brand Setup', 'Product Categorization', 'Content Creation', 'Promotional Campaigns', 'Customer Reviews Management']
  },
  {
    title: 'Shopee Account Management Services',
    description: 'Professional Shopee seller account management for Southeast Asian market expansion and growth.',
    image: '/Images/account-management/account-managment-featured-image/shopee-account-management.webp',
    link: '/shopee-account-management',
    features: ['Regional Account Setup', 'Multi-language Support', 'Local Marketing', 'Cross-border Selling', 'Regional Compliance']
  },
  {
    title: 'Ajio Account Management Services',
    description: 'Comprehensive Ajio seller account management services for fashion and lifestyle brands on Reliance\'s marketplace.',
    image: '/Images/account-management/account-managment-featured-image/AJIO Account Management Promotion.webp',
    link: '/ajio-account-management',
    features: ['Fashion Brand Onboarding', 'Trend-based Cataloging', 'Seasonal Campaigns', 'Brand Store Management', 'Performance Optimization']
  }
];

export default function AccountManagementServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Account Management Services
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
            Professional e-commerce account management services for all major platforms. Let our experts handle your seller accounts while you focus on growing your business.
          </p>
          <div className="relative w-full max-w-4xl mx-auto h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg bg-white p-6 flex items-center justify-center">
            <Image
              src="/Images/account-management/account-management-services.webp"
              alt="Account Management Services - Professional E-commerce Support"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Account Management Services?
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            Managing multiple e-commerce accounts can be overwhelming. Our expert team provides comprehensive account management services across all major platforms, ensuring your business runs smoothly while maximizing sales and growth opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Management</h3>
              <p className="text-gray-600">Professional account managers with platform-specific expertise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focused</h3>
              <p className="text-gray-600">Strategies designed to maximize sales and business growth</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and support for your accounts</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Account Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountManagementServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.link}
                    className="inline-block w-full text-center bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            What's Included in Our Account Management Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Account Setup</h3>
              <p className="text-sm text-gray-600">Complete seller account registration and verification</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Listing</h3>
              <p className="text-sm text-gray-600">Professional product cataloging and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Tracking</h3>
              <p className="text-sm text-gray-600">Analytics, reporting, and performance optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-sm text-gray-600">Continuous account monitoring and customer support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale Your E-commerce Business?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let our expert team handle your account management while you focus on what matters most - growing your business and serving your customers.
          </p>
          <WhatsAppButton serviceName="Account Management" className="mb-4" />
          <div className="text-pink-200 text-sm">
            <p>📞 Call us: +91 7042163504 | 📧 Email: info@technovitasolution.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

