import { Link } from 'react-router-dom'
import AppointmentCta from '../components/AppointmentCta'
import PageHero from '../components/ui/PageHero'

const IMG = '/images/about'
const W = 1440
const H = 2740

const stats = [
  { value: '5.0', label: 'CLINIC RATING', star: true },
  { value: '311+', label: 'PATIENT STORIES' },
  { value: '58', label: 'TREATMENTS' },
  { value: '2', label: 'SPECIALITIES' },
] as const

const storyPoints = [
  'Dental Esthétique was established with a vision to provide comprehensive dental care that combines modern technology, clinical excellence, and personalized attention.',
  'Our clinic offers multi-speciality treatment under one roof, so patients get continuity of care from the first consultation through every follow-up.',
  'We build trust through clear communication, transparent pricing, and treatment plans shaped around real patient goals, not one-size-fits-all protocols.',
] as const

const visionCards = [
  {
    label: 'VISION',
    title: "The clinic you'll never outgrow.",
    body: 'To become the most trusted destination for comprehensive dental care by delivering exceptional clinical outcomes, innovative treatments, and a patient-first experience.',
  },
  {
    label: 'MISSION',
    title: 'Precision care, explained simply.',
    body: 'To provide ethical, evidence-based, and personalized dental care using advanced technology while ensuring every patient feels informed, comfortable, and confident throughout their treatment journey.',
  },
] as const

const goodToKnow = [
  'Registered specialist dentists',
  'In house diagnostic imaging',
  'Digital payments incl. Paytm',
  'Sterilisation first protocols',
] as const

export default function About() {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 overflow-hidden bg-white"
        style={{ width: W, height: H, minWidth: W }}
      >
        <PageHero
          tagline="About Dental Esthétique"
          title="Care built on trust, not just treatments."
          description="Committed to creating healthier, brighter smiles through expert dental care,
                advanced technology, and specialised treatments."
        >
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#F48422] px-8 font-[family-name:var(--font-fraunces)] text-xl font-bold text-white"
          >
            Book an appointment
          </Link>
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#F48422] bg-transparent px-8 font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#F48422]"
          >
            See treatments
          </Link>
        </PageHero>

        <div className="absolute left-0 top-[649px] flex h-[148px] w-[1440px] items-center bg-white">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex h-full flex-1 flex-col items-center justify-center"
              style={{ gap: 10 }}
            >
              {i > 0 && (
                <span className="absolute left-0 top-1/2 h-[72px] w-px -translate-y-1/2 bg-[rgba(40,35,31,0.12)]" />
              )}
              <div className="flex items-center" style={{ gap: 8 }}>
                <span className="font-[family-name:var(--font-fraunces)] text-[48px] font-semibold leading-none text-[#F48422]">
                  {stat.value}
                </span>
                {'star' in stat && stat.star ? (
                  <img
                    src={`${IMG}/star.svg`}
                    alt=""
                    className="h-6 w-6"
                    style={{
                      filter:
                        'brightness(0) saturate(100%) invert(58%) sepia(82%) saturate(1482%) hue-rotate(352deg) brightness(99%) contrast(93%)',
                    }}
                  />
                ) : null}
              </div>
              <p className="font-[family-name:var(--font-poppins)] text-xs font-medium tracking-[0.14em] text-[#28231F]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-[797px] h-[739px] w-[1440px] bg-[#F9F4F1]">
          <div className="absolute left-[80px] top-[80px] w-[560px]">
            <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#F48422]">
              02- OUR STORY
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[40px] font-semibold leading-[1.1] text-[#28231F]">
              A Clinic Built Around Real Trust
            </h2>

            <ul className="mt-10 flex flex-col" style={{ gap: 22 }}>
              {storyPoints.map((point) => (
                <li key={point} className="flex items-start" style={{ gap: 14 }}>
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-[#F48422]" />
                  <p className="font-[family-name:var(--font-poppins)] text-base leading-relaxed tracking-[0.02em] text-[#767676]">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute left-[760px] top-[80px] h-[420px] w-[560px] overflow-hidden rounded-[32px]"
            style={{
              boxShadow: '0 0 0 1px rgba(244,132,34,0.35), 0 16px 48px rgba(244,132,34,0.22)',
            }}
          >
            <img
              src={`${IMG}/clinic-exterior.png`}
              alt="Dental Esthétique clinic exterior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="absolute left-0 top-[1536px] h-[435px] w-[1440px] bg-[#F9F4F1]">
          <div
            className="absolute left-[80px] top-[48px] flex w-[1280px] flex-col"
            style={{ gap: 36 }}
          >
            <div className="flex flex-col" style={{ gap: 8 }}>
              <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#F48422]">
                03-VISION & MISSION
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-semibold leading-none text-[#28231F]">
                What we're working toward
              </h2>
            </div>

            <div className="flex w-full" style={{ gap: 40 }}>
              {visionCards.map((card) => (
                <div
                  key={card.label}
                  className="box-border flex h-[232px] w-[560px] shrink-0 flex-col rounded-[40px] bg-[#5FA08B]"
                  style={{ padding: '28px 48px', gap: 10 }}
                >
                  <p className="font-[family-name:var(--font-poppins)] text-xl font-medium leading-none tracking-[0.04em] text-white">
                    {card.label}
                  </p>
                  <p className="font-[family-name:var(--font-fraunces)] text-[22px] font-semibold leading-tight text-white">
                    {card.title}
                  </p>
                  <p className="font-[family-name:var(--font-poppins)] text-base font-normal leading-[1.5] tracking-[0.03em] text-[#E1E1E1]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-[1971px] h-[220px] w-[1440px] bg-[#F9F4F1]">
          <div
            className="absolute left-[80px] top-[40px] flex w-[1280px] flex-col"
            style={{ gap: 36 }}
          >
            <div className="flex flex-col" style={{ gap: 8 }}>
              <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#F48422]">
                04-GOOD TO KNOW
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-semibold leading-none text-[#28231F]">
                Certifications and clinic standards
              </h2>
            </div>

            <div className="flex w-full items-center justify-between">
              {goodToKnow.map((item) => (
                <div key={item} className="flex items-center" style={{ gap: 10 }}>
                  <span className="size-2.5 shrink-0 rounded-full bg-[#F48422]" />
                  <p className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-base font-normal tracking-[0.02em] text-[#28231F]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AppointmentCta top={2240} />
      </div>
    </div>
  )
}
