'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

/**
 * Vector T&G monogram with safety helmet and swoosh.
 * Colors come from --logo-* tokens so it adapts to light/dark themes.
 * Replace with the official artwork in /public/brand/logo-*.svg when available.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  const uid = useId().replace(/:/g, '')
  const amp = `amp-${uid}`
  const swoosh = `swoosh-${uid}`

  return (
    <svg
      viewBox="0 0 276 152"
      className={cn('h-full w-auto', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={amp} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--logo-steel-from)" />
          <stop offset="1" stopColor="var(--logo-steel-to)" />
        </linearGradient>
        <linearGradient id={swoosh} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3fae5a" stopOpacity="0.2" />
          <stop offset="0.45" stopColor="#3fae5a" />
          <stop offset="1" stopColor="#0b5d3b" />
        </linearGradient>
      </defs>

      {/* T */}
      <g fill="var(--logo-green)">
        <rect x="4" y="16" width="84" height="26" rx="3" />
        <rect x="32" y="16" width="28" height="100" rx="3" />
      </g>

      {/* & */}
      <text
        x="114"
        y="114"
        textAnchor="middle"
        fontFamily="var(--font-heading), Sora, Arial, sans-serif"
        fontWeight="800"
        fontSize="104"
        fill={`url(#${amp})`}
      >
        &amp;
      </text>

      {/* G */}
      <g fill="var(--logo-green)">
        <path
          d="M226.8 26.3 A48 48 0 1 0 248.5 76 L222 76 A24 24 0 1 1 214.5 47 Z"
          fillRule="evenodd"
        />
        <rect x="196" y="60" width="56" height="24" rx="3" />
      </g>

      {/* Helmet */}
      <g>
        <path d="M212 38 C212 14 230 4 246 4 C262 4 272 18 272 38 Z" fill="var(--logo-green)" />
        <path d="M240 6 C236 16 236 28 238 38 L246 38 C244 28 244 16 248 5 Z" fill="var(--background)" opacity="0.35" />
        <rect x="204" y="36" width="72" height="7" rx="3.5" fill="var(--logo-green)" />
      </g>

      {/* Swoosh */}
      <path d="M4 128 C88 156 196 142 270 96 C204 140 98 154 4 136 Z" fill={`url(#${swoosh})`} />
    </svg>
  )
}
