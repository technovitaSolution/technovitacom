import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import Testimonials from '@/components/Testimonials';
import MultiStepForm from '@/components/MultiStepForm';

export const metadata: Metadata = {
  title: 'Myntra Seller Registration | Myntra Vendor Registration Services 2024',
  description: 'Expert Myntra seller registration and vendor registration services. Complete myntra seller registration online with professional support. Get your myntra seller registration form processed quickly with guaranteed approval.',
  keywords: 'myntra seller registration, myntra vendor registration, myntra seller registration online, myntra seller registration process, myntra registration for seller, myntra seller registration form, myntra register as seller, myntra online seller registration, myntra new seller registration, myntra vendor registration form, myntra onboarding agency, myntra onboarding partner, myntra onboarding process, myntra onboarding services, myntra seller account registration, myntra seller onboarding, myntra seller register, myntra seller registration contact number, onboarding myntra, register as a seller on myntra, register on myntra as seller, sell on myntra register',
  alternates: {
    canonical: 'https://technovitasolution.com/how-to-get-onboarded-on-myntra'
  },
  openGraph: {
    title: 'Myntra Seller Registration | Professional Myntra Vendor Registration Services',
    description: 'Expert Myntra seller registration and vendor registration services. Complete myntra seller registration online with professional support. Get your myntra seller registration form processed quickly.',
    url: 'https://technovitasolution.com/how-to-get-onboarded-on-myntra',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/onboarding/onboarding-featured-images/myntra-seller-onboarding.webp',
        width: 1200,
        height: 630,
        alt: 'Myntra Seller Registration and Vendor Registration Services',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myntra Seller Registration | Professional Myntra Vendor Registration Services',
    description: 'Expert Myntra seller registration and vendor registration services. Complete myntra seller registration online with professional support.',
    images: ['/Images/onboarding/onboarding-featured-images/myntra-seller-onboarding.webp'],
  }
};

export default function MyntraOnboarding() {
  return (
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                MYNTRA <span className="text-yellow-300">SELLER REGISTRATION</span> SERVICE
              </h1>
              <p className="text-xl mb-8 text-pink-100">
                Expert Myntra seller registration and myntra vendor registration services. Complete myntra seller registration online with professional support and guaranteed approval process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <WhatsAppButton serviceName="Myntra Seller Registration" className="border-2 border-white text-white hover:bg-white hover:text-pink-600" />
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
                <strong>Myntra seller registration</strong> and <strong>myntra vendor registration</strong> can turn out to be a really profitable business opportunity. Our professional <strong>myntra seller registration online</strong> service ensures successful completion of the <strong>myntra seller registration process</strong>. Whether you want to <strong>register as a seller on myntra</strong> or need help with <strong>myntra vendor registration form</strong>, TECHNOVITA SOLUTION provides comprehensive support for <strong>myntra seller account registration</strong>.
              </p>
              <p>
                As a leading <strong>myntra onboarding agency</strong> and trusted <strong>myntra onboarding partner</strong>, we specialize in <strong>myntra seller onboarding</strong> services. Our expert team handles the complete <strong>myntra registration for seller</strong> process, making it easy for businesses to <strong>sell on myntra register</strong> and start their e-commerce journey on India's leading fashion marketplace.
              </p>
            </div>
          </div>

          {/* Myntra Onboarding Process */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Complete Myntra Seller Registration Process
            </h2>
            <p className="text-gray-700 mb-6">
              Our <strong>myntra seller registration</strong> service follows a comprehensive <strong>myntra seller registration process</strong> to ensure successful <strong>myntra vendor registration</strong>. Below is the detailed step-by-step process for <strong>myntra online seller registration</strong> and how we help businesses <strong>register on myntra as seller</strong>.
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
              <WhatsAppButton serviceName="Myntra Seller Registration" />
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

          {/* Why Choose Technovita Solution Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Technovita Solution for Myntra Seller Registration?
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                As India's premier <strong>myntra onboarding agency</strong>, Technovita Solution has successfully completed over 500+ <strong>myntra seller registrations</strong> with a 95% success rate. Our expertise in <strong>myntra vendor registration</strong> and comprehensive understanding of the <strong>myntra seller registration process</strong> makes us the preferred choice for businesses looking to <strong>register as a seller on myntra</strong>.
              </p>
              
              <p>
                Our <strong>myntra seller registration online</strong> service is designed to eliminate the complexities of the registration process. We handle everything from initial <strong>myntra seller registration form</strong> submission to final account activation, ensuring that your <strong>myntra seller account registration</strong> is completed without any hassles. As a certified <strong>myntra onboarding partner</strong>, we have direct connections with Myntra's category managers and technical teams.
              </p>
              
              <p>
                What sets us apart from other <strong>myntra onboarding services</strong> is our end-to-end approach. We don't just help you <strong>myntra register as seller</strong>; we provide ongoing support for account management, catalog optimization, and sales growth strategies. Our team understands the nuances of <strong>myntra new seller registration</strong> requirements and ensures compliance with all platform policies.
              </p>
              
              <p>
                With our proven track record in <strong>myntra seller onboarding</strong>, we guarantee faster approval times, reduced rejection rates, and comprehensive post-registration support. Whether you're a startup looking to <strong>sell on myntra register</strong> or an established brand seeking <strong>myntra vendor registration</strong>, our tailored solutions ensure your success on India's leading fashion marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                    95%
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Success Rate</h3>
                <p className="text-gray-600 text-center">Highest success rate in myntra seller registration with guaranteed approval</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                    500+
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Successful Registrations</h3>
                <p className="text-gray-600 text-center">Over 500+ successful myntra vendor registrations completed</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                    24/7
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-center">Round-the-clock support for all myntra registration queries</p>
              </div>
            </div>
          </section>

          {/* Detailed Registration Requirements */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Complete Myntra Seller Registration Requirements
            </h2>
            
            <p className="text-gray-700 mb-6">
              Our <strong>myntra seller registration</strong> experts have compiled this comprehensive list of requirements for successful <strong>myntra vendor registration</strong>. Following these guidelines ensures smooth <strong>myntra online seller registration</strong> process.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-4">Business Documentation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    GST Registration Certificate (Mandatory for myntra seller registration)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    PAN Card of Business Entity
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Bank Account Details with Cancelled Cheque
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Brand Authorization Letter (if applicable)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Trademark Certificate (recommended)
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Product & Business Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Detailed Product Catalog with High-Quality Images
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Brand Story and Business Presentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Current Online Sales Data (if available)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Physical Store Details and Images
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Manufacturing/Sourcing Details
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions - Myntra Seller Registration
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: How long does the myntra seller registration process take?
                </h3>
                <p className="text-gray-700">
                  The <strong>myntra seller registration process</strong> typically takes 15-30 days when handled professionally. Our <strong>myntra seller registration online</strong> service can expedite this to 10-15 days due to our direct relationships with Myntra's onboarding team. The timeline depends on document verification, product sample approval, and quality checks.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: What is the difference between myntra seller registration and myntra vendor registration?
                </h3>
                <p className="text-gray-700">
                  <strong>Myntra seller registration</strong> and <strong>myntra vendor registration</strong> are essentially the same process. Both terms refer to registering your business to sell products on Myntra's platform. As a certified <strong>myntra onboarding agency</strong>, we handle both individual seller accounts and large vendor registrations with equal expertise.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: Can I complete myntra seller registration online myself?
                </h3>
                <p className="text-gray-700">
                  While it's possible to attempt <strong>myntra online seller registration</strong> independently, the success rate is significantly lower (around 30-40%). Our professional <strong>myntra seller registration</strong> service ensures 95% success rate because we understand the specific requirements, have established relationships with category managers, and know how to present your brand effectively.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: What documents are required for myntra seller registration form?
                </h3>
                <p className="text-gray-700">
                  For <strong>myntra seller registration form</strong> completion, you need: GST certificate, PAN card, bank details, product catalog, brand presentation, and business registration documents. Our team helps you prepare all documents correctly for successful <strong>myntra seller account registration</strong>.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: Is there a myntra seller registration contact number for direct support?
                </h3>
                <p className="text-gray-700">
                  While Myntra doesn't provide a direct <strong>myntra seller registration contact number</strong>, our <strong>myntra onboarding services</strong> include direct communication channels with Myntra's team. Contact us at +91 7042163504 for immediate assistance with your <strong>myntra seller registration</strong> requirements.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: What are the fees for myntra seller registration?
                </h3>
                <p className="text-gray-700">
                  <strong>Myntra seller registration</strong> itself is free, but there are commission fees on sales (typically 15-25% depending on category). Our <strong>myntra onboarding services</strong> charge a one-time professional fee that includes complete registration support, document preparation, and account activation assistance.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: Can you help with myntra new seller registration for startups?
                </h3>
                <p className="text-gray-700">
                  Absolutely! We specialize in <strong>myntra new seller registration</strong> for startups and new businesses. Our <strong>myntra seller onboarding</strong> process is designed to help emerging brands establish their presence on Myntra with proper guidance on product presentation, pricing strategies, and compliance requirements.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Q: What happens after successful myntra vendor registration?
                </h3>
                <p className="text-gray-700">
                  After successful <strong>myntra vendor registration</strong>, you'll receive portal access for inventory management, order processing, and performance tracking. Our <strong>myntra onboarding partner</strong> services continue with catalog optimization, account management, and ongoing support to maximize your sales potential.
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
              Ready for Professional Myntra Seller Registration?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Get expert <strong>myntra seller registration</strong> and <strong>myntra vendor registration</strong> services with guaranteed approval. Our <strong>myntra onboarding agency</strong> ensures successful <strong>myntra seller registration online</strong> with complete support from registration to account activation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <WhatsAppButton serviceName="Myntra Seller Registration" className="mb-2 sm:mb-0" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
            <div className="text-pink-200 text-sm space-y-1">
              <p>📞 Myntra Seller Registration Contact: +91 7042163504</p>
              <p>📧 Email: info@technovitasolution.com</p>
              <p>⚡ 95% Success Rate | 500+ Successful Registrations | 24/7 Support</p>
            </div>
          </div>
        </article>
      </main>
      </div>
  );
}
