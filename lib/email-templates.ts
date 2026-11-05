import { siteConfig } from '@/config/site'
import type { ContactInput } from '@/lib/contact-schema'

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)

function shell(title: string, body: string) {
  return `<!doctype html>
<html lang="pt-BR">
<body style="margin:0;padding:0;background:#eef2ef;font-family:Inter,Segoe UI,Arial,sans-serif;color:#12181a">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2ef;padding:32px 12px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #dde5e0">
        <tr><td style="background:#0a0f0d;padding:28px 32px">
          <div style="font-size:30px;font-weight:800;letter-spacing:-1px;line-height:1">
            <span style="color:#3fae5a">T</span><span style="color:#9aa3a8">&amp;</span><span style="color:#3fae5a">G</span>
          </div>
          <div style="margin-top:6px;font-size:12px;font-weight:700;letter-spacing:3px;color:#f4f7f5">SAFETY SERVICE</div>
          <div style="margin-top:2px;font-size:10px;letter-spacing:2px;color:#9aa3a8">SOLUÇÕES EM SEGURANÇA DO TRABALHO</div>
        </td></tr>
        <tr><td style="height:4px;background:linear-gradient(90deg,#3fae5a,#0b5d3b)"></td></tr>
        <tr><td style="padding:32px">
          <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#0b5d3b">${title}</h1>
          ${body}
        </td></tr>
        <tr><td style="padding:20px 32px;background:#f4f7f5;border-top:1px solid #dde5e0;font-size:12px;line-height:1.6;color:#4a5258">
          ${siteConfig.name} · ${siteConfig.contact.coverage}<br>
          ${siteConfig.contact.email} · ${siteConfig.contact.whatsappDisplay}<br>
          <em>${siteConfig.slogan}</em>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export function teamEmail(data: ContactInput, origin: string) {
  const rows: [string, string][] = [
    ['Nome', data.name],
    ['Empresa', data.company || '—'],
    ['E-mail', data.email],
    ['Telefone', data.phone],
    ['Segmento', data.segment || '—'],
    ['Serviço', data.service || '—'],
    ['Origem', origin],
  ]
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 12px;border-bottom:1px solid #eef2ef;font-size:13px;font-weight:600;color:#4a5258;width:120px;vertical-align:top">${k}</td><td style="padding:10px 12px;border-bottom:1px solid #eef2ef;font-size:14px">${escapeHtml(v)}</td></tr>`,
    )
    .join('')
  return shell(
    'Nova solicitação pelo site',
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2ef;border-radius:10px">${table}</table>
     <h2 style="margin:24px 0 8px;font-size:15px;color:#12181a">Mensagem</h2>
     <div style="padding:16px;background:#f4f7f5;border-radius:10px;font-size:14px;line-height:1.6">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
     <p style="margin:20px 0 0;font-size:12px;color:#4a5258">Responda este e-mail para falar diretamente com o cliente. Consentimento LGPD registrado em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Bahia' })}.</p>`,
  )
}

export function confirmationEmail(data: ContactInput) {
  const first = escapeHtml(data.name.split(' ')[0] ?? data.name)
  return shell(
    `Olá, ${first}! Recebemos sua solicitação.`,
    `<p style="margin:0 0 16px;font-size:15px;line-height:1.6">Nossa equipe técnica já está analisando sua mensagem e retornará em breve pelo canal informado.</p>
     <p style="margin:0 0 24px;font-size:15px;line-height:1.6">Se a demanda for urgente, fale agora com um especialista:</p>
     <a href="https://wa.me/${siteConfig.contact.whatsapp}" style="display:inline-block;padding:12px 22px;border-radius:8px;background:#0b5d3b;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none">Falar pelo WhatsApp</a>
     <p style="margin:28px 0 0;font-size:12px;line-height:1.6;color:#4a5258">Você recebeu este e-mail porque enviou uma solicitação em ${siteConfig.url.replace('https://', '')}. Seus dados são tratados conforme nossa <a href="${siteConfig.url}/politica-de-privacidade" style="color:#0b5d3b">Política de Privacidade</a>.</p>`,
  )
}
