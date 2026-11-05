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
  alt: string
  category: GalleryCategory
  /** Taller tile in the masonry grid. */
  tall?: boolean
}

/**
 * Para usar fotos reais: salve o arquivo em /public/images e adicione/substitua
 * um item aqui. A ordem do array é a ordem exibida na galeria.
 */
export const gallery: GalleryItem[] = [
  { src: '/images/inspecao-industrial.png', alt: 'Engenheira de segurança inspecionando máquinas com checklist digital', category: 'Inspeções', tall: true },
  { src: '/images/treinamento-sala.png', alt: 'Instrutor ministrando treinamento de segurança em sala moderna', category: 'Treinamentos' },
  { src: '/images/resgate-tecnico.png', alt: 'Equipe de resgate em altura com cordas e maca', category: 'Resgate' },
  { src: '/images/aph-atendimento.png', alt: 'Socorristas prestando atendimento pré-hospitalar com ambulância ao fundo', category: 'APH', tall: true },
  { src: '/images/bombeiro-civil.png', alt: 'Bombeiro civil combatendo princípio de incêndio em treinamento controlado', category: 'Bombeiro Civil' },
  { src: '/images/eventos-alto-padrao.png', alt: 'Posto discreto de bombeiro civil e APH em evento corporativo noturno', category: 'Eventos' },
  { src: '/images/dds-canteiro.png', alt: 'Equipe em semicírculo durante Diálogo Diário de Segurança', category: 'Treinamentos', tall: true },
  { src: '/images/espaco-confinado.png', alt: 'Vigia com detector de gases na entrada de espaço confinado com tripé de resgate', category: 'Inspeções' },
  { src: '/images/brigada-simulado.png', alt: 'Brigadistas conduzindo simulado de abandono de área', category: 'Bombeiro Civil' },
  { src: '/images/construcao-nr18.png', alt: 'Técnico fiscalizando obra com guarda-corpos e redes de proteção', category: 'Inspeções' },
  { src: '/images/trabalho-altura.png', alt: 'Profissional com cinto paraquedista ancorado em estrutura metálica', category: 'Resgate', tall: true },
  { src: '/images/terceirizadas-portaria.png', alt: 'Controle de acesso de terceirizados em portaria industrial', category: 'Inspeções' },
]
