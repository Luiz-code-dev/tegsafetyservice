'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun } from 'lucide-react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navItems, whatsappUrl } from '@/config/site'
import { useConsent } from '@/components/consent/consent-provider'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

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
      className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
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
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'glass border-b border-border' : 'bg-transparent',
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Logo className="h-11 md:h-12" priority />

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            Solicitar Orçamento
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground xl:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-border bg-card p-6">
              <SheetTitle className="font-heading text-lg">Menu</SheetTitle>
              <nav aria-label="Menu móvel">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
              >
                Solicitar Orçamento
              </a>
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
