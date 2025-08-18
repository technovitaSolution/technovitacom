import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Amazon PPC Management Canada | Amazon.ca Advertising Services',
  description: 'Expert Amazon PPC management services in Canada. Professional Amazon.ca advertising campaigns, sponsored ads management, and ACOS optimization.',
  keywords: 'amazon ppc management canada, amazon advertising services canada, amazon sponsored ads expert, reduce acos amazon canada, amazon.ca ppc services',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/ppc-management'
  },
  openGraph: {
    title: 'Amazon PPC Management Canada | Amazon.ca Advertising Services',
    description: 'Expert Amazon PPC management services in Canada. Professional Amazon.ca advertising campaigns, sponsored ads management, and ACOS optimization.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/ppc-management',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon PPC Management Canada | Amazon.ca Advertising Services',
    description: 'Expert Amazon PPC management services in Canada. Professional Amazon.ca advertising campaigns, sponsored ads management, and ACOS optimization.',
  }
};

export default function AmazonPPCManagementCanada() {
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
              <li className="text-gray-900 font-medium">PPC Management</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amazon PPC Management Canada
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Expert Amazon.ca PPC management and advertising services to boost visibility, reduce ACOS, and maximize your advertising ROI.
          </p>
          <WhatsAppButton serviceName="Amazon PPC Management Canada" className="bg-white text-green-600 hover:bg-gray-100" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Coming Soon - Amazon PPC Management Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-8">
                We're currently developing comprehensive content for our Amazon PPC Management services in Canada. 
                This page will soon include detailed information about:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Campaign Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sponsored Products campaigns</li>
                    <li>• Sponsored Brands advertising</li>
                    <li>• Sponsored Display campaigns</li>
                    <li>• Campaign optimization and scaling</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">Performance Optimization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ACOS reduction strategies</li>
                    <li>• Keyword research and bidding</li>
                    <li>• Negative keyword optimization</li>
                    <li>• ROI maximization techniques</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait! Contact us today for immediate assistance with your Amazon Canada PPC campaigns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/services/amazon-seller-services-canada"
                    className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200"
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
