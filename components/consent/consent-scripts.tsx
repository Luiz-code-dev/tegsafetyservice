'use client'

import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import type { ConsentCategory } from '@/config/privacy'
import { useConsent } from './consent-provider'

export function ConsentScript({
  category,
  children,
}: {
  category: Exclude<ConsentCategory, 'necessary'>
  children: React.ReactNode
}) {
  const { ready, categories } = useConsent()
  if (!ready || !categories[category]) return null
  return <>{children}</>
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

/** Third-party scripts. Each one only loads after its category is authorized. */
export function ConsentScripts() {
  return (
    <>
      <ConsentScript category="analytics">
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-config" strategy="afterInteractive">
              {`gtag('js', new Date()); gtag('config', '${GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
      </ConsentScript>
      <ConsentScript category="marketing">
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </ConsentScript>
    </>
  )
}
