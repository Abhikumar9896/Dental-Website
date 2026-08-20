import { useEffect } from 'react'
import { SITE_URL } from '../../utils/seo'

const SAME_AS = [
  'https://www.facebook.com/dentalEsthetique/',
  'https://www.instagram.com/dental.Esthetique/',
  'https://wa.me/919818862265',
]

export function StructuredData() {
  useEffect(() => {
    const existing = document.getElementById('ld-dental')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'ld-dental'
    script.text = JSON.stringify({
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
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.5903527,
        longitude: 77.3452027,
      },
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
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '10:00',
          closes: '14:00',
        },
      ],
      sameAs: SAME_AS,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '100',
      },
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
    })
    document.head.appendChild(script)
    return () => {
      document.getElementById('ld-dental')?.remove()
    }
  }, [])

  return null
}