// Sitemap configuration for Technovita Solution
export const sitemapConfig = {
  baseUrl: 'https://technovitasolution.com',
  
  // Priority patterns for different types of pages
  priorityPatterns: [
    {
      pattern: /^\/$/,
      priority: 1.0,
      changefreq: 'daily' as const,
      description: 'Homepage'
    },
    {
      pattern: /amazon-seller-services-canada/,
      priority: 0.95,
      changefreq: 'weekly' as const,
      description: 'Amazon Canada Services'
    },
    {
      pattern: /amazon-.*-seller-services/,
      priority: 0.95,
      changefreq: 'weekly' as const,
      description: 'Amazon International Services'
    },
    {
      pattern: /account-management/,
      priority: 0.9,
      changefreq: 'weekly' as const,
      description: 'Account Management Services'
    },
    {
      pattern: /catalogue/,
      priority: 0.85,
      changefreq: 'weekly' as const,
      description: 'Catalogue Services'
    },
    {
      pattern: /onboarding/,
      priority: 0.85,
      changefreq: 'weekly' as const,
      description: 'Onboarding Services'
    },
    {
      pattern: /services/,
      priority: 0.9,
      changefreq: 'weekly' as const,
      description: 'Service Pages'
    },
    {
      pattern: /how-to-get-onboarded/,
      priority: 0.8,
      changefreq: 'monthly' as const,
      description: 'Onboarding Guides'
    },
    {
      pattern: /Flipkart-Catalogue/,
      priority: 0.85,
      changefreq: 'weekly' as const,
      description: 'Flipkart Catalogue'
    },
    {
      pattern: /employee-verification/,
      priority: 0.9,
      changefreq: 'monthly' as const,
      description: 'Employee Certificate Verification'
    }
  ],
  
  // Important static pages
  importantPages: [
    '/about-us',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/employee-verification',
    '/services',
    '/services/amazon-seller-services-canada',
    '/services/account-management',
    '/services/catalogue-services',
    '/services/onboarding-services',
    '/services/sales-boost',
    '/services/account-creation',
  ],
  
  // Directories to exclude from sitemap
  excludeDirectories: [
    'node_modules',
    '.next',
    'components',
    'lib',
    'types',
    'hooks',
    'contexts',
    'api',
    'globals.css',
    'favicon.ico',
    'not-found.tsx',
    'layout.tsx',
    'page.tsx',
    'animations.css'
  ],
  
  // File extensions to include
  includeExtensions: ['.tsx', '.ts'],
  
  // Default values for pages not matching any pattern
  default: {
    priority: 0.6,
    changefreq: 'monthly' as const
  }
}

// Function to get priority and changefreq for a given path
export function getPageMetadata(path: string) {
  for (const pattern of sitemapConfig.priorityPatterns) {
    if (pattern.pattern.test(path)) {
      return {
        priority: pattern.priority,
        changefreq: pattern.changefreq
      }
    }
  }
  
  return sitemapConfig.default
}

// Function to check if a directory should be excluded
export function shouldExcludeDirectory(dirName: string): boolean {
  return sitemapConfig.excludeDirectories.includes(dirName)
}

// Function to check if a file should be included
export function shouldIncludeFile(fileName: string): boolean {
  return sitemapConfig.includeExtensions.some(ext => fileName.endsWith(ext))
}

