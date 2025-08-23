import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Terms of Service - Technovita Solution | Service Terms & Conditions',
  description: 'Read Technovita Solution\'s Terms of Service. Understand our service terms, user obligations, payment policies, and legal terms for e-commerce services.',
  keywords: 'terms of service, terms and conditions, Technovita Solution, e-commerce services, service agreement',
  openGraph: {
    title: 'Terms of Service - Technovita Solution',
    description: 'Read Technovita Solution\'s Terms of Service and understand our service terms.',
    type: 'website',
    url: 'https://technovitasolution.com/terms-of-service',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Technovita Solution Terms of Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Technovita Solution',
    description: 'Read Technovita Solution\'s Terms of Service and understand our service terms.',
    images: ['/logo.webp']
  }
};

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-lg text-gray-600 text-center">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>Technovita Solution</strong>. These Terms of Service ("Terms") govern your use of our e-commerce services, including account management, onboarding, catalogue services, and related offerings.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services. These Terms apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Technovita Solution provides comprehensive e-commerce services including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Account Management</h3>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Seller account setup and management</li>
                  <li>• Product listing optimization</li>
                  <li>• Inventory management</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Onboarding Services</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Platform-specific registration</li>
                  <li>• Document preparation</li>
                  <li>• Compliance assistance</li>
                  <li>• Training and guidance</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Catalogue Services</h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• Product cataloguing</li>
                  <li>• Content optimization</li>
                  <li>• Image enhancement</li>
                  <li>• SEO optimization</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Support Services</h3>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• Technical support</li>
                  <li>• Performance analytics</li>
                  <li>• Growth strategies</li>
                  <li>• Consultation services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts and Registration</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Creation</h3>
                <p className="text-gray-700">To access our services, you must register for an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials.</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Security</h3>
                <p className="text-gray-700">You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use or security breaches.</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Termination</h3>
                <p className="text-gray-700">We reserve the right to terminate or suspend accounts that violate these Terms or engage in fraudulent activities.</p>
              </div>
            </div>
          </section>

          {/* Service Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Terms and Conditions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Delivery</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Services will be delivered according to the agreed-upon timeline and specifications</li>
                  <li>We will use reasonable efforts to meet delivery deadlines</li>
                  <li>Delays may occur due to factors beyond our control</li>
                  <li>We will communicate any significant delays promptly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Quality</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We commit to providing high-quality services in accordance with industry standards</li>
                  <li>Services will be performed by qualified professionals</li>
                  <li>We will address any quality issues promptly and professionally</li>
                  <li>Client feedback will be incorporated to improve service delivery</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Modifications</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We may modify or discontinue services with reasonable notice</li>
                  <li>Changes will be communicated through appropriate channels</li>
                  <li>Existing commitments will be honored unless mutually agreed otherwise</li>
                  <li>Alternative solutions will be offered when possible</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms and Conditions</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Payment Schedule</h3>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• Payment terms will be specified in individual service agreements</li>
                  <li>• Invoices are due within the specified payment period</li>
                  <li>• Late payments may incur additional charges</li>
                  <li>• Services may be suspended for overdue accounts</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Payment Methods</h3>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• Bank transfers and online payments accepted</li>
                  <li>• All payments must be made in Indian Rupees (INR)</li>
                  <li>• Payment confirmation will be provided upon receipt</li>
                  <li>• Refunds will be processed according to our refund policy</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Pricing and Fees</h3>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• Service pricing is subject to change with notice</li>
                  <li>• Additional fees may apply for custom requirements</li>
                  <li>• All prices are exclusive of applicable taxes</li>
                  <li>• Volume discounts may be available for long-term contracts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Obligations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations and Responsibilities</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Information</h3>
                  <p className="text-gray-700">You must provide accurate, complete, and up-to-date information for all services and communications.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
                  <p className="text-gray-700">You must comply with all applicable laws, regulations, and platform policies when using our services.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cooperation</h3>
                  <p className="text-gray-700">You must provide timely cooperation and access to necessary information for service delivery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Activities</h3>
                  <p className="text-gray-700">You may not use our services for illegal activities, fraud, or to harm others or our business.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All content, trademarks, service marks, and intellectual property on our website and services remain our exclusive property. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Website design and layout</li>
                  <li>Service methodologies and processes</li>
                  <li>Proprietary tools and software</li>
                  <li>Brand names and logos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You retain ownership of your business content, products, and brand assets. We will:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Use your content only for agreed-upon services</li>
                  <li>Respect your intellectual property rights</li>
                  <li>Return or destroy your content upon service completion</li>
                  <li>Maintain confidentiality of your proprietary information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work Product</h3>
                <p className="text-gray-700 leading-relaxed">
                  Work product created specifically for you (such as custom reports, strategies, or content) will be delivered to you upon full payment. We may retain copies for our records and portfolio purposes, subject to confidentiality agreements.
                </p>
              </div>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality and Data Protection</h2>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Confidentiality Commitment</h3>
              <p className="text-green-700 mb-4">
                We are committed to maintaining the confidentiality of your business information and data. Our confidentiality obligations include:
              </p>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• Protecting your business secrets and proprietary information</li>
                <li>• Securing your account credentials and access details</li>
                <li>• Maintaining client data privacy and security</li>
                <li>• Using information only for agreed-upon purposes</li>
                <li>• Implementing appropriate security measures</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability and Disclaimers</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Service Limitations</h3>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Services are provided "as is" without warranties</li>
                  <li>• We do not guarantee specific business outcomes</li>
                  <li>• Results may vary based on market conditions</li>
                  <li>• We are not liable for indirect or consequential damages</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Liability Cap</h3>
                <p className="text-red-700 text-sm">
                  Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service in question.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Force Majeure</h3>
                <p className="text-red-700 text-sm">
                  We are not liable for delays or failures due to circumstances beyond our control, including but not limited to natural disasters, government actions, or technical failures.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination and Cancellation</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Termination</h3>
                <p className="text-gray-700">Either party may terminate services with written notice as specified in the service agreement. Early termination may incur applicable fees.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Immediate Termination</h3>
                <p className="text-gray-700">We may terminate services immediately for violations of these Terms, fraudulent activities, or non-payment of fees.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Post-Termination</h3>
                <p className="text-gray-700">Upon termination, we will return your data and materials, and you will pay for services rendered up to the termination date.</p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Good Faith Resolution</h3>
                  <p className="text-gray-700">Parties agree to attempt good faith resolution of disputes through direct communication before pursuing formal proceedings.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mediation</h3>
                  <p className="text-gray-700">If direct resolution fails, parties may engage in mediation with a neutral third party before pursuing legal action.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jurisdiction</h3>
                  <p className="text-gray-700">These Terms are governed by Indian law, and disputes will be resolved in courts of competent jurisdiction in India.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will notify users of significant changes through email or prominent website notices. It is your responsibility to review these Terms periodically for updates.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technovita Solution</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Email: <a href="mailto:info@technovitasolution.com" className="text-pink-600 hover:text-pink-700">info@technovitasolution.com</a></p>
                  <p>Phone: <a href="tel:+917042163504" className="text-pink-600 hover:text-pink-700">+91 7042163504</a></p>
                  <p>Website: <a href="https://technovitasolution.com" className="text-pink-600 hover:text-pink-700">www.technovitasolution.com</a></p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Inquiries</h3>
                <p className="text-gray-700 mb-2">For legal and compliance matters:</p>
                <p className="text-gray-700">Email: <a href="mailto:legal@technovitasolution.com" className="text-pink-600 hover:text-pink-700">legal@technovitasolution.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;