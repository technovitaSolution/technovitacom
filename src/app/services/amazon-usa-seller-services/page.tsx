import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import './animations.css';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'Amazon USA Seller Services | Expert Amazon.com Management & Consulting - Technovita Solution',
  description: 'Leading Amazon seller services in USA. Expert Amazon.com account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 1000+ US sellers trust Technovita Solution for marketplace success.',
  keywords: [
    'amazon seller services usa',
    'amazon seller services in usa', 
    'amazon usa services',
    'amazon.com management',
    'amazon account setup usa',
    'amazon listing optimization usa',
    'amazon ppc management usa',
    'amazon consulting usa',
    'amazon seo services usa',
    'amazon seller account usa',
    'amazon.com seller services',
    'amazon usa seller account',
    'amazon marketplace usa',
    'amazon seller onboarding usa',
    'amazon product listing usa',
    'amazon advertising usa',
    'amazon suspension appeal usa',
    'amazon account reinstatement usa',
    'amazon seller consulting usa',
    'amazon usa experts',
    'amazon.com optimization',
    'amazon seller support usa',
    'amazon marketplace management usa',
    'amazon seller account management usa',
    'amazon usa business services',
    'amazon new york seller services',
    'amazon california seller services',
    'amazon texas seller services',
    'amazon florida seller services',
    'amazon illinois seller services',
    'amazon tax usa',
    'amazon usa compliance',
    'amazon seller central usa'
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: 'https://technovitasolution.com/services/amazon-usa-seller-services'
  },
  openGraph: {
    title: 'Amazon USA Seller Services | Expert Amazon.com Management & Consulting - Technovita Solution',
    description: 'Leading Amazon seller services in USA. Expert Amazon.com account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 1000+ US sellers trust Technovita Solution for marketplace success.',
    url: 'https://technovitasolution.com/services/amazon-usa-seller-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/amazon-usa/amazon-usa-seller-services.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Seller Services USA - Expert Amazon.com Management & Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon USA Seller Services | Expert Amazon.com Management & Consulting - Technovita Solution',
    description: 'Leading Amazon seller services in USA. Expert Amazon.com account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting. 1000+ US sellers trust Technovita Solution for marketplace success.',
    images: ['/Images/amazon-usa/amazon-usa-seller-services.webp'],
  },
};

const amazonUSAServices = [
  {
    title: 'Amazon.com Seller Account Onboarding Service',
    description: 'Complete Amazon.com seller account setup and onboarding with professional guidance through registration and verification.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: '/services/amazon-usa-seller-services/account-onboarding-service',
    features: ['Account Registration', 'Tax Setup', 'Bank Integration', 'Verification Process']
  },
  {
    title: 'Listing Creation & Optimization',
    description: 'Professional Amazon.com product listing creation and optimization for maximum visibility and conversion rates.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/amazon-usa-seller-services/listing-optimization',
    features: ['SEO Optimization', 'Title Enhancement', 'Image Optimization', 'A+ Content']
  },
  {
    title: 'Amazon Advertising (PPC)',
    description: 'Expert Amazon.com PPC management and advertising campaigns to boost visibility and reduce advertising costs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    href: '/services/amazon-usa-seller-services/ppc-management',
    features: ['Sponsored Ads', 'Keyword Research', 'ACOS Optimization', 'Campaign Management']
  },
  {
    title: 'Amazon SEO & Ranking',
    description: 'Advanced Amazon.com SEO strategies and keyword ranking services to improve product visibility and organic traffic.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    href: '/services/amazon-usa-seller-services/seo-ranking',
    features: ['Keyword Research', 'Ranking Improvement', 'Search Optimization', 'Competitor Analysis']
  },
  {
    title: 'Suspension Appeal Services',
    description: 'Professional Amazon.com account suspension appeal and reinstatement services with expert guidance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    href: '/services/amazon-usa-seller-services/suspension-appeal',
    features: ['Account Recovery', 'Appeal Writing', 'Policy Compliance', 'Reinstatement Support']
  },
  {
    title: 'Amazon Consulting & Strategy',
    description: 'Strategic Amazon.com consulting and business growth sessions with experienced Amazon experts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/amazon-usa-seller-services/consulting',
    features: ['Business Strategy', 'Growth Planning', 'Market Analysis', 'Expert Consultation']
  }
];

export default function AmazonSellerServicesUSA() {
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
            "name": "Amazon Seller Services USA",
            "description": "Leading Amazon seller services in USA. Expert Amazon.com account setup, listing optimization, PPC management, SEO ranking, suspension appeal & consulting.",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "serviceType": "E-commerce Marketplace Management",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Amazon USA Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.com Seller Account Onboarding",
                    "description": "Complete Amazon.com seller account setup and onboarding with professional guidance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.com Listing Optimization",
                    "description": "Professional Amazon.com product listing creation and optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.com PPC Management",
                    "description": "Expert Amazon.com PPC management and advertising campaigns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.com SEO & Ranking",
                    "description": "Advanced Amazon.com SEO strategies and keyword ranking services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.com Suspension Appeal",
                    "description": "Professional Amazon.com account suspension appeal and reinstatement services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Amazon.com Consulting & Strategy",
                    "description": "Strategic Amazon.com consulting and business growth sessions"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-white to-red-600 text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-subtle text-blue-800 shadow-lg border border-white border-opacity-30 bg-white bg-opacity-90">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                #1 Amazon Services in USA
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">Amazon Seller Services</span>
                <br />
                <span className="text-white">in USA</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Professional Amazon.com seller services helping US businesses launch, scale, and dominate the world's largest e-commerce marketplace with proven strategies and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400 to-red-400 text-white font-semibold rounded-lg hover:from-blue-300 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Book Free Consultation
                </Link>
                <WhatsAppButton serviceName="Amazon Seller Services USA" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="/Images/amazon-usa/amazon-usa-seller-services.webp"
                alt="Amazon Seller Services USA - Professional Support"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                🇺🇸 USA Expert
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
              Complete Amazon.com <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Service Suite</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our Amazon seller services in USA cover every aspect of your Amazon.com business. From initial account setup to advanced optimization strategies, we provide end-to-end solutions for US Amazon sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonUSAServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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
            title="Start Your Amazon USA Journey Today"
            subtitle="Ready to dominate the Amazon.com marketplace? Get expert guidance from USA's leading Amazon seller service providers. Our specialists will create a customized strategy for your business success."
            ctaText="Get My Free Amazon Strategy"
            serviceName="Amazon Seller Services USA"
            accentColor="from-blue-400 to-red-400"
            showWhatsApp={true}
            formId="amazon-usa-contact"
          />
        </div>
      </section>
      </div>
    </ContentProtectionProvider>
  );
}