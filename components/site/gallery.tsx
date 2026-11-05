'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { gallery, galleryCategories, type GalleryCategory } from '@/data/gallery'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | 'Todas'>('Todas')
  const [index, setIndex] = useState<number | null>(null)
  const items = filter === 'Todas' ? gallery : gallery.filter((g) => g.category === filter)
  const current = index !== null ? items[index] : null

  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length))

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
        <SectionHeading id="galeria-title" eyebrow="Galeria" title="Nosso trabalho em campo" />

        <div role="group" aria-label="Filtrar galeria" className="flex flex-wrap gap-2">
          {(['Todas', ...galleryCategories] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring',
                filter === c ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="columns-1 gap-3 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <li key={g.src + i} className="mb-3 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  'group relative block w-full overflow-hidden rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]',
                )}
                aria-label={`Ampliar imagem: ${g.label}`}
              >
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span aria-hidden className="glass absolute bottom-3 left-3 rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-wider text-primary uppercase">{g.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          className="max-w-[95vw] border border-border bg-card p-2 sm:max-w-5xl"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') step(1)
            if (e.key === 'ArrowLeft') step(-1)
          }}
        >
          {current && (
            <figure className="flex flex-col gap-2">
              <DialogTitle className="sr-only">{current.label}</DialogTitle>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image src={current.src} alt={current.alt} fill sizes="95vw" className="object-contain" />
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-2 pb-1">
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] tracking-wider text-primary uppercase">{current.label}</span>
                  {current.detail && <span className="text-sm text-muted-foreground">{current.detail}</span>}
                </span>
                <span className="flex gap-2">
                  <button type="button" onClick={() => step(-1)} className="flex size-9 items-center justify-center rounded-lg border border-border" aria-label="Imagem anterior">
                    <ChevronLeft className="size-4" aria-hidden />
                  </button>
                  <button type="button" onClick={() => step(1)} className="flex size-9 items-center justify-center rounded-lg border border-border" aria-label="Próxima imagem">
                    <ChevronRight className="size-4" aria-hidden />
                  </button>
                </span>
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
