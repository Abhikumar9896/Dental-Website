import { Link } from 'react-router-dom'
import { Clock, ChevronRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import { BOOK_APPOINTMENT_TO } from '../ui/HeroButton'
import { scrollToId } from '../../utils/scroll'

const MAPS_URL = 'https://maps.app.goo.gl/mgbFVCZRaDL7CVeQ8'

export default function LocationSection() {
  return (
    <div className="relative left-0 top-0 w-full flex flex-col items-center pb-10 lg:absolute lg:top-[6831px] lg:pb-16 font-poppins h-loc">
      <div className="mb-6 lg:mb-12 flex flex-col items-center text-center max-w-[800px] px-5">
        <h2 className="text-[26px] lg:text-[52px] tracking-tight h-loc-h">
          <span className="text-[#D35B8F] font-normal">Contact</span>{' '}
          <span className="text-[#165ba7] font-bold">Dental Esthetique</span>
        </h2>
        <p className="mt-2.5 lg:mt-4 text-[13px] lg:text-[15px] leading-relaxed text-[#555] font-medium max-w-[34rem]">
          Visit us in Sector 22, Noida, or get in touch to plan your appointment.
        </p>
      </div>

      <div className="relative w-full max-w-full px-5 lg:px-0 lg:w-[1320px] h-auto lg:h-[640px] flex flex-col gap-4 lg:block h-loc-wrap">
        <Reveal
          x={0}
          y={0}
          duration={0.9}
          className="relative lg:absolute left-0 top-0 w-full lg:w-[950px] h-[240px] sm:h-[280px] lg:h-[640px] shadow-sm bg-gray-50 overflow-hidden rounded-xl lg:rounded-none h-loc-map"
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

          <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none"></div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="absolute left-3 top-3 z-30 inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-[12px] font-semibold text-[#165ba7] shadow-md hover:bg-gray-50 transition-colors lg:left-4 lg:top-4"
          >
            Open in Maps
            <ExternalLink size={13} strokeWidth={2.5} />
          </a>

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

        <div className="relative lg:absolute right-0 top-0 lg:top-[60px] w-full lg:w-[380px] h-auto min-h-0 lg:min-h-[440px] bg-[#135CB2] flex flex-col pt-5 pb-5 px-4 lg:pt-8 lg:pb-8 lg:px-8 shadow-[0_15px_50px_rgba(0,0,0,0.15)] z-10 text-white font-poppins rounded-xl lg:rounded-none h-loc-hours">
          <h2 className="text-[22px] lg:text-[26px] font-semibold mb-1 tracking-wide text-white drop-shadow-sm">
            Working Hours
          </h2>
          <p className="text-[12px] font-medium text-white/95 mb-4 lg:mb-5 leading-relaxed drop-shadow-sm">
            Check out Dental Esthetique&apos;s office hours to plan your visit.
          </p>

          <div className="flex flex-col mb-4 lg:mb-5">
            {[
              { day: 'Monday', time: '10 AM – 2 PM, 5 – 8 PM', showBook: true },
              { day: 'Tuesday', time: '10 AM – 2 PM, 5 – 8 PM', showBook: true },
              { day: 'Wednesday', time: '10 AM – 2 PM, 5 – 8 PM', showBook: true },
              { day: 'Thursday', time: '10 AM – 2 PM, 5 – 8 PM', showBook: true },
              { day: 'Friday', time: '10 AM – 2 PM, 5 – 8 PM', showBook: true },
              { day: 'Saturday', time: '10 AM – 2 PM, 5 – 8 PM', showBook: true },
              { day: 'Sunday', time: '10 AM – 2 PM', showBook: true },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 py-[7px] border-b border-white/20 text-[11px] lg:text-[12px]"
              >
                <span className="w-[72px] lg:w-[85px] shrink-0 font-semibold text-white drop-shadow-sm">
                  {item.day}
                </span>
                <span className="flex-1 min-w-0 text-white/95 font-medium drop-shadow-sm">
                  {item.time}
                </span>
                {item.showBook ? (
                  <Link
                    to={BOOK_APPOINTMENT_TO}
                    onClick={(e) => {
                      if (window.location.pathname === '/') {
                        e.preventDefault()
                        scrollToId('book-appointment')
                      }
                    }}
                    className="flex shrink-0 items-center gap-1 bg-white text-[#D35B8F] px-2.5 py-1 rounded-[3px] text-[10px] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Book <Clock size={10} strokeWidth={2.5} />
                  </Link>
                ) : (
                  <div className="w-[58px]"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 mt-auto">
            <h3 className="text-[16px] lg:text-[18px] font-semibold tracking-wide">
              Need Flexible Time?
            </h3>
            <Link
              to={BOOK_APPOINTMENT_TO}
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  scrollToId('book-appointment')
                }
              }}
              className="flex h-[40px] lg:h-[36px] w-full lg:w-max items-center justify-center gap-1.5 rounded bg-white px-4 font-poppins text-[12px] lg:text-[11px] font-semibold text-[#D35B8F] hover:bg-gray-50 transition-colors group shadow-sm"
            >
              Suggest Checkup Time
              <ChevronRight
                size={14}
                className="text-[#D35B8F]/70 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
