import { Link } from 'react-router-dom'

const IMG = '/images/home'

const PILL_SHADOW =
  '0px 2px 9.8px 0px rgba(95,160,139,0.34), 4px 0px 6.8px 0px rgba(95,160,139,0.01), inset 1px 1px 11.6px 0px rgba(95,160,139,0.06)'

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
      <p className="font-[family-name:var(--font-poppins)] text-[22.5px] leading-[27px] text-[#F48422]">
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
  badgeLeft = false,
  width = 399,
  flipShape = false,
}: {
  alt: string
  badgeLeft?: boolean
  width?: number
  flipShape?: boolean
}) {
  return (
    <div className="relative h-[556px] shrink-0" style={{ width: width + (badgeLeft ? 12 : 30) }}>
      <img
        src={`${IMG}/doctor.png`}
        alt={alt}
        className={`h-[556px] object-cover ${badgeLeft ? 'ml-auto' : ''}`}
        loading="lazy"
        style={{
          width,
          background: '#5FA08B',
          borderRadius: flipShape ? '24px 140px 24px 140px' : '140px 24px 140px 24px',
        }}
      />
      <ExperienceBadge mirror={badgeLeft} />
    </div>
  )
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex h-[55px] shrink-0 flex-col items-center justify-center rounded-[35px] border border-[rgba(0,0,0,0.06)] bg-white px-9 py-2"
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
      className="flex h-[47px] w-[442px] items-center justify-center rounded-2xl bg-[#F48422] py-[11px]"
      style={{ paddingLeft: 114, paddingRight: 114 }}
    >
      <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white">
        Book an appointment
      </span>
    </Link>
  )
}

export default function DoctorCard({
  name,
  role,
  description,
  statPills,
  topHeading,
  badgeLeft = false,
  width = 399,
  flipShape = false,
  className = '',
}: {
  name: string
  role: string
  description: string
  statPills: Array<{ value: string; label: string }>
  topHeading?: string
  badgeLeft?: boolean
  width?: number
  flipShape?: boolean
  className?: string
}) {
  const photo = <DoctorPhoto alt={name} badgeLeft={badgeLeft} width={width} flipShape={flipShape} />

  const content = (
    <div className="flex w-[577px] flex-col" style={{ gap: topHeading ? 27 : 36 }}>
      {topHeading ? (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <h2 className="w-[577px] font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-[45px] text-[#28231F]">
            {topHeading}
          </h2>
          <div className="h-[3px] w-10 bg-[#F48422]" />
        </div>
      ) : null}
      <div className="flex flex-col" style={{ gap: 8 }}>
        <p className="font-[family-name:var(--font-fraunces)] text-[32px] text-[#28231F]">{name}</p>
        <p className="font-[family-name:var(--font-poppins)] text-base tracking-[0.08em] text-[rgba(40,35,31,0.55)]">
          {role}
        </p>
      </div>
      <p className="w-[442px] font-[family-name:var(--font-poppins)] text-[13.5px] font-light leading-[21.94px] text-[rgba(26,28,25,0.7)]">
        {description}
      </p>
      <div className="flex h-[55px] w-[442px] items-center" style={{ gap: 16 }}>
        {statPills.map((pill) => (
          <StatPill key={pill.label} value={pill.value} label={pill.label} />
        ))}
      </div>
      <BookAppointmentButton />
    </div>
  )

  if (badgeLeft) {
    return (
      <div className={`absolute flex h-[556px] items-center ${className}`} style={{ gap: 109 }}>
        {content}
        {photo}
      </div>
    )
  }

  return (
    <div className={`absolute flex items-start ${className}`} style={{ gap: 109 }}>
      {photo}
      {content}
    </div>
  )
}
