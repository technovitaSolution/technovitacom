import React from 'react';
import Link from 'next/link';


const About: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Expert E-commerce Solutions",
      description: "Specialized in Amazon, Flipkart, Myntra, Ajio, Nykaa onboarding and account management services."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Proven Success Track Record",
      description: "300% average sales increase for our clients across all major e-commerce platforms."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Professional Support",
      description: "Round-the-clock account management and customer support for seamless business operations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "End-to-End Partnership",
      description: "From onboarding to scaling, we partner with you throughout your e-commerce journey."
    }
  ];

  const achievements = [
    { number: "200+", label: "Brands Launched" },
    { number: "9+", label: "Platforms Supported" },
    { number: "300%", label: "Average Sales Increase" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const platforms = [
    { name: "Amazon", color: "bg-yellow-500" },
    { name: "Flipkart", color: "bg-blue-500" },
    { name: "Myntra", color: "bg-pink-500" },
    { name: "Ajio", color: "bg-orange-500" },
    { name: "Nykaa", color: "bg-purple-500" },
    { name: "Meesho", color: "bg-green-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="bg-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wide">
              LEADING E-COMMERCE SOLUTIONS PROVIDER
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-pink-500">Technovita Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The <strong>Best E-commerce Solution Company</strong> specializing in Amazon, Flipkart, Myntra, Ajio, Nykaa onboarding and account management services. 
            We help businesses scale their online presence across all major e-commerce platforms.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Technovita Solution</strong> is India's premier e-commerce solutions provider, dedicated to helping businesses 
                achieve remarkable growth across all major online marketplaces. With over 5 years of expertise, 
                we have established ourselves as the <strong>best company for Ajio, Myntra, Nykaa, Flipkart, and Amazon onboarding</strong>.
              </p>
              
              <p className="text-lg">
                Our comprehensive services include professional seller account setup, product listing optimization, 
                inventory management, PPC campaign management, and 24/7 account monitoring. We specialize in 
                platform-specific strategies that maximize your visibility and sales potential.
              </p>
              
              <p className="text-lg">
                Whether you're a startup looking to establish your online presence or an established brand 
                seeking to expand across multiple platforms, our expert team provides end-to-end solutions 
                tailored to your unique business requirements.
              </p>
            </div>

            {/* Platform Badges */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Platforms We Specialize In:</h4>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <div key={index} className={`${platform.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                href="/services/account-management"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Our Services
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-pink-600 border-2 border-pink-600 rounded-lg hover:bg-pink-50 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-pink-500 mb-3">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Technovita Solution?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As the <strong>best e-commerce solution company</strong>, we provide comprehensive services for Amazon, Flipkart, Myntra, Ajio, and Nykaa onboarding 
              with proven strategies that drive exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mx-auto mb-6 group-hover:bg-pink-500 transition-colors duration-300">
                  <div className="text-pink-500 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Your E-commerce Business?</h3>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join 200+ successful brands who trust Technovita Solution for their Amazon, Flipkart, Myntra, Ajio, and Nykaa onboarding needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-600 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Start Your Journey Today
            </Link>
            <Link 
              href="tel:+917042163504"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Call Now: +91 7042163504
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;