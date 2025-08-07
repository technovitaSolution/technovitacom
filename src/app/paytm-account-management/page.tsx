import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paytm Account Management | Product Listing & Cataloging Services | Technovita Solution',
  description: 'Professional Paytm account management and product listing services by Technovita Solution. Expert Paytm catalogue management, account creation, product optimization, and boost services for successful sellers.',
  keywords: 'Paytm account management, Paytm product listing, Paytm cataloging, Paytm seller services, product listing optimization, Paytm account services, ecommerce services, Paytm SEO, product portfolio creation',
  alternates: {
    canonical: 'https://technovitasolution.com/paytm-account-management',
  },
  openGraph: {
    title: 'Paytm Account Management | Product Listing & Cataloging Services | Technovita Solution',
    description: 'Professional Paytm account management and product listing services by Technovita Solution. Expert Paytm catalogue management for successful sellers.',
    url: 'https://technovitasolution.com/paytm-account-management',
    siteName: 'Technovita Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paytm Account Management | Product Listing & Cataloging Services | Technovita Solution',
    description: 'Professional Paytm account management and product listing services by Technovita Solution. Expert Paytm catalogue management for successful sellers.',
  },
};

export default function PaytmAccountManagement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Paytm Account Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Paytm product listing and cataloging services to boost your online presence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          {/* Service Title */}
          <h2 className="text-3xl font-bold text-center mb-8">
            Paytm <mark className="bg-blue-600 text-white px-3 py-1 rounded">Product Listing</mark> and Cataloging
          </h2>

          {/* Main Content Section */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Paytm Product listing or cataloging is the first step in the journey to become a seller on Paytm, let's understand what does mean of Paytm product listing so Paytm means to show your product on Paytm you have to upload your products on Paytm with the product title and description of product with good seo keywords so it will be visible to larger audience and when it will reach more people there are higher chances that your product sales will be increased so in your successful seller journey product listing in a right way is the most important part.
            </p>
            <p className="text-gray-700 mb-6">
              So if you are looking for a company who can help you to become a successful seller on Paytm then you are at the right place we at TechnovitaSolution provide best Paytm listing services in all over india we are having a dedicated team of expert employees who will help you to list your products and make it visible to larger number of audience.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Technovita Solution is one of the biggest Paytm partner network in India. Paytm marketplace is getting more cut-throat by the day. With increased competition, it's getting harder to take your slice of the pie.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Selling on Paytm can turn out to be a really profitable and easy Business. To successfully sell on Paytm, you must know how to improve your sales on Paytm. In this Article we Technovita Solution will be telling you about 10 ways to massively increase your sales on Paytm. Paytm Product Listing and cataloguing play a vital role in the e-commerce business. Shoppers make decisions for buying a product based on the listing and description displayed.
            </p>
          </div>

          {/* How to List Section */}
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">How to do a Listing on Paytm:</h3>
          
          {/* Paytm Listing Process Illustration */}
          <div className="text-center mb-8">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Product Images</h4>
                  <p className="text-sm text-gray-600">High-quality product photography</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">SEO Content</h4>
                  <p className="text-sm text-gray-600">Optimized titles & descriptions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Paytm Upload</h4>
                  <p className="text-sm text-gray-600">Direct platform integration</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                  <span>Paytm Marketplace Ready</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-8 mb-12">
            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">1. Catalogue Service for Paytm India -</h5>
              <p className="text-gray-700">
                "We handle the complete catalogue service for Paytm India (or other country specific Paytm sites). This includes creating database of photographs of products and linking them with appropriate content written by our expert content writers to convert visitors to buyers while giving our maximum information in the most concise way."
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">2. Account Creation -</h5>
              <p className="text-gray-700">
                We create the account of client at the Preferred marketplace to proceed forward and also take the brand approval <strong>GTIN</strong> to make your product online.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">3. Product Listing -</h5>
              <p className="text-gray-700">
                Our team do listing of products by upload images and text to Paytm template in full compliance with Paytm.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">4. Promotion -</h5>
              <p className="text-gray-700">
                Account launch and the promotion of uploaded products is done by us through the process of smo and seo.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">5. Daily Updation -</h5>
              <p className="text-gray-700">
                We update and refresh contents on a daily, weekly or monthly basis as may be agreed upon.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">6. Paytm Boost Services -</h5>
              <p className="text-gray-700">
                We offer premium Paytm boost services that help drive traffic and improve conversions on your Paytm product pages. Since this is an open competitive marketplace we keep tabs on prices and help you make the best offers.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <h5 className="text-xl font-bold text-gray-900 mb-3">7. Product Portfolios Creation -</h5>
              <p className="text-gray-700">
                We create customised product portfolios from which products can be launched or (when stocks are exhausted) removed, enabling full, up to the minute control and accurate information for buyers.
              </p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              <strong>Reviews</strong> ⭐️(4.5/5 based on 50+ Ratings)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Shiv Kumar ⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  Great Service! I take their advertisement of products on Paytm services. Best thing is they were on time provided best services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mukesh kumar ⭐️⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  I took their Paytm account management services, they are very professional in their work. I will highly recommend them you to choose.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">harshit patel ⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  I am a seller on Paytm initially my sells was not that much but after taking their account management services my sales increase by 400%(4x) they added good keywords on my Paytm seller account regarding my products Thanks Technovita solution.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mb-12">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
              </svg>
              Contact us on WhatsApp
            </a>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
              Product listing and Catalog FAQ-
            </h2>
            
            <div className="space-y-4">
              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-blue-50">
                  <span className="font-semibold text-gray-900">What is product listing on Paytm?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    If you want to sell your product on Paytm then you have upload all the necessary details about your product and add images of the product so that a customer can make a decision to buy your product.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-blue-50">
                  <span className="font-semibold text-gray-900">How to list product on Paytm</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    It's could be a bit difficult if you don't have any technical knowledge you can read our article how to list product on Paytm and then also you don't understand then we are having team of experts who can help you to list products on Paytm and help you to start your selling journey on Paytm.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-blue-50">
                  <span className="font-semibold text-gray-900">How to change photo of product Paytm?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    If you want to change photo of a product on your seller account on Paytm then you can edit the product listing of Paytm and can submit a new request to change if you are unable to do that by yourself and want to hire us you can we are a team of ecommerce expert who can help you to make your seller journey very easy.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 rounded-lg group-open:bg-blue-50">
                  <span className="font-semibold text-gray-900">How to do a good product listing and make a seo ready catalogue on Paytm?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">
                    If you are new seller on Paytm then we will highly recommend you to make your product listing as good as much it can be because this thing only will help you to make your products visible infront of millions of people in Paytm and will make your product standout from other products so for best seo ready product listing or cataloging you can reach us on technovitasolution.com or contact us through call we will help you to make a successful seller on Paytm and will help you to list your products in best possible way on Paytm.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
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
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
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