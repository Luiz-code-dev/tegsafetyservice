'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useAnimate, useInView, useReducedMotion } from 'motion/react'
import { mascotAssets } from '@/config/site'

export function MascotBand() {
  const [scope, animate] = useAnimate<HTMLDivElement>()
  const inView = useInView(scope, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const played = useRef(false)

  useEffect(() => {
    if (!inView || played.current || reduce) return
    played.current = true

    const run = async () => {
      await animate('[data-teg]', { x: ['-60vw', '0vw'], y: [0, -6, 0, -6, 0] }, { duration: 1.6, ease: 'easeOut' })
      await animate('[data-teg]', { scale: 1.35, y: -24 }, { duration: 0.5, ease: 'backOut' })
      await animate('[data-cone]', { opacity: [0, 0.7, 0.7, 0], rotate: [-35, 35] }, { duration: 1.4, ease: 'easeInOut' })
      await animate('[data-teg]', { scale: 1, y: 0 }, { duration: 0.35 })
      await animate('[data-teg]', { x: '60vw', rotate: 720 }, { duration: 1.1, ease: 'easeIn' })
    }
    run()
  }, [inView, reduce, animate])

  return (
    <section aria-label="Teg, o mascote da T&G" className="relative py-10">
      <div ref={scope} className="relative mx-auto flex h-40 max-w-7xl items-center justify-center rounded-3xl border border-border bg-card md:h-48">
        <div
          data-cone
          aria-hidden
          className="pointer-events-none absolute bottom-1/2 left-1/2 h-72 w-40 origin-bottom -translate-x-1/2 bg-gradient-to-t from-primary/60 to-transparent opacity-0 [clip-path:polygon(50%_100%,0_0,100%_0)]"
        />
        <div data-teg className="relative z-10" style={reduce ? undefined : { transform: 'translateX(-60vw)' }}>
          <Image src={mascotAssets.base} alt="Teg, o mascote da T&G" width={220} height={220} className="h-44 w-auto md:h-56" />
        </div>
      </div>
    </section>
  )
}
