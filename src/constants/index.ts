/**
 * Application-wide constants.
 * Use these instead of magic strings/numbers throughout the codebase.
 */

/** Breakpoints matching Tailwind defaults (in px) */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/** Revalidation intervals for ISR (in seconds) */
export const REVALIDATION = {
  DEFAULT: 3600,       // 1 hour
  PRODUCTS: 1800,      // 30 minutes
  STATIC_PAGES: 86400, // 24 hours
} as const;

/** Animation duration tokens (in ms) */
export const ANIMATION = {
  FAST: 150,
  DEFAULT: 300,
  SLOW: 500,
} as const;

/** Local storage keys */
export const STORAGE_KEYS = {
  THEME: "ratnapur-theme",
  CART: "ratnapur-cart",
  WISHLIST: "ratnapur-wishlist",
} as const;
