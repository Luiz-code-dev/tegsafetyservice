import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { LogoMark } from './logo-mark'

type Variant = 'horizontal' | 'full' | 'icon'

export function Logo({
  variant = 'horizontal',
  className,
  href = '/#inicio',
}: {
  variant?: Variant
  className?: string
  href?: string | null
}) {
  const content =
    variant === 'icon' ? (
      <LogoMark className="h-9" />
    ) : variant === 'horizontal' ? (
      <span className="flex h-9 items-center gap-2.5 md:h-10">
        <LogoMark className="h-full" />
        <span className="flex flex-col justify-center border-l border-border pl-2.5 font-heading text-xs leading-tight font-bold tracking-widest uppercase">
          <span className="text-[var(--logo-green)]">Safety</span>
          <span className="text-[var(--logo-text)]">Service</span>
        </span>
      </span>
    ) : (
      <span className="flex flex-col items-start gap-2">
        <LogoMark className="h-16" />
        <span className="font-heading text-xl leading-none font-extrabold tracking-wide uppercase">
          <span className="text-[var(--logo-green)]">Safety</span> <span className="text-[var(--logo-text)]">Service</span>
        </span>
        <span className="text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">{siteConfig.tagline}</span>
      </span>
    )

  const label = `${siteConfig.name} – ${siteConfig.tagline}`

  if (href === null) {
    return (
      <span className={cn('inline-flex', className)} role="img" aria-label={label}>
        {content}
      </span>
    )
  }

  return (
    <Link
      href={href}
      aria-label={`${label} – página inicial`}
      className={cn('inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring', className)}
    >
      {content}
    </Link>
  )
}
