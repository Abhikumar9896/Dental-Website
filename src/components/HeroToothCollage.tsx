const IMG = '/images/about'

type HeroToothCollageProps = {
  className?: string
}

export default function HeroToothCollage({ className = '' }: HeroToothCollageProps) {
  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 h-[720px] w-[1440px] overflow-visible ${className}`}
      style={{ zIndex: 1 }}
    >
      <div
        className="absolute left-[820px] top-[280px] h-[320px] w-[320px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #B8D4E8 0%, transparent 70%)' }}
      />
      <div
        className="absolute left-[1080px] top-[440px] h-[220px] w-[220px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #eed9e4 0%, transparent 70%)' }}
      />

      <img
        src={`${IMG}/hero-tooth.webp?v=7`}
        alt=""
        className="absolute"
        loading="lazy"
        style={{
          left: 804,
          top: 240,
          width: 426.08,
          height: 436.33,
          filter: 'drop-shadow(0 12px 28px rgba(40, 35, 31, 0.14))',
        }}
      />
      <img
        src={`${IMG}/hero-smile.webp?v=7`}
        alt=""
        className="absolute"
        loading="lazy"
        style={{
          left: 1123,
          top: 415,
          width: 263.79,
          height: 271.34,
          filter: 'drop-shadow(0 10px 22px rgba(40, 35, 31, 0.16))',
        }}
      />
    </div>
  )
}
