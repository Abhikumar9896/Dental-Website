import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
      image: `/images/home/hero1.png`,
      topLabel: 'Advanced Dental Care',
      topLabelColor: 'text-[#A66689]',
      heading: (
        <>
          Transforming Smiles<br />
          with Advanced<br />
          Dental Care.
        </>
      ),
      headingColor: 'text-[#0A5BA8]',
      content: (
        <>
          <p className="font-[family-name:var(--font-poppins)] text-[16px] font-normal leading-[1.7] text-[#4A5568] max-w-[550px] mb-4">
            At Dental Esthetique, we combine advanced technology, experienced
            dental professionals, and personalized care to deliver healthy,
            confident smiles for patients of all ages.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="group flex h-[54px] items-center justify-center gap-2 rounded-md bg-[#A66689] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-medium text-white transition-all hover:bg-[#8F5675]"
            >
              Book an Appointment
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="flex h-[54px] items-center justify-center rounded-md border-2 border-[#0A5BA8] bg-white/50 px-8 font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#0A5BA8] transition-all hover:bg-[#0A5BA8] hover:text-white backdrop-blur-sm"
            >
              See treatments
            </Link>
          </div>
        </>
      )
    },
    {
      image: `/images/about/hero2.png`,
      topLabel: 'Care For Your Smile',
      topLabelColor: 'text-[#A0557A]',
      heading: (
        <>
          Committed To<br />
          Excellence
        </>
      ),
      headingColor: 'text-[#08549E]',
      content: (
        <>
          <div className="flex gap-4 max-w-[750px] mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {/* Tooth Whitening Icon */}
                <img 
                  src="https://img.icons8.com/ios/100/08549E/tooth.png" 
                  alt="Tooth" 
                  className="w-[38px] h-[38px] object-contain" 
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-[family-name:var(--font-poppins)] font-semibold text-[18px] mb-1">Whitening</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#3B4657] text-[14px] leading-relaxed">
                  Completely iterate covalent<br />
                  strategic theme areas via<br />
                  accurate e-markets.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {/* Tooth Implant Icon */}
                <img 
                  src="https://img.icons8.com/ios/100/08549E/dental-crown.png" 
                  alt="Prosthesis" 
                  className="w-[38px] h-[38px] object-contain" 
                  onError={(e) => { e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/false-teeth.png' }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-[family-name:var(--font-poppins)] font-semibold text-[18px] mb-1">Prosthesis</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#3B4657] text-[14px] leading-relaxed">
                  Holistically foster superior<br />
                  methodologies without market-<br />
                  driven best practices.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/services"
            className="group flex w-max h-[54px] items-center justify-center gap-2 rounded-md bg-[#A0557A] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-medium text-white transition-all hover:bg-[#8F4765]"
          >
            View Our Services
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </>
      )
    },
    {
      image: `/images/home/hero3.png`,
      topLabel: 'Care For Lifetime',
      topLabelColor: 'text-[#A0557A]',
      heading: (
        <>
          Let Us Brighten<br />
          Your Smile
        </>
      ),
      headingColor: 'text-[#08549E]',
      content: (
        <>
          <div className="flex gap-4 max-w-[750px] mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {/* Implants Icon */}
                <img 
                  src="https://img.icons8.com/ios/100/08549E/dental-implant.png" 
                  alt="Implants" 
                  className="w-[38px] h-[38px] object-contain" 
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-[family-name:var(--font-poppins)] font-semibold text-[18px] mb-1">Implants</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#3B4657] text-[14px] leading-relaxed">
                  Dramatically maintain clicks and<br />
                  mortar solutions without<br />
                  functional solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {/* Alignment Icon */}
                <img 
                  src="https://img.icons8.com/ios/100/08549E/tooth-with-braces.png" 
                  alt="Alignment" 
                  className="w-[38px] h-[38px] object-contain" 
                  onError={(e) => { e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/clipboard.png' }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-[family-name:var(--font-poppins)] font-semibold text-[18px] mb-1">Alignment</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#3B4657] text-[14px] leading-relaxed">
                  Dynamically innovate resource<br />
                  leveling service for state of the<br />
                  art customer.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/services"
            className="group flex w-max h-[54px] items-center justify-center gap-2 rounded-md bg-[#A0557A] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-medium text-white transition-all hover:bg-[#8F4765]"
          >
            Dental Solutions
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </>
      )
    },
    {
      image: `${IMG}/hero-bg-5ed7fb.png`,
      topLabel: 'Committed To Excellence',
      topLabelColor: 'text-[#A0557A]',
      heading: (
        <>
          Personalized &<br />
          Comfortable
        </>
      ),
      headingColor: 'text-[#08549E]',
      content: (
        <>
          <div className="flex gap-4 max-w-[750px] mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {/* Full Protection Icon */}
                <img 
                  src="https://img.icons8.com/ios/100/08549E/tooth-protection.png" 
                  alt="Full Protection" 
                  className="w-[38px] h-[38px] object-contain" 
                  onError={(e) => { e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/shield.png' }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-[family-name:var(--font-poppins)] font-semibold text-[18px] mb-1">Full Protection</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#3B4657] text-[14px] leading-relaxed">
                  Competently parallel task<br />
                  researched data and process<br />
                  improvements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {/* Complete Service Icon */}
                <img 
                  src="https://img.icons8.com/ios/100/08549E/dentist-chair.png" 
                  alt="Complete Service" 
                  className="w-[38px] h-[38px] object-contain" 
                  onError={(e) => { e.currentTarget.src = 'https://img.icons8.com/ios/100/08549E/hospital-bed.png' }}
                />
              </div>
              <div>
                <h3 className="text-[#08549E] font-[family-name:var(--font-poppins)] font-semibold text-[18px] mb-1">Complete Service</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#3B4657] text-[14px] leading-relaxed">
                  Collaboratively expedite quality<br />
                  products via client focused<br />
                  results.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/process"
            className="group flex w-max h-[54px] items-center justify-center gap-2 rounded-md bg-[#A0557A] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-medium text-white transition-all hover:bg-[#8F4765]"
          >
            DentiCare Process
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </>
      )
    }
  ]

  return (
    <>
      <div className="absolute left-0 top-0 h-[778px] w-[1440px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className={`absolute left-0 top-0 h-[778px] w-[1440px] object-cover ${
                index === 1 ? 'scale-[1.15] object-[center_top] origin-top' : 
                index === 0 ? 'object-top' : ''
              }`}
            />
            <div 
              className={`absolute left-0 top-0 h-[778px] w-[1440px] bg-gradient-to-r ${
                index === 1 ? 'from-white/60 via-white/20' : 'from-white/90 via-white/50'
              } to-transparent`} 
            />
            
            <div className="absolute left-[4%] top-[58%] flex w-[700px] -translate-y-1/2 flex-col items-start text-left gap-4">
              <span className={`font-[family-name:var(--font-poppins)] text-[20px] font-medium ${slide.topLabelColor} tracking-wide transition-all duration-700 delay-100 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {slide.topLabel}
              </span>

              <div className="flex flex-col gap-4">
                <h1 className={`font-[family-name:var(--font-poppins)] text-[56px] font-bold leading-[1.1] ${slide.headingColor} tracking-tight transition-all duration-700 delay-200 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {slide.heading}
                </h1>
                <div className={`transition-all duration-700 delay-300 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {slide.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[766px] flex h-[48px] w-[1440px] items-center overflow-hidden bg-[#F9F4F1] shadow-sm z-20">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((blockIndex) => (
            <div key={blockIndex} className="flex shrink-0 items-center gap-10 px-5">
              {[
                'Dental Technology',
                'Experienced Dental Professionals',
                'Sterilized & Safe Environment',
                'Personalized Treatment Plans',
                'Advanced Dental Care',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-[#F48422]" />
                  <span className="font-[family-name:var(--font-poppins)] text-[15px] font-medium text-black">
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
