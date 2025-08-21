import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'How to Get Onboarded on Ajio | Ajio Seller Registration Guide 2024',
  description: 'Complete guide on how to get onboarded on Ajio. Learn the step-by-step Ajio seller registration process, requirements, and tips to increase approval chances.',
  keywords: 'ajio onboarding, ajio seller registration, how to sell on ajio, ajio seller portal, ajio seller account, ajio onboarding process, ajio seller guide',
  alternates: {
    canonical: 'https://technovitasolution.com/how-to-get-onboarded-on-ajio'
  },
  openGraph: {
    title: 'How to Get Onboarded on Ajio | Ajio Seller Registration Guide 2024',
    description: 'Complete guide on how to get onboarded on Ajio. Learn the step-by-step Ajio seller registration process, requirements, and tips to increase approval chances.',
    url: 'https://technovitasolution.com/how-to-get-onboarded-on-ajio',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/Onboarding/ajioSellerPortal.png',
        width: 1200,
        height: 630,
        alt: 'Ajio Seller Portal Registration Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get Onboarded on Ajio | Ajio Seller Registration Guide 2024',
    description: 'Complete guide on how to get onboarded on Ajio. Learn the step-by-step Ajio seller registration process, requirements, and tips to increase approval chances.',
    images: ['/Images/Onboarding/ajioSellerPortal.png'],
  }
};

export default function AjioOnboarding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                AJIO <span className="text-yellow-300">ONBOARDING</span> SERVICE
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Complete guide to get onboarded on Ajio marketplace. Professional seller registration and account management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <WhatsAppButton serviceName="Ajio Onboarding" className="border-2 border-white text-white hover:bg-white hover:text-orange-600" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Images/reconciliationBackground.jpg"
                alt="Ajio Onboarding Service - Professional Support"
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
                Selling on Ajio can turn out to be a really profitable and easy Business. To successfully sell on Ajio and to earn good profits one must have to list their products on Ajio with SEO optimization. Under the Ajio Aggregator Business Model, your brand is managed by <strong>TECHNOVITA SOLUTION</strong>. Brand addition is done under approved aggregator. TECHNOVITA SOLUTION will provide you complete solution under this model including a/c management, order processing, shipping and return management etc.
              </p>
              
              <div className="mt-8 text-center">
                <WhatsAppButton serviceName="Ajio Onboarding" />
              </div>
            </div>
          </div>

          {/* Ajio Onboarding Process */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Ajio Onboarding Process
            </h2>
            <p className="text-gray-700 mb-6">
              Below is the step-by-step process of onboarding on Ajio.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Reliance has created a single portal for seller registration, whether they sell on AJIO, Jiomart or Reliance Digital. They treat any seller on their platforms as a "supplier". So the common steps to register on any of these platforms are as follows. Do note, it helps to treat this registration as a college application or loan application- as AJIO is very careful about who they on-board as a seller. So put your best foot forward.
              </p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto mb-8">
              <Image
                src="/Images/Onboarding/ajioSellerPortal.png"
                alt="How to sell products on Ajio - Seller Portal"
                width={800}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration Steps:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  Visit at - <Link href="https://seller.ajio.com/vmsui/auth" className="text-orange-600 hover:text-orange-700 underline" target="_blank" rel="noopener noreferrer">https://seller.ajio.com/vmsui/auth</Link>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  Register yourself on Reliance portal as a supplier
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  Fill up the remaining details as required which includes your registered office address
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  Provide documents: Pan card, Aadhar card, GST details, current account details, cancelled cheque
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                  Select your product categories in which you want to sell your products on Ajio seller portal
                </li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700">
                However, if you are unable to do registration and product listing work by yourself then you can take our help by visiting our website <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">www.technovitasolution.com</Link> and you can connect with us to discuss your requirement. We have 5+ years experience with ecommerce sellers and have so many seller success stories.
              </p>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Requirements We Need From Clients Who Want to Onboard on Ajio
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-red-700 font-semibold">
                AJIO HAS A VERY STRICT PROCESS OF ONBOARDING SO KINDLY SHARE AS MUCH DETAIL AS POSSIBLE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">1</span>
                  <span className="text-gray-700">Name of Your Brand</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">2</span>
                  <span className="text-gray-700">Year of Business Establishment</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">3</span>
                  <span className="text-gray-700">What is your product category?</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">4</span>
                  <span className="text-gray-700">Website Link, if Any</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">5</span>
                  <span className="text-gray-700">What is the total size of your Portfolio?</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">6</span>
                  <span className="text-gray-700">What is the approximate revenue through the online channel per month currently?</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">7</span>
                  <span className="text-gray-700">Please share a few links to your top-selling products</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">8</span>
                  <span className="text-gray-700">Are you selling through Offline Channels (Stores), please share the locations</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">9</span>
                  <span className="text-gray-700">Few images of the store (If Available)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">10</span>
                  <span className="text-gray-700">Brand Presentation (If Available)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">11</span>
                  <span className="text-gray-700">Name of Contact Person</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">12</span>
                  <span className="text-gray-700">Your Email (required)</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">13</span>
                  <span className="text-gray-700">Contact Number (required)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <WhatsAppButton serviceName="Ajio Onboarding" />
            </div>
          </section>

          {/* Tips Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Tips on Increasing Your Chances of Being On-boarded on Ajio
            </h2>
            <p className="text-gray-700 mb-6">
              As mentioned earlier, AJIO is selective about the sellers it on-boards. Hence the following help increase your chances in your application:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-bold mr-3">1</span>
                  MSME Certificate
                </h3>
                <p className="text-gray-700">
                  It's a proof of your company being registered as an MSME with the government. Create an MSME certificate by applying for it.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-3">2</span>
                  Logo
                </h3>
                <p className="text-gray-700">
                  It helps project your company and products as having a distinct brand imagery.
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold mr-3">3</span>
                  Trademark
                </h3>
                <p className="text-gray-700">
                  This further strengthens your brand positioning and also is proof of you owning the brand. If you do not have a trademark certificate or it's in the processing stage; then you can submit a self-declaration; when indicated, during your application.
                </p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full text-sm font-bold mr-3">4</span>
                  Website Address
                </h3>
                <p className="text-gray-700">
                  A website increases your credibility. It also helps the AJIO team know more about your business and your products. This helps them make a decision.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" style={{color: '#F2903D'}}>
              Ajio Onboarding FAQ
            </h2>
            
            <div className="space-y-6">
              <details className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors">
                  What is Ajio Onboarding Service?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  <p>
                    Ajio onboarding service is a process to become a seller on Ajio from creating a seller account to listing your products and becoming a successful Ajio seller. If you are new to selling on Ajio and need any kind of help then we Technovita Solution can help you to be a successful seller on Ajio.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors">
                  How to do onboarding on Ajio?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  <p>
                    It could be a bit difficult if you don't have any technical knowledge. You can read our article on how to do onboarding on Ajio and if you still don't understand, then we have a team of experts who can help you create your seller account on Ajio and help you start your selling journey. Throughout your seller journey, we will assist you whenever you need help.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors">
                  How to create an Ajio seller account?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  <p>
                    If you want to create a seller account on Ajio, then the first step is to go to the Ajio seller portal and register yourself there. This process can be a little long. If you need any kind of help from us, then simply you can contact us by call or WhatsApp. We are always here to help you in the best possible way and will make you a successful seller on Ajio.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors">
                  How to increase your chance to become a successful seller on Ajio?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  <p>
                    If you are a new seller on Ajio, then we will highly recommend you to make your product listing as good as it can be because this thing only will help you to make your products visible in front of millions of people on Ajio and will make your product stand out from other products. For best SEO ready product listing or cataloging, you can reach us on technovitasolution.com or contact us through call. We will help you to become a successful seller on Ajio and will help you to list your products in the best possible way.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              <strong>Reviews</strong> ⭐️(4.5/5 based on 50+ Ratings)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Surendra Singh ⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  Great Service! I took their advertisement of products on Ajio services. Best thing is they were on time and provided best services.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Hardik Patel ⭐️⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  I took their Ajio account management services, they are very professional in their work. I will highly recommend them to you.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Anurag Singh ⭐️⭐️⭐️⭐️</h4>
                <p className="text-gray-700">
                  I am a seller on Ajio. Initially my sales were not that much but after taking their account management services my sales increased by 400%(4x). They added good keywords on my Ajio seller account regarding my products. Thanks Technovita solution.
                </p>
              </div>
            </div>
          </section>

          {/* Account Management Services */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Technovita Solution Account Management Services
            </h2>
            <p className="text-gray-700 mb-6">
              Technovita Solution provides account management services for all major ecommerce platforms. If you want to take our services then you can connect with us. We have more than 5 years of industry experience. Technovita Solution can help you to become a successful seller on Ajio seller portal. Here are our top account management services:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/ajio-account-management" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200">
                <span className="font-semibold text-orange-800">Ajio Account Management Service</span>
              </Link>
              <Link href="/myntra-account-management" className="block p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors border border-pink-200">
                <span className="font-semibold text-pink-800">Myntra Account Management Service</span>
              </Link>
              <Link href="/nykaa-account-management" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200">
                <span className="font-semibold text-purple-800">Nykaa Account Management Service</span>
              </Link>
              <Link href="/flipkart-account-management" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200">
                <span className="font-semibold text-blue-800">Flipkart Account Management Service</span>
              </Link>
              <Link href="/amazon-account-management" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors border border-yellow-200">
                <span className="font-semibold text-yellow-800">Amazon Account Management Service</span>
              </Link>
              <Link href="/meesho-account-management" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200">
                <span className="font-semibold text-green-800">Meesho Account Management Service</span>
              </Link>
              <Link href="/paytm-account-management" className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors border border-indigo-200">
                <span className="font-semibold text-indigo-800">Paytm Account Management Service</span>
              </Link>
              <Link href="/ebay-account-management" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors border border-red-200">
                <span className="font-semibold text-red-800">Ebay Account Management Service</span>
              </Link>
              <Link href="/shopee-account-management" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors border border-teal-200">
                <span className="font-semibold text-teal-800">Shopee Account Management Service</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Selling on Ajio?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get professional help with Ajio onboarding and account management. Our experts will guide you through every step of the process.
            </p>
            <WhatsAppButton serviceName="Ajio Onboarding" className="mb-4" />
            <div className="text-orange-200 text-sm">
              <p>📞 Call us: +91 7042163504 | 📧 Email: info@technovitasolution.com</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
