// Test file for Amazon Calculator API
// This can be used to verify calculations against known examples

import type { CalculatorInput, CalculatorResult } from './route';

export const testCases: Array<{
  name: string;
  input: CalculatorInput;
  expectedApprox: Partial<CalculatorResult>;
}> = [
  {
    name: "Men's T-Shirt Example from prompt.md",
    input: {
      categoryId: 'clothing-fashion',
      subcategoryId: 'apparel-tshirts',
      sellingPrice: 699,
      costPrice: 300,
      packageWeight: 600,
      packageDimensions: {
        length: 30,
        width: 20,
        height: 4
      },
      fulfillmentMethod: 'fba',
      shippingRegion: 'local',
      stepLevel: 'basic',
      gstPercent: 18,
      additionalCosts: 0
    },
    expectedApprox: {
      referralFee: 118.83, // 17% of 699
      closingFee: 26,
      netProfit: 158,
      profitMargin: 22.6
    }
  },
  {
    name: "Book Example - Low Price Range",
    input: {
      categoryId: 'books-media',
      subcategoryId: 'books',
      sellingPrice: 450,
      costPrice: 200,
      packageWeight: 400,
      packageDimensions: {
        length: 25,
        width: 18,
        height: 3
      },
      fulfillmentMethod: 'fba',
      shippingRegion: 'regional',
      stepLevel: 'standard',
      gstPercent: 18,
      additionalCosts: 0
    },
    expectedApprox: {
      referralFee: 20.25, // 4.5% of 450
      closingFee: 12, // Books exception category
    }
  },
  {
    name: "Mobile Phone - High Value",
    input: {
      categoryId: 'electronics',
      subcategoryId: 'mobile-phones',
      sellingPrice: 25000,
      costPrice: 20000,
      packageWeight: 800,
      packageDimensions: {
        length: 20,
        width: 15,
        height: 8
      },
      fulfillmentMethod: 'fba',
      shippingRegion: 'national',
      stepLevel: 'premium',
      gstPercent: 18,
      additionalCosts: 500
    },
    expectedApprox: {
      referralFee: 1250, // 5% of 25000
      closingFee: 51,
    }
  },
  {
    name: "Easy Ship vs FBA Comparison",
    input: {
      categoryId: 'home-kitchen',
      subcategoryId: 'small-appliances',
      sellingPrice: 2500,
      costPrice: 1500,
      packageWeight: 2000,
      packageDimensions: {
        length: 35,
        width: 25,
        height: 15
      },
      fulfillmentMethod: 'easy-ship',
      shippingRegion: 'regional',
      stepLevel: 'standard',
      gstPercent: 18,
      additionalCosts: 0
    },
    expectedApprox: {
      referralFee: 112.5, // 4.5% of 2500 (for price range 1001-5000)
      closingFee: 65, // Easy Ship closing fee for >1000
    }
  }
];

// Function to test the calculator API
export async function runCalculatorTests() {
  const results = [];
  
  for (const testCase of testCases) {
    try {
      const response = await fetch('/api/amazon-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testCase.input),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: CalculatorResult = await response.json();
      
      // Compare with expected values (with tolerance for rounding)
      const tolerance = 0.1;
      const checks = {
        referralFee: testCase.expectedApprox.referralFee 
          ? Math.abs(result.referralFee - testCase.expectedApprox.referralFee) < tolerance
          : true,
        closingFee: testCase.expectedApprox.closingFee
          ? Math.abs(result.closingFee - testCase.expectedApprox.closingFee) < tolerance
          : true,
        netProfit: testCase.expectedApprox.netProfit
          ? Math.abs(result.netProfit - testCase.expectedApprox.netProfit) < 10 // Allow ±10 for net profit
          : true,
        profitMargin: testCase.expectedApprox.profitMargin
          ? Math.abs(result.profitMargin - testCase.expectedApprox.profitMargin) < 1 // Allow ±1% for margin
          : true
      };
      
      results.push({
        testCase: testCase.name,
        passed: Object.values(checks).every(check => check),
        result,
        expected: testCase.expectedApprox,
        checks
      });
      
    } catch (error) {
      results.push({
        testCase: testCase.name,
        passed: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        result: null,
        expected: testCase.expectedApprox,
        checks: {}
      });
    }
  }
  
  return results;
}

// Console test runner (for development)
if (typeof window !== 'undefined') {
  (window as unknown as { testCalculator: () => Promise<unknown[]> }).testCalculator = runCalculatorTests;
  console.log('Calculator tests loaded. Run testCalculator() in console to test.');
}
