import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK Consulting Service | Expert Amazon.co.uk Strategy & Growth Consulting - Technovita Solution',
  description: 'Professional Amazon UK consulting service. Expert Amazon.co.uk strategy consulting, business growth planning, market analysis, seller optimization, and marketplace success guidance for UK sellers.',
  keywords: [
    'amazon uk consulting',
    'amazon.co.uk consulting service',
    'amazon uk consultant',
    'amazon uk strategy consulting',
    'amazon uk business consulting',
    'amazon uk growth consulting',
    'amazon uk market analysis',
    'amazon uk seller consulting',
    'amazon.co.uk business strategy',
    'amazon uk optimization consulting',
    'amazon uk expert consultant',
    'amazon uk marketplace consulting',
    'amazon uk success consulting',
    'amazon uk performance consulting',
    'amazon uk strategic planning',
    'amazon uk business advisor',
    'amazon uk growth strategy',
    'amazon uk market expert',
    'amazon uk seller guidance',
    'amazon uk consultation'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services/consulting'
  },
  openGraph: {
    title: 'Amazon UK Consulting Service | Expert Amazon.co.uk Strategy & Growth Consulting - Technovita Solution',
    description: 'Professional Amazon UK consulting service. Expert Amazon.co.uk strategy consulting, business growth planning, market analysis, seller optimization, and marketplace success guidance for UK sellers.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services/consulting',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK Consulting Service - Expert Strategy & Growth Consulting',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK Consulting Service | Expert Amazon.co.uk Strategy & Growth Consulting - Technovita Solution',
    description: 'Professional Amazon UK consulting service. Expert Amazon.co.uk strategy consulting, business growth planning, market analysis, seller optimization, and marketplace success guidance for UK sellers.',
    images: ['/Images/account-management/account-management-services.webp'],
  },
};

export default function AmazonUKConsulting() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-indigo-700 shadow-lg border border-white border-opacity-30" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Amazon.co.uk Strategy Consulting
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                Amazon UK <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Consulting</span> Service
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Transform your Amazon.co.uk business with expert consulting. Strategic guidance, growth planning, and marketplace optimization from certified Amazon UK specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#consulting-service" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Expert Guidance
                </Link>
                <WhatsAppButton serviceName="Amazon UK Consulting" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="consulting-service">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              title="Transform Your Amazon UK Business"
              subtitle="Ready to scale your Amazon.co.uk business to new heights? Our expert consultants will analyze your current performance, identify growth opportunities, and create a customized strategy for marketplace success."
              ctaText="Book My Strategy Session"
              serviceName="Amazon UK Consulting"
              accentColor="from-yellow-400 to-orange-400"
              showWhatsApp={true}
              formId="amazon-uk-consulting"
            />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Amazon UK Consulting Solutions</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive consulting service covers every aspect of Amazon.co.uk business optimization and growth strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Business Strategy',
                  description: 'Comprehensive business strategy development for Amazon UK success',
                  icon: '🎯',
                  features: ['Market positioning', 'Competitive analysis', 'Growth planning', 'Revenue optimization']
                },
                {
                  title: 'Market Analysis',
                  description: 'In-depth analysis of UK market opportunities and trends',
                  icon: '📊',
                  features: ['Market research', 'Trend analysis', 'Opportunity identification', 'Risk assessment']
                },
                {
                  title: 'Product Strategy',
                  description: 'Product portfolio optimization and launch strategies',
                  icon: '📦',
                  features: ['Product selection', 'Launch planning', 'Portfolio optimization', 'Lifecycle management']
                },
                {
                  title: 'Performance Audit',
                  description: 'Complete audit of your Amazon UK seller performance',
                  icon: '🔍',
                  features: ['Account health review', 'Performance metrics', 'Issue identification', 'Improvement roadmap']
                },
                {
                  title: 'Growth Planning',
                  description: 'Strategic growth planning and scaling strategies',
                  icon: '📈',
                  features: ['Scaling strategies', 'Resource planning', 'Timeline development', 'Milestone setting']
                },
                {
                  title: 'Operational Excellence',
                  description: 'Optimization of operations and processes for efficiency',
                  icon: '⚙️',
                  features: ['Process optimization', 'Workflow improvement', 'Automation strategies', 'Cost reduction']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Consulting Process</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                A structured approach to transforming your Amazon UK business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'Comprehensive analysis of your current Amazon UK business performance and market position'
                },
                {
                  step: '02',
                  title: 'Strategy Development',
                  description: 'Custom strategy development based on your goals, market opportunities, and competitive landscape'
                },
                {
                  step: '03',
                  title: 'Implementation Planning',
                  description: 'Detailed action plan with timelines, resources, and milestones for strategy execution'
                },
                {
                  step: '04',
                  title: 'Ongoing Support',
                  description: 'Continuous monitoring, optimization, and strategic guidance to ensure long-term success'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Consulting Results That Matter</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Amazon UK consulting delivers measurable business growth and improved performance
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '300%+', label: 'Average Revenue Growth' },
                { metric: '150%+', label: 'Profit Margin Improvement' },
                { metric: '85%', label: 'Client Success Rate' },
                { metric: '50+', label: 'UK Businesses Transformed' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ContentProtectionProvider>
  );
}

