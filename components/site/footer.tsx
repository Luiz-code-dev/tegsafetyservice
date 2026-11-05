'use client'

import Link from 'next/link'
import { navItems, siteConfig, whatsappUrl } from '@/config/site'
import { services } from '@/data/services'
import { useConsent } from '@/components/consent/consent-provider'
import { Logo } from './logo'

const legalLinks = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Política de Cookies', href: '/politica-de-cookies' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Direitos do Titular (LGPD)', href: '/direitos-do-titular' },
]

export function Footer() {
  const { openPreferences } = useConsent()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo variant="full" className="w-fit" />
          <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.slogan}.</p>
        </div>

        <nav aria-label="Rodapé – navegação" className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold">Navegação</h2>
          <ul className="flex flex-col gap-2">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-muted-foreground hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold">Serviços</h2>
          <ul className="flex flex-col gap-2">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href="/#servicos" className="text-sm text-muted-foreground hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold">Contato</h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-primary">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{siteConfig.contact.coverage}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {year} {siteConfig.name}. CNPJ {siteConfig.company.cnpj}. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={openPreferences} className="hover:text-primary">
                Preferências de cookies
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
