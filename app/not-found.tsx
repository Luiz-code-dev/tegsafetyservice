import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="overflow-hidden rounded-3xl border border-border bg-[#0a0f0d]">
        <Image
          src="/teg/teg-scan.png"
          alt="Teg, o mascote da T&G, procurando a página com uma lupa"
          width={704}
          height={384}
          priority
          className="h-48 w-auto object-cover md:h-64"
        />
      </div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">Erro 404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        Área não sinalizada
      </h1>
      <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">
        O Teg inspecionou tudo, mas esta página não existe ou foi movida. Volte para um caminho seguro.
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
