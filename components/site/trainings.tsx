import Image from 'next/image'
import { trainingPhotos, trainings } from '@/data/content'
import { whatsappUrl } from '@/config/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Trainings() {
  return (
    <section id="treinamentos" aria-labelledby="treinamentos-title" className="relative overflow-hidden border-y border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="treinamentos-title"
            eyebrow="Treinamentos"
            title="Capacitação que muda comportamento no campo"
            description="Conteúdo técnico com linguagem simples, exemplos reais da operação, avaliações e registros completos para auditoria."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {trainings.map((t, i) => (
              <Reveal as="li" key={t.title} delay={(i % 2) * 0.06} className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4">
                <t.icon className="size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm font-medium leading-snug">{t.title}</span>
              </Reveal>
            ))}
          </ul>
          <a
            href={whatsappUrl('Olá! Gostaria de informações sobre treinamentos e reciclagens de NRs.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-fit items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Agendar treinamento
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {trainingPhotos.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.08} className={i % 2 === 1 ? 'translate-y-8' : ''}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
