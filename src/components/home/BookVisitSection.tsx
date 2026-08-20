import { useState } from 'react'
import Reveal, { Stagger, StaggerItem } from '../ui/Reveal'
import { motion } from 'framer-motion'
import { treatments } from '../../data/treatments'
import { useAppointmentForm } from '../../hooks/useAppointmentForm'

export default function BookVisitSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDateFocused, setIsDateFocused] = useState(false)
  const { formData, updateField, setTreatment, status, errorMessage, submit } = useAppointmentForm()

  return (
    <section
      className="relative left-0 top-0 flex h-auto w-full items-center bg-cover bg-center bg-no-repeat py-0 lg:absolute lg:top-[5751px] lg:h-[600px] lg:py-0 h-bv"
      style={{ backgroundImage: "url('/images/home/footer.webp')" }}
    >
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent pointer-events-none z-[5]" />
      <div className="relative h-full w-[58%] shrink-0 h-bv-sp"></div>

      <Reveal x={80} blur className="flex w-full lg:w-[42%] flex-col px-5 lg:pl-12 lg:pr-16 pt-6 pb-6 relative z-10 h-bv-c">
        <Stagger className="flex flex-col" gap={0.15}>
          <StaggerItem>
            <div className="flex flex-col mb-3">
              <span className="font-poppins text-3xl font-medium text-[#D35B8F] mb-1">
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
            <form className="flex flex-col gap-3 w-full lg:w-[90%] lg:ml-4 h-bv-form" onSubmit={submit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <label htmlFor="bv-name" className="font-poppins text-sm font-semibold text-[#333]">
                    Full Name <span className="text-[#D35B8F]">*</span>
                  </label>
                  <input
                    id="bv-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="h-[42px] rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="bv-phone" className="font-poppins text-sm font-semibold text-[#333]">
                    Phone Number <span className="text-[#D35B8F]">*</span>
                  </label>
                  <input
                    id="bv-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="h-[42px] rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="bv-email" className="font-poppins text-sm font-semibold text-[#333]">
                    Email Address <span className="text-[#D35B8F]">*</span>
                  </label>
                  <input
                    id="bv-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="h-[42px] rounded-md border border-gray-200 px-4 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="bv-date" className="font-poppins text-sm font-semibold text-[#333]">
                    Preferred Date & Time <span className="text-[#D35B8F]">*</span>
                  </label>
                  <div className="relative h-bv-date">
                    <input
                      id="bv-date"
                      type={isDateFocused || formData.date ? 'datetime-local' : 'text'}
                      placeholder="dd-mm-year --:--"
                      required
                      value={formData.date}
                      onChange={(e) => updateField('date', e.target.value)}
                      onClick={(e) => {
                        const input = e.currentTarget
                        if ('showPicker' in input) {
                          try {
                            ;(input as HTMLInputElement & { showPicker: () => void }).showPicker()
                          } catch {

                          }
                        }
                      }}
                      onFocus={() => setIsDateFocused(true)}
                      onBlur={() => setIsDateFocused(false)}
                      className="h-[42px] w-full rounded-md border border-gray-200 px-4 pr-11 font-poppins text-sm outline-none focus:border-[#165ba7] bg-white shadow-sm text-gray-500 cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                    <div className="pointer-events-none absolute right-3 top-1/2 z-[1] -translate-y-1/2 text-gray-400">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="bv-treatment" className="font-poppins text-sm font-semibold text-[#333]">
                  Treatment Required <span className="text-[#D35B8F]">*</span>
                </label>
                <div className="relative">
                  <div
                    id="bv-treatment"
                    role="combobox"
                    aria-expanded={isDropdownOpen}
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
                  <label htmlFor="bv-desc" className="font-poppins text-sm font-semibold text-[#333]">
                    Description <span className="text-[#D35B8F]">*</span>
                  </label>
                  <textarea
                    id="bv-desc"
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
                    className="group inline-flex h-[40px] lg:h-[48px] w-auto items-center justify-center gap-1.5 rounded-[10px] bg-[#165ba7] px-4 lg:px-6 text-white font-poppins font-medium text-[13px] lg:text-[15px] hover:bg-[#10437b] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed h-bv-btn"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
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
                          className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1"
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
