'use client';

import { useState, useEffect } from 'react';
import NykaaAccountManagementPopup from './NykaaAccountManagementPopup';
import AjioMyntraComboPopup from './AjioMyntraComboPopup';
import AmazonAccountManagementPopup from './AmazonAccountManagementPopup';
import AmazonFlipkartComboPopup from './AmazonFlipkartComboPopup';

export default function PopupManager() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  // Detect current page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/nykaa-seller-calculator')) {
        setCurrentPage('nykaa');
      } else if (path.includes('/amazon-profit-calculator') || 
                 path.includes('/amazon-fba-calculator') || 
                 path.includes('/amazon-revenue-calculator')) {
        setCurrentPage('amazon');
      }
    }
  }, []);

  // Popup 1 timing (5 seconds)
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowPopup1(true);
    }, 5000);

    return () => clearTimeout(timer1);
  }, []);

  // Popup 2 timing (35 seconds)
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowPopup2(true);
    }, 35000);

    return () => clearTimeout(timer2);
  }, []);

  const handleClosePopup1 = () => {
    setShowPopup1(false);
  };

  const handleClosePopup2 = () => {
    setShowPopup2(false);
  };

  return (
    <>
      {/* Nykaa Calculator Popups */}
      {currentPage === 'nykaa' && (
        <>
          <NykaaAccountManagementPopup
            isOpen={showPopup1}
            onClose={handleClosePopup1}
            onExitIntent={() => {}}
          />
          <AjioMyntraComboPopup
            isOpen={showPopup2}
            onClose={handleClosePopup2}
            onExitIntent={() => {}}
          />
        </>
      )}
      
      {/* Amazon Calculator Popups */}
      {currentPage === 'amazon' && (
        <>
          <AmazonAccountManagementPopup
            isOpen={showPopup1}
            onClose={handleClosePopup1}
            onExitIntent={() => {}}
          />
          <AmazonFlipkartComboPopup
            isOpen={showPopup2}
            onClose={handleClosePopup2}
            onExitIntent={() => {}}
          />
        </>
      )}
    </>
  );
}
