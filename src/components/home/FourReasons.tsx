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

export default function FourReasons() {
  return (
    <div
      className="absolute left-[114px] top-[2934px] flex w-[1120px] flex-col"
      style={{ gap: 55 }}
    >
      <div className="flex w-[638px] flex-col" style={{ gap: 15 }}>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[48px] font-semibold leading-none text-[#28231F]">
          Four reasons patients stay
        </h2>
        <p className="h-[60px] font-[family-name:var(--font-poppins)] text-xl font-normal leading-none tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
          Two specialities, one standard of care. Here&apos;s what that actually means day to day.
        </p>
      </div>

      <div className="flex w-full items-start" style={{ gap: 80 }}>
        {reasons.map((r) => (
          <div key={r.num} className="flex w-[220px] flex-col items-center" style={{ gap: 40 }}>
            <div className="relative flex h-[97px] w-[177px] items-start justify-center overflow-hidden">
              <span
                className="font-[family-name:var(--font-fraunces)] text-[128px] font-semibold leading-none"
                style={{
                  background: 'linear-gradient(180deg, #A66689 0%, rgba(166,102,137,0.25) 85%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {r.num}
              </span>
            </div>
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
  )
}
