import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Amazon Listing Optimization Canada | Amazon.ca Product Listing Services',
  description: 'Professional Amazon listing optimization services in Canada. Expert Amazon.ca product listing creation, SEO optimization, and conversion enhancement.',
  keywords: 'amazon listing optimization canada, amazon product listing services, amazon seo canada, optimize amazon product titles descriptions, amazon.ca listing services',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/listing-optimization'
  },
  openGraph: {
    title: 'Amazon Listing Optimization Canada | Amazon.ca Product Listing Services',
    description: 'Professional Amazon listing optimization services in Canada. Expert Amazon.ca product listing creation, SEO optimization, and conversion enhancement.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/listing-optimization',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Listing Optimization Canada | Amazon.ca Product Listing Services',
    description: 'Professional Amazon listing optimization services in Canada. Expert Amazon.ca product listing creation, SEO optimization, and conversion enhancement.',
  }
};

export default function AmazonListingOptimizationCanada() {
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
              <li className="text-gray-900 font-medium">Listing Optimization</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amazon Listing Optimization Canada
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professional Amazon.ca product listing optimization services to maximize visibility, conversions, and sales performance.
          </p>
          <WhatsAppButton serviceName="Amazon Listing Optimization Canada" className="bg-white text-blue-600 hover:bg-gray-100" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Coming Soon - Amazon Listing Optimization Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-8">
                We're currently developing comprehensive content for our Amazon Listing Optimization services in Canada. 
                This page will soon include detailed information about:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">SEO Optimization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Keyword research and optimization</li>
                    <li>• Title and bullet point enhancement</li>
                    <li>• Backend search term optimization</li>
                    <li>• Competitor analysis and insights</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Content Enhancement</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional product descriptions</li>
                    <li>• A+ Content creation</li>
                    <li>• Image optimization and enhancement</li>
                    <li>• Brand story development</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait! Contact us today for immediate assistance with your Amazon Canada listing optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/services/amazon-seller-services-canada"
                    className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
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
