import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon USA PPC Management Service | Expert Amazon.com Advertising - Technovita Solution',
  description: 'Professional Amazon.com PPC management service in USA. Expert Amazon advertising campaigns, ACOS optimization, keyword management, and ROI improvement for US Amazon sellers.',
  keywords: [
    'amazon ppc management usa',
    'amazon advertising management usa',
    'amazon.com ppc service',
    'amazon sponsored ads usa',
    'amazon ppc optimization usa',
    'amazon acos optimization usa',
    'amazon advertising campaigns usa',
    'amazon ppc consultant usa',
    'amazon keyword management usa',
    'amazon ppc strategy usa',
    'amazon advertising roi usa',
    'amazon ppc budget management usa',
    'amazon sponsored products usa',
    'amazon sponsored brands usa',
    'amazon ppc audit usa',
    'amazon advertising optimization usa',
    'amazon ppc management service usa',
    'amazon advertising expert usa',
    'amazon ppc specialist usa',
    'amazon advertising consultant usa'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-usa-seller-services/ppc-management'
  },
  openGraph: {
    title: 'Amazon USA PPC Management Service | Expert Amazon.com Advertising - Technovita Solution',
    description: 'Professional Amazon.com PPC management service in USA. Expert Amazon advertising campaigns, ACOS optimization, keyword management, and ROI improvement for US Amazon sellers.',
    url: 'https://technovitasolution.com/services/amazon-usa-seller-services/ppc-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-usa/amazon-ppc-management-usa.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon USA PPC Management Service - Expert Amazon.com Advertising',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon USA PPC Management Service | Expert Amazon.com Advertising - Technovita Solution',
    description: 'Professional Amazon.com PPC management service in USA. Expert Amazon advertising campaigns, ACOS optimization, keyword management, and ROI improvement for US Amazon sellers.',
    images: ['/Images/amazon-usa/amazon-ppc-management-usa.webp'],
  },
};

export default function AmazonUSAPPCManagementService() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Amazon USA PPC Management Service",
              "description": "Professional Amazon.com PPC management service in USA. Expert Amazon advertising campaigns, ACOS optimization, keyword management, and ROI improvement.",
              "provider": {
                "@type": "Organization",
                "name": "Technovita Solution",
                "url": "https://technovitasolution.com"
              },
              "serviceType": "E-commerce Advertising Management",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "offers": {
                "@type": "Offer",
                "description": "Complete Amazon.com PPC management service",
                "category": "Amazon Seller Services"
              }
            })
          }}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-white to-red-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-subtle text-blue-800 shadow-lg border border-white border-opacity-30 bg-white bg-opacity-90">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Amazon.com PPC Management
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">Amazon USA PPC</span>
                  <br />
                  <span className="text-white">Management Service</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Professional Amazon.com PPC management service in USA. Expert Amazon advertising campaigns, ACOS optimization, keyword management, and ROI improvement for maximum advertising efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400 to-red-400 text-white font-semibold rounded-lg hover:from-blue-300 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Optimize My PPC
                  </Link>
                  <WhatsAppButton serviceName="Amazon USA PPC Management" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <Image
                  src="/Images/amazon-usa/amazon-ppc-management-usa.webp"
                  alt="Amazon USA PPC Management Service - Professional Advertising"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                  🇺🇸 USA Expert
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Amazon.com PPC Management</span> in USA
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our Amazon USA PPC management service optimizes your Amazon.com advertising campaigns for maximum ROI. From campaign setup to ACOS optimization, we drive profitable growth for US Amazon sellers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Amazon USA PPC Management Service?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">ACOS Optimization</h4>
                      <p className="text-gray-600">Strategic ACOS management to maximize profitability and reduce advertising costs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Campaign Management</h4>
                      <p className="text-gray-600">Comprehensive campaign setup, optimization, and ongoing management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Keyword Research</h4>
                      <p className="text-gray-600">Advanced keyword research and bid optimization for maximum visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">ROI Improvement</h4>
                      <p className="text-gray-600">Data-driven strategies to improve return on advertising investment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Amazon USA PPC Management Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Campaign Audit</h4>
                        <p className="text-gray-600 text-sm">Comprehensive analysis of current PPC performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                        <p className="text-gray-600 text-sm">Custom PPC strategy based on business goals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Campaign Setup</h4>
                        <p className="text-gray-600 text-sm">Professional campaign creation and optimization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ongoing Management</h4>
                        <p className="text-gray-600 text-sm">Continuous monitoring and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Amazon USA PPC Management <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive Amazon USA PPC management service includes everything you need to optimize your Amazon.com advertising campaigns for maximum ROI and profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sponsored Products</h3>
                <p className="text-gray-600 leading-relaxed">Professional Sponsored Products campaign setup and optimization for maximum visibility.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sponsored Brands</h3>
                <p className="text-gray-600 leading-relaxed">Strategic Sponsored Brands campaigns to build brand awareness and drive sales.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Keyword Research</h3>
                <p className="text-gray-600 leading-relaxed">Advanced keyword research and analysis for optimal campaign performance.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ACOS Optimization</h3>
                <p className="text-gray-600 leading-relaxed">Strategic ACOS management to maximize profitability and reduce costs.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Management</h3>
                <p className="text-gray-600 leading-relaxed">Strategic budget allocation and management for optimal campaign performance.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Tracking</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive reporting and performance tracking for data-driven optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Optimize Your Amazon USA PPC Today"
              subtitle="Ready to maximize your Amazon.com advertising ROI? Get expert guidance from USA's leading Amazon PPC management specialists. Our team will optimize your campaigns for better performance and profitability."
              ctaText="Optimize My PPC Now"
              serviceName="Amazon USA PPC Management"
              accentColor="from-blue-400 to-red-400"
              showWhatsApp={true}
              formId="amazon-usa-ppc-management"
            />
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}
