import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon Australia Account Onboarding Service | Expert Amazon.com.au Seller Setup - Technovita Solution',
  description: 'Professional Amazon.com.au seller account onboarding service in Australia. Expert guidance for account registration, GST setup, bank integration & verification. 98% success rate with Australian compliance.',
  keywords: [
    'amazon australia account onboarding',
    'amazon.com.au seller setup',
    'amazon australia account registration',
    'amazon seller account australia',
    'amazon australia gst setup',
    'amazon australia bank integration',
    'amazon seller verification australia',
    'amazon australia compliance',
    'amazon seller onboarding service australia',
    'amazon.com.au account creation',
    'amazon australia business registration',
    'amazon seller account setup australia',
    'amazon australia tax registration',
    'amazon seller services australia',
    'amazon australia expert setup'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-australia-seller-services/account-onboarding-service'
  },
  openGraph: {
    title: 'Amazon Australia Account Onboarding Service | Expert Amazon.com.au Seller Setup - Technovita Solution',
    description: 'Professional Amazon.com.au seller account onboarding service in Australia. Expert guidance for account registration, GST setup, bank integration & verification. 98% success rate with Australian compliance.',
    url: 'https://technovitasolution.com/services/amazon-australia-seller-services/account-onboarding-service',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-australia/amazon-australia-account-onboarding.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Australia Account Onboarding Service - Expert Amazon.com.au Seller Setup',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Australia Account Onboarding Service | Expert Amazon.com.au Seller Setup - Technovita Solution',
    description: 'Professional Amazon.com.au seller account onboarding service in Australia. Expert guidance for account registration, GST setup, bank integration & verification. 98% success rate with Australian compliance.',
    images: ['/Images/amazon-australia/amazon-australia-account-onboarding.webp'],
  },
};

export default function AmazonAustraliaAccountOnboarding() {
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
            "name": "Amazon Australia Account Onboarding Service",
            "description": "Professional Amazon.com.au seller account onboarding service in Australia. Expert guidance for account registration, GST setup, bank integration & verification.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Account Setup",
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "offers": {
              "@type": "Offer",
              "description": "Complete Amazon.com.au seller account setup and onboarding with professional guidance",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Amazon.com.au Expert Setup
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-blue-300 bg-clip-text text-transparent">Amazon Australia</span>
                <br />
                <span className="text-white">Account Onboarding</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Professional Amazon.com.au seller account setup and onboarding service. Expert guidance through registration, GST setup, bank integration, and verification process with 98% success rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-blue-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Your Account Setup
                </Link>
                <WhatsAppButton serviceName="Amazon Australia Account Onboarding" className="border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="/Images/amazon-australia/amazon-australia-account-onboarding.webp"
                alt="Amazon Australia Account Onboarding Service - Professional Setup"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                🇦🇺 98% Success Rate
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
              Complete Amazon.com.au Setup
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Amazon Australia Account Onboarding</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia account onboarding service provides complete guidance for setting up your Amazon.com.au seller account. From initial registration to final verification, we ensure your account meets all Australian compliance requirements and is ready for successful selling.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Registration</h3>
              <p className="text-gray-600 text-sm">Complete Amazon.com.au seller account registration with proper business information</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GST Setup</h3>
              <p className="text-gray-600 text-sm">Configure Australian GST settings and tax registration for compliance</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Integration</h3>
              <p className="text-gray-600 text-sm">Set up Australian bank account integration for seamless payments</p>
            </div>
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">Complete identity and business verification process for account approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Onboarding Features</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia account onboarding service covers every aspect of setting up your Amazon.com.au seller account, ensuring compliance with Australian regulations and optimal account configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Account Registration</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business information setup
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Contact details configuration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Account type selection
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">GST & Tax Setup</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Australian GST registration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tax calculation setup
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compliance verification
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Integration</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Australian bank account setup
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Payment method configuration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Currency settings
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
              Why Choose Our Onboarding Service
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Amazon Australia Setup</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon Australia account onboarding service ensures your Amazon.com.au seller account is set up correctly from day one, with full compliance to Australian regulations and optimal configuration for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">98% Success Rate</h3>
              <p className="text-gray-600 leading-relaxed">Proven track record of successful Amazon.com.au account approvals with minimal rejections</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Australian Compliance</h3>
              <p className="text-gray-600 leading-relaxed">Full compliance with Australian GST, tax, and business registration requirements</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">Step-by-step guidance from Amazon.com.au experts with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Start Your Amazon Australia Account Setup Today"
            subtitle="Ready to launch your Amazon.com.au seller account? Get expert guidance from Australia's leading Amazon account onboarding specialists. We'll ensure your account is set up correctly and compliant with all Australian regulations."
            ctaText="Get My Account Setup Started"
            serviceName="Amazon Australia Account Onboarding"
            accentColor="from-yellow-400 to-blue-400"
            showWhatsApp={true}
            formId="amazon-australia-onboarding-contact"
          />
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}
