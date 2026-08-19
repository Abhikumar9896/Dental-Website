import StarRating from '../ui/StarRating'
import Reveal, { Float } from '../ui/Reveal'

const IMG = '/images/home'

export default function ShowcaseSection() {
  return (
    <div className="absolute left-0 top-[3395px] h-[840px] w-[1440px] overflow-hidden">
      <img
        src={`${IMG}/bgblue.webp`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Reveal
        y={40}
        blur
        className="absolute left-1/2 top-[264px] z-[2] flex w-[749px] -translate-x-1/2 flex-col items-center"
      >
        <div
          className="absolute left-1/2 top-0 z-[2] flex w-[749px] -translate-x-1/2 flex-col items-center"
          style={{ gap: 28 }}
        >
          <div className="relative h-[81px] w-[179px] overflow-hidden rounded-xl bg-[#EBF4FF] shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src={`${IMG}/logo.svg`}
              alt=""
              className="absolute left-[74px] top-[15px] h-[35px] w-8 object-contain"
            />
            <span className="absolute left-1/2 top-[52px] w-[108px] -translate-x-1/2 text-center font-fraunces text-xs font-bold leading-none text-[#28231F]">
              Dental Esthetique
            </span>
          </div>
          <h2 className="w-[778px] text-center font-fraunces text-[64px] font-semibold leading-none tracking-[0.02em] text-white">
            Precision Dentistry for
            <br />
            Confident Smiles
          </h2>
        </div>
      </Reveal>

      <Float amplitude={10} duration={5}>
        <div className="absolute left-[206px] top-[60px] z-[3] h-[240px] w-[251px] overflow-hidden rounded-xl bg-[#F4F9FF] shadow-[0px_12px_32px_rgba(0,0,0,0.12)]">
          <div className="absolute left-4 top-6 z-10 flex w-[220px] flex-col" style={{ gap: 7 }}>
            <div
              className="flex h-[31px] w-fit items-center whitespace-nowrap rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
              style={{ padding: '7px 10px' }}
            >
              <span className="font-fraunces text-base leading-none text-[#28231F]">
                Most Popular
              </span>
            </div>
            <p className="font-fraunces text-[32px] leading-none text-[#2B231F] whitespace-nowrap">Clear Aligners</p>
          </div>
          <img
            src={`${IMG}/teeth.webp`}
            alt=""
            className="pointer-events-none absolute z-[1] max-w-none object-contain"
            loading="lazy"
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
      </Float>

      <Float amplitude={8} duration={4} delay={0.5}>
        <img
          src={`${IMG}/avatar-circle-45d0fa.webp`}
          alt=""
          className="absolute left-[63px] top-[175px] z-20 h-[98px] w-[98px] rounded-full object-cover shadow-[0px_8px_20px_rgba(0,0,0,0.14)]"
          loading="lazy"
        />
      </Float>

      <Float amplitude={12} duration={5.5} delay={0.3}>
        <div
          className="absolute left-[968px] top-[93px] z-[3] flex h-[207px] w-[280px] flex-col rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.1)]"
          style={{
            backgroundColor: 'rgba(251, 252, 252, 0.98)',
            paddingTop: 32,
            paddingLeft: 31,
            paddingRight: 30,
            gap: 14,
          }}
        >
          <p className="font-fraunces text-[32px] leading-none text-[#28231F]">Patient rate</p>
          <div style={{ filter: 'hue-rotate(110deg)' }}>
            <StarRating large filled={4} />
          </div>
          <p className="font-fraunces text-[32px] font-semibold leading-none text-[#28231F]">
            4.8/5
          </p>
        </div>
      </Float>

      <Float amplitude={14} duration={6} delay={0.7}>
        <img
          src={`${IMG}/tooth-float-51da36.webp`}
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
      </Float>

      <Float amplitude={8} duration={4.5} delay={0.2}>
        <div
          className="absolute left-[1215px] top-[393px] z-[3] flex h-[56px] w-fit items-center justify-center rounded-md bg-white"
          style={{ padding: '13px 20px', gap: 10 }}
        >
          <span className="font-fraunces text-2xl font-normal leading-none text-[#28231F] whitespace-nowrap">
            Dental Implants
          </span>
        </div>
      </Float>
      <Float amplitude={10} duration={5} delay={0.6}>
        <div
          className="absolute left-[1134px] top-[461px] z-[3] flex h-[56px] w-[222px] items-center justify-center rounded-md bg-[#A3C9E2]"
          style={{ padding: '13px 10px', gap: 10 }}
        >
          <span className="font-fraunces text-2xl font-normal leading-none text-[#28231F]">
            Teeth Whitening
          </span>
        </div>
      </Float>

      <Float amplitude={10} duration={5.5} delay={0.4}>
        <div
          className="absolute left-[57px] top-[494px] z-[3] h-[166px] w-[325px] overflow-hidden rounded-xl bg-white"
          style={{
            boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
          }}
        >
          <p className="absolute left-7 top-7 z-20 font-fraunces text-[32px] font-normal leading-none text-[#28231F]">
            Patient Loyalty
          </p>
          <p className="absolute left-7 top-[88px] z-20 w-[170px] font-fraunces text-xl font-normal leading-[25px] text-[#606060]">
            return for continued care
          </p>

          <img
            src={`${IMG}/loyalty-ring.svg?v=6`}
            alt=""
            className="pointer-events-none absolute left-[223px] top-[51px] z-[1] h-[144px] w-[145px]"
          />

          <div
            className="absolute left-[205px] top-[72px] z-30 flex h-[34px] w-[34px] items-center justify-center rounded-full font-fraunces text-[10px] leading-none text-[#C187A4]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              border: '0.8px solid rgba(15, 63, 43, 0.051)',
              boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
          >
            80%
          </div>
        </div>
      </Float>

      <Float amplitude={8} duration={4.5} delay={0.1}>
        <img
          src={`${IMG}/clinic-row-60cc89.webp`}
          alt=""
          className="absolute left-[420px] top-[668px] z-[3] h-[146px] w-[268px] rounded-xl border border-white object-cover"
          loading="lazy"
        />
      </Float>

      <Float amplitude={11} duration={5} delay={0.5}>
        <div className="absolute left-[903px] top-[563px] z-[3] h-[242px] w-[278px] overflow-hidden rounded-xl bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.1)]">
          <p className="absolute left-8 top-[27px] z-10 font-fraunces text-2xl leading-none text-[#28231F]">
            Smile Designing
          </p>

          <div
            className="absolute z-20 flex h-[31px] w-[153px] items-center justify-center rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
            style={{
              left: 62.5,
              top: 78,
              padding: '7px 27px 7px 26px',
              gap: 10,
            }}
          >
            <span className="whitespace-nowrap font-fraunces text-sm font-normal leading-none text-[#1E73BE] no-underline">
              Custom Design
            </span>
          </div>

          <img
            src={`${IMG}/smile-designing.webp`}
            alt=""
            className="absolute left-[25px] top-[93px] z-[1] h-[127px] w-[228px] rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </Float>
    </div>
  )
}
