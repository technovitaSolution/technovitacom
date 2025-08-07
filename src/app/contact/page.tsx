import React from 'react';
import { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';

// Success/Error Message Component
async function StatusMessage({ searchParams }: { searchParams: Promise<{ success?: string; error?: string }> }) {
  const params = await searchParams;
  if (params.success === 'true') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (params.error === 'true') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error sending message</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>There was an error sending your message. Please try again or contact us directly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export const metadata: Metadata = {
  title: 'Contact Us | Technovita Solution - E-commerce Catalogue Services',
  description: 'Get in touch with Technovita Solution for professional e-commerce catalogue services. Contact us for Amazon, Flipkart, Meesho, and other marketplace solutions.',
  keywords: 'contact technovita solution, e-commerce services contact, catalogue services inquiry, amazon listing services contact, flipkart services contact',
  alternates: {
    canonical: 'https://technovitasolution.com/contact'
  },
  openGraph: {
    title: 'Contact Us | Technovita Solution - E-commerce Catalogue Services',
    description: 'Get in touch with Technovita Solution for professional e-commerce catalogue services. Contact us for Amazon, Flipkart, Meesho, and other marketplace solutions.',
    url: 'https://technovitasolution.com/contact',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/technovita-logo.png',
        width: 1200,
        height: 630,
        alt: 'Technovita Solution Contact Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Technovita Solution - E-commerce Catalogue Services',
    description: 'Get in touch with Technovita Solution for professional e-commerce catalogue services.',
    images: ['/Images/technovita-logo.png'],
  }
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ success?: string; error?: string }> }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Messages */}
      <StatusMessage searchParams={searchParams} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Ready to boost your e-commerce business? Contact our expert team for comprehensive e-commerce solutions including catalogue services, account management, sales optimization, and more across all major platforms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you succeed in the e-commerce world. Reach out to us for any questions about our comprehensive e-commerce services including catalogue management, account setup, sales optimization, and platform-specific solutions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <a 
                      href="tel:+917451073504"
                      className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors duration-200"
                    >
                      +91 7451073504
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent queries</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                    <a 
                      href="mailto:info@technovitasolution.com"
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
                    >
                      info@technovitasolution.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-3">Get instant support via WhatsApp</p>
                    <WhatsAppButton serviceName="General Inquiry" className="inline-block" />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm text-green-600 font-medium">
                    ✓ Emergency support available 24/7 via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form action="/api/contact" method="POST" className="space-y-6">
              {/* Hidden field to identify form source */}
              <input type="hidden" name="source" value="technovitasolution.com contact us page" />
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 bg-white text-gray-900"
                >
                  <option value="">Select a service</option>
                  <optgroup label="Catalogue Services">
                    <option value="amazon-catalogue">Amazon Catalogue Services</option>
                    <option value="flipkart-catalogue">Flipkart Catalogue Services</option>
                    <option value="meesho-catalogue">Meesho Catalogue Services</option>
                    <option value="paytm-catalogue">Paytm Catalogue Services</option>
                    <option value="ebay-catalogue">eBay Catalogue Services</option>
                    <option value="myntra-catalogue">Myntra Catalogue Services</option>
                    <option value="nykaa-catalogue">Nykaa Catalogue Services</option>
                    <option value="shopee-catalogue">Shopee Catalogue Services</option>
                    <option value="ajio-catalogue">Ajio Catalogue Services</option>
                  </optgroup>
                  <optgroup label="Account Management Services">
                    <option value="amazon-account-management">Amazon Account Management</option>
                    <option value="flipkart-account-management">Flipkart Account Management</option>
                    <option value="meesho-account-management">Meesho Account Management</option>
                    <option value="paytm-account-management">Paytm Account Management</option>
                    <option value="ebay-account-management">eBay Account Management</option>
                    <option value="myntra-account-management">Myntra Account Management</option>
                    <option value="nykaa-account-management">Nykaa Account Management</option>
                    <option value="shopee-account-management">Shopee Account Management</option>
                    <option value="ajio-account-management">Ajio Account Management</option>
                  </optgroup>
                  <optgroup label="Account Creation Services">
                    <option value="amazon-account-creation">Amazon Account Creation</option>
                    <option value="flipkart-account-creation">Flipkart Account Creation</option>
                    <option value="myntra-account-creation">Myntra Account Creation</option>
                    <option value="nykaa-account-creation">Nykaa Account Creation</option>
                    <option value="ajio-account-creation">Ajio Account Creation</option>
                  </optgroup>
                  <optgroup label="Sales Boost Services">
                    <option value="amazon-sales-boost">Amazon Sales Boost</option>
                    <option value="flipkart-sales-boost">Flipkart Sales Boost</option>
                    <option value="meesho-sales-boost">Meesho Sales Boost</option>
                    <option value="paytm-sales-boost">Paytm Sales Boost</option>
                    <option value="shopee-sales-boost">Shopee Sales Boost</option>
                  </optgroup>
                  <optgroup label="Other Services">
                    <option value="seller-registration">Seller Registration Services</option>
                    <option value="onboarding-services">Onboarding Services</option>
                    <option value="content-writing">Content Writing Services</option>
                    <option value="website-development">Website Development</option>
                  </optgroup>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 resize-vertical bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Technovita Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to helping your e-commerce business succeed with our expert catalogue services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">5+ years of e-commerce experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick turnaround time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600 text-sm">Better rankings & visibility</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let's discuss how we can help grow your e-commerce business with our professional catalogue services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917451073504"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:info@technovitasolution.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
