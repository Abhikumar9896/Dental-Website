const IMG = '/images/home'

type AppointmentCtaProps = {
  top: number
  className?: string
}

export default function AppointmentCta({ top, className = '' }: AppointmentCtaProps) {
  return (
    <div
      className={`absolute left-[60px] h-[448px] w-[1320px] overflow-hidden rounded-xl bg-[#165ba7] ${className}`}
      style={{ top }}
    >
      <div className="absolute left-[90px] top-[110px] flex w-[500px] flex-col z-20">
        <span className="absolute -left-[50px] -top-[30px] text-[80px] font-fraunces font-bold text-white leading-none">
          “
        </span>
        <h2 className="font-fraunces text-[44px] font-medium leading-[1.3] text-white">
          The greatest gift you <br />
          can wear every day is a <br />
          healthy, confident <br />
          smile.
        </h2>
        <span className="absolute right-[220px] -bottom-[40px] text-[80px] font-fraunces font-bold text-white leading-none">
          ”
        </span>
      </div>

      <img
        src={`${IMG}/cta-blob.webp`}
        alt=""
        className="pointer-events-none absolute left-[897px] top-10 z-[1] h-[367px] w-[353px]"
        loading="lazy"
      />

      <div
        className="absolute left-[688px] top-[75px] z-[2] h-[138px] w-[282px] overflow-hidden rounded-xl bg-white"
        style={{
          boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
        }}
      >
        <p className="absolute left-5 top-6 z-20 font-fraunces text-xl font-normal leading-none text-[#28231F]">
          Patient Loyalty
        </p>
        <p className="absolute left-5 top-[72px] z-20 w-[137px] font-fraunces text-base font-normal leading-[1.25] text-[#606060]">
          return for continued care
        </p>

        <img
          src={`${IMG}/loyalty-ring.svg?v=6`}
          alt=""
          className="pointer-events-none absolute left-[185px] top-[49px] z-[1] h-[110px] w-[111px]"
          loading="lazy"
        />

        <div
          className="absolute left-[175px] top-[61px] z-30 flex h-[34px] w-[34px] items-center justify-center rounded-full font-fraunces text-[10px] leading-none text-[#C187A4]"
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
        className="absolute left-[1119px] top-[295px] z-[3] flex h-[56px] w-[174px] items-center justify-center rounded-xl bg-white"
        style={{ padding: '13px 10px 10px', gap: 10 }}
      >
        <span className="font-fraunces text-2xl font-normal leading-none text-[#28231F]">
          Gums Surgeries
        </span>
      </div>

      <div
        className="absolute left-[1028px] top-[359px] z-[3] flex h-[56px] w-[222px] items-center justify-center rounded-xl bg-[#b3d4f6]"
        style={{ padding: '13px 10px 10px', gap: 10 }}
      >
        <span className="font-fraunces text-2xl font-normal leading-none text-[#28231F]">
          Teeth Whitening
        </span>
      </div>
    </div>
  )
}
