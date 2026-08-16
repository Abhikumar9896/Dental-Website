import Reveal, { Float, Stagger, StaggerItem, CountUp } from '../ui/Reveal'

export default function WhyChooseUs() {
  return (
    <div className="absolute left-[78px] top-[1534px] h-[539px] w-[1280px]">
      <Reveal x={-60} y={0} duration={0.8}>
        <img
          src="/images/home/clinic-row-60cc89.webp"
          alt="Clinic"
          className="absolute left-[60px] top-[60px] h-[342px] w-[456px] rounded-lg object-cover shadow-lg"
        />
      </Reveal>

      <Float amplitude={10} duration={4.5} delay={0.4}>
        <div className="absolute left-[34px] top-[345px] flex h-[133px] w-[161px] flex-col justify-center gap-[10px] rounded-lg bg-gradient-to-br from-[#F2F8FF] to-[#E0EFFB] p-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-[1px] border-[#165ba7]">
          <span className="font-poppins text-[34px] font-semibold leading-none text-[#165ba7]">
            <CountUp value={58} suffix="+" />
          </span>
          <span className="font-poppins text-[14px] leading-tight text-gray-500 font-medium">
            Dental
            <br />
            Treatments
          </span>
        </div>
      </Float>

      <Float amplitude={12} duration={5} delay={0.9}>
        <div className="absolute left-[364px] top-[301px] flex h-[178px] w-[226px] flex-col justify-center gap-[10px] rounded-lg bg-gradient-to-br from-[#F2F8FF] to-[#E0EFFB] p-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-[1px] border-[#165ba7]">
          <span className="font-poppins text-[34px] font-semibold leading-none text-[#165ba7]">
            <CountUp value={50} suffix="K+" />
          </span>
          <span className="font-poppins text-[14px] font-semibold leading-none text-gray-600">
            Patients Treated
          </span>
          <p className="font-poppins text-[11px] leading-relaxed text-gray-400 mt-2">
            Committed to restoring smiles everyday with advanced care.
          </p>
        </div>
      </Float>

      <div className="absolute left-[660px] top-[90px] flex w-[600px] flex-col gap-10">
        <Stagger gap={0.15}>
          <StaggerItem>
            <h2 className="font-poppins text-[36px] font-semibold leading-[1.2] text-[#333] whitespace-nowrap">
              Why Choose <span className="text-[#165ba7]">Dental ESTHETIQUE?</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="font-poppins text-[16px] leading-relaxed text-[#333] font-medium">
              Advanced dental care combining expertise, innovation, and compassion for healthier,
              brighter, confident smiles every day.
            </p>
          </StaggerItem>
        </Stagger>

        <Stagger gap={0.18}>
          <StaggerItem>
            <div className="flex items-start gap-5">
              <div className="mt-1 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#B07399]/10 text-[#B07399]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-[20px] font-semibold text-[#333]">
                  Experienced Dental Professionals
                </h3>
                <p className="font-poppins text-[14px] leading-relaxed text-gray-500">
                  Experienced dentists delivering advanced, personalized treatments for healthy,
                  confident smiles every day.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-start gap-5">
              <div className="mt-1 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#B07399]/10 text-[#B07399]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-[20px] font-semibold text-[#333]">
                  Modern Technology
                </h3>
                <p className="font-poppins text-[14px] leading-relaxed text-gray-500">
                  Advanced equipment delivering precise, comfortable dental care for every patient.
                </p>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </div>
  )
}
