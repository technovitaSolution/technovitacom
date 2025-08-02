import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, href }) => (
  <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="p-8">
      <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-xl mb-6 group-hover:bg-pink-500 transition-colors duration-300">
        <div className="text-pink-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className="inline-flex items-center text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-200"
      >
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Catalogue Services",
      description: "Professional product cataloguing services tailored to platform-specific requirements with optimized listings.",
      features: [
        "Structured product listing",
        "Attribute enrichment",
        "Image guidelines compliance",
        "Keyword optimization",
        "9+ platform support"
      ],
      href: "/services/catalogue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Account Management",
      description: "Complete account management solutions to run your online store effortlessly with expert operational support.",
      features: [
        "Full-scale operational management",
        "Performance analysis & reporting",
        "Growth strategy implementation",
        "Multi-platform expertise",
        "Continuous optimization"
      ],
      href: "/services/account-management"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "Account Creation",
      description: "End-to-end account setup process for new sellers with hassle-free onboarding across major platforms.",
      features: [
        "Complete setup assistance",
        "Document preparation",
        "Quick onboarding process",
        "Platform compliance",
        "Expert guidance"
      ],
      href: "/services/account-creation"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Sales Boost Services",
      description: "Data-driven marketing strategies designed to improve product visibility and increase conversion rates.",
      features: [
        "Product visibility optimization",
        "Listing enhancement",
        "Conversion rate improvement",
        "Performance tracking",
        "Strategic marketing campaigns"
      ],
      href: "/services/sales-boost"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Seller Registration",
      description: "Simplified seller registration process with accurate document submission and efficient verification support.",
      features: [
        "Document verification assistance",
        "Registration process guidance",
        "Compliance management",
        "Quick approval support",
        "Platform-specific requirements"
      ],
      href: "/services/seller-registration"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Content Writing",
      description: "Professional SEO-optimized content creation for product descriptions and brand pages that drive conversions.",
      features: [
        "SEO-optimized descriptions",
        "Brand page creation",
        "High-quality copywriting",
        "Conversion-focused content",
        "Multi-platform adaptation"
      ],
      href: "/services/content-writing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Website Development",
      description: "Custom e-commerce websites that expand your brand beyond marketplaces with seamless platform integration.",
      features: [
        "Mobile-responsive design",
        "E-commerce functionality",
        "Platform integration",
        "Brand identity focus",
        "SEO optimization"
      ],
      href: "/services/website-development"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Onboarding Services",
      description: "Dedicated guidance and platform-specific training to help new sellers succeed from day one.",
      features: [
        "New seller support",
        "Platform-specific training",
        "Document preparation",
        "Best practices guidance",
        "Success strategies"
      ],
      href: "/services/onboarding"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our E-Commerce Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From account setup to sales optimization, we provide end-to-end e-commerce solutions 
            to help you succeed on leading online marketplaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Supported Platforms */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Platforms We Support
            </h3>
            <p className="text-lg text-gray-600">
              Expert services across 9+ major e-commerce platforms
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              {['Amazon', 'Flipkart', 'Myntra', 'Nykaa', 'Ajio', 'Meesho', 'Paytm', 'Shopee', 'eBay'].map((platform) => (
                <div 
                  key={platform} 
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors duration-200 min-w-[120px]"
                >
                  <span className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors duration-200">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Grow Your Online Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 200+ brands who trust us to manage their e-commerce journey. Let's discuss how we can accelerate your marketplace success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                Get Started Today
              </Link>
              <a 
                href="#seller-application"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-pink-500 border-2 border-pink-500 rounded-lg hover:bg-pink-50 transition-colors duration-200"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;