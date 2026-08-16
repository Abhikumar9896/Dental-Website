import Reveal, { Stagger, StaggerItem } from '../ui/Reveal'

export default function BookVisitSection() {
  return (
    <section
      className="absolute left-0 top-[5751px] flex h-[600px] w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/footer.png')" }}
    >
      <div className="relative h-full w-[58%] shrink-0"></div>

      <Reveal x={80} blur className="flex w-[42%] flex-col pl-12 pr-16 pt-10 pb-10 relative z-10">
        <Stagger className="flex flex-col" gap={0.15}>
          <StaggerItem>
            <div className="flex flex-col mb-6">
              <span className="font-poppins text-3xl font-medium text-[#C187A4] mb-2">
                Book Your Visit At
              </span>
              <h2 className="font-poppins text-5xl font-bold text-[#165ba7] leading-tight">
                Dental Esthetique
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="font-poppins text-[#333] text-sm leading-relaxed mb-8 pr-10">
              Have an emergency? Do book with us with this simple form below and superior
              deliverables whereas web-enabled applications. Continually reintermediate integrated
              processes through technically sound intellectual capital.
            </p>
          </StaggerItem>

          <StaggerItem y={24}>
            <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Your name <span className="text-[#C187A4]">*</span>
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Your Email Address <span className="text-[#C187A4]">*</span>
                  </label>
                  <input
                    type="email"
                    className="h-12 rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Choose your Dentist
                  </label>
                  <div className="relative">
                    <select className="h-12 w-full appearance-none rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm text-gray-500 cursor-pointer">
                      <option>Select Dentist here</option>
                      <option>Dr. Deepika Singhal</option>
                      <option>Dr. Abhinav Jain</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Appointment date <span className="text-[#C187A4]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Appointment date"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm text-gray-500 z-10 relative bg-transparent cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-full"
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = 'text'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="group flex h-[44px] items-center justify-center gap-2 rounded-md bg-[#165ba7] px-6 text-white font-poppins font-medium text-[14px] hover:bg-[#10437b] transition-colors shadow-sm">
                  Book Appointment Now
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </StaggerItem>
        </Stagger>
      </Reveal>
    </section>
  )
}
