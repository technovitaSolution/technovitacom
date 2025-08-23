'use client';

import React from 'react';
import { ContentProtectionProvider, useContentProtectionContext } from '@/contexts/ContentProtectionContext';
import { ProtectedContent, ProtectedImage, ProtectedText, Watermark } from '@/components/ContentProtection';

const DemoContent: React.FC = () => {
  const { isEnabled } = useContentProtectionContext();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Content Protection Demo</h1>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isEnabled ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium text-gray-600">
                Protection: {isEnabled ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Status Banner */}
            <div className={`p-4 rounded-lg border ${
              isEnabled 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-yellow-50 border-yellow-200 text-yellow-800'
            }`}>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isEnabled ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="font-medium">
                  Content Protection is {isEnabled ? 'enabled' : 'disabled'}
                </span>
              </div>
              <p className="mt-2 text-sm">
                {isEnabled 
                  ? 'All protection features are active. Try to copy, right-click, or select text to see the protection in action.'
                  : 'Protection is disabled. You can freely interact with the content below.'
                }
              </p>
            </div>

            {/* Protected Text Content */}
            <ProtectedContent className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Protected Text Content</h2>
              <ProtectedText className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This is protected text content that cannot be easily copied or selected. 
                  The content protection system prevents users from selecting, copying, or 
                  right-clicking on this text. This helps protect your valuable content 
                  from unauthorized use.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-4">
                  "This is a protected quote that demonstrates the content protection system 
                  in action. Users cannot easily copy this text or access it through 
                  developer tools."
                </blockquote>
              </ProtectedText>
            </ProtectedContent>

            {/* Protected Image */}
            <ProtectedContent className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Protected Image</h2>
              <div className="text-center">
                <ProtectedImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                  alt="Protected sample image"
                  className="max-w-full h-auto rounded-lg shadow-md"
                  width={600}
                  height={400}
                />
                <p className="text-sm text-gray-500 mt-2">
                  This image is protected from being dragged, right-clicked, or easily downloaded.
                </p>
              </div>
            </ProtectedContent>

            {/* Code Example */}
            <ProtectedContent className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Protected Code Example</h2>
              <ProtectedText className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {`// This is protected code that cannot be easily copied
function protectedFunction() {
  const secretKey = "your-secret-key-here";
  const encryptedData = encrypt(secretKey, data);
  return encryptedData;
}

// Try to select or copy this code - it should be protected
const result = protectedFunction();
console.log("Protected result:", result);`}
              </ProtectedText>
            </ProtectedContent>

            {/* Interactive Demo */}
            <ProtectedContent className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Interactive Protection Demo</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Try these actions to test the protection:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Right-click on any content (context menu should be disabled)</li>
                  <li>Try to select text (selection should be prevented)</li>
                  <li>Use Ctrl+C to copy (should be blocked)</li>
                  <li>Try to drag images or text (should be prevented)</li>
                  <li>Use keyboard shortcuts like Ctrl+A, Ctrl+S (should be blocked)</li>
                  <li>Open DevTools (F12 or Ctrl+Shift+I) - may be detected</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Test Area</h3>
                  <ProtectedText className="text-blue-800">
                    This is a test area where you can try all the protection features. 
                    The content here should be fully protected from copying, selection, 
                    and other unauthorized access methods.
                  </ProtectedText>
                </div>
              </div>
            </ProtectedContent>

            {/* Watermark Demo */}
            <div className="bg-white p-6 rounded-lg shadow-sm border relative overflow-hidden">
              <h2 className="text-xl font-semibold mb-4">Watermark Demo</h2>
              <div className="relative">
                <Watermark text="© Technovita Solutions - Demo" />
                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed">
                    This content has a watermark overlay that makes it difficult to use 
                    the content without attribution. The watermark is subtle but visible, 
                    and it covers the entire content area.
                  </p>
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-medium mb-2">Sample Content with Watermark</h3>
                    <p className="text-gray-600">
                      This is sample content that demonstrates the watermark feature. 
                      The watermark appears as a subtle overlay across the content, 
                      making it clear that the content is protected and copyrighted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProtectionDemoPage: React.FC = () => {
  return (
    <ContentProtectionProvider defaultEnabled={true}>
      <DemoContent />
    </ContentProtectionProvider>
  );
};

export default ProtectionDemoPage;
