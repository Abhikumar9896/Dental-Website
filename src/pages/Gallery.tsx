import { Link } from 'react-router-dom'
import { BadgeCheck, Star, Award } from 'lucide-react'
import HeroButton, { BOOK_APPOINTMENT_TO } from '../components/ui/HeroButton'
import SectionPill from '../components/ui/SectionPill'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal, { Stagger, StaggerItem, CountUp } from '../components/ui/Reveal'

function HeroImageCollage({ images }: { images: string[] }) {
  const col1Base = images.slice(0, 6)
  const col2Base = images.slice(6, 12).reverse()
  const col3Base = images.slice(12, 17)
  const col4Base = images.slice(17, 22).reverse()

  const col1Images = [...col1Base, ...col1Base]
  const col2Images = [...col2Base, ...col2Base]
  const col3Images = [...col3Base, ...col3Base]
  const col4Images = [...col4Base, ...col4Base]

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 50s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 50s linear infinite;
        }
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="absolute right-[20px] top-[120px] w-[640px] h-[680px] overflow-hidden flex gap-4 marquee-container justify-center"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)',
        }}
      >
        {[
          { images: col1Images, dir: 'animate-scroll-up', pad: 'pt-8' },
          { images: col2Images, dir: 'animate-scroll-down', pad: '' },
          { images: col3Images, dir: 'animate-scroll-up', pad: 'pt-16' },
          { images: col4Images, dir: 'animate-scroll-down', pad: 'pt-8' },
        ].map((col, colIdx) => (
          <div key={colIdx} className={`flex flex-col gap-4 w-[140px] ${col.dir} ${col.pad}`}>
            {col.images.map((src, idx) => (
              <div
                key={`col${colIdx + 1}-${idx}`}
                className="w-full h-auto shrink-0 rounded-[20px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-[3px] border-white"
              >
                <img src={src} alt="" className="w-full h-auto object-cover block" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

const treatmentImages = [
  '/images/gallery/image.webp',
  '/images/gallery/image copy.webp',
  '/images/gallery/image copy 2.webp',
  '/images/gallery/image copy 3.webp',
]

const patientImages = [
  '/images/patient/unnamed (10).webp',
  '/images/patient/unnamed (11).webp',
  '/images/patient/unnamed (12).webp',
  '/images/patient/unnamed (13).webp',
  '/images/patient/unnamed (14).webp',
  '/images/patient/unnamed (15).webp',
  '/images/patient/unnamed (16).webp',
  '/images/patient/unnamed (17).webp',
  '/images/patient/unnamed (18).webp',
  '/images/patient/unnamed (19).webp',
  '/images/patient/unnamed (20).webp',
  '/images/patient/unnamed (21).webp',
  '/images/patient/unnamed (22).webp',
  '/images/patient/unnamed (23).webp',
  '/images/patient/unnamed (3).webp',
  '/images/patient/unnamed (4).webp',
  '/images/patient/unnamed (5).webp',
  '/images/patient/unnamed (6).webp',
  '/images/patient/unnamed (7).webp',
  '/images/patient/unnamed (8).webp',
  '/images/patient/unnamed (9).webp',
  '/images/patient/unnamed.webp',
]

export default function Gallery() {
  return (
    <div className="w-full bg-[#FAF8F9] font-poppins overflow-x-hidden min-h-screen">
      <div className="relative w-full h-[800px] bg-white flex justify-center overflow-hidden shrink-0">
        <div className="relative w-[1440px] h-full z-10">
          <Stagger
            className="absolute left-[80px] top-1/2 -translate-y-[35%] flex w-[634px] flex-col z-20"
            gap={0.15}
          >
            <StaggerItem y={30}>
              <div className="flex flex-col gap-4">
                <div>
                  <SectionPill size="lg">Transformation</SectionPill>
                </div>
                <h1 className="w-[634px] font-fraunces text-[62px] font-semibold leading-[1.06] tracking-[0.01em] text-[#28231F]">
                  Our Smile Gallery
                </h1>
                <p className="mt-2 w-[493px] font-poppins text-[16px] font-normal leading-[1.7] text-[#767676]">
                  See the life-changing results of our world-class dental treatments. From subtle
                  enhancements to complete smile makeovers, every transformation is planned with
                  precision, executed with care, and finished to perfection. Browse our gallery to
                  witness the artistry behind each confident smile, and imagine what yours could
                  look like.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem y={30} className="mt-6">
              <div className="flex w-[493px] items-center gap-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="font-poppins text-[26px] font-bold leading-none text-[#165ba7]">
                      <CountUp value={500} suffix="+" />
                    </p>
                    <BadgeCheck className="w-[22px] h-[22px] text-[#165ba7] -mt-1" />
                  </div>
                  <p className="mt-1.5 font-poppins text-[12px] font-medium uppercase tracking-[0.08em] text-[#767676]">
                    Smiles Transformed
                  </p>
                </div>
                <div className="h-[38px] w-px bg-[#E5E7EB]" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="font-poppins text-[26px] font-bold leading-none text-[#165ba7]">
                      4.8/5
                    </p>
                    <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B] -mt-1" />
                  </div>
                  <p className="mt-1.5 font-poppins text-[12px] font-medium uppercase tracking-[0.08em] text-[#767676]">
                    Google Rating
                  </p>
                </div>
                <div className="h-[38px] w-px bg-[#E5E7EB]" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-poppins text-[28px] font-bold leading-none text-[#165ba7]">
                      <CountUp value={15} suffix="+" />
                    </span>
                    <Award className="w-[22px] h-[22px] text-[#165ba7] -mt-1" />
                  </div>
                  <span className="font-poppins text-[10px] font-semibold tracking-widest text-[#767676] uppercase">
                    Years of
                    <br />
                    Excellence
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem y={30} className="mt-12">
              <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
            </StaggerItem>
          </Stagger>

          <HeroImageCollage images={patientImages} />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center pt-16 pb-0">
        <section className="w-full max-w-[1200px] px-6 flex flex-col items-center">
          <SectionHeading
            pill="Real Results"
            pillColor="blue"
            align="center"
            title="Before & After Treatments"
            titleClassName="font-poppins text-[42px] font-semibold"
            description="Explore the remarkable difference our care makes for your smile."
            className="mb-16"
          />

          <Stagger
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[1300px]"
            gap={0.1}
          >
            {treatmentImages.map((src, idx) => (
              <StaggerItem
                key={idx}
                y={26}
                className="relative group overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 p-2"
              >
                <div className="overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={src}
                    alt={`Treatment result ${idx + 1}`}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <div className="w-full max-w-[1200px] h-[1px] bg-gray-200 my-8" />

        <section className="w-full max-w-[1300px] px-6 mb-8 flex flex-col items-center">
          <SectionHeading
            pill="Happy Faces"
            align="center"
            title="Our Patient Family"
            titleClassName="font-poppins text-[42px] font-semibold"
            description="Join thousands of happy patients across Noida who trust Dental Esthétique with their smiles. We believe every successful treatment is a life changed, and our greatest reward is seeing our patients leave with renewed confidence."
            descriptionClassName="max-w-[800px] text-[16px]"
            className="mb-16"
          />

          <Stagger
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[1300px] mx-auto"
            gap={0.04}
          >
            {patientImages.map((src, imgIdx) => (
              <StaggerItem
                key={imgIdx}
                y={24}
                className="relative group overflow-hidden rounded-2xl bg-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] cursor-pointer border-[4px] border-white transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 aspect-square"
              >
                <img
                  src={src}
                  alt={`Happy patient ${imgIdx + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </StaggerItem>
            ))}

            <StaggerItem
              y={24}
              className="relative overflow-hidden rounded-2xl bg-[#165ba7] p-6 flex flex-col justify-center items-center text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-[4px] border-white aspect-square group transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-poppins text-2xl font-semibold mb-2">
                Your Smile Is Next!
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Join thousands of our confident patients.
              </p>
            </StaggerItem>

            <StaggerItem
              y={24}
              className="relative overflow-hidden rounded-2xl bg-[#C187A4] p-6 flex flex-col justify-center items-center text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-[4px] border-white aspect-square group transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-white font-poppins text-5xl font-semibold mb-2">500+</h3>
              <p className="text-white/90 text-sm font-poppins uppercase tracking-wider font-semibold">
                Transformations
              </p>
              <p className="text-white/70 text-xs mt-2">completed with excellence.</p>
            </StaggerItem>
          </Stagger>

          <Reveal y={24} duration={0.6} className="mt-10 text-center">
            <Link
              to="/testimonials#patient-stories"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#165ba7] px-8 font-poppins text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(22,91,167,0.3)] transition-all hover:bg-[#114076] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(22,91,167,0.4)]"
            >
              Patient Testimonials
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
