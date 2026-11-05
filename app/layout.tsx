import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, JetBrains_Mono, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ConsentProvider } from '@/components/consent/consent-provider'
import { ConsentScripts } from '@/components/consent/consent-scripts'
import { CookieBanner } from '@/components/consent/cookie-banner'
import { PreferencesModal } from '@/components/consent/preferences-modal'
import { siteConfig } from '@/config/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['500', '600', '700'], display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Segurança do Trabalho em todo o Brasil`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'segurança do trabalho',
    'consultoria SST',
    'engenharia de segurança do trabalho',
    'PGR',
    'APR',
    'treinamento NR-35',
    'NR-33',
    'NR-10',
    'bombeiro civil',
    'APH para eventos',
    'resgate técnico em altura',
    'segurança do trabalho em todo o Brasil',
  ],
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Segurança do Trabalho em nível de excelência`,
    description: siteConfig.description,
    images: [{ url: '/images/hero-porto.png', width: 1376, height: 768, alt: 'Técnico de segurança inspecionando terminal portuário' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/images/hero-porto.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0f0d' },
    { media: '(prefers-color-scheme: light)', color: '#f4f7f5' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: siteConfig.name,
  slogan: siteConfig.slogan,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/hero-porto.png`,
  logo: `${siteConfig.url}/brand/tg-logo-full.png`,
  sameAs: [siteConfig.social.instagram],
  employee: {
    '@type': 'Person',
    name: siteConfig.responsavelTecnico.nome,
    jobTitle: siteConfig.responsavelTecnico.titulo,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Registro profissional',
      recognizedBy: { '@type': 'Organization', name: siteConfig.responsavelTecnico.conselho },
      identifier: siteConfig.responsavelTecnico.registro,
    },
  },
  email: siteConfig.contact.email,
  telephone: '+55 71 99673-9533',
  areaServed: 'BR',
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.state,
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: siteConfig.contact.geo.lat, longitude: siteConfig.contact.geo.lng },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}

const consentModeDefaults = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Script id="consent-defaults" strategy="beforeInteractive">
          {consentModeDefaults}
        </Script>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <ConsentProvider>
            {children}
            <CookieBanner />
            <PreferencesModal />
            <ConsentScripts />
          </ConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
