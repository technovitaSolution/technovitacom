import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import Testimonials from '@/components/Testimonials';
import MultiStepForm from '@/components/MultiStepForm';
import { ContentProtectionProvider } from '@/components/ContentProtection';

export const metadata: Metadata = {
  title: 'How to Get Onboarded on Myntra | Myntra Seller Registration Guide 2024',
  description: 'Complete guide on how to get onboarded on Myntra. Learn the step-by-step Myntra seller registration process, requirements, and tips for successful approval.',
  keywords: 'myntra onboarding, myntra seller registration, how to sell on myntra, myntra seller portal, myntra seller account, myntra onboarding process, myntra seller guide',
  alternates: {
    canonical: 'https://technovitasolution.com/how-to-get-onboarded-on-myntra'
  },
  openGraph: {
    title: 'How to Get Onboarded on Myntra | Myntra Seller Registration Guide 2024',
    description: 'Complete guide on how to get onboarded on Myntra. Learn the step-by-step Myntra seller registration process, requirements, and tips for successful approval.',
    url: 'https://technovitasolution.com/how-to-get-onboarded-on-myntra',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/onboarding/onboarding-featured-images/myntra-seller-onboarding.webp',
        width: 1200,
        height: 630,
        alt: 'Myntra Seller Onboarding Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get Onboarded on Myntra | Myntra Seller Registration Guide 2024',
    description: 'Complete guide on how to get onboarded on Myntra. Learn the step-by-step Myntra seller registration process, requirements, and tips for successful approval.',
    images: ['/Images/onboarding/onboarding-featured-images/myntra-seller-onboarding.webp'],
  }
};

export default function MyntraOnboarding() {
  return (
    <ContentProtectionProvider>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                MYNTRA <span className="text-yellow-300">ONBOARDING</span> SERVICE
              </h1>
              <p className="text-xl mb-8 text-pink-100">
                Complete guide to get onboarded on Myntra fashion marketplace. Professional seller registration and account management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <WhatsAppButton serviceName="Myntra Onboarding" className="border-2 border-white text-white hover:bg-white hover:text-pink-600" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Images/onboarding/onboarding-featured-images/myntra-seller-onboarding.webp"
                alt="Myntra Onboarding Service - Professional Support"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Selling on Myntra can turn out to be a really profitable and easy Business. To successfully sell on Myntra and to earn good profits one must have to list their products on Myntra with SEO optimization. Under the Myntra Aggregator Business Model, your brand is managed by <strong>TECHNOVITA SOLUTION</strong>. Brand addition is done under approved aggregator. TECHNOVITA SOLUTION will provide you complete solution under this model including a/c management, order processing, shipping and return management etc.
              </p>
            </div>
          </div>

          {/* Myntra Onboarding Process */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Myntra Onboarding Process
            </h2>
            <p className="text-gray-700 mb-6">
              Below is the step-by-step process of onboarding on Myntra.
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Registration Process:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">1</span>
                  <span className="text-gray-700">Create a presentation showcasing your business product catalog.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">2</span>
                  <span className="text-gray-700">Then, submit the presentation to Myntra's category managers. (Reaching right product manager is the key)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">3</span>
                  <span className="text-gray-700">Moving ahead, share details of your business with the manager after a successful presentation.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">4</span>
                  <span className="text-gray-700">Afterward, you will have to provide Myntra with product samples for a quality check. (You may have to send the samples to Myntra's Gurugram or Bangalore office.)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">5</span>
                  <span className="text-gray-700">Once the product samples pass the quality check Myntra.com will fix a meeting with the business owner.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">6</span>
                  <span className="text-gray-700">The signing of a contract will happen if they approve of your brand.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">7</span>
                  <span className="text-gray-700">You will then get access to the portal.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">8</span>
                  <span className="text-gray-700">The next step is listing of all your products. You will have to follow Myntra's photography guidelines and get the shoot done by Myntra approved Studios and update the product inventory.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">9</span>
                  <span className="text-gray-700">Myntra.com will place 2-3 dummy orders and dry run the order fulfillment process. This step ensures the seller's (the business in consideration/you) commitment towards delivery which includes, product quality, packing, and delivery time.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">10</span>
                  <span className="text-gray-700">After a successful dry run, your business is onboard to Myntra.com.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-semibold">
                <strong>Important Note:</strong> If the business fails to abide by the guidelines provided by Myntra.com, the platform can not only de-list its products but also the brand itself.
              </p>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Requirements We Need From Clients Who Want to Onboard on Myntra
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-red-700 font-semibold">
                MYNTRA HAS A VERY STRICT PROCESS OF ONBOARDING SO KINDLY SHARE AS MUCH DETAIL AS POSSIBLE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">1</span>
                  <span className="text-gray-700">Name of Your Brand</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">2</span>
                  <span className="text-gray-700">Year of Business Establishment</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">3</span>
                  <span className="text-gray-700">What is your product category?</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">4</span>
                  <span className="text-gray-700">Website Link, if Any</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">5</span>
                  <span className="text-gray-700">What is the total size of your Portfolio?</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">6</span>
                  <span className="text-gray-700">What is the approximate revenue through the online channel per month currently?</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">7</span>
                  <span className="text-gray-700">Please share a few links to your top-selling products</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">8</span>
                  <span className="text-gray-700">Are you selling through Offline Channels (Stores), please share the locations</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">9</span>
                  <span className="text-gray-700">Few images of the store (If Available)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">10</span>
                  <span className="text-gray-700">Brand Presentation (If Available)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">11</span>
                  <span className="text-gray-700">Name of Contact Person</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">12</span>
                  <span className="text-gray-700">Your Email (required)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">13</span>
                  <span className="text-gray-700">Contact Number (required)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <WhatsAppButton serviceName="Myntra Onboarding" />
            </div>
          </section>

          {/* How Technovita Can Help Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              How Technovita Solution Can Help You to Onboard on Myntra
            </h2>
            <p className="text-gray-700 mb-6">
              If you want catalogue service for Myntra Business, Technovita Solution is the best counter. We are a group of experienced and professional people. Technovita Solution holds the illustration of its customer presence on Myntra as follows:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full text-sm font-bold mr-3">1</span>
                  Initial Setup
                </h3>
                <p className="text-gray-700">
                  Create & Share Company profile, Storefront link, VRF and Sample catalog initially for approval
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold mr-3">2</span>
                  Quality Check
                </h3>
                <p className="text-gray-700">
                  After Image QC approval, 5 products required for physical Quality Check for Myntra with all packaging, tags and labels.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-3">3</span>
                  Account Setup Process
                </h3>
                <p className="text-gray-700">
                  Once we get the final QC approval we will start the account setup process.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-pink-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-bold mr-3">4</span>
                  Documentation
                </h3>
                <p className="text-gray-700">
                  OPL — One Paper Lane (Documents uploading)
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-pink-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full text-sm font-bold mr-3">5</span>
                  Commercial Agreement
                </h3>
                <p className="text-gray-700">
                  CTA — Commercial Term Agreement (commissions, incentives, penalties etc)
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-pink-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full text-sm font-bold mr-3">6</span>
                  Portal Access
                </h3>
                <p className="text-gray-700">
                  PPL — Partner Portal Link (First look of the account on Myntra Uni-commerce Set Up (For Inventory Uploading, New listing)
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <div className="mb-12">
            <Testimonials />
          </div>

          {/* Multi-Step Form Section */}
          <div className="mb-12">
            <MultiStepForm />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Selling on Myntra?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Get professional help with Myntra onboarding and account management. Our experts will guide you through every step of the process.
            </p>
            <WhatsAppButton serviceName="Myntra Onboarding" className="mb-4" />
            <div className="text-pink-200 text-sm">
              <p>📞 Call us: +91 7042163504 | 📧 Email: info@technovitasolution.com</p>
            </div>
          </div>
        </article>
      </main>
      </div>
    </ContentProtectionProvider>
  );
}
