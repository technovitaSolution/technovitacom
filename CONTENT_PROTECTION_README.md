# Content Protection System

A comprehensive content protection system for Next.js applications that prevents content theft through multiple layers of protection.

## Features

### 🛡️ Protection Methods
- **Right-click prevention** - Disables context menu
- **Copy protection** - Prevents Ctrl+C and copy operations
- **Text selection blocking** - Prevents text selection
- **Drag & drop prevention** - Prevents dragging images and text
- **Keyboard shortcuts blocking** - Blocks common shortcuts (Ctrl+A, Ctrl+S, etc.)
- **DevTools detection** - Detects when developer tools are opened
- **Screenshot prevention** - Blocks print screen and screen capture
- **Watermark overlay** - Adds subtle watermark to content
- **Blur on inspect** - Blurs content when inspecting elements

### 🎛️ Management Features
- **Global protection** - Apply protection to entire application
- **Element-specific protection** - Protect individual components
- **Configurable settings** - Customize protection levels
- **Real-time control panel** - Toggle protection on/off
- **Persistent settings** - Settings saved to localStorage
- **Context provider** - React context for state management

## Quick Start

### 1. Basic Usage

Wrap your app with the protection provider:

```tsx
// app/layout.tsx
import { ContentProtectionProvider } from '@/contexts/ContentProtectionContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContentProtectionProvider defaultEnabled={true}>
          {children}
        </ContentProtectionProvider>
      </body>
    </html>
  );
}
```

### 2. Protect Specific Content

```tsx
import { ProtectedContent, ProtectedText, ProtectedImage } from '@/components/ContentProtection';

export default function MyPage() {
  return (
    <div>
      {/* Protect entire content block */}
      <ProtectedContent>
        <h1>This content is protected</h1>
        <p>Users cannot copy, select, or right-click this content.</p>
      </ProtectedContent>

      {/* Protect specific text */}
      <ProtectedText>
        This specific text is protected from copying and selection.
      </ProtectedText>

      {/* Protect images */}
      <ProtectedImage
        src="/my-image.jpg"
        alt="Protected image"
        width={400}
        height={300}
      />
    </div>
  );
}
```

### 3. Using the Hook

```tsx
'use client';
import { useContentProtection } from '@/hooks/useContentProtection';

export default function MyComponent() {
  // Apply protection with custom config
  const { removeProtection } = useContentProtection({
    disableRightClick: true,
    disableCopy: true,
    disableSelect: true,
    watermark: true,
    watermarkText: '© My Company'
  });

  return (
    <div>
      <h1>Protected Content</h1>
      <button onClick={removeProtection}>Remove Protection</button>
    </div>
  );
}
```

### 4. Higher-Order Component

```tsx
import { withContentProtection } from '@/components/ContentProtection';

const MyComponent = () => (
  <div>
    <h1>This component is protected</h1>
    <p>All content in this component is protected.</p>
  </div>
);

export default withContentProtection(MyComponent, {
  disableRightClick: true,
  disableCopy: true
});
```

## Configuration Options

### ProtectionConfig Interface

```typescript
interface ProtectionConfig {
  disableRightClick?: boolean;      // Disable right-click context menu
  disableCopy?: boolean;            // Prevent copy operations
  disableCut?: boolean;             // Prevent cut operations
  disablePaste?: boolean;           // Prevent paste operations
  disableSelect?: boolean;          // Prevent text selection
  disableDrag?: boolean;            // Prevent drag operations
  disableContextMenu?: boolean;     // Disable context menu
  disableKeyboardShortcuts?: boolean; // Block keyboard shortcuts
  disablePrintScreen?: boolean;     // Prevent print screen
  disableDevTools?: boolean;        // Detect DevTools (resource intensive)
  watermark?: boolean;              // Show watermark overlay
  watermarkText?: string;           // Custom watermark text
  blurOnInspect?: boolean;          // Blur content on inspect
  disableScreenshot?: boolean;      // Disable screenshot attempts
}
```

### Default Configuration

```typescript
const DEFAULT_PROTECTION_CONFIG = {
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
```

## Components

### ContentProtectionProvider
Global provider for content protection state management.

```tsx
<ContentProtectionProvider 
  defaultEnabled={true}
  initialConfig={customConfig}
>
  {children}
</ContentProtectionProvider>
```

### ProtectedContent
Wrapper component for protecting content blocks.

```tsx
<ProtectedContent protectionConfig={customConfig}>
  <h1>Protected content</h1>
  <p>This content is protected</p>
</ProtectedContent>
```

### ProtectedText
Component for protecting text content.

```tsx
<ProtectedText>
  This text cannot be selected or copied.
</ProtectedText>
```

### ProtectedImage
Component for protecting images.

```tsx
<ProtectedImage
  src="/image.jpg"
  alt="Protected image"
  width={400}
  height={300}
/>
```

### Watermark
Component for adding watermark overlays.

```tsx
<Watermark text="© My Company">
  <div>Content with watermark</div>
</Watermark>
```

### ProtectionControlPanel
Control panel for managing protection settings.

```tsx
<ProtectionControlPanel showAdvanced={true} />
```

## Hooks

### useContentProtection
Hook for applying content protection.

```tsx
const { removeProtection } = useContentProtection(config);
```

### useElementProtection
Hook for protecting specific DOM elements.

```tsx
const elementRef = useRef<HTMLDivElement>(null);
useElementProtection(elementRef, config);
```

### useContentProtectionContext
Hook for accessing protection context.

```tsx
const { isEnabled, config, toggleProtection } = useContentProtectionContext();
```

## Demo

Visit `/protection-demo` to see the content protection system in action with interactive examples.

## Best Practices

### 1. Performance Considerations
- **DevTools detection** can be resource-intensive, use sparingly
- **Watermarks** add visual overhead, consider user experience
- **Global protection** affects entire app, use element-specific when possible

### 2. User Experience
- **Don't over-protect** - Allow legitimate user interactions
- **Provide alternatives** - Offer legitimate ways to access content
- **Clear messaging** - Inform users about protection policies

### 3. Security Notes
- **Not foolproof** - Determined users can still bypass protection
- **Server-side validation** - Always validate on server side
- **Layered approach** - Combine with other security measures

### 4. Accessibility
- **Keyboard navigation** - Ensure protection doesn't break accessibility
- **Screen readers** - Test with assistive technologies
- **Focus management** - Maintain proper focus indicators

## Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Limitations

1. **Not 100% secure** - Advanced users can still bypass protection
2. **Browser dependent** - Some features may not work in all browsers
3. **Performance impact** - Some features can affect performance
4. **User experience** - May frustrate legitimate users

## Troubleshooting

### Protection not working?
1. Check if protection is enabled in context
2. Verify component is wrapped with provider
3. Check browser console for errors
4. Ensure client-side rendering

### Performance issues?
1. Disable DevTools detection
2. Reduce watermark frequency
3. Use element-specific protection instead of global
4. Check for memory leaks in cleanup functions

### Accessibility problems?
1. Test with screen readers
2. Ensure keyboard navigation works
3. Check focus management
4. Verify ARIA attributes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This content protection system is part of the Technovita Solutions project.

---

**Note**: This protection system is designed to deter casual content theft. For high-security requirements, consider additional server-side measures and legal protections.
