'use client';

import { useEffect } from 'react';

export default function CalculatorSchema() {
  useEffect(() => {
    // Add JSON-LD structured data for better SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Amazon FBA Calculator India",
      "description": "Free Amazon FBA profit calculator for Indian sellers. Calculate referral fees, closing fees, shipping fees, GST, and profit margins instantly.",
      "url": "https://technovitasolution.com/amazon-fba-calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "creator": {
        "@type": "Organization",
        "name": "Technovita Solution",
        "url": "https://technovitasolution.com"
      },
      "featureList": [
        "Calculate Amazon India referral fees by category",
        "Closing fee calculation for all fulfillment methods",
        "Shipping fee calculation with STEP level support",
        "GST calculation on Amazon fees",
        "Profit margin and revenue analysis",
        "Visual breakdown with charts and graphs",
        "Compare different fulfillment methods",
        "Mobile-optimized interface",
        "Real-time calculations",
        "Free to use"
      ],
      "keywords": "amazon fba calculator, amazon profit calculator, amazon revenue calculator, amazon seller calculator, amazon fee calculator, fba calculator india, amazon commission calculator, kitna milega calculator",
      "inLanguage": "en-IN",
      "isAccessibleForFree": true,
      "browserRequirements": "Requires JavaScript enabled"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
