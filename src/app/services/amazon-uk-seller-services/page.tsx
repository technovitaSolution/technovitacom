import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import './animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon UK Seller Services | Expert Amazon.co.uk Management & Consulting - Technovita Solution',
  description: 'Leading Amazon seller services in the UK. Expert Amazon.co.uk account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 1000+ UK sellers trust Technovita Solution for marketplace success.',
  keywords: [
    'amazon seller services uk',
    'amazon seller services in uk', 
    'amazon uk services',
    'amazon.co.uk management',
    'amazon account setup uk',
    'amazon listing optimization uk',
    'amazon ppc management uk',
    'amazon consulting uk',
    'amazon seo services uk',
    'amazon seller account uk',
    'amazon.co.uk seller services',
    'amazon uk seller account',
    'amazon marketplace uk',
    'amazon seller onboarding uk',
    'amazon product listing uk',
    'amazon advertising uk',
    'amazon suspension appeal uk',
    'amazon account reinstatement uk',
    'amazon seller consulting uk',
    'amazon uk experts',
    'amazon.co.uk optimization',
    'amazon seller support uk',
    'amazon marketplace management uk',
    'amazon seller account management uk',
    'amazon uk business services',
    'amazon fba uk services',
    'amazon brand registry uk',
    'amazon global selling uk',
    'amazon business uk services',
    'amazon handmade uk',
    'amazon launchpad uk',
    'amazon renewed uk',
    'amazon vat services uk',
    'amazon multi channel fulfilment uk',
    'amazon transparency uk',
    'amazon stores uk',
    'amazon a+ content uk'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-uk-seller-services'
  },
  openGraph: {
    title: 'Amazon UK Seller Services | Expert Amazon.co.uk Management & Consulting - Technovita Solution',
    description: 'Leading Amazon seller services in the UK. Expert Amazon.co.uk account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 1000+ UK sellers trust Technovita Solution for marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-uk-seller-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-uk/amazon-uk-seller-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon UK Seller Services - Expert Amazon.co.uk Management & Consulting',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon UK Seller Services | Expert Amazon.co.uk Management & Consulting - Technovita Solution',
    description: 'Leading Amazon seller services in the UK. Expert Amazon.co.uk account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 1000+ UK sellers trust Technovita Solution for marketplace success.',
    images: ['/Images/amazon-uk/amazon-uk-seller-services.webp'],
  },

};

const amazonUKServices = [
  {
    title: 'Amazon.co.uk Seller Account Onboarding Service',
    description: 'Complete Amazon.co.uk seller account setup and onboarding with professional guidance through registration, VAT setup, and verification.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/account-onboarding-service',
    features: ['Account Registration', 'VAT Setup', 'Bank Integration', 'UK Verification Process']
  },
  {
    title: 'Listing Creation & Optimization',
    description: 'Professional Amazon.co.uk product listing creation and optimization for maximum visibility and conversion rates in the UK market.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/listing-optimization',
    features: ['UK SEO Optimization', 'Title Enhancement', 'Image Optimization', 'A+ Content UK']
  },
  {
    title: 'Amazon Advertising (PPC) UK',
    description: 'Expert Amazon.co.uk PPC management and advertising campaigns to boost visibility and reduce advertising costs in the UK marketplace.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/ppc-management',
    features: ['Sponsored Ads UK', 'UK Keyword Research', 'ACOS Optimization', 'Campaign Management']
  },
  {
    title: 'Amazon SEO & Ranking UK',
    description: 'Advanced Amazon.co.uk SEO strategies and keyword ranking services to improve product visibility and organic traffic in the UK.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/seo-ranking',
    features: ['UK Keyword Research', 'Ranking Improvement', 'Search Optimization', 'UK Competitor Analysis']
  },
  {
    title: 'Suspension Appeal Services UK',
    description: 'Professional Amazon.co.uk account suspension appeal and reinstatement services with expert guidance for UK sellers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/suspension-appeal',
    features: ['Account Recovery UK', 'Appeal Writing', 'UK Policy Compliance', 'Reinstatement Support']
  },
  {
    title: 'Amazon Consulting & Strategy UK',
    description: 'Strategic Amazon.co.uk consulting and business growth sessions with experienced Amazon UK marketplace experts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/consulting',
    features: ['UK Business Strategy', 'Growth Planning', 'UK Market Analysis', 'Expert Consultation']
  },
  {
    title: 'Amazon FBA UK Services',
    description: 'Complete Fulfilment by Amazon UK setup and management, leveraging Amazon\'s logistics network for UK customers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/fba-services',
    features: ['FBA UK Setup', 'Inventory Management', 'UK Logistics', 'Customer Service']
  },
  {
    title: 'Amazon Brand Registry UK',
    description: 'Protect your brand and unlock advanced marketing tools with Amazon Brand Registry UK enrollment and management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/brand-registry',
    features: ['Brand Protection UK', 'Enhanced Content', 'Amazon Stores UK', 'IP Protection']
  },
  {
    title: 'Amazon VAT Services UK',
    description: 'Simplify VAT registration and compliance across Europe with Amazon VAT Services UK, ensuring full regulatory compliance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/amazon-uk-seller-services/vat-services',
    features: ['VAT Registration UK', 'EU VAT Compliance', 'Tax Filing', 'HMRC Liaison']
  }
];

export default function AmazonSellerServicesUK() {
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
            "name": "Amazon UK Seller Services",
            "description": "Leading Amazon seller services in the UK. Expert Amazon.co.uk account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Marketplace Management",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Amazon UK Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.co.uk Seller Account Onboarding",
                    "description": "Complete Amazon.co.uk seller account setup and onboarding with professional guidance"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-subtle text-blue-800 shadow-lg border border-white border-opacity-30"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                #1 Amazon Services in UK
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Amazon Seller Services</span>
                <br />
                <span className="text-white">in United Kingdom</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Professional Amazon.co.uk seller services helping UK businesses launch, scale, and dominate the Amazon marketplace with proven strategies and expert guidance.
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
                <WhatsAppButton serviceName="Amazon UK Seller Services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur opacity-30 animate-pulse"></div>
              <Image
                src="/Images/amazon-canada/amazon-canada-seller-services.webp"
                alt="Amazon UK Seller Services - Professional Support"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                🇬🇧 UK Expert
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce animation-delay-1000">
                ⭐ 5-Star Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Amazon.co.uk <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service Suite</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon seller services in the UK cover every aspect of your Amazon.co.uk business. From initial account setup to advanced optimization strategies, we provide end-to-end solutions for UK Amazon sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonUKServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Start Your Amazon UK Journey Today"
            subtitle="Ready to dominate the Amazon.co.uk marketplace? Get expert guidance from the UK's leading Amazon seller service providers. Our specialists will create a customised strategy for your business success."
            ctaText="Get My Free Amazon Strategy"
            serviceName="Amazon UK Seller Services"
            accentColor="from-yellow-400 to-orange-400"
            showWhatsApp={true}
            formId="amazon-uk-contact"
          />
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}

