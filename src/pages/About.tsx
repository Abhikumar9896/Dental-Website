import PageHero from '../components/ui/PageHero'
import HeroButton from '../components/ui/HeroButton'
import SectionPill from '../components/ui/SectionPill'
import Reveal, { Stagger, StaggerItem, Float } from '../components/ui/Reveal'

const IMG = '/images/about'

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
    <div className="w-full bg-white font-poppins overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white overflow-hidden pb-32">
        <PageHero
          tagline="About Dental Esthétique"
          title="Your Trusted Partner in Complete Dental Care"
          description="Dental Esthétique is committed to delivering exceptional dental care through advanced technology, evidence based treatments, and a deeply patient first approach. From routine dental check ups to complex cosmetic smile transformations, our expert team is here to guide you every step of the way. Our ultimate goal is to ensure every patient receives highly personalized care within a safe, extraordinarily comfortable, and state of the art modern environment."
          taglineColor="text-[#C187A4]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces"
          height="h-[max(100vh,800px)]"
          backgroundImage="/images/about/abouthero.png"
          hideCollage={true}
        >
          <HeroButton to="/contact" text="Book an appointment" />
          <HeroButton to="/services" text="See treatments" variant="outline" />
        </PageHero>

        <div className="mt-16 w-full flex justify-center bg-white z-10">
          <div className="flex w-[1280px] items-center justify-between gap-16">
            <Reveal x={-40} y={0} duration={0.8} className="w-[638px] flex flex-col">
              <SectionPill>02 · OUR STORY</SectionPill>
              <h2 className="mt-3 font-poppins text-[40px] font-semibold leading-[1.1] text-[#28231F]">
                Creating Beautiful Smiles Through Excellence in Dentistry
              </h2>

              <Reveal y={24} delay={0.2} duration={0.7} className="mt-10 flex flex-col gap-6">
                <ul>
                  {storyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-[#C187A4]" />
                      <p className="font-poppins text-base leading-relaxed tracking-[0.02em] text-[#767676]">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Reveal>

            <Reveal x={40} y={0} duration={0.8} className="shrink-0">
              <div
                className="h-[540px] w-[540px] overflow-hidden rounded-[48px] relative shrink-0"
                style={{ boxShadow: '0 0 0 3px rgba(193,135,164,0.4)' }}
              >
                <img
                  src={`${IMG}/clinic-exterior.png`}
                  alt="Dental Esthetique clinic exterior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <Float amplitude={6} duration={4}>
                  <div className="absolute left-[30px] bottom-[30px] bg-white rounded-xl px-6 py-4 shadow-lg flex flex-col">
                    <span className="font-poppins text-[24px] font-bold text-[#28231F] leading-none mb-1">
                      100%
                    </span>
                    <span className="font-poppins text-[11px] font-medium text-[#767676] tracking-widest uppercase">
                      SPECIALIST LED CARE
                    </span>
                  </div>
                </Float>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 w-full flex justify-center bg-white z-10">
          <div className="flex w-[1280px] items-center justify-between gap-10">
            <Reveal x={-40} y={0} duration={0.8} className="w-[460px] flex flex-col">
              <SectionPill>03 · VISION & MISSION</SectionPill>
              <h2 className="mt-4 font-fraunces text-[40px] font-bold leading-[1.2] text-[#28231F]">
                What we&apos;re working toward
              </h2>
              <p className="mt-5 font-poppins text-[16px] leading-relaxed tracking-[0.02em] text-[#767676]">
                Transforming lives through ethical dentistry, advanced treatments, compassionate
                care, and lasting patient relationships every day.
              </p>
            </Reveal>

            <div className="flex flex-col w-[680px] shrink-0 border-l border-[#28231F]/5 pl-12">
              <Reveal
                y={30}
                duration={0.7}
                className="relative flex flex-col pt-4 pb-16 border-b border-[#28231F]/5 group cursor-default"
              >
                <div className="absolute top-[-20px] left-[-20px] font-fraunces text-[180px] font-bold text-[#F9F4F1] leading-none z-0 transition-colors duration-700 group-hover:text-[#F2E8EB]">
                  1
                </div>
                <div className="relative z-10 pl-16">
                  <h3 className="font-poppins text-[13px] font-bold tracking-[0.2em] text-[#C187A4] uppercase mb-5 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#C187A4]" /> Our Mission
                  </h3>
                  <p className="font-fraunces text-[28px] leading-[1.4] text-[#28231F] group-hover:text-[#165ba7] transition-colors duration-500">
                    To provide ethical, evidence based, and personalized dental care using advanced
                    technology while ensuring every patient feels informed and comfortable.
                  </p>
                </div>
              </Reveal>

              <Reveal
                y={30}
                delay={0.15}
                duration={0.7}
                className="relative flex flex-col pt-16 pb-4 group cursor-default"
              >
                <div className="absolute top-0 left-[-40px] font-fraunces text-[180px] font-bold text-[#F9F4F1] leading-none z-0 transition-colors duration-700 group-hover:text-[#E0EFFB]">
                  2
                </div>
                <div className="relative z-10 pl-16">
                  <h3 className="font-poppins text-[13px] font-bold tracking-[0.2em] text-[#165ba7] uppercase mb-5 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#165ba7]" /> Our Vision
                  </h3>
                  <p className="font-fraunces text-[28px] leading-[1.4] text-[#28231F] group-hover:text-[#C187A4] transition-colors duration-500">
                    To become the most trusted destination for comprehensive dental care by
                    delivering exceptional clinical outcomes and a patient first experience.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal y={40} duration={0.8} className="mt-24 w-full flex justify-center z-10 mb-4">
          <div className="w-[1280px] h-[340px] relative overflow-hidden flex flex-col items-center justify-center text-center px-[160px] rounded-tl-[9px] rounded-tr-[200px] rounded-br-[4px] rounded-bl-[200px] shadow-lg">
            <img
              src="/images/home/bgblue.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-center text-white">
              <h2 className="font-fraunces text-[34px] font-semibold mb-5">
                Our Commitment to Every Patient
              </h2>
              <p className="font-poppins text-[15px] leading-[1.7] font-normal text-white/90 text-center mb-7 max-w-[900px]">
                At Dental ESTHÉTIQUE, every patient is treated with respect, empathy, and honesty.
                We are committed to providing transparent consultations, personalized treatment
                plans, and a comfortable experience using modern techniques and advanced technology.
                Our goal is not only to treat dental concerns but to build long term relationships
                based on trust and exceptional care.
              </p>
              <p className="font-fraunces text-[22px] font-medium tracking-wide">
                Dental Esthétique
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 w-full bg-[#F9F4F1] py-8 flex justify-center z-10">
          <div className="flex w-[1280px] flex-col gap-10">
            <Reveal y={24} duration={0.7} className="flex flex-col gap-2">
              <SectionPill>04 · GOOD TO KNOW</SectionPill>
              <h2 className="font-poppins text-[36px] font-semibold leading-none text-[#28231F]">
                Certifications and clinic standards
              </h2>
            </Reveal>

            <Stagger className="flex w-full items-center justify-between" gap={0.12}>
              {goodToKnow.map((item) => (
                <StaggerItem key={item} y={20} className="flex items-center gap-3">
                  <span className="size-2.5 shrink-0 rounded-full bg-[#165ba7]" />
                  <p className="whitespace-nowrap font-poppins text-base font-medium tracking-[0.02em] text-[#28231F]">
                    {item}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </div>
  )
}
