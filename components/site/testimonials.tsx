import { Quote } from 'lucide-react'
import { testimonials } from '@/data/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading id="depoimentos-title" eyebrow="Depoimentos" title="O que dizem nossos clientes" align="center" />
        <ul className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-background/60 p-6">
                <Quote className="size-6 text-primary" aria-hidden />
                <blockquote className="flex-1 leading-relaxed text-pretty">{t.quote}</blockquote>
                <figcaption className="flex flex-col border-t border-border pt-4">
                  <span className="text-sm font-semibold">{t.author}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
