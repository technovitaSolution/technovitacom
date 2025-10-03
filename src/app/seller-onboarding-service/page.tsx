'use client';

import Image from 'next/image';
import { useState } from 'react';

function JsonLd() {
  const websiteUrl = 'https://technovitasolution.com/seller-onboarding-service';
  const orgName = 'Technovita Solution';

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Seller Onboarding Service',
    url: websiteUrl,
    description:
      'Professional seller onboarding services for Amazon, Flipkart, Myntra, Ajio, Nykaa, Blinkit, and Zepto.',
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Seller Onboarding Service',
    provider: {
      '@type': 'Organization',
      name: orgName,
      url: 'https://technovitasolution.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'E-commerce Seller Onboarding',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      url: websiteUrl,
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is seller onboarding in ecommerce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Seller onboarding in ecommerce is the process of helping new sellers register their business on platforms like Amazon, Flipkart, Myntra, Ajio, Nykaa, Blinkit, and Zepto. It includes document preparation, GST/KYC verification, account setup, product listing, and ad campaigns to help sellers start selling quickly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need professional seller onboarding services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Professional seller onboarding saves you time, avoids mistakes, and helps you launch your products faster. Experts handle account setup, product listings, and compliance, so you can focus on your business instead of struggling with complex platform requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete the seller onboarding process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'The timeline depends on the platform and document readiness. With professional services like Technovita Solution, sellers can get onboarded and start selling in as little as 5–7 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required for seller onboarding on ecommerce platforms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most ecommerce platforms require GST certificate, PAN card, bank account details, and address proof. However, requirements may vary depending on the platform (e.g., fashion platforms like Myntra may ask for brand authorization).',
        },
      },
      {
        '@type': 'Question',
        name: 'Which ecommerce platforms does Technovita Solution provide onboarding services for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Technovita Solution is an official onboarding partner for Amazon, Flipkart, Myntra, Ajio, Blinkit, and Nykaa, and also helps with onboarding on platforms like Zepto.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([webPage, service, faq]),
      }}
    />
  );
}

export default function SellerOnboardingServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is seller onboarding in ecommerce?",
      answer: "Seller onboarding in ecommerce is the process of helping new sellers register their business on platforms like Amazon, Flipkart, Myntra, Ajio, Nykaa, Blinkit, and Zepto. It includes document preparation, GST/KYC verification, account setup, product listing, and ad campaigns to help sellers start selling quickly."
    },
    {
      question: "Why do I need professional seller onboarding services?",
      answer: "Professional seller onboarding saves you time, avoids mistakes, and helps you launch your products faster. Experts handle account setup, product listings, and compliance, so you can focus on your business instead of struggling with complex platform requirements."
    },
    {
      question: "How long does it take to complete the seller onboarding process?",
      answer: "The timeline depends on the platform and document readiness. With professional services like Technovita Solution, sellers can get onboarded and start selling in as little as 5–7 days."
    },
    {
      question: "What documents are required for seller onboarding on ecommerce platforms?",
      answer: "Most ecommerce platforms require GST certificate, PAN card, bank account details, and address proof. However, requirements may vary depending on the platform (e.g., fashion platforms like Myntra may ask for brand authorization)."
    },
    {
      question: "Which ecommerce platforms does Technovita Solution provide onboarding services for?",
      answer: "Technovita Solution is an official onboarding partner for Amazon, Flipkart, Myntra, Ajio, Blinkit, and Nykaa, and also helps with onboarding on platforms like Zepto."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLd />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="w-full mb-8 overflow-hidden rounded-xl border border-gray-200">
          <Image
            src="/Images/seller-onboarding-services.webp"
            alt="Seller Onboarding Services - Technovita Solution"
            width={1600}
            height={900}
            priority
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Table of Contents */}
          <aside className="lg:col-span-4">
            <nav className="sticky top-20 border border-gray-200 rounded-xl p-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Table of contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a className="text-blue-700 hover:underline" href="#seller-onboarding-service">Seller Onboarding Service-</a></li>
                <li><a className="text-blue-700 hover:underline" href="#what-is-seller-onboarding-services">What is seller onboarding services?</a></li>
                <li><a className="text-blue-700 hover:underline" href="#what-seller-onboarding-services-technovita-solution-provides">WHAT seller onboarding services Technovita Solution provides-</a></li>
                <li><a className="text-blue-700 hover:underline" href="#our-seller-onboarding-services-include">Our seller onboarding services include-</a></li>
                <li><a className="text-blue-700 hover:underline" href="#benefits-of-using-professional-seller-onboarding-services">Benefits of using professional seller onboarding services-</a></li>
                <li><a className="text-blue-700 hover:underline" href="#seller-onboarding-process">Seller Onboarding Process</a></li>
                <li><a className="text-blue-700 hover:underline" href="#faq">faq-</a></li>
                <li><a className="text-blue-700 hover:underline" href="#checkout-seller-onboarding-services">checkout these seller onboarding services provided by technovita solution...</a></li>
              </ul>
            </nav>
          </aside>

          {/* Article */}
          <article className="lg:col-span-8 prose prose-lg prose-p:leading-relaxed prose-headings:font-semibold max-w-none">
          <h2 id="seller-onboarding-service" className="text-2xl font-semibold mb-2">Seller Onboarding Service-</h2>
          <h3 id="what-is-seller-onboarding-services" className="text-xl font-semibold mb-2">What is seller onboarding services?</h3>
          <p>
            If you are planning to start an ecommerce business, it’s important for you to know what is the meaning of seller onboarding services. Seller onboarding services means helping out new sellers who are not much technically savvy to register their business on ecommerce platforms like Amazon, Flipkart, Myntra, Ajio, Nykaa, Blinkit, and Zepto.
          </p>
          <p>
            Seller onboarding service includes helping out new sellers with all the required document preparation, creating their account on these ecommerce platforms, completing their GST and KYC verification, listing their products, and running ads on these accounts to help the sellers get their first sale.
          </p>

          <h3 id="what-seller-onboarding-services-technovita-solution-provides" className="text-xl font-semibold mb-2">WHAT seller onboarding services Technovita Solution provides-</h3>
          <p>
            We at Technovita Solution are official partners of many ecommerce platforms in India to help sellers launch their brands hassle-free on various ecommerce platforms. We are the official partner of Amazon seller onboarding, Myntra official seller onboarding partner, Ajio official seller onboarding partner, and Blinkit onboarding service provider. If you are looking for onboarding-related help, you can also check out our detailed seller onboarding offerings – <a href="https://www.technovitasolution.com/services/onboarding-services" className="text-blue-600 hover:text-blue-800 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Technovita Seller Onboarding Services</a>
          </p>
          <p>.</p>

          <h3 id="our-seller-onboarding-services-include" className="text-xl font-semibold mb-2">Our seller onboarding services include-</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Helping in preparation of all the required documents to sell on ecommerce platforms</li>
            <li>Every ecommerce platform has different documentation requirements to sell on their platform. Majorly all ask for GST and bank details, but requirements may vary based on the platform.</li>
            <li>Seller account creation/setup</li>
            <li>Setting up the seller account on behalf of the seller on the platform they want to sell.</li>
            <li>Product listing</li>
            <li>Once the user account is set up and verified, the next step in the selling process is listing the products (catalog).</li>
            <li>We help the new seller to list their products on these platforms once the seller onboarding is completed.</li>
          </ul>

          <h3 id="benefits-of-using-professional-seller-onboarding-services" className="text-xl font-semibold mb-2">Benefits of using professional seller onboarding services-</h3>
          <p>
            When you choose a professional company to help you in your initial ecommerce selling journey, you get many benefits and you don’t need to go through a tough learning curve. You will be able to start selling early without any complications. These are some of the benefits you get when you choose professional seller onboarding services –
          </p>
          <h4 className="font-semibold">Faster launch of your products</h4>
          <p>
            In professional services, you get help from experts who do seller onboarding on a daily basis. You get benefitted from their expertise and your brand is launched on the platform you wish in just 1 week.
            You can check out how Technovita Solution helped the Oddo founder to launch on Myntra and Ajio in just 5 days <a href="https://www.youtube.com/shorts/piYVKoZGVww" className="text-blue-600 hover:text-blue-800 hover:underline font-medium" target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <h4 className="font-semibold">Stress free</h4>
          <p>
            The professional seller onboarding company does everything for you so that you can just focus on your business and product quality, and be stress-free about complex seller onboarding, product listing, etc.
          </p>
          <h4 className="font-semibold">Expert support</h4>
          <p>
            The professional seller onboarding gives you access to the best talented certified experts which would be very beneficial to set up everything.
          </p>

          <h3 id="seller-onboarding-process" className="text-xl font-semibold mb-2">Seller Onboarding Process</h3>
          <p>
            The seller onboarding process may vary company to company. At Technovita Solution, we provide ecommerce seller onboarding in 5 simple steps:
          </p>
          <p>
            Step 1 – Once a potential seller connects with us for seller onboarding service, we gather some basic information about his/her business – what he does, in which category the product lies – and ensure that all the required documents to sell on the platform are available. Once this is cleared, we move to Step 2.
          </p>
          <p>
            Step 2 – For each customer, we assign a dedicated onboarding expert. He/she stays in constant touch with the client, collects all the documents required for onboarding, and completes the account creation and KYC process.
          </p>
          <p>
            Step 3 – Once the onboarding and KYC are done, in this step we list all the products of the seller on the ecommerce platform with proper SEO and keywords for better ranking.
          </p>
          <p>
            Step 4 – After the product listing, we run marketing campaigns for the client’s products to get initial traction and visibility.
          </p>
          <p>
            Step 5 – In this last step, we provide training to the seller so that he/she can manage their own account if they want to.
          </p>

          <h3 id="faq" className="text-xl font-semibold mb-6">FAQ</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-6" />
          <h3 id="checkout-seller-onboarding-services" className="text-xl font-semibold mb-2">checkout these seller onboarding services provided by technovita solution so that you can start selling today on any your choice of platofrm hassle free</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li><a href="https://www.technovitasolution.com/how-to-get-onboarded-on-ajio" className="text-blue-600 hover:text-blue-800 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Ajio Seller Onboarding Service</a></li>
            <li><a href="https://www.technovitasolution.com/how-to-get-onboarded-on-myntra" className="text-blue-600 hover:text-blue-800 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Myntra Seller Onboarding Service</a></li>
            <li><a href="https://www.technovitasolution.com/how-to-get-onboarded-on-nykaa" className="text-blue-600 hover:text-blue-800 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Nykaa Seller Onboarding Service</a></li>
          </ol>
        </article>
        </div>
      </section>
    </main>
  );
}


