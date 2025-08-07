import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Flipkart Product Listing and Catalog Services | Technovita Solution',
  description: 'Professional Flipkart product listing and cataloging services in India. Expert team helps increase visibility, sales and manage your Flipkart seller account with SEO-optimized listings.',
  keywords: 'Flipkart product listing, Flipkart catalog services, Flipkart seller services, product listing India, e-commerce catalog, Flipkart marketplace, product cataloging',
  authors: [{ name: 'Technovita Solution' }],
  openGraph: {
    title: 'Flipkart Product Listing and Catalog Services | Technovita Solution',
    description: 'Professional Flipkart product listing and cataloging services in India. Expert team helps increase visibility, sales and manage your Flipkart seller account.',
    url: 'https://technovitasolution.com/Flipkart-Catalogue',
    siteName: 'Technovita Solution',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flipkart Product Listing and Catalog Services | Technovita Solution',
    description: 'Professional Flipkart product listing and cataloging services in India. Expert team helps increase visibility, sales and manage your Flipkart seller account.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://technovitasolution.com/Flipkart-Catalogue',
  },
};

const FlipkartCataloguePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Flipkart Product Listing and Catalog Services",
            "description": "Professional Flipkart product listing and cataloging services to help sellers increase visibility and sales on Flipkart marketplace",
            "provider": {
              "@type": "Organization",
              "name": "Technovita Solution",
              "url": "https://technovitasolution.com"
            },
            "areaServed": "India",
            "serviceType": "E-commerce Services"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Flipkart <span className="text-yellow-300">Product Listing</span> and Catalog Services
              </h1>
              <p className="text-xl mb-8 text-pink-100">
                Professional Flipkart cataloging services to boost your product visibility and sales on India's largest marketplace
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="#seller-application"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors duration-200"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Images/flipkart-catalogue/flipkart-catalogue-header.webp"
                alt="Flipkart Product Listing Services - Professional E-commerce Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Flipkart <mark className="bg-yellow-200 px-2 rounded">Product Listing</mark> and Cataloging
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Flipkart Product listing or cataloging is the first step in the journey to become a seller on Flipkart, let's understand what does mean of Flipkart product listing so Flipkart means to show your product on Flipkart you have to upload your products on Flipkart with the product title and description of product with good SEO keywords so it will be visible to larger audience and when it will reach more people there are higher chances that your product sales will be increased so in your successful seller journey product listing in a right way is the most important part.
              </p>
              
              <p>
                So if you are looking for a company who can help you to become a successful seller on Flipkart then you are at the right place we at <strong>Technovita Solution</strong> provide best Flipkart listing services in all over India we are having a dedicated team of expert employees who will help you to list your product and make it visible to larger number of audience.
              </p>

              <p>
                Flipkart marketplace is getting more cut-throat by the day. With increased competition, it's getting harder to take your slice of the pie. Flipkart Product Listing and cataloguing play a vital role in the e-commerce business. Shoppers make decisions for buying a product based on the listing and description displayed. The Good news is <strong>Technovita Solution</strong> is here to help! Ride the wave for the best E-Commerce Service provider in Delhi-NCR.
              </p>

              <p>
                So, with competition getting hotter every day, how can you increase your sales on Flipkart, and take your business to the next level? The good news is, we Technovita Solution is here to help. And despite competition going up, the share of sales available to sellers on the Flipkart marketplace is getting bigger and bigger.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <WhatsAppButton serviceName="Flipkart Catalogue" className="mt-8" />
          </div>

          {/* Flipkart Dashboard Image */}
          <div className="text-center mb-12">
            <Image
              src="/images/flipkart-catalogue/flipkartDashboard.webp"
              alt="Flipkart seller dashboard showing product listing interface"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Single Listing Steps */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              How to create product catalog: Steps to create a Single Listing
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Select a vertical for your product:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Products are segregated based on categories and it is important to select the right category and vertical for your listings. Scroll through a list of options in the category section once you click on 'Add New Listing' under the 'My Listings' tab. You can also use the search bar to find the correct product category.
                </p>
              </div>

              <div className="text-center my-8">
                <Image
                  src="/images/flipkart-catalogue/flipkartCategory.webp"
                  alt="Flipkart product category selection interface showing different categories"
                  width={700}
                  height={400}
                  className="mx-auto rounded-lg shadow-md"
                />
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Get brand approval:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Next, enter brand information for the product. If you get an approval message, you can continue with the next step. If not, enter the required details and apply for brand approval. You can track your approvals by clicking on 'Track your approval' under 'My Listings'.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Enter product specifications:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Product specifications help customers decide whether they want to buy the product from you or another seller, so give as many details as possible. Enter relevant details such as product description, images, additional information and create a variant, if it is applicable. Images of the product you are selling can also help a customer choose your product over another seller's. So, ensure that each listing has the appropriate images.
                </p>
              </div>

              <div className="text-center my-8">
                <Image
                  src="/images/flipkart-catalogue/productDetails.webp"
                  alt="Flipkart product details form showing product specifications and image upload"
                  width={700}
                  height={400}
                  className="mx-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* WhatsApp CTA */}
            <WhatsAppButton serviceName="Flipkart Catalogue" className="mt-8" />
          </section>

          {/* Bulk Listing Steps */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Steps to create a Bulk Listing:
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Sign into the Seller Portal:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  With your username and password, sign into the Flipkart Seller Portal. Click on the 'Listings' tab and select 'My Listings'. Click on 'Add New Listings' and then on 'Add Bulk Listing' on the top, right corner of your screen.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Select the category:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Once the page refreshes, select the product category and the sub-category. Click on 'Download Template'.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Make changes to the template:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Open the downloaded Excel template. The first sheet is the Summary Sheet which explains how this template works, as per the category you chose. Navigate to the 'Index' sheet and click on the sub-category of your choice. For example, if your category is 'Clothing', you can click on sub-category 'Blazers'. This will take you to the relevant sheet in the template. Update information starting from column G. Enter the SKU ID, brand, style code and size based on the values that are acceptable. If you can use information from the Index sheet for a specific column, the template will give you a link. You must copy and paste this information by clicking on the link to ensure that you don't have to make changes later on. Provide details for all column heads that are coloured blue as these are mandatory. Column heads that are coloured in green are optional, but it is good to offer this information to customers.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Add image URLs to the template:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Go back to 'Add New Listings', click on 'Add Bulk Listing' and then on 'Image Uploader'. Choose the category and sub-category for your product. Enter the SKU ID of the product. Click on 'Choose File' and select the image from where it is stored on your computer. Click on 'Upload Image' and copy the URL that is displayed on the screen. Paste it in the relevant column in the template: Main Image URL, Other Image URL 1 or Other Image URL 2.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Submit for Quality Check:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Once you click on 'Add Bulk Listing', click on 'Upload Catalog'. Select the correct template file and upload it.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#F2903D'}}>
              Product listing and Catalog FAQ
            </h2>

            <div className="space-y-6">
              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                  What is product listing on Flipkart?
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  If you want to sell your product on Flipkart then you have to upload all the necessary details about your product and add images of the product so that a customer can make a decision to buy your product.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                  How to list product on Flipkart?
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  It could be a bit difficult if you don't have any technical knowledge. You can read our article on how to list product on Flipkart and then also if you don't understand then we are having team of experts who can help you to list products on Flipkart and help you to start your selling journey on Flipkart.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                  How to change photo of product on Flipkart?
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  If you want to change photo of a product on your seller account on Flipkart then you can edit the product listing of Flipkart and can submit a new request to change. If you are unable to do that by yourself and want to hire us, you can. We are a team of ecommerce experts who can help you to make your seller journey very easy.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                  How to do a good product listing and make a SEO ready catalogue on Flipkart?
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  If you are a new seller on Flipkart then we will highly recommend you to make your product listing as good as much it can be because this thing only will help you to make your products visible in front of millions of people on Flipkart and will make your product stand out from other products. So for best SEO ready product listing or cataloging you can reach us on technovitasolution.com or contact us through call. We will help you to make a successful seller on Flipkart and will help you to list your products in best possible way on Flipkart.
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Boost Your Flipkart Sales?
            </h3>
            <p className="text-xl mb-6 text-pink-100">
              <strong>"Technovita Solution"</strong> helps in Enriching your Product Catalog and also helps increase your product visibility in the online E-Commerce Business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Expert Help Now
              </Link>
              <Link 
                href="#seller-application"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors duration-200"
              >
                Free Consultation
              </Link>
            </div>
          </section>
        </article>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/+919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>

        {/* Call Button */}
        <a 
          href="tel:+919876543210" 
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
          aria-label="Call us"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FlipkartCataloguePage;