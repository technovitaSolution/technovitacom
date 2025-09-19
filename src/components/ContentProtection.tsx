'use client';

import React, { forwardRef, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useContentProtection, useElementProtection } from '@/hooks/useContentProtection';
import { ProtectionConfig, protectionStyles } from '@/lib/content-protection';

/**
 * Higher-Order Component for content protection
 */
export function withContentProtection<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  config?: ProtectionConfig
) {
  const WithContentProtection = (props: P) => {
    useContentProtection(config);
    
    return <WrappedComponent {...props} />;
  };
  
  WithContentProtection.displayName = `withContentProtection(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithContentProtection;
}

/**
 * Wrapper component for protecting specific content
 */
export const ProtectedContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    protectionConfig?: ProtectionConfig;
    children: React.ReactNode;
  }
>(({ protectionConfig, children, className = '', ...props }, ref) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const finalRef = (ref || elementRef) as React.RefObject<HTMLDivElement>;
  
  useElementProtection(finalRef, protectionConfig);
  
  return (
    <div
      ref={finalRef}
      className={`content-protected ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

ProtectedContent.displayName = 'ProtectedContent';

/**
 * Global protection provider component
 */
export const ContentProtectionProvider: React.FC<{
  children: React.ReactNode;
  config?: ProtectionConfig;
  enableGlobalProtection?: boolean;
}> = ({ children, config, enableGlobalProtection = true }) => {
  useContentProtection(
    enableGlobalProtection ? config : undefined
  );
  
  useEffect(() => {
    // Inject protection styles
    if (typeof window !== 'undefined') {
      const styleId = 'content-protection-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = protectionStyles;
        document.head.appendChild(style);
      }
    }
  }, []);
  
  return <>{children}</>;
};

/**
 * Watermark component
 */
export const Watermark: React.FC<{
  text?: string;
  className?: string;
}> = ({ text = '© Technovita Solutions', className = '' }) => {
  return (
    <div className={`watermark ${className}`}>
      <div className="watermark-text">{text}</div>
    </div>
  );
};

/**
 * Protected Image component
 */
export const ProtectedImage = forwardRef<
  HTMLImageElement,
  React.ComponentProps<typeof Image> & {
    protectionConfig?: ProtectionConfig;
  }
>(({ protectionConfig, className = '', alt = "Protected content", ...props }, ref) => {
  const elementRef = useRef<HTMLImageElement>(null);
  const finalRef = (ref || elementRef) as React.RefObject<HTMLImageElement>;
  
  useElementProtection(finalRef, protectionConfig);
  
  return (
    <Image
      ref={finalRef}
      className={`content-protected ${className}`}
      draggable={false}
      alt={alt}
      {...props}
    />
  );
});

ProtectedImage.displayName = 'ProtectedImage';

/**
 * Protected Text component
 */
export const ProtectedText = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    protectionConfig?: ProtectionConfig;
    children: React.ReactNode;
  }
>(({ protectionConfig, children, className = '', ...props }, ref) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const finalRef = (ref || elementRef) as React.RefObject<HTMLDivElement>;
  
  useElementProtection(finalRef, protectionConfig);
  
  return (
    <div
      ref={finalRef}
      className={`content-protected ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

ProtectedText.displayName = 'ProtectedText';

/**
 * Protection Toggle component
 */
export const ProtectionToggle: React.FC<{
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
  className?: string;
}> = ({ isEnabled, onToggle, className = '' }) => {
  return (
    <div className={`protection-toggle ${className}`}>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={(e) => onToggle(e.target.checked)}
          className="form-checkbox h-4 w-4 text-blue-600"
        />
        <span className="text-sm font-medium">
          {isEnabled ? 'Protection Enabled' : 'Protection Disabled'}
        </span>
      </label>
    </div>
  );
};
