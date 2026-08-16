import { Stagger, StaggerItem } from '../ui/Reveal'

export default function SpecializedTeam() {
  return (
    <div className="absolute left-0 top-[2113px] flex w-full items-start px-[120px] pt-[30px] h-[600px] overflow-hidden">
      <img
        src="/images/home/specialized-team-doctor.png"
        alt="Specialized Team"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <Stagger className="flex flex-col w-[650px] relative mt-[60px] pl-[20px] z-20" gap={0.14}>
        <StaggerItem>
          <h3 className="font-poppins text-[28px] text-[#C187A4] font-normal mb-1">
            Dental Esthetique
          </h3>
        </StaggerItem>
        <StaggerItem>
          <h2 className="font-poppins text-[56px] font-bold text-[#165ba7] leading-[1.1] tracking-tight mb-8 whitespace-nowrap">
            Specialized Team
          </h2>
        </StaggerItem>

        <StaggerItem>
          <div className="w-[100px] h-[2px] bg-[#C187A4] mb-10"></div>
        </StaggerItem>

        <StaggerItem>
          <div className="relative flex w-full max-w-[500px] mt-4">
            <span className="font-fraunces text-[80px] text-[#C187A4]/30 font-bold leading-[0.8] select-none mr-4">
              “
            </span>
            <p className="font-poppins text-[18px] leading-[1.8] text-[#444] italic pt-4">
              We are a team of dentists, hygienists and receptionists who work together to ensure
              that you receive the best treatment that you require at a very time that suits you.
              <span className="font-fraunces text-[45px] text-[#C187A4]/30 font-bold leading-[0] select-none ml-2 relative top-[15px]">
                ”
              </span>
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-12 flex flex-col items-start gap-3 w-full pl-6">
            <div className="w-[100px] h-[2px] bg-[#C187A4]"></div>
            <span className="text-[34px] text-[#28231F] opacity-90 italic font-poppins">
              Dental Esthetique
            </span>
            <div className="w-[100px] h-[2px] bg-[#C187A4]"></div>
          </div>
        </StaggerItem>
      </Stagger>
    </div>
  )
}
