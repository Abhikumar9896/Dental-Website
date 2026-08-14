export default function BookVisitSection() {
  return (
    <section 
      className="absolute left-0 top-[5751px] flex h-[600px] w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/footer.png')" }}
    >
      {/* Left side empty space to push the form to the right */}
      <div className="relative h-full w-[58%] shrink-0">
      </div>

      {/* Right side with form */}
      <div className="flex w-[42%] flex-col pl-12 pr-16 pt-10 pb-10 relative z-10">
        <div className="flex flex-col mb-6">
          <span className="font-[family-name:var(--font-poppins)] text-3xl font-medium text-[#C187A4] mb-2">
            Book Your Visit At
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-[#165ba7] leading-tight">
            Dental Esthetique
          </h2>
        </div>
        
        <p className="font-[family-name:var(--font-poppins)] text-[#333] text-sm leading-relaxed mb-8 pr-10">
          Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.
        </p>

        <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#333]">
                Your name <span className="text-[#C187A4]">*</span>
              </label>
              <input 
                type="text" 
                className="h-12 rounded-md border border-gray-200 px-4 font-[family-name:var(--font-poppins)] text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
              />
            </div>
            
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#333]">
                Your Email Address <span className="text-[#C187A4]">*</span>
              </label>
              <input 
                type="email" 
                className="h-12 rounded-md border border-gray-200 px-4 font-[family-name:var(--font-poppins)] text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
              />
            </div>

            {/* Dentist */}
            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#333]">
                Choose your Dentist
              </label>
              <div className="relative">
                <select className="h-12 w-full appearance-none rounded-md border border-gray-200 px-4 font-[family-name:var(--font-poppins)] text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm text-gray-500 cursor-pointer">
                  <option>Select Dentist here</option>
                  <option>Dr. Deepika Singhal</option>
                  <option>Dr. Abhinav Jain</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#333]">
                Appointment date <span className="text-[#C187A4]">*</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Appointment date"
                  className="h-12 w-full rounded-md border border-gray-200 px-4 font-[family-name:var(--font-poppins)] text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm text-gray-500 z-10 relative bg-transparent cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="flex h-10 items-center justify-center gap-2 rounded-md bg-[#165ba7] px-4 text-white font-[family-name:var(--font-poppins)] font-medium text-sm hover:bg-[#10437b] transition-colors">
              Book Appointment Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
