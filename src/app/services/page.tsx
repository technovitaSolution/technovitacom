import React from 'react';
import { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
import MultiStepForm from '@/components/MultiStepForm';

export const metadata: Metadata = {
  title: 'E-commerce Services - Technovita Solution | Complete Marketplace Solutions',
  description: 'Comprehensive e-commerce services including account management, onboarding, catalogue services, and international Amazon marketplace solutions.',
  keywords: 'e-commerce services, account management, onboarding services, catalogue services, Amazon marketplace, seller services',
  openGraph: {
    title: 'E-commerce Services - Technovita Solution',
    description: 'Complete e-commerce solutions for all major marketplaces.',
    type: 'website',
    url: 'https://technovitasolution.com/services',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Technovita Solution E-commerce Services' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Services - Technovita Solution',
    description: 'Complete e-commerce solutions for all major marketplaces.',
    images: ['/logo.webp']
  }
};

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="bg-white/20 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wide">
                COMPREHENSIVE E-COMMERCE SOLUTIONS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete E-commerce Services
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              From account setup to sales optimization, we provide end-to-end e-commerce solutions 
              for all major marketplaces including Amazon, Flipkart, Myntra, Ajio, and Nykaa.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our E-commerce Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in helping businesses scale their online presence across all major e-commerce platforms 
            with proven strategies and expert support.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-pink-500 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Brands Launched</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-pink-500 mb-2">9+</div>
            <div className="text-gray-600 font-medium">Platforms Supported</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-pink-500 mb-2">300%</div>
            <div className="text-gray-600 font-medium">Average Sales Increase</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-pink-500 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Core E-commerce Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core E-commerce Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential services to establish and grow your online business presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Catalogue Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Catalogue Services</h3>
            <p className="text-gray-600 mb-4">Professional product listing and attribute enrichment for maximum visibility and sales.</p>
            <a href="/services/catalogue-services" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>

          {/* Account Management */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">HOT</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Account Management</h3>
            <p className="text-gray-600 mb-4">Full-scale account management solutions for your stores with 24/7 monitoring.</p>
            <a href="/services/account-management" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>

          {/* Account Creation */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Account Creation</h3>
            <p className="text-gray-600 mb-4">End-to-end seller account setup on major platforms with expert guidance.</p>
            <a href="/services/account-creation" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>

          {/* Onboarding Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Onboarding Services</h3>
            <p className="text-gray-600 mb-4">Dedicated guidance and platform-specific training for new sellers.</p>
            <a href="/services/onboarding-services" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>

          {/* Sales Boost */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sales Boost</h3>
            <p className="text-gray-600 mb-4">Data-driven strategies to increase visibility and sales across platforms.</p>
            <a href="/services/sales-boost" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* International Amazon Marketplace Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Amazon Marketplace Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your business globally with our expert Amazon marketplace management services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amazon Canada */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">NEW</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon Canada Seller Services</h3>
              <p className="text-gray-600 mb-4">Complete Amazon Canada marketplace management and optimization.</p>
              <a href="/services/amazon-seller-services-canada" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Amazon USA */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon USA Seller Services</h3>
              <p className="text-gray-600 mb-4">Expert Amazon US marketplace solutions and growth strategies.</p>
              <a href="/services/amazon-usa-seller-services" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Amazon UK */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon UK Seller Services</h3>
              <p className="text-gray-600 mb-4">Professional Amazon UK marketplace management and support.</p>
              <a href="/services/amazon-uk-seller-services" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Amazon Australia */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon Australia Seller Services</h3>
              <p className="text-gray-600 mb-4">Complete Amazon Australia marketplace solutions and optimization.</p>
              <a href="/services/amazon-australia-seller-services" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Amazon UAE */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon UAE Seller Services</h3>
              <p className="text-gray-600 mb-4">Expert Amazon UAE marketplace management and growth.</p>
              <a href="/services/amazon-uae-seller-services" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to support your complete e-commerce journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ecommerce Website Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ecommerce Website Development</h3>
            <p className="text-gray-600 mb-4">Custom eCommerce websites with marketplace integration and modern design.</p>
            <a href="https://www.technovitasolution.in/website-development-services/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>

          {/* Ecommerce PhotoShoot Studio */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ecommerce PhotoShoot Studio</h3>
            <p className="text-gray-600 mb-4">Professional product photography and model shoots for stunning visuals.</p>
            <a href="https://www.technovitasolution.in/technovita-studio-services/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Get expert e-commerce solutions tailored to your needs. Start your journey to online success today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917042163504"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-600 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/917042163504?text=I%20want%20to%20know%20more%20about%20technovitasolution.com%20and%20about%20its%27%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Contact us on WhatsApp
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-pink-100">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free consultation & quote
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <Testimonials />
      </div>

      {/* Multi-Step Form Section */}
      <div className="py-16">
        <MultiStepForm />
      </div>
    </div>
  );
};

export default ServicesPage;
