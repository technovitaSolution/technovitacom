'use client';

import { useState, useEffect } from 'react';
import { X, Gift, CheckCircle } from 'lucide-react';

interface AmazonFlipkartComboPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onExitIntent: () => void;
}

export default function AmazonFlipkartComboPopup({ 
  isOpen, 
  onClose
}: AmazonFlipkartComboPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Auto-fill saved data from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedMobile = localStorage.getItem('userMobile');
    
    if (savedName || savedMobile) {
      setFormData({
        name: savedName || '',
        mobile: savedMobile || ''
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', {
        name: formData.name,
        mobile: formData.mobile,
        offer: 'Myntra + Ajio Combo Onboarding - Get Ajio Onboarding FREE with Myntra Onboarding',
        source: 'Amazon Calculator Popup 2'
      });

      const response = await fetch('/api/nykaa-popup-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          offer: 'Myntra + Ajio Combo Onboarding - Get Ajio Onboarding FREE with Myntra Onboarding',
          source: 'Amazon Calculator Popup 2'
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);
        
        // Save to localStorage for future auto-fill
        localStorage.setItem('userName', formData.name);
        localStorage.setItem('userMobile', formData.mobile);
        
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      const message = error instanceof Error ? error.message : String(error);
      alert(`Something went wrong. Please try again. Error: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    console.log('Close button clicked');
    setShowExitConfirm(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Backdrop clicked');
      setShowExitConfirm(true);
    }
  };

  const handleConfirmClose = () => {
    setShowExitConfirm(false);
    onClose();
  };

  const handleStay = () => {
    setShowExitConfirm(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={handleBackdropClick}
      >
        {/* Popup Container */}
        <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-yellow-50 to-orange-50 opacity-50"></div>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors cursor-pointer"
            type="button"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6 lg:p-8 pt-8 sm:pt-10 lg:pt-12">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-3 sm:mb-4">
                    <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    🔥 Get Ajio Onboarding FREE with Myntra Onboarding!
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Double your selling power. Start on Myntra & Ajio today for FREE—this exclusive combo won't last long!
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Complete Myntra seller onboarding</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">FREE Ajio seller onboarding (worth ₹5,000)</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Dual platform selling strategy</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-500 text-gray-900"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-500 text-gray-900"
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Claiming...' : 'Claim My Free Ajio Onboarding'}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🎉 Congratulations!
                </h3>
                <p className="text-gray-600 text-sm">
                  Your Myntra + Ajio combo offer has been claimed. 
                  Our team will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto text-center animate-in zoom-in-95 duration-300">
            <div className="text-4xl mb-4">😮</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Don't Miss This Opportunity!
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Closing this means losing your FREE Ajio onboarding with Myntra onboarding… This opportunity doesn't come twice!
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleStay}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-colors"
              >
                Claim Free Ajio
              </button>
              <button
                onClick={handleConfirmClose}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Leave Anyway
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
