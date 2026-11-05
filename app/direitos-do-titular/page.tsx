import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal/legal-page'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Direitos do Titular (LGPD)',
  description: 'Como exercer seus direitos de titular de dados junto à T&G Safety Service.',
  alternates: { canonical: '/direitos-do-titular' },
}

const rights = [
  'Confirmação da existência de tratamento',
  'Acesso aos dados',
  'Correção de dados incompletos, inexatos ou desatualizados',
  'Anonimização, bloqueio ou eliminação de dados desnecessários',
  'Portabilidade a outro fornecedor',
  'Eliminação dos dados tratados com consentimento',
  'Informação sobre compartilhamento',
  'Revogação do consentimento',
]

export default function Page() {
  const { dpo } = siteConfig
  const mailto = `mailto:${dpo.email}?subject=${encodeURIComponent('Solicitação LGPD – Direitos do Titular')}`
  return (
    <LegalPage
      title="Direitos do Titular"
      intro="A LGPD (art. 18) garante a você controle sobre seus dados pessoais. Veja quais são seus direitos e como exercê-los."
    >
      <LegalSection title="Seus direitos">
        <ul className="grid gap-2 sm:grid-cols-2">
          {rights.map((r) => (
            <li key={r} className="rounded-lg border border-border bg-card p-3 text-sm text-foreground">
              {r}
            </li>
          ))}
        </ul>
      </LegalSection>
      <LegalSection title="Como solicitar">
        <p>
          Envie um e-mail ao nosso Encarregado informando nome completo, forma de contato utilizada e o direito que deseja
          exercer. Poderemos solicitar confirmação de identidade. Responderemos em até 15 dias.
        </p>
        <a href={mailto} className="inline-flex h-11 w-fit items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground">
          Enviar solicitação para {dpo.email}
        </a>
      </LegalSection>
    </LegalPage>
  )
}
