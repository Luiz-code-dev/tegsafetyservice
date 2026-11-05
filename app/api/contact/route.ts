import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'
import { siteConfig } from '@/config/site'

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

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) return NextResponse.json({ error: 'Muitas tentativas' }, { status: 429 })

  const body = await req.json().catch(() => null)
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })

  const data = parsed.data
  if (data.website) return NextResponse.json({ ok: true })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY não configurada; mensagem não enviada por e-mail.')
    return NextResponse.json({ ok: true })
  }

  const rows = [
    ['Nome', data.name],
    ['Empresa', data.company || '-'],
    ['E-mail', data.email],
    ['Telefone', data.phone],
    ['Segmento', data.segment || '-'],
    ['Serviço', data.service || '-'],
    ['Mensagem', data.message],
  ]
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600">${k}</td><td style="padding:6px 12px">${escape(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Site T&G <onboarding@resend.dev>',
      to: [siteConfig.contact.email],
      reply_to: data.email,
      subject: `Novo contato pelo site – ${data.name}`,
      html: `<table>${rows}</table>`,
    }),
  })

  if (!res.ok) return NextResponse.json({ error: 'Falha no envio' }, { status: 502 })
  return NextResponse.json({ ok: true })
}
