'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { heroStats } from '@/data/content'
import { siteConfig, whatsappUrl } from '@/config/site'
import { WhatsAppIcon } from './whatsapp-icon'

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setDisplay(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value, reduce])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])

  const words = ['Segurança', 'do', 'Trabalho', 'em', 'nível', 'de']

  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-20 md:pt-24"
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y }}>
        <Image
          src="/images/hero-porto.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-[70%_center]"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--background)_8%,color-mix(in_oklab,var(--background)_75%,transparent)_45%,color-mix(in_oklab,var(--background)_35%,transparent))]"
      />
      <div aria-hidden className="bg-blueprint absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-10 md:px-6 md:pb-14">
        <div className="flex max-w-4xl flex-col gap-6">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase"
          >
            <span className="relative flex size-2">
              <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-primary" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Prontidão 24/7
          </motion.p>

          <h1 id="hero-title" className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="text-glow inline-block text-primary"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              excelência.
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
          >
            Consultoria, gestão de riscos, treinamentos, resgate técnico e atendimento pré-hospitalar para empresas
            que tratam a vida como prioridade.{' '}
            <span className="text-foreground">{siteConfig.slogan}.</span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contato"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Fale com um especialista
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <WhatsAppIcon className="size-5 text-primary" />
              Tire dúvidas no WhatsApp
            </a>
          </motion.div>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="glass flex flex-col gap-1 p-4 md:p-6">
              <dt className="order-2 text-xs leading-snug text-muted-foreground md:text-sm">{s.label}</dt>
              <dd className="order-1 text-2xl font-semibold text-foreground md:text-4xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <a href="#empresa" className="mx-auto hidden flex-col items-center gap-2 text-xs text-muted-foreground md:flex" aria-label="Rolar para a próxima seção">
          <ArrowDown className="size-4 animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  )
}
