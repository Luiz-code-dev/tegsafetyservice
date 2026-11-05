'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { services, type Service } from '@/data/services'
import { whatsappUrl } from '@/config/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { WhatsAppIcon } from './whatsapp-icon'

export function Services() {
  const [active, setActive] = useState<Service | null>(null)

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-blueprint relative border-y border-border py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="Soluções completas em Saúde e Segurança do Trabalho"
          description="Da gestão documental ao resgate técnico: uma única parceira para toda a jornada de SST da sua empresa."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setActive(s)}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="glass absolute top-3 left-3 flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold text-balance">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                    <Plus className="size-4 transition-transform group-hover:rotate-90" aria-hidden />
                    Ver escopo completo
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90dvh] overflow-y-auto border border-border bg-card p-0 sm:max-w-2xl">
          {active && (
            <>
              <div className="relative aspect-[21/9]">
                <Image src={active.image} alt="" fill sizes="672px" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="flex flex-col gap-5 p-6 pt-0">
                <div className="flex flex-col gap-2">
                  <DialogTitle className="font-heading text-2xl font-semibold">{active.title}</DialogTitle>
                  <DialogDescription className="leading-relaxed">{active.summary}</DialogDescription>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {active.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(`Olá! Tenho interesse no serviço: ${active.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  <WhatsAppIcon className="size-5" />
                  Solicitar este serviço
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
