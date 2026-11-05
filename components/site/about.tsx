import Image from 'next/image'
import { pillars } from '@/data/content'
import { siteConfig } from '@/config/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="empresa" aria-labelledby="empresa-title" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="empresa-title"
            eyebrow="A Empresa"
            title={
              <>
                Prevenção que protege <span className="text-primary">pessoas</span> e sustenta{' '}
                <span className="text-primary">resultados</span>.
              </>
            }
            description="A T&G Safety Service é especializada em Engenharia e Segurança do Trabalho, com sede em Salvador – BA e atendimento em todo o Brasil. Atuamos lado a lado com a operação para transformar normas em rotinas práticas, reduzir riscos e garantir conformidade legal, com atendimento próximo e soluções adaptadas à realidade de cada empresa."
          />
          <ul className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3} className="flex flex-col gap-2 rounded-xl border border-primary/40 bg-accent/40 p-5">
            <p className="font-mono text-xs tracking-wider text-primary uppercase">Responsável Técnico</p>
            <p className="font-heading text-lg font-semibold">Eng. {siteConfig.responsavelTecnico.nome}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.responsavelTecnico.titulo} · {siteConfig.responsavelTecnico.conselho}{' '}
              {siteConfig.responsavelTecnico.registro} · RNP {siteConfig.responsavelTecnico.rnp} · Registro{' '}
              {siteConfig.responsavelTecnico.situacao.toLowerCase()} desde 2013
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="border-gradient relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/equipe-institucional.png"
              alt="Equipe da T&G Safety Service com uniformes e EPIs em área industrial"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figure className="glass absolute -bottom-6 left-4 right-4 rounded-xl border border-border p-5 md:left-auto md:-right-6 md:w-80">
            <blockquote className="font-heading text-lg leading-snug font-semibold text-balance">
              &ldquo;{siteConfig.slogan}.&rdquo;
            </blockquote>
            <figcaption className="mt-2 font-mono text-xs tracking-wider text-primary uppercase">Nosso compromisso</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
