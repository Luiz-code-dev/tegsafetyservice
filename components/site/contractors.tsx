import Image from 'next/image'
import { contractorSteps } from '@/data/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Contractors() {
  return (
    <section id="terceirizadas" aria-labelledby="terceirizadas-title" className="border-y border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="terceirizadas-title"
            eyebrow="Gestão de Terceirizadas"
            title="Contratadas seguras do portão ao fim da atividade"
            description="Um fluxo estruturado que reduz a exposição jurídica da contratante e garante que cada prestador entre na planta preparado."
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/terceirizadas-portaria.png"
              alt="Controle de acesso de prestadores de serviço em portaria industrial"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="relative flex flex-col gap-4 before:absolute before:top-6 before:bottom-6 before:left-6 before:w-px before:bg-gradient-to-b before:from-primary before:to-primary/0">
          {contractorSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="relative flex gap-5">
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background font-mono text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-1 flex-col gap-1 rounded-xl border border-border bg-background/60 p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
