'use client';

import { useEffect, useRef } from 'react';
import { 
  applyContentProtection, 
  ProtectionConfig, 
  DEFAULT_PROTECTION_CONFIG 
} from '@/lib/content-protection';

/**
 * React hook for content protection
 * Automatically applies and cleans up protection when component mounts/unmounts
 */
export const useContentProtection = (config?: ProtectionConfig) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  
  useEffect(() => {
    // Only apply protection on client side
    if (typeof window === 'undefined') return;
    
    const protectionConfig = { ...DEFAULT_PROTECTION_CONFIG, ...config };
    const cleanup = applyContentProtection(protectionConfig);
    cleanupRef.current = cleanup;
    
    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [config]);
  
  // Return cleanup function for manual control
  const removeProtection = () => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  };
  
  return { removeProtection };
};

/**
 * Hook for protecting specific elements
 */
export const useElementProtection = (
  elementRef: React.RefObject<HTMLElement>,
  config?: ProtectionConfig
) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return;
    
    const element = elementRef.current;
    const protectionConfig = { ...DEFAULT_PROTECTION_CONFIG, ...config };
    
    const cleanupFunctions: (() => void)[] = [];
    
    // Apply protection only to the specific element
    if (protectionConfig.disableRightClick) {
      const handleContextMenu = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      element.addEventListener('contextmenu', handleContextMenu);
      cleanupFunctions.push(() => {
        element.removeEventListener('contextmenu', handleContextMenu);
      });
    }
    
    if (protectionConfig.disableCopy) {
      const handleCopy = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      element.addEventListener('copy', handleCopy);
      cleanupFunctions.push(() => {
        element.removeEventListener('copy', handleCopy);
      });
    }
    
    if (protectionConfig.disableSelect) {
      const handleSelect = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      element.addEventListener('selectstart', handleSelect);
      element.addEventListener('mousedown', handleSelect);
      cleanupFunctions.push(() => {
        element.removeEventListener('selectstart', handleSelect);
        element.removeEventListener('mousedown', handleSelect);
      });
    }
    
    if (protectionConfig.disableDrag) {
      const handleDrag = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      element.addEventListener('dragstart', handleDrag);
      cleanupFunctions.push(() => {
        element.removeEventListener('dragstart', handleDrag);
      });
    }
    
    // Add CSS classes for additional protection
    element.classList.add('content-protected');
    
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
      element.classList.remove('content-protected');
    };
  }, [elementRef, config]);
};
