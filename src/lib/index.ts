// Content Protection System Exports

// Core utilities
export * from './content-protection';

// Hooks
export { useContentProtection, useElementProtection } from '@/hooks/useContentProtection';

// Components
export {
  withContentProtection,
  ProtectedContent,
  ProtectedText,
  ProtectedImage,
  Watermark,
  ProtectionToggle,
  ContentProtectionProvider as GlobalProtectionProvider
} from '@/components/ContentProtection';

// Context
export {
  ContentProtectionProvider,
  useContentProtectionContext
} from '@/contexts/ContentProtectionContext';

// Control Panel
export { default as ProtectionControlPanel } from '@/components/ProtectionControlPanel';
