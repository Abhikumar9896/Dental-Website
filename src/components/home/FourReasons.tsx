import { Stagger, StaggerItem } from '../ui/Reveal'

const reasons = [
  {
    num: '01',
    title: 'Same-day slots',
    desc: 'Book appointments with ease, including same-day care for urgent dental needs.',
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
    title: 'Specialist-led',
    desc: 'Every treatment is led by a specialist from the first visit, not a general practitioner.',
  },
] as const

export default function FourReasons() {
  return (
    <div className="relative left-0 top-0 flex w-full flex-col px-5 py-10 lg:absolute lg:left-[78px] lg:top-[2934px] lg:w-[1280px] lg:px-0 lg:py-0 gap-8 lg:gap-10 h-reasons">
      <Stagger className="flex w-full lg:w-[638px] flex-col gap-2.5 lg:gap-[15px] h-reasons-t" gap={0.15}>
        <StaggerItem>
          <h2 className="font-poppins text-[28px] lg:text-[48px] font-normal leading-tight lg:leading-none text-[#28231F]">
            Four reasons patients stay
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="h-auto lg:h-[60px] font-poppins text-[14px] lg:text-xl font-normal leading-relaxed lg:leading-none tracking-[0.04em] text-[rgba(40,35,31,0.7)] max-w-[34rem]">
            Two specialities, one standard of care. Here&apos;s what that actually means day to day.
          </p>
        </StaggerItem>
      </Stagger>

      <Stagger
        className="grid grid-cols-2 lg:flex w-full items-start gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:gap-[133px] h-reasons-row"
        gap={0.12}
      >
        {reasons.map((r) => (
          <StaggerItem key={r.num} className="flex w-full lg:w-[220px] flex-col items-start lg:items-center h-reasons-i">
            <div className="flex w-full lg:w-[220px] flex-col items-start lg:items-center gap-3 lg:gap-10">
              <div className="relative flex h-[52px] lg:h-[97px] w-[100px] lg:w-[177px] items-start justify-start lg:justify-center overflow-hidden">
                <span
                  className="font-fraunces text-[52px] lg:text-[128px] font-semibold leading-none h-reasons-num"
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
              <div className="flex w-full flex-col items-start lg:items-center gap-1.5 lg:gap-1">
                <p className="text-left lg:text-center font-poppins text-[15px] lg:text-xl font-medium leading-snug lg:leading-none text-[#242221]">
                  {r.title}
                </p>
                <p className="w-full lg:w-[236px] text-left lg:text-center font-poppins text-[12.5px] lg:text-sm font-normal leading-relaxed lg:leading-none tracking-[0.02em] lg:tracking-[0.04em] text-[rgba(42,42,42,0.7)]">
                  {r.desc}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}
