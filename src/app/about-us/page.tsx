import React from 'react';

export const metadata = {
  title: 'About Us - TechnoVita Solution | Your E-Commerce Growth Partner',
  description: 'Learn about TechnoVita Solution - Your trusted partner for end-to-end eCommerce services. We help sellers establish and grow their presence across leading online marketplaces.',
  keywords: 'about technovita solution, e-commerce services, online marketplace, seller services, digital marketing',
};

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your E-Commerce Growth Partner
          </h1>
          <p className="text-xl lg:text-2xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses to thrive in the digital marketplace with comprehensive e-commerce solutions and expert guidance.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Welcome to TechnoVita Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>TechnoVita Solution</strong> is your trusted partner for end-to-end eCommerce services. We specialize in helping sellers establish and grow their presence across leading online marketplaces in India. From setting up your seller account to optimizing your product listings and boosting your sales, we take care of everything so you can focus on your business.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in <strong>2017</strong> and based in <strong>Noida, Delhi</strong>, we are a team of passionate content writers, digital marketers, business strategists, designers, and e-commerce experts who relentlessly strive to deliver the best possible results for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">200+</div>
                  <div className="text-gray-600">Brands Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">9+</div>
                  <div className="text-gray-600">Platforms Supported</div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To build, create, and nurture your business ideas into successful e-commerce brands. We provide an online medium where businesses can connect, create, and expand their reach regardless of size.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading e-commerce solutions provider that enables businesses to achieve sustainable growth through innovative digital strategies and exceptional service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive E-Commerce Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete suite of services designed to help you succeed in the competitive world of online marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Catalogue Services",
                description: "Professional product cataloguing with platform-specific optimization"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Account Management",
                description: "Complete operational management for your online stores"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
                title: "Account Creation",
                description: "End-to-end seller account setup across major platforms"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Sales Boost",
                description: "Data-driven strategies to increase visibility and conversions"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms We Support */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Support
            </h2>
            <p className="text-xl text-gray-600">
              Expert services across India's leading e-commerce marketplaces
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {['Amazon', 'Flipkart', 'Myntra', 'Nykaa', 'Ajio', 'Meesho', 'Paytm', 'Shopee', 'eBay'].map((platform) => (
              <div 
                key={platform} 
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-200 min-w-[140px] border border-gray-200 hover:border-pink-200"
              >
                <span className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors duration-200">
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Result-Driven",
                description: "We focus on delivering measurable outcomes that directly impact your business growth and success."
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "We stay ahead of market trends and continuously innovate our approaches to give you a competitive edge."
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We believe in building long-term partnerships, not just client relationships. Your success is our success."
              },
              {
                icon: "💎",
                title: "Quality Excellence",
                description: "We maintain the highest standards in everything we deliver, ensuring exceptional quality and attention to detail."
              },
              {
                icon: "🔍",
                title: "Transparency",
                description: "We believe in clear communication, honest reporting, and transparent processes in all our interactions."
              },
              {
                icon: "📈",
                title: "Growth Mindset",
                description: "We're committed to continuous learning and helping our clients scale their businesses to new heights."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TechnoVita Solution?
            </h2>
            <p className="text-xl text-gray-600">
              Here's what sets us apart in the e-commerce solutions landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "Multi-Platform Expertise",
                    description: "Deep knowledge and proven experience across 9+ major e-commerce platforms in India."
                  },
                  {
                    title: "End-to-End Solutions",
                    description: "From account creation to sales optimization, we handle every aspect of your e-commerce journey."
                  },
                  {
                    title: "Proven Track Record",
                    description: "Successfully launched 200+ brands with measurable growth and sustainable results."
                  },
                  {
                    title: "Dedicated Support",
                    description: "Personalized attention and dedicated account management for every client, regardless of size."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to You</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Fast and compliant account setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Scalable cataloging and listing support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Continuous account monitoring and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Data-driven growth strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Transparent and affordable pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your E-Commerce Journey?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're launching your first online store or expanding to new platforms, TechnoVita Solution is here to support your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#seller-application"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-500 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-pink-500 transition-colors duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;