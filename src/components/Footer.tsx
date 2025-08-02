import React from 'react';
import Link from 'next/link';

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, children }) => (
  <Link 
    href={href} 
    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technovita Solution</h3>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              We are an online-medium where we build, create and nurture your idea in a genre of preferred brands! 
              Our team of passionate content writers, digital marketers, designers, and advertising experts 
              strive to give the best possible e-commerce growth results.
            </p>
            
            <div className="flex items-center space-x-2 text-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Growing businesses since 2017</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <SocialLink href="https://www.facebook.com/profile.php?id=100078880413401" ariaLabel="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>

              <SocialLink href="https://www.linkedin.com/company/technovita-solution321" ariaLabel="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>

              <SocialLink href="https://www.instagram.com/technovitasolution/" ariaLabel="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Home
              </Link>
              
              <Link href="/services" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Services
              </Link>
              
              <Link href="/about" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                About Us
              </Link>
              
              <Link href="/portfolio" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Portfolio
              </Link>
              
              <Link href="/testimonials" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Testimonials
              </Link>
              
              <Link href="/contact" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Our Location</p>
                  <p className="text-sm text-gray-600">
                    Block F, Sector 3<br />
                    Noida, Delhi 201301, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <Link href="tel:+911234567890" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    +91 12345 67890
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <Link href="mailto:contact@technovitasolution.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    contact@technovitasolution.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Technovita Solution. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;