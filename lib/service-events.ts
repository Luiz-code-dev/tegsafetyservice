export const SELECT_SERVICE_EVENT = 'teg:select-service'

export function requestService(title: string) {
  window.dispatchEvent(new CustomEvent<string>(SELECT_SERVICE_EVENT, { detail: title }))
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function serviceHref(slug: string) {
  return `/?servico=${slug}#servicos`
}
