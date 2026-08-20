import { NotchedCard } from './NotchedCard'
import Reveal, { CountUp } from '../ui/Reveal'

const IMG = '/images/home'

export default function KeyTreatments() {
  return (
    <div className="relative left-0 top-0 flex w-full flex-col px-5 py-10 lg:absolute lg:left-[80px] lg:top-[2189px] lg:w-[1275px] lg:px-0 lg:py-0 gap-8 lg:gap-10 h-treat">
      <Reveal y={30} className="flex w-full items-start">
        <div className="flex w-full flex-col lg:flex-row items-start gap-3 lg:gap-[378px] h-treat-head">
          <div
            className="flex h-[44px] lg:h-[55px] w-fit shrink-0 items-center justify-center rounded-md bg-[#F0F7FF]"
            style={{
              padding: '10px 18px',
              boxShadow:
                '0px 4px 6.2px 0px rgba(10,91,168,0.15), 4px 0px 66.8px 0px rgba(255,255,255,0.25)',
            }}
          >
            <span className="whitespace-nowrap font-poppins text-[15px] lg:text-xl font-semibold text-[#28231F]">
              Key Treatments
            </span>
          </div>
          <h2 className="mt-0 h-auto lg:h-[118px] w-full lg:w-[686px] font-poppins text-[26px] lg:text-[48px] font-normal leading-[1.2] lg:leading-none text-[#28231F] h-treat-h">
            Most requested treatments for every smile need.
          </h2>
        </div>
      </Reveal>

      <div className="relative h-auto lg:h-[507px] w-full lg:w-[1275px] flex flex-col gap-3.5 lg:block h-treat-cards">

        <Reveal x={-50} y={0} delay={0.1} className="w-full">
          <div className="relative lg:absolute left-0 top-0 lg:top-1 h-auto lg:h-[503px] w-full lg:w-[305px] rounded-xl border border-[rgba(0,0,0,0.22)] bg-white p-5 lg:p-0 flex flex-col gap-4 lg:block h-treat-c1">
            <div className="relative lg:absolute left-0 lg:left-7 top-0 lg:top-7 w-full lg:w-[259px]">
              <p className="h-auto lg:h-[81px] font-poppins text-[40px] lg:text-[64px] font-normal leading-none text-[#28231F] h-treat-c1n">
                <CountUp value={5000} suffix="+" />
              </p>
              <p className="mt-1 font-poppins text-[15px] lg:text-xl text-[#696969]">
                Successful treatments performed
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:contents">
              <div
                className="relative lg:absolute left-0 lg:left-7 top-auto lg:top-[212px] flex h-[42px] lg:h-[50px] items-center justify-center rounded-md bg-[#0A5BA8]"
                style={{ padding: '8px 12px', gap: 10 }}
              >
                <span className="whitespace-nowrap font-poppins text-[13px] lg:text-xl text-white">
                  Root Canal
                </span>
              </div>
              <div
                className="relative lg:absolute left-0 lg:left-[85px] top-auto lg:top-[282px] flex h-[42px] lg:h-[50px] items-center justify-center rounded-md bg-[#D6E8F9]"
                style={{ padding: '8px 12px' }}
              >
                <span className="whitespace-nowrap font-poppins text-[13px] lg:text-xl text-[#28231F]">
                  Teeth Whitening
                </span>
              </div>
              <div
                className="relative lg:absolute left-0 lg:left-7 top-auto lg:top-[352px] flex h-[42px] lg:h-[50px] items-center justify-center rounded-md bg-[#EAEAEA]"
                style={{ padding: '8px 12px' }}
              >
                <span className="whitespace-nowrap font-poppins text-[13px] lg:text-xl text-[#28231F]">
                  Smile Designing
                </span>
              </div>
              <div
                className="relative lg:absolute left-0 lg:left-[88px] top-auto lg:top-[422px] flex h-[42px] lg:h-[50px] items-center justify-center rounded-md bg-[#D6E8F9]"
                style={{ padding: '8px 12px' }}
              >
                <span className="whitespace-nowrap font-poppins text-[13px] lg:text-xl text-[#28231F]">
                  Dental Implants
                </span>
              </div>
            </div>
          </div>
        </Reveal>


        <Reveal x={60} y={0} delay={0.2} className="w-full">
          <NotchedCard
            className="lg:left-[325px] lg:top-0 h-treat-c2"
            width={305}
            height={503}
            cut="bottom-right"
            arrowHeight={39}
            radius={20}
            fill="gum-gradient"
            gradientId="gum-card-grad"
          >
            <div className="relative lg:absolute left-0 lg:left-7 top-0 lg:top-10 z-20 flex w-full flex-col gap-2 lg:gap-[7px]">
              <div
                className="flex h-[28px] lg:h-[31px] w-fit items-center rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
                style={{ padding: '6px 10px' }}
              >
                <span className="font-poppins text-[13px] lg:text-base text-[#28231F] whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <p className="font-poppins text-[24px] lg:text-[32px] leading-none text-[#28231F] whitespace-normal lg:whitespace-nowrap h-treat-c2t">
                Clear Aligners
              </p>
            </div>

            <div className="pointer-events-none relative lg:absolute left-auto lg:left-1/2 top-auto lg:top-[118px] z-[1] flex h-[130px] lg:h-[230px] w-full lg:w-[280px] lg:-translate-x-1/2 items-center justify-center my-3 lg:my-0 overflow-hidden h-treat-c2img">
              <img
                src={`${IMG}/teeth.webp`}
                alt="Clear aligners"
                loading="lazy"
                decoding="async"
                className="object-contain max-h-full w-[140px] h-[110px] lg:w-[256px] lg:h-[211px]"
                style={{
                  transform: 'scaleY(-1) rotate(148.53deg)',
                }}
              />
            </div>

            <p className="relative lg:absolute left-0 lg:left-7 top-auto lg:top-[366px] z-20 h-auto lg:h-[86px] w-full lg:w-[220px] font-poppins text-[13px] lg:text-sm font-light leading-relaxed lg:leading-[17.06px] text-[#28231F] pr-2">
              Straighten your teeth discreetly with comfortable, custom-made invisible aligners for a
              perfectly aligned and confident smile.
            </p>
          </NotchedCard>
        </Reveal>


        <Reveal x={80} y={0} delay={0.3} className="w-full">
          <NotchedCard
            className="lg:left-[650px] lg:top-1 h-treat-c3"
            width={625}
            height={241}
            cut="top-right"
            arrowHeight={46}
            radius={20}
            bordered
            fill="#fff"
          >
            <div className="relative lg:absolute left-0 lg:left-7 top-0 lg:top-7 z-10 flex w-full lg:w-[501px] flex-col gap-2.5 lg:gap-[60px] h-treat-c3in">
              <h3 className="w-full lg:w-[340px] font-poppins text-[20px] lg:text-[32px] leading-snug lg:leading-8 text-[#28231F]">
                Implant Supported Dentures
              </h3>
              <p className="font-poppins text-[14px] lg:text-xl text-[#696969] leading-relaxed">
                Experience enhanced comfort, stability, and chewing with implants
              </p>
            </div>
          </NotchedCard>
        </Reveal>


        <Reveal x={80} y={0} delay={0.4} className="w-full">
          <NotchedCard
            className="lg:left-[650px] lg:top-[266px] h-treat-c4"
            width={625}
            height={241}
            cut="top-right"
            arrowHeight={46}
            radius={20}
            imageSrc={`${IMG}/bgblue.webp`}
          >
            <div className="relative lg:absolute left-0 lg:left-7 top-0 lg:top-[29px] z-10 flex w-full lg:w-[501px] flex-col gap-2.5 lg:gap-[60px] h-treat-c4in">
              <h3 className="w-full lg:w-[340px] font-poppins text-[20px] lg:text-[32px] leading-snug lg:leading-8 text-white">
                Full Mouth Rehabilitation
              </h3>
              <p className="font-poppins text-[14px] lg:text-xl text-white leading-relaxed">
                Rebuild your smile with personalized full mouth rehabilitation care.
              </p>
            </div>
          </NotchedCard>
        </Reveal>
      </div>
    </div>
  )
}
