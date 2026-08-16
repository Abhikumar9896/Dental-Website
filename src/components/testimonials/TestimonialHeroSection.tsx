import Reveal from '../ui/Reveal'
import GoogleIcon from '../ui/GoogleIcon'

const patients = [
  {
    id: 1,
    src: '/images/patient/unnamed (10).webp',
    style: { width: '120px', height: '160px', left: 'calc(50% - 680px)', top: '240px' },
    objectPosition: 'center bottom',
  },
  {
    id: 2,
    src: '/images/patient/unnamed (11).webp',
    style: { width: '120px', height: '170px', left: 'calc(50% - 680px)', top: '430px' },
    objectPosition: 'center 40%',
  },
  {
    id: 3,
    src: '/images/patient/unnamed (12).webp',
    style: { width: '140px', height: '150px', left: 'calc(50% - 530px)', top: '140px' },
    objectPosition: 'center center',
  },
  {
    id: 4,
    src: '/images/patient/unnamed (13).webp',
    style: { width: '140px', height: '170px', left: 'calc(50% - 530px)', top: '320px' },
    objectPosition: 'center bottom',
  },
  {
    id: 5,
    src: '/images/patient/unnamed (14).webp',
    style: { width: '150px', height: '180px', left: 'calc(50% - 360px)', top: '220px' },
    objectPosition: 'center center',
  },
  {
    id: 6,
    src: '/images/patient/unnamed (15).webp',
    style: { width: '160px', height: '180px', left: 'calc(50% - 180px)', top: '160px' },
    objectPosition: 'center center',
  },
  {
    id: 7,
    src: '/images/patient/unnamed (16).webp',
    style: { width: '160px', height: '180px', left: 'calc(50% + 20px)', top: '160px' },
    objectPosition: 'left center',
  },
  {
    id: 8,
    src: '/images/patient/unnamed (17).webp',
    style: { width: '150px', height: '180px', left: 'calc(50% + 210px)', top: '220px' },
    objectPosition: 'center center',
  },
  {
    id: 9,
    src: '/images/patient/unnamed (18).webp',
    style: { width: '140px', height: '150px', left: 'calc(50% + 390px)', top: '140px' },
    objectPosition: 'center top',
  },
  {
    id: 10,
    src: '/images/patient/unnamed (19).webp',
    style: { width: '140px', height: '170px', left: 'calc(50% + 390px)', top: '320px', zIndex: 10 },
    objectPosition: 'center top',
  },
  {
    id: 11,
    src: '/images/patient/unnamed (20).webp',
    style: { width: '120px', height: '160px', left: 'calc(50% + 560px)', top: '240px' },
    objectPosition: 'center top',
  },
  {
    id: 12,
    src: '/images/patient/unnamed (21).webp',
    style: { width: '120px', height: '170px', left: 'calc(50% + 560px)', top: '430px' },
    objectPosition: 'center top',
  },
]

const backgroundBoxes = [
  { id: 1, style: { width: '80px', height: '80px', left: 'calc(50% - 560px)', top: '180px' } },
  { id: 2, style: { width: '100px', height: '100px', left: 'calc(50% - 430px)', top: '120px' } },
  { id: 3, style: { width: '110px', height: '110px', left: 'calc(50% - 280px)', top: '150px' } },
  { id: 4, style: { width: '100px', height: '100px', left: 'calc(50% - 130px)', top: '110px' } },
  { id: 5, style: { width: '100px', height: '100px', left: 'calc(50% + 30px)', top: '110px' } },
  { id: 6, style: { width: '110px', height: '110px', left: 'calc(50% + 170px)', top: '150px' } },
  { id: 7, style: { width: '100px', height: '100px', left: 'calc(50% + 330px)', top: '120px' } },
  { id: 8, style: { width: '80px', height: '80px', left: 'calc(50% + 480px)', top: '180px' } },
]

export default function TestimonialHeroSection() {
  return (
    <div className="w-full bg-[#FAF8F9] pt-8 pb-16 px-4 relative flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto h-[420px] mb-0 hidden lg:block">
        {backgroundBoxes.map((box) => (
          <div
            key={`box-${box.id}`}
            className="absolute rounded-2xl bg-[#E5E7EB]/40 -z-20"
            style={box.style}
          />
        ))}

        {patients.map((p) => (
          <div
            key={p.id}
            className="absolute hover:-translate-y-2 transition-transform duration-300"
            style={p.style}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-white/50">
              <img
                src={p.src}
                alt="Patient"
                style={{ objectPosition: p.objectPosition }}
                className="w-full h-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              />
            </div>
          </div>
        ))}
      </div>

      <Reveal
        y={30}
        duration={0.8}
        className="flex flex-col items-center text-center relative z-10 max-w-[800px] mx-auto -mt-8"
      >
        <span className="bg-[#C187A4]/10 text-[#C187A4] font-semibold text-[13px] px-4 py-1.5 rounded-full mb-6">
          Patient Testimonials
        </span>

        <h1 className="font-poppins text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-tight mb-3">
          <span className="text-[#111827]">Trusted by hundreds of patients</span>
          <br />
          <span className="text-[#9CA3AF]">across Noida & beyond</span>
        </h1>

        <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-relaxed max-w-[500px] mb-6">
          Learn why patients trust Dental Esthétique for safe, comfortable, and long-lasting dental
          care.
        </p>

        <a
          href="https://www.google.com/maps/place/Dental+Esthetique/@28.5904931,77.3348886,15z/data=!4m18!1m9!3m8!1s0x390ce5081fc59025:0x8c9bf39b230a1480!2sDental+Esthetique!8m2!3d28.5904931!4d77.3451883!9m1!1b1!16s%2Fg%2F11c1rt420p!3m7!1s0x390ce5081fc59025:0x8c9bf39b230a1480!8m2!3d28.5904931!4d77.3451883!9m1!1b1!16s%2Fg%2F11c1rt420p?hl=en&entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold text-[15px] hover:bg-gray-800 transition-colors flex items-center gap-3 shadow-md hover:shadow-xl hover:-translate-y-1 transform duration-300"
        >
          <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5">
            <GoogleIcon size={18} />
          </span>
          Read Patient Stories
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </Reveal>
    </div>
  )
}
