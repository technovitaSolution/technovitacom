'use client';

import { useState, useEffect } from 'react';
import { Calculator, IndianRupee, Package, Truck, Info, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import PopupManager from '@/components/PopupManager';
/* Head is handled via generateMetadata in head.tsx */

export default function NykaaSellerCalculatorPage() {
  const [productPrice, setProductPrice] = useState<string>('');
  const [commissionRate, setCommissionRate] = useState<number>(25);
  const [platform, setPlatform] = useState<'main' | 'fashion'>('main');
  const [sellerType, setSellerType] = useState<'new' | 'existing'>('new');
  const [results, setResults] = useState<{
    commission: number;
    shippingCharge: number;
    totalDeductions: number;
    netEarnings: number;
    profitMargin: number;
  } | null>(null);

  const calculateShippingCharge = (price: number, platform: string, sellerType: string): number => {
    if (platform === 'main') {
      if (sellerType === 'new') {
        if (price < 299) return 0; // Applicable (assuming standard shipping cost)
        return 0; // Free
      } else {
        if (price < 149) return 0; // Applicable (assuming standard shipping cost)
        return 0; // Free
      }
    } else { // fashion
      if (price < 800) return 99;
      return 0; // Free
    }
  };

  const calculateResults = () => {
    const price = parseFloat(productPrice);
    if (!price || price <= 0) return;

    const commission = (price * commissionRate) / 100;
    const shippingCharge = calculateShippingCharge(price, platform, sellerType);
    const totalDeductions = commission + shippingCharge;
    const netEarnings = price - totalDeductions;
    const profitMargin = ((netEarnings / price) * 100);

    setResults({
      commission,
      shippingCharge,
      totalDeductions,
      netEarnings,
      profitMargin
    });
  };

  useEffect(() => {
    if (productPrice) {
      calculateResults();
    }
  }, [productPrice, commissionRate, platform, sellerType]);

  return (
    <>
      <PopupManager />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-pink-600" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black">
                Nykaa Seller Commission Calculator - Calculate Your Profit
              </h1>
              <p className="text-black mt-1">
                Free tool to calculate Nykaa seller commissions, shipping charges, and maximize your profit margins
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
              <IndianRupee className="h-6 w-6 mr-2 text-pink-600" />
              Calculate Your Earnings
            </h2>

            <div className="space-y-6">
              {/* Product Price */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Product Selling Price (₹)
                </label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
                  <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg text-black placeholder-gray-500"
                    placeholder="Enter product price"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Platform Selection */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Platform
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPlatform('main')}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      platform === 'main'
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-gray-300 text-black'
                    }`}
                  >
                    <div className="font-medium">Nykaa (Main)</div>
                    <div className="text-sm text-black">Beauty & Personal Care</div>
                  </button>
                  <button
                    onClick={() => setPlatform('fashion')}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      platform === 'fashion'
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-gray-300 text-black'
                    }`}
                  >
                    <div className="font-medium">Nykaa Fashion</div>
                    <div className="text-sm text-black">Fashion & Lifestyle</div>
                  </button>
                </div>
              </div>

              {/* Seller Type */}
              {platform === 'main' && (
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Seller Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSellerType('new')}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        sellerType === 'new'
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-200 hover:border-gray-300 text-black'
                      }`}
                    >
                      <div className="font-medium">New Seller</div>
                      <div className="text-sm text-black">Free shipping above ₹299</div>
                    </button>
                    <button
                      onClick={() => setSellerType('existing')}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        sellerType === 'existing'
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-200 hover:border-gray-300 text-black'
                      }`}
                    >
                      <div className="font-medium">Existing Brand</div>
                      <div className="text-sm text-black">Free shipping above ₹149</div>
                    </button>
                  </div>
                </div>
              )}

              {/* Commission Rate */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Commission Rate (%)
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="15"
                    max="30"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${((commissionRate - 15) / 15) * 100}%, #e5e7eb ${((commissionRate - 15) / 15) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-black">
                    <span>15%</span>
                    <span className="font-medium text-pink-600">{commissionRate}%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
              <Package className="h-6 w-6 mr-2 text-green-600" />
              Calculation Results
            </h2>

            {results ? (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="text-sm text-green-700 font-medium">Net Earnings</div>
                    <div className="text-2xl font-bold text-green-800">
                      ₹{results.netEarnings.toFixed(2)}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 font-medium">Profit Margin</div>
                    <div className="text-2xl font-bold text-blue-800">
                      {results.profitMargin.toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-black">Detailed Breakdown</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-black">Product Price</span>
                      <span className="font-semibold text-black">₹{parseFloat(productPrice).toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-red-700">Commission ({commissionRate}%)</span>
                      <span className="font-semibold text-red-800">-₹{results.commission.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-orange-700 flex items-center">
                        <Truck className="h-4 w-4 mr-1" />
                        Shipping Charge
                      </span>
                      <span className="font-semibold text-orange-800">
                        {results.shippingCharge > 0 ? `-₹${results.shippingCharge.toFixed(2)}` : 'Free'}
                      </span>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700 font-medium">Your Net Earnings</span>
                        <span className="font-bold text-green-800 text-lg">₹{results.netEarnings.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <div className="font-medium mb-1">Shipping Information:</div>
                      {platform === 'main' ? (
                        <div>
                          {sellerType === 'new' ? (
                            <span>New Sellers: Free shipping above ₹299, charges apply below</span>
                          ) : (
                            <span>Existing Brands: Free shipping above ₹149, charges apply below</span>
                          )}
                        </div>
                      ) : (
                        <span>Nykaa Fashion: ₹99 shipping below ₹800, free above ₹800</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div className="text-center py-12">
                <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-black">Enter product price to see calculations</p>
              </div>
            )}
          </div>
        </div>

        {/* Other Calculators Section (placed directly below calculator) */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Explore Our Other Seller Calculators</h2>
            <p className="text-black mb-6">Use our free calculators to estimate commissions, fees, and profits across top marketplaces.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Amazon - brand orange */}
              <a
                href="https://www.technovitasolution.com/amazon-profit-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 hover:shadow-md transition-shadow border-2 border-orange-200 bg-orange-50"
              >
                <h3 className="font-semibold text-black">Amazon Profit Calculator (India)</h3>
                <p className="text-sm text-black mt-1">Calculate Amazon seller profit, margin, and ROI with accurate fee breakdowns.</p>
              </a>

              {/* Blinkit - brand green */}
              <a
                href="https://sellerguide.technovitasolution.in/blinkit-seller-calculator-commissions"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 hover:shadow-md transition-shadow border-2 border-green-200 bg-green-50"
              >
                <h3 className="font-semibold text-black">Blinkit Seller Commission Calculator</h3>
                <p className="text-sm text-black mt-1">Estimate Blinkit commissions, fulfillment/storage fees, and net earnings.</p>
              </a>

              {/* Flipkart - brand blue */}
              <a
                href="https://sellerguide.technovitasolution.in/calculator/flipkart"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 hover:shadow-md transition-shadow border-2 border-blue-200 bg-blue-50"
              >
                <h3 className="font-semibold text-black">Flipkart Seller Profit Calculator</h3>
                <p className="text-sm text-black mt-1">Calculate Flipkart commissions, shipping costs, fees, and profit.</p>
              </a>

              {/* Myntra - brand pink */}
              <a
                href="https://sellerguide.technovitasolution.in/calculator/myntra"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 hover:shadow-md transition-shadow border-2 border-pink-200 bg-pink-50"
              >
                <h3 className="font-semibold text-black">Myntra Seller Commission Calculator</h3>
                <p className="text-sm text-black mt-1">Check Myntra commission rates, shipping charges, and profitability.</p>
              </a>

              {/* AJIO - brand slate/indigo */}
              <a
                href="https://sellerguide.technovitasolution.in/calculator/ajio"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 hover:shadow-md transition-shadow border-2 border-slate-300 bg-slate-50"
              >
                <h3 className="font-semibold text-black">AJIO Seller Commission Calculator</h3>
                <p className="text-sm text-black mt-1">Estimate AJIO commissions and fees to set profitable prices.</p>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 space-y-8">
          {/* Why Calculate Commission */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
              Why Calculate Nykaa Seller Commissions Before Selling?
            </h2>
            
            <div className="prose max-w-none">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Maximize Nykaa Seller Profit</h3>
                  <p className="text-black mb-4">
                    Understanding Nykaa seller commissions (15-30%) helps you optimize pricing strategies to maximize your Nykaa seller profit while staying competitive in the beauty and fashion marketplace.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-black mb-3">Accurate Nykaa Commission Calculation</h3>
                  <p className="text-black">
                    With varying Nykaa seller commissions across different product categories, our commission calculator ensures you set the right selling price to achieve your desired profit margins.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Plan Your Nykaa Seller Earnings</h3>
                  <p className="text-black mb-4">
                    Calculating your exact Nykaa seller profit helps in better cash flow management and inventory planning, crucial for maintaining profitable business operations on Nykaa.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-black mb-3">Competitive Nykaa Seller Analysis</h3>
                  <p className="text-black">
                    Use our Nykaa seller commission calculator to determine break-even points and compare with competitors by understanding the true cost of Nykaa seller commissions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use Calculator */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
              <Info className="h-6 w-6 mr-2 text-blue-600" />
              How to Use Our Nykaa Seller Commission Calculator
            </h2>
            
            <div className="space-y-10">
              {/* Step 1 */}
              <section>
                <h3 className="text-xl font-semibold text-black mb-3">Step 1: Enter the Product Price</h3>
                <p className="text-black mb-4">
                  Start by entering your intended selling price in the Nykaa Seller Commission Calculator. The selling price
                  becomes the base for calculating your category-specific Nykaa seller commissions, any applicable shipping
                  or delivery charges, and your final net earnings. Accurate pricing ensures your Nykaa seller profit and
                  margin projections are reliable.
                </p>
                <figure className="mt-4">
                  <Image
                    src="/Images/nykaa-calculator/step-1.webp"
                    alt="Nykaa commission calculator - Step 1, enter product selling price"
                    width={900}
                    height={520}
                    className="w-full h-auto rounded-xl shadow-md border border-gray-200"
                    loading="lazy"
                  />
                  <figcaption className="text-sm text-black mt-2">Step 1 — Enter product selling price to begin commission and profit calculation.</figcaption>
                </figure>
              </section>

              {/* Step 2 */}
              <section>
                <h3 className="text-xl font-semibold text-black mb-3">Step 2: Select Platform and Commission Percentage</h3>
                <p className="text-black mb-4">
                  Choose whether you are selling on Nykaa (Main) or Nykaa Fashion and then set the commission percentage that
                  applies to your product category. Use the rate agreed with Nykaa during onboarding for the most accurate
                  result. Correct commission selection allows the calculator to estimate your Nykaa seller commissions
                  realistically for your brand and category.
                </p>
                <figure className="mt-4">
                  <Image
                    src="/Images/nykaa-calculator/step-2.webp"
                    alt="Nykaa commission calculator - Step 2, select platform and commission rate"
                    width={900}
                    height={520}
                    className="w-full h-auto rounded-xl shadow-md border border-gray-200"
                    loading="lazy"
                  />
                  <figcaption className="text-sm text-black mt-2">Step 2 — Select Nykaa platform and set the category commission percentage.</figcaption>
                </figure>
              </section>

              {/* Step 3 */}
              <section>
                <h3 className="text-xl font-semibold text-black mb-3">Step 3: Review Detailed Results and All Charges</h3>
                <p className="text-black mb-4">
                  The calculator shows a complete breakdown including the Nykaa commission amount, shipping and delivery
                  fees according to thresholds, and your final net earnings and profit margin. This helps you understand every
                  fee component clearly so you can set competitive prices, protect margins, and maximize Nykaa seller profit.
                </p>
                <figure className="mt-4">
                  <Image
                    src="/Images/nykaa-calculator/step-3.webp"
                    alt="Nykaa commission calculator - Step 3, view detailed results with all charges"
                    width={900}
                    height={520}
                    className="w-full h-auto rounded-xl shadow-md border border-gray-200"
                    loading="lazy"
                  />
                  <figcaption className="text-sm text-black mt-2">Step 3 — See the full breakdown: commission, shipping/delivery fees, and net profit.</figcaption>
                </figure>
              </section>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-black mb-3">Pro Tips:</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Use the default 25% Nykaa seller commission rate as a starting point for calculating your profit
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Consider Nykaa shipping thresholds when pricing - optimizing for free shipping can boost your seller profit
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Factor in your product cost and desired Nykaa seller profit margin when setting competitive prices
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Charges Explanation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2 text-orange-600" />
              Understanding Nykaa Seller Commissions and Charges
            </h2>
            
            <div className="space-y-8">
              {/* Commission Structure */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Nykaa Seller Commission Structure</h3>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-black mb-2">Nykaa Seller Commission Range</h4>
                      <p className="text-black text-sm mb-3">
                        Nykaa seller commissions range from 15% to 30% on product sales, varying by category and brand partnership level. Use our calculator to determine your exact commission.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-black mb-2">Factors Affecting Nykaa Seller Commissions</h4>
                      <ul className="text-sm text-black space-y-1">
                        <li>• Product category (beauty, skincare, fashion)</li>
                        <li>• Brand exclusivity and partnership level</li>
                        <li>• Sales volume and performance metrics</li>
                        <li>• Seasonal promotions and campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Charges Table */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Shipping Charges Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Platform</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Seller Type</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Order Value Threshold</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Shipping Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium text-black">Nykaa (Main)</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">New Sellers</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Below ₹299</td>
                        <td className="border border-gray-200 px-4 py-3 text-orange-600">Applicable</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"></td>
                        <td className="border border-gray-200 px-4 py-3 text-black">New Sellers</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Above ₹299</td>
                        <td className="border border-gray-200 px-4 py-3 text-green-600">Free</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"></td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Existing Brands</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Below ₹149</td>
                        <td className="border border-gray-200 px-4 py-3 text-orange-600">Applicable</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"></td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Existing Brands</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Above ₹149</td>
                        <td className="border border-gray-200 px-4 py-3 text-green-600">Free</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium text-black">Nykaa Fashion</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">All Sellers</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Below ₹800</td>
                        <td className="border border-gray-200 px-4 py-3 text-orange-600">₹99</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"></td>
                        <td className="border border-gray-200 px-4 py-3 text-black">All Sellers</td>
                        <td className="border border-gray-200 px-4 py-3 text-black">Above ₹800</td>
                        <td className="border border-gray-200 px-4 py-3 text-green-600">Free</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Important Notes:</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Commission rates may vary during special promotional periods
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Shipping charges are subject to change based on Nykaa's current policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Additional charges may apply for returns, cancellations, and customer service
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    GST and other taxes are calculated separately and not included in this calculator
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to calculate Nykaa seller profit and commissions',
              description:
                'Use this Nykaa seller commission calculator to compute commission, shipping/delivery fees, and net profit in three steps.',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Enter product price',
                  text: 'Enter your intended selling price to begin the calculation for Nykaa commissions and profit.',
                  image: '/Images/nykaa-calculator/step-1.webp',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Select platform and commission %',
                  text: 'Choose Nykaa Main or Nykaa Fashion and set the agreed commission percentage for your category.',
                  image: '/Images/nykaa-calculator/step-2.webp',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Review results',
                  text: 'See the breakdown: commission amount, shipping/delivery fees, and your final net earnings.',
                  image: '/Images/nykaa-calculator/step-3.webp',
                },
              ],
            }),
          }}
        />

        {/* Additional SEO Content */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Nykaa Seller Profit Calculator - Maximize Your Earnings</h2>
          <div className="prose max-w-none">
            <p className="text-black mb-4">
              Our comprehensive Nykaa seller commission calculator helps you determine exact profit margins and optimize your pricing strategy. Whether you're selling on Nykaa Main or Nykaa Fashion, understanding your commission structure is crucial for maximizing Nykaa seller profit.
            </p>
            
            <h3 className="text-lg font-semibold text-black mb-3">Key Features of Our Nykaa Commission Calculator:</h3>
            <ul className="list-disc list-inside space-y-2 text-black mb-6">
              <li>Real-time calculation of Nykaa seller commissions (15-30%)</li>
              <li>Automatic shipping charge calculation based on order value</li>
              <li>Instant profit margin analysis for better pricing decisions</li>
              <li>Support for both Nykaa Main and Nykaa Fashion platforms</li>
              <li>Free tool with no registration required</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-black mb-3">Optimize Your Nykaa Seller Earnings</h3>
            <p className="text-black mb-4">
              Use our Nykaa seller profit calculator to make data-driven pricing decisions. By understanding exact commission rates and shipping charges, you can set competitive prices while maintaining healthy profit margins on the Nykaa marketplace.
            </p>
            
            <div className="bg-pink-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-black mb-2">Start Calculating Your Nykaa Seller Profit Today</h4>
              <p className="text-black text-sm">
                Enter your product price above to instantly calculate Nykaa seller commissions, shipping charges, and net profit. Our calculator supports all Nykaa commission rates from 15% to 30%, helping you make informed decisions about your product pricing strategy.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ Section + JSON-LD */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Nykaa Seller Commission Calculator FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-black mb-2">What commission does Nykaa charge?</h3>
              <p className="text-black">Nykaa seller commissions typically range from 15% to 30% depending on category, partnership level, and promotions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2">Does the calculator include shipping or delivery fees?</h3>
              <p className="text-black">Yes. It factors thresholds for Nykaa (Main) and Nykaa Fashion, including ₹99 below ₹800 on Fashion and free shipping above thresholds.</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2">Can I change the commission percentage?</h3>
              <p className="text-black">Absolutely. Use the slider to set any rate between 15% and 30% based on your Nykaa onboarding agreement.</p>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What commission does Nykaa charge?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Nykaa seller commissions typically range from 15% to 30% depending on category, partnership level, and promotions.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does the calculator include shipping or delivery fees?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. It factors thresholds for Nykaa (Main) and Nykaa Fashion, including ₹99 below ₹800 on Fashion and free shipping above thresholds.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I change the commission percentage?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'You can adjust the commission between 15% and 30% to match your Nykaa onboarding agreement.',
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </div>

      {/* Helpful Resources & Backlinks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">Nykaa Seller Resources</h2>
          <p className="text-black mb-4">Explore expert guides and services to grow on Nykaa:</p>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <a
                href="https://www.technovitasolution.com/how-to-get-onboarded-on-nykaa"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                How to Get Onboarded on Nykaa – Step-by-step Guide (Technovita Solution)
              </a>
            </li>
            <li>
              <a
                href="https://www.technovitasolution.in/services/account-management/nykaa/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                Nykaa Seller Account Management Services – Grow Your Store (Technovita Solution)
              </a>
            </li>
            <li>
              <a
                href="https://www.technovitasolution.in/services/ecommerce-seller-onboarding/nykaa/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                Nykaa Seller Onboarding & Registration Services – Get Started (Technovita Solution)
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
