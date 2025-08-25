import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { sitemapConfig, getPageMetadata, shouldExcludeDirectory } from '@/lib/sitemap-config'

// Function to recursively get all page files
function getPageFiles(dir: string, basePath: string = ''): string[] {
  const pages: string[] = []
  
  try {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip excluded directories
        if (!shouldExcludeDirectory(item)) {
          const newBasePath = basePath ? `${basePath}/${item}` : item
          pages.push(...getPageFiles(fullPath, newBasePath))
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        // Convert directory path to URL path
        const urlPath = basePath || ''
        if (urlPath) {
          pages.push(`/${urlPath}`)
        } else {
          pages.push('/')
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }
  
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src/app')
  
  // Get all page files
  const pagePaths = getPageFiles(appDir)
  
  // Convert to sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = pagePaths.map(pagePath => {
    const { priority, changefreq } = getPageMetadata(pagePath)
    
    return {
      url: `${sitemapConfig.baseUrl}${pagePath}`,
      lastModified: new Date(),
      changeFrequency: changefreq,
      priority: priority,
    }
  })
  
  // Add additional important URLs that might not be detected automatically
  const additionalUrls: MetadataRoute.Sitemap = sitemapConfig.importantPages.map(pagePath => {
    const { priority, changefreq } = getPageMetadata(pagePath)
    
    return {
      url: `${sitemapConfig.baseUrl}${pagePath}`,
      lastModified: new Date(),
      changeFrequency: changefreq,
      priority: priority,
    }
  })
  
  // Combine and remove duplicates
  const allUrls = [...sitemapEntries, ...additionalUrls]
  const uniqueUrls = allUrls.filter((entry, index, self) => 
    index === self.findIndex(e => e.url === entry.url)
  )
  
  return uniqueUrls
}
