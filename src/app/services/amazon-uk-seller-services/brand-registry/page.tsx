import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK Brand Registry Service | Expert Amazon.co.uk Brand Protection & Enhancement - Technovita Solution',
  description: 'Professional Amazon UK Brand Registry service. Expert Amazon.co.uk brand protection, trademark registration, A+ Content creation, Amazon Stores setup, and brand enhancement for UK marketplace success.',
  keywords: [
    'amazon uk brand registry',
    'amazon.co.uk brand registry',
    'amazon uk brand protection',
    'amazon uk trademark registration',
    'amazon uk brand enrollment',
    'amazon uk a+ content',
    'amazon uk enhanced content',
    'amazon uk stores setup',
    'amazon uk brand management',
    'amazon uk ip protection',
    'amazon uk brand verification',
    'amazon uk brand services',
    'amazon uk brand consultant',
    'amazon uk brand optimization',
    'amazon uk brand strategy',
    'amazon uk brand compliance',
    'amazon uk brand enhancement',
    'amazon uk brand control',
    'amazon uk brand tools',
    'amazon uk brand support'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/brand-registry'
  },
  openGraph: {
    title: 'Amazon UK Brand Registry Service | Expert Amazon.co.uk Brand Protection & Enhancement - Technovita Solution',
    description: 'Professional Amazon UK Brand Registry service. Expert Amazon.co.uk brand protection, trademark registration, A+ Content creation, Amazon Stores setup, and brand enhancement for UK marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/brand-registry',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-catalogue/amazon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK Brand Registry Service - Expert Brand Protection & Enhancement',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK Brand Registry Service | Expert Amazon.co.uk Brand Protection & Enhancement - Technovita Solution',
    description: 'Professional Amazon UK Brand Registry service. Expert Amazon.co.uk brand protection, trademark registration, A+ Content creation, Amazon Stores setup, and brand enhancement for UK marketplace success.',
    images: ['/Images/amazon-catalogue/amazon.webp'],
  },
};

export default function AmazonUKBrandRegistry() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-emerald-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Amazon.co.uk Brand Registry
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Brand Registry</span> Service
              </h1>
              <p className="text-xl mb-8 text-teal-100 leading-relaxed max-w-3xl mx-auto">
                Protect your brand and unlock powerful marketing tools on Amazon.co.uk. Expert Brand Registry enrollment, trademark support, and enhanced content creation for maximum brand control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#brand-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Protect My Brand
                </Link>
                <WhatsAppButton serviceName="Amazon UK Brand Registry" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="brand-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Secure Your Amazon UK Brand Today"
              subtitle="Ready to protect your brand and unlock advanced marketing tools on Amazon.co.uk? Our Brand Registry experts will handle your enrollment and maximize your brand's potential in the UK marketplace."
              ctaText="Enroll My Brand"
              serviceName="Amazon UK Brand Registry"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-brand-registry"
            />
          </div>
        </section>

        {/* Brand Registry Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Amazon UK Brand Registry Benefits</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Unlock powerful brand protection and marketing tools exclusive to Brand Registry participants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Brand Protection',
                  description: 'Advanced tools to protect your intellectual property and prevent unauthorized use',
                  icon: '🛡️',
                  features: ['IP violation reporting', 'Automated protections', 'Counterfeit removal', 'Brand monitoring']
                },
                {
                  title: 'Enhanced Content',
                  description: 'Create rich A+ Content and Enhanced Brand Content to showcase your products',
                  icon: '✨',
                  features: ['A+ Content creation', 'Rich media modules', 'Comparison charts', 'Brand storytelling']
                },
                {
                  title: 'Amazon Stores',
                  description: 'Build a custom branded storefront to showcase your entire product catalog',
                  icon: '🏪',
                  features: ['Custom store design', 'Multi-page layouts', 'Brand showcase', 'Traffic analytics']
                },
                {
                  title: 'Sponsored Brands',
                  description: 'Access to premium advertising formats including video and custom creative',
                  icon: '📢',
                  features: ['Brand headline ads', 'Product collection ads', 'Store spotlight ads', 'Video campaigns']
                },
                {
                  title: 'Search Analytics',
                  description: 'Detailed insights into customer search behavior and keyword performance',
                  icon: '📊',
                  features: ['Search term data', 'Customer insights', 'Market intelligence', 'Performance metrics']
                },
                {
                  title: 'Global Expansion',
                  description: 'Simplified brand protection across multiple Amazon marketplaces',
                  icon: '🌍',
                  features: ['Multi-marketplace coverage', 'Unified brand management', 'Global protection', 'Regional customization']
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{benefit.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Brand Registry Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Brand Registry Management</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                End-to-end Brand Registry services to maximize your brand's potential on Amazon.co.uk
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  category: 'Enrollment & Setup',
                  services: [
                    'Trademark verification and registration',
                    'Brand Registry application submission',
                    'Documentation preparation',
                    'Enrollment process management',
                    'Account configuration',
                    'Initial brand optimization'
                  ]
                },
                {
                  category: 'Content Creation',
                  services: [
                    'A+ Content design and creation',
                    'Enhanced Brand Content development',
                    'Amazon Stores setup and design',
                    'Brand story development',
                    'Visual content optimization',
                    'Mobile-responsive design'
                  ]
                },
                {
                  category: 'Brand Protection',
                  services: [
                    'IP violation monitoring',
                    'Counterfeit product removal',
                    'Unauthorized seller reporting',
                    'Brand gating implementation',
                    'Violation case management',
                    'Ongoing brand monitoring'
                  ]
                },
                {
                  category: 'Performance Optimization',
                  services: [
                    'Brand analytics review',
                    'Search term optimization',
                    'Content performance analysis',
                    'Conversion rate improvement',
                    'Brand visibility enhancement',
                    'ROI optimization'
                  ]
                }
              ].map((serviceGroup, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{serviceGroup.category}</h3>
                  <ul className="space-y-3">
                    {serviceGroup.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Brand Registry Success Results</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK Brand Registry service delivers measurable improvements in brand performance
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '95%+', label: 'Brand Protection Success' },
                { metric: '80%+', label: 'Conversion Rate Boost' },
                { metric: '150%+', label: 'Brand Visibility Increase' },
                { metric: '200%+', label: 'Enhanced Content Impact' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">{stat.metric}</div>
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

