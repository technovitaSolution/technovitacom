/**
 * Content Protection Utilities
 * Comprehensive system to prevent content theft and unauthorized copying
 */

export interface ProtectionConfig {
  disableRightClick?: boolean;
  disableCopy?: boolean;
  disableCut?: boolean;
  disablePaste?: boolean;
  disableSelect?: boolean;
  disableDrag?: boolean;
  disableContextMenu?: boolean;
  disableKeyboardShortcuts?: boolean;
  disablePrintScreen?: boolean;
  disableDevTools?: boolean;
  watermark?: boolean;
  watermarkText?: string;
  blurOnInspect?: boolean;
  disableScreenshot?: boolean;
}

export const DEFAULT_PROTECTION_CONFIG: ProtectionConfig = {
  disableRightClick: true,
  disableCopy: true,
  disableCut: true,
  disablePaste: true,
  disableSelect: true,
  disableDrag: true,
  disableContextMenu: true,
  disableKeyboardShortcuts: true,
  disablePrintScreen: true,
  disableDevTools: false, // Can be resource intensive
  watermark: true,
  watermarkText: '© Technovita Solutions',
  blurOnInspect: true,
  disableScreenshot: true,
};

/**
 * Prevents right-click context menu
 */
export const preventRightClick = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Prevents copy operations
 */
export const preventCopy = (e: ClipboardEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Prevents cut operations
 */
export const preventCut = (e: ClipboardEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Prevents paste operations
 */
export const preventPaste = (e: ClipboardEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Prevents text selection
 */
export const preventSelect = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Prevents drag operations
 */
export const preventDrag = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Prevents keyboard shortcuts
 */
export const preventKeyboardShortcuts = (e: KeyboardEvent) => {
  const key = e.key.toLowerCase();
  const ctrl = e.ctrlKey || e.metaKey;
  
  // Prevent common copy/paste shortcuts
  if (ctrl && (key === 'c' || key === 'v' || key === 'x' || key === 'a' || key === 's')) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
  // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (ctrl && e.shiftKey && (key === 'i' || key === 'j')) ||
    (ctrl && key === 'u')
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
  // Prevent print screen
  if (e.key === 'PrintScreen' || (e.key === 'p' && ctrl)) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

/**
 * Detects and prevents DevTools opening
 */
export const detectDevTools = () => {
  const threshold = 160;
  
  const checkDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      document.body.style.display = 'none';
      setTimeout(() => {
        document.body.style.display = 'block';
      }, 100);
    }
  };
  
  window.addEventListener('resize', checkDevTools);
  setInterval(checkDevTools, 1000);
};

/**
 * Creates a watermark overlay
 */
export const createWatermark = (text: string = '© Technovita Solutions') => {
  const watermark = document.createElement('div');
  watermark.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `;
  
  const watermarkText = document.createElement('div');
  watermarkText.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 24px;
    color: rgba(0, 0, 0, 0.1);
    font-weight: bold;
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
  `;
  watermarkText.textContent = text;
  
  watermark.appendChild(watermarkText);
  return watermark;
};

/**
 * Applies blur effect when inspecting elements
 */
export const applyBlurOnInspect = () => {
  let isInspecting = false;
  
  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 2) { // Right click
      isInspecting = true;
      document.body.style.filter = 'blur(5px)';
    }
  };
  
  const handleMouseUp = () => {
    if (isInspecting) {
      setTimeout(() => {
        document.body.style.filter = 'none';
        isInspecting = false;
      }, 100);
    }
  };
  
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  
  return () => {
    document.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mouseup', handleMouseUp);
  };
};

/**
 * Disables screenshot attempts
 */
export const disableScreenshot = () => {
  // Disable print screen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      return false;
    }
  });
  
  // Disable screen capture via media queries
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      * { display: none !important; }
    }
  `;
  document.head.appendChild(style);
};

/**
 * Main function to apply all protection methods
 */
export const applyContentProtection = (config: ProtectionConfig = DEFAULT_PROTECTION_CONFIG) => {
  const cleanupFunctions: (() => void)[] = [];
  
  if (config.disableRightClick) {
    document.addEventListener('contextmenu', preventRightClick);
    cleanupFunctions.push(() => {
      document.removeEventListener('contextmenu', preventRightClick);
    });
  }
  
  if (config.disableCopy) {
    document.addEventListener('copy', preventCopy);
    cleanupFunctions.push(() => {
      document.removeEventListener('copy', preventCopy);
    });
  }
  
  if (config.disableCut) {
    document.addEventListener('cut', preventCut);
    cleanupFunctions.push(() => {
      document.removeEventListener('cut', preventCut);
    });
  }
  
  if (config.disablePaste) {
    document.addEventListener('paste', preventPaste);
    cleanupFunctions.push(() => {
      document.removeEventListener('paste', preventPaste);
    });
  }
  
  if (config.disableSelect) {
    document.addEventListener('selectstart', preventSelect);
    document.addEventListener('mousedown', preventSelect);
    cleanupFunctions.push(() => {
      document.removeEventListener('selectstart', preventSelect);
      document.removeEventListener('mousedown', preventSelect);
    });
  }
  
  if (config.disableDrag) {
    document.addEventListener('dragstart', preventDrag);
    cleanupFunctions.push(() => {
      document.removeEventListener('dragstart', preventDrag);
    });
  }
  
  if (config.disableKeyboardShortcuts) {
    document.addEventListener('keydown', preventKeyboardShortcuts);
    cleanupFunctions.push(() => {
      document.removeEventListener('keydown', preventKeyboardShortcuts);
    });
  }
  
  if (config.disableDevTools) {
    detectDevTools();
  }
  
  if (config.watermark) {
    const watermark = createWatermark(config.watermarkText);
    document.body.appendChild(watermark);
    cleanupFunctions.push(() => {
      if (watermark.parentNode) {
        watermark.parentNode.removeChild(watermark);
      }
    });
  }
  
  if (config.blurOnInspect) {
    const cleanupBlur = applyBlurOnInspect();
    cleanupFunctions.push(cleanupBlur);
  }
  
  if (config.disableScreenshot) {
    disableScreenshot();
  }
  
  // Return cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};

/**
 * CSS styles for content protection
 */
export const protectionStyles = `
  /* Disable text selection */
  .content-protected {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Disable drag */
  .content-protected img,
  .content-protected * {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
  
  /* Hide content when printing */
  @media print {
    .content-protected {
      display: none !important;
    }
  }
  
  /* Prevent text highlighting */
  .content-protected::selection {
    background: transparent;
  }
  
  .content-protected::-moz-selection {
    background: transparent;
  }
  
  /* Disable focus outline for better UX */
  .content-protected:focus {
    outline: none;
  }
  
  /* Watermark styles */
  .watermark {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  }
  
  .watermark-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 24px;
    color: rgba(0, 0, 0, 0.1);
    font-weight: bold;
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
  }
`;
