'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: 'NEW' | 'POPULAR' | 'AI' | 'HOT';
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, description, href, badge }) => (
  <Link 
    href={href}
    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
  >
    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
      <div className="text-blue-600 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center space-x-2">
        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
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

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const servicesMenuItems = [
    // E-COMMERCE
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "E-commerce Store Setup",
      description: "Complete online store creation and optimization on all platforms",
      href: "/services/ecommerce-setup",
      badge: "POPULAR" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Catalogue Creation",
      description: "Professional product catalogues and inventory management",
      href: "/services/catalogue-creation"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Content Writing",
      description: "Engaging product descriptions and marketing content",
      href: "/services/content-writing",
      badge: "NEW" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Brand Development",
      description: "Build and nurture your preferred brand identity",
      href: "/services/brand-development"
    }
  ];

  const digitalMarketingMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies and campaigns",
      href: "/services/digital-marketing",
      badge: "POPULAR" as const
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO Optimization",
      description: "Improve your online visibility and search rankings",
      href: "/services/seo-optimization"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Social Media Management",
      description: "Engage your audience across all social platforms",
      href: "/services/social-media",
      badge: "HOT" as const
    }
  ];

  const advertisingMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Paid Advertising",
      description: "Google Ads, Facebook Ads, and targeted campaigns",
      href: "/services/paid-advertising"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Video Marketing",
      description: "Engaging video content and promotional campaigns",
      href: "/services/video-marketing",
      badge: "NEW" as const
    }
  ];

  const businessGrowthMenuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Business Strategy",
      description: "Growth planning and market expansion strategies",
      href: "/services/business-strategy"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Performance Analytics",
      description: "Track and optimize your business performance",
      href: "/services/performance-analytics"
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
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Pricing
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu */}
              {isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
                  style={{ top: '100%' }}
                >
                  <div className="grid grid-cols-4 gap-6">
                    {/* E-commerce Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">E-commerce</h3>
                      <div className="space-y-1">
                        {servicesMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                    </div>

                    {/* Digital Marketing Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Digital Marketing</h3>
                      <div className="space-y-1">
                        {digitalMarketingMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                    </div>

                    {/* Advertising Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Advertising</h3>
                      <div className="space-y-1">
                        {advertisingMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                    </div>

                    {/* Business Growth Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Business Growth</h3>
                      <div className="space-y-1">
                        {businessGrowthMenuItems.map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </div>
                      
                      {/* CTA Section */}
                      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <h4 className="text-sm font-semibold text-gray-900">Free Consultation</h4>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">Get expert advice for your project</p>
                        <Link 
                          href="/contact"
                          className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About
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
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 font-medium">
                Pricing
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-700 hover:text-blue-600 font-medium">
                Portfolio
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;