import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/#inicio"
      className={cn('logo-tile flex items-center rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring', className)}
    >
      <Image
        src="/images/logo-teg.png"
        alt="T&G Safety Service – Soluções em Segurança do Trabalho"
        width={470}
        height={294}
        priority={priority}
        className="h-full w-auto"
      />
    </Link>
  )
}
