import Cookies from 'js-cookie'

// Cookie configuration
const COOKIE_CONFIG = {
  expires: 365, // 1 year
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
}

// Cookie keys
export const COOKIE_KEYS = {
  USER_PREFERENCES: 'maji_user_prefs',
  QUOTE_DATA: 'maji_quote_data',
  COVERAGE_CHECK: 'maji_coverage_check',
  SESSION_ID: 'maji_session_id',
  RETURNING_USER: 'maji_returning_user',
} as const

// User preferences interface
export interface UserPreferences {
  theme?: 'light' | 'dark'
  notifications?: boolean
  lastVisit?: string
  serviceInterests?: string[]
}

// Quote data interface
export interface QuoteData {
  name?: string
  email?: string
  phone?: string
  address?: string
  service?: string
  frequency?: string
  timestamp?: string
}

// Cookie utility functions
export const cookieUtils = {
  // Set user preferences
  setUserPreferences: (prefs: UserPreferences) => {
    Cookies.set(COOKIE_KEYS.USER_PREFERENCES, JSON.stringify(prefs), COOKIE_CONFIG)
  },

  // Get user preferences
  getUserPreferences: (): UserPreferences | null => {
    const prefs = Cookies.get(COOKIE_KEYS.USER_PREFERENCES)
    return prefs ? JSON.parse(prefs) : null
  },

  // Set quote data
  setQuoteData: (data: QuoteData) => {
    Cookies.set(COOKIE_KEYS.QUOTE_DATA, JSON.stringify(data), COOKIE_CONFIG)
  },

  // Get quote data
  getQuoteData: (): QuoteData | null => {
    const data = Cookies.get(COOKIE_KEYS.QUOTE_DATA)
    return data ? JSON.parse(data) : null
  },

  // Set coverage check result
  setCoverageCheck: (suburb: string, isCovered: boolean) => {
    const data = { suburb, isCovered, timestamp: new Date().toISOString() }
    Cookies.set(COOKIE_KEYS.COVERAGE_CHECK, JSON.stringify(data), COOKIE_CONFIG)
  },

  // Get coverage check result
  getCoverageCheck: () => {
    const data = Cookies.get(COOKIE_KEYS.COVERAGE_CHECK)
    return data ? JSON.parse(data) : null
  },

  // Set session ID
  setSessionId: (sessionId: string) => {
    Cookies.set(COOKIE_KEYS.SESSION_ID, sessionId, { ...COOKIE_CONFIG, expires: 1 })
  },

  // Get session ID
  getSessionId: () => {
    return Cookies.get(COOKIE_KEYS.SESSION_ID)
  },

  // Set returning user flag
  setReturningUser: () => {
    Cookies.set(COOKIE_KEYS.RETURNING_USER, 'true', COOKIE_CONFIG)
  },

  // Check if returning user
  isReturningUser: () => {
    return !!Cookies.get(COOKIE_KEYS.RETURNING_USER)
  },

  // Clear all cookies
  clearAll: () => {
    Object.values(COOKIE_KEYS).forEach(key => {
      Cookies.remove(key)
    })
  },

  // Clear specific cookie
  clear: (key: string) => {
    Cookies.remove(key)
  }
}
```

```

