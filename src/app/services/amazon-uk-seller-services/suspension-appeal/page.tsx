import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK Suspension Appeal Service | Expert Amazon.co.uk Account Reinstatement - Technovita Solution',
  description: 'Professional Amazon UK suspension appeal service. Expert Amazon.co.uk account reinstatement, policy compliance, appeal writing, account recovery, and seller performance restoration for UK marketplace success.',
  keywords: [
    'amazon uk suspension appeal',
    'amazon.co.uk suspension appeal',
    'amazon uk account suspension',
    'amazon uk account reinstatement',
    'amazon uk appeal service',
    'amazon uk account recovery',
    'amazon.co.uk account restoration',
    'amazon uk suspended seller',
    'amazon uk policy violation',
    'amazon uk account reactivation',
    'amazon uk seller performance',
    'amazon uk compliance service',
    'amazon uk appeal writing',
    'amazon uk account deactivation',
    'amazon uk seller support',
    'amazon uk policy compliance',
    'amazon uk account issues',
    'amazon uk seller consultation',
    'amazon uk account help',
    'amazon uk suspension expert'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/suspension-appeal'
  },
  openGraph: {
    title: 'Amazon UK Suspension Appeal Service | Expert Amazon.co.uk Account Reinstatement - Technovita Solution',
    description: 'Professional Amazon UK suspension appeal service. Expert Amazon.co.uk account reinstatement, policy compliance, appeal writing, account recovery, and seller performance restoration for UK marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/suspension-appeal',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK Suspension Appeal Service - Expert Account Reinstatement',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK Suspension Appeal Service | Expert Amazon.co.uk Account Reinstatement - Technovita Solution',
    description: 'Professional Amazon UK suspension appeal service. Expert Amazon.co.uk account reinstatement, policy compliance, appeal writing, account recovery, and seller performance restoration for UK marketplace success.',
    images: ['/Images/account-management/account-management-services.webp'],
  },
};

export default function AmazonUKSuspensionAppeal() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-red-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Amazon.co.uk Suspension Appeal
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Suspension Appeal</span> Service
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed max-w-3xl mx-auto">
                Get your suspended Amazon.co.uk seller account reinstated quickly. Our expert appeal service handles policy compliance, appeal writing, and account recovery with a proven track record.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appeal-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get My Account Back
                </Link>
                <WhatsAppButton serviceName="Amazon UK Suspension Appeal" className="border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Help Section */}
        <section className="py-12 bg-red-50 border-l-4 border-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Suspended? We Can Help!</h2>
              <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
                Don't panic! Our Amazon UK suspension appeal experts have successfully reinstated hundreds of suspended accounts. We'll analyze your case, identify the issues, and craft a winning appeal to get you back to selling on Amazon.co.uk.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                <div className="text-2xl font-bold text-red-600 mb-2">⚡ URGENT SUPPORT</div>
                <div className="text-lg text-gray-700">📞 +91 7042163504 | Available 24/7</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="appeal-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Get Your Amazon UK Account Reinstated"
              subtitle="Suspended from Amazon.co.uk? Don't lose hope! Our expert appeal team has a 92% success rate in getting accounts reinstated. Let us analyze your case and craft a winning appeal strategy."
              ctaText="Start My Appeal Process"
              serviceName="Amazon UK Suspension Appeal"
              accentColor="from-red-500 to-orange-500"
              showWhatsApp={true}
              formId="amazon-uk-suspension-appeal"
            />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK Appeal Service</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive suspension appeal service covers every aspect of getting your Amazon.co.uk account reinstated and compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Case Analysis',
                  description: 'Thorough analysis of your suspension reasons and policy violations',
                  icon: '🔍',
                  features: ['Suspension review', 'Policy analysis', 'Root cause identification', 'Compliance assessment']
                },
                {
                  title: 'Appeal Writing',
                  description: 'Professional appeal letters crafted by Amazon policy experts',
                  icon: '✍️',
                  features: ['Custom appeal letters', 'Policy compliance', 'Action plans', 'Evidence compilation']
                },
                {
                  title: 'Document Preparation',
                  description: 'Complete preparation of all required supporting documents',
                  icon: '📄',
                  features: ['Invoice preparation', 'Supplier documentation', 'Compliance certificates', 'Evidence organization']
                },
                {
                  title: 'Policy Compliance',
                  description: 'Ensure full compliance with Amazon UK policies and regulations',
                  icon: '✅',
                  features: ['Policy updates', 'Compliance procedures', 'Process improvements', 'Risk mitigation']
                },
                {
                  title: 'Account Monitoring',
                  description: 'Ongoing monitoring to prevent future suspensions',
                  icon: '📊',
                  features: ['Performance tracking', 'Health monitoring', 'Early warnings', 'Preventive measures']
                },
                {
                  title: 'Ongoing Support',
                  description: 'Continuous support to maintain account health and compliance',
                  icon: '🤝',
                  features: ['Regular check-ins', 'Policy updates', 'Best practices', 'Expert guidance']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Appeal Success</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK suspension appeal service delivers results with industry-leading success rates
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '92%', label: 'Success Rate' },
                { metric: '500+', label: 'Accounts Reinstated' },
                { metric: '7-14', label: 'Days Average Appeal' },
                { metric: '24/7', label: 'Urgent Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Suspension Reasons */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Amazon UK Suspension Reasons</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                We handle all types of Amazon.co.uk account suspensions and policy violations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Intellectual Property Violations',
                'Inauthentic Product Claims',
                'Poor Seller Performance',
                'Product Safety Issues',
                'Restricted Product Violations',
                'Review Manipulation',
                'Account Health Issues',
                'Policy Violations',
                'VAT Compliance Issues'
              ].map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">{reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}

