import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon Australia SEO & Ranking Service | Expert Amazon.com.au Search Optimization - Technovita Solution',
  description: 'Professional Amazon.com.au SEO and ranking service in Australia. Expert keyword research, search optimization, competitor analysis & ranking improvement. Boost your Amazon Australia product visibility and organic traffic.',
  keywords: [
    'amazon australia seo service',
    'amazon.com.au seo optimization',
    'amazon australia ranking service',
    'amazon seo australia',
    'amazon australia keyword research',
    'amazon search optimization australia',
    'amazon australia competitor analysis',
    'amazon ranking improvement australia',
    'amazon.com.au seo expert',
    'amazon australia organic traffic',
    'amazon product ranking australia',
    'amazon australia search visibility',
    'amazon seo management australia',
    'amazon australia search ranking',
    'amazon organic optimization australia'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-australia-seller-services/seo-ranking'
  },
  openGraph: {
    title: 'Amazon Australia SEO & Ranking Service | Expert Amazon.com.au Search Optimization - Technovita Solution',
    description: 'Professional Amazon.com.au SEO and ranking service in Australia. Expert keyword research, search optimization, competitor analysis & ranking improvement. Boost your Amazon Australia product visibility and organic traffic.',
    url: 'https://technovitasolution.com/services/amazon-australia-seller-services/seo-ranking',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-australia/amazon-australia-seo-ranking.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Australia SEO & Ranking Service - Expert Amazon.com.au Search Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Australia SEO & Ranking Service | Expert Amazon.com.au Search Optimization - Technovita Solution',
    description: 'Professional Amazon.com.au SEO and ranking service in Australia. Expert keyword research, search optimization, competitor analysis & ranking improvement. Boost your Amazon Australia product visibility and organic traffic.',
    images: ['/Images/amazon-australia/amazon-australia-seo-ranking.webp'],
  },
};

export default function AmazonAustraliaSEORanking() {
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
            "name": "Amazon Australia SEO & Ranking Service",
            "description": "Professional Amazon.com.au SEO and ranking service in Australia. Expert keyword research, search optimization, competitor analysis & ranking improvement.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce SEO Services",
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "offers": {
              "@type": "Offer",
              "description": "Advanced Amazon.com.au SEO strategies and keyword ranking services to improve product visibility and organic traffic",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Amazon.com.au SEO Expert
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-blue-300 bg-clip-text text-transparent">Amazon Australia</span>
                <br />
                <span className="text-white">SEO & Ranking</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Professional Amazon.com.au SEO and ranking service. Expert keyword research, search optimization, competitor analysis, and ranking improvement to boost your Amazon Australia product visibility and organic traffic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-blue-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Boost My Rankings
                </Link>
                <WhatsAppButton serviceName="Amazon Australia SEO & Ranking" className="border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="/Images/amazon-australia/amazon-australia-seo-ranking.webp"
                alt="Amazon Australia SEO & Ranking Service - Professional Search Optimization"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                🇦🇺 SEO Expert
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
              Complete Amazon.com.au SEO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Amazon Australia SEO & Ranking</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia SEO and ranking service improves your Amazon.com.au product visibility through strategic keyword optimization, competitor analysis, and ranking improvement techniques. We help you achieve higher organic rankings and increased organic traffic.
            </p>
          </div>

          {/* SEO Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Keyword Research</h3>
              <p className="text-gray-600 text-sm">Comprehensive Australian market keyword analysis and targeting</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ranking Improvement</h3>
              <p className="text-gray-600 text-sm">Strategic optimization to improve search result rankings</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Optimization</h3>
              <p className="text-gray-600 text-sm">On-page and off-page optimization for better search visibility</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitor Analysis</h3>
              <p className="text-gray-600 text-sm">In-depth analysis of competitor strategies and opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">SEO & Ranking Features</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia SEO and ranking service provides comprehensive search optimization solutions to maximize your Amazon.com.au product visibility and organic traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Keyword Research & Analysis</h3>
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
                  Search volume analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Long-tail keyword identification
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ranking Improvement</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Search ranking optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Algorithm compliance
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance tracking
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor Analysis</h3>
              <ul className="text-gray-600 space-y-2">
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
                  Market gap identification
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Strategic positioning
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
              Why Choose Our SEO Service
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Amazon Australia SEO & Ranking</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia SEO and ranking service delivers measurable improvements in search visibility and organic traffic through proven optimization strategies and data-driven approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Higher Rankings</h3>
              <p className="text-gray-600 leading-relaxed">Average 50% improvement in search rankings within 8-12 weeks of optimization</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Increased Visibility</h3>
              <p className="text-gray-600 leading-relaxed">Enhanced product visibility in Amazon.com.au search results and category pages</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Organic Traffic Growth</h3>
              <p className="text-gray-600 leading-relaxed">Significant increase in organic traffic and reduced dependency on paid advertising</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Boost Your Amazon Australia Search Rankings Today"
            subtitle="Ready to improve your Amazon.com.au search visibility and organic traffic? Get expert SEO and ranking optimization from Australia's leading Amazon specialists. We'll help you achieve higher rankings and better organic performance."
            ctaText="Get My Rankings Improved"
            serviceName="Amazon Australia SEO & Ranking"
            accentColor="from-yellow-400 to-blue-400"
            showWhatsApp={true}
            formId="amazon-australia-seo-ranking-contact"
          />
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}
