// Cache utility for client-side caching
class CacheManager {
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map()

  // Set cache item
  set(key: string, data: any, ttl: number = 300000) { // Default 5 minutes
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }

  // Get cache item
  get(key: string): any | null {
    const item = this.cache.get(key)
    if (!item) return null

    const isExpired = Date.now() - item.timestamp > item.ttl
    if (isExpired) {
      this.cache.delete(key)
      return null
    }

    return item.data
  }

  // Clear cache
  clear() {
    this.cache.clear()
  }

  // Clear expired items
  clearExpired() {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key)
      }
    }
  }

  // Get cache size
  size() {
    return this.cache.size
  }
}

// Global cache instance
export const cacheManager = new CacheManager()

// Cache keys
export const CACHE_KEYS = {
  COVERAGE_AREAS: 'coverage_areas',
  SERVICES: 'services',
  TESTIMONIALS: 'testimonials',
  USER_QUOTES: 'user_quotes',
} as const

// Cache utilities for specific data types
export const cacheUtils = {
  // Coverage areas cache
  setCoverageAreas: (areas: string[]) => {
    cacheManager.set(CACHE_KEYS.COVERAGE_AREAS, areas, 3600000) // 1 hour
  },

  getCoverageAreas: () => {
    return cacheManager.get(CACHE_KEYS.COVERAGE_AREAS)
  },

  // Services cache
  setServices: (services: any[]) => {
    cacheManager.set(CACHE_KEYS.SERVICES, services, 7200000) // 2 hours
  },

  getServices: () => {
    return cacheManager.get(CACHE_KEYS.SERVICES)
  },

  // Testimonials cache
  setTestimonials: (testimonials: any[]) => {
    cacheManager.set(CACHE_KEYS.TESTIMONIALS, testimonials, 86400000) // 24 hours
  },

  getTestimonials: () => {
    return cacheManager.get(CACHE_KEYS.TESTIMONIALS)
  },

  // User quotes cache
  setUserQuotes: (quotes: any[]) => {
    cacheManager.set(CACHE_KEYS.USER_QUOTES, quotes, 1800000) // 30 minutes
  },

  getUserQuotes: () => {
    return cacheManager.get(CACHE_KEYS.USER_QUOTES)
  }
}
