import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UAE Consulting & Strategy | Expert Amazon.ae Business Growth Services - Technovita Solution',
  description: 'Professional Amazon UAE consulting and strategy services. Expert Amazon.ae business growth, market analysis, strategic planning, and performance optimization. Scale your business with Technovita Solution.',
  keywords: [
    'amazon uae consulting',
    'amazon.ae business consulting',
    'amazon uae strategy services',
    'amazon consulting uae',
    'amazon.ae business growth',
    'amazon uae market analysis',
    'amazon business strategy uae',
    'amazon.ae consulting services',
    'amazon uae expert consultant',
    'amazon business development uae',
    'amazon.ae strategic planning',
    'amazon uae performance optimization',
    'amazon business consulting uae',
    'amazon.ae growth strategy',
    'amazon uae business advisor',
    'amazon consulting expert uae',
    'amazon.ae business analysis',
    'amazon uae market research',
    'amazon business planning uae',
    'amazon.ae revenue optimization',
    'amazon uae business scaling',
    'amazon consulting services uae',
    'amazon.ae business development',
    'amazon uae strategic consulting',
    'amazon business growth uae',
    'amazon.ae performance consulting',
    'amazon uae business strategy',
    'amazon consulting agency uae',
    'amazon.ae business optimization',
    'amazon uae growth consulting'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uae-seller-services/consulting'
  },
  openGraph: {
    title: 'Amazon UAE Consulting & Strategy | Expert Amazon.ae Business Growth Services - Technovita Solution',
    description: 'Professional Amazon UAE consulting and strategy services. Expert Amazon.ae business growth, market analysis, strategic planning, and performance optimization. Scale your business with Technovita Solution.',
    url: 'https://technovitasolution.com/services/amazon-uae-seller-services/consulting',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UAE Consulting & Strategy - Expert Amazon.ae Business Growth Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UAE Consulting & Strategy | Expert Amazon.ae Business Growth Services - Technovita Solution',
    description: 'Professional Amazon UAE consulting and strategy services. Expert Amazon.ae business growth, market analysis, strategic planning, and performance optimization. Scale your business with Technovita Solution.',
    images: ['/Images/account-management/account-management-services.webp'],
  },
};

export default function AmazonUAEConsulting() {
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
            "name": "Amazon UAE Consulting & Strategy",
            "description": "Professional Amazon UAE consulting and strategy services. Expert Amazon.ae business growth, market analysis, strategic planning, and performance optimization.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Business Consulting",
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Amazon UAE Consulting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Business Strategy",
                    "description": "Strategic business planning and growth strategies for Amazon UAE"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Market Analysis",
                    "description": "Comprehensive market analysis and competitive intelligence"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Performance Optimization",
                    "description": "Business performance optimization and revenue growth strategies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Business Development",
                    "description": "Business development and scaling strategies for Amazon UAE"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Growth Planning",
                    "description": "Long-term growth planning and strategic roadmap development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Expert Consultation",
                    "description": "One-on-one expert consultation and advisory services"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-indigo-700 shadow-lg border border-white border-opacity-30"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Professional Amazon.ae Consulting & Strategy
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
              Amazon UAE <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Consulting & Strategy</span>
            </h1>
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed max-w-3xl mx-auto">
              Professional Amazon.ae consulting and strategy services. Scale your business, optimize performance, and achieve sustainable growth with expert guidance and strategic planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#consulting-service"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Expert Consultation
              </Link>
              <WhatsAppButton serviceName="Amazon UAE Consulting & Strategy" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Top */}
      <section className="py-20 bg-white" id="consulting-service">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Scale Your Amazon UAE Business Today"
            subtitle="Ready to take your Amazon.ae business to the next level? Our consulting experts will help you develop winning strategies, optimize performance, and achieve sustainable growth in the UAE marketplace."
            ctaText="Get My Business Strategy"
            serviceName="Amazon UAE Consulting & Strategy"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-uae-consulting-top"
          />
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Amazon UAE Consulting & Strategy</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our expert consulting and strategy services are designed to help you scale your Amazon.ae business, optimize performance, and achieve sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-indigo-700">
                      <strong>Proven Results:</strong> Our Amazon UAE consulting services have helped clients achieve an average <strong>250% increase in revenue</strong> and <strong>300% improvement in business efficiency</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Consulting & Strategy Works</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Strategic Business Planning</h4>
                    <p className="text-gray-600 text-sm">Comprehensive business strategy development tailored for UAE market</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Market Analysis & Intelligence</h4>
                    <p className="text-gray-600 text-sm">In-depth market research and competitive analysis for informed decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Performance Optimization</h4>
                    <p className="text-gray-600 text-sm">Data-driven optimization strategies for maximum business efficiency</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Growth Strategy Development</h4>
                    <p className="text-gray-600 text-sm">Scalable growth strategies for long-term business success</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Consulting Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Assessment</h4>
                    <p className="text-gray-600 text-sm">Comprehensive analysis of current business performance</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Analysis</h4>
                    <p className="text-gray-600 text-sm">In-depth UAE market research and competitive analysis</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                    <p className="text-gray-600 text-sm">Customized business strategy and growth roadmap</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation Support</h4>
                    <p className="text-gray-600 text-sm">Ongoing support and guidance for strategy execution</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous monitoring and optimization of business performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Consulting & Strategy Services</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Every aspect of your Amazon.ae business strategy optimized for maximum growth and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Business Strategy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Business Strategy</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Strategic business planning</li>
                <li>• Growth roadmap development</li>
                <li>• Market positioning strategies</li>
                <li>• Competitive advantage analysis</li>
              </ul>
            </div>

            {/* Market Analysis */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Market Analysis</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• UAE market research</li>
                <li>• Competitor analysis</li>
                <li>• Consumer behavior insights</li>
                <li>• Market opportunity identification</li>
              </ul>
            </div>

            {/* Performance Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Performance Optimization</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Business efficiency improvement</li>
                <li>• Revenue optimization strategies</li>
                <li>• Cost reduction analysis</li>
                <li>• ROI maximization</li>
              </ul>
            </div>

            {/* Business Development */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Business Development</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Business scaling strategies</li>
                <li>• Partnership development</li>
                <li>• Market expansion planning</li>
                <li>• Revenue stream diversification</li>
              </ul>
            </div>

            {/* Growth Planning */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Growth Planning</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Long-term growth strategies</li>
                <li>• Milestone planning</li>
                <li>• Resource allocation</li>
                <li>• Risk management</li>
              </ul>
            </div>

            {/* Expert Consultation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Expert Consultation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• One-on-one expert sessions</li>
                <li>• Strategic advisory services</li>
                <li>• Business coaching</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Scale Your Amazon UAE Business?</h4>
              <p className="text-gray-700 mb-6">Get expert guidance to develop winning strategies, optimize performance, and achieve sustainable growth on Amazon.ae. Our consultants will help you reach your business goals.</p>
              <WhatsAppButton serviceName="Amazon UAE Consulting & Strategy" className="bg-indigo-600 hover:bg-indigo-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Amazon UAE Business Today</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to take your Amazon.ae business to the next level? Our consulting experts will help you develop winning strategies and achieve sustainable growth.
            </p>
          </div>
          
          <ContactForm
            title="Get Professional Business Consulting"
            subtitle="Transform your Amazon.ae business with expert consulting and strategy services. Our team will help you develop winning strategies, optimize performance, and achieve sustainable growth on the UAE marketplace."
            ctaText="Get My Business Strategy"
            serviceName="Amazon UAE Professional Consulting & Strategy"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-uae-consulting-final"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">Maximize Your Amazon UAE Business Potential</h4>
            <p className="text-xl mb-6">
              Don't let poor strategy hold back your growth. Get professional consulting that drives real results on Amazon.ae.
            </p>
            <div className="text-lg font-semibold mb-4">
              📞 <strong>Call Now:</strong> +91 7042163504<br/>
              📧 <strong>Email:</strong> info@technovitasolution.com
            </div>
            <p className="text-indigo-100">
              Professional consulting and strategy services that drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}
