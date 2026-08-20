import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'
import { build } from 'esbuild'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const ssrOut = join(tmpdir(), `dental-ssr-${Date.now()}.cjs`)
await build({
  entryPoints: [join(__dirname, '..', 'src', 'ssr.tsx')],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  minify: true,
  target: 'node20',
  logLevel: 'silent',
  outfile: ssrOut,
})
const { renderPage } = await import(pathToFileURL(ssrOut).href)

const SITE_URL = 'https://www.dentalesthetique.in'

const routes = [
  {
    path: '',
    file: 'index.html',
    title: 'Dental Esthetique - Best Dentist in Noida | Advanced Dental Care',
    description:
      'Multi-speciality dental clinic in Sector 22 Noida. Painless root canal, dental implants, smile designing, teeth whitening & braces by expert dentists. Book an appointment today.',
    image: '/images/home/hero1.webp',
    preloads: [
      { href: '/images/home/mobile/hero1-1120.webp', as: 'image', fetchpriority: 'high' },
    ],
    schema: 'home',
  },
  {
    path: '/about',
    file: 'about/index.html',
    title: 'About Us | Dental Esthetique - Trusted Dentist in Noida',
    description:
      'Learn about Dental Esthetique, a multi-speciality dental clinic in Sector 22, Noida. Specialist-led care, advanced technology and a patient-first approach since day one.',
    image: '/images/about/abouthero.webp',
    preloads: [{ href: '/images/about/abouthero.webp', as: 'image', fetchpriority: 'high' }],
    schema: 'dentist',
  },
  {
    path: '/doctors',
    file: 'doctors/index.html',
    title: 'Dr. Deepika Singhal | Best Endodontist & Cosmetic Dentist in Noida',
    description:
      'Meet Dr. Deepika Singhal - MDS Endodontist with 18+ years of experience at Dental Esthetique Noida. Expert in painless root canal, smile designing and cosmetic dentistry.',
    image: '/images/about/docprofile.webp',
    preloads: [{ href: '/images/about/docprofile.webp', as: 'image', fetchpriority: 'high' }],
    schema: 'doctor',
  },
  {
    path: '/services',
    file: 'services/index.html',
    title: 'Dental Treatments in Noida | Root Canal, Implants, Smile Design',
    description:
      'Explore our complete range of dental treatments in Noida - single sitting RCT, dental implants, braces, veneers, dentures, teeth whitening and more at Dental Esthetique.',
    image: '/images/about/treatment%20hero.webp',
    preloads: [
      { href: '/images/about/treatment%20hero.webp', as: 'image', fetchpriority: 'high' },
    ],
    schema: 'dentist',
  },
  {
    path: '/contact',
    file: 'contact/index.html',
    title: 'Contact Us | Dental Esthetique - Book Appointment in Noida',
    description:
      'Visit Dental Esthetique at 55, Vindhyachal Marg, Block B, Sector 22, Noida. Call +91 98188 62265 or book your dental appointment online today.',
    image: '/images/about/clinic-exterior.webp',
    preloads: [],
    schema: 'dentist',
  },
  {
    path: '/faqs',
    file: 'faqs/index.html',
    title: 'Dental FAQs | Dental Esthetique - Dentist in Noida',
    description:
      'Answers to common questions about root canals, implants, braces, teeth whitening, bookings, payments and more at Dental Esthetique, Noida.',
    image: '/images/about/faqsec.webp',
    preloads: [{ href: '/images/about/faqsec.webp', as: 'image', fetchpriority: 'high' }],
    schema: 'faq',
  },
  {
    path: '/testimonials',
    file: 'testimonials/index.html',
    title: 'Patient Reviews & Testimonials | Dental Esthetique Noida',
    description:
      'Read real patient reviews and video testimonials for Dental Esthetique, Noida. See why patients trust us for painless root canals, implants and smile makeovers.',
    image: '/images/home/hero1.webp',
    preloads: [],
    schema: 'dentist',
  },
  {
    path: '/gallery',
    file: 'gallery/index.html',
    title: 'Smile Gallery | Dental Esthetique - Real Patient Results in Noida',
    description:
      'Browse real patient smile transformations and clinic photos from Dental Esthetique, Noida - root canals, implants, smile designing, veneers and more.',
    image: '/images/gallery/image.webp',
    preloads: [],
    schema: 'dentist',
  },
]

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${SITE_URL}/#dentist`,
  name: 'Dental Esthetique',
  alternateName: 'Dental ESTHÉTIQUE',
  url: SITE_URL,
  telephone: '+91 98188 62265',
  email: 'info@dentalEsthetique.com',
  image: `${SITE_URL}/images/home/hero1.webp`,
  logo: `${SITE_URL}/images/home/logo.svg`,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '55, Vindhyachal Marg, Block B, Sector 22',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201307',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.5903527, longitude: 77.3452027 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '17:00',
      closes: '20:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '14:00' },
  ],
  sameAs: [
    'https://www.facebook.com/dentalEsthetique/',
    'https://www.instagram.com/dental.Esthetique/',
    'https://wa.me/919818862265',
  ],
  medicalSpecialty: 'Dentistry',
  knowsAbout: [
    'Root Canal Treatment',
    'Dental Implants',
    'Smile Designing',
    'Teeth Whitening',
    'Braces and Aligners',
    'Veneers',
    'Pediatric Dentistry',
    'Cosmetic Dentistry',
  ],
}

const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${SITE_URL}/doctors#dr-deepika-singhal`,
  name: 'Dr. Deepika Singhal',
  jobTitle: 'Endodontist & Cosmetic Dentist',
  image: `${SITE_URL}/images/home/57dc078b4b52d3c3a7d118abc184bcd908bb21d9.webp`,
  url: `${SITE_URL}/doctors`,
  telephone: '+91 98188 62265',
  worksFor: { '@type': 'Dentist', name: 'Dental Esthetique', url: SITE_URL },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '55, Vindhyachal Marg, Block B, Sector 22',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201307',
    addressCountry: 'IN',
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'MDS in Conservative Dentistry & Endodontics' },
  description:
    'MDS Endodontist and Cosmetic Dentist with 18+ years of clinical excellence, over 15,000 successfully treated patients, specializing in painless root canal treatment, smile designing and microscopic endodontics.',
}

const faqItems = [
  {
    q: 'Why should I choose Dental Esthetique for my dental treatment?',
    a: 'Dental Esthetique combines experienced dental professionals, advanced technology, personalized treatment planning and a patient-first approach to provide safe, comfortable and effective dental care.',
  },
  {
    q: 'Do I need to book an appointment before visiting?',
    a: 'Yes. We recommend booking an appointment in advance to ensure minimal waiting time and dedicated consultation with our dental team.',
  },
  {
    q: 'What dental treatments do you offer?',
    a: 'We provide comprehensive dental care, including dental implants, root canal treatment, smile designing, cosmetic dentistry, teeth whitening, braces and aligners, pediatric dentistry, gum treatments, wisdom tooth extraction and preventive dental care.',
  },
  {
    q: 'Do dental treatments hurt?',
    a: 'Most modern dental procedures are performed using advanced techniques and effective anesthesia to minimize discomfort.',
  },
  {
    q: 'How often should I visit a dentist?',
    a: 'It is generally recommended to schedule a dental check-up every six months to maintain good oral health and detect potential problems early.',
  },
  {
    q: 'Is professional teeth whitening safe for my enamel?',
    a: 'Absolutely. Professional teeth whitening performed by our experienced dentists is highly safe and effective, using clinically approved whitening agents that protect your enamel.',
  },
]

function schemaFor(key) {
  if (key === 'home') {
    return [
      dentistSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Dental Esthetique',
        url: SITE_URL,
      },
    ]
  }
  if (key === 'doctor') {
    return [dentistSchema, doctorSchema]
  }
  if (key === 'faq') {
    return [
      dentistSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ]
  }
  return [dentistSchema]
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildHtml(route) {
  const html = readFileSync(join(distDir, 'index.html'), 'utf-8')
  const url = `${SITE_URL}${route.path}`
  const image = `${SITE_URL}${route.image}`
  const body = renderPage(route.path)

  const titleTag = `<title>${escapeHtml(route.title)}</title>`
  const descriptionTag = `<meta name="description" content="${escapeHtml(route.description)}" />`
  const canonicalTag = `<link rel="canonical" href="${url}" />`
  const metaTags = [
    descriptionTag,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:site_name" content="Dental Esthetique" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ')
  const preloadTags = route.preloads
    .map(
      (p) =>
        `<link rel="preload" as="image" href="${p.href}" ${p.fetchpriority ? `fetchpriority="${p.fetchpriority}"` : ''} />`,
    )
    .join('\n    ')
  const schemaTags = schemaFor(route.schema)
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n    ')

  const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*\/?>/)
  const css = cssMatch
    ? readFileSync(join(distDir, cssMatch[1].replace(/^\//, '')), 'utf-8')
    : ''
  const inlineCss = css ? `    <style>${css.replace(/\/\*# sourceMappingURL[^*]*\*\/?/, '')}</style>` : ''

  const head = html.replace(/<head>([\s\S]*?)<\/head>/, (_, inner) => {
    let clean = inner
    clean = clean.replace(/<title>[\s\S]*?<\/title>/, titleTag)
    clean = clean.replace(/<link rel="canonical"[^>]*\/?>/, canonicalTag)
    clean = clean.replace(/<link rel="stylesheet"[^>]*\/?>/, inlineCss)
    clean = clean.replace(/<meta name="description"[^>]*\/?>/, '')
    clean = clean.replace(/<meta name="robots"[^>]*\/?>/, '')
    clean = clean.replace(/<meta (property="og:[^"]*"|name="twitter:[^"]*")[^>]*\/?>/g, '')
    clean = clean.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
    clean = clean.replace(/<link rel="preload" as="image"[^>]*\/?>/g, '')
    clean = clean.replace(/\n[ \t]*\n+/g, '\n')
    const earlyTags =
      (clean.match(/<meta charset[^>]*\/?>\s*/) || [''])[0] +
      (clean.match(/<meta name="viewport"[^>]*\/?>\s*/) || [''])[0]
    return `<head>\n    ${earlyTags}${preloadTags}\n    ${metaTags}\n    ${schemaTags}\n    ${clean.replace(/<meta charset[^>]*\/?>\s*/, '').replace(/<meta name="viewport"[^>]*\/?>\s*/, '')}\n  </head>`
  })

  const withBody = head.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`,
  )

  return withBody
}

for (const route of routes) {
  const outPath = join(distDir, route.file)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, buildHtml(route))
  console.log(`prerendered ${route.path || '/'} -> ${route.file}`)
}
console.log('done')