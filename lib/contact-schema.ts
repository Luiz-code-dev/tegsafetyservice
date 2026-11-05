import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome').max(120),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  email: z.string().trim().email('E-mail inválido').max(160),
  phone: z
    .string()
    .trim()
    .min(10, 'Informe um telefone com DDD')
    .max(20)
    .regex(/^[0-9()+\-\s]+$/, 'Telefone inválido'),
  segment: z.string().trim().max(80).optional().or(z.literal('')),
  service: z.string().trim().max(120).optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Conte um pouco sobre sua necessidade').max(2000),
  privacy: z.literal(true, { message: 'É necessário aceitar a Política de Privacidade' }),
  website: z.string().max(0).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
