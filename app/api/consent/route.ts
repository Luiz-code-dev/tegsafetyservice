import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  version: z.string().max(10),
  timestamp: z.string().max(40),
  consentId: z.string().uuid(),
  categories: z.object({
    necessary: z.boolean(),
    preferences: z.boolean(),
    analytics: z.boolean(),
    marketing: z.boolean(),
  }),
})

/** Records consent as proof (LGPD art. 8 §2). No IP or personal data is stored. */
export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'invalid' }, { status: 400 })
  console.info('[consent]', JSON.stringify(parsed.data))
  return NextResponse.json({ ok: true })
}
