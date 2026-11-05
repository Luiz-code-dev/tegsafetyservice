import {
  Ambulance,
  BadgeCheck,
  BookOpenCheck,
  ClipboardList,
  Cog,
  Eye,
  FileCheck2,
  FileText,
  Flame,
  HeartPulse,
  Lock,
  MessagesSquare,
  Mountain,
  Siren,
  ShieldAlert,
  Stethoscope,
  UserCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const heroStats = [
  { value: 15, prefix: '+', suffix: '', label: 'NRs atendidas' },
  { value: 24, prefix: '', suffix: '/7', label: 'Atendimento em emergências' },
  { value: 100, prefix: '', suffix: '%', label: 'Foco em conformidade legal' },
  { value: 9, prefix: '', suffix: '', label: 'Frentes de serviço' },
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
  { src: '/images/treinamento-sala.png', alt: 'Treinamento em sala com equipe atenta' },
  { src: '/images/dds-canteiro.png', alt: 'DDS no canteiro de obras' },
  { src: '/images/brigada-simulado.png', alt: 'Simulado de abandono de área com brigadistas' },
  { src: '/images/bombeiro-civil.png', alt: 'Treinamento de combate a princípio de incêndio' },
]

export const emergencyBlocks: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Brigada de Emergência', text: 'Formação, reciclagem e simulados conforme a realidade da planta.', icon: Users },
  { title: 'Lei Lucas', text: 'Capacitação em primeiros socorros para escolas e instituições.', icon: HeartPulse },
  { title: 'SBV / APH', text: 'Suporte Básico de Vida e atendimento pré-hospitalar com equipe qualificada.', icon: Stethoscope },
  { title: 'Resgate Técnico Operacional', text: 'Equipes de prontidão para altura e espaços confinados.', icon: Mountain },
  { title: 'Bombeiro Civil', text: 'Postos de prevenção e combate a princípios de incêndio.', icon: Flame },
  { title: 'AVCB', text: 'Apoio técnico para obtenção e manutenção do Auto de Vistoria.', icon: FileCheck2 },
]

export const contractorSteps = [
  { title: 'Análise documental', text: 'Verificação de documentos legais e de SST da contratada.' },
  { title: 'Treinamentos', text: 'Conferência e realização dos treinamentos obrigatórios.' },
  { title: 'ASO e documentação ocupacional', text: 'Validação de aptidão e registros ocupacionais.' },
  { title: 'Integração de Segurança', text: 'Regras da planta, riscos e procedimentos de emergência.' },
  { title: 'APR e procedimentos', text: 'Análise dos riscos de cada atividade antes do início.' },
  { title: 'Acompanhamento em campo', text: 'Inspeções e suporte técnico durante a execução.' },
]

export const experience = [
  { title: 'Operações portuárias', image: '/images/hero-porto.png', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Armazenagem e movimentação de grãos', image: '/images/silos-graos.png', span: '' },
  { title: 'Silos e armazéns', image: '/images/silos-graos.png', span: '' },
  { title: 'Máquinas e equipamentos', image: '/images/inspecao-industrial.png', span: '' },
  { title: 'Transportadores de correia', image: '/images/maquinas-esteira.png', span: '' },
  { title: 'Operações com shiploader', image: '/images/hero-porto.png', span: '' },
  { title: 'Atividades e instalações elétricas', image: '/images/eletrica-nr10.png', span: 'lg:row-span-2' },
  { title: 'Bloqueio e etiquetagem (LOTO)', image: '/images/eletrica-nr10.png', span: '' },
  { title: 'Trabalho em altura', image: '/images/trabalho-altura.png', span: '' },
  { title: 'Espaços confinados', image: '/images/espaco-confinado.png', span: '' },
  { title: 'Gestão de contratadas', image: '/images/terceirizadas-portaria.png', span: '' },
  { title: 'APR, inspeções e checklists', image: '/images/auditoria-documental.png', span: 'lg:col-span-2' },
]

export const differentials = [
  'Experiência prática em ambiente operacional',
  'Visão preventiva e foco em controle de riscos',
  'Documentação adaptada à realidade da empresa',
  'Linguagem simples para equipes operacionais',
  'Conformidade legal e melhoria contínua',
  'Atendimento personalizado e próximo',
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
