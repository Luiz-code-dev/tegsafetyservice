import { whatsappUrl } from '@/config/site'
import { WhatsAppIcon } from './whatsapp-icon'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      data-print-hidden
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span aria-hidden className="animate-pulse-ring absolute inset-0 rounded-full bg-primary" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  )
}
