/**
 * Runtime Config Loader
 * 
 * Allows reading JSON configurations at runtime (even after build).
 * This function is designed to be safe for both Server and Client sides.
 */

// Simple in-memory cache to reduce disk I/O in production
const configCache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export function getRuntimeConfig<T>(configName: string, defaultConfig: T): T {
  // Always check if we are on the server side before using Node.js modules
  if (typeof window === 'undefined') {
    const now = Date.now();
    const isProd = process.env.NODE_ENV === 'production';
    
    // Check cache first in production
    if (isProd && configCache[configName]) {
      if (now - configCache[configName].timestamp < CACHE_TTL) {
        return configCache[configName].data;
      }
    }

    try {
      // Use dynamic require to avoid bundling 'fs' and 'path' for the client
      const fs = require('fs');
      const path = require('path');
      
      // Use path.resolve to ensure absolute path from project root
      const filePath = path.resolve(process.cwd(), 'configs', `${configName}.json`);
      
      if (fs.existsSync(filePath)) {
        // Clear require cache for JSON if using require, but we use readFileSync
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        
        // Update cache
        configCache[configName] = { data, timestamp: now };
        return data;
      } else {
        console.warn(`[RuntimeConfig] ⚠️ Config file not found: ${filePath}`);
      }
    } catch (error) {
      console.error(`[RuntimeConfig] ❌ Error loading ${configName}:`, error);
    }
  }
  
  // On client side or if server read fails, return default
  return defaultConfig;
}
