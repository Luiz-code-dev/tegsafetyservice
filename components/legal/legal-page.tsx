import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { LEGAL_UPDATED_AT, LEGAL_VERSION } from '@/config/privacy'

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo" className="pt-28 pb-24">
        <article className="mx-auto flex max-w-3xl flex-col gap-8 px-4 md:px-6">
          <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-4" aria-hidden />
            Voltar ao início
          </Link>
          <header className="flex flex-col gap-3 border-b border-border pb-8">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">Documento legal · v{LEGAL_VERSION}</p>
            <h1 className="font-heading text-4xl font-semibold text-balance md:text-5xl">{title}</h1>
            <p className="leading-relaxed text-muted-foreground">{intro}</p>
            <p className="text-xs text-muted-foreground">Última atualização: {LEGAL_UPDATED_AT}</p>
          </header>
          <div className="legal-prose flex flex-col gap-6">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}
