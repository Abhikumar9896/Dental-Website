import { useState } from 'react'
import { motion } from 'framer-motion'
import { treatments } from '../../data/treatments'
import { useAppointmentForm } from '../../hooks/useAppointmentForm'

const EASE = [0.22, 1, 0.36, 1] as const

export default function BookAppointment() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { formData, updateField, setTreatment, status, errorMessage, submit } = useAppointmentForm()

  const inputBaseClass =
    'w-full h-[46px] border border-gray-200/80 rounded-md px-4 font-poppins text-[14px] text-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-[#165ba7] focus:border-[#165ba7] transition-colors'

  return (
    <div
      id="book-appointment"
      className="absolute left-[60px] top-[866px] w-[1320px] h-[640px] z-30"
    >
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: EASE }}
        className="absolute right-0 top-0 w-[1000px] h-[640px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex flex-col pt-[50px] pb-12 pl-[300px] pr-[70px] rounded-sm"
      >
        <h2 className="text-[32px] font-medium text-[#165ba7] mb-6 font-poppins">
          Book Your Appointment
        </h2>
        <div className="w-full h-[1px] bg-gray-200/60 mb-8"></div>

        <div className="relative w-full flex-1">
          <img
            src="/images/home/img-booking.avif"
            alt="Booking"
            className="absolute left-0 top-0 w-[280px] h-auto object-contain"
          />

          <form onSubmit={submit} className="absolute right-0 top-0 flex flex-col gap-3 w-[320px]">
            <input
              type="text"
              placeholder="Full Name *"
              required
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={inputBaseClass}
            />

            <input
              type="tel"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={inputBaseClass}
            />

            <input
              type="email"
              placeholder="Your email address *"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={inputBaseClass}
            />

            <div className="relative">
              <input
                type="text"
                placeholder="Preferred Date & Time *"
                required
                value={formData.date}
                onChange={(e) => updateField('date', e.target.value)}
                className="relative w-full h-[46px] border border-gray-200/80 rounded-md px-4 font-poppins text-[14px] text-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-[#165ba7] focus:border-[#165ba7] transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer z-10 bg-transparent"
                onFocus={(e) => (e.target.type = 'datetime-local')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text'
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-0">
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full h-[46px] border ${isDropdownOpen ? 'border-[#165ba7]' : 'border-gray-200/80'} rounded-md px-4 font-poppins text-[14px] flex items-center justify-between cursor-pointer transition-colors bg-white`}
              >
                <span className={formData.treatment ? 'text-[#333] font-medium' : 'text-gray-500'}>
                  {formData.treatment || 'Treatment Required *'}
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
                    className="absolute left-0 top-[calc(100%+4px)] w-full max-h-[220px] overflow-y-auto bg-white border border-gray-200/80 rounded-md shadow-xl z-50"
                  >
                    {treatments.map((t) => (
                      <div
                        key={t.title}
                        className="px-4 py-2.5 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors"
                        onClick={() => {
                          setTreatment(t.title)
                          setIsDropdownOpen(false)
                        }}
                      >
                        {t.title}
                      </div>
                    ))}
                    <div
                      className="px-4 py-2.5 text-[13px] text-gray-600 font-poppins hover:bg-[#F8F6F1] hover:text-[#165ba7] cursor-pointer transition-colors border-t border-gray-100"
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

            {formData.treatment === 'Others' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <textarea
                  placeholder="Description (Optional)"
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full h-[66px] border border-gray-200/80 rounded-md px-4 py-3 font-poppins text-[14px] text-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-[#165ba7] focus:border-[#165ba7] transition-colors resize-none mt-0.5"
                ></textarea>
              </motion.div>
            )}

            {status === 'success' && (
              <div className="flex items-start gap-2 rounded-md bg-green-50 border border-green-200 px-4 py-3">
                <span className="text-green-600 text-sm leading-snug font-poppins">
                  Thank you! Your appointment request has been sent. We will contact you shortly to
                  confirm.
                </span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-2 rounded-md bg-red-50 border border-red-200 px-4 py-3">
                <span className="text-red-600 text-sm leading-snug font-poppins">
                  {errorMessage}
                </span>
              </div>
            )}

            {status !== 'success' && (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group flex w-full h-[52px] items-center justify-center gap-2 rounded-md bg-[#A66689] hover:bg-[#8F5675] transition-colors shadow-sm text-white font-poppins text-[15px] font-medium mt-1 shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
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
                    Book Your Appointment
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
          </form>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className="absolute left-0 top-[100px] w-[560px] h-[440px] bg-[#0A5BA8] flex flex-col justify-center items-center px-[80px] text-center shadow-lg"
      >
        <div className="w-[100px] h-[2px] bg-[#D86C97] mb-10"></div>
        <div className="relative w-full">
          <span className="absolute -left-6 -top-4 text-5xl font-poppins italic font-bold text-white leading-none">
            “
          </span>
          <p className="text-white font-poppins text-[22px] leading-[1.6] font-light">
            At Dental ESTHETIQUE, we are committed to providing you and your family with the highest
            quality of compassionate dental care.
          </p>
          <span className="absolute -right-4 bottom-0 text-5xl font-poppins italic font-bold text-white leading-none">
            ”
          </span>
        </div>
        <div className="w-[100px] h-[2px] bg-[#D86C97] mt-10 mb-8"></div>

        <div className="mt-4 opacity-95">
          <span
            className="text-white text-[36px] block -rotate-2 tracking-wide italic font-poppins"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
          >
            Dr. Deepika Singhal
          </span>
        </div>
      </motion.div>
    </div>
  )
}
