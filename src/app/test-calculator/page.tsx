'use client';

import { useState } from 'react';
import { testCases, runCalculatorTests } from '../api/amazon-calculator/test';

interface TestResult {
  testCase: string;
  passed: boolean;
  result?: {
    referralFee: number;
    closingFee: number;
    shippingFee: number;
    totalAmazonFees: number;
    gstOnFees: number;
    netProfit: number;
    profitMargin: number;
  } | null;
  error?: string;
  expected: {
    referralFee?: number;
    closingFee?: number;
    netProfit?: number;
    profitMargin?: number;
  };
  checks: {
    referralFee?: boolean;
    closingFee?: boolean;
    netProfit?: boolean;
    profitMargin?: boolean;
  };
}

export default function TestCalculatorPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleRunTests = async () => {
    setLoading(true);
    try {
      const results = await runCalculatorTests();
      setTestResults(results);
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Amazon Calculator Test Suite</h1>
      
      <div className="mb-6">
        <button
          onClick={handleRunTests}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Running Tests...' : 'Run Calculator Tests'}
        </button>
      </div>

      {/* Test Cases Display */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Test Cases</h2>
        <div className="space-y-4">
          {testCases.map((testCase, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">{testCase.name}</h3>
              <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                <div>
                  <p><strong>Category:</strong> {testCase.input.categoryId}</p>
                  <p><strong>Subcategory:</strong> {testCase.input.subcategoryId}</p>
                  <p><strong>Selling Price:</strong> ₹{testCase.input.sellingPrice}</p>
                  <p><strong>Cost Price:</strong> ₹{testCase.input.costPrice}</p>
                </div>
                <div>
                  <p><strong>Weight:</strong> {testCase.input.packageWeight}g</p>
                  <p><strong>Fulfillment:</strong> {testCase.input.fulfillmentMethod}</p>
                  <p><strong>Region:</strong> {testCase.input.shippingRegion}</p>
                  <p><strong>STEP Level:</strong> {testCase.input.stepLevel}</p>
                </div>
              </div>
              {testCase.expectedApprox && (
                <div className="mt-2 text-sm text-gray-600">
                  <p><strong>Expected:</strong> 
                    {testCase.expectedApprox.referralFee && ` Referral: ₹${testCase.expectedApprox.referralFee}`}
                    {testCase.expectedApprox.closingFee && ` | Closing: ₹${testCase.expectedApprox.closingFee}`}
                    {testCase.expectedApprox.netProfit && ` | Profit: ₹${testCase.expectedApprox.netProfit}`}
                    {testCase.expectedApprox.profitMargin && ` | Margin: ${testCase.expectedApprox.profitMargin}%`}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Test Results */}
      {testResults.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Test Results</h2>
          <div className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                result.passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{result.testCase}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {result.passed ? 'PASSED' : 'FAILED'}
                  </span>
                </div>
                
                {result.error && (
                  <div className="text-red-600 text-sm mb-2">
                    <strong>Error:</strong> {result.error}
                  </div>
                )}
                
                {result.result && (
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Actual Results:</strong></p>
                      <p>Referral Fee: ₹{result.result.referralFee}</p>
                      <p>Closing Fee: ₹{result.result.closingFee}</p>
                      <p>Shipping Fee: ₹{result.result.shippingFee}</p>
                      <p>Total Amazon Fees: ₹{result.result.totalAmazonFees}</p>
                      <p>GST on Fees: ₹{result.result.gstOnFees}</p>
                      <p>Net Profit: ₹{result.result.netProfit}</p>
                      <p>Profit Margin: {result.result.profitMargin}%</p>
                    </div>
                    <div>
                      <p><strong>Expected vs Actual:</strong></p>
                      {result.expected.referralFee && (
                        <p className={result.checks.referralFee ? 'text-green-600' : 'text-red-600'}>
                          Referral: ₹{result.expected.referralFee} vs ₹{result.result.referralFee}
                        </p>
                      )}
                      {result.expected.closingFee && (
                        <p className={result.checks.closingFee ? 'text-green-600' : 'text-red-600'}>
                          Closing: ₹{result.expected.closingFee} vs ₹{result.result.closingFee}
                        </p>
                      )}
                      {result.expected.netProfit && (
                        <p className={result.checks.netProfit ? 'text-green-600' : 'text-red-600'}>
                          Profit: ₹{result.expected.netProfit} vs ₹{result.result.netProfit}
                        </p>
                      )}
                      {result.expected.profitMargin && (
                        <p className={result.checks.profitMargin ? 'text-green-600' : 'text-red-600'}>
                          Margin: {result.expected.profitMargin}% vs {result.result.profitMargin}%
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Test Summary</h3>
            <p>
              <span className="text-green-600 font-medium">
                {testResults.filter(r => r.passed).length} passed
              </span>
              {' | '}
              <span className="text-red-600 font-medium">
                {testResults.filter(r => !r.passed).length} failed
              </span>
              {' | '}
              <span className="font-medium">
                {testResults.length} total
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
