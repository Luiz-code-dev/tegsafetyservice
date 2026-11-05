'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun } from 'lucide-react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navItems, secondaryNavItems, siteConfig, emailUrl, whatsappUrl } from '@/config/site'
import { useConsent } from '@/components/consent/consent-provider'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { InstagramIcon } from './instagram-icon'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { categories } = useConsent()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const toggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    if (!categories.preferences) {
      setTimeout(() => {
        try {
          localStorage.removeItem('theme')
        } catch {}
      }, 0)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
      aria-label={mounted && resolvedTheme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
    >
      {mounted && resolvedTheme === 'light' ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
    </button>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b bg-background/80 backdrop-blur-md transition-colors duration-300',
        scrolled ? 'border-border' : 'border-transparent',
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo variant="responsive" priority />

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${siteConfig.social.instagramHandle}`}
            className="hidden size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring sm:flex"
          >
            <InstagramIcon className="size-4" />
          </a>
          <ThemeToggle />
          <a
            href="/#contato"
            className="hidden h-9 items-center whitespace-nowrap rounded-lg border border-primary/60 px-4 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring xl:inline-flex"
          >
            Fale com um especialista
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground xl:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="gap-8 border-border bg-background p-6 data-[side=right]:w-full data-[side=right]:max-w-none data-[side=right]:sm:max-w-none">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo variant="lockup" imageClassName="h-10" href={null} />
              <nav aria-label="Menu móvel">
                <ul className="flex flex-col gap-1">
                  {[...navItems, ...secondaryNavItems].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block whitespace-nowrap rounded-lg px-3 py-3 font-heading text-2xl text-foreground transition-colors hover:bg-accent hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="/#contato"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground"
                >
                  Fale com um especialista
                </a>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>
                    <a href={emailUrl()} className="break-all hover:text-primary">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                      <InstagramIcon className="size-4" />
                      {siteConfig.social.instagramHandle}
                    </a>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-primary"
        style={{ scaleX: progress }}
      />
    </header>
  )
}
