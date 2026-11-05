'use client'

import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { useConsent } from './consent-provider'

const btn =
  'inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-border bg-secondary px-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function CookieBanner() {
  const { ready, hasChosen, acceptAll, rejectAll, openPreferences, preferencesOpen } = useConsent()

  if (!ready) return null

  if (hasChosen) {
    return (
      <button
        type="button"
        onClick={openPreferences}
        data-print-hidden
        className="glass fixed bottom-4 left-4 z-40 flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
        aria-label="Preferências de cookies"
      >
        <Cookie className="size-5" aria-hidden />
      </button>
    )
  }

  if (preferencesOpen) return null

  return (
    <section
      role="region"
      aria-label="Aviso de cookies"
      data-print-hidden
      className="glass border-gradient fixed inset-x-0 bottom-0 z-50 border-t border-border p-5 sm:inset-x-auto sm:bottom-4 sm:left-4 sm:max-w-md sm:rounded-2xl sm:border"
    >
      <div className="flex items-start gap-3">
        <Cookie className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-base font-semibold">Sua privacidade</h2>
            <button
              type="button"
              onClick={rejectAll}
              className="-mt-1 -mr-1 rounded-md p-1 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
              aria-label="Fechar e recusar cookies não essenciais"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Utilizamos cookies essenciais para o funcionamento do site e, com a sua autorização, cookies de
            análise e marketing para melhorar sua experiência. Você pode aceitar, recusar ou personalizar suas
            escolhas a qualquer momento. Saiba mais na nossa{' '}
            <Link href="/politica-de-cookies" className="text-foreground underline underline-offset-4">
              Política de Cookies
            </Link>{' '}
            e{' '}
            <Link href="/politica-de-privacidade" className="text-foreground underline underline-offset-4">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button type="button" className={btn} onClick={acceptAll}>
              Aceitar todos
            </button>
            <button type="button" className={btn} onClick={rejectAll}>
              Recusar não essenciais
            </button>
            <button type="button" className={btn} onClick={openPreferences}>
              Personalizar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
