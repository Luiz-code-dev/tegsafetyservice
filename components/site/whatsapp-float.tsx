'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Mail, MessageSquareText, Phone, X } from 'lucide-react'
import { siteConfig, whatsappUrl } from '@/config/site'
import { cn } from '@/lib/utils'
import { WhatsAppIcon } from './whatsapp-icon'
import { InstagramIcon } from './instagram-icon'

const channels = [
  {
    label: 'WhatsApp',
    detail: siteConfig.contact.whatsappDisplay,
    href: whatsappUrl(),
    external: true,
    Icon: WhatsAppIcon,
  },
  {
    label: 'Ligar agora',
    detail: siteConfig.contact.whatsappDisplay,
    href: `tel:${siteConfig.contact.phoneTel}`,
    external: false,
    Icon: Phone,
  },
  {
    label: 'E-mail',
    detail: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
    Icon: Mail,
  },
  {
    label: 'Instagram',
    detail: siteConfig.social.instagramHandle,
    href: siteConfig.social.instagram,
    external: true,
    Icon: InstagramIcon,
  },
  {
    label: 'Formulário',
    detail: 'Solicite um diagnóstico',
    href: '/#contato',
    external: false,
    Icon: MessageSquareText,
  },
] as const

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <div ref={rootRef} data-print-hidden className="fixed right-5 bottom-5 z-40 flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3">
      <ul
        id={menuId}
        aria-label="Canais de contato"
        className={cn(
          'flex flex-col items-end gap-2 transition-all duration-200',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        {channels.map(({ label, detail, href, external, Icon }) => (
          <li key={label}>
            <a
              href={href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-3 rounded-xl border border-border bg-card py-2 pr-2 pl-4 text-card-foreground shadow-lg transition-colors hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="flex flex-col text-right leading-tight">
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-xs text-muted-foreground">{detail}</span>
              </span>
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="size-4" aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Fechar opções de contato' : 'Abrir opções de contato'}
        onClick={() => setOpen((v) => !v)}
        className="relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {!open && <span aria-hidden className="animate-pulse-ring absolute inset-0 rounded-full bg-primary" />}
        {open ? <X className="relative size-6" aria-hidden /> : <WhatsAppIcon className="relative size-7" />}
      </button>
    </div>
  )
}
