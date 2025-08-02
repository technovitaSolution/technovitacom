import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Technovita Solution',
  description: 'Read the terms and conditions for using Technovita Solution\'s e-commerce and digital marketing services. Understand your rights and responsibilities.',
  robots: 'index, follow',
};

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Technovita Solution. These Terms of Service ("Terms") govern your use of our website, services, and platform (collectively, the "Services") operated by Technovita Solution ("we," "us," or "our").
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Technovita Solution provides comprehensive e-commerce solutions and digital marketing services including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>E-commerce store setup and optimization</li>
                <li>Product catalogue creation and management</li>
                <li>Content writing and copywriting services</li>
                <li>Digital marketing campaigns and strategies</li>
                <li>Brand development and design services</li>
                <li>SEO optimization and social media management</li>
                <li>Paid advertising and marketing automation</li>
                <li>Business growth consulting and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Account Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Use of Services</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You may use our Services for legitimate business purposes in accordance with these Terms and applicable laws.</p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Interfere with or disrupt the Services or servers connected to the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Upload or distribute any malicious software, viruses, or harmful code</li>
                <li>Engage in any activity that could damage our reputation or business</li>
                <li>Violate any intellectual property rights of others</li>
                <li>Use automated systems to access the Services without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Service Fees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms for our services will be specified in your service agreement or invoice. All fees are non-refundable unless otherwise specified in writing.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Payment Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use third-party payment processors to handle transactions. You agree to provide accurate payment information and authorize us to charge the specified amounts.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Late Payments</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Late payments may result in suspension of services and additional fees. We reserve the right to terminate services for non-payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Services and their original content, features, and functionality are owned by Technovita Solution and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 User Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of content you provide to us. By using our Services, you grant us a limited license to use, modify, and display your content as necessary to provide our services.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Work Product</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon full payment, you will own the rights to deliverables created specifically for your project, excluding our proprietary methodologies and tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Level and Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide reliable services but cannot guarantee uninterrupted availability. We may perform maintenance, updates, or improvements that may temporarily affect service availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, Technovita Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless Technovita Solution and its affiliates, officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. Your continued use of the Services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision, and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Technovita Solution</strong></p>
                <p className="text-gray-700 mb-2">Block F, Sector 3, Noida, Delhi 201301, India</p>
                <p className="text-gray-700 mb-2">Email: legal@technovitasolution.com</p>
                <p className="text-gray-700">Phone: +91 12345 67890</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;