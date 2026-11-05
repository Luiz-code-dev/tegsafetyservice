import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  id?: string
}) {
  return (
    <Reveal className={cn('flex max-w-3xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center')}>
      <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
        <span className="h-px w-8 bg-primary" aria-hidden />
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && <p className="text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  )
}
