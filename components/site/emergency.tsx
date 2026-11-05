import { ArrowRight, PartyPopper, Siren } from 'lucide-react'
import { Reveal } from './reveal'

export function Emergency() {
  return (
    <section id="emergencia" aria-labelledby="emergencia-title" className="bg-section py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:px-6">
        <Reveal className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft md:flex-row md:items-center md:justify-between md:p-10">
          <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-emergency" />
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emergency/10 text-emergency">
              <Siren className="size-6" aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <span className="w-fit rounded-full bg-emergency px-2.5 py-0.5 font-mono text-xs font-semibold tracking-wider text-primary-foreground uppercase">
                24/7
              </span>
              <h2 id="emergencia-title" className="font-heading text-2xl font-semibold text-balance md:text-3xl">
                Prontidão 24/7 para operações e eventos
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Equipes de bombeiro civil, resgate técnico e APH mobilizadas para a sua operação. Veja o escopo de cada
                uma em Serviços.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-emergency px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Solicitar equipe
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </Reveal>

        <Reveal
          delay={0.08}
          className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <PartyPopper className="size-6" aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs tracking-widest text-primary uppercase">Eventos</p>
              <h3 className="font-heading text-xl font-semibold text-balance md:text-2xl">
                Segurança discreta para eventos de alto padrão
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Postura profissional, uniformes alinhados ao padrão do seu evento e presença que protege sem chamar
                atenção.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Orçar para meu evento
          </a>
        </Reveal>
      </div>
    </section>
  )
}
