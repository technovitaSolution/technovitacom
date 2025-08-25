#!/usr/bin/env node

/**
 * Sitemap Generator Utility for Technovita Solution
 * 
 * This script helps generate and validate the sitemap
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  baseUrl: 'https://technovitasolution.com',
  appDir: path.join(process.cwd(), 'src/app'),
  outputFile: path.join(process.cwd(), 'public/sitemap-generated.xml'),
  excludeDirectories: [
    'node_modules', '.next', 'components', 'lib', 'types', 
    'hooks', 'contexts', 'api', 'globals.css', 'favicon.ico',
    'not-found.tsx', 'layout.tsx', 'page.tsx', 'animations.css'
  ]
};

// Priority patterns
const priorityPatterns = [
  { pattern: /^\/$/, priority: 1.0, changefreq: 'daily' },
  { pattern: /amazon-seller-services-canada/, priority: 0.95, changefreq: 'weekly' },
  { pattern: /amazon-.*-seller-services/, priority: 0.95, changefreq: 'weekly' },
  { pattern: /account-management/, priority: 0.9, changefreq: 'weekly' },
  { pattern: /catalogue/, priority: 0.85, changefreq: 'weekly' },
  { pattern: /onboarding/, priority: 0.85, changefreq: 'weekly' },
  { pattern: /services/, priority: 0.9, changefreq: 'weekly' },
  { pattern: /how-to-get-onboarded/, priority: 0.8, changefreq: 'monthly' },
  { pattern: /Flipkart-Catalogue/, priority: 0.85, changefreq: 'weekly' }
];

function getPageMetadata(pagePath) {
  for (const pattern of priorityPatterns) {
    if (pattern.pattern.test(pagePath)) {
      return {
        priority: pattern.priority,
        changefreq: pattern.changefreq
      };
    }
  }
  return { priority: 0.6, changefreq: 'monthly' };
}

function shouldExcludeDirectory(dirName) {
  return config.excludeDirectories.includes(dirName);
}

function getPageFiles(dir, basePath = '') {
  const pages = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!shouldExcludeDirectory(item)) {
          const newBasePath = basePath ? `${basePath}/${item}` : item;
          pages.push(...getPageFiles(fullPath, newBasePath));
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        const urlPath = basePath || '';
        if (urlPath) {
          pages.push(`/${urlPath}`);
        } else {
          pages.push('/');
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
  
  return pages;
}

function generateSitemapXML(urls) {
  const now = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.url}</loc>\n`;
    xml += `    <lastmod>${url.lastModified}</lastmod>\n`;
    xml += `    <changefreq>${url.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

function main() {
  console.log('🔍 Scanning for pages...');
  
  // Get all page files
  const pagePaths = getPageFiles(config.appDir);
  console.log(`📄 Found ${pagePaths.length} pages`);
  
  // Convert to sitemap entries
  const sitemapEntries = pagePaths.map(pagePath => {
    const { priority, changefreq } = getPageMetadata(pagePath);
    
    return {
      url: `${config.baseUrl}${pagePath}`,
      lastModified: new Date().toISOString(),
      changeFrequency: changefreq,
      priority: priority,
    };
  });
  
  // Add important static pages
  const importantPages = [
    '/about-us', '/contact', '/privacy-policy', '/terms-of-service', 
    '/cookie-policy', '/services', '/services/amazon-seller-services-canada',
    '/services/account-management', '/services/catalogue-services',
    '/services/onboarding-services', '/services/sales-boost', '/services/account-creation'
  ];
  
  const additionalUrls = importantPages.map(pagePath => {
    const { priority, changefreq } = getPageMetadata(pagePath);
    
    return {
      url: `${config.baseUrl}${pagePath}`,
      lastModified: new Date().toISOString(),
      changeFrequency: changefreq,
      priority: priority,
    };
  });
  
  // Combine and remove duplicates
  const allUrls = [...sitemapEntries, ...additionalUrls];
  const uniqueUrls = allUrls.filter((entry, index, self) => 
    index === self.findIndex(e => e.url === entry.url)
  );
  
  console.log(`✅ Generated sitemap with ${uniqueUrls.length} unique URLs`);
  
  // Generate XML
  const xml = generateSitemapXML(uniqueUrls);
  
  // Write to file
  try {
    fs.writeFileSync(config.outputFile, xml);
    console.log(`💾 Sitemap saved to: ${config.outputFile}`);
    
    // Display some statistics
    console.log('\n📊 Sitemap Statistics:');
    console.log(`- Total URLs: ${uniqueUrls.length}`);
    console.log(`- Homepage priority: ${uniqueUrls.find(u => u.url === config.baseUrl + '/')?.priority || 'N/A'}`);
    console.log(`- Amazon services: ${uniqueUrls.filter(u => u.url.includes('amazon-')).length}`);
    console.log(`- Service pages: ${uniqueUrls.filter(u => u.url.includes('/services/')).length}`);
    
  } catch (error) {
    console.error('❌ Error writing sitemap file:', error);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, getPageFiles, generateSitemapXML };

