import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Amazon Canada Consulting Services | Expert Amazon.ca Business Strategy 2024',
  description: 'Professional Amazon Canada consulting services. Expert Amazon.ca business strategy, growth planning, market analysis, and performance optimization. Strategic guidance from certified Amazon consultants.',
  keywords: 'amazon canada consulting services, amazon.ca business strategy, amazon canada expert consultation, amazon growth consulting canada, amazon business advisor canada, amazon strategy consultant',
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-seller-services-canada/consulting'
  },
  openGraph: {
    title: 'Amazon Canada Consulting Services | Expert Amazon.ca Business Strategy',
    description: 'Professional Amazon Canada consulting services. Expert Amazon.ca business strategy, growth planning, market analysis, and performance optimization from certified consultants.',
    url: 'https://technovitasolution.com/services/amazon-seller-services-canada/consulting',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/account-management/account-management-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Canada Consulting Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Canada Consulting Services | Expert Amazon.ca Business Strategy',
    description: 'Professional Amazon Canada consulting services. Expert Amazon.ca business strategy, growth planning, market analysis, and performance optimization from certified consultants.',
    images: ['/Images/account-management/account-management-services.webp'],
  }
};

export default function AmazonConsultingCanada() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
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
              Expert Amazon.ca Strategic Consulting
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
              Amazon Canada <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Consulting Services</span>
            </h1>
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed max-w-3xl mx-auto">
              Strategic Amazon.ca consulting from certified experts. Get personalized business strategy, market analysis, and growth planning to dominate the Canadian marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#consulting-service"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Get Strategic Consultation
              </Link>
              <WhatsAppButton serviceName="Amazon Canada Consulting Services" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Top */}
      <section className="py-20 bg-white" id="consulting-service">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Get Expert Amazon Canada Strategy Consultation"
            subtitle="Ready to take your Amazon.ca business to the next level? Our certified Amazon consultants will analyze your business and create a customized growth strategy for the Canadian marketplace."
            ctaText="Book My Strategy Session"
            serviceName="Amazon Canada Consulting Services"
            backgroundColor="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-consulting-top"
          />
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Amazon Canada Business Consulting</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our strategic Amazon.ca consulting services provide you with the insights, strategies, and guidance needed to build a successful and profitable business on the Canadian marketplace.
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
                      <strong>Proven Results:</strong> Our Amazon Canada consulting has helped clients achieve an average <strong>150% revenue increase</strong> within 6 months of implementing our strategic recommendations.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Amazon Canada Consulting?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certified Amazon Experts</h4>
                    <p className="text-gray-600 text-sm">Amazon-certified consultants with 5+ years of Canada marketplace experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Customized Strategy Development</h4>
                    <p className="text-gray-600 text-sm">Personalized business strategies based on your specific products and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Market Analysis</h4>
                    <p className="text-gray-600 text-sm">Deep dive into Canadian market trends, competition, and opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ongoing Strategic Support</h4>
                    <p className="text-gray-600 text-sm">Continued guidance and strategy adjustments as your business grows</p>
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
                    <p className="text-gray-600 text-sm">Comprehensive analysis of your current Amazon.ca presence</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Analysis</h4>
                    <p className="text-gray-600 text-sm">Deep dive into Canadian market opportunities and competition</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                    <p className="text-gray-600 text-sm">Custom growth strategy with actionable recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation Plan</h4>
                    <p className="text-gray-600 text-sm">Step-by-step roadmap with timelines and priorities</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">Regular check-ins and strategy refinements</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Amazon Canada Consulting Services</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive consulting services designed to accelerate your Amazon.ca business growth and maximize profitability.
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
                <li>• Growth strategy development</li>
                <li>• Revenue optimization planning</li>
                <li>• Market expansion strategies</li>
                <li>• Competitive positioning</li>
              </ul>
            </div>

            {/* Market Analysis */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Market Analysis</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Canadian market research</li>
                <li>• Competitor analysis</li>
                <li>• Trend identification</li>
                <li>• Opportunity assessment</li>
              </ul>
            </div>

            {/* Performance Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Performance Optimization</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Account health assessment</li>
                <li>• Conversion rate optimization</li>
                <li>• Profit margin analysis</li>
                <li>• Operational efficiency</li>
              </ul>
            </div>

            {/* Product Strategy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Strategy</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Product portfolio optimization</li>
                <li>• New product launch strategy</li>
                <li>• Pricing strategy development</li>
                <li>• Inventory planning</li>
              </ul>
            </div>

            {/* Marketing Strategy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Marketing Strategy</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Amazon advertising strategy</li>
                <li>• Brand building guidance</li>
                <li>• Customer acquisition plans</li>
                <li>• External traffic strategies</li>
              </ul>
            </div>

            {/* Compliance & Risk */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Compliance & Risk</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Canadian regulation compliance</li>
                <li>• Risk assessment & mitigation</li>
                <li>• Policy violation prevention</li>
                <li>• Account protection strategies</li>
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
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Amazon Canada Business?</h4>
              <p className="text-gray-700 mb-6">Get strategic insights and actionable recommendations from our certified Amazon Canada consultants. Let's discuss your business goals and create a winning strategy.</p>
              <WhatsAppButton serviceName="Amazon Canada Consulting Services" className="bg-indigo-600 hover:bg-indigo-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Personalized Amazon Canada Strategy</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to take your Amazon.ca business to the next level? Our expert consultants will analyze your business and provide strategic recommendations tailored to the Canadian marketplace.
            </p>
          </div>
          
          <ContactForm
            title="Book Your Amazon Canada Strategy Session"
            subtitle="Get expert strategic guidance from certified Amazon consultants. We'll analyze your business, identify growth opportunities, and create a customized roadmap for success on Amazon.ca."
            ctaText="Schedule My Strategy Session"
            serviceName="Amazon Canada Strategic Consulting"
            backgroundColor="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-canada-consulting-final"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">Accelerate Your Amazon Canada Success</h4>
            <p className="text-xl mb-6">
              Don't navigate the complex Amazon.ca marketplace alone. Get expert strategic guidance and proven methodologies to build a thriving Canadian business.
            </p>
            <div className="text-lg font-semibold mb-4">
              📞 <strong>Call Now:</strong> +91 7451073504<br/>
              📧 <strong>Email:</strong> info@technovitasolution.com
            </div>
            <p className="text-indigo-100">
              Strategic consulting that delivers measurable results and sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}