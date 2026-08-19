import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroButton, { BOOK_APPOINTMENT_TO } from '../ui/HeroButton'

const IMG = '/images/home'

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slides = [
    {
      image: `/images/home/hero1.webp`,
      topLabel: 'Advanced Dental Care',
      topLabelColor: 'text-[#A66689]',
      heading: (
        <>
          Transforming Smiles
          { ' ' }<br className="hidden lg:block" />
          with Advanced
          { ' ' }<br className="hidden lg:block" />
          Dental Care.
        </>
      ),
      headingColor: 'text-[#0A5BA8]',
      content: (
        <>
          <p className="font-poppins text-[12px] lg:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.55] text-[#4A5568] max-w-[550px] mb-3 lg:mb-4">
            At Dental Esthetique, we combine advanced technology, experienced dental professionals,
            and personalized care to deliver healthy, confident smiles for patients of all ages.
          </p>
          <div className="flex flex-row flex-wrap items-center gap-2.5 lg:gap-4 h-hero-btns">
            <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an Appointment" />
            <HeroButton
              to="/services#catalogue"
              text="See treatments"
              variant="outline"
              className="!border-[#0A5BA8] !text-[#0A5BA8] hover:!bg-[#0A5BA8]/5"
            />
          </div>
        </>
      ),
    },
    {
      image: `/images/about/hero2.webp`,
      topLabel: 'Care For Your Smile',
      topLabelColor: 'text-[#A0557A]',
      heading: (
        <>
          Committed To
          { ' ' }<br className="hidden lg:block" />
          Excellence
        </>
      ),
      headingColor: 'text-[#08549E]',
      content: (
        <>
          <div className="flex flex-col gap-3 max-w-full lg:max-w-[750px] mb-4 lg:mb-6 h-hero-row md:flex-row md:gap-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-[22px] h-[22px] lg:w-[38px] lg:h-[38px]">
                <img
                  src="https://img.icons8.com/ios/100/08549E/tooth.webp"
                  alt="Tooth"
                  className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                  Whitening
                </h3>
                <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                  Professional whitening that
                  { ' ' }<br className="hidden lg:block" />
                  safely brightens your smile
                  { ' ' }<br className="hidden lg:block" />
                  in a single visit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-[22px] h-[22px] lg:w-[38px] lg:h-[38px]">
                <img
                  src="https://img.icons8.com/ios/100/08549E/dental-crown.webp"
                  alt="Prosthesis"
                  className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/false-teeth.webp'
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                  Prosthesis
                </h3>
                <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                  Custom prosthetic solutions for
                  { ' ' }<br className="hidden lg:block" />
                  comfortable chewing and a
                  { ' ' }<br className="hidden lg:block" />
                  natural-looking smile.
                </p>
              </div>
            </div>
          </div>
          <HeroButton
            to="/services#catalogue"
            text="View Our Services"
            className="!bg-[#A0557A] hover:!bg-[#8F4765]"
          />
        </>
      ),
    },
    {
      image: `/images/home/hero3.webp`,
      topLabel: 'Care For Lifetime',
      topLabelColor: 'text-[#A0557A]',
      heading: (
        <>
          Let Us Brighten
          { ' ' }<br className="hidden lg:block" />
          Your Smile
        </>
      ),
      headingColor: 'text-[#08549E]',
      content: (
        <>
          <div className="flex flex-col gap-3 max-w-full lg:max-w-[750px] mb-4 lg:mb-6 h-hero-row md:flex-row md:gap-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-[22px] h-[22px] lg:w-[38px] lg:h-[38px]">
                <img
                  src="https://img.icons8.com/ios/100/08549E/dental-implant.webp"
                  alt="Implants"
                  className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                  Implants
                </h3>
                <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                  Durable dental implants that
                  { ' ' }<br className="hidden lg:block" />
                  restore missing teeth with
                  { ' ' }<br className="hidden lg:block" />
                  lasting stability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-[22px] h-[22px] lg:w-[38px] lg:h-[38px]">
                <img
                  src="https://img.icons8.com/ios/100/08549E/tooth-with-braces.webp"
                  alt="Alignment"
                  className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/clipboard.webp'
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                  Alignment
                </h3>
                <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                  Clear aligners and braces that
                  { ' ' }<br className="hidden lg:block" />
                  straighten teeth with comfort
                  { ' ' }<br className="hidden lg:block" />
                  and precision.
                </p>
              </div>
            </div>
          </div>
          <HeroButton
            to="/services#catalogue"
            text="Dental Solutions"
            className="!bg-[#A0557A] hover:!bg-[#8F4765]"
          />
        </>
      ),
    },
    {
      image: `${IMG}/hero-clinic.webp`,
      topLabel: 'Committed To Excellence',
      topLabelColor: 'text-[#A0557A]',
      heading: (
        <>
          Personalized & { ' ' }<br className="hidden lg:block" />
          Comfortable
        </>
      ),
      headingColor: 'text-[#08549E]',
      content: (
        <>
          <div className="flex flex-col gap-3 max-w-full lg:max-w-[750px] mb-4 lg:mb-6 h-hero-row md:flex-row md:gap-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-[22px] h-[22px] lg:w-[38px] lg:h-[38px]">
                <img
                  src="https://img.icons8.com/ios/100/08549E/tooth-protection.webp"
                  alt="Full Protection"
                  className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/shield.webp'
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                  Full Protection
                </h3>
                <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                  Preventive care and protection
                  { ' ' }<br className="hidden lg:block" />
                  that keep your smile healthy
                  { ' ' }<br className="hidden lg:block" />
                  for the long term.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-[22px] h-[22px] lg:w-[38px] lg:h-[38px]">
                <img
                  src="https://img.icons8.com/ios/100/08549E/dentist-chair.webp"
                  alt="Complete Service"
                  className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/hospital-bed.webp'
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-poppins font-semibold text-[16px] lg:text-[18px] mb-1">
                  Complete Service
                </h3>
                <p className="font-poppins text-[#3B4657] text-[13px] lg:text-[14px] leading-relaxed">
                  Full-service dentistry tailored
                  { ' ' }<br className="hidden lg:block" />
                  to your needs in one
                  { ' ' }<br className="hidden lg:block" />
                  comfortable visit.
                </p>
              </div>
            </div>
          </div>
          <HeroButton
            to={BOOK_APPOINTMENT_TO}
            text="Book an Appointment"
            className="!bg-[#A0557A] hover:!bg-[#8F4765]"
          />
        </>
      ),
    },
  ]

  return (
    <>
      <div className="relative lg:absolute left-0 top-0 h-[400px] md:h-[440px] lg:h-[778px] w-full lg:w-[1440px] overflow-hidden h-hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center pt-14 lg:pt-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              fetchPriority="high"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover h-hero-grad ${index === 1 ? 'object-[center_top]' : index === 0 ? 'object-top' : 'object-[60%_center]'}`}
            />
            <div
              className={`absolute inset-0 h-full w-full h-hero-grad ${index === 1 ? 'bg-white/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/60 lg:via-white/20' : 'bg-white/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/90 lg:via-white/50'
              } lg:to-transparent`}
            />

            <div className="relative z-20 w-full px-5 md:px-12 lg:px-0 lg:absolute lg:left-[4%] lg:top-[58%] lg:w-[700px] lg:-translate-y-1/2 flex flex-col items-start text-left gap-2.5 lg:gap-4 h-hero-txt">
              <AnimatePresence initial={false}>
                {currentSlide === index && (
                  <motion.div
                    className="flex flex-col gap-2.5 lg:gap-4 w-full max-w-[560px] lg:max-w-none"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                    }}
                  >
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                        show: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      className={`font-poppins bg-[#D35B8F]/10 text-[10px] md:text-[12px] lg:text-[13px] font-bold tracking-[0.1em] uppercase px-3 py-1 lg:px-4 lg:py-1.5 rounded-full w-max ${slide.topLabelColor}`}
                    >
                      {slide.topLabel}
                    </motion.span>

                    <motion.h1
                      variants={{
                        hidden: { opacity: 0, y: 28 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      className={`font-poppins text-[26px] md:text-[34px] lg:text-[56px] font-bold leading-[1.12] h-hero-h1 ${slide.headingColor} tracking-tight`}
                    >
                      {slide.heading}
                    </motion.h1>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      {slide.content}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      <div className="relative lg:absolute left-0 top-auto lg:top-[774px] flex h-[36px] lg:h-[40px] w-full lg:w-[1440px] items-center overflow-hidden bg-gradient-to-r from-[#0A5BA8] via-[#08549E] to-[#0A5BA8] shadow-xl z-20 border-y border-white/10 h-hero-mq">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1, 2].map((blockIndex) => (
            <div key={blockIndex} className="flex shrink-0 items-center gap-12 px-6">
              {[
                'Dental Technology',
                'Experienced Professionals',
                'Sterilized Environment',
                'Personalized Plans',
                'Advanced Dental Care',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    className="w-[18px] h-[18px] text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 10h-5V5h-4v5H5v4h5v5h4v-5h5v-4z" />
                  </svg>
                  <span className="font-poppins text-[13px] font-semibold tracking-widest text-white uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
