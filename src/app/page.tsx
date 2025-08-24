import { Metadata } from 'next';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Technovita Solution - Leading E-commerce & Marketplace Management Services",
  description: "Technovita Solution is your trusted partner for comprehensive e-commerce services. Expert account management, catalogue services, and onboarding across Amazon (India, USA, UK, Canada, Australia, UAE), Flipkart, Myntra, Ajio, Nykaa, eBay, Meesho, Paytm, and Shopee. Transform your online business with our proven marketplace management solutions.",
  keywords: [
    "Technovita Solution",
    "technovita solution",
    "e-commerce services",
    "marketplace management",
    "Amazon seller services",
    "Flipkart account management",
    "Myntra catalogue services",
    "Ajio onboarding",
    "Nykaa marketplace",
    "eBay account management",
    "Meesho seller services",
    "Paytm marketplace",
    "Shopee account management",
    "catalogue creation services",
    "account management services",
    "onboarding services",
    "e-commerce solutions",
    "digital marketplace experts",
    "online business growth",
    "marketplace optimization"
  ],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://technovitasolution.com"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://technovitasolution.com",
    siteName: "Technovita Solution",
    title: "Technovita Solution - Leading E-commerce & Marketplace Management Services",
    description: "Technovita Solution is your trusted partner for comprehensive e-commerce services. Expert account management, catalogue services, and onboarding across Amazon (India, USA, UK, Canada, Australia, UAE), Flipkart, Myntra, Ajio, Nykaa, eBay, Meesho, Paytm, and Shopee. Transform your online business with our proven marketplace management solutions.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Technovita Solution - E-commerce & Marketplace Management Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@technovitasolution",
    creator: "@technovitasolution",
    title: "Technovita Solution - Leading E-commerce & Marketplace Management Services",
    description: "Technovita Solution is your trusted partner for comprehensive e-commerce services. Expert account management, catalogue services, and onboarding across Amazon (India, USA, UK, Canada, Australia, UAE), Flipkart, Myntra, Ajio, Nykaa, eBay, Meesho, Paytm, and Shopee. Transform your online business with our proven marketplace management solutions.",
    images: ["/logo.webp"],
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Technovita Solution",
            "url": "https://technovitasolution.com",
            "logo": "https://technovitasolution.com/logo.webp",
            "description": "Leading e-commerce solutions provider specializing in account management, catalogue services, and onboarding across major marketplaces including Amazon, Flipkart, Myntra, Ajio, Nykaa, eBay, Meesho, Paytm, and Shopee.",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.linkedin.com/company/technovita-solution",
              "https://www.facebook.com/technovitasolution",
              "https://twitter.com/technovitasolution",
              "https://www.instagram.com/technovitasolution"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 28.6139,
                "longitude": 77.2090
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "E-commerce Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Account Management Services",
                    "description": "Complete account management for Amazon, Flipkart, Myntra, Ajio, Nykaa, eBay, Meesho, Paytm, and Shopee"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Catalogue Services",
                    "description": "Professional product listing and catalogue management services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Onboarding Services",
                    "description": "Expert onboarding and training for new marketplace sellers"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Structured Data for WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Technovita Solution",
            "url": "https://technovitasolution.com",
            "description": "Leading e-commerce solutions provider specializing in account management, catalogue services, and onboarding across major marketplaces.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://technovitasolution.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <Hero />
      <Testimonials />
      <MultiStepForm />
      <About />
      <Footer />
    </main>
  );
}
