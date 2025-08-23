import React from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Privacy Policy - Technovita Solution | Data Protection & Privacy',
  description: 'Learn how Technovita Solution protects your data and maintains privacy. Our comprehensive privacy policy ensures your information is secure and used responsibly.',
  keywords: 'privacy policy, data protection, Technovita Solution, e-commerce services, data security',
  openGraph: {
    title: 'Privacy Policy - Technovita Solution',
    description: 'Learn how Technovita Solution protects your data and maintains privacy.',
    type: 'website',
    url: 'https://technovitasolution.com/privacy-policy',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Technovita Solution Privacy Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Technovita Solution',
    description: 'Learn how Technovita Solution protects your data and maintains privacy.',
    images: ['/logo.webp']
  }
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
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
              At <strong>Technovita Solution</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our e-commerce services, including account management, onboarding, and catalogue services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We operate in compliance with applicable data protection laws and regulations, including the Information Technology Act, 2000, and the Personal Data Protection Bill (when enacted). By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">We may collect the following personal information:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Business information (company name, GST number, business address)</li>
                  <li>Banking and payment information for service transactions</li>
                  <li>Platform-specific seller account credentials (with your consent)</li>
                  <li>Communication preferences and marketing consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">We automatically collect certain technical information:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service-Related Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">When you use our services, we may collect:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Product catalogue and listing information</li>
                  <li>Sales performance data and analytics</li>
                  <li>Customer feedback and testimonials</li>
                  <li>Support requests and communication history</li>
                  <li>Service usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the collected information for the following purposes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Account setup and management</li>
                  <li>• Product catalogue optimization</li>
                  <li>• Sales performance tracking</li>
                  <li>• Customer support and assistance</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Service updates and notifications</li>
                  <li>• Marketing communications (with consent)</li>
                  <li>• Support and troubleshooting</li>
                  <li>• Important policy changes</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Service quality enhancement</li>
                  <li>• Website functionality improvement</li>
                  <li>• Customer experience optimization</li>
                  <li>• Business analytics and insights</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Regulatory requirements</li>
                  <li>• Tax and accounting purposes</li>
                  <li>• Dispute resolution</li>
                  <li>• Legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
                <p className="text-gray-700">We may share information with trusted third-party service providers who assist us in delivering our services, such as payment processors, hosting providers, and analytics services.</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                <p className="text-gray-700">We may disclose information when required by law, court order, or government regulation, or to protect our rights, property, or safety.</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Transfers</h3>
                <p className="text-gray-700">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">With Your Consent</h3>
                <p className="text-gray-700">We may share your information with third parties when you explicitly consent to such sharing.</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Technical Security</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Secure data storage and backup systems</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Access controls and authentication</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Organizational Security</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Employee training on data protection</li>
                  <li>• Confidentiality agreements</li>
                  <li>• Regular policy reviews and updates</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Access and Portability</h3>
                  <p className="text-gray-700">You can request access to your personal information and receive a copy of the data we hold about you.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Correction and Update</h3>
                  <p className="text-gray-700">You can request correction of inaccurate or incomplete personal information.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Deletion</h3>
                  <p className="text-gray-700">You can request deletion of your personal information, subject to legal and contractual obligations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Preferences</h3>
                  <p className="text-gray-700">You can opt-out of marketing communications at any time by clicking the unsubscribe link or contacting us.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Portability</h3>
                  <p className="text-gray-700">You can request a copy of your data in a structured, machine-readable format.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Types of Cookies We Use</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Essential Cookies</h4>
                  <p className="text-blue-600">Required for basic website functionality and security.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Analytics Cookies</h4>
                  <p className="text-blue-600">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Functional Cookies</h4>
                  <p className="text-blue-600">Remember your preferences and enhance user experience.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Marketing Cookies</h4>
                  <p className="text-blue-600">Used for targeted advertising and marketing campaigns.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods are as follows:
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Account Information</span>
                <span className="text-gray-600">7 years after account closure</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Transaction Records</span>
                <span className="text-gray-600">7 years for tax purposes</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Marketing Communications</span>
                <span className="text-gray-600">Until you opt-out</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Website Analytics</span>
                <span className="text-gray-600">2 years</span>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your personal information may be transferred to and processed in countries other than India. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying prominent notices on our website</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                <p className="text-gray-700 mb-2">For privacy-related inquiries:</p>
                <p className="text-gray-700">Email: <a href="mailto:privacy@technovitasolution.com" className="text-pink-600 hover:text-pink-700">privacy@technovitasolution.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;