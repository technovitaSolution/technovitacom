import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK Listing Optimization Service | Expert Amazon.co.uk Product Listing SEO - Technovita Solution',
  description: 'Professional Amazon UK listing optimization service. Expert Amazon.co.uk product listing creation, SEO optimization, keyword research, title enhancement, image optimization, A+ Content creation for maximum visibility and conversions.',
  keywords: [
    'amazon uk listing optimization',
    'amazon.co.uk listing optimization',
    'amazon uk product listing service',
    'amazon uk seo optimization',
    'amazon.co.uk product listing',
    'amazon uk keyword research',
    'amazon uk title optimization',
    'amazon uk image optimization',
    'amazon uk a+ content',
    'amazon uk enhanced content',
    'amazon uk listing seo',
    'amazon uk product optimization',
    'amazon.co.uk seo services',
    'amazon uk listing creation',
    'amazon uk product description',
    'amazon uk bullet points',
    'amazon uk search optimization',
    'amazon uk conversion optimization',
    'amazon uk listing improvement',
    'amazon uk product visibility'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/listing-optimization'
  },
  openGraph: {
    title: 'Amazon UK Listing Optimization Service | Expert Amazon.co.uk Product Listing SEO - Technovita Solution',
    description: 'Professional Amazon UK listing optimization service. Expert Amazon.co.uk product listing creation, SEO optimization, keyword research, title enhancement, image optimization, A+ Content creation for maximum visibility and conversions.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/listing-optimization',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-catalogue/amazon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK Listing Optimization Service - Expert Product Listing SEO',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK Listing Optimization Service | Expert Amazon.co.uk Product Listing SEO - Technovita Solution',
    description: 'Professional Amazon UK listing optimization service. Expert Amazon.co.uk product listing creation, SEO optimization, keyword research, title enhancement, image optimization, A+ Content creation for maximum visibility and conversions.',
    images: ['/Images/amazon-catalogue/amazon.webp'],
  },
};

export default function AmazonUKListingOptimization() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Amazon.co.uk Listing Optimization
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Listing Optimization</span> Service
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Maximize your product visibility and conversions on Amazon.co.uk with our expert listing optimization service. Professional SEO, compelling content, and conversion-focused optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#optimization-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Optimize My Listings
                </Link>
                <WhatsAppButton serviceName="Amazon UK Listing Optimization" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="optimization-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Optimize Your Amazon UK Listings Today"
              subtitle="Ready to boost your Amazon.co.uk product visibility and sales? Our expert optimization service will transform your listings into high-converting, search-optimized powerhouses that dominate UK search results."
              ctaText="Get My Listings Optimized"
              serviceName="Amazon UK Listing Optimization"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-listing-optimization"
            />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK Listing Optimization</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive optimization service covers every element of your Amazon.co.uk product listings to maximize visibility, traffic, and conversions in the UK marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'UK Keyword Research',
                  description: 'In-depth keyword research specifically for UK customers and search behavior on Amazon.co.uk',
                  icon: '🔍',
                  features: ['UK-specific keywords', 'Search volume analysis', 'Competitor research', 'Long-tail optimization']
                },
                {
                  title: 'Title Optimization',
                  description: 'Compelling, SEO-optimized product titles that capture attention and drive clicks',
                  icon: '✏️',
                  features: ['Keyword-rich titles', 'UK compliance', 'Character optimization', 'Brand positioning']
                },
                {
                  title: 'Bullet Points & Description',
                  description: 'Persuasive bullet points and descriptions that highlight benefits and drive conversions',
                  icon: '📝',
                  features: ['Benefit-focused copy', 'SEO optimization', 'UK market appeal', 'Conversion optimization']
                },
                {
                  title: 'Image Optimization',
                  description: 'Professional product images that meet Amazon UK standards and boost conversions',
                  icon: '📸',
                  features: ['Main image optimization', 'Lifestyle images', 'Infographic creation', 'UK compliance']
                },
                {
                  title: 'A+ Content Creation',
                  description: 'Enhanced brand content that tells your story and increases conversion rates',
                  icon: '⭐',
                  features: ['Brand storytelling', 'Visual content', 'Comparison charts', 'UK market focus']
                },
                {
                  title: 'Backend Optimization',
                  description: 'Hidden keyword optimization and search term maximization for better discoverability',
                  icon: '⚙️',
                  features: ['Search terms', 'Category optimization', 'Attribute completion', 'Hidden keywords']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Results You Can Expect</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK listing optimization delivers measurable improvements in visibility, traffic, and sales
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '150%+', label: 'Search Visibility Increase' },
                { metric: '85%+', label: 'Click-Through Rate Boost' },
                { metric: '200%+', label: 'Conversion Improvement' },
                { metric: '120%+', label: 'Sales Growth Average' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.metric}</div>
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

