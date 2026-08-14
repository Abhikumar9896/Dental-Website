import { Link } from 'react-router-dom'
import { Eye, Sparkles } from 'lucide-react'
import AppointmentCta from '../components/AppointmentCta'
import PageHero from '../components/ui/PageHero'

const IMG = '/images/about'

const stats = [
  { value: '5.0', label: 'CLINIC RATING', star: true },
  { value: '311+', label: 'PATIENT STORIES' },
  { value: '58+', label: 'TREATMENTS' },
  { value: '2', label: 'SPECIALITIES' },
] as const

const storyPoints = [
  'Dental Esthétique was established with a vision to provide comprehensive dental care that combines modern technology, clinical excellence, and personalized attention.',
  'Our clinic offers preventive, restorative, cosmetic, and advanced dental treatments tailored to the unique needs of every patient. We believe that exceptional dentistry goes beyond procedures it involves educating patients, understanding their concerns, and delivering care in a comfortable and welcoming environment.',
  'Every treatment is planned with precision, transparency, and a long term focus on oral health.',
] as const

const goodToKnow = [
  'Registered specialist dentists',
  'In house diagnostic imaging',
  'Digital payments incl. Paytm',
  'Sterilisation first protocols',
] as const

export default function About() {
  return (
    <div className="w-full bg-white font-[family-name:var(--font-poppins)] overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white overflow-hidden pb-32">
        
        {/* Hero Section */}
        <div className="relative w-full h-[800px]">
          <PageHero
            tagline="About Dental Esthétique"
            title="Your Trusted Partner in Complete Dental Care"
            description="Dental Esthétique is committed to delivering exceptional dental care through advanced technology, evidence based treatments, and a patient first approach. From routine dental check ups to complex smile transformations, our goal is to ensure every patient receives personalized care in a safe, comfortable, and modern environment."
            taglineColor="text-[#C187A4]"
            titleColor="text-[#28231F]"
            titleFont="font-[family-name:var(--font-fraunces)]"
          >
            <Link
              to="/contact"
              className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#C187A4] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              Book an appointment
            </Link>
            <Link
              to="/services"
              className="inline-flex h-[44px] items-center justify-center rounded-full border-[1.5px] border-[#C187A4] bg-transparent px-8 font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#C187A4] hover:bg-[#C187A4]/5 transition-colors"
            >
              See treatments
            </Link>
          </PageHero>

          {/* Stats Bar */}
          <div className="absolute left-1/2 bottom-[28px] -translate-x-1/2 flex h-[72px] w-[1280px] items-center justify-between rounded-[47px] bg-white px-[124px] shadow-[0_8px_32px_rgba(22,91,167,0.08)] z-30">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-poppins)] text-[32px] font-semibold leading-none text-[#165ba7]">
                    {stat.value}
                  </span>
                  {'star' in stat && stat.star && (
                    <img
                      src={`${IMG}/star.svg`}
                      alt=""
                      className="h-6 w-6"
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(30%) sepia(82%) saturate(1900%) hue-rotate(192deg) brightness(92%) contrast(92%)',
                      }}
                    />
                  )}
                </div>
                <p className="font-[family-name:var(--font-poppins)] text-[10px] font-medium tracking-[0.14em] text-[#28231F]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 02- OUR STORY */}
        <div className="mt-32 w-full flex justify-center bg-white z-10">
          <div className="flex w-[1280px] items-center justify-between gap-16">
            
            {/* Left: Text */}
            <div className="w-[638px] flex flex-col">
              <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#C187A4]">
                02- OUR STORY
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-[40px] font-semibold leading-[1.1] text-[#28231F]">
                Creating Beautiful Smiles Through Excellence in Dentistry
              </h2>

              <ul className="mt-10 flex flex-col gap-6">
                {storyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#C187A4]" />
                    <p className="font-[family-name:var(--font-poppins)] text-base leading-relaxed tracking-[0.02em] text-[#767676]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div
              className="h-[540px] w-[540px] overflow-hidden rounded-[48px] relative shrink-0"
              style={{
                boxShadow: '0 0 0 3px rgba(193,135,164,0.4)', // Pink border instead of orange
              }}
            >
              <img
                src={`${IMG}/clinic-exterior.png`}
                alt="Dental Esthetique clinic exterior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              
              {/* Specialist Led Care Badge */}
              <div className="absolute left-[30px] bottom-[30px] bg-white rounded-xl px-6 py-4 shadow-lg flex flex-col">
                <span className="font-[family-name:var(--font-poppins)] text-[24px] font-bold text-[#28231F] leading-none mb-1">100%</span>
                <span className="font-[family-name:var(--font-poppins)] text-[11px] font-medium text-[#767676] tracking-widest uppercase">SPECIALIST LED CARE</span>
              </div>
            </div>

          </div>
        </div>

        {/* 03-VISION & MISSION */}
        <div className="mt-36 w-full flex justify-center bg-white z-10">
          <div className="flex w-[1280px] items-center justify-between gap-10">
            
            {/* Left: Text */}
            <div className="w-[480px] flex flex-col">
              <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#C187A4]">
                03-VISION & MISSION
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-[36px] font-semibold leading-[1.2] text-[#28231F]">
                What we're working toward
              </h2>
              <p className="mt-4 font-[family-name:var(--font-poppins)] text-[15px] leading-relaxed tracking-[0.02em] text-[#767676]">
                Transforming lives through ethical dentistry, advanced treatments, compassionate care, and lasting patient relationships every day.
              </p>
            </div>

            {/* Right: Overlapping Circles */}
            <div className="relative flex items-center h-[350px] w-[678px] shrink-0">
              
              {/* Mission Circle (Left) */}
              <div className="absolute left-0 w-[349px] h-[349px] rounded-full bg-white shadow-[0_4px_25px_rgba(0,0,0,0.07)] flex flex-col items-center justify-center text-center px-10 z-10 border border-gray-50">
                <Sparkles className="w-6 h-6 mb-3 text-[#165ba7]" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-poppins)] text-[14px] font-bold text-[#28231F] mb-3 tracking-widest uppercase">Our Mission</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[12px] leading-[1.6] text-[#767676]">
                  To provide ethical, evidence based, and personalized dental care using advanced technology while ensuring every patient feels informed and comfortable throughout their treatment journey.
                </p>
              </div>

              {/* Connecting Pink Line */}
              <div className="absolute left-[330px] top-1/2 w-[30px] h-[3px] bg-[#C187A4] z-20 -translate-y-1/2"></div>

              {/* Vision Circle (Right) */}
              <div className="absolute right-0 w-[349px] h-[349px] rounded-full bg-[#165ba7] shadow-lg flex flex-col items-center justify-center text-center px-10 z-10">
                <Eye className="w-6 h-6 mb-3 text-white" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-poppins)] text-[14px] font-bold text-white mb-3 tracking-widest uppercase">Our Vision</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[12px] leading-[1.6] text-white/90">
                  To become the most trusted destination for comprehensive dental care by delivering exceptional clinical outcomes, innovative treatments, and a patient first experience.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="mt-36 w-full flex justify-center z-10">
          <div className="w-[1280px] h-[400px] relative overflow-hidden flex flex-col items-center justify-center text-center px-[220px] rounded-tl-[9px] rounded-tr-[200px] rounded-br-[4px] rounded-bl-[200px] shadow-lg">
            {/* Background Image */}
            <img src="/images/home/bgblue.png" alt="Background Texture" className="absolute inset-0 w-full h-full object-cover z-0" />
            
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center text-white">
              <h2 className="font-[family-name:var(--font-fraunces)] text-[44px] font-semibold mb-6">
                Our Commitment to Every Patient
              </h2>
              <p className="font-[family-name:var(--font-poppins)] text-[16px] leading-[1.8] font-normal text-white/90 text-center mb-10">
                At Dental ESTHÉTIQUE, every patient is treated with respect, empathy, and honesty. We are committed to providing transparent consultations, personalized treatment plans, and a comfortable experience using modern techniques and advanced technology. Our goal is not only to treat dental concerns but to build long term relationships based on trust and exceptional care.
              </p>
              <p className="font-[family-name:var(--font-fraunces)] text-[24px] font-medium tracking-wide">
                - Dental Esthétique
              </p>
            </div>
          </div>
        </div>

        {/* 04-GOOD TO KNOW */}
        <div className="mt-32 w-full bg-[#F9F4F1] py-20 flex justify-center z-10">
          <div className="flex w-[1280px] flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.06em] text-[#C187A4]">
                04-GOOD TO KNOW
              </p>
              <h2 className="font-[family-name:var(--font-poppins)] text-[36px] font-semibold leading-none text-[#28231F]">
                Certifications and clinic standards
              </h2>
            </div>

            <div className="flex w-full items-center justify-between">
              {goodToKnow.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="size-2.5 shrink-0 rounded-full bg-[#165ba7]" />
                  <p className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-base font-medium tracking-[0.02em] text-[#28231F]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="relative w-full h-[448px] mt-24 mb-10 z-10">
          <AppointmentCta top={0} />
        </div>

      </div>
    </div>
  )
}
