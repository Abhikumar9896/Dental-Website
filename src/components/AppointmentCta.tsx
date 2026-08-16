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
      <div className="absolute left-[81px] top-[50px] flex w-[381px] flex-col" style={{ gap: 30 }}>
        <div className="flex w-[381px] flex-col" style={{ gap: 9 }}>
          <h2 className="font-poppins text-[42px] font-semibold leading-tight text-white">
            Your confident smile starts here
          </h2>
          <p className="w-[381px] font-poppins text-xl font-normal leading-[1.5] tracking-[0.04em] text-white/70">
            Book your appointment with us, take your first step
          </p>
        </div>

        <form
          className="flex w-[460px] flex-col relative z-20"
          style={{ gap: 10 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full gap-3">
            <input
              type="tel"
              placeholder="Phone Number"
              className="box-border h-11 min-w-0 flex-1 rounded-xl bg-white/95 focus:bg-white px-4 font-poppins text-[14px] text-[#28231F] outline-none placeholder:text-gray-400 border border-transparent focus:border-[#C187A4]/50 focus:ring-2 focus:ring-[#C187A4]/20 transition-all shadow-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="box-border h-11 min-w-0 flex-1 rounded-xl bg-white/95 focus:bg-white px-4 font-poppins text-[14px] text-[#28231F] outline-none placeholder:text-gray-400 border border-transparent focus:border-[#C187A4]/50 focus:ring-2 focus:ring-[#C187A4]/20 transition-all shadow-sm"
            />
          </div>

          <div className="flex w-full gap-3">
            <div className="relative flex-1 min-w-0">
              <input
                type="datetime-local"
                className="box-border h-11 w-full rounded-xl bg-white/95 focus:bg-white px-4 font-poppins text-[14px] text-gray-500 outline-none border border-transparent focus:border-[#C187A4]/50 focus:ring-2 focus:ring-[#C187A4]/20 transition-all shadow-sm cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>

            <div className="relative flex-1 min-w-0 rounded-xl bg-white/95 focus-within:bg-white shadow-sm border border-transparent focus-within:border-[#C187A4]/50 focus-within:ring-2 focus-within:ring-[#C187A4]/20 overflow-hidden flex transition-all">
              <textarea
                placeholder="Description (Optional)"
                className="box-border w-full h-11 min-h-[44px] max-h-[150px] resize-y bg-transparent px-4 py-[11px] font-poppins text-[14px] text-[#28231F] outline-none placeholder:text-gray-400"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="flex h-[46px] w-full items-center justify-center rounded-xl bg-[#C187A4] shadow-[0_4px_14px_rgba(193,135,164,0.4)] hover:bg-[#A66689] hover:shadow-[0_6px_20px_rgba(193,135,164,0.6)] transition-all hover:-translate-y-[1px]"
          >
            <span className="font-poppins text-[15px] font-semibold tracking-wide text-white">
              Schedule Appointment
            </span>
          </button>
        </form>
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
          PatientLoyalty
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
          Oral Surgery
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
