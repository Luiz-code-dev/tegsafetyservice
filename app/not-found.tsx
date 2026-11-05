import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'

const tape =
  'h-6 w-[140%] -translate-x-[15%] bg-[repeating-linear-gradient(45deg,var(--warning,#facc15)_0_18px,var(--background)_18px_36px)] opacity-80'

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 -rotate-3">
        <div className={tape} />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-16 rotate-3">
        <div className={tape} />
      </div>

      <div className="flex size-24 items-center justify-center rounded-2xl border border-border bg-card">
        <ShieldAlert className="size-12 text-primary" aria-hidden />
      </div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">Erro 404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">Área não sinalizada</h1>
      <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">
        Esta página não existe ou foi movida. Volte para um caminho seguro.
      </p>
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Voltar para o início
      </Link>
    </main>
  )
}
