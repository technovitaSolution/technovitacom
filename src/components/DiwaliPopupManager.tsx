'use client';

import { useState, useEffect } from 'react';
import DiwaliOfferPopup from './DiwaliOfferPopup';

export default function DiwaliPopupManager() {
  const [showDiwaliPopup, setShowDiwaliPopup] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const sessionShown = sessionStorage.getItem('diwaliPopupShown');
    if (sessionShown) {
      setHasShownOnce(true);
      return;
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowDiwaliPopup(true);
      sessionStorage.setItem('diwaliPopupShown', 'true');
      setHasShownOnce(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseDiwaliPopup = () => {
    setShowDiwaliPopup(false);
  };

  // Only show once per session
  if (hasShownOnce && !showDiwaliPopup) {
    return null;
  }

  return (
    <DiwaliOfferPopup
      isOpen={showDiwaliPopup}
      onClose={handleCloseDiwaliPopup}
    />
  );
}

