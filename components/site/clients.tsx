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
        <ul className="grid gap-4 md:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={i * 0.08}
              className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
            >
              {c.hasLogo ? (
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={180}
                  height={72}
                  className="h-16 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              ) : (
                <>
                  <Building className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />
                  <p className="font-heading text-lg font-semibold leading-snug text-balance">{c.name}</p>
                </>
              )}
              {c.servico && <p className="text-sm text-muted-foreground">{c.servico}</p>}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
