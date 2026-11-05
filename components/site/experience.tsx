import Image from 'next/image'
import { experience, experienceImage } from '@/data/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-5 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-3">
          <SectionHeading
            id="experiencia-title"
            eyebrow="Experiência Operacional"
            title="Vivência prática nos ambientes onde o risco é real"
            description="Conhecemos o chão da operação e adaptamos cada solução à rotina do ambiente."
          />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {experience.map((e, i) => (
              <Reveal
                as="li"
                key={e.title}
                delay={(i % 4) * 0.05}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
              >
                <e.icon className="size-5 text-primary" aria-hidden />
                <h3 className="text-sm font-semibold leading-snug text-balance">{e.title}</h3>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image src={experienceImage.src} alt={experienceImage.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
