'use client'

import { useConsent } from '@/components/consent/consent-provider'

export function CookiePreferencesButton() {
  const { openPreferences } = useConsent()
  return (
    <button
      type="button"
      onClick={openPreferences}
      className="inline-flex h-11 w-fit items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
    >
      Abrir preferências de cookies
    </button>
  )
}
