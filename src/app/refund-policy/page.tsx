import React from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Refund Policy - Technovita Solution | 60-Day Money Back Guarantee',
  description: 'Learn about Technovita Solution\'s comprehensive 60-day refund policy for all e-commerce services. Fair, transparent refund terms for account management, onboarding, and catalogue services.',
  keywords: 'refund policy, money back guarantee, Technovita Solution, e-commerce services refund, 60 day refund',
  openGraph: {
    title: 'Refund Policy - Technovita Solution',
    description: 'Learn about our comprehensive 60-day refund policy for all e-commerce services.',
    type: 'website',
    url: 'https://technovitasolution.com/refund-policy',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Technovita Solution Refund Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy - Technovita Solution',
    description: 'Learn about our comprehensive 60-day refund policy for all e-commerce services.',
    images: ['/logo.webp']
  }
};

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Refund Policy</h1>
            <p className="text-xl text-pink-600 mt-2 font-medium">60-Day Money Back Guarantee</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Satisfaction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>Technovita Solution</strong>, we stand behind the quality of our e-commerce services with confidence. We offer a comprehensive <strong>60-day money-back guarantee</strong> on all our service packages to ensure your complete satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This refund policy applies to all our services including account management, onboarding services, catalogue optimization, and specialized marketplace solutions across Amazon (India, USA, UK, Canada, Australia, UAE), Flipkart, Myntra, Ajio, Nykaa, eBay, Meesho, Paytm, and Shopee.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-green-800">60-Day Guarantee</h3>
                  <p className="text-green-700">If you're not completely satisfied with our services, request a full refund within 60 days of service commencement.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Coverage */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Covered Under Our Refund Policy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Account Management Services</h3>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Amazon seller account management (all regions)</li>
                  <li>• Flipkart account optimization</li>
                  <li>• Myntra seller management</li>
                  <li>• Ajio account services</li>
                  <li>• Nykaa marketplace management</li>
                  <li>• eBay account optimization</li>
                  <li>• Meesho seller services</li>
                  <li>• Paytm marketplace management</li>
                  <li>• Shopee account services</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Onboarding Services</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Complete seller registration</li>
                  <li>• Document preparation & submission</li>
                  <li>• Platform compliance setup</li>
                  <li>• Account verification assistance</li>
                  <li>• Initial store configuration</li>
                  <li>• Payment gateway setup</li>
                  <li>• Shipping integration</li>
                  <li>• Training and guidance sessions</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Catalogue Services</h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• Product listing creation</li>
                  <li>• Content optimization</li>
                  <li>• Image enhancement & editing</li>
                  <li>• SEO keyword optimization</li>
                  <li>• Bulk product uploads</li>
                  <li>• Inventory management setup</li>
                  <li>• Category mapping</li>
                  <li>• Pricing strategy implementation</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Specialized Services</h3>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• PPC campaign management</li>
                  <li>• Brand store development</li>
                  <li>• Performance analytics setup</li>
                  <li>• Sales boost strategies</li>
                  <li>• Suspension appeal services</li>
                  <li>• Compliance consultation</li>
                  <li>• Growth strategy planning</li>
                  <li>• Custom marketplace solutions</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Refund Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Refund Request</h3>
                  <p className="text-gray-700 mb-2">Send a detailed refund request to <a href="mailto:info@technovitasolution.com" className="text-pink-600 hover:text-pink-700 underline">info@technovitasolution.com</a> including:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-4">
                    <li>Service agreement/invoice number</li>
                    <li>Reason for refund request</li>
                    <li>Specific concerns or issues encountered</li>
                    <li>Any relevant documentation or evidence</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review (24-48 Hours)</h3>
                  <p className="text-gray-700">Our customer service team will acknowledge your request and begin the initial review process. We'll contact you if additional information is needed.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Resolution Attempt (3-5 Business Days)</h3>
                  <p className="text-gray-700">Before processing a refund, we'll attempt to resolve your concerns through service improvements, additional support, or alternative solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Decision (5-7 Business Days)</h3>
                  <p className="text-gray-700">If resolution isn't possible, we'll make a final decision on your refund request and communicate the outcome with detailed reasoning.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Refund Processing (7-14 Business Days)</h3>
                  <p className="text-gray-700">Approved refunds will be processed back to your original payment method. Bank transfers may take additional time depending on your financial institution.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing Timeline</h2>
            
            <div className="overflow-hidden bg-gray-50 rounded-lg">
              <div className="px-6 py-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-900">Request Acknowledgment</span>
                    <span className="text-green-600 font-semibold">24-48 Hours</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-900">Initial Review & Resolution Attempt</span>
                    <span className="text-blue-600 font-semibold">3-5 Business Days</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-900">Final Decision Communication</span>
                    <span className="text-purple-600 font-semibold">5-7 Business Days</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-900">Refund Processing (if approved)</span>
                    <span className="text-orange-600 font-semibold">7-14 Business Days</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Processing times may vary during peak periods or holidays. We'll keep you informed of any delays and provide regular updates on your refund status.
              </p>
            </div>
          </section>

          {/* Service-Specific Refund Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service-Specific Refund Terms</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Management Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Monthly Packages</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Full refund if cancelled within first 60 days</li>
                      <li>• Prorated refund for unused months</li>
                      <li>• No refund for months with completed deliverables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Annual Packages</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Full refund if cancelled within 60 days</li>
                      <li>• Partial refund after 60 days, before 90 days</li>
                      <li>• Prorated refund based on services delivered</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Onboarding Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">One-Time Setup</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 100% refund if account setup fails</li>
                      <li>• 75% refund if partially completed</li>
                      <li>• 50% refund if documentation provided but not submitted</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Multi-Platform Onboarding</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Refund calculated per platform</li>
                      <li>• Successful platforms: no refund</li>
                      <li>• Failed platforms: full refund for that portion</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Catalogue Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bulk Product Listings</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Refund based on undelivered listings</li>
                      <li>• Quality issues: full refund + corrections</li>
                      <li>• Client data issues: partial refund</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Optimization Services</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Performance-based refund available</li>
                      <li>• No improvement in 60 days: full refund</li>
                      <li>• Partial improvement: negotiated refund</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Methods and Processing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Available Refund Methods</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Original payment method (preferred)</li>
                  <li>• Bank transfer to your account</li>
                  <li>• Digital wallet refund</li>
                  <li>• Service credit for future use</li>
                  <li>• Cheque payment (for large amounts)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Processing Times by Method</h3>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Credit/Debit Cards: 5-7 business days</li>
                  <li>• Bank Transfer: 3-5 business days</li>
                  <li>• Digital Wallets: 1-3 business days</li>
                  <li>• Service Credit: Immediate</li>
                  <li>• Cheque: 10-15 business days</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Refund Notes:</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Refunds are processed in the original currency of payment</li>
                <li>• Bank charges or currency conversion fees may apply</li>
                <li>• Third-party payment processor fees are non-refundable</li>
                <li>• Refund confirmation will be sent via email</li>
              </ul>
            </div>
          </section>

          {/* Exceptions and Special Cases */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exceptions and Special Circumstances</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Force Majeure Events</h3>
                <p className="text-gray-700">In cases of natural disasters, government actions, platform shutdowns, or other events beyond our control, refunds will be handled on a case-by-case basis with maximum flexibility for affected clients.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Policy Changes</h3>
                <p className="text-gray-700">If major e-commerce platforms change their policies affecting our service delivery, we'll offer alternatives or partial refunds based on the impact to your specific services.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Account Issues</h3>
                <p className="text-gray-700">If your marketplace accounts face suspension or restrictions due to factors unrelated to our services, refunds will be evaluated based on the services we were able to deliver before the issue occurred.</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade/Downgrade Scenarios</h3>
                <p className="text-gray-700">When switching between service packages, refunds and adjustments will be calculated fairly based on services used and the price difference between packages.</p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Disputes and Appeals</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">If You Disagree with Our Refund Decision</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Internal Appeal Process</h4>
                    <p className="text-gray-700 text-sm">Submit an appeal to our senior management team with additional evidence or clarification within 15 days of our decision.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Third-Party Mediation</h4>
                    <p className="text-gray-700 text-sm">If internal appeal fails, we're open to third-party mediation through recognized dispute resolution services.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Consumer Protection</h4>
                    <p className="text-gray-700 text-sm">You maintain all rights under applicable consumer protection laws and may pursue legal remedies as permitted by law.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this refund policy from time to time to reflect changes in our services, legal requirements, or business practices. Any changes will be communicated through:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Email notifications to all active clients</li>
              <li>Prominent notices on our website</li>
              <li>Updates in service agreements for new clients</li>
              <li>Direct communication for significant changes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Changes to this policy will not affect refund requests submitted before the change date. Your continued use of our services after policy changes constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us for Refund Requests</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We're committed to making the refund process as smooth as possible. For any refund-related inquiries or to submit a refund request, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Email: <a href="mailto:info@technovitasolution.com" className="text-pink-600 hover:text-pink-700 underline">info@technovitasolution.com</a></p>
                  <p>Phone: <a href="tel:+917042163504" className="text-pink-600 hover:text-pink-700">+91 7042163504</a></p>
                  <p>Support Hours: Monday-Friday, 9 AM - 6 PM IST</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Support</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Email: <a href="mailto:info@technovitasolution.com" className="text-pink-600 hover:text-pink-700 underline">info@technovitasolution.com</a></p>
                  <p>Website: <a href="https://technovitasolution.com" className="text-pink-600 hover:text-pink-700">www.technovitasolution.com</a></p>
                  <p>WhatsApp: <a href="https://wa.me/917042163504" className="text-pink-600 hover:text-pink-700">+91 7042163504</a></p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-pink-100">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-700 text-sm">
                We guarantee a response to all refund inquiries within 24 hours during business days. Our dedicated refund team is trained to handle your requests with empathy, professionalism, and efficiency.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
