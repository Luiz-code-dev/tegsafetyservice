'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const poses = [
  { src: '/teg/teg-scan.png', label: 'Identifica', text: 'Mapeia perigos e avalia riscos antes que virem acidentes.' },
  { src: '/teg/teg-walk.png', label: 'Acompanha', text: 'Está em campo, ao lado da operação, todos os dias.' },
  { src: '/teg/teg-ball.png', label: 'Treina', text: 'Transforma normas em hábitos com treinamentos práticos.' },
  { src: '/teg/teg-thumbs.png', label: 'Garante', text: 'Entrega conformidade legal e equipes que voltam bem para casa.' },
] as const

export function GuardianSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % poses.length), 4000)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <section id="guardiao" aria-labelledby="guardiao-titulo" className="py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <SectionHeading
            id="guardiao-titulo"
            eyebrow="Conheça o Teg"
            title="O guardião da segurança na sua operação"
            description="O Teg representa o jeito T&G de trabalhar: atento, presente e comprometido com pessoas seguras e resultados sustentáveis."
          />
          <ul
            className="flex flex-col gap-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {poses.map((p, i) => (
              <li key={p.label}>
                <button
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  className={cn(
                    'flex w-full flex-col gap-1 rounded-xl border px-4 py-3 text-left transition-colors',
                    active === i ? 'border-primary/60 bg-primary/10' : 'border-border hover:border-primary/40',
                  )}
                >
                  <span className="text-sm font-semibold">{p.label}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{p.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[704/384] overflow-hidden rounded-3xl border border-border bg-[#0a0f0d] lg:w-1/2">
          {poses.map((p, i) => (
            <Image
              key={p.src}
              src={p.src}
              alt={active === i ? `Teg, mascote da T&G, ilustrando: ${p.label}` : ''}
              aria-hidden={active !== i}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={cn(
                'object-contain transition-all duration-700',
                active === i ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
