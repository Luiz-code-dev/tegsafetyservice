export const siteConfig = {
  name: 'T&G Safety Service',
  shortName: 'T&G',
  slogan: 'Pessoas Seguras, Resultados Sustentáveis',
  tagline: 'Soluções em Segurança do Trabalho',
  description:
    'Engenharia e Segurança do Trabalho com atendimento em todo o Brasil: consultoria SST, PGR, APR, inspeções, treinamentos NR-35, NR-33, NR-10, bombeiro civil, APH para eventos e resgate técnico.',
  url: 'https://www.tegsafetyservice.com.br',
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
  /**
   * Dados oficiais da empresa. Campos vazios não aparecem em nenhum lugar do site;
   * preencha quando estiverem disponíveis (ex.: CNPJ após a emissão).
   */
  empresa: {
    razaoSocial: '',
    cnpj: '',
    endereco: '',
  },
  encarregado: {
    nome: '',
    email: 'privacidade@tegsafetyservice.com.br',
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

/**
 * Ative (true) somente depois de salvar a arte oficial em /public/mascot/teg.png.
 * Variações opcionais: teg-walk.png, teg-watch.png e teg-ball.png.
 */
export const SHOW_MASCOT = false

/** Ative somente com depoimentos reais e autorizados em /data/content.ts. */
export const SHOW_TESTIMONIALS = false

export const mascotAssets = {
  base: '/mascot/teg.png',
  walk: '/mascot/teg-walk.png',
  watch: '/mascot/teg-watch.png',
  ball: '/mascot/teg-ball.png',
  /** Mude para true quando as variações existirem em /public/mascot. */
  hasVariations: false,
} as const

const emailSubject = 'Solicitação de orçamento – Segurança do Trabalho'
const emailBody = `Olá, equipe T&G Safety Service!

Gostaria de solicitar um orçamento e mais informações sobre os serviços de Segurança e Saúde do Trabalho.

Empresa:
Segmento:
Serviço de interesse:
Telefone para contato:

Fico no aguardo do retorno.
Obrigado(a)!`

export function emailUrl(subject: string = emailSubject, body: string = emailBody) {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

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
