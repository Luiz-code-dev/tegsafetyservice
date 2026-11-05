'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string; theme?: string; callback: (t: string) => void; 'expired-callback'?: () => void }) => string
      remove: (id: string) => void
    }
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

/** Renders Cloudflare Turnstile only when a site key is configured. */
export function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const idRef = useRef<string | null>(null)

  useEffect(() => {
    if (!SITE_KEY) return
    let cancelled = false
    const mount = () => {
      if (cancelled || !ref.current || !window.turnstile || idRef.current) return
      idRef.current = window.turnstile.render(ref.current, {
        sitekey: SITE_KEY,
        theme: 'auto',
        callback: onToken,
        'expired-callback': () => onToken(''),
      })
    }
    const timer = window.setInterval(() => {
      if (window.turnstile) {
        mount()
        window.clearInterval(timer)
      }
    }, 200)
    return () => {
      cancelled = true
      window.clearInterval(timer)
      if (idRef.current && window.turnstile) window.turnstile.remove(idRef.current)
      idRef.current = null
    }
  }, [onToken])

  if (!SITE_KEY) return null
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="lazyOnload" />
      <div ref={ref} className="min-h-16" />
    </>
  )
}
