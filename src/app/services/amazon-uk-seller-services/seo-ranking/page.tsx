import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK SEO & Ranking Service | Expert Amazon.co.uk Search Optimization - Technovita Solution',
  description: 'Professional Amazon UK SEO and ranking service. Expert Amazon.co.uk search optimization, keyword ranking, organic visibility improvement, competitor analysis, and search algorithm optimization for UK marketplace dominance.',
  keywords: [
    'amazon uk seo service',
    'amazon.co.uk seo optimization',
    'amazon uk ranking service',
    'amazon uk search optimization',
    'amazon uk keyword ranking',
    'amazon.co.uk seo expert',
    'amazon uk organic ranking',
    'amazon uk search visibility',
    'amazon uk seo consultant',
    'amazon uk product ranking',
    'amazon.co.uk search ranking',
    'amazon uk ranking improvement',
    'amazon uk seo strategy',
    'amazon uk algorithm optimization',
    'amazon uk competitor analysis',
    'amazon uk keyword research',
    'amazon uk organic traffic',
    'amazon uk search results',
    'amazon uk ranking factors',
    'amazon uk seo services'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/seo-ranking'
  },
  openGraph: {
    title: 'Amazon UK SEO & Ranking Service | Expert Amazon.co.uk Search Optimization - Technovita Solution',
    description: 'Professional Amazon UK SEO and ranking service. Expert Amazon.co.uk search optimization, keyword ranking, organic visibility improvement, competitor analysis, and search algorithm optimization for UK marketplace dominance.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/seo-ranking',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-catalogue/amazon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK SEO & Ranking Service - Expert Search Optimization',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK SEO & Ranking Service | Expert Amazon.co.uk Search Optimization - Technovita Solution',
    description: 'Professional Amazon UK SEO and ranking service. Expert Amazon.co.uk search optimization, keyword ranking, organic visibility improvement, competitor analysis, and search algorithm optimization for UK marketplace dominance.',
    images: ['/Images/amazon-catalogue/amazon.webp'],
  },
};

export default function AmazonUKSEORanking() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-purple-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Amazon.co.uk SEO & Ranking
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">SEO & Ranking</span> Service
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Dominate Amazon.co.uk search results with our expert SEO and ranking optimization. Boost organic visibility, improve keyword rankings, and drive more traffic to your products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#seo-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Boost My Rankings
                </Link>
                <WhatsAppButton serviceName="Amazon UK SEO & Ranking" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="seo-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Dominate Amazon UK Search Results"
              subtitle="Ready to rank higher on Amazon.co.uk and drive more organic traffic? Our SEO experts will optimize your products for maximum visibility and sustainable growth in UK search results."
              ctaText="Improve My Rankings"
              serviceName="Amazon UK SEO & Ranking"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-seo-ranking"
            />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK SEO Optimization</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive SEO service optimizes every ranking factor to improve your Amazon.co.uk search visibility and drive sustainable organic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'UK Keyword Research',
                  description: 'In-depth research of high-converting keywords specific to UK customers',
                  icon: '🔍',
                  features: ['UK search behavior', 'Competition analysis', 'Long-tail keywords', 'Search volume data']
                },
                {
                  title: 'On-Page SEO',
                  description: 'Complete optimization of product listings for Amazon UK algorithm',
                  icon: '📝',
                  features: ['Title optimization', 'Bullet points', 'Descriptions', 'Backend keywords']
                },
                {
                  title: 'Competitor Analysis',
                  description: 'Deep analysis of top competitors to identify ranking opportunities',
                  icon: '🎯',
                  features: ['Competitor keywords', 'Pricing analysis', 'Content gaps', 'Ranking strategies']
                },
                {
                  title: 'Algorithm Optimization',
                  description: 'Optimization for Amazon UK A9 algorithm ranking factors',
                  icon: '⚙️',
                  features: ['Relevancy signals', 'Performance metrics', 'Conversion factors', 'Sales velocity']
                },
                {
                  title: 'Ranking Monitoring',
                  description: 'Continuous tracking of keyword rankings and search visibility',
                  icon: '📊',
                  features: ['Daily rank tracking', 'Visibility reports', 'Progress monitoring', 'Trend analysis']
                },
                {
                  title: 'Content Strategy',
                  description: 'Strategic content optimization for improved search performance',
                  icon: '📋',
                  features: ['Content optimization', 'Keyword density', 'Semantic keywords', 'Content structure']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">SEO Results That Drive Growth</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK SEO optimization delivers measurable improvements in search visibility and organic traffic
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '300%+', label: 'Organic Traffic Increase' },
                { metric: '85%', label: 'First Page Rankings' },
                { metric: '150%+', label: 'Keyword Visibility Boost' },
                { metric: '200%+', label: 'Sales Growth Average' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.metric}</div>
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

