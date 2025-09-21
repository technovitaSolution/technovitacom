import { Metadata } from 'next';
import AmazonCalculator from '../../components/AmazonCalculator';
import CalculatorSchema from '@/components/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Amazon Revenue Calculator India | Free Seller Revenue Calculator 2025',
  description: 'Free Amazon Revenue Calculator for Indian sellers. Calculate your Amazon sales revenue, profit margins, and earnings instantly. Most accurate revenue calculator with complete fee breakdowns and profit analysis.',
  keywords: 'amazon revenue calculator, amazon seller revenue calculator, amazon sales calculator, amazon earnings calculator, amazon profit calculator, revenue calculator amazon, amazon seller calculator, amazon income calculator',
  openGraph: {
    title: 'Amazon Revenue Calculator India - Free Sales Revenue Calculator',
    description: 'Calculate your Amazon seller revenue instantly with our comprehensive calculator. Get accurate revenue estimates, profit margins, and earnings breakdown for Indian sellers.',
    type: 'website',
    url: 'https://technovitasolution.com/amazon-revenue-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Revenue Calculator India - Free Revenue Calculator',
    description: 'Calculate your Amazon seller revenue instantly. Free calculator with accurate revenue breakdown for Indian sellers.',
  },
  alternates: {
    canonical: 'https://technovitasolution.com/amazon-revenue-calculator',
  },
};

export default function AmazonRevenueCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <CalculatorSchema />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Amazon Revenue Calculator India
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Calculate your Amazon seller revenue, profit margins, and earnings instantly with our comprehensive revenue calculator designed for Indian sellers
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ Revenue Calculation</span>
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ Profit Analysis</span>
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ Fee Breakdown</span>
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ Free Forever</span>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Amazon Revenue Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Use our advanced Amazon revenue calculator to estimate your potential earnings, calculate profit margins, and understand all Amazon fees that impact your revenue.
          </p>
        </div>
        <AmazonCalculator />
      </div>

      {/* What is Amazon Revenue Calculator Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Amazon Revenue Calculator?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              An Amazon Revenue Calculator is a powerful tool that helps sellers estimate their potential revenue, profit margins, and net earnings from selling products on Amazon India marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Estimation</h3>
              <p className="text-gray-700">
                Calculate your potential Amazon sales revenue based on selling price, product category, and expected sales volume.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profit Analysis</h3>
              <p className="text-gray-700">
                Analyze your profit margins after deducting all Amazon fees, costs, and taxes to understand your actual earnings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fee Breakdown</h3>
              <p className="text-gray-700">
                Get detailed breakdown of all Amazon fees including referral fees, closing fees, shipping fees, and GST calculations.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Use Amazon Revenue Calculator?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Accurate Revenue Projections:</strong> Get precise revenue estimates based on real Amazon fee structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Profit Margin Analysis:</strong> Understand your actual profit after all deductions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Business Planning:</strong> Make informed decisions about product pricing and inventory</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Cost Optimization:</strong> Identify areas to reduce costs and increase profitability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>ROI Calculation:</strong> Calculate return on investment for your Amazon business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Free & Instant:</strong> No registration required, get results immediately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Amazon Revenue Calculator Works */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Amazon Revenue Calculator Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our Amazon revenue calculator uses advanced algorithms to provide accurate revenue and profit calculations based on current Amazon India fee structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enter Product Details</h3>
              <p className="text-gray-700">
                Input your product category, selling price, cost price, and product dimensions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Calculate Fees</h3>
              <p className="text-gray-700">
                Our calculator automatically computes all Amazon fees including referral, closing, and shipping fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analyze Revenue</h3>
              <p className="text-gray-700">
                Get detailed breakdown of your revenue, costs, and profit margins with visual charts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize Strategy</h3>
              <p className="text-gray-700">
                Use insights to optimize pricing, reduce costs, and maximize your Amazon revenue.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Amazon Revenue Calculation Formula</h3>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl mb-6">
              <h4 className="text-xl font-semibold mb-4">Revenue Calculation Formula</h4>
              <div className="text-lg font-mono bg-white text-gray-900 p-4 rounded-lg text-center">
                <strong>Net Revenue = Gross Sales - Amazon Fees - Taxes - Additional Costs</strong>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Revenue Components</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Gross Sales:</strong> Total sales amount (Selling Price × Quantity)</li>
                  <li><strong>Referral Fee:</strong> Category-based commission (8-18% of selling price)</li>
                  <li><strong>Closing Fee:</strong> Fixed fee per order (₹7-25 based on price range)</li>
                  <li><strong>Shipping Fee:</strong> Based on weight, dimensions, and distance</li>
                  <li><strong>Pick & Pack Fee:</strong> ₹17 for standard FBA items</li>
                  <li><strong>Storage Fee:</strong> ₹45 per cubic foot per month</li>
                  <li><strong>GST:</strong> 18% on Amazon service fees</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Revenue Optimization Tips</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Pricing Strategy:</strong> Balance competitive pricing with profit margins</li>
                  <li><strong>Category Selection:</strong> Choose categories with lower referral fees</li>
                  <li><strong>Inventory Management:</strong> Optimize storage to reduce storage fees</li>
                  <li><strong>Product Bundling:</strong> Increase average order value</li>
                  <li><strong>Fulfillment Method:</strong> Compare FBA vs FBM costs</li>
                  <li><strong>Seasonal Planning:</strong> Account for demand fluctuations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions - Amazon Revenue Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about Amazon revenue calculation and seller profitability.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is Amazon Revenue Calculator?</h3>
              <p className="text-gray-700 leading-relaxed">
                An Amazon Revenue Calculator is a specialized tool that helps Amazon sellers calculate their potential revenue, profit margins, and net earnings after accounting for all Amazon fees, costs, and taxes. It provides accurate estimates based on current Amazon India fee structures and helps sellers make informed pricing and business decisions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How accurate is the Amazon Revenue Calculator?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Amazon Revenue Calculator is highly accurate as it uses the latest Amazon India fee structures, including referral fees, closing fees, shipping fees, GST calculations, and storage fees. The calculator is regularly updated to reflect any changes in Amazon's fee structure, ensuring you get the most accurate revenue estimates possible.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What fees are included in the revenue calculation?</h3>
              <p className="text-gray-700 leading-relaxed">
                The calculator includes all major Amazon fees: Referral fees (6-18% based on category), Closing fees (₹7-25 per order), Shipping fees (based on weight and dimensions), Pick & Pack fees (₹17 for FBA), Storage fees (₹45 per cubic foot/month), and GST (18% on Amazon service fees). This comprehensive fee calculation gives you the most accurate net revenue estimate.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How do I optimize my Amazon revenue?</h3>
              <p className="text-gray-700 leading-relaxed">
                To optimize Amazon revenue: 1) Use competitive pricing strategies, 2) Choose product categories with lower referral fees, 3) Optimize product dimensions to reduce shipping costs, 4) Manage inventory efficiently to minimize storage fees, 5) Improve product listings for better conversion rates, 6) Use Amazon advertising strategically, and 7) Focus on customer reviews and ratings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is the Amazon Revenue Calculator free to use?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, our Amazon Revenue Calculator is completely free to use with no registration required. You can perform unlimited calculations, access all features, and get detailed revenue breakdowns without any cost. We believe in supporting Amazon sellers with free, accurate tools to help them succeed in their business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Calculating Your Amazon Revenue Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Use our free Amazon Revenue Calculator to optimize your pricing strategy and maximize your seller profits
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#calculator" 
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate Revenue Now
            </a>
            <a 
              href="/amazon-fba-calculator" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Try FBA Calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
