'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/contact-schema'
import { confirmationEmail, teamEmail } from '@/lib/email-templates'
import { siteConfig } from '@/config/site'

export type ContactResult = { ok: true } | { ok: false; error: string }

const hits = new Map<string, { count: number; reset: number }>()

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + 10 * 60_000 })
    return false
  }
  entry.count++
  return entry.count > 5
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (!token) return false
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  })
  const json = (await res.json().catch(() => ({ success: false }))) as { success: boolean }
  return json.success
}

export async function sendContact(input: unknown, origin: 'formulario' | 'modal' = 'formulario'): Promise<ContactResult> {
  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) return { ok: false, error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' }

  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'Revise os campos destacados e tente novamente.' }
  const data = parsed.data

  if (data.website) return { ok: true }

  if (!(await verifyTurnstile(data.turnstileToken, ip))) {
    return { ok: false, error: 'Não foi possível validar a verificação anti-spam. Recarregue a página e tente novamente.' }
  }

  // RESEND_API_KEY may hold a literal placeholder string; only accept real Resend keys (prefixed "re_").
  const apiKey = [process.env.RESEND_API_KEY_2, process.env.RESEND_API_KEY]
    .map((k) => k?.trim().replace(/^["']|["']$/g, ''))
    .find((k) => k?.startsWith('re_'))
  if (!apiKey) {
    console.error('[contact] Nenhuma chave Resend configurada.')
    return { ok: false, error: 'Serviço de e-mail indisponível no momento. Fale conosco pelo WhatsApp.' }
  }

  const resend = new Resend(apiKey)
  const from = process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email

  const team = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Nova solicitação pelo site – ${data.name}${data.company ? ` (${data.company})` : ''}`,
    html: teamEmail(data, origin === 'modal' ? 'Contato rápido (modal)' : 'Formulário de contato'),
  })

  if (team.error) {
    console.error('[contact] Falha no envio para a equipe:', team.error.message)
    return { ok: false, error: 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.' }
  }

  const confirmation = await resend.emails.send({
    from,
    to: [data.email],
    replyTo: to,
    subject: 'Recebemos sua solicitação – T&G Safety Service',
    html: confirmationEmail(data),
  })
  if (confirmation.error) console.warn('[contact] Confirmação ao cliente não enviada:', confirmation.error.message)

  return { ok: true }
}
