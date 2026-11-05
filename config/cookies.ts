import type { ConsentCategory } from './privacy'

export type CookieInfo = {
  name: string
  provider: string
  purpose: string
  duration: string
}

export type CookieCategoryInfo = {
  id: ConsentCategory
  title: string
  description: string
  required?: boolean
  cookies: CookieInfo[]
  /** Prefixes removed from the browser when consent for the category is revoked. */
  removePrefixes: string[]
}

export const cookieCategories: CookieCategoryInfo[] = [
  {
    id: 'necessary',
    title: 'Estritamente necessários',
    description:
      'Essenciais para o funcionamento e a segurança do site. Guardam suas escolhas de consentimento e protegem os formulários contra spam.',
    required: true,
    removePrefixes: [],
    cookies: [
      {
        name: 'teg_consent',
        provider: 'T&G Safety Service',
        purpose: 'Armazena suas escolhas de consentimento de cookies.',
        duration: '12 meses',
      },
      {
        name: 'cf_clearance / __cf_bm',
        provider: 'Cloudflare (Turnstile)',
        purpose: 'Proteção anti-spam e contra uso automatizado dos formulários.',
        duration: 'Sessão a 30 minutos',
      },
    ],
  },
  {
    id: 'preferences',
    title: 'Preferências / funcionais',
    description: 'Lembram configurações escolhidas por você, como o tema claro ou escuro.',
    removePrefixes: ['theme'],
    cookies: [
      {
        name: 'theme',
        provider: 'T&G Safety Service',
        purpose: 'Lembra o tema (claro/escuro) selecionado.',
        duration: 'Persistente (armazenamento local)',
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Análise / desempenho',
    description:
      'Ajudam a entender, de forma estatística, como o site é usado, para melhorar conteúdo e desempenho.',
    removePrefixes: ['_ga', '_gid', '_gat'],
    cookies: [
      {
        name: '_ga',
        provider: 'Google Analytics 4',
        purpose: 'Distingue visitantes de forma estatística.',
        duration: '2 anos',
      },
      {
        name: '_ga_*',
        provider: 'Google Analytics 4',
        purpose: 'Mantém o estado da sessão de análise.',
        duration: '2 anos',
      },
      {
        name: 'Vercel Analytics',
        provider: 'Vercel',
        purpose: 'Métricas agregadas de visitas e desempenho, sem cookies de rastreamento.',
        duration: 'Não armazena cookies',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description:
      'Permitem medir campanhas e exibir anúncios mais relevantes em outras plataformas.',
    removePrefixes: ['_fbp', '_fbc', '_gcl'],
    cookies: [
      {
        name: '_fbp',
        provider: 'Meta Pixel',
        purpose: 'Mede a eficácia de anúncios na Meta.',
        duration: '3 meses',
      },
      {
        name: '_gcl_au',
        provider: 'Google Ads',
        purpose: 'Mede conversões de campanhas do Google Ads.',
        duration: '3 meses',
      },
    ],
  },
]
