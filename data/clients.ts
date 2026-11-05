export type Client = {
  name: string
  /** Caminho do logo oficial em /public/clients. Só é exibido com `hasLogo: true`. */
  logo: string
  hasLogo: boolean
  /** Tipo de serviço prestado (rótulo curto). */
  servico: string
  /** Breve relato do serviço. */
  relato: string
}

export const clients: Client[] = [
  {
    name: 'Arena do Galego FutVôlei',
    logo: '/clients/arena-do-galego.png',
    hasLogo: false,
    servico: 'Bombeiro civil em eventos',
    relato:
      'Bombeiros civis cobriram os eventos da arena. A equipe fez prevenção, monitorou o público e ficou pronta para o primeiro atendimento, para que atletas e torcida aproveitassem o jogo com segurança.',
  },
  {
    name: 'Sítio Chuin',
    logo: '/clients/sitio-chuin.png',
    hasLogo: false,
    servico: 'Bombeiro civil',
    relato:
      'Bombeiros civis acompanharam o evento no sítio. A equipe verificou rotas de fuga e extintores, manteve o espaço sob vigilância contra incêndio e ficou disponível para emergências durante todo o evento.',
  },
  {
    name: 'SecultBA — Secretaria de Cultura do Estado da Bahia',
    logo: '/clients/secultba.png',
    hasLogo: false,
    servico: 'Montagem e desmontagem de estruturas',
    relato:
      'Técnicos de segurança acompanharam a montagem e a desmontagem das estruturas dos eventos. A equipe fiscalizou trabalho em altura, uso de EPIs e procedimentos das equipes, para reduzir o risco de acidentes em todas as etapas.',
  },
  {
    name: 'HM Transportes',
    logo: '/clients/hm-transportes.png',
    hasLogo: false,
    servico: 'Gestão documental de SST e NR-1',
    relato:
      'Organizamos a documentação de SST da empresa, deixando programas, registros e prazos em dia. Também aplicamos o treinamento de NR-1 aos colaboradores, com foco em riscos ocupacionais e prevenção no dia a dia.',
  },
]
