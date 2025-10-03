import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ContentProtectionProvider } from '@/components/ContentProtection';
export const metadata: Metadata = {
  title: 'Onboarding Services | Technovita Solution - Professional E-commerce Onboarding',
  description: 'Professional onboarding services for Ajio, Myntra, and Nykaa platforms. Expert guidance for seller registration and platform-specific training.',
  keywords: 'onboarding services, e-commerce onboarding, seller registration, ajio onboarding, myntra onboarding, nykaa onboarding, platform onboarding, seller setup',
  alternates: {
    canonical: 'https://technovitasolution.com/services/onboarding-services'
  },
  openGraph: {
    title: 'Onboarding Services | Technovita Solution - Professional E-commerce Onboarding',
    description: 'Professional onboarding services for Ajio, Myntra, and Nykaa platforms. Expert guidance for seller registration and platform-specific training.',
    url: 'https://technovitasolution.com/services/onboarding-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/onboarding/onboarding-service.webp',
        width: 1200,
        height: 630,
        alt: 'Onboarding Services - Technovita Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onboarding Services | Technovita Solution',
    description: 'Professional onboarding services for Ajio, Myntra, and Nykaa platforms.',
    images: ['/Images/onboarding/onboarding-service.webp'],
  }
};

const onboardingServices = [
  {
    title: 'Ajio Onboarding Services',
    description: 'Complete Ajio seller registration and onboarding support. Get expert guidance through Reliance\'s strict approval process with professional presentation and documentation.',
    image: '/Images/onboarding/onboarding-featured-images/ajio-seller-onboarding.webp',
    link: '/how-to-get-onboarded-on-ajio',
    features: ['Seller Portal Registration', 'Document Preparation', 'Category Selection', 'Brand Presentation', 'Approval Support']
  },
  {
    title: 'Myntra Onboarding Services',
    description: 'Professional Myntra seller onboarding with complete presentation creation, sample submission, and quality check support for fashion marketplace success.',
    image: '/Images/onboarding/onboarding-featured-images/myntra-seller-onboarding.webp',
    link: '/how-to-get-onboarded-on-myntra',
    features: ['Business Presentation', 'Category Manager Contact', 'Sample Quality Check', 'Contract Negotiation', 'Portal Access Setup']
  },
  {
    title: 'Nykaa Onboarding Services',
    description: 'Expert Nykaa seller registration and onboarding services for beauty and wellness brands with comprehensive documentation and approval guidance.',
    image: '/Images/onboarding/onboarding-featured-images/nykaa-seller-onboarding.webp',
    link: '/how-to-get-onboarded-on-nykaa',
    features: ['Beauty Brand Setup', 'Seller Portal Registration', 'Document Verification', 'Product Category Setup', 'Brand Approval Process']
  }
];

export default function OnboardingServices() {
  return (
    <ContentProtectionProvider>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Onboarding Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professional e-commerce onboarding services for Ajio, Myntra, and Nykaa platforms. Get expert guidance through seller registration, documentation, and platform-specific requirements.
          </p>
          <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Images/onboarding/onboarding-service.webp"
              alt="Onboarding Services - Professional E-commerce Support"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Onboarding Services?
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            Getting started on e-commerce platforms can be complex and time-consuming. Our expert onboarding services ensure smooth registration, proper documentation, and successful approval for Ajio, Myntra, and Nykaa marketplaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional support through complex registration processes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Approval</h3>
              <p className="text-gray-600">Streamlined process for quicker platform approval</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous assistance throughout your seller journey</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Onboarding Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onboardingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.link}
                    className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Onboarding Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Onboarding Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Understanding your business needs and platform requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">Preparing all required documents and business presentations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Registration</h3>
              <p className="text-sm text-gray-600">Complete seller account registration and submission</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Activation</h3>
              <p className="text-sm text-gray-600">Account approval, setup completion, and go-live support</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Benefits of Professional Onboarding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Approval</h3>
              <p className="text-gray-600">Professional documentation and presentation increase approval chances</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Error-Free Process</h3>
              <p className="text-gray-600">Expert guidance prevents common mistakes and rejections</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Saving</h3>
              <p className="text-gray-600">Skip the learning curve with professional assistance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-yellow-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Access to experienced professionals with platform expertise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Success Rate</h3>
              <p className="text-gray-600">Proven track record of successful seller onboarding</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Guidance</h3>
              <p className="text-gray-600">Continued support even after successful onboarding</p>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Learn More About Our Services
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Want to understand more about our comprehensive seller onboarding process?
            </p>
            <Link 
              href="/seller-onboarding-service" 
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Read Our Detailed Seller Onboarding Guide
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your E-commerce Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get professional onboarding support and start selling on your preferred platforms with expert guidance every step of the way.
          </p>
          <WhatsAppButton serviceName="Onboarding Services" className="mb-4" />
          <div className="text-blue-200 text-sm">
            <p>📞 Call us: +91 7042163504 | 📧 Email: info@technovitasolution.com</p>
          </div>
        </div>
      </div>
    </div>
    </ContentProtectionProvider>
  );
}
