import { useEffect } from 'react'

export const SITE_URL = 'https://dental-Esthetique.vercel.app'

export type SeoMeta = {
  title: string
  description: string
  path: string
  image?: string
  type?: string
  robots?: string
}

const BASE_IMAGE = `${SITE_URL}/images/home/hero1.webp`

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageMeta({ title, description, path, image, type = 'website', robots }: SeoMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title
    upsertMeta('name', 'description', description)
    upsertLink('canonical', url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image ?? BASE_IMAGE)
    upsertMeta('property', 'og:site_name', 'Dental Esthetique')
    upsertMeta('property', 'og:locale', 'en_IN')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image ?? BASE_IMAGE)
    upsertMeta('name', 'robots', robots ?? 'index, follow')
  }, [title, description, path, image, type, robots])
}