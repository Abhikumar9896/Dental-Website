export default function SpecializedTeam() {
  return (
    <div className="absolute left-0 top-[2233px] flex w-full items-start px-[120px] pt-[30px] h-[600px] overflow-hidden">
      {/* Full Background Image */}
      <img
        src="/images/home/specialized-team-doctor.png"
        alt="Specialized Team"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Left Content (Text overlaying the background) */}
      <div className="flex flex-col w-[650px] relative mt-[60px] pl-[60px] z-20">
        {/* Decorative Pink Square */}
        <div className="absolute left-[-20px] top-[180px] w-4 h-4 bg-[#EED9E4]"></div>
        {/* Decorative Blue Square */}
        <div className="absolute left-[30px] bottom-[20px] w-2.5 h-2.5 bg-[#165ba7]"></div>

        <h3 className="font-[family-name:var(--font-poppins)] text-[28px] text-[#C187A4] font-normal mb-1">
          Dental Esthetique
        </h3>
        <h2 className="font-[family-name:var(--font-poppins)] text-[56px] font-bold text-[#165ba7] leading-[1.1] tracking-tight mb-8 whitespace-nowrap">
          Specialized Team
        </h2>

        {/* Pink line under title */}
        <div className="w-[150px] h-[2px] bg-[#C187A4] mb-12"></div>

        {/* Quote Block */}
        <div className="relative flex flex-col items-center text-center w-full pr-[80px]">
          <span className="absolute left-[-10px] top-[-10px] font-[family-name:var(--font-poppins)] text-[40px] text-[#28231F] font-bold italic leading-none">
            “
          </span>
          <p className="font-[family-name:var(--font-poppins)] text-[19px] leading-[1.7] text-[#333] max-w-[450px]">
            We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.
            <span className="absolute right-[40px] bottom-[10px] font-[family-name:var(--font-poppins)] text-[40px] text-[#28231F] font-bold italic leading-none">
              ”
            </span>
          </p>
        </div>

        {/* Signature Area */}
        <div className="mt-10 flex flex-col items-center gap-4 w-full pl-[30px]">
          <div className="w-[150px] h-[1px] bg-[#C187A4]"></div>
          {/* Using a placeholder signature image or stylish text */}
          <span className="text-[40px] text-[#28231F] py-1 opacity-80 italic font-[family-name:var(--font-poppins)]">
            Dental Esthetique
          </span>
          <div className="w-[150px] h-[1px] bg-[#C187A4]"></div>
        </div>
      </div>


    </div>
  )
}
