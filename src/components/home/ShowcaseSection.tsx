import StarRating from '../ui/StarRating'
import Reveal, { Float } from '../ui/Reveal'

const IMG = '/images/home'

export default function ShowcaseSection() {
  return (
    <div className="relative left-0 top-0 h-auto w-full overflow-hidden lg:absolute lg:top-[3395px] lg:h-[840px] lg:w-[1440px] h-shc">
      <img
        src={`${IMG}/bgblue.webp`}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Reveal
        y={40}
        blur
        className="relative lg:absolute left-auto lg:left-1/2 top-auto lg:top-[264px] z-[2] flex w-full lg:w-[749px] lg:-translate-x-1/2 flex-col items-center order-1 h-shc-head"
      >
        <div className="relative lg:absolute left-auto lg:left-1/2 top-0 z-[2] flex w-full lg:w-[749px] lg:-translate-x-1/2 flex-col items-center px-5 lg:px-0 gap-3.5 lg:gap-5 h-shc-headin">
          <div className="relative flex h-auto w-fit flex-col items-center gap-1 rounded-xl bg-[#EBF4FF] px-5 py-3 shadow-[0px_8px_24px_rgba(0,0,0,0.08)] lg:block lg:h-[81px] lg:w-[179px] lg:overflow-hidden lg:px-0 lg:py-0 h-shc-logo">
            <img
              src={`${IMG}/logo.svg`}
              alt=""
              className="relative h-7 w-7 object-contain lg:absolute lg:left-[74px] lg:top-[15px] lg:h-[35px] lg:w-8"
            />
            <span className="relative text-center font-fraunces text-[11px] font-bold leading-tight text-[#28231F] lg:absolute lg:left-1/2 lg:top-[52px] lg:w-[108px] lg:-translate-x-1/2 lg:text-xs lg:leading-none">
              Dental Esthetique
            </span>
          </div>
          <h2 className="w-full lg:w-[778px] text-center font-fraunces text-[28px] lg:text-[64px] font-semibold leading-[1.15] lg:leading-none tracking-[0.02em] text-white h-shc-h">
            Precision Dentistry for
            <br />
            Confident Smiles
          </h2>
        </div>
      </Reveal>

      <Float amplitude={10} duration={5} className="order-2 w-full h-shc-f1">
        <div className="relative mx-4 mb-3 lg:mx-0 lg:mb-0 lg:absolute left-auto lg:left-[206px] top-auto lg:top-[60px] z-[3] flex h-auto lg:h-[240px] w-[calc(100%-32px)] max-w-[400px] lg:w-[251px] flex-col lg:block overflow-hidden rounded-xl bg-[#F4F9FF] shadow-[0px_12px_32px_rgba(0,0,0,0.12)] h-shc-f1-card">
          <div className="relative z-20 flex w-full shrink-0 flex-col gap-2 px-5 py-5 lg:absolute lg:left-4 lg:top-6 lg:z-10 lg:w-[220px] lg:px-0 lg:py-0 lg:gap-[7px] h-shc-f1-txt">
            <div
              className="flex h-[28px] lg:h-[31px] w-fit items-center whitespace-nowrap rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
              style={{ padding: '6px 10px' }}
            >
              <span className="font-fraunces text-[13px] lg:text-base leading-none text-[#28231F]">
                Most Popular
              </span>
            </div>
            <p className="font-fraunces text-[22px] lg:text-[32px] leading-tight lg:leading-none text-[#2B231F]">
              Clear Aligners
            </p>
            <p className="mt-1 font-poppins text-[13px] leading-relaxed text-[#696969] lg:hidden">
              Discreet, custom-made invisible aligners for a confident smile.
            </p>
          </div>

          <img
            src={`${IMG}/teeth.webp`}
            alt=""
            className="pointer-events-none absolute z-[1] hidden max-w-none object-contain lg:block h-shc-f1-desk-img"
            loading="lazy"
            style={{
              left: '50%',
              bottom: -28,
              width: 280,
              height: 200,
              transform: 'translateX(-50%) scaleY(-1) rotate(142.48deg)',
              transformOrigin: 'center center',
            }}
          />
        </div>
      </Float>

      <Float amplitude={8} duration={4} delay={0.5} className="h-shc-f2">
        <img
          src={`${IMG}/avatar-circle-45d0fa.webp`}
          alt=""
          className="absolute left-[63px] top-[175px] z-20 h-[98px] w-[98px] rounded-full object-cover shadow-[0px_8px_20px_rgba(0,0,0,0.14)]"
          loading="lazy"
        />
      </Float>

      <Float amplitude={12} duration={5.5} delay={0.3} className="order-3 w-full h-shc-f3">
        <div
          className="relative mx-4 mb-3 lg:mx-0 lg:mb-0 lg:absolute left-auto lg:left-[968px] top-auto lg:top-[93px] z-[3] flex h-auto lg:h-[207px] w-[calc(100%-32px)] max-w-[400px] lg:w-[280px] flex-col rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.1)]"
          style={{
            backgroundColor: 'rgba(251, 252, 252, 0.98)',
          }}
        >
          <div className="flex flex-col gap-2.5 px-5 py-4 lg:gap-3 lg:px-6 lg:pb-6 lg:pt-7">
            <p className="font-fraunces text-[22px] lg:text-[32px] leading-none text-[#28231F]">
              Patient rate
            </p>
            <div style={{ filter: 'hue-rotate(110deg)' }}>
              <StarRating large filled={4} />
            </div>
            <p className="font-fraunces text-[24px] lg:text-[32px] font-semibold leading-none text-[#28231F]">
              4.8/5
            </p>
          </div>
        </div>
      </Float>

      <Float amplitude={14} duration={6} delay={0.7} className="h-shc-f4">
        <img
          src={`${IMG}/tooth-float-51da36.webp`}
          alt=""
          loading="lazy"
          decoding="async"
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

      <Float amplitude={8} duration={4.5} delay={0.2} className="h-shc-f5">
        <div
          className="absolute left-[1215px] top-[393px] z-[3] flex h-[56px] w-fit items-center justify-center rounded-md bg-white"
          style={{ padding: '13px 20px', gap: 10 }}
        >
          <span className="font-fraunces text-2xl font-normal leading-none text-[#28231F] whitespace-nowrap">
            Dental Implants
          </span>
        </div>
      </Float>
      <Float amplitude={10} duration={5} delay={0.6} className="h-shc-f6">
        <div
          className="absolute left-[1134px] top-[461px] z-[3] flex h-[56px] w-[222px] items-center justify-center rounded-md bg-[#A3C9E2]"
          style={{ padding: '13px 10px', gap: 10 }}
        >
          <span className="font-fraunces text-2xl font-normal leading-none text-[#28231F]">
            Teeth Whitening
          </span>
        </div>
      </Float>

      <Float amplitude={10} duration={5.5} delay={0.4} className="h-shc-f7">
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
            Return for continued care
          </p>

          <img
            src={`${IMG}/loyalty-ring.svg?v=6`}
            alt=""
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute left-[223px] top-[51px] z-[1] h-[144px] w-[145px]"
          />

          <div
            className="absolute left-[205px] top-[72px] z-30 flex h-[34px] w-[34px] items-center justify-center rounded-full font-fraunces text-[10px] leading-none text-[#D35B8F]"
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

      <Float amplitude={8} duration={4.5} delay={0.1} className="h-shc-f8">
        <img
          src={`${IMG}/clinic-row-60cc89.webp`}
          alt=""
          className="absolute left-[420px] top-[668px] z-[3] h-[146px] w-[268px] rounded-xl border border-white object-cover"
          loading="lazy"
        />
      </Float>

      <Float amplitude={11} duration={5} delay={0.5} className="order-4 w-full h-shc-f9">
        <div className="relative mx-4 mb-5 lg:mx-0 lg:mb-0 lg:absolute left-auto lg:left-[903px] top-auto lg:top-[563px] z-[3] h-auto lg:h-[242px] w-[calc(100%-32px)] max-w-[400px] lg:w-[278px] overflow-hidden rounded-xl bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.1)] p-4 lg:p-0">
          <p className="relative lg:absolute left-0 lg:left-8 top-0 lg:top-[27px] z-10 font-fraunces text-[22px] lg:text-2xl leading-none text-[#28231F]">
            Smile Designing
          </p>

          <div
            className="relative lg:absolute z-20 flex h-[28px] lg:h-[31px] w-fit lg:w-[153px] items-center justify-center rounded-lg border border-[rgba(0,0,0,0.06)] bg-white mt-2.5 lg:mt-0 lg:left-[62.5px] lg:top-[78px]"
            style={{
              padding: '6px 14px',
              gap: 10,
            }}
          >
            <span className="whitespace-nowrap font-fraunces text-[13px] lg:text-sm font-normal leading-none text-[#1E73BE] no-underline">
              Custom Design
            </span>
          </div>

          <img
            src={`${IMG}/smile-designing.webp`}
            alt=""
            className="relative lg:absolute left-0 lg:left-[25px] top-auto lg:top-[93px] z-[1] mt-3 lg:mt-0 h-[110px] lg:h-[127px] w-full lg:w-[228px] rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </Float>
    </div>
  )
}
