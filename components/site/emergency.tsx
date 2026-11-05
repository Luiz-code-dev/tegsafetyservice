import Image from 'next/image'
import { Siren } from 'lucide-react'
import { emergencyBlocks } from '@/data/content'
import { siteConfig, whatsappUrl } from '@/config/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Emergency() {
  return (
    <section id="emergencia" aria-labelledby="emergencia-title" className="relative isolate overflow-hidden py-24 md:py-32">
      <Image src="/images/resgate-tecnico.png" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background" />
      <div aria-hidden className="hazard-tape absolute inset-x-0 top-0 h-2 opacity-80" />

      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="emergencia-title"
            eyebrow="Emergência & Resgate"
            title="Prontidão para os momentos que não admitem erro"
            description="Equipes qualificadas para prevenção, resposta e resgate em operações industriais, obras e eventos de alto padrão."
          />
          <a
            href={whatsappUrl('URGENTE: preciso de equipe de emergência/resgate.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 shrink-0 items-center gap-3 rounded-xl border border-alert/50 bg-alert/10 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-alert/20"
          >
            <span className="relative flex size-3">
              <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-alert" />
              <span className="relative inline-flex size-3 rounded-full bg-alert" />
            </span>
            <Siren className="size-4 text-alert" aria-hidden />
            Plantão 24/7 · {siteConfig.contact.whatsappDisplay}
          </a>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {emergencyBlocks.map((b, i) => (
            <Reveal as="li" key={b.title} delay={(i % 3) * 0.08} className="glass group flex flex-col gap-4 p-6 transition-colors hover:bg-accent/60 md:p-8">
              <b.icon className="size-7 text-primary transition-transform group-hover:scale-110" aria-hidden />
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
          <div className="relative aspect-[16/10] md:aspect-auto">
            <Image
              src="/images/eventos-alto-padrao.png"
              alt="Posto de bombeiro civil e APH em evento corporativo"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-8 md:p-10">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">Eventos</p>
            <h3 className="text-2xl font-semibold text-balance">Segurança discreta para eventos de alto padrão</h3>
            <p className="leading-relaxed text-muted-foreground">
              Bombeiros civis, socorristas, enfermagem e ambulância com postura profissional e uniformes alinhados ao
              padrão do seu evento. Planejamento de rotas de fuga, plano de emergência e apoio ao AVCB.
            </p>
            <a
              href={whatsappUrl('Olá! Preciso de equipe de segurança/APH para um evento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 w-fit items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Orçar para meu evento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
