import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import AppointmentCta from '../components/AppointmentCta'

/**
 * Pixel-mapped from Figma frame "dental new" (cached node data).
 * Fixed 1440 artboard — no freestyle layout.
 * No new Figma API calls (rate limit active).
 */
const IMG = '/images/home'
const W = 1440
const H = 6940
const PILL_SHADOW =
  '0px 2px 9.8px 0px rgba(95,160,139,0.34), 4px 0px 6.8px 0px rgba(95,160,139,0.01), inset 1px 1px 11.6px 0px rgba(95,160,139,0.06)'

const reviews = [
  {
    initial: 'S',
    name: 'Sushil Gupta',
    accent: '#C8C3C0',
    x: 87,
    text: 'Got my crown refixed and it was a very good experience the doctor knew what they were doing and I hardly felt any pain during the procedure.',
  },
  {
    initial: 'R',
    name: 'Rishabh Mudgal',
    accent: '#F48422',
    x: 0,
    text: 'One of the best dentist in sec 22 noida.I would like to thank Dr Abhinav for the treatment',
  },
  {
    initial: 'A',
    name: 'Amar Aggarwal',
    accent: '#C8C3C0',
    x: 87,
    text: 'Dental esthetique, Dr Deepika and Dr Abhinav made sure my wisdom tooth extraction and root canal went smoothly.',
  },
] as const

const reasons = [
  {
    num: '01',
    title: 'Same day slots',
    desc: 'Book appointments with ease, including same day care for urgent dental needs.',
  },
  {
    num: '02',
    title: 'Transparent pricing',
    desc: 'Consultation fees and treatment costs are explained before you commit.',
  },
  {
    num: '03',
    title: 'In-house imaging',
    desc: "Diagnostic imaging on-site, so most cases don't need an outside referral.",
  },
  {
    num: '04',
    title: 'Specialist led',
    desc: 'Every treatment is led by a specialist from the first visit, not a general practitioner.',
  },
] as const

const faqs = [
  'Are dental treatments painful?',
  'How long does a dental implant last?',
  'How often should I visit the dentist?',
  'Do you offer cosmetic dentistry treatments?',
] as const

function Stars({ large = false, filled = 5 }: { large?: boolean; filled?: number }) {
  const src = large ? `${IMG}/star-lg.svg` : `${IMG}/star.svg`
  const size = large ? 40 : 24
  return (
    <div className="flex items-center" style={{ gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={src}
          alt=""
          width={size}
          height={size}
          style={i >= filled ? { opacity: 0.4, filter: 'grayscale(1) brightness(1.4)' } : undefined}
        />
      ))}
    </div>
  )
}

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
  /** When true: large radii on top-right + bottom-left (image on right column). */
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

function ArrowBtn({
  className = '',
  height = 46,
}: {
  className?: string
  height?: number
}) {
  return (
    <Link
      to="/services"
      className={`flex w-[54px] shrink-0 items-center justify-center rounded-[10px] bg-[#68A391] ${className}`}
      style={{
        height,
        padding: height === 39 ? '7px 15px' : '11px 15px',
      }}
      aria-label="View treatment"
    >
      <img src={`${IMG}/arrow-up.svg`} alt="" width={24} height={24} />
    </Link>
  )
}

/**
 * Notched card path — every corner rounded (outer + cutout edges), matching Figma.
 * cut top-right:   ┌──┐ ┌
 *                  │  │ │  ← arrow in gap
 *                  └──┘ │
 * cut bottom-right: ┌────┐
 *                   │  ┌─┘
 *                   └──┘ ← arrow in gap
 */
function notchedPath(
  w: number,
  h: number,
  cut: 'top-right' | 'bottom-right',
  nw: number,
  nh: number,
  r: number,
) {
  const ir = Math.min(10, Math.floor(Math.min(nw, nh) / 3))

  if (cut === 'top-right') {
    // Clockwise from top-left — all 7 corners rounded
    return [
      `M ${r} 0`,
      `H ${w - nw - ir}`,
      `Q ${w - nw} 0 ${w - nw} ${ir}`, // into notch (top of cut)
      `V ${nh - ir}`,
      `Q ${w - nw} ${nh} ${w - nw + ir} ${nh}`, // inner L
      `H ${w - ir}`,
      `Q ${w} ${nh} ${w} ${nh + ir}`, // onto right edge
      `V ${h - r}`,
      `Q ${w} ${h} ${w - r} ${h}`,
      `H ${r}`,
      `Q 0 ${h} 0 ${h - r}`,
      `V ${r}`,
      `Q 0 0 ${r} 0`,
      'Z',
    ].join(' ')
  }

  // bottom-right cut — all corners rounded
  return [
    `M ${r} 0`,
    `H ${w - r}`,
    `Q ${w} 0 ${w} ${r}`,
    `V ${h - nh - ir}`,
    `Q ${w} ${h - nh} ${w - ir} ${h - nh}`, // into notch (top of cut)
    `H ${w - nw + ir}`,
    `Q ${w - nw} ${h - nh} ${w - nw} ${h - nh + ir}`, // inner L
    `V ${h - ir}`,
    `Q ${w - nw} ${h} ${w - nw - ir} ${h}`, // onto bottom edge
    `H ${r}`,
    `Q 0 ${h} 0 ${h - r}`,
    `V ${r}`,
    `Q 0 0 ${r} 0`,
    'Z',
  ].join(' ')
}

function NotchedCard({
  className = '',
  width,
  height,
  cut,
  arrowHeight,
  bordered = false,
  radius = 16,
  fill,
  gradientId,
  imageSrc,
  children,
}: {
  className?: string
  width: number
  height: number
  cut: 'top-right' | 'bottom-right'
  arrowHeight: number
  bordered?: boolean
  radius?: number
  fill?: string
  gradientId?: string
  imageSrc?: string
  children?: ReactNode
}) {
  const AW = 54
  const GAP = 8
  const nw = AW + GAP
  const nh = arrowHeight + GAP
  const d = notchedPath(width, height, cut, nw, nh, radius)
  const patternId = `notch-img-${width}-${height}-${cut}`
  const gradId = gradientId || `notch-grad-${width}-${height}`

  return (
    <div className={`absolute ${className}`} style={{ width, height }}>
      <svg
        className="pointer-events-none absolute inset-0"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden
      >
        <defs>
          {imageSrc ? (
            <pattern id={patternId} patternUnits="userSpaceOnUse" width={width} height={height}>
              <image href={imageSrc} width={width} height={height} preserveAspectRatio="xMidYMid slice" />
            </pattern>
          ) : null}
          {fill === 'gum-gradient' ? (
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="1%" stopColor="#E3F3EE" />
              <stop offset="100%" stopColor="#A9DFCE" />
            </linearGradient>
          ) : null}
        </defs>
        <path
          d={d}
          fill={
            imageSrc
              ? `url(#${patternId})`
              : fill === 'gum-gradient'
                ? `url(#${gradId})`
                : fill || '#fff'
          }
          stroke={bordered ? 'rgba(0,0,0,0.22)' : 'none'}
          strokeWidth={bordered ? 1 : 0}
          strokeLinejoin="round"
        />
      </svg>
      {children}
      <ArrowBtn
        className={
          cut === 'top-right' ? 'absolute right-0 top-0 z-30' : 'absolute bottom-0 right-0 z-30'
        }
        height={arrowHeight}
      />
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 bg-white"
        style={{ width: W, height: H, minWidth: W }}
      >
        {/* ========== HERO 1440×778 — matched to Figma screenshots ========== */}
        <div className="absolute left-0 top-0 h-[778px] w-[1440px] overflow-hidden">
          <img
            src={`${IMG}/hero-bg-5ed7fb.png`}
            alt=""
            className="absolute left-0 top-0 h-[778px] w-[1440px] object-cover"
          />
          <div className="absolute left-0 top-0 h-[778px] w-[1440px] bg-black/55" />

          {/* Hero copy: left 120 / top 207 / w 633 / gap 19 */}
          <div className="absolute left-[120px] top-[207px] flex w-[633px] flex-col gap-[19px]">
            <div className="flex flex-col gap-6">
              {/* Badge — white pill */}
              <div className="inline-flex h-12 w-fit items-center gap-3 rounded-3xl bg-white px-8">
                <span className="inline-block size-2.5 shrink-0 rounded-full bg-[#F48422]" />
                <span className="font-[family-name:var(--font-poppins)] text-base tracking-[0.03em] text-black">
                  Advanced Dental Care
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-fraunces)] text-[54px] font-bold leading-[1.05] text-white">
                Transforming{' '}
                <span className="font-[family-name:var(--font-gabriela)] font-normal text-[#F48422]">
                  Smiles
                </span>{' '}
                with Advanced Dental Care.
              </h1>
            </div>

            {/* Frame 325 — w 504 / gap 24 */}
            <div className="flex w-[504px] flex-col gap-6">
              <p className="font-[family-name:var(--font-poppins)] text-base leading-relaxed tracking-[0.03em] text-white/90">
                From routine checkups to full mouth rehabilitation, Dental Esthétique brings together
                two specialities under one roof with the same clinical care whether you&apos;re here
                for a filling or a full transformation.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-12 w-[246px] items-center justify-center rounded-2xl bg-[#F48422] font-[family-name:var(--font-fraunces)] text-xl font-bold text-white"
                >
                  Book an appointment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex h-12 w-[246px] items-center justify-center rounded-2xl border border-white font-[family-name:var(--font-fraunces)] text-xl font-bold text-white"
                >
                  See treatments
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========== DOCTOR 2 — Deepika y:897 ========== */}
        <div className="absolute left-[163px] top-[897px] flex items-start" style={{ gap: 109 }}>
          <DoctorPhoto alt="Dr. Deepika Singhal" />
          <div className="flex w-[577px] flex-col" style={{ gap: 27 }}>
            <div className="flex flex-col" style={{ gap: 12 }}>
              <h2 className="w-[577px] font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-[45px] text-[#28231F]">
                The specialist behind the microscope.
              </h2>
              <div className="h-[3px] w-10 bg-[#F48422]" />
            </div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <p className="font-[family-name:var(--font-fraunces)] text-[32px] text-[#28231F]">
                Dr. Deepika Singhal
              </p>
              <p className="font-[family-name:var(--font-poppins)] text-base tracking-[0.08em] text-[rgba(40,35,31,0.55)]">
                ENDODONTIST
              </p>
            </div>
            <p className="w-[442px] font-[family-name:var(--font-poppins)] text-[13.5px] font-light leading-[21.94px] text-[rgba(26,28,25,0.7)]">
              MDS in Conservative Dentistry &amp; Endodontics, BDS. Eighteen years of clinical
              experience, focused on root canal therapy and complex restorative cases, supported by 16
              documented patient stories at this clinic.
            </p>
            <div className="flex h-[55px] w-[442px] items-center" style={{ gap: 16 }}>
              <StatPill value="₹300" label="Consultation Fees" />
              <StatPill value="10K+" label="Happy Customer" />
            </div>
            <BookAppointmentButton />
          </div>
        </div>

        {/* ========== DOCTOR 3 — Abhinav y:1534 ========== */}
        <div
          className="absolute left-[172px] top-[1534px] flex h-[556px] w-[1095px] items-center"
          style={{ gap: 109 }}
        >
          <div className="flex w-[577px] flex-col" style={{ gap: 36 }}>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <p className="font-[family-name:var(--font-fraunces)] text-[32px] text-[#28231F]">
                Dr. Abhinav Jain
              </p>
              <p className="font-[family-name:var(--font-poppins)] text-base tracking-[0.08em] text-[rgba(40,35,31,0.55)]">
                ENDODONTIST
              </p>
            </div>
            <p className="w-full font-[family-name:var(--font-poppins)] text-[13.5px] font-light leading-[21.94px] text-[rgba(26,28,25,0.7)]">
              MDS in Conservative Dentistry &amp; Endodontics, BDS. Eighteen years of clinical
              experience, focused on root canal therapy and complex restorative cases, supported by 16
              documented patient stories at this clinic.
            </p>
            <div className="flex h-[55px] w-[442px] items-center" style={{ gap: 16 }}>
              <StatPill value="₹300" label="Consultation Fees" />
              <StatPill value="10K+" label="Happy Customer" />
            </div>
            <BookAppointmentButton />
          </div>
          <DoctorPhoto alt="Dr. Abhinav Jain" badgeLeft width={409} />
        </div>

        {/* ========== KEY TREATMENTS — Group 33, 1275×507 cards ========== */}
        <div className="absolute left-[80px] top-[2189px] flex w-[1275px] flex-col" style={{ gap: 40 }}>
          <div className="flex w-full items-start" style={{ gap: 378 }}>
            <div
              className="flex h-[55px] w-[211px] shrink-0 items-center justify-center rounded-[18px] bg-[#F2FFFB]"
              style={{
                padding: '15px 28px',
                boxShadow:
                  '0px 4px 6.2px 0px rgba(105,163,145,0.39), 4px 0px 66.8px 0px rgba(255,255,255,0.25)',
              }}
            >
              <span className="whitespace-nowrap font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#28231F]">
                Key Treatments
              </span>
            </div>
            <h2 className="h-[118px] w-[686px] font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-none text-[#28231F]">
              Most requested treatments for every smile need.
            </h2>
          </div>

          <div className="relative h-[507px] w-[1275px]">
            {/* Left — 305×503 stats + tags */}
            <div className="absolute left-0 top-1 h-[503px] w-[305px] rounded-[20px] border border-[rgba(0,0,0,0.22)] bg-white">
              <div className="absolute left-7 top-7 w-[259px]">
                <p className="h-[81px] font-[family-name:var(--font-poppins)] text-[64px] font-normal leading-none text-[#28231F]">
                  5000+
                </p>
                <p className="font-[family-name:var(--font-poppins)] text-xl text-[#696969]">
                  Successful treatments performed
                </p>
              </div>
              <div
                className="absolute left-7 top-[212px] flex h-[50px] items-center rounded-[25px] bg-[#71C1A7]"
                style={{ padding: '12px 23px', gap: 10 }}
              >
                <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-white">
                  Root Canal
                </span>
              </div>
              <div
                className="absolute left-[85px] top-[282px] flex h-[50px] items-center rounded-[25px] bg-[#BDE7D9]"
                style={{ padding: '12px 23px' }}
              >
                <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-[#28231F]">
                  Teeth Whitening
                </span>
              </div>
              <div
                className="absolute left-7 top-[352px] flex h-[50px] items-center rounded-[25px] bg-[#EAEAEA]"
                style={{ padding: '12px 23px' }}
              >
                <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-[#28231F]">
                  Oral Surgery
                </span>
              </div>
              <div
                className="absolute left-[88px] top-[422px] flex h-[50px] items-center rounded-[25px] bg-[#BDE7D9]"
                style={{ padding: '12px 23px' }}
              >
                <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-[#28231F]">
                  Dental Implants
                </span>
              </div>
            </div>

            {/* Middle — Gum Surgeries: body cutout + arrow in bottom-right notch */}
            <NotchedCard
              className="left-[325px] top-0"
              width={305}
              height={503}
              cut="bottom-right"
              arrowHeight={39}
              radius={20}
              fill="gum-gradient"
              gradientId="gum-card-grad"
            >
              <div className="absolute left-7 top-10 z-20 flex w-[220px] flex-col" style={{ gap: 7 }}>
                <div
                  className="flex h-[31px] w-[118px] items-center rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
                  style={{ padding: '7px 10px' }}
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-base text-[#28231F]">
                    Top Popular
                  </span>
                </div>
                <p className="font-[family-name:var(--font-fraunces)] text-[32px] leading-none text-[#28231F]">
                  Gum Surgeries
                </p>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-[118px] z-[1] flex h-[230px] w-[280px] -translate-x-1/2 items-center justify-center">
                <img
                  src={`${IMG}/gum-aligner.png`}
                  alt=""
                  className="object-contain"
                  style={{
                    width: 255.67,
                    height: 211.21,
                    transform: 'scaleY(-1) rotate(148.53deg)',
                  }}
                />
              </div>

              <p className="absolute left-7 top-[366px] z-20 h-[86px] w-[220px] font-[family-name:var(--font-poppins)] text-sm font-light leading-[17.06px] text-[#28231F]">
                Advanced gum surgery to treat infection, reshape gum tissue, and restore healthier,
                stronger smiles with lasting comfort and confidence.
              </p>
            </NotchedCard>

            {/* Right top — Implant: L-notch top-right, arrow sits in cutout */}
            <NotchedCard
              className="left-[650px] top-1"
              width={625}
              height={241}
              cut="top-right"
              arrowHeight={46}
              radius={20}
              bordered
              fill="#fff"
            >
              <div className="absolute left-7 top-7 z-10 flex w-[501px] flex-col" style={{ gap: 60 }}>
                <h3 className="w-[340px] font-[family-name:var(--font-fraunces)] text-[32px] leading-8 text-[#28231F]">
                  Implant Supported Dentures
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-xl text-[#696969]">
                  Experience enhanced comfort, stability, and chewing with implants
                </p>
              </div>
            </NotchedCard>

            {/* Right bottom — Full Mouth: L-notch top-right */}
            <NotchedCard
              className="left-[650px] top-[266px]"
              width={625}
              height={241}
              cut="top-right"
              arrowHeight={46}
              radius={20}
              bordered
              imageSrc={`${IMG}/full-mouth-rehab.png`}
            >
              <div className="absolute left-7 top-[29px] z-10 flex w-[501px] flex-col" style={{ gap: 60 }}>
                <h3 className="w-[340px] font-[family-name:var(--font-fraunces)] text-[32px] leading-8 text-white">
                  Full Mouth Rehabilitation
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-xl text-white">
                  Rebuild your smile with personalized full mouth rehabilitation care.
                </p>
              </div>
            </NotchedCard>
          </div>
        </div>

        {/* ========== 5 — FOUR REASONS @ Figma 114 / 2916 / 1120×420 ========== */}
        <div className="absolute left-[114px] top-[2916px] flex w-[1120px] flex-col" style={{ gap: 55 }}>
          <div className="flex w-[638px] flex-col" style={{ gap: 15 }}>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[48px] font-semibold leading-none text-[#28231F]">
              Four reasons patients stay
            </h2>
            <p className="h-[60px] font-[family-name:var(--font-poppins)] text-xl font-normal leading-none tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
              Two specialities, one standard of care. Here&apos;s what that actually means day to day.
            </p>
          </div>

          {/* Frame 2147225219 — horizontal, gap 80 */}
          <div className="flex w-full items-start" style={{ gap: 80 }}>
            {reasons.map((r) => (
              <div key={r.num} className="flex w-[220px] flex-col items-center" style={{ gap: 40 }}>
                {/* Number frame 177×97 */}
                <div className="relative flex h-[97px] w-[177px] items-start justify-center overflow-hidden">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[128px] font-semibold leading-none"
                    style={{
                      background: 'linear-gradient(180deg, #E8A87C 0%, rgba(253,230,211,0.25) 85%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {r.num}
                  </span>
                </div>
                {/* Text stack — gap 4 */}
                <div className="flex w-full flex-col items-center" style={{ gap: 4 }}>
                  <p className="text-center font-[family-name:var(--font-poppins)] text-xl font-medium leading-none text-[#242221]">
                    {r.title}
                  </p>
                  <p className="w-[236px] text-center font-[family-name:var(--font-poppins)] text-sm font-normal leading-none tracking-[0.04em] text-[rgba(42,42,42,0.7)]">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== PRECISION SHOWCASE — Group 36 @ 1440×840 ========== */}
        <div className="absolute left-0 top-[3416px] h-[840px] w-[1440px] overflow-hidden">
          <img
            src={`${IMG}/showcase-bg-462684.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Center logo + headline — Frame 2147225221: 179×81, r21, #E1F0EC */}
          <div
            className="absolute left-1/2 top-[264px] z-[2] flex w-[749px] -translate-x-1/2 flex-col items-center"
            style={{ gap: 28 }}
          >
            <div className="relative h-[81px] w-[179px] overflow-hidden rounded-[21px] bg-[#E1F0EC] shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
              <img
                src={`${IMG}/logo.svg`}
                alt=""
                className="absolute left-[74px] top-[15px] h-[35px] w-8 object-contain"
              />
              <span className="absolute left-1/2 top-[52px] w-[108px] -translate-x-1/2 text-center font-[family-name:var(--font-fraunces)] text-xs font-bold leading-none text-[#28231F]">
                Dental Esthetique
              </span>
            </div>
            <h2 className="w-[778px] text-center font-[family-name:var(--font-fraunces)] text-[64px] font-semibold leading-none tracking-[0.02em] text-white">
              Precision Dentistry for
              <br />
              Confident Smiles
            </h2>
          </div>

          {/* Top Popular / Gum Surgeries — 251×240, r20, #F2FCF9; image edge-to-edge */}
          <div className="absolute left-[206px] top-[60px] z-[3] h-[240px] w-[251px] overflow-hidden rounded-[20px] bg-[#F2FCF9] shadow-[0px_12px_32px_rgba(0,0,0,0.12)]">
            <div className="absolute left-4 top-6 z-10 flex w-[220px] flex-col" style={{ gap: 7 }}>
              <div
                className="flex h-[31px] w-fit items-center whitespace-nowrap rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
                style={{ padding: '7px 10px' }}
              >
                <span className="font-[family-name:var(--font-fraunces)] text-base leading-none text-[#28231F]">
                  Top Popular
                </span>
              </div>
              <p className="font-[family-name:var(--font-fraunces)] text-[32px] leading-none text-[#2B231F]">
                Gum Surgeries
              </p>
            </div>
            <img
              src={`${IMG}/gum-aligner.png`}
              alt=""
              className="pointer-events-none absolute z-[1] max-w-none object-contain"
              style={{
                left: '50%',
                bottom: -28,
                width: 340,
                height: 240,
                transform: 'translateX(-50%) scaleY(-1) rotate(142.48deg)',
                transformOrigin: 'center center',
              }}
            />
          </div>

          {/* Avatar 98×98 — left of card */}
          <img
            src={`${IMG}/avatar-circle-45d0fa.png`}
            alt=""
            className="absolute left-[63px] top-[175px] z-20 h-[98px] w-[98px] rounded-full object-cover shadow-[0px_8px_20px_rgba(0,0,0,0.14)]"
          />

          {/* Patient rate — 280×207, r20, #FBFCFC 98%; pad 32/31; gap 14 */}
          <div
            className="absolute left-[968px] top-[93px] z-[3] flex h-[207px] w-[280px] flex-col rounded-[20px] shadow-[0px_12px_32px_rgba(0,0,0,0.1)]"
            style={{
              backgroundColor: 'rgba(251, 252, 252, 0.98)',
              paddingTop: 32,
              paddingLeft: 31,
              paddingRight: 30,
              gap: 14,
            }}
          >
            <p className="font-[family-name:var(--font-fraunces)] text-[32px] leading-none text-[#28231F]">
              Patient rate
            </p>
            <Stars large filled={4} />
            <p className="font-[family-name:var(--font-fraunces)] text-[32px] font-semibold leading-none text-[#28231F]">
              4.8/5
            </p>
          </div>

          {/* Tooth — Figma image 61: 112.36×140.97 @ 1151/3611, rotate -38.96° */}
          <img
            src={`${IMG}/tooth-float-51da36.png`}
            alt=""
            className="pointer-events-none absolute z-20 max-w-none object-contain drop-shadow-[0px_14px_28px_rgba(0,0,0,0.18)]"
            style={{
              left: 1151,
              top: 195,
              width: 112.36,
              height: 140.97,
              transform: 'rotate(38.96deg)',
              transformOrigin: 'center center',
            }}
          />

          {/* Oral Surgery — 174×56, r30, #FFF */}
          <div
            className="absolute left-[1215px] top-[393px] z-[3] flex h-[56px] w-[174px] items-center justify-center rounded-[30px] bg-white"
            style={{ padding: '13px 10px', gap: 10 }}
          >
            <span className="font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-none text-[#28231F]">
              Oral Surgery
            </span>
          </div>
          {/* Teeth Whitening — 222×56, r30, #B5E5D6 */}
          <div
            className="absolute left-[1134px] top-[461px] z-[3] flex h-[56px] w-[222px] items-center justify-center rounded-[30px] bg-[#B5E5D6]"
            style={{ padding: '13px 10px', gap: 10 }}
          >
            <span className="font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-none text-[#28231F]">
              Teeth Whitening
            </span>
          </div>

          {/* PatientLoyalty — 325×166; donut clipped inside card like Figma */}
          <div
            className="absolute left-[57px] top-[494px] z-[3] h-[166px] w-[325px] overflow-hidden rounded-[24px] bg-white"
            style={{
              boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
          >
            <p className="absolute left-7 top-7 z-20 font-[family-name:var(--font-fraunces)] text-[32px] font-normal leading-none text-[#28231F]">
              PatientLoyalty
            </p>
            <p className="absolute left-7 top-[88px] z-20 w-[170px] font-[family-name:var(--font-fraunces)] text-xl font-normal leading-[25px] text-[#606060]">
              return for continued care
            </p>

            {/* Group 29 donut — 145×144 @ 223/51 */}
            <img
              src={`${IMG}/loyalty-ring.svg?v=6`}
              alt=""
              className="pointer-events-none absolute left-[223px] top-[51px] z-[1] h-[144px] w-[145px]"
            />

            {/* 80% badge */}
            <div
              className="absolute left-[205px] top-[72px] z-30 flex h-[34px] w-[34px] items-center justify-center rounded-full font-[family-name:var(--font-fraunces)] text-[10px] leading-none text-[#F48422]"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                border: '0.8px solid rgba(15, 63, 43, 0.051)',
                boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
              }}
            >
              80%
            </div>
          </div>

          {/* Clinic photo — Frame 2147225228: 268×146 @ 420/668, r24, 1px #FFF border */}
          <img
            src={`${IMG}/clinic-row-60cc89.png`}
            alt=""
            className="absolute left-[420px] top-[668px] z-[3] h-[146px] w-[268px] rounded-[24px] border border-white object-cover"
          />

          {/* Smile Designing — Frame 2147225229: 278×242, r24 */}
          <div className="absolute left-[903px] top-[563px] z-[3] h-[242px] w-[278px] overflow-hidden rounded-[24px] bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.1)]">
            <p className="absolute left-8 top-[27px] z-10 font-[family-name:var(--font-fraunces)] text-2xl leading-none text-[#28231F]">
              Smile Designing
            </p>

            {/* Custom Design — 153×31, r8, white, border 6% black; centered on image top */}
            <div
              className="absolute z-20 flex h-[31px] w-[153px] items-center justify-center rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
              style={{
                left: 62.5,
                top: 78,
                padding: '7px 27px 7px 26px',
                gap: 10,
              }}
            >
              <span className="whitespace-nowrap font-[family-name:var(--font-fraunces)] text-sm font-normal leading-none text-[#058B63] no-underline">
                Custom Design
              </span>
            </div>

            {/* Smile image — Frame 2147225230: 228×127 @ 25/93, r24 */}
            <img
              src={`${IMG}/smile-designing.png`}
              alt=""
              className="absolute left-[25px] top-[93px] z-[1] h-[127px] w-[228px] rounded-[24px] object-cover"
            />
          </div>
        </div>

        {/* ========== REVIEWS — 1206×489, gap 120 @ left 117 / top 4336 ========== */}
        <div className="absolute left-[117px] top-[4336px] flex h-[489px] w-[1206px]" style={{ gap: 120 }}>
          {/* Left column — heading + CTA */}
          <div className="flex w-[398px] flex-col" style={{ gap: 24 }}>
            <div className="relative flex flex-col" style={{ gap: 15 }}>
              {/* Group 26 — sits in section margin; text indented so no W overlap / no clip */}
              <img
                src={`${IMG}/quotes.svg`}
                alt=""
                className="pointer-events-none absolute left-[-90px] top-[-60px] z-0 h-[167px] w-[163px]"
              />
              <div className="relative z-10 flex flex-col pl-[55px]" style={{ gap: 15 }}>
                <h2 className="w-[287px] font-[family-name:var(--font-fraunces)] text-[36px] font-semibold leading-none text-[#28231F]">
                  What our customers says
                </h2>
                <p className="w-[343px] font-[family-name:var(--font-poppins)] text-xl font-normal leading-[1.2] tracking-[0.04em] text-[rgba(43,35,31,0.7)]">
                  Real feedback from real patients, gathered from verified Google reviews across every
                  treatment offered.
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="ml-[55px] inline-flex h-[47px] w-[200px] items-center justify-center rounded-2xl bg-[#F48422]"
              style={{ padding: '11px 16px', gap: 10 }}
            >
              <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white">
                View All Reviews
              </span>
            </Link>
          </div>

          {/* Right column — 3 staggered cards 601×147 */}
          <div className="relative h-[489px] w-[688px]">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className="absolute flex h-[147px] w-[601px]"
                style={{ left: review.x, top: i * 171 }}
              >
                {/* left accent bar */}
                <div
                  className="h-[147px] w-2.5 shrink-0 rounded-l"
                  style={{ backgroundColor: review.accent }}
                />
                <div className="flex h-[147px] w-[591px] items-start rounded-r-xl border border-[rgba(0,0,0,0.04)] bg-[#F9F4F1] px-[23px] py-[21px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="flex w-full items-start" style={{ gap: 28 }}>
                    {/* avatar 64×64, r36 */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[36px] bg-[#F48422]">
                      <span className="font-[family-name:var(--font-fraunces)] text-[32px] font-semibold leading-none text-white">
                        {review.initial}
                      </span>
                    </div>
                    {/* content 442, gap 8 */}
                    <div className="flex min-w-0 flex-1 flex-col" style={{ gap: 8 }}>
                      <div className="flex items-center justify-between" style={{ gap: 4 }}>
                        <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-none text-[rgba(40,35,31,0.82)]">
                          {review.name}
                        </p>
                        <Stars />
                      </div>
                      <p className="font-[family-name:var(--font-poppins)] text-base font-normal leading-snug tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== FAQ — 1320×529, #F9F4F1, r20; pad 40/59/40/60 ========== */}
        <div
          className="absolute left-[60px] top-[4905px] box-border flex h-[529px] w-[1320px] rounded-[20px] bg-[#F9F4F1]"
          style={{ padding: '40px 59px 40px 60px' }}
        >
          {/* Inner 1202×449 — horizontal gap 135 */}
          <div className="flex h-[449px] w-[1202px]" style={{ gap: 135 }}>
            {/* Left: FAQ badge + tooth — width 322 so 322+135+745 = 1202 */}
            <div className="flex h-full w-[322px] shrink-0 flex-col justify-between">
              <div
                className="inline-flex w-fit rounded-[18px] bg-[#F2FFFB] px-7 py-[15px]"
                style={{
                  boxShadow:
                    '0px 4px 6.2px 0px rgba(105,163,145,0.39), 4px 0px 66.8px 0px rgba(255,255,255,0.25)',
                }}
              >
                <span className="font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-none text-[#28231F]">
                  FAQ
                </span>
              </div>

              {/* Tooth — 113×113, r92, mint fill + teal border */}
              <div className="relative h-[113px] w-[113px] shrink-0 overflow-hidden rounded-full border border-[#A8D5C8] bg-[#6BA491]">
                <img
                  src={`${IMG}/faq-tooth-22acc5.png`}
                  alt=""
                  className="absolute left-1/2 top-[6px] h-[106px] w-[90px] max-w-none -translate-x-1/2 object-contain"
                />
              </div>
            </div>

            {/* Right: heading 745 + accordion 730, vertical gap 60 */}
            <div className="flex w-[745px] shrink-0 flex-col" style={{ gap: 60 }}>
              <h2 className="whitespace-nowrap font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-none text-[#28231F]">
                Get clear answer to your questions
              </h2>

              <div className="flex w-[730px] flex-col" style={{ gap: 40 }}>
                {faqs.map((q, i) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex h-9 w-full shrink-0 items-center justify-between text-left"
                  >
                    <span className="min-w-0 flex-1 pr-4 text-2xl tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
                      {q}
                    </span>
                    <img
                      src={`${IMG}/arrow-down.svg`}
                      alt=""
                      width={24}
                      height={24}
                      className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========== GALLARY — Group 20: 1072×818 @ 153/5514 ========== */}
        <div className="absolute left-[153px] top-[5514px] h-[818px] w-[1072px]">
          {/* Group 19 — 668×86 */}
          <div className="flex w-[668px] flex-col" style={{ gap: 12 }}>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-semibold leading-none text-[#28231F]">
              Gallary
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-xl font-normal leading-[1.2] tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
              A look inside the clinic : real spaces, real equipment, real care.
            </p>
          </div>

          {/* Frame 2147225193 — 1072×608 @ y+146, gap 12 */}
          <div className="absolute left-0 top-[146px] flex h-[608px] w-[1072px]" style={{ gap: 12 }}>
            {/* Left tall — 429×608, r24, border 2 #F8AB64 */}
            <div className="box-border h-[608px] w-[429px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
              <img
                src={`${IMG}/gallery-1-1b2b07.png`}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right column — 631 wide */}
            <div className="flex w-[631px] shrink-0 flex-col" style={{ gap: 12 }}>
              {/* Top — 631×314 */}
              <div className="box-border h-[314px] w-[631px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
                <img
                  src={`${IMG}/gallery-2-1cd89a.png`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom row — 631×273, gap 12 → 309 + 310 */}
              <div className="flex h-[273px] w-[631px] shrink-0" style={{ gap: 12 }}>
                <div className="box-border h-[273px] w-[309px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
                  <img
                    src={`${IMG}/gallery-3-717ab4.png`}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="box-border h-[273px] w-[310px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
                  <img
                    src={`${IMG}/gallery-4-57e024.png`}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SHOW MORE — right-aligned under grid */}
          <button
            type="button"
            className="absolute right-0 top-[794px] font-[family-name:var(--font-poppins)] text-base font-semibold uppercase tracking-[0.03em] text-[#F8AB64]"
          >
            SHOW MORE
          </button>
        </div>

        <AppointmentCta top={6412} />

        {/* WhatsApp float — Figma x:1329 y:819 */}
        <a
          href="https://wa.me/919818862265"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50"
          style={{ filter: 'drop-shadow(0px 4px 24.5px rgba(50, 217, 81, 1))' }}
          aria-label="WhatsApp"
        >
          <img src={`${IMG}/whatsapp-345821.png`} alt="WhatsApp" width={52} height={55} />
        </a>
      </div>
    </div>
  )
}
