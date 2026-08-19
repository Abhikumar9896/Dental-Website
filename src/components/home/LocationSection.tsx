import { Link } from 'react-router-dom'
import { Clock, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import { BOOK_APPOINTMENT_TO } from '../ui/HeroButton'

export default function LocationSection() {
  return (
    <div className="absolute left-0 top-[6831px] w-full flex flex-col items-center pb-16 font-poppins">
      <div className="mb-12 flex flex-col items-center text-center max-w-[800px]">
        <h2 className="text-[52px] tracking-tight">
          <span className="text-[#C187A4] font-normal">Contact</span>{' '}
          <span className="text-[#165ba7] font-bold">Dental Esthétique</span>
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[#555] font-medium px-4">
          Visit us in Sector 22, Noida, or get in touch to plan your appointment.
        </p>
      </div>

      <div className="relative w-[1320px] h-[640px]">
        <Reveal
          x={0}
          y={0}
          duration={0.9}
          className="absolute left-0 top-0 w-[950px] h-[640px] shadow-sm bg-gray-50 relative overflow-hidden"
        >
          <iframe
            src="https://maps.google.com/maps?q=Dental%20Esthetique,%2055,%20Vindhyachal%20Marg,%20Block%20B,%20Sector%2022,%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dental Esthetique Location"
          ></iframe>

          <div className="absolute inset-0 z-10"></div>

          <motion.div
            className="absolute left-[calc(50%-35px)] top-[calc(50%-78px)] pointer-events-none z-20 flex flex-col items-center"
            style={{ transformOrigin: 'bottom center' }}
            animate={{
              scale: [1, 1.05, 1],
              filter: [
                'drop-shadow(0 0 0 rgba(178,93,148,0))',
                'drop-shadow(0 0 12px rgba(178,93,148,0.45))',
                'drop-shadow(0 0 0 rgba(178,93,148,0))',
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative w-[60px] h-[80px]">
              <svg
                viewBox="-4 -4 68 88"
                className="absolute -left-[4px] -top-[4px] w-[68px] h-[88px] drop-shadow-xl"
              >
                <path
                  d="M30 0C13.431 0 0 13.431 0 30c0 22.5 30 50 30 50s30-27.5 30-50C60 13.431 46.569 0 30 0z"
                  fill="#B25D94"
                  stroke="rgba(178,93,148,0.4)"
                  strokeWidth="4"
                />
              </svg>
              <div className="absolute left-[1px] top-[1px] w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-inner z-10">
                <img
                  src="/images/home/logo.svg"
                  alt="Dental Esthetique Pin"
                  className="w-[85%] h-[85%] object-contain"
                />
              </div>
            </div>
            <div className="w-[24px] h-[5px] bg-black/20 rounded-[100%] blur-[2px] mt-0 -translate-y-1"></div>
          </motion.div>
        </Reveal>

        <div className="absolute right-0 top-[60px] w-[380px] h-auto min-h-[440px] bg-[#135CB2] flex flex-col pt-8 pb-8 px-8 shadow-[0_15px_50px_rgba(0,0,0,0.15)] z-10 text-white font-poppins">
          <h2 className="text-[26px] font-semibold mb-1.5 tracking-wide text-white drop-shadow-sm">
            Working Hours
          </h2>
          <p className="text-[12px] font-medium text-white mb-5 leading-relaxed drop-shadow-sm">
            Check out Dental Esthétique's office hours to plan your visit.
          </p>

          <div className="flex flex-col mb-5">
            {[
              { day: 'Monday', time: '8AM to 9PM', showBook: true },
              { day: 'Tuesday', time: '8AM to 9PM', showBook: true },
              { day: 'Wednesday', time: '9AM to 6:30PM', showBook: true },
              { day: 'Thursday', time: '8AM to 9PM', showBook: true },
              { day: 'Friday', time: '8AM to 9PM', showBook: true },
              { day: 'Sat-Sun', time: 'Closed', showBook: false },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-[7px] border-b border-white/20 text-[12px]"
              >
                <span className="w-[85px] font-semibold text-white drop-shadow-sm">{item.day}</span>
                <span className="flex-1 text-white/95 font-medium drop-shadow-sm">{item.time}</span>
                {item.showBook ? (
                  <Link
                    to={BOOK_APPOINTMENT_TO}
                    className="flex items-center gap-1 bg-white text-[#C187A4] px-2.5 py-1 rounded-[3px] text-[10px] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Book <Clock size={10} strokeWidth={2.5} />
                  </Link>
                ) : (
                  <div className="w-[58px]"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-auto">
            <h3 className="text-[18px] font-semibold tracking-wide">Need Flexible Time?</h3>
            <Link
              to={BOOK_APPOINTMENT_TO}
              className="flex h-[36px] w-max items-center justify-center gap-1.5 rounded bg-white px-4 font-poppins text-[11px] font-semibold text-[#C187A4] hover:bg-gray-50 transition-colors group shadow-sm"
            >
              Suggest Checkup Time
              <ChevronRight
                size={12}
                className="text-[#C187A4]/70 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
