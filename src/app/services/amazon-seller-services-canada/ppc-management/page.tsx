import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Amazon Canada PPC Management | Professional Amazon.ca Advertising Services 2024',
  description: 'Expert Amazon Canada PPC management services. Professional Amazon.ca advertising campaigns, sponsored ads optimization, ACOS reduction, and ROI maximization. Certified Amazon advertising specialists.',
  keywords: 'amazon canada ppc management, amazon.ca advertising services, amazon ppc canada, sponsored ads canada, amazon advertising management canada, amazon ppc optimization canada, acos reduction canada',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/ppc-management'
  },
  openGraph: {
    title: 'Amazon Canada PPC Management | Professional Amazon.ca Advertising Services',
    description: 'Expert Amazon Canada PPC management services. Professional Amazon.ca advertising campaigns, sponsored ads optimization, ACOS reduction, and ROI maximization.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/ppc-management',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Canada PPC Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Canada PPC Management | Professional Amazon.ca Advertising Services',
    description: 'Expert Amazon Canada PPC management services. Professional Amazon.ca advertising campaigns, sponsored ads optimization, ACOS reduction, and ROI maximization.',
    images: ['/Images/account-management/account-management-services.webp'],
  }
};

export default function AmazonPPCManagementCanada() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-red-700 shadow-lg border border-white border-opacity-30"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Expert Amazon.ca PPC Management
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
              Amazon Canada <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">PPC Management</span>
            </h1>
            <p className="text-xl mb-8 text-pink-100 leading-relaxed max-w-3xl mx-auto">
              Professional Amazon.ca PPC management services. Maximize your advertising ROI with expert campaign optimization, ACOS reduction, and strategic bid management from certified Amazon advertising specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#ppc-service"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Optimize My PPC Campaigns
              </Link>
              <WhatsAppButton serviceName="Amazon Canada PPC Management" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Top */}
      <section className="py-20 bg-white" id="ppc-service">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Maximize Your Amazon Canada Advertising ROI"
            subtitle="Ready to scale your Amazon.ca business with profitable PPC campaigns? Our certified Amazon advertising experts will optimize your campaigns, reduce ACOS, and maximize your return on ad spend."
            ctaText="Get My PPC Audit"
            serviceName="Amazon Canada PPC Management"
            
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-ppc-top"
          />
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Amazon Canada PPC Management</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our expert PPC management services are designed to maximize your advertising performance on Amazon.ca with data-driven strategies and continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Proven Performance:</strong> Our Amazon Canada PPC management has helped clients achieve an average <strong>40% ACOS reduction</strong> and <strong>300% increase in advertising revenue</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our PPC Management Delivers Results</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certified Amazon Advertising Experts</h4>
                    <p className="text-gray-600 text-sm">Amazon-certified PPC specialists with deep Canadian market expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Advanced Campaign Optimization</h4>
                    <p className="text-gray-600 text-sm">AI-powered bid management and continuous performance optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Keyword Research</h4>
                    <p className="text-gray-600 text-sm">Canadian market-specific keyword analysis and competitor research</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent Reporting</h4>
                    <p className="text-gray-600 text-sm">Detailed performance reports and actionable insights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">PPC Management Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Account Audit</h4>
                    <p className="text-gray-600 text-sm">Comprehensive analysis of current PPC performance and opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                    <p className="text-gray-600 text-sm">Custom PPC strategy based on your goals and Canadian market data</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Campaign Setup</h4>
                    <p className="text-gray-600 text-sm">Professional campaign structure and keyword implementation</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Optimization & Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous bid optimization and performance monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reporting & Growth</h4>
                    <p className="text-gray-600 text-sm">Regular performance reports and scaling strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PPC Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon Canada PPC Services</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive PPC management covering all Amazon.ca advertising formats and strategies for maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Sponsored Products */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Sponsored Products</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Automatic campaign optimization</li>
                <li>• Manual targeting strategies</li>
                <li>• Keyword bid management</li>
                <li>• Negative keyword optimization</li>
              </ul>
            </div>

            {/* Sponsored Brands */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Sponsored Brands</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Brand awareness campaigns</li>
                <li>• Custom headline creation</li>
                <li>• Store traffic optimization</li>
                <li>• Brand defense strategies</li>
              </ul>
            </div>

            {/* Sponsored Display */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Sponsored Display</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Audience targeting campaigns</li>
                <li>• Product targeting ads</li>
                <li>• Retargeting strategies</li>
                <li>• Creative optimization</li>
              </ul>
            </div>

            {/* Campaign Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Campaign Optimization</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• ACOS reduction strategies</li>
                <li>• Bid optimization algorithms</li>
                <li>• Dayparting implementation</li>
                <li>• Budget allocation optimization</li>
              </ul>
            </div>

            {/* Keyword Research */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Keyword Research</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Canadian market analysis</li>
                <li>• Competitor keyword research</li>
                <li>• Long-tail keyword discovery</li>
                <li>• Search term optimization</li>
              </ul>
            </div>

            {/* Performance Analytics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Performance Analytics</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Comprehensive reporting</li>
                <li>• ROI analysis & insights</li>
                <li>• Performance benchmarking</li>
                <li>• Growth recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Scale Your Amazon Canada Advertising?</h4>
              <p className="text-gray-700 mb-6">Stop wasting ad spend on ineffective campaigns. Get professional PPC management that delivers profitable growth and maximizes your advertising ROI on Amazon.ca.</p>
              <WhatsAppButton serviceName="Amazon Canada PPC Management" className="bg-red-600 hover:bg-red-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scale Your Amazon Canada Business with Expert PPC</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to maximize your advertising performance on Amazon.ca? Our certified PPC experts will optimize your campaigns for maximum ROI and sustainable growth.
            </p>
          </div>
          
          <ContactForm
            title="Get Professional PPC Management"
            subtitle="Transform your Amazon.ca advertising performance with expert PPC management. Our certified specialists will optimize your campaigns, reduce ACOS, and scale your business profitably on the Canadian marketplace."
            ctaText="Start My PPC Optimization"
            serviceName="Amazon Canada Professional PPC Management"
            
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-ppc-final"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">Maximize Your Amazon Canada Advertising ROI</h4>
            <p className="text-xl mb-6">
              Don't let ineffective PPC campaigns drain your budget. Get expert management that drives profitable growth and sustainable success.
            </p>
            <div className="text-lg font-semibold mb-4">
              📞 <strong>Call Now:</strong> +91 7042163504<br/>
              📧 <strong>Email:</strong> info@technovitasolution.com
            </div>
            <p className="text-pink-100">
              Professional PPC management that delivers measurable results and maximum ROI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}