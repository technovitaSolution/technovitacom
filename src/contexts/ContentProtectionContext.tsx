'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProtectionConfig, DEFAULT_PROTECTION_CONFIG } from '@/lib/content-protection';
import { useContentProtection } from '@/hooks/useContentProtection';

interface ContentProtectionContextType {
  isEnabled: boolean;
  config: ProtectionConfig;
  enableProtection: () => void;
  disableProtection: () => void;
  updateConfig: (newConfig: Partial<ProtectionConfig>) => void;
  toggleProtection: () => void;
}

const ContentProtectionContext = createContext<ContentProtectionContextType | undefined>(undefined);

export const useContentProtectionContext = () => {
  const context = useContext(ContentProtectionContext);
  if (!context) {
    throw new Error('useContentProtectionContext must be used within a ContentProtectionProvider');
  }
  return context;
};

interface ContentProtectionProviderProps {
  children: ReactNode;
  initialConfig?: ProtectionConfig;
  defaultEnabled?: boolean;
}

export const ContentProtectionProvider: React.FC<ContentProtectionProviderProps> = ({
  children,
  initialConfig = DEFAULT_PROTECTION_CONFIG,
  defaultEnabled = true,
}) => {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled);
  const [config, setConfig] = useState<ProtectionConfig>(initialConfig);
  
  // Apply protection based on enabled state
  const { removeProtection } = useContentProtection(isEnabled ? config : undefined);
  
  const enableProtection = () => {
    setIsEnabled(true);
  };
  
  const disableProtection = () => {
    setIsEnabled(false);
    removeProtection();
  };
  
  const toggleProtection = () => {
    if (isEnabled) {
      disableProtection();
    } else {
      enableProtection();
    }
  };
  
  const updateConfig = (newConfig: Partial<ProtectionConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };
  
  // Persist protection state to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('content-protection-enabled', JSON.stringify(isEnabled));
      localStorage.setItem('content-protection-config', JSON.stringify(config));
    }
  }, [isEnabled, config]);
  
  // Load protection state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEnabled = localStorage.getItem('content-protection-enabled');
      const savedConfig = localStorage.getItem('content-protection-config');
      
      if (savedEnabled !== null) {
        setIsEnabled(JSON.parse(savedEnabled));
      }
      
      if (savedConfig !== null) {
        setConfig(JSON.parse(savedConfig));
      }
    }
  }, []);
  
  const value: ContentProtectionContextType = {
    isEnabled,
    config,
    enableProtection,
    disableProtection,
    updateConfig,
    toggleProtection,
  };
  
  return (
    <ContentProtectionContext.Provider value={value}>
      {children}
    </ContentProtectionContext.Provider>
  );
};
