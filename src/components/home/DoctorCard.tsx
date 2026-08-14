import { Link } from 'react-router-dom'

const IMG = '/images/home'

const PILL_SHADOW =
  '0px 2px 9.8px 0px rgba(22, 91, 167,0.34), 4px 0px 6.8px 0px rgba(22, 91, 167,0.01), inset 1px 1px 11.6px 0px rgba(22, 91, 167,0.06)'

function ExperienceBadge({ mirror = false }: { mirror?: boolean }) {
  return (
    <div
      className={`absolute top-[32px] z-10 flex h-[86px] w-[86px] flex-col items-center justify-center rounded-full border p-3 ${
        mirror ? 'left-[-12px]' : 'right-[-12px]'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.6318)',
        borderColor: 'rgba(15, 63, 43, 0.051)',
        borderWidth: 0.8,
        boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1)',
      }}
    >
      <p className="font-[family-name:var(--font-poppins)] text-[22.5px] font-semibold leading-[27px] text-[#A66689]">
        18+
      </p>
      <p className="w-[64px] text-center font-[family-name:var(--font-poppins)] text-[9px] font-medium uppercase leading-3 tracking-[0.1em] text-[rgba(26,28,25,0.6)]">
        Years of
        <br />
        Excellence
      </p>
    </div>
  )
}

function DoctorPhoto({
  alt,
  imgSrc,
  badgeLeft = false,
  width = 399,
}: {
  alt: string
  imgSrc?: string
  badgeLeft?: boolean
  width?: number
  flipShape?: boolean
}) {
  return (
    <div className="relative h-[556px] shrink-0" style={{ width: width + (badgeLeft ? 12 : 30) }}>
      <div
        className={`relative h-full ${badgeLeft ? 'ml-auto' : ''}`}
        style={{
          width,
          overflow: 'hidden',
          background: '#f4f4f4',
        }}
      >
        <img
          src={imgSrc || `${IMG}/doctor.png`}
          alt={alt}
          className="h-full w-full object-cover object-[center_35%] scale-[1.03]"
          loading="lazy"
        />
      </div>
      <ExperienceBadge mirror={badgeLeft} />
    </div>
  )
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex h-[55px] shrink-0 flex-col items-center justify-center rounded-xl border border-[rgba(0,0,0,0.06)] bg-white px-9 py-2"
      style={{ boxShadow: PILL_SHADOW }}
    >
      <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-base font-medium tracking-[0.04em] text-[#212529]">
        {value}
      </span>
      <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-sm tracking-[0.04em] text-[#505050]">
        {label}
      </span>
    </div>
  )
}

function BookAppointmentButton() {
  return (
    <Link
      to="/contact"
      className="group flex h-[54px] w-[350px] items-center justify-center gap-2 rounded-md bg-[#A66689] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-medium text-white transition-all hover:bg-[#8F5675]"
    >
      Book an Appointment
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

export default function DoctorCard({
  name,
  role,
  description,
  statPills,
  bulletPoints = [],
  topHeading,
  imgSrc,
  badgeLeft = false,
  width = 399,
  flipShape = false,
  className = '',
  gap,
}: {
  name: string
  role: string
  description: string
  statPills: Array<{ value: string; label: string }>
  bulletPoints?: string[]
  topHeading?: string
  imgSrc?: string
  badgeLeft?: boolean
  width?: number
  flipShape?: boolean
  className?: string
  gap?: number
}) {
  const photo = <DoctorPhoto alt={name} imgSrc={imgSrc} badgeLeft={badgeLeft} width={width} flipShape={flipShape} />

  const content = (
    <div className="flex w-[577px] flex-col" style={{ gap: topHeading ? 27 : 36 }}>
      {topHeading ? (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <h2 className="w-[577px] font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-[45px] text-[#28231F]">
            {topHeading}
          </h2>
          <div className="h-[3px] w-10 bg-[#C187A4]" />
        </div>
      ) : null}
      <div className="flex flex-col" style={{ gap: 8 }}>
        <p className="font-[family-name:var(--font-poppins)] text-[34px] font-semibold text-[#333]">{name}</p>
        <p className="font-[family-name:var(--font-poppins)] text-[15px] font-medium text-[#1E73BE]">
          {role}
        </p>
      </div>
      <p className="w-[480px] font-[family-name:var(--font-poppins)] text-[15px] leading-relaxed text-gray-500">
        {description}
      </p>
      
      {statPills && statPills.length > 0 && (
        <div className="flex h-[55px] w-[442px] items-center" style={{ gap: 16 }}>
          {statPills.map((pill) => (
            <StatPill key={pill.label} value={pill.value} label={pill.label} />
          ))}
        </div>
      )}

      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="flex flex-col gap-3 mt-2">
          {bulletPoints.map((bp, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E73BE]/10 text-[#1E73BE]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-poppins)] text-[14px] font-medium text-gray-600">{bp}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <BookAppointmentButton />
      </div>
    </div>
  )

  if (badgeLeft) {
    return (
      <div className={`absolute flex h-[556px] items-center ${className}`} style={{ gap: gap ?? 109 }}>
        {content}
        {photo}
      </div>
    )
  }

  return (
    <div className={`absolute flex items-start ${className}`} style={{ gap: gap ?? 109 }}>
      {photo}
      {content}
    </div>
  )
}
