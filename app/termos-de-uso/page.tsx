import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal/legal-page'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Condições de uso do site da T&G Safety Service.',
  alternates: { canonical: '/termos-de-uso' },
}

export default function Page() {
  return (
    <LegalPage title="Termos de Uso" intro="Ao acessar este site, você concorda com as condições abaixo.">
      <LegalSection title="1. Finalidade do site">
        <p>
          Este site apresenta os serviços da {siteConfig.name} e permite o contato de interessados. As informações têm
          caráter institucional e não substituem análise técnica in loco nem laudos assinados por profissional habilitado.
        </p>
      </LegalSection>
      <LegalSection title="2. Propriedade intelectual">
        <p>
          Marca, logotipo, textos, imagens e layout pertencem à {siteConfig.name} ou a seus licenciantes. É proibida a
          reprodução sem autorização prévia por escrito.
        </p>
      </LegalSection>
      <LegalSection title="3. Uso adequado">
        <p>
          O usuário compromete-se a não enviar conteúdo ilícito, falso ou malicioso, nem tentar comprometer a segurança
          do site.
        </p>
      </LegalSection>
      <LegalSection title="4. Responsabilidade">
        <p>
          Empenhamo-nos em manter as informações atualizadas, mas normas regulamentadoras podem mudar. Propostas e
          escopos são definidos somente em contrato.
        </p>
      </LegalSection>
      <LegalSection title="5. Foro">
        <p>Estes termos são regidos pelas leis brasileiras, com foro na comarca de Salvador – BA.</p>
      </LegalSection>
    </LegalPage>
  )
}
