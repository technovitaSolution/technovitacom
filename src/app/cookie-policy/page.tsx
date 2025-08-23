import React from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Cookie Policy - Technovita Solution | Cookie Usage & Management',
  description: 'Learn about how Technovita Solution uses cookies to enhance your browsing experience. Understand cookie types, purposes, and how to manage your preferences.',
  keywords: 'cookie policy, cookies, Technovita Solution, website cookies, cookie management',
  openGraph: {
    title: 'Cookie Policy - Technovita Solution',
    description: 'Learn about how Technovita Solution uses cookies to enhance your browsing experience.',
    type: 'website',
    url: 'https://technovitasolution.com/cookie-policy',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Technovita Solution Cookie Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy - Technovita Solution',
    description: 'Learn about how Technovita Solution uses cookies to enhance your browsing experience.',
    images: ['/logo.webp']
  }
};

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better browsing experience and allow us to improve our website functionality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Technovita Solution</strong>, we use cookies to enhance your experience, analyze website traffic, and provide personalized content. This Cookie Policy explains how we use cookies and how you can manage them.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Essential Functions</h3>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Maintain your login session</li>
                  <li>• Remember your preferences</li>
                  <li>• Ensure website security</li>
                  <li>• Enable basic functionality</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Performance & Analytics</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Analyze website traffic</li>
                  <li>• Understand user behavior</li>
                  <li>• Improve website performance</li>
                  <li>• Identify popular content</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Personalization</h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• Remember your language preference</li>
                  <li>• Customize content display</li>
                  <li>• Provide relevant recommendations</li>
                  <li>• Enhance user experience</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Marketing & Advertising</h3>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• Show relevant advertisements</li>
                  <li>• Track campaign performance</li>
                  <li>• Retarget visitors</li>
                  <li>• Measure conversion rates</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-3">These cookies are necessary for the website to function properly and cannot be disabled. They include:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Authentication cookies to keep you logged in</li>
                  <li>Security cookies to protect against fraud</li>
                  <li>Session cookies to maintain your browsing session</li>
                  <li>Load balancing cookies for website performance</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Duration:</strong> Session or up to 1 year
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-3">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Google Analytics cookies to track page views and user behavior</li>
                  <li>Performance monitoring cookies</li>
                  <li>Error tracking cookies</li>
                  <li>User journey analysis cookies</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 mb-3">These cookies enable enhanced functionality and personalization:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Language preference cookies</li>
                  <li>Theme and layout preference cookies</li>
                  <li>Form auto-fill cookies</li>
                  <li>User preference cookies</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Duration:</strong> Up to 1 year
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-3">These cookies are used to track visitors across websites to display relevant advertisements:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Facebook Pixel cookies for social media advertising</li>
                  <li>Google Ads cookies for search advertising</li>
                  <li>Retargeting cookies</li>
                  <li>Affiliate tracking cookies</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services that place cookies on your device. These services help us provide better functionality and analyze website performance.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Third-Party Services We Use</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                    <p className="text-gray-600 text-sm">Used to analyze website traffic and user behavior. Google's privacy policy applies to these cookies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">f</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Facebook Pixel</h4>
                    <p className="text-gray-600 text-sm">Used for social media advertising and conversion tracking. Facebook's privacy policy applies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Y</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">YouTube</h4>
                    <p className="text-gray-600 text-sm">Used for embedded video content. YouTube's privacy policy applies to these cookies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600 text-sm">Used for WhatsApp integration and messaging. WhatsApp's privacy policy applies.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-3">You can control cookies through your browser settings:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                    <p className="text-gray-600 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                    <p className="text-gray-600 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                    <p className="text-gray-600 text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                    <p className="text-gray-600 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Consent</h3>
                <p className="text-gray-700 mb-3">When you first visit our website, you'll see a cookie consent banner that allows you to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Learn more about our cookie usage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Options</h3>
                <p className="text-gray-700 mb-3">You can opt-out of specific types of cookies:</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-xs">×</span>
                    </div>
                    <span className="text-gray-700">Google Analytics: Use the Google Analytics Opt-out Browser Add-on</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-xs">×</span>
                    </div>
                    <span className="text-gray-700">Facebook Ads: Adjust settings in your Facebook account</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-xs">×</span>
                    </div>
                    <span className="text-gray-700">Marketing cookies: Use our cookie preference center</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Duration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies have different lifespans depending on their purpose:
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Session Cookies</span>
                  <p className="text-sm text-gray-600">Deleted when you close your browser</p>
                </div>
                <span className="text-gray-500 text-sm">Temporary</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Persistent Cookies</span>
                  <p className="text-sm text-gray-600">Remain on your device for a set period</p>
                </div>
                <span className="text-gray-500 text-sm">Up to 2 years</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Essential Cookies</span>
                  <p className="text-sm text-gray-600">Required for website functionality</p>
                </div>
                <span className="text-gray-500 text-sm">Session to 1 year</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Analytics Cookies</span>
                  <p className="text-sm text-gray-600">Help us understand website usage</p>
                </div>
                <span className="text-gray-500 text-sm">Up to 2 years</span>
              </div>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">What Happens If You Disable Cookies?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-yellow-200 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-yellow-700 text-xs">!</span>
                  </div>
                  <p className="text-yellow-700 text-sm">Some website features may not work properly</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-yellow-200 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-yellow-700 text-xs">!</span>
                  </div>
                  <p className="text-yellow-700 text-sm">You may need to log in repeatedly</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-yellow-200 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-yellow-700 text-xs">!</span>
                  </div>
                  <p className="text-yellow-700 text-sm">Personalized content may not be available</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-yellow-200 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-yellow-700 text-xs">!</span>
                  </div>
                  <p className="text-yellow-700 text-sm">Website performance may be affected</p>
                </div>
              </div>
            </div>
          </section>

          {/* Updates to Cookie Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Update the "Last updated" date at the top of this policy</li>
              <li>Notify users of significant changes through our website</li>
              <li>Provide clear information about what has changed</li>
              <li>Give users an opportunity to review and accept new cookie settings</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy Team</h3>
                <p className="text-gray-700 mb-2">For privacy and cookie-related inquiries:</p>
                <p className="text-gray-700">Email: <a href="mailto:privacy@technovitasolution.com" className="text-pink-600 hover:text-pink-700">privacy@technovitasolution.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;