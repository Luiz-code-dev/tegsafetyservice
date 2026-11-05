'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_CATEGORIES, type ConsentCategories, type ConsentRecord } from '@/config/privacy'
import { purgeRevoked, readConsent, updateGoogleConsent, writeConsent } from '@/lib/consent'

type ConsentContextValue = {
  ready: boolean
  record: ConsentRecord | null
  categories: ConsentCategories
  hasChosen: boolean
  preferencesOpen: boolean
  openPreferences: () => void
  closePreferences: () => void
  save: (categories: ConsentCategories) => void
  acceptAll: () => void
  rejectAll: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

const ALL: ConsentCategories = { necessary: true, preferences: true, analytics: true, marketing: true }

function hasGlobalPrivacyControl() {
  return typeof navigator !== 'undefined' && Boolean((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl)
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const [record, setRecord] = useState<ConsentRecord | null>(null)
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  useEffect(() => {
    const existing = readConsent()
    if (existing && hasGlobalPrivacyControl()) existing.categories.marketing = false
    setRecord(existing)
    if (existing) updateGoogleConsent(existing.categories)
    setReady(true)
  }, [])

  const save = useCallback(
    (next: ConsentCategories) => {
      const categories = { ...next, necessary: true, marketing: hasGlobalPrivacyControl() ? false : next.marketing }
      const prev = record?.categories
      const saved = writeConsent(categories, record?.consentId)
      setRecord(saved)
      setPreferencesOpen(false)
      purgeRevoked(categories)
      updateGoogleConsent(categories)

      fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(saved),
        keepalive: true,
      }).catch(() => {})

      const revokedScript = prev && ((prev.analytics && !categories.analytics) || (prev.marketing && !categories.marketing))
      if (revokedScript) window.location.reload()
    },
    [record],
  )

  const value = useMemo<ConsentContextValue>(
    () => ({
      ready,
      record,
      categories: record?.categories ?? DEFAULT_CATEGORIES,
      hasChosen: Boolean(record),
      preferencesOpen,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      save,
      acceptAll: () => save(ALL),
      rejectAll: () => save(DEFAULT_CATEGORIES),
    }),
    [ready, record, preferencesOpen, save],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider')
  return ctx
}
