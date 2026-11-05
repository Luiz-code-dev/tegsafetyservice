export const galleryCategories = [
  'Inspeções',
  'Treinamentos',
  'Resgate',
  'APH',
  'Bombeiro Civil',
  'Eventos',
] as const

export type GalleryCategory = (typeof galleryCategories)[number]

export type GalleryItem = {
  src: string
  /** Descrição acessível da cena. Nunca é exibida visualmente. */
  alt: string
  category: GalleryCategory
  /** Rótulo institucional exibido no card e no lightbox. */
  label: string
  /** Serviço ou benefício exibido no lightbox. */
  detail?: string
  /** Taller tile in the masonry grid. */
  tall?: boolean
}

/**
 * Para usar fotos reais: salve o arquivo em /public/images e adicione/substitua
 * um item aqui. A ordem do array é a ordem exibida na galeria.
 */
export const gallery: GalleryItem[] = [
  { src: '/images/inspecao-industrial.png', alt: 'Engenheira de segurança inspecionando máquinas com checklist digital', category: 'Inspeções', label: 'Inspeções e auditorias', detail: 'Diagnóstico de SST em áreas operacionais', tall: true },
  { src: '/images/treinamento-sala.png', alt: 'Instrutor ministrando treinamento de segurança em sala moderna', category: 'Treinamentos', label: 'Treinamentos', detail: 'Capacitação e reciclagem em NRs' },
  { src: '/images/resgate-tecnico.png', alt: 'Equipe de resgate em altura com cordas e maca', category: 'Resgate', label: 'Resgate técnico', detail: 'Altura e espaços confinados' },
  { src: '/images/aph-atendimento.png', alt: 'Socorristas prestando atendimento pré-hospitalar com ambulância ao fundo', category: 'APH', label: 'Atendimento pré-hospitalar', detail: 'Equipes de APH para operações e eventos', tall: true },
  { src: '/images/bombeiro-civil.png', alt: 'Bombeiro civil combatendo princípio de incêndio em treinamento controlado', category: 'Bombeiro Civil', label: 'Bombeiro civil', detail: 'Prevenção e combate a incêndio' },
  { src: '/images/eventos-alto-padrao.png', alt: 'Posto discreto de bombeiro civil e APH em evento corporativo noturno', category: 'Eventos', label: 'Eventos', detail: 'Prontidão discreta para eventos corporativos' },
  { src: '/images/dds-canteiro.png', alt: 'Equipe em semicírculo durante Diálogo Diário de Segurança', category: 'Treinamentos', label: 'Treinamentos', detail: 'Diálogo Diário de Segurança', tall: true },
  { src: '/images/espaco-confinado.png', alt: 'Vigia com detector de gases na entrada de espaço confinado com tripé de resgate', category: 'Inspeções', label: 'NR-33', detail: 'Espaços confinados' },
  { src: '/images/brigada-simulado.png', alt: 'Brigadistas conduzindo simulado de abandono de área', category: 'Bombeiro Civil', label: 'Emergência', detail: 'Brigada e simulados de abandono' },
  { src: '/images/construcao-nr18.png', alt: 'Técnico fiscalizando obra com guarda-corpos e redes de proteção', category: 'Inspeções', label: 'NR-18', detail: 'Segurança na construção' },
  { src: '/images/trabalho-altura.png', alt: 'Profissional com cinto paraquedista ancorado em estrutura metálica', category: 'Resgate', label: 'NR-35', detail: 'Trabalho em altura', tall: true },
  { src: '/images/terceirizadas-portaria.png', alt: 'Controle de acesso de terceirizados em portaria industrial', category: 'Inspeções', label: 'Terceirizadas', detail: 'Controle e liberação de contratadas' },
  { src: '/images/eletrica-nr10.png', alt: 'Eletricista com EPI aplicando cadeado e etiqueta de bloqueio em painel elétrico', category: 'Inspeções', label: 'NR-10', detail: 'Bloqueio e etiquetagem' },
  { src: '/images/auditoria-documental.png', alt: 'Especialista revisando documentação de segurança em escritório', category: 'Inspeções', label: 'Gestão de SST', detail: 'Documentação e conformidade legal' },
  { src: '/images/locacao-equipamentos.png', alt: 'Macas, cordas e kits de emergência organizados em depósito', category: 'Resgate', label: 'Locação', detail: 'Equipamentos de emergência e resgate' },
]
