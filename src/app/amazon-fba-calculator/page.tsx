import { Metadata } from 'next';
import AmazonCalculator from '../../components/AmazonCalculator';
import CalculatorSchema from '@/components/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Amazon FBA Calculator 2025 | Amazon Profit Calculator | Revenue Calculator 2025',
  description: 'Free Amazon FBA Calculator for India sellers. Calculate profit, revenue, fees, and margins instantly. Most accurate Amazon seller calculator with all fee breakdowns including referral, closing, shipping, GST, and storage fees.',
  keywords: 'amazon fba calculator, amazon revenue calculator, amazon profit calculator, amazon seller calculator, amazon fee calculator, fba calculator india, amazon commission calculator, kitna milega calculator',
  openGraph: {
    title: 'Amazon FBA Calculator India - Free Profit & Revenue Calculator',
    description: 'Calculate your Amazon FBA profits instantly with our comprehensive calculator. Get accurate fee breakdowns, profit margins, and revenue estimates for Indian sellers.',
    type: 'website',
    url: 'https://technovitasolution.com/amazon-fba-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon FBA Calculator India - Free Profit Calculator',
    description: 'Calculate your Amazon FBA profits instantly. Free calculator with accurate fee breakdowns for Indian sellers.',
  },
  alternates: {
    canonical: 'https://technovitasolution.com/amazon-fba-calculator',
  },
};

export default function AmazonFBACalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <CalculatorSchema />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Amazon FBA Calculator India
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Calculate your Amazon seller profits, fees, and margins instantly
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ All Amazon Fees Included</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Real-time Calculations</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Mobile Optimized</span>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AmazonCalculator />
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Use Our Amazon FBA Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Accurate Calculations</h3>
              <p className="text-gray-800">
                Based on latest Amazon India fee structure with all categories and subcategories included.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Visual Breakdown</h3>
              <p className="text-gray-800">
                Interactive charts and graphs to visualize your profit margins and fee breakdowns.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mobile First</h3>
              <p className="text-gray-800">
                Optimized for mobile devices so you can calculate profits on the go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Amazon FBA Fee Guide Blog Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Complete Amazon FBA Fee Guide for Indian Sellers 2025
          </h2>
          
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl text-gray-800 leading-relaxed mb-6">
                Understanding Amazon seller fees is very crucial for building a profitable business on Amazon India for this we have this free amazon fba calculator which shows you all the charges with accuracy. This comprehensive guide covers all fees that Amazon charges Indian sellers across different fulfillment methods, product categories, and pricing tiers. Use our Amazon FBA calculator above to get instant fee calculations for your specific products.
              </p>
            </div>

            {/* Factors Influencing Seller Fees */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">4 Key Factors That Determine Your Amazon Seller Fees</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                    Referral Fees (Commission)
                  </h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Category-based:</strong> Varies by product type</li>
                    <li>• <strong>Range:</strong> 0% to 30% of selling price</li>
                    <li>• <strong>Price-dependent:</strong> Different rates for price ranges</li>
                    <li>• <strong>Formula:</strong> Selling Price × Referral Fee %</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                    Closing Fees
                  </h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Price-based:</strong> Fixed fee per order</li>
                    <li>• <strong>Range:</strong> ₹6 to ₹100 per order</li>
                    <li>• <strong>Fulfillment-dependent:</strong> Varies by method</li>
                    <li>• <strong>Minimum:</strong> Starts at ₹6 (Easy Ship)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                    Weight Handling Fees
                  </h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Weight-based:</strong> Minimum 500g charge</li>
                    <li>• <strong>Distance-based:</strong> Local/Regional/National</li>
                    <li>• <strong>Range:</strong> ₹37 to ₹304+ per shipment</li>
                    <li>• <strong>Heavy & Bulky:</strong> Special rates apply</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                    Additional Fees
                  </h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Pick & Pack:</strong> ₹17-₹26 per unit (FBA)</li>
                    <li>• <strong>Storage:</strong> ₹45/cubic foot/month</li>
                    <li>• <strong>GST:</strong> 18% on all Amazon fees</li>
                    <li>• <strong>Removal:</strong> ₹10-₹100 per unit</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Category Breakdown */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Complete Amazon India Referral Fee Breakdown by Category</h3>
              <p className="text-lg text-gray-800 mb-8">
                Amazon charges different referral fees based on your product category and selling price. Here's the complete breakdown of all categories and their fee structures:
              </p>

              {/* Electronics Category */}
              <div className="mb-12 bg-gray-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Electronics & Accessories</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Mobile Phones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">All Prices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Laptops</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹70,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Laptops</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹70,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Headphones & Earphones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">18.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Headphones & Earphones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">18.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Power Banks & Chargers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">20.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Cases & Covers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">25.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Clothing, Fashion, Fashion Accessories, Jewellery, Luggage & Shoes */}
              <div className="mb-12 bg-blue-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Clothing, Fashion, Fashion Accessories, Jewellery, Luggage & Shoes</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">17.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">19.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Sweat Shirts and Jackets</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Sweat Shirts and Jackets</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Sweat Shirts and Jackets</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">18.0%</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Shorts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Shorts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Shorts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">19.5%</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Shorts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-red-600">24.0% (Highest)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Baby</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Baby</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Ethnic Wear</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Ethnic Wear</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">1.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Ethnic Wear</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Apparel - Ethnic Wear</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">16.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Watches</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Watches</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Watches</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">15.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-800 font-semibold">⚠️ Note: Shorts above ₹1000 have the highest fashion fees at 24%. Most fashion items under ₹300 have 0% referral fees.</p>
                </div>
              </div>

              {/* Books, Music, Movies, Video Games & Entertainment */}
              <div className="mb-12 bg-green-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Books, Music, Movies, Video Games & Entertainment</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Books</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹250</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">3.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Books</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹251 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Books</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Books</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">School Textbook Bundles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹250</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">School Textbook Bundles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹251 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">3.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">School Textbook Bundles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹1001 - ₹1500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">School Textbook Bundles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Movies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">All Prices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Music</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">All Prices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Email Gift Cards</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">All Prices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">0.0% (Free)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Guitars</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Guitars</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Guitars</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Keyboards</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Keyboards</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Keyboards</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Microphones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Microphones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Others</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Others</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Others</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - Others</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - DJ & VJ Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - DJ & VJ Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - DJ & VJ Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Musical Instruments - DJ & VJ Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Online Game Services</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">0.0% (Free)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Online Game Services</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹1001 - ₹2000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Online Game Services</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹2000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">3.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Consoles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Consoles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Consoles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Other Products</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Other Products</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Video Games - Other Products</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-semibold">💡 Note: Email Gift Cards and Video Game Services under ₹1000 have 0% referral fees, making them highly profitable categories.</p>
                </div>
              </div>

              {/* Baby Products, Toys & Education */}
              <div className="mb-12 bg-pink-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Baby Products, Toys & Education</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-pink-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Hardlines (Swings, Bouncers, Carriers, Safety, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Hardlines (Swings, Bouncers, Carriers, Safety, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Hardlines (Swings, Bouncers, Carriers, Safety, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Hardlines (Swings, Bouncers, Carriers, Safety, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Strollers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Strollers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Strollers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Strollers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Diapers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Diapers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Diapers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Drones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Drones</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-red-600">30.0% (Highest)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Party Supplies (Balloons, Banners, Masks, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Party Supplies (Balloons, Banners, Masks, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Party Supplies (Balloons, Banners, Masks, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Games & Puzzles, Board Games, Building Sets</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Games & Puzzles, Board Games, Building Sets</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Games & Puzzles, Board Games, Building Sets</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Infant & Pre-school Toys</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Infant & Pre-school Toys</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Infant & Pre-school Toys</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Outdoor, Activity & Sports Toys</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Outdoor, Activity & Sports Toys</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Outdoor, Activity & Sports Toys</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Plush Toys, Action Figures & Dolls</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Plush Toys, Action Figures & Dolls</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Remote & Non-Remote Controlled Vehicles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Remote & Non-Remote Controlled Vehicles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Remote & Non-Remote Controlled Vehicles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - Remote & Non-Remote Controlled Vehicles</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - STEM, Art & Craft, Learning & Development</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - STEM, Art & Craft, Learning & Development</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Toys - STEM, Art & Craft, Learning & Development</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby & Kids Furniture and Home Décor</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby & Kids Furniture and Home Décor</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby & Kids Furniture and Home Décor</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby & Kids Furniture and Home Décor</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Walker</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Walker</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Walker</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Baby Walker</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-800 font-semibold">⚠️ Note: Drones have the highest referral fee at 30% for items above ₹300</p>
                </div>
              </div>

              {/* Automotive Category */}
              <div className="mb-12 bg-orange-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Automotive & Vehicle Accessories</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Helmets & Riding Gloves</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Helmets & Riding Gloves</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Helmets & Riding Gloves</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Tyres & Rims</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Tyres & Rims</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Tyres & Rims</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Vehicles (2-Wheeler, 4-Wheeler & Electric)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Vehicles (2-Wheeler, 4-Wheeler & Electric)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹50,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Vehicles (2-Wheeler, 4-Wheeler & Electric)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹50,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car & Bike Parts (Brakes, Engine, Exhaust, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car & Bike Parts (Brakes, Engine, Exhaust, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car & Bike Parts (Brakes, Engine, Exhaust, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">15.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car & Bike Parts (Brakes, Engine, Exhaust, etc.)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">16.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Cleaning Kits & Car Care</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Cleaning Kits & Car Care</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Cleaning Kits & Car Care</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Accessories (Floor Mats, Covers, Riding Gear)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Accessories (Floor Mats, Covers, Riding Gear)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Vehicle Tools & Appliances</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Vehicle Tools & Appliances</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Vehicle Tools & Appliances</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Oils & Lubricants</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Oils & Lubricants</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Oils & Lubricants</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Batteries & Air Fresheners</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Batteries & Air Fresheners</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Car Electronics - Accessories</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">15.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-semibold">💡 Note: Most automotive items under ₹300 have 0% referral fees, making them attractive for low-cost accessories.</p>
                </div>
              </div>

              {/* Health, Beauty, Personal Care & Personal Care Appliances */}
              <div className="mb-12 bg-pink-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Health, Beauty, Personal Care & Personal Care Appliances</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-pink-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Fragrance</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Fragrance</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Fragrance</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Haircare, Bath and Shower</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">0.0% (Free)</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Haircare, Bath and Shower</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">5.0% (Low)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Haircare, Bath and Shower</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Makeup</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">0.0% (Free)</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Makeup</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">2.0% (Very Low)</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Makeup</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">3.5% (Very Low)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Beauty - Makeup</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Face Wash</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Face Wash</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Face Wash</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Face Wash</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Moisturizer Cream</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Moisturizer Cream</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Moisturizer Cream</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Moisturizer Cream</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Sunscreen</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Sunscreen</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Sunscreen</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Sunscreen</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Deodorants</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Deodorants</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Deodorants</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Facial Steamers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">0.0% (Free)</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Facial Steamers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">2.5% (Very Low)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Facial Steamers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Personal Care - Ayurvedic, Oral Care, Sanitizers, Pooja Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Personal Care - Ayurvedic, Oral Care, Sanitizers, Pooja Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Personal Care - Ayurvedic, Oral Care, Sanitizers, Pooja Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Household - Sports Nutrition & Meal Replacement Shakes</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">All Prices (Flat Rate)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Household - Cleaning, Laundry, Air Fresheners, Hygiene</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Household - Cleaning, Laundry, Air Fresheners, Hygiene</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Health & Household - Cleaning, Laundry, Air Fresheners, Hygiene</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-pink-100 border border-pink-300 rounded-lg">
                  <p className="text-pink-800 font-semibold">💄 Note: Beauty makeup has extremely low fees (2-3.5% for most price ranges), making it highly profitable. Facial steamers and haircare products also have very competitive rates.</p>
                </div>
              </div>

              {/* Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden */}
              <div className="mb-12 bg-teal-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden</h4>
                <div className="space-y-10">
                  {/* Bean Bags & Inflatables */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Bean Bags & Inflatables</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">All</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mattresses */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Mattresses</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">25.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000 and ≤ 20000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">16.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 20000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Rugs and Doormats */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Rugs and Doormats</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Clocks */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Clocks</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Wall Art */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Wall Art</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home - Fragrance & Candles */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home - Fragrance & Candles</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bedsheets, Blankets and Covers */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Bedsheets, Blankets and Covers</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home Furnishing (Excluding Curtain and Accessories) */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home Furnishing (Excluding Curtain and Accessories)</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Containers, Boxes, Bottles & Kitchen Storage */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Containers, Boxes, Bottles & Kitchen Storage</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home Improvement - Accessories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home Improvement - Accessories</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Tiles & Flooring Accessories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Tiles & Flooring Accessories</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Wires (Electrical Wires/Cables) */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Wires (Electrical Wires/Cables)</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home Storage (Excl. Kitchen Containers/Boxes) */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home Storage (Excl. Kitchen Containers/Boxes)</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">3.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">15.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Wallpapers & Accessories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Wallpapers & Accessories</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home Decor Products */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home Decor Products</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">3.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">17.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Wall Paints and Tools */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Wall Paints and Tools</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home - Waste & Recycling */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home - Waste & Recycling</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Craft Materials */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Craft Materials</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Water Purifier & Accessories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Water Purifier & Accessories</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 5000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 5000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Water Heaters & Accessories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Water Heaters & Accessories</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 5000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 5000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Kitchen & Bath, Cleaning Supplies, Hardware */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Kitchen & Bath, Cleaning Supplies, Hardware</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Sanitaryware (Toilets, Basins, Bath Mirrors etc.) */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Sanitaryware (Toilets, Basins, Bath Mirrors etc.)</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Home Safety & Security Systems */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Home Safety & Security Systems</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Inverter and Batteries */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Inverter and Batteries</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">4.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Cleaning and Home Appliances */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Cleaning and Home Appliances</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 5000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 5000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Ladders */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Ladders</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Indoor Lighting */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Indoor Lighting</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">14.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Doors and Windows */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Doors and Windows</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* LED Bulbs and Battens */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">LED Bulbs and Battens</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Cushion Covers */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Cushion Covers</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Curtains and Accessories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Curtains and Accessories</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">16.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">16.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Slipcovers and Kitchen Linens */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Slipcovers and Kitchen Linens</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">15.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Safes and Lockers */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Safes and Lockers</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lawn & Garden - Solar Panels */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Lawn & Garden - Solar Panels</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lawn & Garden - Leaf Blower & Water Pump */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Lawn & Garden - Leaf Blower & Water Pump</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lawn & Garden - Pest Control & Plant Protection */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Lawn & Garden - Pest Control & Plant Protection</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lawn & Garden - Solar Devices */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Lawn & Garden - Solar Devices</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lawn & Garden - Plants, Seeds & Bulbs */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Lawn & Garden - Plants, Seeds & Bulbs</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300 and ≤ 500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 500 and ≤ 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lawn & Garden - Outdoor Equipment */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Lawn & Garden - Outdoor Equipment</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-teal-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price (INR)</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; 300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Kitchen, Large & Small Appliances */}
                  <div>
                    <h5 className="text-2xl font-semibold mb-4 text-gray-900">Kitchen, Large & Small Appliances</h5>
                    <div className="space-y-8">
                      {/* Kitchen - Glassware & Ceramicware */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Kitchen - Glassware & Ceramicware</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-teal-100">
                                <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                                <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">4.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Kitchen - Gas Stoves & Pressure Cookers */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Kitchen - Gas Stoves & Pressure Cookers</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-teal-100">
                                <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                                <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹1500</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1500</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Cookware, Tableware & Dinnerware */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Cookware, Tableware & Dinnerware</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-teal-100">
                                <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                                <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-teal-100">
                                <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                                <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Large Appliances (excl. Accessories, Refrigerators and Chimneys) */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Large Appliances (excl. Accessories, Refrigerators and Chimneys)</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">Referral Fee %</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.5%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Large Appliances - Accessories */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Large Appliances - Accessories</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">Referral Fee %</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">16.0%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Large Appliances - Chimneys */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Large Appliances - Chimneys</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">Referral Fee %</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Large Appliances – Refrigerators */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Large Appliances – Refrigerators</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">Referral Fee %</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Small Appliances */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Small Appliances</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-teal-100">
                                <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                                <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹1000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹1001 – ₹5000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">4.5%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹5000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Fans and Robotic Vacuums */}
                      <div>
                        <h6 className="text-lg font-semibold mb-3 text-gray-900">Fans and Robotic Vacuums</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-teal-100">
                                <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                                <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹3000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹3000</td>
                                <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sports, Gym & Sporting Equipment */}
              <div className="mb-12 bg-sky-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Sports, Gym & Sporting Equipment</h4>
                <div className="space-y-10">
                  {/* Bicycles */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Bicycles</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-sky-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Gym Equipments */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Gym Equipments</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-sky-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹1001 – ₹35000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹35000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Sports - Multiple Categories */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Sports - Cricket & Badminton Equipments, Tennis, Table Tennis, Squash, Football, Volleyball, Basketball, Throwball, Swimming</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-sky-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Sports Collectibles */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Sports Collectibles</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-sky-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">17.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Sports - Specific Equipment */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Sports - Cricket Bats, Badminton Racquets, Tennis Racquets, Pickleball Paddles, Squash Racquets & TT Tables</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-sky-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Sports & Outdoors - Footwear */}
                  <div>
                    <h5 className="text-xl font-semibold mb-4 text-gray-900">Sports & Outdoors - Footwear</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-sky-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                            <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.5%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">16.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grocery, Food & Pet Supplies */}
              <div className="mb-12 bg-yellow-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Grocery, Food & Pet Supplies</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Herbs and Spices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Herbs and Spices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Herbs and Spices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery & Gourmet - Oils</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">0.0% (Free)</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery & Gourmet - Oils</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-bold text-green-600">1.5% (Lowest)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery & Gourmet - Oils</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery & Gourmet - Oils</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Dried Fruits and Nuts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Dried Fruits and Nuts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Dried Fruits and Nuts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Dried Fruits and Nuts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Hampers and Gifting</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Hampers and Gifting</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Hampers and Gifting</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Grocery - Hampers and Gifting</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Food</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Food</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Food</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet - Aquatics Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet - Aquatics Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet - Aquatics Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Products</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Products</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Products</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Comforters (Bed, Feeder, Cages, Carriers, Crates, Kennels, Doors)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Comforters (Bed, Feeder, Cages, Carriers, Crates, Kennels, Doors)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Comforters (Bed, Feeder, Cages, Carriers, Crates, Kennels, Doors)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Comforters (Bed, Feeder, Cages, Carriers, Crates, Kennels, Doors)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Essentials (Health Care, Grooming, Bath Supplies, Supplements, Tick/Flea, Dental)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Essentials (Health Care, Grooming, Bath Supplies, Supplements, Tick/Flea, Dental)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Essentials (Health Care, Grooming, Bath Supplies, Supplements, Tick/Flea, Dental)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Essentials (Health Care, Grooming, Bath Supplies, Supplements, Tick/Flea, Dental)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Accessories (Apparel, Collar, Leash, Harness)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Accessories (Apparel, Collar, Leash, Harness)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Pet Accessories (Apparel, Collar, Leash, Harness)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-semibold">🥗 Note: Grocery oils have the lowest fees at just 1.5% (₹301-₹500), making them highly profitable. Most grocery and pet items under ₹300 have 0% referral fees.</p>
                </div>
              </div>

              {/* Industrial, Medical, Scientific Supplies & Office Products */}
              <div className="mb-12 bg-purple-50 p-6 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Industrial, Medical, Scientific Supplies & Office Products</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">Sub-Category</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Scientific Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Scientific Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹15,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Scientific Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹15,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">OTC Medicine</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">OTC Medicine</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">15.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Masks</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Masks</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Weighing Scales & Fat Analyzers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Weighing Scales & Fat Analyzers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Weighing Scales & Fat Analyzers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">3D Printers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">3D Printers</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Electrical Testing Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Electrical Testing Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Commercial Food Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Business & Industrial - Commercial Food Equipment</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Body Support - Wearables and Soft Aids</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Body Support - Wearables and Soft Aids</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Stethoscopes</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Stethoscopes</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Packing Materials</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Packing Materials</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Power & Hand Tools and Water Dispenser</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Power & Hand Tools and Water Dispenser</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Power & Hand Tools and Water Dispenser</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Office Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Office Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Office Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Office Supplies</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Furniture - Study Table, Office & Gaming Chairs</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹1,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">16.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Furniture - Study Table, Office & Gaming Chairs</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹1,001 - ₹15,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">15.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Furniture - Study Table, Office & Gaming Chairs</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹15,000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Electronic Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Electronic Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Electronic Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Electronic Devices</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Arts and Crafts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Arts and Crafts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">2.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Arts and Crafts</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹500</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">5.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Writing Instruments</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">≤ ₹300</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Writing Instruments</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">₹301 - ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Office Products - Writing Instruments</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">&gt; ₹1000</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">14.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-purple-100 border border-purple-300 rounded-lg">
                  <p className="text-purple-800 font-semibold">🏭 Note: Many industrial and office products under ₹300 have 0% referral fees. Office furniture has higher fees (15.5-16.5%) in mid-range prices.</p>
                </div>
              </div>
            </div>

            {/* Others */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Others</h3>
              <div className="space-y-10">
                {/* Coin Collectibles */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Coin Collectibles</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">15.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Silver Coins & Bars */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Silver Coins & Bars</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Furniture - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Furniture - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹1001 – ₹15000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">15.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹15000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Toys - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Toys - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Grocery & Gourmet - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Grocery & Gourmet - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Grocery & Gourmet - Beverages */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Grocery & Gourmet - Beverages</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Office - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Office - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Personal Care Appliances - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Personal Care Appliances - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Beauty - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Beauty - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Health & Personal Care - Other Household Supplies */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Health & Personal Care - Other Household Supplies</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">4.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Health & Household - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Health & Household - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Business & Industrial Supplies - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Business & Industrial Supplies - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹15000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹15000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Kitchen - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Kitchen - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Lawn & Garden - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Lawn & Garden - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹15000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹15000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Luggage - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Luggage - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Baby - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Baby - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">6.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">7.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pet - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Pet - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">12.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Apparel - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Apparel - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">4.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">11.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">19.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Home - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Home - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">18.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Home Improvement - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Home Improvement - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">4.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Indoor Lighting - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Indoor Lighting - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">8.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹501 – ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹1000</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">16.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sports - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Sports - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">9.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">13.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Automotive - Other Products */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Automotive - Other Products</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">0.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">15.5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">16.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Consumable Physical Gift Card */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Consumable Physical Gift Card</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">Referral Fee %</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">5.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Warranty Services */}
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">Warranty Services</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left text-gray-900">Item Price Range</th>
                          <th className="border border-gray-300 p-3 text-center text-gray-900">Referral Fee %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">≤ ₹300</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">10.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">₹301 – ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">29.0%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 text-gray-800">&gt; ₹500</td>
                          <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">30.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Fees Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Amazon Closing Fees by Fulfillment Method</h3>
              <p className="text-lg text-gray-800 mb-8">
                Closing fees are fixed charges per order that vary based on your product's selling price and chosen fulfillment method. Here's the complete breakdown:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Fulfillment by Amazon (FBA)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-2 text-left text-gray-900">Price Range</th>
                          <th className="border border-gray-300 p-2 text-center text-gray-900">Closing Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">₹0 - ₹300</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹26</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">₹301 - ₹500</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹21</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">₹501 - ₹1000</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹26</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">Above ₹1000</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹51</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Easy Ship & Seller Flex</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="border border-gray-300 p-2 text-left text-gray-900">Price Range</th>
                          <th className="border border-gray-300 p-2 text-center text-gray-900">Closing Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">₹0 - ₹300</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold text-green-600">₹6</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">₹301 - ₹500</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹11</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">₹501 - ₹1000</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹34</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-gray-800">Above ₹1000</td>
                          <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹65</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Self Ship (Highest Fees)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-red-100">
                        <th className="border border-gray-300 p-2 text-left text-gray-900">Price Range</th>
                        <th className="border border-gray-300 p-2 text-center text-gray-900">Closing Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 text-gray-800">₹0 - ₹300</td>
                        <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹45</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-gray-800">₹301 - ₹500</td>
                        <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹35</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-gray-800">₹501 - ₹1000</td>
                        <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold">₹50</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-gray-800">Above ₹1000</td>
                        <td className="border border-gray-300 p-2 text-center text-gray-800 font-semibold text-red-600">₹100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Weight Handling Fees */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Amazon Weight Handling Fees (Shipping Costs)</h3>
              <p className="text-lg text-gray-800 mb-8">
                Weight handling fees depend on your product's weight, dimensions, shipping distance, and your seller performance (STEP level). Here's how Amazon calculates shipping costs:
              </p>

              <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Shipping Distance Categories</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <h5 className="font-semibold text-gray-900 mb-2">Local Rate</h5>
                    <p className="text-sm text-gray-800">Same city delivery (intra-city)</p>
                    <p className="text-lg font-bold text-green-600">₹37 - ₹114</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <h5 className="font-semibold text-gray-900 mb-2">Regional Rate</h5>
                    <p className="text-sm text-gray-800">Same region, different city</p>
                    <p className="text-lg font-bold text-orange-600">₹63 - ₹164</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <h5 className="font-semibold text-gray-900 mb-2">National Rate</h5>
                    <p className="text-sm text-gray-800">Across regions</p>
                    <p className="text-lg font-bold text-red-600">₹298 - ₹304</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">FBA Weight Handling Fees by STEP Level</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left text-gray-900">STEP Level</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Weight Band</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Local</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">Regional</th>
                        <th className="border border-gray-300 p-3 text-center text-gray-900">National</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Premium & Advanced</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">First 500g</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-green-600">₹37</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹63</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">₹298</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Standard</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">First 500g</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹39</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹65</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">₹300</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">Basic</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">First 500g</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹42</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹69</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold text-red-600">₹304</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 text-gray-800 font-medium">All Levels</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800">Each additional kg (after 2kg)</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹24</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹34</td>
                        <td className="border border-gray-300 p-3 text-center text-gray-800 font-semibold">₹34</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Heavy & Bulky Items (Special Rates)</h4>
                <p className="text-gray-800 mb-4">
                  Items are classified as Heavy & Bulky if they meet any of these criteria:
                </p>
                <ul className="text-gray-800 space-y-2 mb-4">
                  <li>• <strong>Weight:</strong> More than 22.5 kg</li>
                  <li>• <strong>Dimensions:</strong> Maximum dimension &gt; 72 inches (183 cm)</li>
                  <li>• <strong>Girth:</strong> &gt; 118 inches (300 cm)</li>
                  <li>• <strong>Categories:</strong> Washing machines, refrigerators, large furniture, etc.</li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Heavy & Bulky shipping rates start from ₹108 (Local) to ₹304 (National) for the first 12 kg.
                </p>
              </div>
            </div>

            {/* Additional Fees */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Additional Amazon FBA Fees</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Pick & Pack Fees (FBA Only)</h4>
                  <p className="text-gray-800 mb-4">Charged per unit sold for FBA orders:</p>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Standard items (up to 1 kg):</strong> ₹17</li>
                    <li>• <strong>Each additional kg (up to 5 kg):</strong> ₹5</li>
                    <li>• <strong>Each additional 5 kg thereafter:</strong> ₹2</li>
                    <li>• <strong>Heavy & Bulky (up to 12 kg):</strong> ₹26</li>
                    <li>• <strong>Each additional 5 kg (H&B):</strong> ₹5</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Storage Fees (FBA Only)</h4>
                  <p className="text-gray-800 mb-4">Monthly storage charges:</p>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Rate:</strong> ₹45 per cubic foot per month</li>
                    <li>• <strong>Calculation:</strong> Based on average daily inventory</li>
                    <li>• <strong>Long-term storage:</strong> Additional fees apply</li>
                    <li>• <strong>Peak season:</strong> Higher rates during festivals</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">GST on Amazon Fees (18%)</h4>
                <p className="text-gray-800 mb-4">
                  Amazon charges 18% GST on all seller fees. This is <strong>in addition</strong> to the product GST you collect from customers.
                </p>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-gray-800 font-semibold">GST Calculation Example:</p>
                  <p className="text-gray-800">Total Amazon Fees: ₹200</p>
                  <p className="text-gray-800">GST (18%): ₹36</p>
                  <p className="text-gray-800 font-bold">Total Cost: ₹236</p>
                </div>
              </div>
            </div>

            {/* Profit Calculation Formula */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">How to Calculate Your Amazon FBA Profit</h3>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-8">
                <h4 className="text-2xl font-semibold mb-4">Amazon FBA Profit Formula</h4>
                <div className="text-xl font-mono bg-white text-gray-900 p-4 rounded-lg text-center">
                  <strong>Net Profit = Selling Price - Cost Price - Referral Fee - Closing Fee - Shipping Fee - Pick & Pack Fee - Storage Fee - GST</strong>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Step-by-Step Calculation Process</h4>
                  <ol className="text-gray-800 space-y-3">
                    <li><strong>Step 1:</strong> Calculate Referral Fee = Selling Price × Category Fee %</li>
                    <li><strong>Step 2:</strong> Determine Closing Fee based on price range & fulfillment method</li>
                    <li><strong>Step 3:</strong> Calculate Shipping Fee based on weight, size & distance</li>
                    <li><strong>Step 4:</strong> Add Pick & Pack Fee (₹17 for standard FBA items)</li>
                    <li><strong>Step 5:</strong> Include monthly Storage Fee (₹45 per cubic foot)</li>
                    <li><strong>Step 6:</strong> Calculate GST = (Total Amazon Fees) × 18%</li>
                    <li><strong>Step 7:</strong> Final Profit = Revenue - All Costs - All Fees</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Real Example: Electronics Item</h4>
                  <div className="space-y-2 text-gray-800">
                    <p><strong>Product:</strong> Bluetooth Headphones</p>
                    <p><strong>Selling Price:</strong> ₹2,000</p>
                    <p><strong>Cost Price:</strong> ₹1,200</p>
                    <hr className="my-3" />
                    <p><strong>Referral Fee (18%):</strong> ₹360</p>
                    <p><strong>Closing Fee (FBA):</strong> ₹51</p>
                    <p><strong>Shipping Fee:</strong> ₹65</p>
                    <p><strong>Pick & Pack Fee:</strong> ₹17</p>
                    <p><strong>Storage Fee:</strong> ₹15</p>
                    <p><strong>GST (18%):</strong> ₹91</p>
                    <hr className="my-3" />
                    <p className="text-lg"><strong>Total Fees:</strong> ₹599</p>
                    <p className="text-xl font-bold text-green-600"><strong>Net Profit:</strong> ₹201</p>
                    <p className="text-lg font-semibold text-green-600"><strong>Profit Margin:</strong> 10.05%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for Maximizing Profit */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">10 Expert Tips to Maximize Your Amazon FBA Profits</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-900">💰 Fee Optimization Strategies</h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-gray-900 mb-2">1. Choose Low-Fee Categories</h5>
                      <p className="text-gray-800 text-sm">Focus on categories with lower referral fees like Books (3-4.5%), Large Appliances (5-5.5%), or Mobile Phones (5%).</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-gray-900 mb-2">2. Optimize Package Weight</h5>
                      <p className="text-gray-800 text-sm">Keep items under 500g when possible, and avoid crossing weight thresholds that trigger higher shipping fees.</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-semibold text-gray-900 mb-2">3. Bundle Products Strategically</h5>
                      <p className="text-gray-800 text-sm">Create bundles to increase average order value and spread fixed costs like closing fees across multiple items.</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h5 className="font-semibold text-gray-900 mb-2">4. Improve Your STEP Level</h5>
                      <p className="text-gray-800 text-sm">Work towards Premium/Advanced STEP levels to get lower shipping rates and other benefits.</p>
                    </div>
                    
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                      <h5 className="font-semibold text-gray-900 mb-2">5. Monitor Storage Costs</h5>
                      <p className="text-gray-800 text-sm">Avoid long-term storage fees by managing inventory levels and removing slow-moving stock.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-900">📈 Pricing & Business Strategies</h4>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                      <h5 className="font-semibold text-gray-900 mb-2">6. Calculate Break-Even Points</h5>
                      <p className="text-gray-800 text-sm">Always know your minimum selling price to cover all costs and achieve desired profit margins.</p>
                    </div>
                    
                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                      <h5 className="font-semibold text-gray-900 mb-2">7. Use FBA for Prime Benefits</h5>
                      <p className="text-gray-800 text-sm">FBA products get Prime badging, leading to higher conversion rates that can justify the additional fees.</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-gray-900 mb-2">8. Factor in Return Costs</h5>
                      <p className="text-gray-800 text-sm">Account for return processing costs and potential inventory loss in your profit calculations.</p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h5 className="font-semibold text-gray-900 mb-2">9. Seasonal Fee Adjustments</h5>
                      <p className="text-gray-800 text-sm">Plan for peak season surcharges and adjust pricing accordingly during high-demand periods.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2">10. Regular Profit Analysis</h5>
                      <p className="text-gray-800 text-sm">Use our calculator monthly to analyze profitability and identify optimization opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Start Calculating Your Amazon FBA Profits Today</h3>
              <p className="text-lg mb-4">
                Understanding Amazon's fee structure is the foundation of building a profitable FBA business. Use our comprehensive Amazon FBA calculator above to get accurate profit calculations for your products across all categories and fulfillment methods.
              </p>
              <p className="text-lg">
                With this detailed knowledge of Amazon fees, you're now equipped to make informed decisions about pricing, product selection, and fulfillment strategies that will maximize your success on Amazon India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl mx-auto">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Amazon.in Payment Cycles
  </h2>
  <p className="text-gray-600 mb-3">
    You are eligible to get paid for the order <span className="font-medium">7 days after the order is delivered</span>. 
    Amazon ensures payment for your sales (minus the Amazon Seller fees) is deposited securely 
    into your bank account every 7 days, including your Pay on Delivery orders.
  </p>
  <p className="text-gray-600 mb-3">
    Eligible sellers will also receive options for faster payment cycles.
  </p>
  <p className="text-gray-600">
    You can view your deposited balance along with tips to grow and expand your business 
    in your <span className="font-medium">Seller Central</span> account.
  </p>
</div>

      {/* FAQ Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Amazon FBA Calculator - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                How accurate is this Amazon FBA calculator for India?
              </h3>
              <p className="text-gray-800">
                Our Amazon FBA calculator is based on the latest Amazon India fee structure (2025) and includes all major fees: referral fees (0% to 30%), closing fees (₹6 to ₹100), shipping fees, pick & pack fees (₹17-₹26), storage fees (₹45/cubic foot), and 18% GST. It covers all 12+ major categories with 200+ subcategories for the most accurate profit calculations for Indian sellers.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                What Amazon seller fees are included in the calculation?
              </h3>
              <p className="text-gray-800">
                The Amazon revenue calculator includes: <strong>Referral fees</strong> (category-based 0-30%), <strong>Closing fees</strong> (fulfillment method-based ₹6-₹100), <strong>Weight handling fees</strong> (₹37-₹304 based on weight and distance), <strong>Pick & pack fees</strong> (FBA only ₹17-₹26), <strong>Storage fees</strong> (FBA only ₹45/cubic foot/month), and <strong>GST</strong> (18% on all Amazon fees). You can also add additional costs like packaging and marketing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Which Amazon fulfillment methods can I compare?
              </h3>
              <p className="text-gray-800">
                Our Amazon FBA calculator supports all four fulfillment methods: <strong>FBA (Fulfillment by Amazon)</strong> - best for Prime eligibility and high volume, <strong>Easy Ship</strong> - Amazon handles shipping only, <strong>Self Ship</strong> - you handle everything, and <strong>Seller Flex</strong> - hybrid model. You can compare profitability, fees, and margins across all methods to choose the best option for your products.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                How do Amazon referral fees work in India?
              </h3>
              <p className="text-gray-800">
                Amazon referral fees in India are category and price-based commissions. <strong>Electronics</strong> range from 5-25%, <strong>Fashion</strong> from 1-24%, <strong>Books</strong> from 3-13.5%, <strong>Home products</strong> from 3-25.5%, and <strong>Toys</strong> up to 30% (drones). The fee is calculated as: Selling Price × Category Referral Fee %. Our calculator includes all 200+ subcategories with accurate fee percentages.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                What is the Amazon FBA profit calculation formula?
              </h3>
              <p className="text-gray-800">
                The Amazon FBA profit formula is: <strong>Net Profit = Selling Price - Cost Price - Referral Fee - Closing Fee - Shipping Fee - Pick & Pack Fee - Storage Fee - GST</strong>. For example, a ₹1000 electronics item with ₹600 cost would have: ₹110 referral fee + ₹26 closing fee + ₹54 shipping + ₹17 pick & pack + ₹37 GST = ₹156 net profit (15.6% margin).
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                How are Amazon shipping fees calculated?
              </h3>
              <p className="text-gray-800">
                Amazon shipping fees (weight handling fees) are based on: <strong>Product weight</strong> (minimum 500g), <strong>Package dimensions</strong> (volumetric weight), <strong>Shipping distance</strong> (Local ₹37-₹114, Regional ₹63-₹164, National ₹298-₹304), and <strong>STEP level</strong> (Premium/Advanced/Standard/Basic). Heavy &amp; Bulky items (&gt;22.5kg or &gt;72&quot;) have higher rates starting from ₹108-₹304.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Is this Amazon calculator free to use?
              </h3>
              <p className="text-gray-800">
                Yes! Our Amazon FBA calculator is completely free to use with no registration required. You get unlimited calculations, all category coverage, fulfillment method comparisons, detailed fee breakdowns, profit margin analysis, and visual charts. It's the most comprehensive free Amazon seller calculator available for Indian sellers in 2025.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Which product categories have the lowest Amazon fees?
              </h3>
              <p className="text-gray-800">
                Categories with lowest Amazon referral fees include: <strong>Grocery oils</strong> (1.5% for ₹301-₹500 - lowest paid fee), <strong>Beauty makeup</strong> (2-3.5% for most prices), <strong>Facial steamers</strong> (2.5% for ₹301-₹500), <strong>Books</strong> (3-4.5% for most prices), <strong>Ethnic wear</strong> (1-10%), <strong>Large appliances</strong> (5-5.5%), <strong>Mobile phones</strong> (5%), and many items under ₹300 across grocery, beauty, and other categories (0% fees). However, consider total fees including closing and shipping costs. Use our calculator to compare actual profitability across categories.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                How does Amazon GST calculation work for sellers?
              </h3>
              <p className="text-gray-800">
                Amazon charges <strong>18% GST</strong> on all seller fees (referral, closing, shipping, pick & pack, storage). GST is calculated as: (Total Amazon Fees) × 18%. For example, if your total Amazon fees are ₹200, GST would be ₹36. This GST is in addition to the product GST you collect from customers. Our calculator automatically includes GST in the total cost calculation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
