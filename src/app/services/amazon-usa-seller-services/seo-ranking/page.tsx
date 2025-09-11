import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon USA SEO & Ranking Service | Expert Amazon.com Search Optimization - Technovita Solution',
  description: 'Professional Amazon.com SEO and ranking service in USA. Expert Amazon search optimization, keyword ranking, organic traffic growth, and search visibility improvement for US Amazon sellers.',
  keywords: [
    'amazon seo service usa',
    'amazon ranking optimization usa',
    'amazon.com seo service',
    'amazon search optimization usa',
    'amazon keyword ranking usa',
    'amazon organic traffic usa',
    'amazon search visibility usa',
    'amazon seo consultant usa',
    'amazon ranking improvement usa',
    'amazon seo strategy usa',
    'amazon search ranking usa',
    'amazon organic ranking usa',
    'amazon seo optimization usa',
    'amazon search algorithm usa',
    'amazon seo audit usa',
    'amazon ranking factors usa',
    'amazon seo management usa',
    'amazon search optimization expert usa',
    'amazon seo specialist usa',
    'amazon ranking consultant usa'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-usa-seller-services/seo-ranking'
  },
  openGraph: {
    title: 'Amazon USA SEO & Ranking Service | Expert Amazon.com Search Optimization - Technovita Solution',
    description: 'Professional Amazon.com SEO and ranking service in USA. Expert Amazon search optimization, keyword ranking, organic traffic growth, and search visibility improvement for US Amazon sellers.',
    url: 'https://technovitasolution.com/services/amazon-usa-seller-services/seo-ranking',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-usa/amazon-seo-ranking-usa.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon USA SEO & Ranking Service - Expert Amazon.com Search Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon USA SEO & Ranking Service | Expert Amazon.com Search Optimization - Technovita Solution',
    description: 'Professional Amazon.com SEO and ranking service in USA. Expert Amazon search optimization, keyword ranking, organic traffic growth, and search visibility improvement for US Amazon sellers.',
    images: ['/Images/amazon-usa/amazon-seo-ranking-usa.webp'],
  },
};

export default function AmazonUSASEORankingService() {
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
              "name": "Amazon USA SEO & Ranking Service",
              "description": "Professional Amazon.com SEO and ranking service in USA. Expert Amazon search optimization, keyword ranking, organic traffic growth, and search visibility improvement.",
              "provider": {
                "@type": "Organization",
                "name": "Technovita Solution",
                "url": "https://technovitasolution.com"
              },
              "serviceType": "E-commerce SEO Services",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "offers": {
                "@type": "Offer",
                "description": "Complete Amazon.com SEO and ranking service",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Amazon.com SEO & Ranking
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">Amazon USA SEO</span>
                  <br />
                  <span className="text-white">& Ranking Service</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Professional Amazon.com SEO and ranking service in USA. Expert Amazon search optimization, keyword ranking, organic traffic growth, and search visibility improvement for maximum organic reach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400 to-red-400 text-white font-semibold rounded-lg hover:from-blue-300 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Boost My Rankings
                  </Link>
                  <WhatsAppButton serviceName="Amazon USA SEO & Ranking" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <Image
                  src="/Images/amazon-usa/amazon-seo-ranking-usa.webp"
                  alt="Amazon USA SEO & Ranking Service - Professional Search Optimization"
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
                Complete <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Amazon.com SEO & Ranking</span> in USA
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our Amazon USA SEO and ranking service improves your organic search visibility on Amazon.com. From keyword optimization to ranking improvement, we drive sustainable organic traffic growth for US Amazon sellers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Amazon USA SEO & Ranking Service?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Keyword Optimization</h4>
                      <p className="text-gray-600">Strategic keyword research and optimization for maximum search visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ranking Improvement</h4>
                      <p className="text-gray-600">Data-driven strategies to improve search rankings and organic visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organic Traffic Growth</h4>
                      <p className="text-gray-600">Sustainable organic traffic growth through search optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Competitor Analysis</h4>
                      <p className="text-gray-600">Comprehensive competitor analysis and market positioning strategies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Amazon USA SEO Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">SEO Audit</h4>
                        <p className="text-gray-600 text-sm">Comprehensive analysis of current SEO performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Keyword Research</h4>
                        <p className="text-gray-600 text-sm">Advanced keyword research and analysis</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Content Optimization</h4>
                        <p className="text-gray-600 text-sm">Strategic content optimization for better rankings</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Performance Monitoring</h4>
                        <p className="text-gray-600 text-sm">Ongoing monitoring and optimization</p>
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
                Amazon USA SEO & Ranking <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive Amazon USA SEO and ranking service includes everything you need to improve your organic search visibility and drive sustainable traffic growth on Amazon.com.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Keyword Research</h3>
                <p className="text-gray-600 leading-relaxed">Advanced keyword research and analysis for optimal search visibility on Amazon.com.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ranking Improvement</h3>
                <p className="text-gray-600 leading-relaxed">Strategic optimization to improve search rankings and organic visibility.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search Optimization</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive search optimization strategies for better discoverability.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor Analysis</h3>
                <p className="text-gray-600 leading-relaxed">Detailed competitor analysis and market positioning strategies.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive analytics and performance tracking for data-driven optimization.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Optimization</h3>
                <p className="text-gray-600 leading-relaxed">Continuous optimization and refinement based on performance data and trends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Boost Your Amazon USA Rankings Today"
              subtitle="Ready to improve your Amazon.com search rankings? Get expert guidance from USA's leading Amazon SEO specialists. Our team will optimize your listings for better organic visibility and traffic."
              ctaText="Boost My Rankings Now"
              serviceName="Amazon USA SEO & Ranking"
              accentColor="from-blue-400 to-red-400"
              showWhatsApp={true}
              formId="amazon-usa-seo-ranking"
            />
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}
