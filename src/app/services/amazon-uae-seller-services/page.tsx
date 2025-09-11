import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import './animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UAE Seller Services | Expert Amazon.ae Management & Consulting - Technovita Solution',
  description: 'Leading Amazon seller services in UAE. Expert Amazon.ae account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 500+ UAE sellers trust Technovita Solution for marketplace success.',
  keywords: [
    'amazon seller services uae',
    'amazon seller services in uae', 
    'amazon uae services',
    'amazon.ae management',
    'amazon account setup uae',
    'amazon listing optimization uae',
    'amazon ppc management uae',
    'amazon consulting uae',
    'amazon seo services uae',
    'amazon seller account uae',
    'amazon.ae seller services',
    'amazon uae seller account',
    'amazon marketplace uae',
    'amazon seller onboarding uae',
    'amazon product listing uae',
    'amazon advertising uae',
    'amazon suspension appeal uae',
    'amazon account reinstatement uae',
    'amazon seller consulting uae',
    'amazon uae experts',
    'amazon.ae optimization',
    'amazon seller support uae',
    'amazon marketplace management uae',
    'amazon seller account management uae',
    'amazon uae business services',
    'amazon dubai seller services',
    'amazon abu dhabi seller services',
    'amazon middle east seller services',
    'amazon gcc seller services',
    'amazon uae tax registration',
    'amazon vat uae',
    'amazon uae compliance'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uae-seller-services'
  },
  openGraph: {
    title: 'Amazon UAE Seller Services | Expert Amazon.ae Management & Consulting - Technovita Solution',
    description: 'Leading Amazon seller services in UAE. Expert Amazon.ae account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 500+ UAE sellers trust Technovita Solution for marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-uae-seller-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-uae/amazon-uae-seller-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Seller Services UAE - Expert Amazon.ae Management & Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UAE Seller Services | Expert Amazon.ae Management & Consulting - Technovita Solution',
    description: 'Leading Amazon seller services in UAE. Expert Amazon.ae account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 500+ UAE sellers trust Technovita Solution for marketplace success.',
    images: ['/Images/amazon-uae/amazon-uae-seller-services.webp'],
  },
};

const amazonUAEServices = [
  {
    title: 'Amazon.ae Seller Account Onboarding Service',
    description: 'Complete Amazon.ae seller account setup and onboarding with professional guidance through registration and verification.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: '/services/amazon-uae-seller-services/account-onboarding-service',
    features: ['Account Registration', 'VAT Setup', 'Bank Integration', 'Verification Process']
  },
  {
    title: 'Listing Creation & Optimization',
    description: 'Professional Amazon.ae product listing creation and optimization for maximum visibility and conversion rates.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/amazon-uae-seller-services/listing-optimization',
    features: ['SEO Optimization', 'Title Enhancement', 'Image Optimization', 'A+ Content']
  },
  {
    title: 'Amazon Advertising (PPC)',
    description: 'Expert Amazon.ae PPC management and advertising campaigns to boost visibility and reduce advertising costs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    href: '/services/amazon-uae-seller-services/ppc-management',
    features: ['Sponsored Ads', 'Keyword Research', 'ACOS Optimization', 'Campaign Management']
  },
  {
    title: 'Amazon SEO & Ranking',
    description: 'Advanced Amazon.ae SEO strategies and keyword ranking services to improve product visibility and organic traffic.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    href: '/services/amazon-uae-seller-services/seo-ranking',
    features: ['Keyword Research', 'Ranking Improvement', 'Search Optimization', 'Competitor Analysis']
  },
  {
    title: 'Suspension Appeal Services',
    description: 'Professional Amazon.ae account suspension appeal and reinstatement services with expert guidance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    href: '/services/amazon-uae-seller-services/suspension-appeal',
    features: ['Account Recovery', 'Appeal Writing', 'Policy Compliance', 'Reinstatement Support']
  },
  {
    title: 'Amazon Consulting & Strategy',
    description: 'Strategic Amazon.ae consulting and business growth sessions with experienced Amazon experts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/amazon-uae-seller-services/consulting',
    features: ['Business Strategy', 'Growth Planning', 'Market Analysis', 'Expert Consultation']
  }
];

export default function AmazonSellerServicesUAE() {
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
            "name": "Amazon Seller Services UAE",
            "description": "Leading Amazon seller services in UAE. Expert Amazon.ae account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Marketplace Management",
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Amazon UAE Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Seller Account Onboarding",
                    "description": "Complete Amazon.ae seller account setup and onboarding with professional guidance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Listing Optimization",
                    "description": "Professional Amazon.ae product listing creation and optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae PPC Management",
                    "description": "Expert Amazon.ae PPC management and advertising campaigns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae SEO & Ranking",
                    "description": "Advanced Amazon.ae SEO strategies and keyword ranking services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Suspension Appeal",
                    "description": "Professional Amazon.ae account suspension appeal and reinstatement services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.ae Consulting & Strategy",
                    "description": "Strategic Amazon.ae consulting and business growth sessions"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-subtle text-red-800 shadow-lg border border-white border-opacity-30"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                #1 Amazon Services in UAE
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Amazon Seller Services</span>
                <br />
                <span className="text-white">in UAE</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Professional Amazon.ae seller services helping UAE businesses launch, scale, and dominate the Amazon marketplace with proven strategies and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Book Free Consultation
                </Link>
                <WhatsAppButton serviceName="Amazon Seller Services UAE" className="border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur opacity-30 animate-pulse"></div>
              <Image
                src="/Images/amazon-uae/amazon-uae-seller-services-technovita.webp"
                alt="Amazon Seller Services UAE - Professional Support"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                🇦🇪 UAE Expert
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce animation-delay-1000">
                ⭐ 5-Star Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Leading Amazon UAE Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Amazon.ae Services</span> in UAE
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              As UAE's leading Amazon seller service provider, we specialize in helping UAE businesses succeed on Amazon.ae. Our comprehensive Amazon seller services in UAE include everything from account setup to advanced PPC management, designed specifically for the UAE marketplace.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">UAE Sellers</h3>
              <p className="text-gray-600 text-sm">Successfully Onboarded</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">98%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Success Rate</h3>
              <p className="text-gray-600 text-sm">Amazon.ae Approvals</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Years Experience</h3>
              <p className="text-gray-600 text-sm">Amazon UAE Market</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Support</h3>
              <p className="text-gray-600 text-sm">UAE Time Zones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Amazon.ae <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Service Suite</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon seller services in UAE cover every aspect of your Amazon.ae business. From initial account setup to advanced optimization strategies, we provide end-to-end solutions for UAE Amazon sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonUAEServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group/item">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-6 rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Why UAE Businesses Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leading <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Amazon Seller Services</span> in UAE
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              When you choose our Amazon seller services in UAE, you're partnering with the most trusted Amazon.ae experts. Here's why UAE businesses prefer our comprehensive Amazon seller solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="relative">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce">🏆</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Certified Amazon Consultants</h3>
              <p className="text-gray-600 leading-relaxed">Official Amazon certifications and proven expertise in UAE marketplace regulations and best practices</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce animation-delay-500">⭐</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">10+ Years Amazon Experience</h3>
              <p className="text-gray-600 leading-relaxed">Decade of specialized experience in Amazon.ae marketplace, helping UAE sellers achieve sustainable growth</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce animation-delay-1000">🇦🇪</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">UAE Market Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Deep understanding of UAE consumer behavior, local regulations, and Amazon.ae specific requirements</p>
            </div>
            
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce animation-delay-1500">🚀</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Proven Success Record</h3>
              <p className="text-gray-600 leading-relaxed">Documented track record of successful Amazon.ae launches, account recoveries, and revenue growth for UAE clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-gradient-to-br from-gray-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Amazon Seller Services in UAE Matter
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Amazon.ae</strong> represents one of UAE's largest e-commerce opportunities, but navigating the platform's complexities requires specialized expertise. Our <strong>Amazon seller services in UAE</strong> are designed to help UAE businesses overcome common challenges and achieve sustainable growth.
                </p>
                <p>
                  From understanding UAE VAT requirements to optimizing for local search behavior, our comprehensive <strong>Amazon UAE services</strong> ensure your business complies with all regulations while maximizing visibility and sales potential.
                </p>
                <p>
                  Whether you're a startup looking to launch on Amazon.ae or an established business seeking to optimize your existing presence, our <strong>Amazon seller services in UAE</strong> provide the expertise and support you need to succeed.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">UAE Market Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Strategic Location</h4>
                      <p className="text-gray-600 text-sm">Gateway to Middle East and GCC markets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Growing E-commerce Market</h4>
                      <p className="text-gray-600 text-sm">Rapidly expanding online shopping adoption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business-Friendly Environment</h4>
                      <p className="text-gray-600 text-sm">Favorable regulations and tax policies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">High Purchasing Power</h4>
                      <p className="text-gray-600 text-sm">Affluent consumer base with strong buying capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Start Your Amazon UAE Journey Today"
            subtitle="Ready to dominate the Amazon.ae marketplace? Get expert guidance from UAE's leading Amazon seller service providers. Our specialists will create a customized strategy for your business success."
            ctaText="Get My Free Amazon Strategy"
            serviceName="Amazon Seller Services UAE"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-uae-contact"
          />
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}
