import {
  Ambulance,
  ClipboardCheck,
  FileSearch,
  Flame,
  GraduationCap,
  HardHat,
  Mountain,
  Package,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  summary: string
  icon: LucideIcon
  image: string
  items: string[]
}

export const services: Service[] = [
  {
    slug: 'gestao-sst',
    title: 'Gestão de Segurança do Trabalho',
    summary: 'Diagnóstico completo, plano de ação e gestão contínua da conformidade em SST.',
    icon: ShieldCheck,
    image: '/images/auditoria-documental.png',
    items: [
      'Diagnóstico de SST',
      'Levantamento de não conformidades',
      'Plano de ação',
      'Inspeções de segurança',
      'Relatórios técnicos',
      'Acompanhamento de ações corretivas',
      'Apoio em auditorias e fiscalizações',
      'Gestão de documentação de SST',
      'AVCB',
    ],
  },
  {
    slug: 'gestao-riscos',
    title: 'Gestão de Riscos',
    summary: 'PGR, inventário de riscos e análise de atividades críticas com controle efetivo.',
    icon: FileSearch,
    image: '/images/inspecao-industrial.png',
    items: [
      'PGR – Programa de Gerenciamento de Riscos',
      'Inventário de Riscos Ocupacionais',
      'APR – Análise Preliminar de Riscos',
      'Análise de perigos e riscos',
      'Procedimentos de segurança',
      'Ordens de serviço',
      'Análise de atividades críticas',
      'Avaliação e controle de riscos',
    ],
  },
  {
    slug: 'inspecoes-auditorias',
    title: 'Inspeções e Auditorias',
    summary: 'Inspeções técnicas em áreas operacionais, máquinas, instalações e terceirizadas.',
    icon: ClipboardCheck,
    image: '/images/maquinas-esteira.png',
    items: [
      'Áreas operacionais',
      'Máquinas e equipamentos',
      'Instalações e sistemas de proteção',
      'EPI e sinalização',
      'Rotas de circulação',
      'Trabalho em altura',
      'Espaços confinados',
      'Instalações elétricas',
      'Empresas terceirizadas',
    ],
  },
  {
    slug: 'treinamentos',
    title: 'Treinamentos e Capacitações',
    summary: 'NRs, reciclagens, integração, DDS, brigada, Lei Lucas, SBV e APH.',
    icon: GraduationCap,
    image: '/images/treinamento-sala.png',
    items: [
      'NRs e reciclagens',
      'Integração de segurança',
      'DDS – Diálogo Diário de Segurança',
      'Brigada de emergência',
      'Lei Lucas (primeiros socorros)',
      'SBV – Suporte Básico de Vida',
      'APH – Atendimento Pré-Hospitalar',
      'Treinamentos personalizados',
      'Palestras e campanhas',
    ],
  },
  {
    slug: 'mao-de-obra',
    title: 'Mão de Obra Especializada',
    summary: 'Técnicos de segurança, bombeiros civis, resgatistas e equipes de emergência.',
    icon: HardHat,
    image: '/images/equipe-institucional.png',
    items: [
      'Profissionais para atividades específicas',
      'Técnicos de segurança',
      'Bombeiro civil',
      'Resgate técnico',
      'Enfermagem',
      'Equipes de emergência',
    ],
  },
  {
    slug: 'resgate-tecnico',
    title: 'Resgate Técnico Operacional',
    summary: 'Equipes de prontidão para resgate em altura e espaços confinados.',
    icon: Mountain,
    image: '/images/resgate-tecnico.png',
    items: [
      'Equipes de prontidão',
      'Resgate em altura',
      'Resgate em espaços confinados',
      'Planejamento de operações de resgate',
      'Simulados',
    ],
  },
  {
    slug: 'aph-emergencia',
    title: 'Atendimento Pré-Hospitalar e Emergência',
    summary: 'APH, socorristas, enfermagem e ambulância para eventos e operações.',
    icon: Ambulance,
    image: '/images/aph-atendimento.png',
    items: [
      'APH – Atendimento Pré-Hospitalar',
      'Equipes de primeiros socorros',
      'Ambulância para eventos e operações',
      'Enfermagem',
      'SBV – Suporte Básico de Vida',
    ],
  },
  {
    slug: 'bombeiro-civil',
    title: 'Bombeiro Civil',
    summary: 'Postos de prevenção, combate a princípios de incêndio e apoio em eventos.',
    icon: Flame,
    image: '/images/bombeiro-civil.png',
    items: [
      'Postos de prevenção',
      'Combate a princípios de incêndio',
      'Formação de equipes',
      'Apoio em eventos',
      'Abandono de área e simulados',
    ],
  },
  {
    slug: 'locacao-equipamentos',
    title: 'Locação de Equipamentos',
    summary: 'Equipamentos de segurança, emergência, resgate, primeiros socorros e simulados.',
    icon: Package,
    image: '/images/locacao-equipamentos.png',
    items: [
      'Equipamentos de segurança',
      'Equipamentos de emergência',
      'Equipamentos de resgate',
      'Primeiros socorros',
      'Treinamentos e simulados',
    ],
  },
]

export const serviceTitles = services.map((s) => s.title)
