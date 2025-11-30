'use client';

import { useState, useEffect } from 'react';
import NewYearOfferPopup from './NewYearOfferPopup';

export default function NewYearPopupManager() {
    const [showNewYearPopup, setShowNewYearPopup] = useState(false);
    const [hasShownOnce, setHasShownOnce] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in this session
        const sessionShown = sessionStorage.getItem('newYearPopupShown');
        if (sessionShown) {
            setHasShownOnce(true);
            return;
        }

        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setShowNewYearPopup(true);
            sessionStorage.setItem('newYearPopupShown', 'true');
            setHasShownOnce(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseNewYearPopup = () => {
        setShowNewYearPopup(false);
    };

    // Only show once per session
    if (hasShownOnce && !showNewYearPopup) {
        return null;
    }

    return (
        <NewYearOfferPopup
            isOpen={showNewYearPopup}
            onClose={handleCloseNewYearPopup}
        />
    );
}
