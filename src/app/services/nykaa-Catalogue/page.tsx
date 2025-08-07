import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Nykaa Catalogue Services | Product Listing & Cataloging | Technovita Solution',
  description: 'Professional Nykaa product listing and cataloging services by Technovita Solution. Expert Nykaa catalogue management, account creation, product optimization, and boost services for successful sellers.',
  keywords: 'Nykaa catalogue services, Nykaa product listing, Nykaa cataloging, Nykaa seller services, product listing optimization, Nykaa account management, ecommerce services, Nykaa SEO, product portfolio creation',
  alternates: {
    canonical: 'https://technovitasolution.com/services/nykaa-Catalogue',
  },
  openGraph: {
    title: 'Nykaa Catalogue Services | Product Listing & Cataloging | Technovita Solution',
    description: 'Professional Nykaa product listing and cataloging services by Technovita Solution. Expert Nykaa catalogue management for successful sellers.',
    url: 'https://technovitasolution.com/services/nykaa-Catalogue',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nykaa Catalogue Services | Product Listing & Cataloging | Technovita Solution',
    description: 'Professional Nykaa product listing and cataloging services by Technovita Solution. Expert Nykaa catalogue management for successful sellers.',
  },
};

export default function NykaaCatalogueServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nykaa Catalogue Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional Nykaa product listing and cataloging services to boost your online presence
            </p>
            
            {/* Featured Image */}
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Images/nykaa-catalogue/nykaa.webp"
                  alt="Nykaa Catalogue Services - Professional Beauty Product Listing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          {/* Service Title */}
          <h2 className="text-3xl font-bold text-center mb-8">
            Nykaa <mark className="bg-rose-600 text-white px-3 py-1 rounded">Product Listing</mark> and Cataloging
          </h2>

          {/* Main Content Section */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Nykaa Product listing or cataloging is the first step in the journey to become a seller on Nykaa, let's understand what does mean of Nykaa product listing so Nykaa means to show your product on Nykaa you have to upload your products on Nykaa with the product title and description of product with good seo keywords so it will be visible to larger audience and when it will reach more people there are higher chances that your product sales will be increased so in your successful seller journey product listing in a right way is the most important part.
            </p>
            <p className="text-gray-700 mb-6">
              So if you are looking for a company who can help you to become a successful seller on Nykaa then you are at the right place we at TechnovitaSolution provide best Nykaa listing services in all over india we are having a dedicated team of expert employees who will help you to list your products and make it visible to larger number of audience.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Technovita Solution is one of the biggest Nykaa partner network in India. Nykaa marketplace is getting more cut-throat by the day. With increased competition, it's getting harder to take your slice of the pie. Nykaa Product Listing and cataloguing play a vital role in the e-commerce business. Shoppers make decisions for buying a product based on the listing and description displayed. The Good news is Technovita Solution is here to help! Ride the wave for the best E-Commerce Service provider in Delhi-NCR. So, with competition getting hotter every day, how can you increase your sales on Nykaa, and take your business to the next level? The good news is, we Technovita Solution is here to help. And despite competition going up, the share of sales available to sellers on the Nykaa marketplace is getting bigger and bigger.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <WhatsAppButton serviceName="Nykaa Catalogue" className="mb-8" />

          {/* Services Description */}
          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              What we <strong>Technovita Solution</strong>, will do:
              If you want catalogue service for Nykaa Business Technovita Solution is the best counter. We are the group of experienced and professionals people. Technovita Solution holds the illustration of its customer presence on Nykaa as follows:
            </p>
          </div>

          {/* How to List Section */}
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">How to do a Listing on Nykaa:</h3>
          
          {/* Nykaa Listing Process Illustration */}
          <div className="text-center mb-8">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-rose-50 to-pink-100 border-2 border-rose-200 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Beauty Images</h4>
                  <p className="text-sm text-gray-600">High-quality beauty product photography</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Beauty SEO Content</h4>
                  <p className="text-sm text-gray-600">Beauty descriptions & benefits</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Nykaa Upload</h4>
                  <p className="text-sm text-gray-600">Beauty platform integration</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-rose-500 text-white rounded-full text-sm font-medium">
                  <span>Nykaa Beauty Ready</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-8 mb-12">
            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">1. Catalogue Service for Nykaa India -</h5>
              <p className="text-gray-700">
                "We handle the complete catalogue service for Nykaa India (or other country specific Nykaa sites). This includes creating database of photographs of products and linking them with appropriate content written by our expert content writers to convert visitors to buyers while giving our maximum information in the most concise way."
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">2. Account Creation -</h5>
              <p className="text-gray-700">
                We create the account of client at the Preferred marketplace to proceed forward and also take the brand approval <strong>GTIN</strong> to make your product online.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">3. Product Listing -</h5>
              <p className="text-gray-700">
                Our team do listing of products by upload images and text to Nykaa template in full compliance with nykaa.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">4. Promotion -</h5>
              <p className="text-gray-700">
                Account launch and the promotion of uploaded products is done by us through the process of smo and seo.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">5. Daily Updation -</h5>
              <p className="text-gray-700">
                We update and refresh contents on a daily, weekly or monthly basis as may be agreed upon.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">6. Nykaa Boost Services -</h5>
              <p className="text-gray-700">
                We offer premium Nykaa boost services that help drive traffic and improve conversions on your Nykaa product pages. Since this is an open competitive marketplace we keep tabs on prices and help you make the best offers.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">7. Product Portfolios Creation -</h5>
              <p className="text-gray-700">
                We create customised product portfolios from which products can be launched or (when stocks are exhausted) removed, enabling full, up to the minute control and accurate information for buyers.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <WhatsAppButton serviceName="Nykaa Catalogue" className="mb-12" />

          {/* Reviews Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              <strong>Reviews</strong> ⭐️(4.5/5 based on 50+ Ratings)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Shiv Kumar ⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  Great Service! I take their advertisement of products on Nykaa services. Best thing is they were on time provided best services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mukesh kumar ⭐️⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  I took their Nykaa account management services, they are very professional in their work. I will highly recommend them you to choose.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">harshit patel ⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  I am a seller on Nykaa initially my sells was not that much but after taking their account management services my sales increase by 400%(4x) they added good keywords on my Nykaa seller account regarding my products Thanks Technovita solution.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-rose-600">
              Product listing and Catalog FAQ-
            </h2>
            
            <div className="space-y-4">
              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-rose-50">
                  <span className="font-semibold text-gray-900">What is product listing on Nykaa?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    If you want to sell your product on Nykaa then you have upload all the necessary details about your product and add images of the product so that a customer can make a decision to buy your product.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-rose-50">
                  <span className="font-semibold text-gray-900">How to list product on Nykaa</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    It's could be a bit difficult if you don't have any technical knowledge you can read our article how to list product on Nykaa and then also you don't understand then we are having team of experts who can help you to list products on Nykaa and help you to start your selling journey on Nykaa.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-rose-50">
                  <span className="font-semibold text-gray-900">How to change photo of product Nykaa?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    If you want to change photo of a product on your seller account on Nykaa then you can edit the product listing of Nykaa and can submit a new request to change if you are unable to do that by yourself and want to hire us you can we are a team of ecommerce expert who can help you to make your seller journey very easy.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-rose-50">
                  <span className="font-semibold text-gray-900">How to do a good product listing and make a seo ready catalogue on Nykaa?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    If you are new seller on Nykaa then we will highly recommend you to make your product listing as good as much it can be because this thing only will help you to make your products visible infront of millions of people in Nykaa and will make your product standout from other products so for best seo ready product listing or cataloging you can reach us on technovitasolution.com or contact us through call we will help you to make a successful seller on Nykaa and will help you to list your products in best possible way on Nykaa.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-6">
              "Technovita Solution" helps in Enriching your Product Catalog and also helps increase your product visibility in the online E-Commerce Business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link
                href="#seller-application"
                className="inline-flex items-center px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}