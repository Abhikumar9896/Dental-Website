import { Stagger, StaggerItem } from '../ui/Reveal'

export default function SpecializedTeam() {
  return (
    <div className="relative left-0 top-0 flex w-full items-center lg:items-start px-5 lg:absolute lg:left-0 lg:top-[2085px] lg:px-[120px] py-10 lg:pt-[30px] lg:pb-0 h-auto lg:h-[600px] overflow-hidden h-team">
      <img
        src="/images/home/specialized-team-doctor.webp"
        srcSet="/images/home/mobile/specialized-team-doctor.webp 480w, /images/home/specialized-team-doctor.webp 1280w"
        sizes="100vw"
        alt="Specialized Team"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-left z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white from-55% via-white/92 via-78% to-transparent lg:hidden z-10 pointer-events-none" />
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-white/40 via-transparent to-transparent z-10 pointer-events-none" />

      <Stagger
        className="flex flex-col w-full max-w-[520px] lg:w-[650px] relative mt-0 lg:mt-[60px] pl-0 lg:pl-[20px] z-20 h-team-txt"
        gap={0.12}
      >
        <StaggerItem>
          <h3 className="font-poppins text-[14px] lg:text-[28px] text-[#D35B8F] font-normal mb-1">
            Dental Esthetique
          </h3>
        </StaggerItem>
        <StaggerItem>
          <h2 className="font-poppins text-[28px] lg:text-[56px] font-bold text-[#165ba7] leading-[1.15] tracking-tight mb-3 lg:mb-8 whitespace-normal lg:whitespace-nowrap h-team-h">
            Specialized Team
          </h2>
        </StaggerItem>

        <StaggerItem>
          <div className="w-[48px] lg:w-[100px] h-[2px] bg-[#D35B8F] mb-4 lg:mb-10" />
        </StaggerItem>

        <StaggerItem>
          <div className="relative flex w-full max-w-[500px]">
            <span className="font-fraunces text-[28px] lg:text-[80px] text-[#D35B8F]/30 font-bold leading-[0.8] select-none mr-1.5 lg:mr-4 shrink-0">
              “
            </span>
            <p className="font-poppins text-[14px] lg:text-[18px] leading-[1.7] lg:leading-[1.8] text-[#444] italic pt-1 lg:pt-4 pr-2 lg:pr-0">
              We are a team of dentists, hygienists and receptionists who work together to ensure
              that you receive the treatment you need at a time that suits you.
              <span className="font-fraunces text-[22px] lg:text-[45px] text-[#D35B8F]/30 font-bold leading-[0] select-none ml-1.5 relative top-[6px] lg:top-[15px]">
                ”
              </span>
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-5 lg:mt-12 flex flex-col items-start gap-1.5 lg:gap-3 w-full pl-0 lg:pl-6">
            <div className="w-[48px] lg:w-[100px] h-[2px] bg-[#D35B8F]" />
            <span className="text-[18px] lg:text-[34px] text-[#28231F] opacity-90 italic font-poppins">
              Dental Esthetique
            </span>
            <div className="hidden lg:block w-[100px] h-[2px] bg-[#D35B8F]" />
          </div>
        </StaggerItem>
      </Stagger>
    </div>
  )
}
