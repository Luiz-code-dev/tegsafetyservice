export const CONSENT_VERSION = '1.0'
export const CONSENT_COOKIE = 'teg_consent'
export const CONSENT_MAX_AGE_DAYS = 365

export const LEGAL_VERSION = '1.0'
export const LEGAL_UPDATED_AT = '5 de novembro de 2026'

export type ConsentCategory = 'necessary' | 'preferences' | 'analytics' | 'marketing'

export type ConsentCategories = Record<ConsentCategory, boolean>

export type ConsentRecord = {
  version: string
  timestamp: string
  consentId: string
  categories: ConsentCategories
}

export const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
}
