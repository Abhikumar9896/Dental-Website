/**
 * Group 38 — overlapping tooth masks from About / Doctor Profile hero.
 * Baked PNGs already include shape + white border + tilt.
 */
const IMG = '/images/about'

type HeroToothCollageProps = {
  className?: string
}

export default function HeroToothCollage({ className = '' }: HeroToothCollageProps) {
  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 h-[649px] w-[1440px] overflow-visible ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* Soft glows behind collage */}
      <div
        className="absolute left-[820px] top-[160px] h-[320px] w-[320px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #B8D4E8 0%, transparent 70%)' }}
      />
      <div
        className="absolute left-[1080px] top-[320px] h-[220px] w-[220px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F8C9A0 0%, transparent 70%)' }}
      />

      {/* Nudged below nav (nav bottom ≈ 117) so teeth don’t sit under the bar */}
      <img
        src={`${IMG}/hero-tooth.png?v=7`}
        alt=""
        className="absolute"
        style={{
          left: 804,
          top: 140,
          width: 426.08,
          height: 436.33,
          filter: 'drop-shadow(0 12px 28px rgba(40, 35, 31, 0.14))',
        }}
      />
      <img
        src={`${IMG}/hero-smile.png?v=7`}
        alt=""
        className="absolute"
        style={{
          left: 1123,
          top: 315,
          width: 263.79,
          height: 271.34,
          filter: 'drop-shadow(0 10px 22px rgba(40, 35, 31, 0.16))',
        }}
      />
    </div>
  )
}
