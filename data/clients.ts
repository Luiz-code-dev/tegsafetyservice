export type Client = {
  name: string
  /** Caminho do logo oficial em /public/clients. Só é exibido com `hasLogo: true`. */
  logo: string
  hasLogo: boolean
  /** Tipo de serviço prestado. Deixe vazio para não exibir. */
  servico: string
}

export const clients: Client[] = [
  { name: 'Arena do Galego FutVôlei', logo: '/clients/arena-do-galego.png', hasLogo: false, servico: '' },
  { name: 'Sítio Chuin', logo: '/clients/sitio-chuin.png', hasLogo: false, servico: '' },
  {
    name: 'SecultBA — Secretaria de Cultura do Estado da Bahia',
    logo: '/clients/secultba.png',
    hasLogo: false,
    servico: '',
  },
]
