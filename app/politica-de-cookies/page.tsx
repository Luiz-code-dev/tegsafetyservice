import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal/legal-page'
import { cookieCategories } from '@/config/cookies'
import { CookiePreferencesButton } from '@/components/legal/cookie-preferences-button'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Quais cookies a T&G Safety Service utiliza e como gerenciar suas preferências.',
  alternates: { canonical: '/politica-de-cookies' },
}

export default function Page() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Cookies são pequenos arquivos armazenados no seu navegador. Usamos apenas os necessários por padrão; os demais só são ativados com seu consentimento."
    >
      <LegalSection title="Gerenciar preferências">
        <p>Você pode alterar ou revogar seu consentimento a qualquer momento.</p>
        <CookiePreferencesButton />
      </LegalSection>

      {cookieCategories.map((cat) => (
        <LegalSection key={cat.id} title={cat.title + (cat.required ? ' (sempre ativos)' : '')}>
          <p>{cat.description}</p>
          {cat.cookies.length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-lg text-left text-sm">
                <thead className="bg-card text-foreground">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Cookie</th>
                    <th scope="col" className="p-3 font-semibold">Fornecedor</th>
                    <th scope="col" className="p-3 font-semibold">Finalidade</th>
                    <th scope="col" className="p-3 font-semibold">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.cookies.map((c) => (
                    <tr key={c.name} className="border-t border-border">
                      <td className="p-3 font-mono text-xs">{c.name}</td>
                      <td className="p-3">{c.provider}</td>
                      <td className="p-3">{c.purpose}</td>
                      <td className="p-3">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm italic">Nenhum cookie desta categoria em uso no momento.</p>
          )}
        </LegalSection>
      ))}
    </LegalPage>
  )
}
