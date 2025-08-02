import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Technovita Solution',
  description: 'Learn about how Technovita Solution uses cookies and tracking technologies to improve your website experience and provide better services.',
  robots: 'index, follow',
};

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Cookie Policy explains how Technovita Solution ("we," "us," or "our") uses cookies and similar tracking technologies on our website and services. This policy should be read together with our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies in accordance with this policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or stop using our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer, mobile device, or other device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies contain information that is transferred to your device's hard drive. They help us recognize your device and store some information about your preferences or past actions on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Strictly Necessary Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are essential for the operation of our website. They enable basic functions like page navigation, access to secure areas, and remembering your login status. The website cannot function properly without these cookies.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Session management cookies</li>
                <li>Security cookies</li>
                <li>Load balancing cookies</li>
                <li>Cookie consent preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Performance and Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Google Analytics cookies</li>
                <li>Page performance tracking cookies</li>
                <li>Error tracking cookies</li>
                <li>Website optimization cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Functionality Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Language preference cookies</li>
                <li>User interface customization cookies</li>
                <li>Form auto-fill cookies</li>
                <li>Video player settings cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 Marketing and Advertising Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. They may be set by us or third-party advertising partners.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Social media tracking cookies (Facebook, LinkedIn, Instagram)</li>
                <li>Google Ads and remarketing cookies</li>
                <li>Email marketing tracking cookies</li>
                <li>Conversion tracking cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain content from third parties, such as social media plugins, embedded videos, or analytics tools. These third parties may set their own cookies on your device.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Third-Party Services We Use</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking</li>
                <li><strong>Google Ads:</strong> Advertising and remarketing campaigns</li>
                <li><strong>Facebook Pixel:</strong> Social media advertising and conversion tracking</li>
                <li><strong>LinkedIn Insight Tag:</strong> Professional network advertising and analytics</li>
                <li><strong>YouTube:</strong> Video content embedding and analytics</li>
                <li><strong>Live Chat Tools:</strong> Customer support and communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Duration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Cookies can be either:</p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Session Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These are temporary cookies that expire and are automatically deleted when you close your browser.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Persistent Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies remain on your device for a set period (ranging from minutes to years) or until you manually delete them. The duration depends on the cookie's purpose and your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. How to Control Cookies</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options > Privacy & Security > Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences > Privacy > Cookies and website data</li>
                <li><strong>Edge:</strong> Settings > Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Opt-Out Tools</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You can opt out of certain tracking cookies using these tools:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Google Ads Settings</li>
                <li>Facebook Ad Preferences</li>
                <li>LinkedIn Ad Preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Impact of Disabling Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please note that if you disable cookies, some features of our website may not function properly, and your user experience may be impacted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Mobile App Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you use our mobile applications, we may use mobile-specific technologies for tracking, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Mobile advertising identifiers (IDFA, GAID)</li>
                <li>App analytics and crash reporting tools</li>
                <li>Push notifications (with your consent)</li>
                <li>Location services (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Technovita Solution</strong></p>
                <p className="text-gray-700 mb-2">Block F, Sector 3, Noida, Delhi 201301, India</p>
                <p className="text-gray-700 mb-2">Email: privacy@technovitasolution.com</p>
                <p className="text-gray-700">Phone: +91 12345 67890</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookie Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> You can withdraw your consent at any time by adjusting your browser settings or contacting us directly. However, please note that some website functionality may be affected.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;