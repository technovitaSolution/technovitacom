import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK PPC Management Service | Expert Amazon.co.uk Advertising & Sponsored Ads - Technovita Solution',
  description: 'Professional Amazon UK PPC management service. Expert Amazon.co.uk advertising campaigns, Sponsored Products, Sponsored Brands, keyword optimization, ACOS reduction, and ROI maximization for UK marketplace success.',
  keywords: [
    'amazon uk ppc management',
    'amazon.co.uk ppc service',
    'amazon uk advertising service',
    'amazon uk sponsored ads',
    'amazon uk sponsored products',
    'amazon uk sponsored brands',
    'amazon uk advertising campaign',
    'amazon uk ppc optimization',
    'amazon uk keyword bidding',
    'amazon uk acos optimization',
    'amazon.co.uk advertising management',
    'amazon uk ppc consultant',
    'amazon uk ad management',
    'amazon uk campaign optimization',
    'amazon uk advertising agency',
    'amazon uk ppc expert',
    'amazon uk advertising strategy',
    'amazon uk roi optimization',
    'amazon uk ad spend optimization',
    'amazon uk ppc services'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/ppc-management'
  },
  openGraph: {
    title: 'Amazon UK PPC Management Service | Expert Amazon.co.uk Advertising & Sponsored Ads - Technovita Solution',
    description: 'Professional Amazon UK PPC management service. Expert Amazon.co.uk advertising campaigns, Sponsored Products, Sponsored Brands, keyword optimization, ACOS reduction, and ROI maximization for UK marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/ppc-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-catalogue/amazon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK PPC Management Service - Expert Advertising & Sponsored Ads',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK PPC Management Service | Expert Amazon.co.uk Advertising & Sponsored Ads - Technovita Solution',
    description: 'Professional Amazon UK PPC management service. Expert Amazon.co.uk advertising campaigns, Sponsored Products, Sponsored Brands, keyword optimization, ACOS reduction, and ROI maximization for UK marketplace success.',
    images: ['/Images/amazon-catalogue/amazon.webp'],
  },
};

export default function AmazonUKPPCManagement() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-green-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Amazon.co.uk PPC Management
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">PPC Management</span> Service
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto">
                Maximize your Amazon.co.uk advertising ROI with our expert PPC management. Professional campaign optimization, ACOS reduction, and profitable growth strategies for the UK market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#ppc-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Optimize My PPC
                </Link>
                <WhatsAppButton serviceName="Amazon UK PPC Management" className="border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="ppc-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Scale Your Amazon UK Advertising Today"
              subtitle="Ready to reduce your ACOS and maximize ROI on Amazon.co.uk? Our PPC experts will optimize your campaigns for profitable growth and sustainable success in the UK marketplace."
              ctaText="Get My PPC Optimized"
              serviceName="Amazon UK PPC Management"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-ppc-management"
            />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK PPC Management</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive PPC management service optimizes every aspect of your Amazon.co.uk advertising to deliver maximum ROI and sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Campaign Strategy',
                  description: 'Data-driven campaign strategies tailored for UK market success',
                  icon: '🎯',
                  features: ['UK market analysis', 'Competitor research', 'Goal setting', 'Budget allocation']
                },
                {
                  title: 'Keyword Research',
                  description: 'Comprehensive UK keyword research and bid optimization',
                  icon: '🔍',
                  features: ['UK search terms', 'Negative keywords', 'Bid management', 'Match type optimization']
                },
                {
                  title: 'Campaign Creation',
                  description: 'Professional setup of Sponsored Products, Brands, and Display campaigns',
                  icon: '🚀',
                  features: ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display', 'Video ads']
                },
                {
                  title: 'ACOS Optimization',
                  description: 'Continuous optimization to reduce advertising costs and improve profitability',
                  icon: '📊',
                  features: ['ACOS reduction', 'Profit maximization', 'Bid optimization', 'Performance tracking']
                },
                {
                  title: 'Performance Monitoring',
                  description: '24/7 monitoring and real-time adjustments for optimal performance',
                  icon: '📈',
                  features: ['Real-time monitoring', 'Daily optimizations', 'Performance alerts', 'Trend analysis']
                },
                {
                  title: 'Reporting & Analytics',
                  description: 'Detailed reporting and insights to track your advertising success',
                  icon: '📋',
                  features: ['Weekly reports', 'ROI analysis', 'Conversion tracking', 'Growth insights']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">PPC Results That Drive Growth</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK PPC management delivers consistent improvements in advertising performance and profitability
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '45%', label: 'Average ACOS Reduction' },
                { metric: '180%', label: 'ROI Improvement' },
                { metric: '250%', label: 'Sales Growth' },
                { metric: '95%', label: 'Client Retention Rate' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}

