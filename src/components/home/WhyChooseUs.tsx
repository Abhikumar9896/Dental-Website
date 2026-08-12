export default function WhyChooseUs() {
  return (
    <div className="absolute left-[78px] top-[885px] h-[539px] w-[1280px]">
      {/* Left Image Section */}
      <img
        src="/images/home/clinic-row-60cc89.png"
        alt="Clinic"
        className="absolute left-[60px] top-[60px] h-[342px] w-[456px] rounded-[24px] object-cover"
      />

      {/* Floating Card 1 */}
      <div
        className="absolute left-[34px] top-[345px] flex h-[133px] w-[161px] flex-col justify-center gap-[10px] rounded-[27px] bg-[#F3FBF9] p-[25px]"
        style={{ boxShadow: '0px 4px 10.4px #D7FAF2' }}
      >
        <span className="font-[family-name:var(--font-fraunces)] text-[32px] font-bold leading-none text-[#28231F]">
          58+
        </span>
        <span className="font-[family-name:var(--font-poppins)] text-sm leading-tight text-gray-500">
          Dental<br />Treatments
        </span>
      </div>

      {/* Floating Card 2 */}
      <div
        className="absolute left-[364px] top-[301px] flex h-[178px] w-[226px] flex-col justify-center gap-[10px] rounded-[27px] bg-[#F3FBF9] p-[25px]"
        style={{ boxShadow: '0px 4px 10.4px #D7FAF2' }}
      >
        <span className="font-[family-name:var(--font-fraunces)] text-[32px] font-bold leading-none text-[#28231F]">
          50K+
        </span>
        <span className="font-[family-name:var(--font-poppins)] text-sm font-medium leading-none text-gray-500">
          Patients Treated
        </span>
        <p className="font-[family-name:var(--font-poppins)] text-[10px] leading-snug text-gray-400 mt-2">
          Committed to restoring smiles everyday.
        </p>
      </div>

      {/* Right Text Section */}
      <div className="absolute left-[660px] top-[90px] flex w-[550px] flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-[family-name:var(--font-fraunces)] text-[42px] font-bold leading-[1.1] text-[#28231F]">
            Why Choose <span className="text-[#F48422]">Dental ESTHETIQUE?</span>
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[15px] leading-relaxed text-gray-500">
            Advanced dental care combining expertise, innovation, and compassion for healthier, brighter, confident smiles every day.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F48422]/10 text-[#F48422]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-[family-name:var(--font-fraunces)] text-[22px] font-bold text-[#28231F]">
                Experienced Dental Professionals
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-[14px] leading-relaxed text-gray-500">
                Experienced dentists delivering advanced, personalized treatments for healthy, confident smiles every day.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F48422]/10 text-[#F48422]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-[family-name:var(--font-fraunces)] text-[22px] font-bold text-[#28231F]">
                Modern Technology
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-[14px] leading-relaxed text-gray-500">
                Advanced equipment delivering precise, comfortable dental care for every patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
