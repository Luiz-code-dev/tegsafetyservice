import {
  Ambulance,
  Anchor,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  ClipboardList,
  Cog,
  Eye,
  Factory,
  FileText,
  Lock,
  MessagesSquare,
  PartyPopper,
  Ship,
  Siren,
  ShieldAlert,
  UserCheck,
  Warehouse,
  Wheat,
  type LucideIcon,
} from 'lucide-react'

export type HeroStat =
  | { kind: 'number'; value: number; prefix?: string; suffix?: string; label: string }
  | { kind: 'text'; text: string; label: string }

export const heroStats: HeroStat[] = [
  { kind: 'number', value: 15, suffix: '+', label: 'NRs atendidas' },
  { kind: 'number', value: 24, suffix: '/7', label: 'Prontidão em emergências' },
  { kind: 'number', value: 9, label: 'Frentes de serviço' },
  { kind: 'text', text: 'CREA-BA', label: 'Responsável técnico habilitado' },
]

export const pillars = [
  {
    title: 'Prevenção de acidentes',
    text: 'Atuação antecipada sobre perigos, antes que se tornem ocorrências.',
    icon: ShieldAlert,
  },
  {
    title: 'Gestão de riscos ocupacionais',
    text: 'Identificação, avaliação e controle com base nas Normas Regulamentadoras.',
    icon: ClipboardList,
  },
  {
    title: 'Atendimento personalizado',
    text: 'Soluções desenhadas para a realidade operacional de cada empresa.',
    icon: UserCheck,
  },
  {
    title: 'Linguagem simples, documentação sob medida',
    text: 'Orientações claras para equipes operacionais e documentos adaptados à rotina da sua empresa.',
    icon: FileText,
  },
]

export const trainings: { title: string; icon: LucideIcon }[] = [
  { title: 'Integração de Segurança e DDS', icon: MessagesSquare },
  { title: 'NR-05, NR-06, NR-10, NR-11, NR-12, NR-18', icon: BookOpenCheck },
  { title: 'NR-20, NR-23, NR-26, NR-29, NR-33, NR-35', icon: BookOpenCheck },
  { title: 'Percepção de riscos', icon: Eye },
  { title: 'Trabalho seguro em máquinas', icon: Cog },
  { title: 'Bloqueio e Etiquetagem (LOTO)', icon: Lock },
  { title: 'Procedimentos de emergência', icon: Siren },
  { title: 'Materiais personalizados, avaliações e registros', icon: FileText },
]

export const trainingPhotos = [
  { src: '/images/dds-canteiro.png', alt: 'Diálogo Diário de Segurança com equipe em canteiro de obras' },
  { src: '/images/bombeiro-combate.png', alt: 'Bombeiro com roupa de aproximação usando extintor em treinamento controlado' },
]

export const contractorSteps = [
  { title: 'Análise documental', text: 'Verificação de documentos legais e de SST da contratada.' },
  { title: 'Treinamentos', text: 'Conferência e realização dos treinamentos obrigatórios.' },
  { title: 'ASO e documentação ocupacional', text: 'Validação de aptidão e registros ocupacionais.' },
  { title: 'Integração de Segurança', text: 'Regras da planta, riscos e procedimentos de emergência.' },
  { title: 'APR e procedimentos', text: 'Análise dos riscos de cada atividade antes do início.' },
  { title: 'Acompanhamento em campo', text: 'Inspeções e suporte técnico durante a execução.' },
]

export const experienceImage = {
  src: '/images/silos-graos.png',
  alt: 'Complexo de silos e armazéns de grãos em área portuária',
}

export const experience: { title: string; icon: LucideIcon }[] = [
  { title: 'Portos', icon: Anchor },
  { title: 'Movimentação de grãos', icon: Wheat },
  { title: 'Silos e armazéns', icon: Warehouse },
  { title: 'Correias transportadoras', icon: Cog },
  { title: 'Shiploader', icon: Ship },
  { title: 'Indústria', icon: Factory },
  { title: 'Construção civil', icon: Building2 },
  { title: 'Eventos', icon: PartyPopper },
]

export const processSteps = [
  { title: 'Conversa inicial', text: 'Entendemos sua operação, prazos e prioridades.' },
  { title: 'Diagnóstico', text: 'Levantamento técnico em campo e documental.' },
  { title: 'Planejamento', text: 'Plano de ação com escopo, responsáveis e cronograma.' },
  { title: 'Execução', text: 'Implantação das medidas, treinamentos e documentos.' },
  { title: 'Relatório', text: 'Registro técnico claro, com evidências e indicadores.' },
  { title: 'Acompanhamento', text: 'Monitoramento contínuo e melhoria das condições.' },
]

export const testimonials = [
  {
    quote:
      'A equipe trouxe método e clareza para a nossa gestão de terceirizadas. As integrações ficaram objetivas e as APRs passaram a refletir a realidade do campo.',
    author: '[Nome do cliente]',
    role: '[Cargo] · [Empresa]',
  },
  {
    quote:
      'Contratamos bombeiros civis e APH para um evento corporativo. Equipe discreta, pontual e extremamente preparada.',
    author: '[Nome do cliente]',
    role: '[Cargo] · [Empresa]',
  },
  {
    quote:
      'O diagnóstico de SST nos mostrou exatamente onde agir primeiro. O plano de ação foi prático e o acompanhamento, próximo.',
    author: '[Nome do cliente]',
    role: '[Cargo] · [Empresa]',
  },
]

export const segments = [
  'Indústria',
  'Portuário',
  'Agronegócio / Armazenagem',
  'Construção civil',
  'Energia / Elétrica',
  'Eventos',
  'Comércio e serviços',
  'Educação',
  'Saúde',
  'Outro',
]

export const trustBadges: { label: string; icon: LucideIcon }[] = [
  { label: 'Conformidade com NRs', icon: BadgeCheck },
  { label: 'Equipes de prontidão', icon: Ambulance },
]
