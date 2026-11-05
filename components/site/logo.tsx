import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

type Variant = 'lockup' | 'full' | 'icon' | 'responsive'

const assets = {
  lockup: { light: '/brand/tg-logo-lockup.png', dark: '/brand/tg-logo-lockup-dark.png', w: 1332, h: 694 },
  full: { light: '/brand/tg-logo-full.png', dark: '/brand/tg-logo-full-dark.png', w: 1332, h: 920 },
  icon: { light: '/brand/tg-logo-icon.png', dark: '/brand/tg-logo-icon-dark.png', w: 1332, h: 534 },
} as const

function ThemedImage({
  kind,
  className,
  priority,
  alt,
}: {
  kind: keyof typeof assets
  className?: string
  priority?: boolean
  alt: string
}) {
  const a = assets[kind]
  return (
    <>
      <Image src={a.light} alt={alt} width={a.w} height={a.h} priority={priority} className={cn('w-auto dark:hidden', className)} />
      <Image src={a.dark} alt={alt} width={a.w} height={a.h} priority={priority} className={cn('hidden w-auto dark:block', className)} />
    </>
  )
}

export function Logo({
  variant = 'lockup',
  className,
  imageClassName,
  href = '/#inicio',
  priority,
}: {
  variant?: Variant
  className?: string
  imageClassName?: string
  href?: string | null
  priority?: boolean
}) {
  const label = `${siteConfig.name} – ${siteConfig.tagline}`

  const content =
    variant === 'responsive' ? (
      <>
        <span className="flex md:hidden">
          <ThemedImage kind="icon" alt={label} priority={priority} className="h-8" />
        </span>
        <span className="hidden md:flex">
          <ThemedImage kind="lockup" alt={label} priority={priority} className="h-10" />
        </span>
      </>
    ) : (
      <ThemedImage kind={variant} alt={label} priority={priority} className={imageClassName ?? 'h-10'} />
    )

  if (href === null) {
    return <span className={cn('inline-flex shrink-0', className)}>{content}</span>
  }

  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} – página inicial`}
      className={cn(
        'inline-flex shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
        className,
      )}
    >
      {content}
    </Link>
  )
}
