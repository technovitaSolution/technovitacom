'use client';

import React, { useState } from 'react';
import { FormData, FormStep } from '@/types/form';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobileNumber: '',
    businessName: '',
    businessType: '',
    businessDescription: '',
    interestedPlatforms: [],
    monthlyRevenue: '',
    currentChallenges: '',
  });

  const steps: FormStep[] = [
    { id: 1, title: 'Personal Details', description: 'Let\'s start with your information', isCompleted: currentStep > 1, isActive: currentStep === 1 },
    { id: 2, title: 'Contact Information', description: 'How can we reach you?', isCompleted: currentStep > 2, isActive: currentStep === 2 },
    { id: 3, title: 'Business Profile', description: 'Tell us about your business', isCompleted: currentStep > 3, isActive: currentStep === 3 },
    { id: 4, title: 'Growth Goals', description: 'What are your business objectives?', isCompleted: currentStep > 4, isActive: currentStep === 4 },
  ];

  const platforms = ['Amazon', 'Flipkart', 'Walmart', 'Myntra', 'Ajio', 'Nykaa', 'Meesho', 'Shopee', 'eBay'];

  const businessTypes = [
    'Manufacturer',
    'Wholesaler',
    'Retailer',
    'Brand Owner',
    'Service Provider',
    'Startup',
    'Other'
  ];

  const revenueRanges = [
    'Just Starting (₹0)',
    '₹1L - ₹5L per month',
    '₹5L - ₹25L per month',
    '₹25L - ₹1Cr per month',
    '₹1Cr+ per month'
  ];

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      interestedPlatforms: prev.interestedPlatforms.includes(platform)
        ? prev.interestedPlatforms.filter(p => p !== platform)
        : [...prev.interestedPlatforms, platform]
    }));
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim().length > 0;
      case 2:
        return formData.mobileNumber.trim().length >= 10;
      case 3:
        return formData.businessName.trim().length > 0 && formData.businessType.trim().length > 0;
      case 4:
        return formData.interestedPlatforms.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedToNext() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceedToNext()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setCurrentStep(1);
          setFormData({
            fullName: '',
            mobileNumber: '',
            businessName: '',
            businessType: '',
            businessDescription: '',
            interestedPlatforms: [],
            monthlyRevenue: '',
            currentChallenges: '',
          });
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="bg-gray-50 py-16 lg:py-24" id="seller-application">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-600 mb-6">
              Your information has been submitted successfully. Our expert team will contact you within 24 hours with your personalized business growth strategy.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 font-medium">What happens next?</p>
              <ul className="text-green-700 text-sm mt-2 space-y-1 text-left">
                <li>• Our experts will analyze your business profile</li>
                <li>• We'll contact you within 24 hours</li>
                <li>• Receive your customized growth strategy</li>
                <li>• Get actionable steps to scale your business</li>
              </ul>
            </div>
            <div className="text-sm text-gray-500">
              <span>Form will reset automatically in a few seconds...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="seller-application">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="text-center">
              <div className="text-pink-500 text-sm font-bold uppercase tracking-wide mb-2">
                FREE EXPERT CONSULTATION
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Your Personalized Business Growth Strategy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Share your business details and receive a customized growth plan from our e-commerce experts - completely free!
              </p>
            </div>

            
            {/* Progress Steps */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      step.isCompleted 
                        ? 'bg-green-500 text-white' 
                        : step.isActive 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.isCompleted ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        step.id
                      )}
                    </div>
                    {/* Step label for desktop */}
                    <div className="hidden md:block ml-3 text-left">
                      <div className={`text-sm font-medium ${step.isActive ? 'text-pink-500' : step.isCompleted ? 'text-green-500' : 'text-gray-500'}`}>
                        Step {step.id}
                      </div>
                      <div className="text-xs text-gray-400 max-w-20">
                        {step.title.split(' ').slice(0, 2).join(' ')}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 w-12 ${step.isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {steps[currentStep - 1].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {steps[currentStep - 1].description}
              </p>
            </div>

            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="max-w-md mx-auto">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors text-lg text-gray-900 placeholder:text-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {currentStep === 2 && (
              <div className="max-w-md mx-auto">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors text-lg text-gray-900 placeholder:text-gray-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Business Info */}
            {currentStep === 3 && (
              <div className="max-w-lg mx-auto space-y-6">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors text-lg text-gray-900 placeholder:text-gray-500"
                    placeholder="Enter your business name"
                  />
                </div>
                
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className={`w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors text-lg ${
                      formData.businessType ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    <option value="" disabled className="text-gray-500">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Business Description
                  </label>
                  <textarea
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                    rows={4}
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors resize-none text-lg text-gray-900 placeholder:text-gray-500"
                    placeholder="Briefly describe your business and products"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Platform Interest */}
            {currentStep === 4 && (
                              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-4 text-center">
                    Which platforms would you like to explore for growth? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {platforms.map((platform) => (
                      <button
                        key={platform}
                        type="button"
                        onClick={() => handlePlatformToggle(platform)}
                        className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.interestedPlatforms.includes(platform)
                            ? 'bg-pink-500 text-white border-pink-500 transform scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:text-pink-500'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="max-w-lg mx-auto">
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Current Monthly Revenue
                  </label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    className={`w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors text-lg ${
                      formData.monthlyRevenue ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    <option value="" disabled className="text-gray-500">Select revenue range</option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="max-w-lg mx-auto">
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Business Challenges & Goals
                  </label>
                  <textarea
                    value={formData.currentChallenges}
                    onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                    rows={4}
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors resize-none text-lg text-gray-900 placeholder:text-gray-500"
                    placeholder="What are your main business challenges or growth goals?"
                  />
                </div>
              </div>
            )}
        </div>

          {/* Footer */}
          <div className="p-8 border-t bg-gray-50 flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ← Back
            </button>

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceedToNext()}
                className={`px-10 py-4 rounded-lg font-semibold text-lg transition-all ${
                  canProceedToNext()
                    ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceedToNext() || isSubmitting}
                className={`px-10 py-4 rounded-lg font-semibold text-lg transition-all ${
                  canProceedToNext() && !isSubmitting
                    ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get My Free Strategy'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;