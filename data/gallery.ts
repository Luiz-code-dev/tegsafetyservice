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
 * Cada imagem aparece uma única vez no site: as fotos daqui não são usadas em
 * nenhuma outra seção. Para usar fotos reais, salve em /public/images e
 * adicione/substitua um item. A ordem do array é a ordem exibida.
 */
export const gallery: GalleryItem[] = [
  { src: '/images/eletrica-nr10.png', alt: 'Eletricista com luvas isolantes aplicando cadeado de bloqueio em painel elétrico', category: 'Inspeções', label: 'Inspeções · NR-10', detail: 'Bloqueio e etiquetagem em instalações elétricas', tall: true },
  { src: '/images/trabalho-altura.png', alt: 'Trabalhador com cinto paraquedista ancorado em estrutura metálica elevada', category: 'Treinamentos', label: 'Treinamentos · NR-35', detail: 'Capacitação para trabalho em altura' },
  { src: '/images/espaco-confinado.png', alt: 'Equipe de resgate operando tripé sobre boca de visita em espaço confinado', category: 'Resgate', label: 'Resgate · Espaço confinado', detail: 'Equipe de prontidão conforme NR-33', tall: true },
  { src: '/images/aph-evento.png', alt: 'Socorristas de APH em posto de atendimento discreto durante evento noturno', category: 'APH', label: 'APH · Eventos', detail: 'Atendimento pré-hospitalar com equipe qualificada' },
  { src: '/images/brigada-simulado.png', alt: 'Brigadistas de colete laranja conduzindo simulado de abandono de área', category: 'Bombeiro Civil', label: 'Bombeiro Civil · Brigada', detail: 'Formação de brigada e simulados de abandono', tall: true },
  { src: '/images/eventos-alto-padrao.png', alt: 'Posto discreto de prevenção em evento corporativo de alto padrão', category: 'Eventos', label: 'Eventos · Alto padrão', detail: 'Prontidão discreta para eventos corporativos' },
]
