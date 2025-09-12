import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK VAT Services | Expert Amazon.co.uk VAT Registration & Compliance - Technovita Solution',
  description: 'Professional Amazon UK VAT services. Expert Amazon.co.uk VAT registration, HMRC compliance, EU VAT setup, tax filing, and VAT optimization for UK marketplace sellers.',
  keywords: [
    'amazon uk vat services',
    'amazon.co.uk vat registration',
    'amazon uk vat compliance',
    'amazon uk hmrc registration',
    'amazon uk tax services',
    'amazon uk vat setup',
    'amazon uk vat consultant',
    'amazon uk tax compliance',
    'amazon uk vat filing',
    'amazon uk vat optimization',
    'amazon uk eu vat',
    'amazon uk vat expert',
    'amazon uk tax registration',
    'amazon uk vat support',
    'amazon uk vat management',
    'amazon uk vat advice',
    'amazon uk tax planning',
    'amazon uk vat solutions',
    'amazon uk vat assistance',
    'amazon uk vat guidance'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/vat-services'
  },
  openGraph: {
    title: 'Amazon UK VAT Services | Expert Amazon.co.uk VAT Registration & Compliance - Technovita Solution',
    description: 'Professional Amazon UK VAT services. Expert Amazon.co.uk VAT registration, HMRC compliance, EU VAT setup, tax filing, and VAT optimization for UK marketplace sellers.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/vat-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK VAT Services - Expert VAT Registration & Compliance',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK VAT Services | Expert Amazon.co.uk VAT Registration & Compliance - Technovita Solution',
    description: 'Professional Amazon UK VAT services. Expert Amazon.co.uk VAT registration, HMRC compliance, EU VAT setup, tax filing, and VAT optimization for UK marketplace sellers.',
    images: ['/Images/account-management/account-management-services.webp'],
  },
};

export default function AmazonUKVATServices() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Amazon.co.uk VAT Services
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">VAT Services</span>
              </h1>
              <p className="text-xl mb-8 text-slate-100 leading-relaxed max-w-3xl mx-auto">
                Simplify your Amazon.co.uk VAT compliance with our expert services. Complete VAT registration, HMRC compliance, EU VAT setup, and ongoing tax management for UK sellers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#vat-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get VAT Compliant
                </Link>
                <WhatsAppButton serviceName="Amazon UK VAT Services" className="border-2 border-white text-white hover:bg-white hover:text-slate-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* VAT Requirements Alert */}
        <section className="py-12 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">VAT Registration Required for Amazon UK</h3>
                <p className="text-gray-700 mt-2">
                  VAT registration is mandatory if you exceed £85,000 in annual sales or store goods in UK fulfillment centers. Non-compliance can result in account suspension and significant penalties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="vat-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Ensure Amazon UK VAT Compliance Today"
              subtitle="Don't risk account suspension due to VAT non-compliance. Our VAT experts will handle your complete UK VAT registration, HMRC compliance, and ongoing tax management for Amazon.co.uk success."
              ctaText="Get VAT Registered"
              serviceName="Amazon UK VAT Services"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-vat-services"
            />
          </div>
        </section>

        {/* VAT Requirements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">UK VAT Requirements for Amazon Sellers</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Understanding when and how to register for VAT is crucial for Amazon.co.uk compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Mandatory Registration',
                  description: 'VAT registration is required in these situations',
                  icon: '⚠️',
                  requirements: ['Annual sales exceed £85,000', 'Goods stored in UK FBA', 'Distance selling threshold', 'Business established in UK']
                },
                {
                  title: 'Voluntary Registration',
                  description: 'Benefits of early VAT registration',
                  icon: '✅',
                  requirements: ['Reclaim VAT on expenses', 'Professional credibility', 'B2B customer access', 'Future-proofing business']
                },
                {
                  title: 'Non-UK Sellers',
                  description: 'Special requirements for international sellers',
                  icon: '🌍',
                  requirements: ['UK VAT representative', 'Import VAT handling', 'Cross-border compliance', 'Currency considerations']
                }
              ].map((requirement, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{requirement.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{requirement.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{requirement.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {requirement.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our VAT Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK VAT Management</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                End-to-end VAT services to ensure full compliance with UK tax regulations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  category: 'VAT Registration & Setup',
                  services: [
                    'UK VAT number registration',
                    'HMRC account setup',
                    'VAT representative appointment',
                    'Business registration verification',
                    'Tax identification setup',
                    'Compliance documentation'
                  ]
                },
                {
                  category: 'Ongoing Compliance',
                  services: [
                    'Quarterly VAT return filing',
                    'Monthly VAT calculations',
                    'HMRC correspondence handling',
                    'VAT payment processing',
                    'Record keeping assistance',
                    'Audit support'
                  ]
                },
                {
                  category: 'EU & International VAT',
                  services: [
                    'EU VAT registration',
                    'OSS (One Stop Shop) setup',
                    'Cross-border VAT compliance',
                    'Import VAT handling',
                    'Multi-country VAT management',
                    'Brexit compliance'
                  ]
                },
                {
                  category: 'Amazon Integration',
                  services: [
                    'Amazon VAT calculation setup',
                    'Seller Central VAT configuration',
                    'FBA VAT handling',
                    'Invoice generation setup',
                    'VAT reporting integration',
                    'Account compliance monitoring'
                  ]
                }
              ].map((serviceGroup, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{serviceGroup.category}</h3>
                  <ul className="space-y-3">
                    {serviceGroup.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-4"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VAT Compliance Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Proper VAT Compliance</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Professional VAT management protects your business and enables growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Account Protection',
                  description: 'Prevent Amazon account suspension due to VAT non-compliance',
                  icon: '🛡️'
                },
                {
                  title: 'Cost Recovery',
                  description: 'Reclaim VAT on business expenses and reduce overall costs',
                  icon: '💰'
                },
                {
                  title: 'Legal Compliance',
                  description: 'Stay compliant with UK tax laws and avoid penalties',
                  icon: '⚖️'
                },
                {
                  title: 'Business Growth',
                  description: 'Enable expansion to B2B customers and EU markets',
                  icon: '📈'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">VAT Service Success Metrics</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK VAT services deliver reliable compliance and cost savings
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '100%', label: 'Compliance Success Rate' },
                { metric: '7-10', label: 'Days VAT Registration' },
                { metric: '25%+', label: 'Average Cost Savings' },
                { metric: '300+', label: 'UK Businesses Served' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-slate-600 mb-2">{stat.metric}</div>
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


