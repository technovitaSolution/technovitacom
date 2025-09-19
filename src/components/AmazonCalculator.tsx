'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calculator, TrendingUp, Package, Truck, CreditCard, Info } from 'lucide-react';
import InfoTooltip from './Tooltip';
import { AMAZON_CATEGORIES, FULFILLMENT_METHODS, STEP_LEVELS, SHIPPING_REGIONS } from '@/lib/amazon-categories';
import type { CalculatorInput, CalculatorResult } from '@/app/api/amazon-calculator/route';

const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#F97316'];

export default function AmazonCalculator() {
  const [input, setInput] = useState<CalculatorInput>({
    categoryId: '',
    subcategoryId: '',
    sellingPrice: 0,
    costPrice: 0,
    packageWeight: 500,
    packageDimensions: {
      length: 20,
      width: 15,
      height: 5
    },
    fulfillmentMethod: 'fba' as const,
    shippingRegion: 'local' as const,
    stepLevel: 'standard' as const,
    gstPercent: 18,
    additionalCosts: 0
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [comparisonResults, setComparisonResults] = useState<CalculatorResult[]>([]);

  const selectedCategory = AMAZON_CATEGORIES.find(cat => cat.id === input.categoryId);
  const subcategories = selectedCategory?.subcategories || [];

  const calculateFees = async (inputData: CalculatorInput) => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/amazon-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      if (!response.ok) {
        throw new Error('Calculation failed');
      }

      const calculationResult: CalculatorResult = await response.json();
      return calculationResult;
    } catch (err) {
      setError('Failed to calculate fees. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = async () => {
    // Validation
    if (!input.categoryId || !input.subcategoryId) {
      setError('Please select a category and subcategory');
      return;
    }
    
    if (!input.sellingPrice || input.sellingPrice <= 0) {
      setError('Please enter a valid selling price greater than 0');
      return;
    }
    
    if (!input.costPrice || input.costPrice <= 0) {
      setError('Please enter a valid cost price greater than 0');
      return;
    }
    
    if (input.costPrice >= input.sellingPrice) {
      setError('Cost price should be less than selling price');
      return;
    }
    
    if (input.packageWeight <= 0) {
      setError('Package weight should be greater than 0');
      return;
    }

    try {
      const calculationResult = await calculateFees(input);
      setResult(calculationResult);
    } catch (err) {
      // Error is already handled in calculateFees
    }
  };

  const handleCompareAllMethods = async () => {
    // Use the same validation as handleCalculate
    if (!input.categoryId || !input.subcategoryId) {
      setError('Please select a category and subcategory');
      return;
    }
    
    if (!input.sellingPrice || input.sellingPrice <= 0) {
      setError('Please enter a valid selling price greater than 0');
      return;
    }
    
    if (!input.costPrice || input.costPrice <= 0) {
      setError('Please enter a valid cost price greater than 0');
      return;
    }
    
    if (input.costPrice >= input.sellingPrice) {
      setError('Cost price should be less than selling price');
      return;
    }

    try {
      setLoading(true);
      const methods = ['fba', 'easy-ship', 'self-ship', 'seller-flex'] as const;
      const results = await Promise.all(
        methods.map(method => 
          calculateFees({ ...input, fulfillmentMethod: method })
        )
      );
      setComparisonResults(results);
      setComparisonMode(true);
    } catch (err) {
      // Error is already handled in calculateFees
    }
  };

  // Auto-calculate when inputs change (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.categoryId && input.subcategoryId && input.sellingPrice > 0 && input.costPrice > 0) {
        handleCalculate();
      }
    }, 1000); // Increased debounce time for better performance

    return () => clearTimeout(timer);
  }, [input]);

  const pieChartData = result ? [
    { name: 'Profit', value: Math.max(result.netProfit, 0), color: COLORS[0] },
    { name: 'Cost Price', value: input.costPrice, color: COLORS[1] },
    { name: 'Referral Fee', value: result.referralFee, color: COLORS[2] },
    { name: 'Closing Fee', value: result.closingFee, color: COLORS[3] },
    { name: 'Shipping Fee', value: result.shippingFee, color: COLORS[4] },
    { name: 'Other Fees', value: result.pickPackFee + result.storageFee + result.gstOnFees + result.otherFees, color: COLORS[5] }
  ].filter(item => item.value > 0) : [];

  const comparisonData = comparisonResults.map((res, index) => ({
    method: FULFILLMENT_METHODS[index].shortName,
    profit: res.netProfit,
    margin: res.profitMargin,
    totalFees: res.totalAmazonFees + res.gstOnFees
  }));

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Amazon FBA Profit Calculator
          </h1>
        </div>
        <p className="text-gray-600">
          Calculate your Amazon seller profits with accurate fee breakdowns
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
              <Package className="w-5 h-5 text-blue-600" />
              Product Information
            </h2>
            
            {/* Category Selection */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Category *
                </label>
                <select
                  value={input.categoryId}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    categoryId: e.target.value, 
                    subcategoryId: '' 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                >
                  <option value="">Select Category</option>
                  {AMAZON_CATEGORIES.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Subcategory *
                </label>
                <select
                  value={input.subcategoryId}
                  onChange={(e) => setInput(prev => ({ ...prev, subcategoryId: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  disabled={!input.categoryId}
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map(subcategory => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Inputs */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Selling Price (₹) *
                </label>
                <input
                  type="number"
                  value={input.sellingPrice || ''}
                  onChange={(e) => setInput(prev => ({ ...prev, sellingPrice: Number(e.target.value) }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  placeholder="Enter selling price"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Cost Price (₹) *
                </label>
                <input
                  type="number"
                  value={input.costPrice || ''}
                  onChange={(e) => setInput(prev => ({ ...prev, costPrice: Number(e.target.value) }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  placeholder="Enter cost price"
                  min="0"
                />
              </div>
            </div>

            {/* Package Details */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Package Weight (grams)
              </label>
              <input
                type="number"
                value={input.packageWeight}
                onChange={(e) => setInput(prev => ({ ...prev, packageWeight: Number(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                placeholder="Enter weight in grams"
                min="1"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Length (cm)
                </label>
                <input
                  type="number"
                  value={input.packageDimensions.length}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    packageDimensions: { 
                      ...prev.packageDimensions, 
                      length: Number(e.target.value) 
                    } 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Width (cm)
                </label>
                <input
                  type="number"
                  value={input.packageDimensions.width}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    packageDimensions: { 
                      ...prev.packageDimensions, 
                      width: Number(e.target.value) 
                    } 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={input.packageDimensions.height}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    packageDimensions: { 
                      ...prev.packageDimensions, 
                      height: Number(e.target.value) 
                    } 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Fulfillment Options */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
              <Truck className="w-5 h-5 text-blue-600" />
              Fulfillment Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Fulfillment Method
                </label>
                <select
                  value={input.fulfillmentMethod}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    fulfillmentMethod: e.target.value as CalculatorInput['fulfillmentMethod'] 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                >
                  {FULFILLMENT_METHODS.map(method => (
                    <option key={method.id} value={method.id}>
                      {method.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Shipping Region
                </label>
                <select
                  value={input.shippingRegion}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    shippingRegion: e.target.value as CalculatorInput['shippingRegion'] 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                >
                  {SHIPPING_REGIONS.map(region => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  STEP Level
                </label>
                <select
                  value={input.stepLevel}
                  onChange={(e) => setInput(prev => ({ 
                    ...prev, 
                    stepLevel: e.target.value as CalculatorInput['stepLevel'] 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                >
                  {STEP_LEVELS.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  GST % (on Amazon fees)
                </label>
                <input
                  type="number"
                  value={input.gstPercent}
                  onChange={(e) => setInput(prev => ({ ...prev, gstPercent: Number(e.target.value) }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-black mb-2">
                Additional Costs (₹) - Optional
              </label>
              <input
                type="number"
                value={input.additionalCosts || ''}
                onChange={(e) => setInput(prev => ({ ...prev, additionalCosts: Number(e.target.value) || 0 }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                placeholder="Packaging, marketing, etc."
                min="0"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCalculate}
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Calculating...' : 'Calculate Profit'}
            </button>
            <button
              onClick={handleCompareAllMethods}
              disabled={loading}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Compare All Methods
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && !comparisonMode && (
            <>
              {/* Profit Summary */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Profit Summary
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      ₹{result.netProfit.toLocaleString()}
                    </div>
                    <div className="text-blue-100">Net Profit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {result.profitMargin.toFixed(1)}%
                    </div>
                    <div className="text-blue-100">Profit Margin</div>
                  </div>
                </div>
              </div>

              {/* Fee Breakdown */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-black">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Fee Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-black">Selling Price</span>
                    <span className="font-semibold text-green-600">₹{input.sellingPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-black">Cost Price</span>
                    <span className="font-semibold text-red-600">-₹{input.costPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-black">Referral Fee ({((result.referralFee / input.sellingPrice) * 100).toFixed(1)}%)</span>
                      <InfoTooltip content="Commission fee charged by Amazon based on product category and selling price" />
                    </div>
                    <span className="font-semibold text-red-600">-₹{result.referralFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-black">Closing Fee</span>
                      <InfoTooltip content="Fixed fee charged per order based on product price range and fulfillment method" />
                    </div>
                    <span className="font-semibold text-red-600">-₹{result.closingFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-black">Shipping Fee</span>
                    <span className="font-semibold text-red-600">-₹{result.shippingFee.toLocaleString()}</span>
                  </div>
                  {result.pickPackFee > 0 && (
                    <div className="flex justify-between py-2">
                      <span className="text-black">Pick & Pack Fee</span>
                      <span className="font-semibold text-red-600">-₹{result.pickPackFee.toLocaleString()}</span>
                    </div>
                  )}
                  {result.storageFee > 0 && (
                    <div className="flex justify-between py-2">
                      <span className="text-black">Storage Fee (Monthly)</span>
                      <span className="font-semibold text-red-600">-₹{result.storageFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2">
                    <span className="text-black">GST on Fees ({input.gstPercent}%)</span>
                    <span className="font-semibold text-red-600">-₹{result.gstOnFees.toLocaleString()}</span>
                  </div>
                  {input.additionalCosts > 0 && (
                    <div className="flex justify-between py-2">
                      <span className="text-black">Additional Costs</span>
                      <span className="font-semibold text-red-600">-₹{input.additionalCosts.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-t border-gray-200 pt-2 font-semibold text-lg">
                    <span className="text-black">Net Profit</span>
                    <span className={result.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}>
                      ₹{result.netProfit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-black">Cost Breakdown</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {/* Comparison Results */}
          {comparisonMode && comparisonResults.length > 0 && (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-black">Fulfillment Method Comparison</h3>
                  <button
                    onClick={() => setComparisonMode(false)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Back to Single View
                  </button>
                </div>
                
                <div className="h-64 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="method" />
                      <YAxis />
                      <RechartsTooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                      <Bar dataKey="profit" fill="#3B82F6" name="Net Profit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {comparisonResults.map((result, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-center mb-2 text-black">
                        {FULFILLMENT_METHODS[index].shortName}
                      </h4>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">
                          ₹{result.netProfit.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.profitMargin.toFixed(1)}% margin
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Total Fees: ₹{(result.totalAmazonFees + result.gstOnFees).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
