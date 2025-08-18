import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Amazon SEO & Ranking Services Canada | Amazon.ca Keyword Optimization',
  description: 'Professional Amazon SEO and ranking services in Canada. Expert Amazon.ca keyword optimization, search ranking improvement, and organic visibility enhancement.',
  keywords: 'amazon seo services canada, amazon keyword ranking canada, rank products on amazon.ca, improve amazon product ranking, amazon.ca seo optimization',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/seo-ranking'
  },
  openGraph: {
    title: 'Amazon SEO & Ranking Services Canada | Amazon.ca Keyword Optimization',
    description: 'Professional Amazon SEO and ranking services in Canada. Expert Amazon.ca keyword optimization, search ranking improvement, and organic visibility enhancement.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/seo-ranking',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon SEO & Ranking Services Canada | Amazon.ca Keyword Optimization',
    description: 'Professional Amazon SEO and ranking services in Canada. Expert Amazon.ca keyword optimization, search ranking improvement, and organic visibility enhancement.',
  }
};

export default function AmazonSEORankingCanada() {
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
              <li className="text-gray-900 font-medium">SEO & Ranking</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amazon SEO & Ranking Canada
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Advanced Amazon.ca SEO strategies and keyword ranking services to improve product visibility and drive organic traffic.
          </p>
          <WhatsAppButton serviceName="Amazon SEO Ranking Canada" className="bg-white text-purple-600 hover:bg-gray-100" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Coming Soon - Amazon SEO & Ranking Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-8">
                We're currently developing comprehensive content for our Amazon SEO & Ranking services in Canada. 
                This page will soon include detailed information about:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Keyword Research</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High-converting keyword identification</li>
                    <li>• Long-tail keyword opportunities</li>
                    <li>• Search volume and competition analysis</li>
                    <li>• Canadian market keyword research</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">Ranking Improvement</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Organic ranking optimization</li>
                    <li>• Search algorithm compliance</li>
                    <li>• Competitor ranking analysis</li>
                    <li>• Performance tracking and reporting</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait! Contact us today for immediate assistance with your Amazon Canada SEO and ranking optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/services/amazon-seller-services-canada"
                    className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-200"
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
