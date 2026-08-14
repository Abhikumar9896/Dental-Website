import { Link } from 'react-router-dom'
import AppointmentCta from '../components/AppointmentCta'
import PageHero from '../components/ui/PageHero'

const W = 1440
const H = 2480

const PILL_SHADOW =
  '0px 2px 9.8px 0px rgba(22, 91, 167,0.34), 4px 0px 6.8px 0px rgba(22, 91, 167,0.01), inset 1px 1px 11.6px 0px rgba(22, 91, 167,0.06)'

const pills = [
  '18 Yrs Experience',
  '₹300 Consultation Fee',
  '10K+ Happy Customers',
  'Mon-Sun 9-1PM & 2-8PM',
] as const

const specialisations = [
  {
    n: '01',
    title: 'Microscopic Root Canal',
    body: 'Magnification assisted endodontic treatment for higher precision.',
  },
  {
    n: '02',
    title: 'Re-Root Canal',
    body: 'Revision treatment for previously root canaled teeth needing further care.',
  },
  {
    n: '03',
    title: 'Conservative Restorations',
    body: 'Preserving natural tooth structure wherever possible before considering extraction.',
  },
] as const

const CARD_SHADOW = '0px 24.3px 24.3px 0px rgba(22, 91, 167, 0.71)'

export default function DoctorProfile() {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 overflow-hidden bg-[#F9F4F1]"
        style={{ width: W, height: H, minWidth: W }}
      >
        <PageHero
          tagline="Doctor Profile"
          title="Meet the Experts Behind Every Smile."
          description="An experienced dental professional dedicated to providing advanced, patient-focused
                dental care. Learn about qualifications, expertise, and book your consultation at
                Dental Esthetique."
        >
          <Link
            to="/contact"
            className="inline-flex h-12 w-[246px] items-center justify-center rounded-2xl bg-[#C187A4] font-[family-name:var(--font-fraunces)] text-xl font-bold text-white"
          >
            Book an appointment
          </Link>
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#C187A4] bg-transparent px-8 font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#C187A4]"
          >
            See treatments
          </Link>
        </PageHero>

        <div
          className="absolute left-[83px] top-[700px] flex h-[430px] w-[1273px] overflow-hidden rounded-[24px] bg-[#f2f8ff]"
          style={{ border: '1px solid rgba(22, 91, 167, 0.76)' }}
        >
          <div className="relative flex h-full w-[540px] shrink-0 flex-col justify-end bg-[#165ba7] px-12 pb-14">
            <h2 className="font-[family-name:var(--font-fraunces)] text-[32px] font-semibold leading-none text-white">
              Dr. Deepika Singhal
            </h2>
            <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.14em] text-white">
              ENDODONTIST
            </p>
          </div>

          <div
            className="flex h-full flex-1 flex-col justify-center"
            style={{ padding: '40px 48px', gap: 28 }}
          >
            <p className="w-[616px] font-[family-name:var(--font-poppins)] text-xl font-normal leading-[1.35] tracking-[0.04em] text-[#28231F]">
              MDS Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience,
              focused on root canal therapy and complex restorative cases supported by 16 documented
              patient stories at this clinic.
            </p>

            <div className="grid w-[616px] grid-cols-2" style={{ gap: 16 }}>
              {pills.map((label) => (
                <div
                  key={label}
                  className="box-border flex h-[55px] items-center justify-center rounded-[35px] bg-white"
                  style={{
                    padding: '8px 36px',
                    boxShadow: PILL_SHADOW,
                  }}
                >
                  <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.02em] text-[#28231F]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="flex h-12 w-[616px] items-center justify-center rounded-2xl bg-[#C187A4]"
            >
              <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white">
                Book an appointment
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute left-0 top-[1180px] h-[409px] w-[1440px] bg-[#F9F4F1]">
          <div
            className="absolute left-[100px] top-[48px] flex w-[1239px] flex-col"
            style={{ gap: 15 }}
          >
            <div className="flex flex-col" style={{ gap: 8 }}>
              <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#C187A4]">
                02-FOCUS AREAS
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[40px] font-semibold leading-none text-[#28231F]">
                Fields of Specialisation
              </h2>
            </div>

            <div className="flex w-[1239px]" style={{ gap: 24 }}>
              {specialisations.map((card) => (
                <div
                  key={card.n}
                  className="box-border flex h-[208px] w-[397px] shrink-0 flex-col rounded-[24px] border border-[#10437b] bg-[#165ba7]"
                  style={{
                    padding: '28px 48px',
                    gap: 10,
                    boxShadow: CARD_SHADOW,
                  }}
                >
                  <p className="font-[family-name:var(--font-fraunces)] text-base font-normal leading-none text-white/55">
                    {card.n}
                  </p>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-none text-white">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-base font-normal leading-[1.4] tracking-[0.02em] text-white/90">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-[100px] top-[1620px] w-[1239px]">
          <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#C187A4]">
            03-AWARDS
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[40px] font-semibold leading-none text-[#28231F]">
            Awards
          </h2>
        </div>

        <AppointmentCta top={1980} />
      </div>
    </div>
  )
}
