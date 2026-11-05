import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, LegalSection } from '@/components/legal/legal-page'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a T&G Safety Service trata dados pessoais conforme a LGPD (Lei 13.709/2018).',
  alternates: { canonical: '/politica-de-privacidade' },
}

export default function Page() {
  const { company, dpo, contact } = siteConfig
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política explica como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
    >
      <LegalSection title="1. Controlador dos dados">
        <p>
          {company.legalName} ({siteConfig.name}), inscrita no CNPJ {company.cnpj}, com sede em {company.address}, é a
          controladora dos dados pessoais tratados neste site.
        </p>
      </LegalSection>
      <LegalSection title="2. Dados que coletamos">
        <ul className="list-disc pl-5">
          <li>Formulário de contato: nome, empresa, e-mail, telefone, segmento, serviço de interesse e mensagem.</li>
          <li>Contato via WhatsApp ou e-mail: dados que você decidir compartilhar na conversa.</li>
          <li>Navegação: registro de consentimento de cookies e, somente com sua autorização, dados estatísticos anônimos.</li>
        </ul>
      </LegalSection>
      <LegalSection title="3. Finalidades e bases legais">
        <ul className="list-disc pl-5">
          <li>Responder solicitações e elaborar propostas – procedimentos preliminares a contrato (art. 7º, V).</li>
          <li>Registrar consentimento de cookies – cumprimento de obrigação legal (art. 7º, II).</li>
          <li>Métricas de uso e marketing – consentimento (art. 7º, I), revogável a qualquer momento.</li>
          <li>Segurança do site e prevenção a fraudes – legítimo interesse (art. 7º, IX).</li>
        </ul>
      </LegalSection>
      <LegalSection title="4. Compartilhamento">
        <p>
          Não vendemos dados pessoais. Podemos compartilhá-los com operadores estritamente necessários (hospedagem,
          envio de e-mails) sob contrato e dever de confidencialidade, ou com autoridades mediante obrigação legal.
        </p>
      </LegalSection>
      <LegalSection title="5. Retenção">
        <p>
          Dados de contato são mantidos por até 24 meses após o último contato, salvo se houver relação contratual ou
          obrigação legal que exija prazo maior. Registros de consentimento são mantidos por 5 anos como prova.
        </p>
      </LegalSection>
      <LegalSection title="6. Segurança">
        <p>
          Adotamos medidas técnicas e administrativas como criptografia em trânsito (HTTPS), controle de acesso,
          validação de formulários e proteção contra spam.
        </p>
      </LegalSection>
      <LegalSection title="7. Seus direitos">
        <p>
          Você pode solicitar confirmação, acesso, correção, anonimização, portabilidade, eliminação e revogação do
          consentimento. Veja como em{' '}
          <Link href="/direitos-do-titular" className="text-primary underline underline-offset-4">
            Direitos do Titular
          </Link>
          .
        </p>
      </LegalSection>
      <LegalSection title="8. Encarregado (DPO)">
        <p>
          {dpo.name} – <a href={`mailto:${dpo.email}`} className="text-primary underline underline-offset-4">{dpo.email}</a>.
          Você também pode contatar a ANPD em gov.br/anpd.
        </p>
      </LegalSection>
      <LegalSection title="9. Alterações">
        <p>
          Esta política pode ser atualizada. Mudanças relevantes serão sinalizadas neste site. Dúvidas:{' '}
          <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-4">{contact.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
