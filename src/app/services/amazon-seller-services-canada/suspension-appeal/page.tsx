import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Amazon Suspension Appeal Canada | Amazon.ca Account Reinstatement Services',
  description: 'Professional Amazon suspension appeal and account reinstatement services in Canada. Expert Amazon.ca account recovery and policy compliance assistance.',
  keywords: 'amazon account reinstatement canada, amazon suspension appeal service, amazon seller account recovery, reinstate amazon account canada, amazon.ca suspension help',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/suspension-appeal'
  },
  openGraph: {
    title: 'Amazon Suspension Appeal Canada | Amazon.ca Account Reinstatement Services',
    description: 'Professional Amazon suspension appeal and account reinstatement services in Canada. Expert Amazon.ca account recovery and policy compliance assistance.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/suspension-appeal',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Suspension Appeal Canada | Amazon.ca Account Reinstatement Services',
    description: 'Professional Amazon suspension appeal and account reinstatement services in Canada. Expert Amazon.ca account recovery and policy compliance assistance.',
  }
};

export default function AmazonSuspensionAppealCanada() {
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
              <li className="text-gray-900 font-medium">Suspension Appeal</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amazon Suspension Appeal Canada
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Professional Amazon.ca account suspension appeal and reinstatement services with expert guidance and proven success strategies.
          </p>
          <WhatsAppButton serviceName="Amazon Suspension Appeal Canada" className="bg-white text-red-600 hover:bg-gray-100" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Coming Soon - Amazon Suspension Appeal Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-8">
                We're currently developing comprehensive content for our Amazon Suspension Appeal services in Canada. 
                This page will soon include detailed information about:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Account Recovery</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Suspension analysis and assessment</li>
                    <li>• Root cause identification</li>
                    <li>• Plan of Action (POA) creation</li>
                    <li>• Appeal submission and follow-up</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pink-800 mb-4">Compliance Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Policy compliance guidance</li>
                    <li>• Documentation preparation</li>
                    <li>• Performance improvement plans</li>
                    <li>• Ongoing monitoring and support</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait! Contact us today for immediate assistance with your Amazon Canada suspension appeal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/services/amazon-seller-services-canada"
                    className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors duration-200"
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
