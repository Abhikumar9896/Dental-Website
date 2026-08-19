import { useState } from 'react'
import Reveal, { Stagger, StaggerItem } from '../ui/Reveal'
import { motion } from 'framer-motion'
import { treatments } from '../../data/treatments'
import { useAppointmentForm } from '../../hooks/useAppointmentForm'

export default function BookVisitSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { formData, updateField, setTreatment, status, errorMessage, submit } = useAppointmentForm()

  return (
    <section
      className="absolute left-0 top-[5751px] flex h-[600px] w-full items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/footer.webp')" }}
    >
      <div className="relative h-full w-[58%] shrink-0"></div>

      <Reveal x={80} blur className="flex w-[42%] flex-col pl-12 pr-16 pt-6 pb-6 relative z-10">
        <Stagger className="flex flex-col" gap={0.15}>
          <StaggerItem>
            <div className="flex flex-col mb-3">
              <span className="font-poppins text-3xl font-medium text-[#C187A4] mb-1">
                Book Your Visit At
              </span>
              <h2 className="font-poppins text-5xl font-bold text-[#165ba7] leading-tight">
                Dental Esthetique
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="font-poppins text-[#333] text-sm leading-relaxed mb-4 pr-10">
              Need care soon? Use the form below to request an appointment, and our team will get
              back to you promptly.
            </p>
          </StaggerItem>

          <StaggerItem y={24}>
            <form className="flex flex-col gap-3 w-[90%] ml-4" onSubmit={submit}>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Full Name <span className="text-[#C187A4]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="h-[42px] rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Phone Number <span className="text-[#C187A4]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="h-[42px] rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Email Address <span className="text-[#C187A4]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="h-[42px] rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Preferred Date & Time <span className="text-[#C187A4]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd-mm-year --:--"
                      required
                      value={formData.date}
                      onChange={(e) => updateField('date', e.target.value)}
                      className="h-[42px] w-full rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm text-gray-500 z-10 relative bg-transparent cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-full"
                      onFocus={(e) => (e.target.type = 'datetime-local')}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = 'text'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="font-poppins text-sm font-semibold text-[#333]">
                  Treatment Required <span className="text-[#C187A4]">*</span>
                </label>
                <div className="relative">
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full h-[42px] border ${isDropdownOpen ? 'border-[#165ba7]' : 'border-gray-200'} rounded-md px-4 font-poppins text-[14px] flex items-center justify-between cursor-pointer transition-colors bg-white shadow-sm`}
                  >
                    <span className={formData.treatment ? 'text-[#333]' : 'text-gray-500'}>
                      {formData.treatment || 'Select Treatment'}
                    </span>
                    <div
                      className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    >
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

                  {isDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsDropdownOpen(false)}
                      ></div>
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 top-[calc(100%+4px)] w-full max-h-[180px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-xl z-50"
                      >
                        {treatments.map((t) => (
                          <div
                            key={t.title}
                            className="px-4 py-2 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors"
                            onClick={() => {
                              setTreatment(t.title)
                              setIsDropdownOpen(false)
                            }}
                          >
                            {t.title}
                          </div>
                        ))}
                        <div
                          className="px-4 py-2 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors border-t border-gray-100"
                          onClick={() => {
                            setTreatment('Others')
                            setIsDropdownOpen(false)
                          }}
                        >
                          Others
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>

              {formData.treatment === 'Others' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex flex-col gap-1 w-full"
                >
                  <label className="font-poppins text-sm font-semibold text-[#333]">
                    Description <span className="text-[#C187A4]">*</span>
                  </label>
                  <textarea
                    placeholder="Please describe your requirement"
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    className="w-full h-[60px] rounded-md border border-gray-200 px-4 py-2.5 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm resize-none"
                  ></textarea>
                </motion.div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-md bg-red-50 border border-red-200 px-4 py-3">
                  <span className="text-red-600 text-sm leading-snug font-poppins">
                    {errorMessage}
                  </span>
                </div>
              )}

              <div className="mt-1">
                {status === 'success' ? (
                  <div className="flex items-start gap-2 rounded-md bg-green-50 border border-green-200 px-4 py-3">
                    <span className="text-green-700 text-sm leading-snug font-poppins">
                      Thank you! Your appointment request has been sent. We will contact you shortly
                      to confirm.
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group flex h-[48px] items-center justify-center gap-2 rounded-md bg-[#165ba7] px-6 text-white font-poppins font-medium text-[15px] hover:bg-[#10437b] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Confirm Appointment
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </StaggerItem>
        </Stagger>
      </Reveal>
    </section>
  )
}
