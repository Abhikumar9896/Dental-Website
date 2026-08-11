import { Link } from 'react-router-dom'

const IMG = '/images/home'

export default function HeroBanner() {
  return (
    <div className="absolute left-0 top-0 h-[778px] w-[1440px] overflow-hidden">
      <img
        src={`${IMG}/hero-bg-5ed7fb.png`}
        alt=""
        className="absolute left-0 top-0 h-[778px] w-[1440px] object-cover"
      />
      <div className="absolute left-0 top-0 h-[778px] w-[1440px] bg-black/55" />

      <div className="absolute left-[120px] top-[207px] flex w-[633px] flex-col gap-[19px]">
        <div className="flex flex-col gap-6">
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

        <div className="flex w-[504px] flex-col gap-6">
          <p className="font-[family-name:var(--font-poppins)] text-base leading-relaxed tracking-[0.03em] text-white/90">
            From routine checkups to full mouth rehabilitation, Dental Esthétique brings together
            two specialities under one roof with the same clinical care whether you&apos;re here for
            a filling or a full transformation.
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
  )
}
