export const siteConfig = {
  name: 'T&G Safety Service',
  shortName: 'T&G',
  slogan: 'Pessoas Seguras, Resultados Sustentáveis',
  tagline: 'Soluções em Segurança do Trabalho',
  description:
    'Engenharia e Segurança do Trabalho em Salvador – BA: consultoria SST, PGR, APR, inspeções, treinamentos NR-35, NR-33, NR-10, bombeiro civil, APH para eventos e resgate técnico.',
  url: 'https://tegsafetyservice.com.br',
  locale: 'pt_BR',
  contact: {
    email: 'contato@tegsafetyservice.com.br',
    whatsapp: '5571996739533',
    whatsappDisplay: '(71) 99673-9533',
    city: 'Salvador',
    state: 'BA',
    cityDisplay: 'Salvador – BA',
    geo: { lat: -12.9714, lng: -38.5014 },
  },
  whatsappMessage:
    'Olá! Vim pelo site e gostaria de um diagnóstico de SST para minha empresa.',
  company: {
    legalName: '[RAZÃO SOCIAL]',
    cnpj: '[XX.XXX.XXX/0001-XX]',
    address: '[ENDEREÇO COMPLETO]',
  },
  dpo: {
    name: '[NOME DO ENCARREGADO]',
    email: 'contato@tegsafetyservice.com.br',
  },
  social: {
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
} as const

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export const navItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'A Empresa', href: '/#empresa' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Normas (NRs)', href: '/#normas' },
  { label: 'Treinamentos', href: '/#treinamentos' },
  { label: 'Emergência & Resgate', href: '/#emergencia' },
  { label: 'Terceirizadas', href: '/#terceirizadas' },
  { label: 'Contato', href: '/#contato' },
] as const
