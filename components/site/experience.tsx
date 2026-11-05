import Image from 'next/image'
import { experience } from '@/data/content'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="experiencia-title"
          eyebrow="Experiência Operacional"
          title="Vivência prática em ambientes de alto risco"
          description="Conhecemos o chão da operação: portos, silos, correias transportadoras, eletricidade, altura e espaços confinados."
        />
        <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] lg:grid-cols-4">
          {experience.map((e, i) => (
            <Reveal
              as="li"
              key={e.title}
              delay={(i % 4) * 0.05}
              className={cn('group relative overflow-hidden rounded-2xl border border-border', e.span)}
            >
              <Image
                src={e.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <h3 className="absolute right-4 bottom-4 left-4 text-sm font-semibold text-balance md:text-base">{e.title}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
