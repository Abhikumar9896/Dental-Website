const IMG = '/images/home'

type AppointmentCtaProps = {
  top: number
  className?: string
}

export default function AppointmentCta({ top, className = '' }: AppointmentCtaProps) {
  return (
    <div
      className={`absolute left-[60px] h-[448px] w-[1320px] overflow-hidden rounded-[20px] bg-[#65A18E] ${className}`}
      style={{ top }}
    >
      <div className="absolute left-[81px] top-[60px] flex w-[381px] flex-col" style={{ gap: 60 }}>
        <div className="flex w-[381px] flex-col" style={{ gap: 9 }}>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[40px] font-semibold leading-none text-white">
            Your confident smile starts here
          </h2>
          <p className="w-[381px] font-[family-name:var(--font-poppins)] text-xl font-normal leading-[1.5] tracking-[0.04em] text-white/70">
            Book your appointment with us, take your first step
          </p>
        </div>

        <form
          className="flex w-full flex-col"
          style={{ gap: 12 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full" style={{ gap: 12 }}>
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="box-border h-10 min-w-0 flex-1 rounded-xl bg-white px-[30px] py-2 font-[family-name:var(--font-poppins)] text-base tracking-[0.04em] text-[#28231F] outline-none placeholder:text-[#28231F]"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              aria-label="Contact Number"
              className="box-border h-10 min-w-0 flex-1 rounded-xl bg-white px-[30px] py-2 font-[family-name:var(--font-poppins)] text-base tracking-[0.04em] text-[#28231F] outline-none placeholder:text-[#28231F]"
            />
          </div>
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-[#F48422]"
          >
            <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white">
              Schedule Appointment
            </span>
          </button>
        </form>
      </div>

      <img
        src={`${IMG}/cta-blob.png`}
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
        <p className="absolute left-5 top-6 z-20 font-[family-name:var(--font-fraunces)] text-xl font-normal leading-none text-[#28231F]">
          PatientLoyalty
        </p>
        <p className="absolute left-5 top-[72px] z-20 w-[137px] font-[family-name:var(--font-fraunces)] text-base font-normal leading-[1.25] text-[#606060]">
          return for continued care
        </p>

        <img
          src={`${IMG}/loyalty-ring.svg?v=6`}
          alt=""
          className="pointer-events-none absolute left-[185px] top-[49px] z-[1] h-[110px] w-[111px]"
          loading="lazy"
        />

        <div
          className="absolute left-[175px] top-[61px] z-30 flex h-[34px] w-[34px] items-center justify-center rounded-full font-[family-name:var(--font-fraunces)] text-[10px] leading-none text-[#F48422]"
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
        className="absolute left-[1119px] top-[295px] z-[3] flex h-[56px] w-[174px] items-center justify-center rounded-[30px] bg-white"
        style={{ padding: '13px 10px 10px', gap: 10 }}
      >
        <span className="font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-none text-[#28231F]">
          Oral Surgery
        </span>
      </div>

      <div
        className="absolute left-[1028px] top-[359px] z-[3] flex h-[56px] w-[222px] items-center justify-center rounded-[30px] bg-[#B5E5D6]"
        style={{ padding: '13px 10px 10px', gap: 10 }}
      >
        <span className="font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-none text-[#28231F]">
          Teeth Whitening
        </span>
      </div>
    </div>
  )
}
