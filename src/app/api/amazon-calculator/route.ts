import { NextRequest, NextResponse } from 'next/server';
import { getReferralFeePercent, FC_CLOSING_FEE_EXCEPTIONS } from '@/lib/amazon-categories';

export interface CalculatorInput {
  categoryId: string;
  subcategoryId: string;
  sellingPrice: number;
  costPrice: number;
  packageWeight: number; // in grams
  packageDimensions: {
    length: number; // in cm
    width: number; // in cm
    height: number; // in cm
  };
  fulfillmentMethod: 'fba' | 'easy-ship' | 'self-ship' | 'seller-flex';
  shippingRegion: 'local' | 'regional' | 'national';
  stepLevel: 'basic' | 'standard' | 'advanced' | 'premium';
  gstPercent: number;
  additionalCosts?: number;
}

export interface CalculatorResult {
  referralFee: number;
  closingFee: number;
  shippingFee: number;
  pickPackFee: number;
  storageFee: number;
  otherFees: number;
  totalAmazonFees: number;
  gstOnFees: number;
  totalCost: number;
  netProfit: number;
  profitMargin: number;
  breakdown: {
    sellingPrice: number;
    costPrice: number;
    referralFee: number;
    closingFee: number;
    shippingFee: number;
    pickPackFee: number;
    gstOnFees: number;
    otherFees: number;
    additionalCosts: number;
  };
}

// Calculate referral fee
function calculateReferralFee(categoryId: string, subcategoryId: string, sellingPrice: number): number {
  const feePercent = getReferralFeePercent(categoryId, subcategoryId, sellingPrice);
  return (sellingPrice * feePercent) / 100;
}

// Calculate closing fee based on fulfillment method and price
function calculateClosingFee(
  fulfillmentMethod: string,
  sellingPrice: number,
  categoryId: string,
  subcategoryId: string
): number {
  switch (fulfillmentMethod) {
    case 'fba':
      return calculateFCClosingFee(sellingPrice, categoryId, subcategoryId);
    case 'easy-ship':
    case 'seller-flex':
      return calculateEasyShipClosingFee(sellingPrice);
    case 'self-ship':
      return calculateSelfShipClosingFee(sellingPrice);
    default:
      return 0;
  }
}

function calculateFCClosingFee(sellingPrice: number, categoryId: string, subcategoryId: string): number {
  const isException0To300 = FC_CLOSING_FEE_EXCEPTIONS.priceRange0To300.includes(subcategoryId);
  const isException301To500 = FC_CLOSING_FEE_EXCEPTIONS.priceRange301To500.includes(subcategoryId);

  if (sellingPrice <= 300) {
    return isException0To300 ? 12 : 26;
  } else if (sellingPrice <= 500) {
    return isException301To500 ? 12 : 21;
  } else if (sellingPrice <= 1000) {
    return 26;
  } else {
    // Check if it's in exception categories for above ₹1000
    const isExceptionAbove1000 = FC_CLOSING_FEE_EXCEPTIONS.priceRange0To300.includes(subcategoryId) ||
                                 FC_CLOSING_FEE_EXCEPTIONS.priceRange301To500.includes(subcategoryId);
    return isExceptionAbove1000 ? 71 : 51;
  }
}

function calculateEasyShipClosingFee(sellingPrice: number): number {
  if (sellingPrice <= 300) return 6;
  if (sellingPrice <= 500) return 11;
  if (sellingPrice <= 1000) return 34;
  return 65;
}

function calculateSelfShipClosingFee(sellingPrice: number): number {
  if (sellingPrice <= 300) return 45;
  if (sellingPrice <= 500) return 35;
  if (sellingPrice <= 1000) return 50;
  return 100;
}

// Calculate volumetric weight
function calculateVolumetricWeight(length: number, width: number, height: number): number {
  return (length * width * height) / 5000; // in kg
}

// Calculate shipping fee based on weight, dimensions, fulfillment method, region, and STEP level
function calculateShippingFee(
  packageWeight: number,
  dimensions: { length: number; width: number; height: number },
  fulfillmentMethod: string,
  shippingRegion: string,
  stepLevel: string
): number {
  if (fulfillmentMethod === 'self-ship') {
    return 0; // Seller bears the shipping cost
  }

  const actualWeight = packageWeight / 1000; // convert grams to kg
  const volumetricWeight = calculateVolumetricWeight(dimensions.length, dimensions.width, dimensions.height);
  const chargeableWeight = Math.max(actualWeight, volumetricWeight);

  // Check if it's heavy & bulky
  const isHeavyBulky = isHeavyAndBulky(packageWeight, dimensions);

  if (fulfillmentMethod === 'fba') {
    return calculateFBAShippingFee(chargeableWeight, shippingRegion, stepLevel, isHeavyBulky);
  } else if (fulfillmentMethod === 'easy-ship') {
    return calculateEasyShipShippingFee(chargeableWeight, stepLevel, isHeavyBulky);
  } else if (fulfillmentMethod === 'seller-flex') {
    return calculateSellerFlexShippingFee(chargeableWeight, shippingRegion, stepLevel, isHeavyBulky);
  }

  return 0;
}

function isHeavyAndBulky(packageWeight: number, dimensions: { length: number; width: number; height: number }): boolean {
  const weightKg = packageWeight / 1000;
  const maxDimension = Math.max(dimensions.length, dimensions.width, dimensions.height);
  const girth = dimensions.length + 2 * (dimensions.width + dimensions.height);

  return weightKg > 22.5 || maxDimension > 183 || girth > 300;
}

function calculateFBAShippingFee(weight: number, region: string, stepLevel: string, isHeavyBulky: boolean): number {
  if (isHeavyBulky) {
    return calculateFBAHeavyBulkyFee(weight, region, stepLevel);
  }

  const baseRates = getFBAStandardRates(stepLevel);
  let fee = 0;

  if (weight <= 0.5) {
    fee = region === 'local' ? baseRates.first500g.local : 
          region === 'regional' ? baseRates.first500g.regional : baseRates.first500g.national;
  } else if (weight <= 1) {
    fee = region === 'local' ? baseRates.upTo1kg.local : 
          region === 'regional' ? baseRates.upTo1kg.regional : baseRates.upTo1kg.national;
  } else if (weight <= 2) {
    fee = region === 'local' ? baseRates.upTo2kg.local : 
          region === 'regional' ? baseRates.upTo2kg.regional : baseRates.upTo2kg.national;
  } else {
    // Base fee for 2kg + additional charges
    fee = region === 'local' ? baseRates.upTo2kg.local : 
          region === 'regional' ? baseRates.upTo2kg.regional : baseRates.upTo2kg.national;
    
    const additionalWeight = weight - 2;
    if (weight <= 5) {
      fee += Math.ceil(additionalWeight) * (region === 'national' ? 34 : 24);
    } else {
      fee += 3 * (region === 'national' ? 34 : 24); // First 3kg after 2kg
      fee += Math.ceil(additionalWeight - 3) * (region === 'national' ? 18 : 13);
    }
  }

  return fee;
}

function getFBAStandardRates(stepLevel: string) {
  switch (stepLevel) {
    case 'premium':
    case 'advanced':
      return {
        first500g: { local: 37, regional: 37, national: 63 },
        upTo1kg: { local: 52, regional: 52, national: 83 },
        upTo2kg: { local: 76, regional: 76, national: 120 }
      };
    case 'standard':
      return {
        first500g: { local: 39, regional: 39, national: 65 },
        upTo1kg: { local: 54, regional: 54, national: 85 },
        upTo2kg: { local: 78, regional: 78, national: 122 }
      };
    case 'basic':
    default:
      return {
        first500g: { local: 42, regional: 42, national: 69 },
        upTo1kg: { local: 58, regional: 58, national: 89 },
        upTo2kg: { local: 82, regional: 82, national: 126 }
      };
  }
}

function calculateFBAHeavyBulkyFee(weight: number, region: string, stepLevel: string): number {
  const baseRates = getFBAHeavyBulkyRates(stepLevel);
  let fee = region === 'local' ? baseRates.first12kg.local : 
            region === 'regional' ? baseRates.first12kg.regional : baseRates.first12kg.national;

  if (weight > 12) {
    const additionalWeight = weight - 12;
    if (weight <= 25) {
      fee += Math.ceil(additionalWeight) * (region === 'local' ? 6 : region === 'regional' ? 10 : 18);
    } else {
      fee += 13 * (region === 'local' ? 6 : region === 'regional' ? 10 : 18); // 13kg (12-25)
      fee += Math.ceil(additionalWeight - 13) * (region === 'local' ? 5 : region === 'regional' ? 6 : 12);
    }
  }

  return fee;
}

function getFBAHeavyBulkyRates(stepLevel: string) {
  switch (stepLevel) {
    case 'premium':
    case 'advanced':
      return { first12kg: { local: 108, regional: 158, national: 298 } };
    case 'standard':
      return { first12kg: { local: 110, regional: 160, national: 300 } };
    case 'basic':
    default:
      return { first12kg: { local: 114, regional: 164, national: 304 } };
  }
}

function calculateEasyShipShippingFee(weight: number, stepLevel: string, isHeavyBulky: boolean): number {
  if (isHeavyBulky) {
    // Easy Ship doesn't handle heavy & bulky typically, but if it does, use flat rate
    return 200 + (weight > 12 ? Math.ceil(weight - 12) * 15 : 0);
  }

  const baseRates = getEasyShipRates(stepLevel);
  let fee = 0;

  if (weight <= 0.5) {
    fee = baseRates.first500g;
  } else if (weight <= 1) {
    fee = baseRates.upTo1kg;
  } else if (weight <= 2) {
    fee = baseRates.upTo2kg;
  } else {
    fee = baseRates.upTo2kg;
    const additionalWeight = weight - 2;
    if (weight <= 5) {
      fee += Math.ceil(additionalWeight) * 34;
    } else {
      fee += 3 * 34; // First 3kg after 2kg
      fee += Math.ceil(additionalWeight - 3) * 18;
    }
  }

  return fee;
}

function getEasyShipRates(stepLevel: string) {
  switch (stepLevel) {
    case 'premium':
    case 'advanced':
      return { first500g: 63, upTo1kg: 83, upTo2kg: 120 };
    case 'standard':
      return { first500g: 65, upTo1kg: 85, upTo2kg: 122 };
    case 'basic':
    default:
      return { first500g: 69, upTo1kg: 89, upTo2kg: 126 };
  }
}

function calculateSellerFlexShippingFee(weight: number, region: string, stepLevel: string, isHeavyBulky: boolean): number {
  // Technology fee for Seller Flex
  let fee = 14;

  if (isHeavyBulky) {
    const baseRates = getSellerFlexHeavyBulkyRates(stepLevel);
    fee += region === 'local' ? baseRates.first12kg.local : 
           region === 'regional' ? baseRates.first12kg.regional : baseRates.first12kg.national;

    if (weight > 12) {
      const additionalWeight = weight - 12;
      if (weight <= 25) {
        fee += Math.ceil(additionalWeight) * (region === 'local' ? 8 : region === 'regional' ? 12 : 18);
      } else {
        fee += 13 * (region === 'local' ? 8 : region === 'regional' ? 12 : 18);
        fee += Math.ceil(additionalWeight - 13) * (region === 'local' ? 5 : region === 'regional' ? 6 : 12);
      }
    }
  }

  return fee;
}

function getSellerFlexHeavyBulkyRates(stepLevel: string) {
  switch (stepLevel) {
    case 'premium':
    case 'advanced':
      return { first12kg: { local: 148, regional: 198, national: 298 } };
    case 'standard':
      return { first12kg: { local: 150, regional: 200, national: 300 } };
    case 'basic':
    default:
      return { first12kg: { local: 154, regional: 204, national: 304 } };
  }
}

// Calculate pick & pack fee (FBA only)
function calculatePickPackFee(fulfillmentMethod: string, packageWeight: number, dimensions: { length: number; width: number; height: number }): number {
  if (fulfillmentMethod !== 'fba') return 0;

  const weightKg = packageWeight / 1000;
  const isHeavyBulky = isHeavyAndBulky(packageWeight, dimensions);

  if (isHeavyBulky) {
    return 26 + (weightKg > 12 ? Math.ceil((weightKg - 12) / 5) * 5 : 0);
  } else {
    let fee = 17; // Base fee for up to 1kg
    if (weightKg > 1) {
      if (weightKg <= 5) {
        fee += Math.ceil(weightKg - 1) * 5;
      } else {
        fee += 4 * 5; // 4kg (1-5kg)
        fee += Math.ceil((weightKg - 5) / 5) * 2;
      }
    }
    return fee;
  }
}

// Calculate storage fee (FBA only) - simplified monthly calculation
function calculateStorageFee(fulfillmentMethod: string, dimensions: { length: number; width: number; height: number }): number {
  if (fulfillmentMethod !== 'fba') return 0;

  const volumeCubicFeet = (dimensions.length * dimensions.width * dimensions.height) / 28316.8; // Convert cm³ to cubic feet
  return volumeCubicFeet * 45; // ₹45 per cubic foot per month
}

export async function POST(request: NextRequest) {
  try {
    const input: CalculatorInput = await request.json();

    // Validate input
    if (!input.categoryId || !input.subcategoryId || !input.sellingPrice || !input.costPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate all fees
    const referralFee = calculateReferralFee(input.categoryId, input.subcategoryId, input.sellingPrice);
    const closingFee = calculateClosingFee(input.fulfillmentMethod, input.sellingPrice, input.categoryId, input.subcategoryId);
    const shippingFee = calculateShippingFee(
      input.packageWeight,
      input.packageDimensions,
      input.fulfillmentMethod,
      input.shippingRegion,
      input.stepLevel
    );
    const pickPackFee = calculatePickPackFee(input.fulfillmentMethod, input.packageWeight, input.packageDimensions);
    const storageFee = calculateStorageFee(input.fulfillmentMethod, input.packageDimensions);
    const otherFees = 0; // Can be extended for additional fees
    const additionalCosts = input.additionalCosts || 0;

    const totalAmazonFees = referralFee + closingFee + shippingFee + pickPackFee + storageFee + otherFees;
    const gstOnFees = (totalAmazonFees * input.gstPercent) / 100;
    const totalCost = input.costPrice + totalAmazonFees + gstOnFees + additionalCosts;
    const netProfit = input.sellingPrice - totalCost;
    const profitMargin = (netProfit / input.sellingPrice) * 100;

    const result: CalculatorResult = {
      referralFee: Math.round(referralFee * 100) / 100,
      closingFee: Math.round(closingFee * 100) / 100,
      shippingFee: Math.round(shippingFee * 100) / 100,
      pickPackFee: Math.round(pickPackFee * 100) / 100,
      storageFee: Math.round(storageFee * 100) / 100,
      otherFees: Math.round(otherFees * 100) / 100,
      totalAmazonFees: Math.round(totalAmazonFees * 100) / 100,
      gstOnFees: Math.round(gstOnFees * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      netProfit: Math.round(netProfit * 100) / 100,
      profitMargin: Math.round(profitMargin * 100) / 100,
      breakdown: {
        sellingPrice: input.sellingPrice,
        costPrice: input.costPrice,
        referralFee: Math.round(referralFee * 100) / 100,
        closingFee: Math.round(closingFee * 100) / 100,
        shippingFee: Math.round(shippingFee * 100) / 100,
        pickPackFee: Math.round(pickPackFee * 100) / 100,
        gstOnFees: Math.round(gstOnFees * 100) / 100,
        otherFees: Math.round(otherFees * 100) / 100,
        additionalCosts
      }
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Calculator API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
