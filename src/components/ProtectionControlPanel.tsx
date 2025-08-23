'use client';

import React, { useState } from 'react';
import { useContentProtectionContext } from '@/contexts/ContentProtectionContext';
import { ProtectionConfig } from '@/lib/content-protection';

export const ProtectionControlPanel: React.FC<{
  className?: string;
  showAdvanced?: boolean;
}> = ({ className = '', showAdvanced = false }) => {
  const { isEnabled, config, toggleProtection, updateConfig } = useContentProtectionContext();
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(showAdvanced);

  const handleConfigChange = (key: keyof ProtectionConfig, value: boolean) => {
    updateConfig({ [key]: value });
  };

  return (
    <div className={`protection-control-panel bg-white border border-gray-200 rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Content Protection</h3>
        <button
          onClick={toggleProtection}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isEnabled
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isEnabled ? 'Disable Protection' : 'Enable Protection'}
        </button>
      </div>

      <div className="space-y-4">
        {/* Basic Protection Settings */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Basic Protection</h4>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={config.disableRightClick}
                onChange={(e) => handleConfigChange('disableRightClick', e.target.checked)}
                disabled={!isEnabled}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Disable Right-Click</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={config.disableCopy}
                onChange={(e) => handleConfigChange('disableCopy', e.target.checked)}
                disabled={!isEnabled}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Disable Copy</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={config.disableSelect}
                onChange={(e) => handleConfigChange('disableSelect', e.target.checked)}
                disabled={!isEnabled}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Disable Text Selection</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={config.disableDrag}
                onChange={(e) => handleConfigChange('disableDrag', e.target.checked)}
                disabled={!isEnabled}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Disable Drag & Drop</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={config.watermark}
                onChange={(e) => handleConfigChange('watermark', e.target.checked)}
                disabled={!isEnabled}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Show Watermark</span>
            </label>
          </div>
        </div>

        {/* Advanced Settings Toggle */}
        <button
          onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          {showAdvancedSettings ? 'Hide' : 'Show'} Advanced Settings
        </button>

        {/* Advanced Protection Settings */}
        {showAdvancedSettings && (
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700">Advanced Protection</h4>
            
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={config.disableKeyboardShortcuts}
                  onChange={(e) => handleConfigChange('disableKeyboardShortcuts', e.target.checked)}
                  disabled={!isEnabled}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Disable Keyboard Shortcuts</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={config.disableDevTools}
                  onChange={(e) => handleConfigChange('disableDevTools', e.target.checked)}
                  disabled={!isEnabled}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Detect DevTools (Resource Intensive)</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={config.blurOnInspect}
                  onChange={(e) => handleConfigChange('blurOnInspect', e.target.checked)}
                  disabled={!isEnabled}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Blur on Inspect</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={config.disableScreenshot}
                  onChange={(e) => handleConfigChange('disableScreenshot', e.target.checked)}
                  disabled={!isEnabled}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Disable Screenshot</span>
              </label>
            </div>

            {/* Watermark Text Input */}
            {config.watermark && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Watermark Text
                </label>
                <input
                  type="text"
                  value={config.watermarkText || ''}
                  onChange={(e) => updateConfig({ watermarkText: e.target.value })}
                  disabled={!isEnabled}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter watermark text..."
                />
              </div>
            )}
          </div>
        )}

        {/* Status Indicator */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isEnabled ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-600">
              Protection is {isEnabled ? 'enabled' : 'disabled'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionControlPanel;
