'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const platforms = ['Amazon', 'Flipkart','Walmart', 'Myntra', 'Ajio', 'Nykaa', 'Meesho', 'Shopee', 'EBay'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prevIndex) => 
        prevIndex === platforms.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [platforms.length]);

  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <span className="bg-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wide">
            E-COMMERCE GROWTH EXPERTS
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Launch Your Brand on
            <div className="text-pink-500 block relative h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-hidden">
              {platforms.map((platform, index) => (
                <span
                  key={platform}
                  className={`absolute transition-all duration-700 ease-in-out transform font-bold ${
                    index === currentPlatformIndex
                      ? 'translate-y-0 opacity-100 scale-100 rotate-0'
                      : index < currentPlatformIndex
                      ? '-translate-y-12 opacity-0 scale-90 -rotate-3'
                      : 'translate-y-12 opacity-0 scale-90 rotate-3'
                  }`}
                  style={{
                    transitionDelay: index === currentPlatformIndex ? '150ms' : '0ms'
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>
            <span className="text-gray-900">Today!</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            From account setup to your first sale, our end-to-end service makes selling on 
            major e-commerce platforms simple, profitable, and hassle-free.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[280px]"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Chat With Growth Expert
          </Link>
          
          <Link 
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-500 border-2 border-pink-500 hover:border-pink-600 hover:text-pink-600 bg-white rounded-lg transition-all duration-200 min-w-[280px]"
          >
            Explore All Services
          </Link>
        </div>

        {/* Key Benefits */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-600">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">9+ Platform Support</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">End-to-End Service</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">200+ Brands Launched</span>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;