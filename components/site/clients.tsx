import Image from 'next/image'
import { Building } from 'lucide-react'
import { clients } from '@/data/clients'
import { Reveal } from './reveal'

export function Clients() {
  return (
    <section id="clientes" aria-labelledby="clientes-title" className="bg-section py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
        <h2 id="clientes-title" className="text-center font-heading text-2xl font-semibold text-balance md:text-3xl">
          Quem confia na T&amp;G
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {clients.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={i * 0.08}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                {c.hasLogo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={140}
                    height={56}
                    className="h-12 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <Building
                      className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden
                    />
                  </span>
                )}
                <div className="flex flex-col">
                  <h3 className="font-heading text-lg font-semibold leading-snug text-balance">{c.name}</h3>
                  <p className="text-sm font-medium text-primary">{c.servico}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{c.relato}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
