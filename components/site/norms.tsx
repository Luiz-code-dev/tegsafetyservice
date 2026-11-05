'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { nrs } from '@/data/nrs'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function Norms() {
  const [selected, setSelected] = useState(nrs[nrs.length - 1].code)
  const reduce = useReducedMotion()
  const current = nrs.find((n) => n.code === selected) ?? nrs[0]

  return (
    <section id="normas" aria-labelledby="normas-title" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="normas-title"
          eyebrow="Normas Regulamentadoras"
          title="Domínio técnico das NRs que regem a sua operação"
          description="Selecione uma norma para ver como atuamos. Implantação, treinamento, inspeção e documentação em conformidade com o MTE."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div role="tablist" aria-label="Normas Regulamentadoras" className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-3">
            {nrs.map((n) => {
              const isActive = n.code === selected
              return (
                <button
                  key={n.code}
                  role="tab"
                  type="button"
                  id={`tab-${n.code}`}
                  aria-selected={isActive}
                  aria-controls="nr-panel"
                  onClick={() => setSelected(n.code)}
                  className={cn(
                    'flex h-16 flex-col items-center justify-center rounded-xl border font-mono text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_30px_-8px_var(--primary)]'
                      : 'border-border bg-card text-foreground hover:border-primary/50 hover:text-primary',
                  )}
                >
                  {n.code}
                </button>
              )
            })}
          </div>

          <div
            id="nr-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.code}`}
            aria-live="polite"
            className="border-gradient relative flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl bg-card p-8"
          >
            <span aria-hidden className="pointer-events-none absolute -right-4 -bottom-10 font-mono text-[10rem] leading-none font-bold text-primary/5 select-none">
              {current.code.replace('NR-', '')}
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.code}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col gap-4"
              >
                <p className="font-mono text-sm tracking-widest text-primary">{current.code}</p>
                <h3 className="text-2xl font-semibold text-balance md:text-3xl">{current.title}</h3>
                <p className="max-w-lg leading-relaxed text-muted-foreground">{current.description}</p>
              </motion.div>
            </AnimatePresence>
            <ul className="relative mt-8 flex flex-wrap gap-2">
              {['Diagnóstico', 'Treinamento', 'Inspeção', 'Documentação'].map((t) => (
                <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
