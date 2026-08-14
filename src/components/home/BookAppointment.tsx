export default function BookAppointment() {
  return (
    <div className="absolute left-[60px] top-[880px] w-[1320px] h-[640px] z-30">
      {/* White box */}
      <div className="absolute right-0 top-0 w-[1000px] h-[640px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex flex-col pt-[50px] pb-12 pl-[300px] pr-[70px] rounded-sm">
        <h2 className="text-[32px] font-medium text-[#165ba7] mb-6 font-[family-name:var(--font-poppins)]">
          Book Your Appointment
        </h2>
        <div className="w-full h-[1px] bg-gray-200/60 mb-10"></div>
        
        <div className="flex items-center justify-between">
          <img src="/images/home/img-booking.avif" alt="Booking" className="w-[280px] h-auto object-contain" />
          
          <div className="flex flex-col gap-5 w-[320px]">
            <input 
              type="email" 
              placeholder="Your email address *" 
              className="w-full h-[52px] border border-gray-200/80 rounded-md px-4 font-[family-name:var(--font-poppins)] text-[14px] text-gray-500 outline-none focus:border-[#165ba7] transition-colors" 
            />
            
            <div className="relative">
              <select className="w-full h-[52px] border border-gray-200/80 rounded-md px-4 font-[family-name:var(--font-poppins)] text-[14px] text-[#333] font-medium outline-none appearance-none focus:border-[#165ba7] transition-colors bg-white cursor-pointer">
                <option>Select Your Dentist</option>
                <option>Dr. Deepika Singhal</option>
                <option>Dr. Abhinav Jain</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Appointment date *" 
                className="w-full h-[52px] border border-gray-200/80 rounded-md px-4 font-[family-name:var(--font-poppins)] text-[14px] text-gray-500 outline-none focus:border-[#165ba7] transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:w-8 [&::-webkit-calendar-picker-indicator]:h-full z-10 bg-transparent" 
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
            </div>
            
            <textarea
              placeholder="Description (Optional)"
              className="w-full h-[80px] border border-gray-200/80 rounded-md px-4 py-3 font-[family-name:var(--font-poppins)] text-[14px] text-gray-500 outline-none focus:border-[#165ba7] transition-colors resize-none"
            ></textarea>

            <button className="w-full h-[52px] bg-[#B07399] hover:bg-[#9a6485] transition-colors rounded-md text-white font-[family-name:var(--font-poppins)] text-[14px] font-semibold tracking-wide mt-1">
              Book Your Dentist
            </button>
          </div>
        </div>
      </div>

      {/* Blue box overlapping */}
      <div className="absolute left-0 top-[100px] w-[560px] h-[440px] bg-[#0A5BA8] flex flex-col justify-center items-center px-[80px] text-center shadow-lg">
        <div className="w-[100px] h-[2px] bg-[#D86C97] mb-10"></div>
        <div className="relative w-full">
          <span className="absolute -left-6 -top-4 text-5xl font-[family-name:var(--font-fraunces)] italic font-bold text-white leading-none">“</span>
          <p className="text-white font-[family-name:var(--font-poppins)] text-[22px] leading-[1.6] font-light">
            At Dental ESTHETIQUE, we are committed to providing you and your family with the highest quality of compassionate dental care.
          </p>
          <span className="absolute -right-4 bottom-0 text-5xl font-[family-name:var(--font-fraunces)] italic font-bold text-white leading-none">”</span>
        </div>
        <div className="w-[100px] h-[2px] bg-[#D86C97] mt-10 mb-8"></div>
        
        {/* Signature style text */}
        <div className="mt-4 opacity-95">
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
          </style>
          <span 
            className="text-white text-[36px] block -rotate-2 tracking-wide" 
            style={{ fontFamily: "'Great Vibes', cursive", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
          >
            Dr. Deepika Singhal
          </span>
        </div>
      </div>
    </div>
  )
}
