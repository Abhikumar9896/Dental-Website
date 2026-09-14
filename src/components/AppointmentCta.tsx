import { useState, useEffect } from 'react'

const IMG = '/images/home'

const CTA_TREATMENT_NAMES = [
  'Implants',
  'Root Canal Treatment',
  'Braces',
  'Aligners',
  'Full Mouth Reconstruction',
  'Veneers',
  'Child Dentistry'
]

function RotatingText({ startIndex = 0 }: { startIndex?: number }) {
  const [index, setIndex] = useState(startIndex)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 2) % CTA_TREATMENT_NAMES.length)
        setFade(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`font-fraunces text-[20px] tracking-tight font-normal leading-none text-[#28231F] whitespace-nowrap transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      {CTA_TREATMENT_NAMES[index]}
    </span>
  )
}

type AppointmentCtaProps = {
  top: number
  className?: string
}

export default function AppointmentCta({ top, className = '' }: AppointmentCtaProps) {
  return (
    <div
      className={`absolute left-[60px] h-[448px] w-[1320px] overflow-hidden rounded-xl bg-[#165ba7] h-cta ${className}`}
      style={{ top }}
    >
      <div className="absolute left-[90px] top-[110px] flex w-[500px] flex-col z-20 h-cta-q">
        <span className="absolute -left-[50px] -top-[30px] text-[80px] font-fraunces font-bold text-white leading-none">
          “
        </span>
        <h2 className="font-fraunces text-[44px] font-medium leading-[1.3] text-white">
          The greatest gift you <br />
          can wear every day is a <br />
          healthy, confident <br />
          smile.
        </h2>
      </div>

      <div className="absolute left-[910px] top-[74px] z-[1] h-[280px] w-[280px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.15)] h-cta-blob">
        <img
          src={`${IMG}/cta-patient-new.webp`}
          alt="Happy Patient"
          className="h-full w-full object-cover object-left"
          loading="lazy"
        />
      </div>

      <div
        className="absolute left-[688px] top-[75px] z-[2] h-[138px] w-[282px] overflow-hidden rounded-xl bg-white h-cta-l"
        style={{
          boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
        }}
      >
        <p className="absolute left-5 top-6 z-20 font-fraunces text-xl font-normal leading-none text-[#28231F]">
          Patient Loyalty
        </p>
        <p className="absolute left-5 top-[72px] z-20 w-[137px] font-fraunces text-base font-normal leading-[1.25] text-[#606060]">
          Return for continued care
        </p>

        <img
          src={`${IMG}/loyalty-ring.svg?v=6`}
          alt=""
          className="pointer-events-none absolute left-[185px] top-[49px] z-[1] h-[110px] w-[111px]"
          loading="lazy"
        />

        <div
          className="absolute left-[175px] top-[61px] z-30 flex h-[34px] w-[34px] items-center justify-center rounded-full font-fraunces text-[10px] leading-none text-[#D35B8F]"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            border: '0.8px solid rgba(15, 63, 43, 0.051)',
            boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
          }}
        >
          80%
        </div>
      </div>

      <div
        className="absolute left-[1020px] top-[295px] z-[3] flex h-[56px] w-[280px] px-6 items-center justify-center rounded-xl bg-white h-cta-p1 transition-all duration-300"
        style={{ padding: '13px 20px 10px', gap: 10 }}
      >
        <RotatingText startIndex={0} />
      </div>

      <div
        className="absolute left-[980px] top-[359px] z-[3] flex h-[56px] w-[280px] px-6 items-center justify-center rounded-xl bg-[#b3d4f6] h-cta-p2 transition-all duration-300"
        style={{ padding: '13px 20px 10px', gap: 10 }}
      >
        <RotatingText startIndex={1} />
      </div>
    </div>
  )
}
