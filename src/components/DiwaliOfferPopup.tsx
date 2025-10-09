'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle, Gift, Flame } from 'lucide-react';

interface DiwaliOfferPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiwaliOfferPopup({ 
  isOpen, 
  onClose
}: DiwaliOfferPopupProps) {
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
      const response = await fetch('/api/diwali-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          offer: 'Free Ajio Onboarding with Myntra Seller Onboarding - Diwali Special',
          source: 'Diwali Offer Popup'
        }),
      });

      if (response.ok) {
        // Save to localStorage for future auto-fill
        localStorage.setItem('userName', formData.name);
        localStorage.setItem('userMobile', formData.mobile);
        
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowExitConfirm(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
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
      {/* Backdrop with animated diyas */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
        onClick={handleBackdropClick}
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 153, 0, 0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 51, 0, 0.15), transparent 40%), rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Popup Container - Wider design */}
        <div className="relative w-full max-w-4xl">
          {/* Animated Diya flames */}
          <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-10">
            <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 animate-pulse" />
            <Flame className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>

          <div className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 sm:border-4 border-orange-300 animate-in zoom-in-95 duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 text-6xl">🪔</div>
              <div className="absolute top-4 right-4 text-6xl">🪔</div>
              <div className="absolute bottom-4 left-8 text-5xl">✨</div>
              <div className="absolute bottom-4 right-8 text-5xl">✨</div>
            </div>

            {/* Animated sparkles border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 opacity-20 animate-pulse"></div>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all transform hover:scale-110 cursor-pointer"
              type="button"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>

            {/* Content - Horizontal Layout */}
            <div className="relative z-10">
              {!isSubmitted ? (
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Left Side - Content */}
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                    {/* Festival Badge */}
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 rounded-full p-3 shadow-2xl">
                          <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-white animate-bounce" />
                        </div>
                      </div>
                    </div>

                    {/* Special Diwali Title */}
                    <div className="text-center md:text-left mb-4">
                      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 bg-clip-text text-transparent mb-2 animate-pulse">
                        🪔 दिवाली की शुभकामनाएं 🪔
                      </div>
                      <div className="text-xs sm:text-sm text-orange-800 font-semibold mb-3">
                        Happy Diwali Special Offer!
                      </div>
                    </div>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight text-center md:text-left">
                      🎁 Get <span className="text-orange-600">FREE Ajio Onboarding</span> with <span className="text-red-600">Myntra Seller Onboarding!</span>
                    </h2>
                    
                    <div className="flex justify-center md:justify-start mb-4">
                      <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg animate-pulse">
                        🔥 Limited Time Diwali Offer 🔥
                      </div>
                    </div>

                    {/* Benefits - Compact */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-800 font-medium">Complete Ajio Seller Registration - FREE! 🎉</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-800 font-medium">Complete Myntra Seller Onboarding - Included! ✨</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-800 font-medium">Expert Guidance & Full Support 🚀</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-800 font-medium">Start Selling in 7-10 Days 💰</span>
                      </div>
                    </div>

                    {/* Urgency Badge */}
                    <div className="flex justify-center md:justify-start">
                      <div className="inline-flex items-center space-x-2 bg-red-100 border-2 border-red-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 animate-pulse">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                        <span className="text-red-700 font-bold text-xs sm:text-sm">
                          ⏰ Only 50 Spots Left!
                        </span>
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-l-none md:rounded-r-3xl border-l-4 border-orange-400">
                    <h3 className="text-center text-lg sm:text-xl font-bold text-gray-900 mb-4">
                      Claim Your Offer Now! 🎁
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Your Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all placeholder-gray-500 text-gray-900 bg-white shadow-sm text-sm sm:text-base"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Mobile Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all placeholder-gray-500 text-gray-900 bg-white shadow-sm text-sm sm:text-base"
                          placeholder="Enter your 10-digit mobile number"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl hover:from-orange-700 hover:via-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl text-sm sm:text-base relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                        <span className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <span>Claiming Your Offer...</span>
                          ) : (
                            <span>🪔 Claim FREE Diwali Offer! 🎁</span>
                          )}
                        </span>
                      </button>

                      <p className="text-center text-xs text-gray-600">
                        🔒 100% Secure. No spam, guaranteed!
                      </p>
                    </form>

                    {/* Trust Badge */}
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center space-x-2 text-xs text-gray-700">
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold border-2 border-white text-xs">T</div>
                          <div className="w-6 h-6 rounded-full bg-red-400 flex items-center justify-center text-white font-bold border-2 border-white text-xs">E</div>
                          <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold border-2 border-white text-xs">C</div>
                        </div>
                        <span className="font-semibold">500+ Happy Sellers</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-8 px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-2xl animate-bounce">
                    <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <div className="text-4xl mb-4">🎉 🪔 ✨</div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                    Congratulations!
                  </h3>
                  <p className="text-gray-800 text-base sm:text-lg font-semibold mb-2">
                    Your Diwali Offer has been claimed successfully! 🎁
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                    Our team will contact you within 2 hours to start your onboarding journey on Ajio & Myntra.
                  </p>
                  <div className="mt-6 text-3xl">
                    शुभ दिवाली! 🪔
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom decorative diyas */}
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-6">
            <div className="text-2xl sm:text-4xl animate-pulse">🪔</div>
            <div className="text-2xl sm:text-4xl animate-pulse" style={{ animationDelay: '0.3s' }}>🪔</div>
            <div className="text-2xl sm:text-4xl animate-pulse" style={{ animationDelay: '0.6s' }}>🪔</div>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 max-w-md mx-auto text-center animate-in zoom-in-95 duration-300 border-2 sm:border-4 border-orange-300 shadow-2xl">
            <div className="text-5xl sm:text-6xl mb-4 animate-bounce">⚠️</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Wait! Don't Miss This Diwali Dhamaka! 🪔
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
              This exclusive Diwali offer won't last forever! Join 500+ sellers who are already growing their business on Ajio & Myntra. Are you sure you want to miss out on FREE Ajio onboarding?
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleStay}
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-xl text-sm sm:text-base font-bold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                🎁 Claim My Offer!
              </button>
              <button
                onClick={handleConfirmClose}
                className="flex-1 bg-gray-300 text-gray-800 py-3 px-6 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-400 transition-colors"
              >
                No, I'll Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

