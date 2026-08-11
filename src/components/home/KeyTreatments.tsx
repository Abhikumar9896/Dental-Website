import { NotchedCard } from './NotchedCard'

const IMG = '/images/home'

export default function KeyTreatments() {
  return (
    <div className="absolute left-[80px] top-[2189px] flex w-[1275px] flex-col" style={{ gap: 40 }}>
      <div className="flex w-full items-start" style={{ gap: 378 }}>
        <div
          className="flex h-[55px] w-[211px] shrink-0 items-center justify-center rounded-[18px] bg-[#F2FFFB]"
          style={{
            padding: '15px 28px',
            boxShadow:
              '0px 4px 6.2px 0px rgba(105,163,145,0.39), 4px 0px 66.8px 0px rgba(255,255,255,0.25)',
          }}
        >
          <span className="whitespace-nowrap font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#28231F]">
            Key Treatments
          </span>
        </div>
        <h2 className="h-[118px] w-[686px] font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-none text-[#28231F]">
          Most requested treatments for every smile need.
        </h2>
      </div>

      <div className="relative h-[507px] w-[1275px]">
        <div className="absolute left-0 top-1 h-[503px] w-[305px] rounded-[20px] border border-[rgba(0,0,0,0.22)] bg-white">
          <div className="absolute left-7 top-7 w-[259px]">
            <p className="h-[81px] font-[family-name:var(--font-poppins)] text-[64px] font-normal leading-none text-[#28231F]">
              5000+
            </p>
            <p className="font-[family-name:var(--font-poppins)] text-xl text-[#696969]">
              Successful treatments performed
            </p>
          </div>
          <div
            className="absolute left-7 top-[212px] flex h-[50px] items-center rounded-[25px] bg-[#71C1A7]"
            style={{ padding: '12px 23px', gap: 10 }}
          >
            <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-white">
              Root Canal
            </span>
          </div>
          <div
            className="absolute left-[85px] top-[282px] flex h-[50px] items-center rounded-[25px] bg-[#BDE7D9]"
            style={{ padding: '12px 23px' }}
          >
            <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-[#28231F]">
              Teeth Whitening
            </span>
          </div>
          <div
            className="absolute left-7 top-[352px] flex h-[50px] items-center rounded-[25px] bg-[#EAEAEA]"
            style={{ padding: '12px 23px' }}
          >
            <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-[#28231F]">
              Oral Surgery
            </span>
          </div>
          <div
            className="absolute left-[88px] top-[422px] flex h-[50px] items-center rounded-[25px] bg-[#BDE7D9]"
            style={{ padding: '12px 23px' }}
          >
            <span className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-xl text-[#28231F]">
              Dental Implants
            </span>
          </div>
        </div>

        <NotchedCard
          className="left-[325px] top-0"
          width={305}
          height={503}
          cut="bottom-right"
          arrowHeight={39}
          radius={20}
          fill="gum-gradient"
          gradientId="gum-card-grad"
        >
          <div className="absolute left-7 top-10 z-20 flex w-[220px] flex-col" style={{ gap: 7 }}>
            <div
              className="flex h-[31px] w-[118px] items-center rounded-lg border border-[rgba(0,0,0,0.06)] bg-white"
              style={{ padding: '7px 10px' }}
            >
              <span className="font-[family-name:var(--font-fraunces)] text-base text-[#28231F]">
                Top Popular
              </span>
            </div>
            <p className="font-[family-name:var(--font-fraunces)] text-[32px] leading-none text-[#28231F]">
              Gum Surgeries
            </p>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[118px] z-[1] flex h-[230px] w-[280px] -translate-x-1/2 items-center justify-center">
            <img
              src={`${IMG}/gum-aligner.png`}
              alt=""
              className="object-contain"
              style={{
                width: 255.67,
                height: 211.21,
                transform: 'scaleY(-1) rotate(148.53deg)',
              }}
            />
          </div>

          <p className="absolute left-7 top-[366px] z-20 h-[86px] w-[220px] font-[family-name:var(--font-poppins)] text-sm font-light leading-[17.06px] text-[#28231F]">
            Advanced gum surgery to treat infection, reshape gum tissue, and restore healthier,
            stronger smiles with lasting comfort and confidence.
          </p>
        </NotchedCard>

        <NotchedCard
          className="left-[650px] top-1"
          width={625}
          height={241}
          cut="top-right"
          arrowHeight={46}
          radius={20}
          bordered
          fill="#fff"
        >
          <div className="absolute left-7 top-7 z-10 flex w-[501px] flex-col" style={{ gap: 60 }}>
            <h3 className="w-[340px] font-[family-name:var(--font-fraunces)] text-[32px] leading-8 text-[#28231F]">
              Implant Supported Dentures
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-xl text-[#696969]">
              Experience enhanced comfort, stability, and chewing with implants
            </p>
          </div>
        </NotchedCard>

        <NotchedCard
          className="left-[650px] top-[266px]"
          width={625}
          height={241}
          cut="top-right"
          arrowHeight={46}
          radius={20}
          bordered
          imageSrc={`${IMG}/full-mouth-rehab.png`}
        >
          <div
            className="absolute left-7 top-[29px] z-10 flex w-[501px] flex-col"
            style={{ gap: 60 }}
          >
            <h3 className="w-[340px] font-[family-name:var(--font-fraunces)] text-[32px] leading-8 text-white">
              Full Mouth Rehabilitation
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-xl text-white">
              Rebuild your smile with personalized full mouth rehabilitation care.
            </p>
          </div>
        </NotchedCard>
      </div>
    </div>
  )
}
