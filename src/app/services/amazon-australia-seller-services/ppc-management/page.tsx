import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon Australia PPC Management Service | Expert Amazon.com.au Advertising - Technovita Solution',
  description: 'Professional Amazon.com.au PPC management service in Australia. Expert sponsored ads, keyword research, ACOS optimization & campaign management. Boost your Amazon Australia advertising ROI and sales.',
  keywords: [
    'amazon australia ppc management',
    'amazon.com.au advertising',
    'amazon australia sponsored ads',
    'amazon ppc management australia',
    'amazon australia keyword research',
    'amazon acos optimization australia',
    'amazon campaign management australia',
    'amazon advertising australia',
    'amazon.com.au ppc service',
    'amazon australia ad optimization',
    'amazon sponsored products australia',
    'amazon australia advertising roi',
    'amazon ppc expert australia',
    'amazon advertising management australia',
    'amazon australia campaign optimization'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-australia-seller-services/ppc-management'
  },
  openGraph: {
    title: 'Amazon Australia PPC Management Service | Expert Amazon.com.au Advertising - Technovita Solution',
    description: 'Professional Amazon.com.au PPC management service in Australia. Expert sponsored ads, keyword research, ACOS optimization & campaign management. Boost your Amazon Australia advertising ROI and sales.',
    url: 'https://technovitasolution.com/services/amazon-australia-seller-services/ppc-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-australia/amazon-australia-ppc-management.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Australia PPC Management Service - Expert Amazon.com.au Advertising',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Australia PPC Management Service | Expert Amazon.com.au Advertising - Technovita Solution',
    description: 'Professional Amazon.com.au PPC management service in Australia. Expert sponsored ads, keyword research, ACOS optimization & campaign management. Boost your Amazon Australia advertising ROI and sales.',
    images: ['/Images/amazon-australia/amazon-australia-ppc-management.webp'],
  },
};

export default function AmazonAustraliaPPCManagement() {
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
            "name": "Amazon Australia PPC Management Service",
            "description": "Professional Amazon.com.au PPC management service in Australia. Expert sponsored ads, keyword research, ACOS optimization & campaign management.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Advertising Management",
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "offers": {
              "@type": "Offer",
              "description": "Expert Amazon.com.au PPC management and advertising campaigns to boost visibility and reduce advertising costs",
              "category": "Amazon Seller Services"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-white to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-subtle text-red-800 shadow-lg border border-white border-opacity-30 bg-white bg-opacity-90">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Amazon.com.au PPC Expert
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-blue-300 bg-clip-text text-transparent">Amazon Australia</span>
                <br />
                <span className="text-white">PPC Management</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Professional Amazon.com.au PPC management service. Expert sponsored ads, keyword research, ACOS optimization, and campaign management to boost your Amazon Australia advertising ROI and sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-blue-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Boost My PPC Campaigns
                </Link>
                <WhatsAppButton serviceName="Amazon Australia PPC Management" className="border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="/Images/amazon-australia/amazon-australia-ppc-management.webp"
                alt="Amazon Australia PPC Management Service - Professional Advertising"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                🇦🇺 PPC Expert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-blue-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Complete Amazon.com.au PPC Management
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Amazon Australia PPC Management</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia PPC management service maximizes your Amazon.com.au advertising ROI through expert campaign optimization, strategic keyword research, and data-driven ACOS management. We help you achieve better visibility and higher sales with lower advertising costs.
            </p>
          </div>

          {/* PPC Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sponsored Ads</h3>
              <p className="text-gray-600 text-sm">Strategic sponsored product, brand, and display campaigns</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Keyword Research</h3>
              <p className="text-gray-600 text-sm">Comprehensive Australian market keyword analysis and targeting</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ACOS Optimization</h3>
              <p className="text-gray-600 text-sm">Data-driven ACOS reduction and ROI improvement strategies</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Management</h3>
              <p className="text-gray-600 text-sm">Ongoing campaign monitoring, optimization, and performance tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">PPC Management Features</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia PPC management service provides comprehensive advertising solutions to maximize your Amazon.com.au campaign performance and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sponsored Ads Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sponsored Products campaigns
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sponsored Brands campaigns
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sponsored Display campaigns
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Keyword Research & Targeting</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Australian market keyword research
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Competitor keyword analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Long-tail keyword targeting
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ACOS Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bid optimization strategies
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Negative keyword management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-blue-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Why Choose Our PPC Management
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Amazon Australia PPC Management</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia PPC management service delivers measurable results through data-driven optimization strategies, ensuring your Amazon.com.au advertising campaigns achieve maximum ROI and sales growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Lower ACOS</h3>
              <p className="text-gray-600 leading-relaxed">Average 30% reduction in ACOS while maintaining or improving sales volume</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Higher ROI</h3>
              <p className="text-gray-600 leading-relaxed">Improved return on advertising spend with optimized campaign performance</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Data-Driven Results</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive reporting and analytics for informed decision making</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Boost Your Amazon Australia PPC Performance Today"
            subtitle="Ready to maximize your Amazon.com.au advertising ROI? Get expert PPC management from Australia's leading Amazon advertising specialists. We'll optimize your campaigns for better performance and lower costs."
            ctaText="Get My PPC Optimized"
            serviceName="Amazon Australia PPC Management"
            accentColor="from-yellow-400 to-blue-400"
            showWhatsApp={true}
            formId="amazon-australia-ppc-management-contact"
          />
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}
