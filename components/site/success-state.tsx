'use client'

import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export function SuccessState({ onReset, className }: { onReset?: () => void; className?: string }) {
  const reduce = useReducedMotion()

  return (
    <div role="status" className={cn('flex flex-col items-center justify-center gap-4 text-center', className)}>
      <motion.div
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex size-24 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
      >
        <svg viewBox="0 0 52 52" className="size-14 text-primary" aria-hidden>
          <motion.circle
            cx="26"
            cy="26"
            r="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <motion.path
            d="M15 27 l7 7 l15 -16"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>
      <h3 className="text-2xl font-semibold text-balance">Mensagem enviada!</h3>
      <p className="max-w-sm leading-relaxed text-muted-foreground text-pretty">
        Obrigado pelo contato. Você receberá uma confirmação por e-mail e nossa equipe retornará em breve.
      </p>
      {onReset && (
        <button type="button" onClick={onReset} className="text-sm font-medium text-primary underline underline-offset-4">
          Enviar outra mensagem
        </button>
      )}
    </div>
  )
}
