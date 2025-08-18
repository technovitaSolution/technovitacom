import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Amazon Consulting Services Canada | Amazon.ca Business Strategy & Growth',
  description: 'Professional Amazon consulting and strategy services in Canada. Expert Amazon.ca business consultation, growth planning, and strategic guidance.',
  keywords: 'amazon consulting services canada, amazon business strategy canada, amazon expert consultation, amazon growth consulting, amazon.ca consulting',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/consulting'
  },
  openGraph: {
    title: 'Amazon Consulting Services Canada | Amazon.ca Business Strategy & Growth',
    description: 'Professional Amazon consulting and strategy services in Canada. Expert Amazon.ca business consultation, growth planning, and strategic guidance.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/consulting',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Consulting Services Canada | Amazon.ca Business Strategy & Growth',
    description: 'Professional Amazon consulting and strategy services in Canada. Expert Amazon.ca business consultation, growth planning, and strategic guidance.',
  }
};

export default function AmazonConsultingCanada() {
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
              <li className="text-gray-900 font-medium">Consulting</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amazon Consulting Canada
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
            Strategic Amazon.ca consulting and business growth sessions with experienced Amazon experts to accelerate your success.
          </p>
          <WhatsAppButton serviceName="Amazon Consulting Canada" className="bg-white text-yellow-600 hover:bg-gray-100" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Coming Soon - Amazon Consulting Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-8">
                We're currently developing comprehensive content for our Amazon Consulting services in Canada. 
                This page will soon include detailed information about:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Business Strategy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Amazon.ca market entry strategy</li>
                    <li>• Business model optimization</li>
                    <li>• Competitive positioning analysis</li>
                    <li>• Revenue growth planning</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Growth Planning</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Scaling strategies and roadmaps</li>
                    <li>• Market expansion opportunities</li>
                    <li>• Performance optimization plans</li>
                    <li>• Long-term success strategies</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait! Contact us today for immediate assistance with your Amazon Canada business strategy and consulting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/services/amazon-seller-services-canada"
                    className="inline-flex items-center justify-center px-6 py-3 border border-yellow-600 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-50 transition-colors duration-200"
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
