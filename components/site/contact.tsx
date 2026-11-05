'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { sendContact } from '@/app/actions/contact'
import { SELECT_SERVICE_EVENT } from '@/lib/service-events'
import { SuccessState } from './success-state'
import { Turnstile } from './turnstile'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { contactSchema, type ContactInput } from '@/lib/contact-schema'
import { segments } from '@/data/content'
import { serviceTitles } from '@/data/services'
import { siteConfig, emailUrl, whatsappUrl } from '@/config/site'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { WhatsAppIcon } from './whatsapp-icon'

const field =
  'h-12 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive'

function Field({
  id,
  label,
  error,
  required,
  children,
  className,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) })
  const onToken = useCallback((t: string) => setValue('turnstileToken', t), [setValue])

  useEffect(() => {
    const onSelect = (e: Event) => {
      const title = (e as CustomEvent<string>).detail
      setStatus('idle')
      setValue('service', title, { shouldDirty: true })
      setTimeout(() => document.getElementById('name')?.focus({ preventScroll: true }), 600)
    }
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect)
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect)
  }, [setValue])

  const onSubmit = async (data: ContactInput) => {
    setStatus('idle')
    try {
      const res = await sendContact(data, 'formulario')
      if (!res.ok) {
        setErrorMsg(res.error)
        setStatus('error')
        return
      }
      setStatus('success')
      reset()
    } catch {
      setErrorMsg('Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.')
      setStatus('error')
    }
  }

  const aria = (name: keyof ContactInput) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="contato-title"
            eyebrow="Contato"
            title="Vamos tornar sua operação mais segura?"
            description="Solicite um diagnóstico de SST ou orçamento. Respondemos rapidamente pelo canal de sua preferência."
          />
          <ul className="flex flex-col gap-3">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-muted-foreground">WhatsApp 24/7</span>
                  <span className="font-mono font-semibold">{siteConfig.contact.whatsappDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={emailUrl()} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs text-muted-foreground">E-mail</span>
                  <span className="truncate font-semibold">{siteConfig.contact.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                <MapPin className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-muted-foreground">Localização</span>
                <span className="font-semibold">{siteConfig.contact.coverage}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="border-gradient relative rounded-2xl bg-card p-6 md:p-8">
          {status === 'success' ? (
            <SuccessState onReset={() => setStatus('idle')} className="min-h-96" />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Nome" required error={errors.name?.message}>
                <input id="name" autoComplete="name" className={field} {...register('name')} {...aria('name')} />
              </Field>
              <Field id="company" label="Empresa" error={errors.company?.message}>
                <input id="company" autoComplete="organization" className={field} {...register('company')} />
              </Field>
              <Field id="email" label="E-mail" required error={errors.email?.message}>
                <input id="email" type="email" autoComplete="email" className={field} {...register('email')} {...aria('email')} />
              </Field>
              <Field id="phone" label="Telefone / WhatsApp" required error={errors.phone?.message}>
                <input id="phone" type="tel" autoComplete="tel" placeholder="(71) 9 0000-0000" className={field} {...register('phone')} {...aria('phone')} />
              </Field>
              <Field id="segment" label="Segmento">
                <select id="segment" className={field} defaultValue="" {...register('segment')}>
                  <option value="">Selecione</option>
                  {segments.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field id="service" label="Serviço de interesse">
                <select id="service" className={field} defaultValue="" {...register('service')}>
                  <option value="">Selecione</option>
                  {serviceTitles.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field id="message" label="Mensagem" required error={errors.message?.message} className="sm:col-span-2">
                <textarea id="message" rows={5} className={cn(field, 'h-auto py-3 leading-relaxed')} {...register('message')} {...aria('message')} />
              </Field>

              <div className="hidden" aria-hidden>
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" {...register('privacy')} {...aria('privacy')} />
                  <span>
                    Li e concordo com a{' '}
                    <Link href="/politica-de-privacidade" className="text-foreground underline underline-offset-4">
                      Política de Privacidade
                    </Link>{' '}
                    e autorizo o uso dos meus dados para retorno deste contato.
                  </span>
                </label>
                {errors.privacy && (
                  <p id="privacy-error" className="text-xs text-destructive">
                    {errors.privacy.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Turnstile onToken={onToken} />
              </div>

              {status === 'error' && (
                <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm sm:col-span-2">
                  {errorMsg}{' '}
                  <a href={whatsappUrl()} className="underline" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:col-span-2"
              >
                {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
                {isSubmitting ? 'Enviando...' : 'Enviar solicitação'}
              </button>
              <p className="flex items-center gap-2 text-xs text-muted-foreground sm:col-span-2">
                <Phone className="size-3.5" aria-hidden />
                Emergência? Ligue ou chame no WhatsApp: {siteConfig.contact.whatsappDisplay}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
