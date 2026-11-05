export const siteConfig = {
  name: 'T&G Safety Service',
  shortName: 'T&G',
  slogan: 'Pessoas Seguras, Resultados Sustentáveis',
  tagline: 'Soluções em Segurança do Trabalho',
  description:
    'Engenharia e Segurança do Trabalho com atendimento em todo o Brasil: consultoria SST, PGR, APR, inspeções, treinamentos NR-35, NR-33, NR-10, bombeiro civil, APH para eventos e resgate técnico.',
  url: 'https://tegsafetyservice.com.br',
  locale: 'pt_BR',
  contact: {
    email: 'contato@tegsafetyservice.com.br',
    whatsapp: '5571996739533',
    whatsappDisplay: '(71) 99673-9533',
    city: 'Salvador',
    state: 'BA',
    cityDisplay: 'Salvador – BA',
    coverage: 'Sede em Salvador – BA · Atendimento em todo o Brasil',
    phoneTel: '+5571996739533',
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
    instagram: 'https://www.instagram.com/tegsafetyservice',
    instagramHandle: '@tegsafetyservice',
    linkedin: '#',
    youtube: '#',
  },
  responsavelTecnico: {
    nome: 'Gabriel Carvalho da Silva',
    titulo: 'Engenheiro de Segurança do Trabalho',
    conselho: 'CREA-BA',
    registro: '84637BA',
    rnp: '0512065365',
    situacao: 'Ativo',
    registroDesde: '2013-05-23',
  },
} as const

export const responsavelTecnicoLinha = `Responsável Técnico: Eng. ${siteConfig.responsavelTecnico.nome} · ${siteConfig.responsavelTecnico.titulo} · ${siteConfig.responsavelTecnico.conselho} ${siteConfig.responsavelTecnico.registro} · RNP ${siteConfig.responsavelTecnico.rnp}`

/** Set to true once /public/models/teg.glb exists to render the real 3D mascot. */
export const USE_3D_MODEL = false

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export const navItems = [
  { label: 'Empresa', href: '/#empresa' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Treinamentos', href: '/#treinamentos' },
  { label: 'Emergência', href: '/#emergencia' },
  { label: 'Contato', href: '/#contato' },
] as const

export const secondaryNavItems = [
  { label: 'Normas (NRs)', href: '/#normas' },
  { label: 'Terceirizadas', href: '/#terceirizadas' },
] as const
