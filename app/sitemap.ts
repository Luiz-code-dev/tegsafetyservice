import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/politica-de-privacidade', '/politica-de-cookies', '/termos-de-uso', '/direitos-do-titular']
  return routes.map((r) => ({
    url: `${siteConfig.url}${r}`,
    changeFrequency: r ? 'yearly' : 'monthly',
    priority: r ? 0.3 : 1,
  }))
}
