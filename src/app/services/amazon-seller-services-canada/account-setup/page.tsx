import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Amazon Account Setup Canada | Amazon.ca Seller Registration Services',
  description: 'Professional Amazon seller account setup and onboarding services in Canada. Expert guidance for Amazon.ca registration, verification, and getting started.',
  keywords: 'amazon account setup canada, amazon seller onboarding canada, start selling on amazon.ca, amazon seller registration services, amazon.ca account creation',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/account-setup'
  },
  openGraph: {
    title: 'Amazon Account Setup Canada | Amazon.ca Seller Registration Services',
    description: 'Professional Amazon seller account setup and onboarding services in Canada. Expert guidance for Amazon.ca registration, verification, and getting started.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/account-setup',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Account Setup Canada | Amazon.ca Seller Registration Services',
    description: 'Professional Amazon seller account setup and onboarding services in Canada. Expert guidance for Amazon.ca registration, verification, and getting started.',
  }
};

export default function AmazonAccountSetupCanada() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/services/amazon-seller-services-canada" className="text-gray-500 hover:text-gray-700">Amazon Canada Services</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-900 font-medium">Account Setup</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amazon Account Setup Canada
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Professional Amazon.ca seller account setup and onboarding services. Get started selling on Amazon Canada with expert guidance.
          </p>
          <WhatsAppButton serviceName="Amazon Account Setup Canada" className="bg-white text-orange-600 hover:bg-gray-100" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Coming Soon - Amazon Account Setup Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-8">
                We're currently developing comprehensive content for our Amazon Account Setup services in Canada. 
                This page will soon include detailed information about:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Account Registration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete Amazon.ca seller registration</li>
                    <li>• Document preparation and submission</li>
                    <li>• Business verification process</li>
                    <li>• Account type selection guidance</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Setup & Configuration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tax information setup</li>
                    <li>• Bank account integration</li>
                    <li>• Shipping settings configuration</li>
                    <li>• Payment method setup</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait! Contact us today for immediate assistance with your Amazon Canada account setup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/services/amazon-seller-services-canada"
                    className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
