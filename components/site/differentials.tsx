import { CheckCircle2 } from 'lucide-react'
import { differentials, processSteps } from '@/data/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-blueprint border-y border-border py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            id="diferenciais-title"
            eyebrow="Diferenciais"
            title="Por que empresas confiam na T&G"
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {differentials.map((d, i) => (
              <Reveal as="li" key={d} delay={(i % 2) * 0.06} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm leading-relaxed font-medium">{d}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="Como trabalhamos" title="Um processo claro, do primeiro contato ao acompanhamento" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.07} className="relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
                <span className="font-mono text-xs text-primary">Etapa {i + 1}</span>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                {i < processSteps.length - 1 && (
                  <span aria-hidden className="absolute top-1/2 -right-3 hidden h-px w-2 bg-primary lg:block" />
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
