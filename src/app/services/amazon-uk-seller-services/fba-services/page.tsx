import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK FBA Services | Expert Fulfilment by Amazon.co.uk Setup & Management - Technovita Solution',
  description: 'Professional Amazon UK FBA services. Expert Fulfilment by Amazon.co.uk setup, inventory management, logistics optimization, FBA compliance, and fulfillment strategy for UK marketplace success.',
  keywords: [
    'amazon uk fba services',
    'amazon.co.uk fba setup',
    'fulfilment by amazon uk',
    'amazon uk fba management',
    'amazon uk fulfillment services',
    'fba uk setup service',
    'amazon uk logistics service',
    'amazon uk inventory management',
    'amazon uk fba optimization',
    'amazon uk warehouse service',
    'amazon uk fba consultant',
    'amazon uk shipping service',
    'amazon uk fba compliance',
    'amazon uk fulfillment strategy',
    'amazon uk fba expert',
    'amazon uk distribution service',
    'amazon uk fba onboarding',
    'amazon uk prime eligibility',
    'amazon uk fba fees optimization',
    'amazon uk storage solutions'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/fba-services'
  },
  openGraph: {
    title: 'Amazon UK FBA Services | Expert Fulfilment by Amazon.co.uk Setup & Management - Technovita Solution',
    description: 'Professional Amazon UK FBA services. Expert Fulfilment by Amazon.co.uk setup, inventory management, logistics optimization, FBA compliance, and fulfillment strategy for UK marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/fba-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-catalogue/amazon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK FBA Services - Expert Fulfilment Setup & Management',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK FBA Services | Expert Fulfilment by Amazon.co.uk Setup & Management - Technovita Solution',
    description: 'Professional Amazon UK FBA services. Expert Fulfilment by Amazon.co.uk setup, inventory management, logistics optimization, FBA compliance, and fulfillment strategy for UK marketplace success.',
    images: ['/Images/amazon-catalogue/amazon.webp'],
  },
};

export default function AmazonUKFBAServices() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Amazon.co.uk FBA Services
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">FBA Services</span>
              </h1>
              <p className="text-xl mb-8 text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                Leverage Amazon's powerful fulfillment network with our expert FBA setup and management services. Scale your Amazon.co.uk business with professional logistics optimization and Prime eligibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#fba-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Setup FBA Now
                </Link>
                <WhatsAppButton serviceName="Amazon UK FBA Services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="fba-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Scale Your Amazon UK Business with FBA"
              subtitle="Ready to leverage Amazon's world-class fulfillment network? Our FBA experts will set up and optimize your Fulfilment by Amazon.co.uk operations for maximum efficiency and growth."
              ctaText="Get FBA Setup Started"
              serviceName="Amazon UK FBA Services"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-fba-services"
            />
          </div>
        </section>

        {/* FBA Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Amazon UK FBA?</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Fulfilment by Amazon.co.uk offers unmatched advantages for scaling your UK business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Prime Eligibility',
                  description: 'Automatic Prime eligibility increases conversion rates and customer trust',
                  icon: '⭐',
                  benefits: ['Prime badge display', 'Faster delivery promise', 'Increased visibility', 'Higher conversion rates']
                },
                {
                  title: 'UK-Wide Distribution',
                  description: 'Access to Amazon\'s extensive UK fulfillment network for fast delivery',
                  icon: '🚚',
                  benefits: ['Multiple UK warehouses', 'Next-day delivery', 'Weekend delivery', 'Rural area coverage']
                },
                {
                  title: 'Customer Service',
                  description: 'Amazon handles all customer service and returns on your behalf',
                  icon: '🤝',
                  benefits: ['24/7 customer support', 'Returns processing', 'Refund handling', 'Query resolution']
                },
                {
                  title: 'Inventory Management',
                  description: 'Professional inventory storage and management in Amazon warehouses',
                  icon: '📦',
                  benefits: ['Secure storage', 'Inventory tracking', 'Stock management', 'Damage protection']
                },
                {
                  title: 'International Expansion',
                  description: 'Easy expansion to other European marketplaces through FBA',
                  icon: '🌍',
                  benefits: ['EU marketplace access', 'Cross-border fulfillment', 'VAT handling', 'Currency management']
                },
                {
                  title: 'Cost Efficiency',
                  description: 'Competitive fulfillment costs with volume-based pricing',
                  icon: '💰',
                  benefits: ['No setup fees', 'Pay-per-use model', 'Volume discounts', 'Reduced shipping costs']
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{benefit.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our FBA Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK FBA Management</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                End-to-end FBA services to optimize your Amazon.co.uk fulfillment operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  category: 'FBA Setup & Onboarding',
                  services: [
                    'FBA account setup and configuration',
                    'Product preparation requirements',
                    'Shipping plan creation',
                    'Initial inventory send-in',
                    'Compliance verification',
                    'Prime eligibility setup'
                  ]
                },
                {
                  category: 'Inventory Management',
                  services: [
                    'Stock level monitoring',
                    'Restock alerts and planning',
                    'Seasonal inventory planning',
                    'Slow-moving inventory optimization',
                    'Storage fee optimization',
                    'Inventory health management'
                  ]
                },
                {
                  category: 'Performance Optimization',
                  services: [
                    'FBA fee analysis and optimization',
                    'Shipping cost reduction',
                    'Storage optimization strategies',
                    'Return rate minimization',
                    'Defect rate improvement',
                    'Performance metric monitoring'
                  ]
                },
                {
                  category: 'Compliance & Support',
                  services: [
                    'UK regulatory compliance',
                    'Product safety requirements',
                    'Labeling and packaging standards',
                    'Documentation management',
                    'Issue resolution support',
                    'Ongoing consultation'
                  ]
                }
              ].map((serviceGroup, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{serviceGroup.category}</h3>
                  <ul className="space-y-3">
                    {serviceGroup.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">FBA Success Metrics</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK FBA management delivers measurable improvements in efficiency and profitability
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '40%+', label: 'Fulfillment Cost Reduction' },
                { metric: '60%+', label: 'Conversion Rate Boost' },
                { metric: '25%+', label: 'Storage Fee Savings' },
                { metric: '98%', label: 'On-Time Delivery Rate' }
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

