import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Amazon Canada Listing Optimization | Expert Amazon.ca Product Listing & SEO Services - Technovita Solution',
  description: 'Professional Amazon Canada listing optimization services. Expert Amazon.ca product listing creation, SEO optimization, keyword research, A+ content, and conversion optimization. Boost rankings and sales with Technovita Solution.',
  keywords: [
    'amazon canada listing optimization',
    'amazon.ca product listing services',
    'amazon canada seo optimization',
    'amazon listing creation canada',
    'amazon product optimization canada',
    'amazon keyword research canada',
    'amazon.ca listing optimization',
    'amazon canada product listing',
    'amazon listing seo canada',
    'amazon.ca seo services',
    'amazon product listing canada',
    'amazon listing optimization services',
    'amazon canada keyword optimization',
    'amazon.ca product optimization',
    'amazon listing creation services',
    'amazon canada a+ content',
    'amazon.ca enhanced content',
    'amazon product description canada',
    'amazon listing title optimization',
    'amazon canada conversion optimization',
    'amazon.ca listing management',
    'amazon product listing services',
    'amazon canada seo expert',
    'amazon.ca listing specialist',
    'amazon listing optimization expert'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/listing-optimization'
  },
  openGraph: {
    title: 'Amazon Canada Listing Optimization | Expert Amazon.ca Product Listing & SEO Services - Technovita Solution',
    description: 'Professional Amazon Canada listing optimization services. Expert Amazon.ca product listing creation, SEO optimization, keyword research, A+ content, and conversion optimization. Boost rankings and sales with Technovita Solution.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/listing-optimization',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Canada Listing Optimization - Expert Amazon.ca Product Listing & SEO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Canada Listing Optimization | Expert Amazon.ca Product Listing & SEO Services - Technovita Solution',
    description: 'Professional Amazon Canada listing optimization services. Expert Amazon.ca product listing creation, SEO optimization, keyword research, A+ content, and conversion optimization. Boost rankings and sales with Technovita Solution.',
    images: ['/Images/account-management/account-management-services.webp'],
  },

};

export default function AmazonListingOptimizationCanada() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Amazon Canada Listing Optimization",
            "description": "Professional Amazon Canada listing optimization services. Expert Amazon.ca product listing creation, SEO optimization, keyword research, A+ content, and conversion optimization.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Listing Optimization",

            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Amazon Canada Listing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ca Product Listing Creation",
                    "description": "Professional Amazon.ca product listing creation and setup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ca SEO Optimization",
                    "description": "Advanced SEO optimization for Amazon.ca product listings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ca Keyword Research",
                    "description": "Comprehensive keyword research and optimization for Amazon Canada"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ca A+ Content Creation",
                    "description": "Professional A+ content and enhanced brand content creation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ca Conversion Optimization",
                    "description": "Conversion-focused optimization for Amazon.ca product listings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ca Title & Description Optimization",
                    "description": "Professional title and description optimization for maximum visibility"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "200"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-700 shadow-lg border border-white border-opacity-30"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Professional Amazon.ca Listing Optimization
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
              Amazon Canada <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Listing Optimization</span>
            </h1>
            <p className="text-xl mb-8 text-cyan-100 leading-relaxed max-w-3xl mx-auto">
              Professional Amazon.ca product listing optimization services. Boost your rankings, increase conversions, and maximize sales with SEO-optimized listings tailored for the Canadian marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#listing-service"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Optimize My Listings
              </Link>
              <WhatsAppButton serviceName="Amazon Canada Listing Optimization" className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Top */}
      <section className="py-20 bg-white" id="listing-service">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Optimize Your Amazon Canada Listings Today"
            subtitle="Ready to boost your Amazon.ca rankings and sales? Our listing optimization experts will transform your product listings with proven SEO strategies and conversion-focused content that drives results."
            ctaText="Get My Listings Optimized"
            serviceName="Amazon Canada Listing Optimization"
            
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-listing-top"
          />
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Amazon Canada Listing Optimization</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our expert listing optimization services are designed to maximize your product visibility, improve search rankings, and increase conversion rates on Amazon.ca.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Proven Results:</strong> Our Amazon Canada listing optimization has helped clients achieve an average <strong>200% increase in organic traffic</strong> and <strong>75% boost in conversion rates</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Listing Optimization Works</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Advanced Keyword Research</h4>
                    <p className="text-gray-600 text-sm">Canada-specific keyword analysis using premium tools and local market insights</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Conversion-Focused Content</h4>
                    <p className="text-gray-600 text-sm">Compelling product descriptions that address Canadian consumer preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Image Optimization</h4>
                    <p className="text-gray-600 text-sm">Professional image enhancement and infographic creation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">A+ Content Creation</h4>
                    <p className="text-gray-600 text-sm">Enhanced brand content that tells your story and builds trust</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Optimization Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Listing Audit</h4>
                    <p className="text-gray-600 text-sm">Comprehensive analysis of current listing performance</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Keyword Research</h4>
                    <p className="text-gray-600 text-sm">In-depth Canadian market keyword analysis and selection</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Optimization</h4>
                    <p className="text-gray-600 text-sm">Title, bullet points, and description optimization</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Image Enhancement</h4>
                    <p className="text-gray-600 text-sm">Professional image optimization and infographic creation</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Launch & Monitor</h4>
                    <p className="text-gray-600 text-sm">Implementation and performance tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Listing Optimization Services</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Every element of your Amazon.ca product listing optimized for maximum visibility and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Title Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Title Optimization</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• High-impact keyword integration</li>
                <li>• Canadian spelling & terminology</li>
                <li>• Brand positioning optimization</li>
                <li>• Character limit maximization</li>
              </ul>
            </div>

            {/* Bullet Points */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Bullet Points</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Benefit-focused messaging</li>
                <li>• Feature highlighting</li>
                <li>• Canadian consumer insights</li>
                <li>• Conversion optimization</li>
              </ul>
            </div>

            {/* Product Description */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Description</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Compelling storytelling</li>
                <li>• SEO keyword integration</li>
                <li>• Technical specifications</li>
                <li>• Trust-building elements</li>
              </ul>
            </div>

            {/* Image Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Image Optimization</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Professional image enhancement</li>
                <li>• Infographic creation</li>
                <li>• Lifestyle photography</li>
                <li>• Mobile optimization</li>
              </ul>
            </div>

            {/* Backend Keywords */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Backend Keywords</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Hidden keyword optimization</li>
                <li>• Search term maximization</li>
                <li>• Competitor keyword analysis</li>
                <li>• Long-tail keyword targeting</li>
              </ul>
            </div>

            {/* A+ Content */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">A+ Content</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Enhanced brand storytelling</li>
                <li>• Visual content creation</li>
                <li>• Comparison charts</li>
                <li>• Brand registry optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Boost Your Amazon Canada Rankings?</h4>
              <p className="text-gray-700 mb-6">Transform your product listings with professional optimization that drives more traffic, higher rankings, and increased sales on Amazon.ca.</p>
              <WhatsAppButton serviceName="Amazon Canada Listing Optimization" className="bg-blue-600 hover:bg-blue-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Amazon Canada Listings Today</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to see dramatic improvements in your Amazon.ca performance? Our listing optimization experts will transform your products with proven strategies that deliver results.
            </p>
          </div>
          
          <ContactForm
            title="Get Professional Listing Optimization"
            subtitle="Transform your Amazon.ca product listings with expert optimization. Our team will enhance your titles, descriptions, images, and keywords to maximize visibility and conversions on the Canadian marketplace."
            ctaText="Optimize My Listings Now"
            serviceName="Amazon Canada Professional Listing Optimization"
            
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-listing-final"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">Maximize Your Amazon Canada Potential</h4>
            <p className="text-xl mb-6">
              Don't let poor listings hold back your success. Get professional optimization that drives real results on Amazon.ca.
            </p>
            <div className="text-lg font-semibold mb-4">
              📞 <strong>Call Now:</strong> +91 7042163504<br/>
              📧 <strong>Email:</strong> info@technovitasolution.com
            </div>
            <p className="text-cyan-100">
              Professional listing optimization that converts browsers into buyers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}