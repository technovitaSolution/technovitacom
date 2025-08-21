'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import WhatsAppButton from './WhatsAppButton';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: 'NEW' | 'POPULAR' | 'AI' | 'HOT';
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, description, href, badge }) => {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
      >
        <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-200">
          <div className="text-pink-600 group-hover:text-white transition-colors duration-200">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
              {title}
            </h4>
            {badge && (
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                badge === 'NEW' ? 'bg-green-100 text-green-800' :
                badge === 'POPULAR' ? 'bg-purple-100 text-purple-800' :
                badge === 'AI' ? 'bg-blue-100 text-blue-800' :
                'bg-red-100 text-red-800'
              }`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{description}</p>
        </div>
      </a>
    );
  }

  return (
  <Link 
    href={href}
    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
  >
    <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-200">
      <div className="text-pink-600 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center space-x-2">
        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
          {title}
        </h4>
        {badge && (
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
            badge === 'NEW' ? 'bg-green-100 text-green-800' :
            badge === 'POPULAR' ? 'bg-purple-100 text-purple-800' :
            badge === 'AI' ? 'bg-blue-100 text-blue-800' :
            'bg-red-100 text-red-800'
          }`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{description}</p>
    </div>
  </Link>
);
};

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCalculatorsOpen, setIsMobileCalculatorsOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const calculatorsDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const calculatorsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
    setIsCalculatorsOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleCalculatorsMouseEnter = () => {
    if (calculatorsTimeoutRef.current) {
      clearTimeout(calculatorsTimeoutRef.current);
    }
    setIsCalculatorsOpen(true);
    setIsServicesOpen(false);
  };

  const handleCalculatorsMouseLeave = () => {
    calculatorsTimeoutRef.current = setTimeout(() => {
      setIsCalculatorsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      if (calculatorsTimeoutRef.current) {
        clearTimeout(calculatorsTimeoutRef.current);
      }
    };
  }, []);

  // E-Commerce Core Services
  const coreServicesMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Catalogue Services",
      description: "Professional product listing and attribute enrichment",
      href: "/services/catalogue-services",
      badge: "POPULAR" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Account Management",
      description: "Full-scale account management solutions for your stores",
      href: "/services/account-management",
      badge: "HOT" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "Account Creation",
      description: "End-to-end seller account setup on major platforms",
      href: "/services/account-creation"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Onboarding Services",
      description: "Dedicated guidance and platform-specific training",
      href: "/services/onboarding-services"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Sales Boost",
      description: "Data-driven strategies to increase visibility and sales",
      href: "/services/sales-boost",
      badge: "NEW" as const
    }
  ];

  // International Amazon Marketplace Services
  const internationalAmazonMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Amazon Canada Seller Services",
      description: "Complete Amazon Canada marketplace management",
      href: "/services/amazon-seller-services-canada",
      badge: "NEW" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Amazon USA Seller Services",
      description: "Expert Amazon US marketplace solutions",
      href: "/services/amazon-usa-seller-services"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Amazon UK Seller Services",
      description: "Professional Amazon UK marketplace management",
      href: "/services/amazon-uk-seller-services"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Amazon Australia Seller Services",
      description: "Complete Amazon Australia marketplace solutions",
      href: "/services/amazon-australia-seller-services"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Amazon UAE Seller Services",
      description: "Expert Amazon UAE marketplace management",
      href: "/services/amazon-uae-seller-services"
    }
  ];

  // Additional Services
  const additionalServicesMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Ecommerce Website Development",
      description: "Custom eCommerce websites with marketplace integration",
      href: "https://www.technovitasolution.in/website-development-services/"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ecommerce PhotoShoot Studio",
      description: "Professional product photography and model shoots",
      href: "https://www.technovitasolution.in/technovita-studio-services/"
    }
  ];

  // Seller Calculators Menu Items
  const calculatorsMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Amazon Calculator",
      description: "Calculate fees, profits and pricing for Amazon marketplace",
      href: "https://sellerguide.technovitasolution.in/calculator/amazon",
      badge: "POPULAR" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Flipkart Calculator",
      description: "Determine commission fees and profit margins for Flipkart",
      href: "https://sellerguide.technovitasolution.in/calculator/flipkart",
      badge: "HOT" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Myntra Calculator",
      description: "Fashion marketplace fee calculator and profit analyzer",
      href: "https://sellerguide.technovitasolution.in/calculator/myntra"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Ajio Calculator",
      description: "Calculate selling fees and revenues for Ajio platform",
      href: "https://sellerguide.technovitasolution.in/calculator/ajio"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Blinkit Calculator",
      description: "Quick commerce fee calculator for instant delivery",
      href: "https://sellerguide.technovitasolution.in/blinkit-seller-calculator-commissions",
      badge: "NEW" as const
    }
  ];



  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">Technovita Solution</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">

            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Services Mega Menu */}
              {isServicesOpen && (
                <div 
                  ref={servicesDropdownRef}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
                  style={{ top: '100%' }}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Core E-Commerce Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-pink-600 mb-4 uppercase tracking-wide">Core E-Commerce Services</h3>
                      <div className="space-y-1">
                        {coreServicesMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                    </div>

                    {/* International Amazon Marketplace Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-pink-600 mb-4 uppercase tracking-wide">International Amazon Marketplace Services</h3>
                      <div className="space-y-1">
                        {internationalAmazonMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-pink-600 mb-4 uppercase tracking-wide">Additional Services</h3>
                      <div className="space-y-1">
                        {additionalServicesMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                      
                      {/* Enhanced CTA Section */}
                      <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl border border-purple-200 shadow-lg">
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Ready to Grow Your Business?</h4>
                          <p className="text-sm text-gray-600 mb-4">Get expert e-commerce solutions tailored to your needs</p>
                        </div>
                        
                        <div className="space-y-3">
                          {/* Call Button */}
                          <a 
                            href="tel:+917042163504"
                            className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                          </a>
                          
                          {/* WhatsApp Button */}
                          <div className="w-full">
                            <WhatsAppButton 
                              serviceName="E-commerce Services" 
                              className="w-full justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-purple-200">
                          <p className="text-xs text-center text-gray-500">
                            <span className="inline-flex items-center">
                              <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Free consultation & quote
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Seller Calculators Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleCalculatorsMouseEnter}
              onMouseLeave={handleCalculatorsMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                <span>Seller Calculators</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isCalculatorsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Calculators Menu */}
              {isCalculatorsOpen && (
                <div 
                  ref={calculatorsDropdownRef}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
                  style={{ top: '100%' }}
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Marketplace Fee Calculators</h3>
                    <p className="text-sm text-gray-600">Calculate your selling fees and profit margins across different platforms</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {calculatorsMenuItems.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </div>
                  
                  {/* Calculator CTA */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h4 className="text-sm font-semibold text-gray-900">Maximize Your Profits!</h4>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Get personalized pricing strategies & profit optimization from our experts</p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Get Expert Help Now
            </Link>
                  </div>
                </div>
              )}
            </div>


            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="px-4 space-y-4">

              
              {/* Mobile Services Menu */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileServicesOpen && (
                  <div className="mt-2 pl-4 space-y-3 border-l-2 border-pink-100 max-h-96 overflow-y-auto">
                    <div>
                      <h4 className="text-sm font-semibold text-pink-600 mb-2">Core Services</h4>
                      {coreServicesMenuItems.map((item, index) => (
                        <Link 
                          key={index}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-pink-600 py-1"
                        >
                          {item.title}
              </Link>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-pink-600 mb-2">International Amazon Services</h4>
                      {internationalAmazonMenuItems.map((item, index) => (
                        <Link 
                          key={index}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-pink-600 py-1"
                        >
                          {item.title}
              </Link>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-pink-600 mb-2">Additional Services</h4>
                      {additionalServicesMenuItems.map((item, index) => (
                        <a 
                          key={index}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : '_self'}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block text-sm text-gray-600 hover:text-pink-600 py-1"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Calculators Menu */}
              <div>
                <button 
                  onClick={() => setIsMobileCalculatorsOpen(!isMobileCalculatorsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  <span>Seller Calculators</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileCalculatorsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileCalculatorsOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-blue-100">
                    {calculatorsMenuItems.map((item, index) => (
                      <a 
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 py-1"
                      >
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${
                            item.badge === 'NEW' ? 'bg-green-100 text-green-800' :
                            item.badge === 'POPULAR' ? 'bg-purple-100 text-purple-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>


              <Link href="/about-us" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link 
                  href="#seller-application"
                  className="block w-full text-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 font-medium"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;