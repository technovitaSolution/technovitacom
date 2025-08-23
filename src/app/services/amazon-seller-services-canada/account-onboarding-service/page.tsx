import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Amazon Canada Account Onboarding Service | Professional Amazon.ca Setup 2024',
  description: 'Expert Amazon Canada account onboarding service. Complete Amazon.ca seller account setup, documentation, verification, tax registration, and compliance. Get onboarded fast with Technovita Solution.',
  keywords: 'amazon canada onboarding service, amazon canada account setup service, amazon.ca onboarding, amazon canada seller onboarding, professional amazon canada setup, amazon.ca account registration service, technovita solution onboarding',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/account-onboarding-service'
  },
  openGraph: {
    title: 'Amazon Canada Account Onboarding Service | Professional Setup',
    description: 'Expert Amazon Canada account onboarding service. Complete Amazon.ca seller account setup, documentation, verification, tax registration, and compliance assistance.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/account-onboarding-service',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Canada Account Onboarding Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Canada Account Onboarding Service | Professional Setup',
    description: 'Expert Amazon Canada account onboarding service. Complete Amazon.ca seller account setup, documentation, verification, tax registration, and compliance assistance.',
    images: ['/Images/account-management/account-management-services.webp'],
  }
};

export default function AmazonCanadaOnboardingService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-green-700 shadow-lg border border-white border-opacity-30"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Professional Amazon.ca Onboarding
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
              Amazon Canada <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Account Onboarding</span> Service
            </h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto">
              Get your Amazon.ca seller account set up professionally and quickly. Our expert onboarding service handles everything from registration to compliance, ensuring you're ready to sell in 7-14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#onboarding-service"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Onboarded Now
              </Link>
              <WhatsAppButton serviceName="Amazon Canada Onboarding Service" className="border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Top */}
      <section className="py-20 bg-white" id="onboarding-service">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Start Your Amazon Canada Onboarding Today"
            subtitle="Skip the complexity and get your Amazon.ca seller account set up professionally. Our certified experts handle everything from documentation to compliance, getting you ready to sell in just 7-14 days!"
            ctaText="Get My Onboarding Started"
            serviceName="Amazon Canada Onboarding Service"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-onboarding-top"
          />
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon Canada Account Onboarding Service</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our professional onboarding service takes care of every aspect of your Amazon.ca seller account setup. From initial registration to final compliance verification, we ensure your account is ready for success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Success Guarantee:</strong> We have a <strong>98% approval rate</strong> for Amazon Canada seller accounts and guarantee compliance with all Canadian regulations and Amazon policies.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Onboarding Service?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast 7-14 Day Setup</h4>
                    <p className="text-gray-600 text-sm">Get your Amazon.ca account approved and ready to sell in just 1-2 weeks</p>
                </div>
              </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Complete Documentation Handling</h4>
                    <p className="text-gray-600 text-sm">We prepare and submit all required documents and forms</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Canadian Tax Registration</h4>
                    <p className="text-gray-600 text-sm">GST/HST registration and compliance setup included</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">30 days of post-onboarding support and guidance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Onboarding Process Timeline</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                    <p className="text-gray-600 text-sm">Document review and strategy planning (Day 1)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Account Creation</h4>
                    <p className="text-gray-600 text-sm">Amazon.ca seller account setup (Days 2-3)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tax & Compliance</h4>
                    <p className="text-gray-600 text-sm">Canadian tax registration and setup (Days 4-7)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verification & Approval</h4>
                    <p className="text-gray-600 text-sm">Final review and account activation (Days 8-14)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ready to Sell!</h4>
                    <p className="text-gray-600 text-sm">Your Amazon.ca account is live and compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included in Our Onboarding Service</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive Amazon Canada onboarding service covers every aspect of getting your seller account ready. Here's exactly what we handle for you:
            </p>
                  </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Account Registration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Account Registration</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Amazon.ca seller account creation</li>
                <li>• Professional account setup</li>
                <li>• Business verification process</li>
                <li>• Account type optimization</li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Documentation Handling</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Document preparation & review</li>
                <li>• Identity verification support</li>
                <li>• Business registration assistance</li>
                <li>• Compliance documentation</li>
              </ul>
            </div>

            {/* Tax Registration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Canadian Tax Setup</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• GST/HST registration</li>
                <li>• Provincial tax setup</li>
                <li>• Business Number (BN) registration</li>
                <li>• Tax compliance guidance</li>
              </ul>
            </div>

            {/* Banking & Payments */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Banking Integration</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Payment method setup</li>
                <li>• Bank account verification</li>
                <li>• Currency conversion optimization</li>
                <li>• Payment schedule configuration</li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Compliance Setup</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Amazon policy compliance</li>
                <li>• Canadian regulation adherence</li>
                <li>• Account health optimization</li>
                <li>• Policy violation prevention</li>
                </ul>
              </div>
              
            {/* Ongoing Support */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">30-Day Support</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Post-onboarding assistance</li>
                <li>• Account monitoring</li>
                <li>• Performance optimization tips</li>
                <li>• Direct expert support</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started with Professional Onboarding?</h4>
              <p className="text-gray-700 mb-6">Our Amazon Canada onboarding specialists are ready to handle your complete account setup. Get started today and be selling on Amazon.ca in just 7-14 days!</p>
              <WhatsAppButton serviceName="Amazon Canada Onboarding Service" className="bg-green-600 hover:bg-green-700" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">
              Common questions about our Amazon Canada onboarding service
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does the onboarding process take?</h3>
              <p className="text-gray-700">
                Our Amazon Canada onboarding process typically takes 7-14 business days from start to finish. This includes account creation, documentation verification, tax registration, and final approval. We handle everything efficiently to get you selling as quickly as possible.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do I need to be located in Canada to sell on Amazon.ca?</h3>
              <p className="text-gray-700">
                No, you don't need to be physically located in Canada to sell on Amazon.ca. However, you do need proper tax registration and compliance with Canadian regulations. Our service handles all the necessary registrations and ensures full compliance regardless of your location.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What documents do I need to provide?</h3>
              <p className="text-gray-700">
                You'll need government-issued ID, business registration documents (if applicable), bank account information, and tax identification numbers. We provide a complete checklist and help you prepare all required documentation properly.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is there ongoing support after account setup?</h3>
              <p className="text-gray-700">
                Yes! Our service includes 30 days of post-onboarding support. During this period, we monitor your account health, provide optimization recommendations, and are available to answer any questions about selling on Amazon.ca.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What if my account gets rejected?</h3>
              <p className="text-gray-700">
                With our 98% approval rate, rejections are rare. However, if your account is rejected, we work with you at no additional cost to address the issues and resubmit your application. We guarantee approval when all requirements are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Amazon Canada Journey?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join hundreds of successful sellers who have used our professional onboarding service to launch their Amazon.ca businesses. Get started today with expert guidance and support.
            </p>
          </div>
          
          <ContactForm
            title="Complete Your Amazon Canada Onboarding"
            subtitle="Ready to get your Amazon.ca seller account set up professionally? Our experts will handle everything from registration to compliance, ensuring you're ready to succeed in the Canadian marketplace."
            ctaText="Start My Professional Onboarding"
            serviceName="Amazon Canada Professional Onboarding"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-onboarding-final"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">Start Selling on Amazon Canada Today</h4>
            <p className="text-xl mb-6">
              Don't let complexity hold you back from accessing the lucrative Canadian market. Our professional onboarding service ensures you launch with confidence and compliance.
              </p>
              <div className="text-lg font-semibold mb-4">
                📞 <strong>Call Now:</strong> +91 7042163504<br/>
                📧 <strong>Email:</strong> info@technovitasolution.com
              </div>
            <p className="text-green-100">
              Get your Amazon Canada account set up professionally and start selling in just 7-14 days.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
}
