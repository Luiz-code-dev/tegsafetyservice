'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { cookieCategories } from '@/config/cookies'
import type { ConsentCategories } from '@/config/privacy'
import { ChevronDown } from 'lucide-react'
import { useConsent } from './consent-provider'

const btn =
  'inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-border bg-secondary px-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function PreferencesModal() {
  const { preferencesOpen, closePreferences, categories, save, acceptAll, rejectAll } = useConsent()
  const [draft, setDraft] = useState<ConsentCategories>(categories)

  useEffect(() => {
    if (preferencesOpen) setDraft(categories)
  }, [preferencesOpen, categories])

  return (
    <Dialog open={preferencesOpen} onOpenChange={(open) => !open && closePreferences()}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto border border-border bg-card p-6 sm:max-w-xl">
        <div className="flex flex-col gap-1.5 pr-6">
          <DialogTitle className="font-heading text-xl font-semibold">Preferências de Cookies</DialogTitle>
          <DialogDescription className="leading-relaxed">
            Escolha quais categorias você autoriza. Cookies estritamente necessários estão sempre ativos.
          </DialogDescription>
        </div>

        <ul className="flex flex-col gap-3">
          {cookieCategories.map((cat) => {
            const id = `consent-${cat.id}`
            return (
              <li key={cat.id} className="rounded-xl border border-border bg-background/40 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor={id} className="text-sm font-semibold text-foreground">
                      {cat.title}
                    </label>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <Switch
                      id={id}
                      checked={cat.required ? true : draft[cat.id]}
                      disabled={cat.required}
                      onCheckedChange={(v) => setDraft((d) => ({ ...d, [cat.id]: Boolean(v) }))}
                      aria-label={cat.title}
                    />
                    {cat.required && <span className="font-mono text-[11px] text-primary">Sempre ativo</span>}
                  </div>
                </div>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer list-none items-center gap-1 text-xs font-medium text-primary">
                    Ver cookies
                    <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <ul className="mt-2 flex flex-col gap-2">
                    {cat.cookies.map((c) => (
                      <li key={c.name} className="rounded-lg bg-muted/60 p-3 text-xs leading-relaxed">
                        <p className="font-mono text-foreground">{c.name}</p>
                        <p className="text-muted-foreground">
                          {c.provider} · {c.purpose} · {c.duration}
                        </p>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" className={btn} onClick={() => save(draft)}>
            Salvar preferências
          </button>
          <button type="button" className={btn} onClick={acceptAll}>
            Aceitar todos
          </button>
          <button type="button" className={btn} onClick={rejectAll}>
            Recusar todos
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
