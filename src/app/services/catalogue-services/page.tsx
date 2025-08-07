import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'E-Commerce Catalogue Services | Professional Product Listing | Technovita Solution',
  description: 'Professional catalogue services for all major e-commerce platforms. Expert product listing, data entry, and attribute enrichment for Amazon, Flipkart, Meesho, eBay, Myntra, and more.',
  keywords: 'catalogue services, product listing, e-commerce data entry, Amazon listing, Flipkart catalogue, Meesho products, eBay listing, Myntra catalogue, product data management',
  alternates: {
    canonical: 'https://technovitasolution.com/services/catalogue-services'
  },
  openGraph: {
    title: 'E-Commerce Catalogue Services | Professional Product Listing',
    description: 'Professional catalogue services for all major e-commerce platforms. Expert product listing, data entry, and attribute enrichment.',
    url: 'https://technovitasolution.com/services/catalogue-services',
    siteName: 'Technovita Solution',
    images: [
      {
        url: '/Images/technovita-logo.png',
        width: 1200,
        height: 630,
        alt: 'Technovita Solution Catalogue Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Catalogue Services | Professional Product Listing',
    description: 'Professional catalogue services for all major e-commerce platforms. Expert product listing, data entry, and attribute enrichment.',
    images: ['/Images/technovita-logo.png'],
  }
};

export default function CatalogueServicesPage() {
  const catalogueServices = [
    {
      title: "Amazon Catalogue Services",
      description: "Professional Amazon product listing with SEO optimization, enhanced brand content, and A+ content creation for maximum visibility.",
      image: "/Images/amazon-catalogue/amazon.webp",
      href: "/services/amazon-catalogue-services",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      features: ["Product Listing", "SEO Optimization", "A+ Content", "Enhanced Brand Content"]
    },
    {
      title: "Flipkart Catalogue Services",
      description: "Complete Flipkart product catalogue management with high-quality images, detailed descriptions, and competitive pricing strategies.",
      image: "/Images/flipkart-catalogue/flipkart-catalogue-header.webp",
      href: "/Flipkart-Catalogue",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      features: ["Product Listing", "Image Optimization", "Price Management", "Inventory Sync"]
    },
    {
      title: "Meesho Catalogue Services",
      description: "Expert Meesho product listing services with supplier management, bulk uploads, and promotional campaign setup for better sales.",
      image: "/Images/meesho-catalogue/meesho-featured.webp",
      href: "/services/meesho-Catalogue",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      features: ["Bulk Upload", "Supplier Management", "Campaign Setup", "Sales Optimization"]
    },
    {
      title: "eBay Catalogue Services",
      description: "Professional eBay listing services with auction management, international shipping setup, and competitive analysis for global reach.",
      image: "/Images/ebay-catalogue/ebay.webp",
      href: "/services/ebay-Catalogue",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      features: ["Auction Management", "International Shipping", "Global Reach", "Competitive Analysis"]
    },
    {
      title: "Myntra Catalogue Services",
      description: "Fashion-focused Myntra catalogue services with style guides, size charts, trend analysis, and seasonal collection management.",
      image: "/Images/myntra-catalogue/myntra.webp",
      href: "/services/myntra-Catalogue",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      features: ["Fashion Styling", "Size Charts", "Trend Analysis", "Collection Management"]
    },
    {
      title: "Nykaa Catalogue Services",
      description: "Beauty and cosmetics focused Nykaa catalogue management with ingredient listings, shade matching, and beauty trend optimization.",
      image: "/Images/nykaa-catalogue/nykaa.webp",
      href: "/services/nykaa-Catalogue",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
      features: ["Beauty Products", "Ingredient Listing", "Shade Matching", "Trend Optimization"]
    },
    {
      title: "Shopee Catalogue Services",
      description: "Southeast Asian market expertise with Shopee product listing, localization services, and regional trend analysis for better conversion.",
      image: "/Images/shopee-catalogue/shopee.webp",
      href: "/services/shopee-Catalogue",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      features: ["Localization", "Regional Trends", "Southeast Asian Market", "Conversion Optimization"]
    },
    {
      title: "Ajio Catalogue Services",
      description: "Fashion and lifestyle products catalogue for Ajio with brand positioning, lifestyle photography, and premium product presentation.",
      image: "/Images/ajio-catalogue/ajio.webp",
      href: "/services/ajio-Catalogue",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      features: ["Brand Positioning", "Lifestyle Photography", "Premium Presentation", "Fashion Focus"]
    },
    {
      title: "Paytm Account Management",
      description: "Complete Paytm seller account management with payment gateway optimization, promotional campaigns, and sales analytics.",
      image: "/Images/paytm-catalogue/paytm-catalogue.webp",
      href: "/paytm-account-management",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      features: ["Account Management", "Payment Gateway", "Promotions", "Sales Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 text-pink-800 mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CORE E-COMMERCE SERVICES
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="text-pink-600">Catalogue Services</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your e-commerce presence with our expert product listing and catalogue management services across all major platforms. 
            From Amazon to Flipkart, we ensure your products shine with professional data entry and SEO optimization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              9+ Major Platforms
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Professional SEO Optimization
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the e-commerce platform where you want to establish or enhance your presence. 
              Our expert team provides specialized services for each platform's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogueServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  {/* Popular badge for some services */}
                  {(index === 0 || index === 1 || index === 2) && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-bold bg-pink-500 text-white rounded-full shadow-lg">
                        POPULAR
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs font-medium rounded-full ${service.bgColor} ${service.textColor}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Learn More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-pink-600 group-hover:text-pink-700">
                      Learn More
                    </span>
                    <svg 
                      className="w-5 h-5 text-pink-500 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Catalogue Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Catalogue Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive e-commerce solutions that drive results and maximize your online sales potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Certified professionals with 5+ years of e-commerce experience</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick turnaround time with bulk processing capabilities</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600 text-sm">Advanced keyword research and optimization for better rankings</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer support and maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-pink-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your E-Commerce Business?
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Let our experts handle your product catalogues while you focus on growing your business. 
            Get started with professional catalogue services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#consultation-form"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-pink-600 bg-white hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-pink-600 transition-colors duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}