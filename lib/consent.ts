import { cookieCategories } from '@/config/cookies'
import {
  CONSENT_COOKIE,
  CONSENT_MAX_AGE_DAYS,
  CONSENT_VERSION,
  type ConsentCategories,
  type ConsentRecord,
} from '@/config/privacy'

export function readConsent(): ConsentRecord | null {
  if (typeof document === 'undefined') return null
  const raw = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`))
    ?.slice(CONSENT_COOKIE.length + 1)
  if (!raw) return null
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as ConsentRecord
    if (parsed.version !== CONSENT_VERSION) return null
    return { ...parsed, categories: { ...parsed.categories, necessary: true } }
  } catch {
    return null
  }
}

export function writeConsent(categories: ConsentCategories, previousId?: string): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    consentId: previousId ?? crypto.randomUUID(),
    categories: { ...categories, necessary: true },
  }
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(record))}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`
  return record
}

function deleteCookie(name: string) {
  const host = location.hostname
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`]
  for (const d of domains) {
    document.cookie = `${name}=; Max-Age=0; Path=/${d ? `; Domain=${d}` : ''}`
  }
}

/** Removes browser cookies/storage belonging to categories that are no longer authorized. */
export function purgeRevoked(categories: ConsentCategories) {
  const names = document.cookie.split('; ').map((c) => c.split('=')[0])
  for (const cat of cookieCategories) {
    if (categories[cat.id]) continue
    for (const prefix of cat.removePrefixes) {
      names.filter((n) => n.startsWith(prefix)).forEach(deleteCookie)
      try {
        Object.keys(localStorage)
          .filter((k) => k.startsWith(prefix))
          .forEach((k) => localStorage.removeItem(k))
      } catch {}
    }
  }
}

type Gtag = (...args: unknown[]) => void

export function updateGoogleConsent(categories: ConsentCategories) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (!gtag) return
  const v = (b: boolean) => (b ? 'granted' : 'denied')
  gtag('consent', 'update', {
    analytics_storage: v(categories.analytics),
    ad_storage: v(categories.marketing),
    ad_user_data: v(categories.marketing),
    ad_personalization: v(categories.marketing),
  })
}
