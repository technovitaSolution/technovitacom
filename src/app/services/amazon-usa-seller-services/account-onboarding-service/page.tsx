import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import '../animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon USA Account Onboarding Service | Expert Amazon.com Seller Setup - Technovita Solution',
  description: 'Professional Amazon.com seller account onboarding service in USA. Complete Amazon seller account setup, tax registration, bank integration & verification. Expert guidance for US Amazon sellers.',
  keywords: [
    'amazon account onboarding usa',
    'amazon seller account setup usa',
    'amazon.com account registration',
    'amazon usa seller onboarding',
    'amazon seller account creation usa',
    'amazon account setup service usa',
    'amazon seller verification usa',
    'amazon tax setup usa',
    'amazon bank integration usa',
    'amazon seller central setup usa',
    'amazon professional seller account usa',
    'amazon individual seller account usa',
    'amazon seller account approval usa',
    'amazon account verification usa',
    'amazon seller registration usa',
    'amazon business account setup usa',
    'amazon seller account management usa',
    'amazon account compliance usa',
    'amazon seller onboarding service usa',
    'amazon account setup consultant usa'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-usa-seller-services/account-onboarding-service'
  },
  openGraph: {
    title: 'Amazon USA Account Onboarding Service | Expert Amazon.com Seller Setup - Technovita Solution',
    description: 'Professional Amazon.com seller account onboarding service in USA. Complete Amazon seller account setup, tax registration, bank integration & verification. Expert guidance for US Amazon sellers.',
    url: 'https://technovitasolution.com/services/amazon-usa-seller-services/account-onboarding-service',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-usa/amazon-account-onboarding-usa.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon USA Account Onboarding Service - Expert Amazon.com Seller Setup',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon USA Account Onboarding Service | Expert Amazon.com Seller Setup - Technovita Solution',
    description: 'Professional Amazon.com seller account onboarding service in USA. Complete Amazon seller account setup, tax registration, bank integration & verification. Expert guidance for US Amazon sellers.',
    images: ['/Images/amazon-usa/amazon-account-onboarding-usa.webp'],
  },
};

export default function AmazonUSAAccountOnboardingService() {
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
              "name": "Amazon USA Account Onboarding Service",
              "description": "Professional Amazon.com seller account onboarding service in USA. Complete Amazon seller account setup, tax registration, bank integration & verification.",
              "provider": {
                "@type": "Organization",
                "name": "Technovita Solution",
                "url": "https://technovitasolution.com"
              },
              "serviceType": "E-commerce Account Setup",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "offers": {
                "@type": "Offer",
                "description": "Complete Amazon.com seller account onboarding service",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Amazon.com Account Setup
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">Amazon USA Account</span>
                  <br />
                  <span className="text-white">Onboarding Service</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Professional Amazon.com seller account setup and onboarding service in USA. Complete account registration, tax setup, bank integration, and verification with expert guidance for US Amazon sellers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400 to-red-400 text-white font-semibold rounded-lg hover:from-blue-300 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Account Setup
                  </Link>
                  <WhatsAppButton serviceName="Amazon USA Account Onboarding" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <Image
                  src="/Images/amazon-usa/amazon-account-onboarding-usa.webp"
                  alt="Amazon USA Account Onboarding Service - Professional Setup"
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
                Complete <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Amazon.com Account Setup</span> in USA
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our Amazon USA account onboarding service provides comprehensive support for setting up your Amazon.com seller account. From initial registration to tax compliance and bank integration, we ensure your account is properly configured for success in the US marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Amazon USA Account Onboarding Service?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Account Setup</h4>
                      <p className="text-gray-600">Professional guidance through the entire Amazon.com seller account registration process</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tax Compliance</h4>
                      <p className="text-gray-600">Proper US tax setup and compliance with federal and state requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Bank Integration</h4>
                      <p className="text-gray-600">Seamless bank account setup and payment processing configuration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Verification Support</h4>
                      <p className="text-gray-600">Complete verification process assistance and document preparation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Amazon USA Account Setup Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Account Registration</h4>
                        <p className="text-gray-600 text-sm">Complete Amazon.com seller account registration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Tax Setup</h4>
                        <p className="text-gray-600 text-sm">Configure US tax settings and compliance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Bank Integration</h4>
                        <p className="text-gray-600 text-sm">Set up payment processing and bank accounts</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Verification</h4>
                        <p className="text-gray-600 text-sm">Complete account verification process</p>
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
                Amazon USA Account Onboarding <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive Amazon USA account onboarding service includes everything you need to successfully set up your Amazon.com seller account and start selling in the US marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Account Registration</h3>
                <p className="text-gray-600 leading-relaxed">Complete Amazon.com seller account registration with proper business information and documentation.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Setup</h3>
                <p className="text-gray-600 leading-relaxed">Proper US tax configuration including federal and state tax settings for compliance.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Integration</h3>
                <p className="text-gray-600 leading-relaxed">Seamless bank account setup and payment processing configuration for US sellers.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Verification Process</h3>
                <p className="text-gray-600 leading-relaxed">Complete account verification with document preparation and submission support.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Setup</h3>
                <p className="text-gray-600 leading-relaxed">Account security configuration including two-factor authentication and access controls.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600 leading-relaxed">Continuous support and guidance for account management and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Start Your Amazon USA Account Setup Today"
              subtitle="Ready to set up your Amazon.com seller account? Get expert guidance from USA's leading Amazon account onboarding specialists. Our team will ensure your account is properly configured for success."
              ctaText="Get My Account Setup Started"
              serviceName="Amazon USA Account Onboarding"
              accentColor="from-blue-400 to-red-400"
              showWhatsApp={true}
              formId="amazon-usa-account-onboarding"
            />
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}
