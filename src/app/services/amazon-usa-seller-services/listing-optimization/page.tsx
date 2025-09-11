import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon USA Listing Optimization Service | Expert Amazon.com Product Optimization - Technovita Solution',
  description: 'Professional Amazon.com listing optimization service in USA. Expert product listing creation, SEO optimization, A+ content, and conversion optimization for US Amazon sellers.',
  keywords: [
    'amazon listing optimization usa',
    'amazon product listing optimization usa',
    'amazon.com listing optimization',
    'amazon seo optimization usa',
    'amazon product optimization usa',
    'amazon listing creation usa',
    'amazon a+ content usa',
    'amazon product title optimization usa',
    'amazon bullet points optimization usa',
    'amazon product images optimization usa',
    'amazon listing conversion usa',
    'amazon product visibility usa',
    'amazon listing ranking usa',
    'amazon product description optimization usa',
    'amazon keyword optimization usa',
    'amazon listing audit usa',
    'amazon product listing service usa',
    'amazon listing management usa',
    'amazon product optimization consultant usa',
    'amazon listing optimization expert usa'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-usa-seller-services/listing-optimization'
  },
  openGraph: {
    title: 'Amazon USA Listing Optimization Service | Expert Amazon.com Product Optimization - Technovita Solution',
    description: 'Professional Amazon.com listing optimization service in USA. Expert product listing creation, SEO optimization, A+ content, and conversion optimization for US Amazon sellers.',
    url: 'https://technovitasolution.com/services/amazon-usa-seller-services/listing-optimization',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-usa/amazon-listing-optimization-usa.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon USA Listing Optimization Service - Expert Amazon.com Product Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon USA Listing Optimization Service | Expert Amazon.com Product Optimization - Technovita Solution',
    description: 'Professional Amazon.com listing optimization service in USA. Expert product listing creation, SEO optimization, A+ content, and conversion optimization for US Amazon sellers.',
    images: ['/Images/amazon-usa/amazon-listing-optimization-usa.webp'],
  },
};

export default function AmazonUSAListingOptimizationService() {
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
              "name": "Amazon USA Listing Optimization Service",
              "description": "Professional Amazon.com listing optimization service in USA. Expert product listing creation, SEO optimization, A+ content, and conversion optimization.",
              "provider": {
                "@type": "Organization",
                "name": "Technovita Solution",
                "url": "https://technovitasolution.com"
              },
              "serviceType": "E-commerce Listing Optimization",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "offers": {
                "@type": "Offer",
                "description": "Complete Amazon.com listing optimization service",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Amazon.com Listing Optimization
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">Amazon USA Listing</span>
                  <br />
                  <span className="text-white">Optimization Service</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Professional Amazon.com listing optimization service in USA. Expert product listing creation, SEO optimization, A+ content, and conversion optimization for maximum visibility and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400 to-red-400 text-white font-semibold rounded-lg hover:from-blue-300 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Optimize My Listings
                  </Link>
                  <WhatsAppButton serviceName="Amazon USA Listing Optimization" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <Image
                  src="/Images/amazon-usa/amazon-listing-optimization-usa.webp"
                  alt="Amazon USA Listing Optimization Service - Professional Optimization"
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
                Complete <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Amazon.com Listing Optimization</span> in USA
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our Amazon USA listing optimization service transforms your product listings into high-converting, search-optimized pages that drive sales and improve rankings on Amazon.com.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Amazon USA Listing Optimization Service?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">SEO Optimization</h4>
                      <p className="text-gray-600">Advanced keyword research and optimization for maximum search visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Conversion Optimization</h4>
                      <p className="text-gray-600">Strategic listing elements designed to maximize conversion rates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">A+ Content Creation</h4>
                      <p className="text-gray-600">Professional A+ content and enhanced brand content development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Image Optimization</h4>
                      <p className="text-gray-600">Professional product photography and image optimization for better conversions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Amazon USA Listing Optimization Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Listing Audit</h4>
                        <p className="text-gray-600 text-sm">Comprehensive analysis of current listing performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Keyword Research</h4>
                        <p className="text-gray-600 text-sm">Advanced keyword research for US market</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Content Optimization</h4>
                        <p className="text-gray-600 text-sm">Title, bullet points, and description optimization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">A+ Content</h4>
                        <p className="text-gray-600 text-sm">Professional A+ content creation and implementation</p>
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
                Amazon USA Listing Optimization <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive Amazon USA listing optimization service includes everything you need to create high-performing product listings that drive sales and improve rankings on Amazon.com.
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
                <p className="text-gray-600 leading-relaxed">Advanced keyword research and analysis for maximum search visibility on Amazon.com.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Title Optimization</h3>
                <p className="text-gray-600 leading-relaxed">Strategic title optimization with high-converting keywords and compelling copy.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bullet Points</h3>
                <p className="text-gray-600 leading-relaxed">Compelling bullet points that highlight key features and benefits effectively.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Image Optimization</h3>
                <p className="text-gray-600 leading-relaxed">Professional product photography and image optimization for better conversions.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">A+ Content</h3>
                <p className="text-gray-600 leading-relaxed">Professional A+ content creation to enhance brand storytelling and conversions.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Tracking</h3>
                <p className="text-gray-600 leading-relaxed">Ongoing monitoring and optimization based on performance metrics and analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Optimize Your Amazon USA Listings Today"
              subtitle="Ready to maximize your Amazon.com listing performance? Get expert guidance from USA's leading Amazon listing optimization specialists. Our team will transform your listings for better visibility and sales."
              ctaText="Optimize My Listings Now"
              serviceName="Amazon USA Listing Optimization"
              accentColor="from-blue-400 to-red-400"
              showWhatsApp={true}
              formId="amazon-usa-listing-optimization"
            />
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}
