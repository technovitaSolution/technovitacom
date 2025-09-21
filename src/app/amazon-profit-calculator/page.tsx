import { Metadata } from 'next';
import AmazonCalculator from '../../components/AmazonCalculator';
import CalculatorSchema from '@/components/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Amazon Profit Calculator India | Free FBA Profit Calculator 2025',
  description: 'Free Amazon Profit Calculator for Indian sellers. Calculate your Amazon FBA profit margins, net profit, and ROI instantly. Most accurate profit calculator with complete fee breakdowns and profit analysis.',
  keywords: 'amazon profit calculator, amazon fba profit calculator, amazon seller profit calculator, profit calculator amazon, amazon profit margin calculator, fba profit calculator, amazon business profit calculator, amazon profit estimator',
  openGraph: {
    title: 'Amazon Profit Calculator India - Free FBA Profit Calculator',
    description: 'Calculate your Amazon seller profit instantly with our comprehensive calculator. Get accurate profit estimates, margin analysis, and ROI calculations for Indian sellers.',
    type: 'website',
    url: 'https://technovitasolution.com/amazon-profit-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Profit Calculator India - Free Profit Calculator',
    description: 'Calculate your Amazon seller profit instantly. Free calculator with accurate profit breakdown for Indian sellers.',
  },
  alternates: {
    canonical: 'https://technovitasolution.com/amazon-profit-calculator',
  },
};

export default function AmazonProfitCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      <CalculatorSchema />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Amazon Profit Calculator India
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Calculate your Amazon seller profit margins, net profit, and ROI instantly with our comprehensive profit calculator designed specifically for Indian Amazon sellers
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ Profit Calculation</span>
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ Margin Analysis</span>
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ ROI Calculator</span>
            <span className="bg-white/20 px-6 py-3 rounded-full">✓ 100% Free</span>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Amazon Profit Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Use our advanced Amazon profit calculator to calculate your net profit, profit margins, and return on investment after accounting for all Amazon fees and costs.
          </p>
        </div>
        <AmazonCalculator />
      </div>

      {/* What is Amazon Profit Calculator Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Amazon Profit Calculator?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              An Amazon Profit Calculator is an essential tool that helps Amazon sellers calculate their actual profit margins, net profit, and return on investment after deducting all Amazon fees, costs, and expenses from their selling price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profit Calculation</h3>
              <p className="text-gray-700">
                Calculate your exact net profit after deducting all Amazon fees, product costs, and additional expenses from your selling price.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profit Margin Analysis</h3>
              <p className="text-gray-700">
                Analyze your profit margins as a percentage of selling price to understand the profitability of your Amazon products.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Calculator</h3>
              <p className="text-gray-700">
                Calculate return on investment (ROI) to measure the efficiency of your investment in Amazon products and business.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-green-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Use Amazon Profit Calculator?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>Accurate Profit Calculation:</strong> Get precise net profit after all deductions and fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>Profit Margin Insights:</strong> Understand your profit margins for better pricing decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>Investment Analysis:</strong> Calculate ROI to measure business performance</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>Product Comparison:</strong> Compare profitability across different products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>Business Planning:</strong> Make data-driven decisions for your Amazon business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>Free & Easy:</strong> No registration required, instant calculations</span>
                  </li>
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
              Frequently Asked Questions - Amazon Profit Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about Amazon profit calculation and maximizing your seller profitability.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is Amazon Profit Calculator?</h3>
              <p className="text-gray-700 leading-relaxed">
                An Amazon Profit Calculator is a specialized tool that helps Amazon sellers calculate their actual net profit after deducting all costs including product costs, Amazon fees, taxes, and additional expenses. It provides accurate profit margins, ROI calculations, and helps sellers make informed pricing and business decisions for maximum profitability.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How do I calculate Amazon profit margin?</h3>
              <p className="text-gray-700 leading-relaxed">
                Amazon profit margin is calculated as: (Net Profit ÷ Selling Price) × 100. Net profit is your selling price minus all costs including product cost, Amazon referral fees, closing fees, shipping fees, storage fees, and GST. Our calculator automatically computes this for you with accurate fee structures for all categories.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is a good profit margin for Amazon sellers?</h3>
              <p className="text-gray-700 leading-relaxed">
                A good profit margin for Amazon sellers is typically 15-30%, with 20%+ being ideal for sustainable business growth. High-margin categories like electronics accessories can achieve 30-50% margins, while competitive categories might have 10-20% margins. The key is to maintain consistent profitability while staying competitive in your market.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How can I increase my Amazon profit margins?</h3>
              <p className="text-gray-700 leading-relaxed">
                To increase Amazon profit margins: 1) Negotiate better supplier prices, 2) Optimize product packaging to reduce shipping costs, 3) Choose categories with lower referral fees, 4) Bundle products to increase average order value, 5) Improve product listings for better conversion rates, 6) Use efficient inventory management to reduce storage fees, and 7) Focus on high-demand, low-competition products.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What costs should I include in profit calculation?</h3>
              <p className="text-gray-700 leading-relaxed">
                Include all costs in your profit calculation: Product cost (manufacturing/wholesale price), Amazon referral fees (6-18% based on category), Closing fees (₹7-25 per order), FBA fees (pick & pack, shipping, storage), GST (18% on Amazon fees), advertising costs, packaging costs, and any additional operational expenses. Our calculator includes all these costs for accurate profit estimation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is the Amazon Profit Calculator accurate?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, our Amazon Profit Calculator is highly accurate as it uses the latest Amazon India fee structures and is regularly updated to reflect any changes. It includes all major fees and costs, provides detailed breakdowns, and uses real-time calculations. However, actual profits may vary based on additional costs, seasonal fluctuations, and specific business circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Calculating Your Amazon Profits Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Use our free Amazon Profit Calculator to maximize your profit margins and build a successful Amazon business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#calculator" 
              className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate Profits Now
            </a>
            <a 
              href="/amazon-revenue-calculator" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Try Revenue Calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
