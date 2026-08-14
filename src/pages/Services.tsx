import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppointmentCta from '../components/AppointmentCta'
import PageHero from '../components/ui/PageHero'

const TREAT = '/treatment'
const W = 1440
const H = 2560

const categories = [
  'All',
  'Cosmetic',
  'Dentistry',
  'Endodontics',
  'Implantology',
  'Oral Surgery',
  'Orthodontics',
  'Pediatrics',
] as const

const treatments = [
  {
    n: '01',
    title: 'Dental Implants',
    body: 'Titanium implants and implant supported dentures that restore full chewing function.',
    category: 'Implantology',
    image: `${TREAT}/124444e512a34a3e0e199c8868c73f5cc08466f8.jpg`,
  },
  {
    n: '02',
    title: 'Root Canal Treatment',
    body: 'Microscopic, precision assisted endodontic treatment led by an 18-year specialist.',
    category: 'Endodontics',
    image: `${TREAT}/1cfa679e5bd770b2e29bc71e9dc32c48841d3c20.jpg`,
  },
  {
    n: '03',
    title: 'Smile Designing',
    body: 'A tailored plan combining alignment, whitening and restorations for your ideal smile.',
    category: 'Cosmetic',
    image: `${TREAT}/2d71db289c5640027a1e8d5734fc272c934f4aba.jpg`,
  },
  {
    n: '04',
    title: 'Teeth Whitening',
    body: 'Safe, in clinic whitening for a noticeably brighter smile in a single visit.',
    category: 'Cosmetic',
    image: `${TREAT}/a38ff2867a54e420bdd51bd0c58ed3deb36291df.jpg`,
  },
  {
    n: '05',
    title: 'Braces & Aligners',
    body: 'Traditional braces and clear aligners for lasting, comfortable alignment.',
    category: 'Orthodontics',
    image: `${TREAT}/2bb840a47c7231c3acef785ef795f0b062785d9b.jpg`,
  },
  {
    n: '06',
    title: 'Pediatric Dentistry',
    body: 'Gentle, patient care built for younger patients and first dental visits.',
    category: 'Pediatrics',
    image: `${TREAT}/efd998b877afaca3e4c56095f833c37fc81edcfc.jpg`,
  },
] as const

export default function Services() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const visible = active === 'All' ? treatments : treatments.filter((t) => t.category === active)

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 overflow-hidden bg-[#F9F4F1]"
        style={{ width: W, height: H, minWidth: W }}
      >
        <PageHero
          tagline="Treatments"
          title="Smile Solutions for Everyone"
          description="A curated view of our most requested procedures across nine specialities, part of a
                full menu of 58 treatments offered in-house."
        >
          <Link
            to="/contact"
            className="inline-flex h-12 w-[246px] items-center justify-center rounded-xl bg-[#C187A4] font-[family-name:var(--font-fraunces)] text-xl font-bold text-white"
          >
            Book an appointment
          </Link>
          <a
            href="#catalogue"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-[#C187A4] bg-transparent px-8 font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#C187A4]"
          >
            See treatments
          </a>
        </PageHero>

        <div id="catalogue" className="absolute left-[80px] top-[700px] w-[1280px]">
          <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#C187A4]">
            01- CARE CATALOGUE
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[40px] font-semibold leading-none text-[#28231F]">
            58 Treatments
          </h2>

          <div className="mt-8 flex flex-wrap items-center" style={{ gap: 12 }}>
            {categories.map((cat) => {
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2.5 font-[family-name:var(--font-poppins)] text-base font-medium tracking-[0.03em] transition-colors ${
                    isActive
                      ? 'bg-[#C187A4] text-white'
                      : 'border border-[#FEDECA] bg-white text-[#404040]'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          <div className="mt-10 grid grid-cols-3" style={{ gap: 24 }}>
            {visible.map((item) => (
              <div
                key={item.n + item.title}
                className="box-border flex h-[396px] w-full flex-col rounded-xl border border-[#FEDECA] bg-[#6CA895]"
                style={{ padding: '8px 16px 16px', gap: 10 }}
              >
                <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-lg">
                  <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-col" style={{ gap: 4 }}>
                    <span className="font-[family-name:var(--font-fraunces)] text-sm font-normal leading-none text-white">
                      {item.n}
                    </span>
                    <h3 className="max-w-[223px] font-[family-name:var(--font-fraunces)] text-[22px] font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="px-2 font-[family-name:var(--font-poppins)] text-base font-normal leading-[1.35] tracking-[0.03em] text-[rgba(239,239,239,0.93)]">
                  {item.body}
                </p>

                <Link
                  to="/contact"
                  className="mt-auto flex h-9 w-[131px] shrink-0 items-center justify-center self-end rounded-full bg-[#C187A4]"
                  style={{ padding: '6px 15px', gap: 10 }}
                >
                  <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-white">
                    Enquiry
                  </span>
                  <span className="text-sm leading-none text-white">→</span>
                </Link>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 ml-auto block font-[family-name:var(--font-poppins)] text-base font-semibold uppercase tracking-[0.04em] text-[#C187A4]"
          >
            SHOW MORE
          </button>
        </div>

        <AppointmentCta top={1920} />
      </div>
    </div>
  )
}
