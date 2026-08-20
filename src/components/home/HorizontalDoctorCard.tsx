import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BOOK_APPOINTMENT_TO } from '../ui/HeroButton'

const EASE = [0.22, 1, 0.36, 1] as const

export default function HorizontalDoctorCard({
  id,
  name,
  role,
  description,
  imgSrc,
  colorScheme = 'blue',
  imagePosition = 'left',
  imgObjectPosition = 'object-center',
  imgClassName = '',
  bulletPoints = [],
  className = '',
}: {
  id?: string
  name: string
  role: string
  description: string
  imgSrc?: string
  colorScheme?: 'blue' | 'pink'
  imagePosition?: 'left' | 'right'
  imgObjectPosition?: string
  imgClassName?: string
  bulletPoints?: readonly string[]
  className?: string
}) {
  const imageSection = (
    <div className="relative w-full lg:w-[500px] h-[220px] sm:h-[240px] lg:min-h-[320px] lg:h-auto bg-[#f4f4f4] overflow-hidden shrink-0 group h-doc-img">
      <img
        src={imgSrc || '/images/home/doctor.webp'}
        srcSet={imgSrc ? `${imgSrc.replace('/images/home/', '/images/home/mobile/')} 480w, ${imgSrc} 862w` : undefined}
        sizes="100vw"
        alt={name}
        loading="lazy"
        decoding="async"
        width={500}
        height={320}
        className={`absolute inset-0 w-full h-full object-cover ${imgObjectPosition} ${imgClassName} transition-transform duration-700 lg:group-hover:scale-105`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent lg:from-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

      <div className="absolute bottom-3 left-3 lg:bottom-[20px] lg:left-[20px] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 lg:translate-y-4 group-hover:translate-y-0 z-20 h-doc-btn">
        <Link
          to={`/doctors${id ? `#${id}` : ''}`}
          aria-label={`Read more about ${name}`}
          className="flex items-center gap-1.5 bg-gradient-to-r from-[#B07399] to-[#91587a] text-white px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-md lg:rounded-sm font-poppins text-[11px] lg:text-[14px] font-medium shadow-md lg:shadow-lg hover:shadow-xl transition-shadow"
        >
          Read More
          <span className="sr-only"> about {name}</span>
          <svg
            className="w-3 h-3 lg:w-4 lg:h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>


      <div className="hidden lg:block absolute bottom-0 right-0 bg-[#333] text-white px-3 py-1 text-[12px] font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {name}
      </div>
    </div>
  )

  const contentSection = (
    <div className="flex flex-col p-4 lg:p-[28px] flex-grow justify-center bg-white lg:bg-[#F4F4F4] h-doc-c">
      <h3 className="font-poppins text-[20px] lg:text-[32px] font-semibold text-[#165ba7] leading-tight h-doc-n">
        {name}
      </h3>
      <span className="mt-1.5 lg:mt-2 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#A66689]/10 px-2.5 py-0.5 w-max">
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A66689"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-poppins text-[10px] font-medium text-[#8F5675]">
          18+ Years of Excellence
        </span>
      </span>
      <div className="mt-2">
        <p className="font-poppins text-[13px] lg:text-[16px] font-medium text-[#333]">{role}</p>
      </div>

      <div className="w-[36px] lg:w-[50px] h-[2px] bg-[#D35B8F] mt-2 mb-2.5 lg:mt-3 lg:mb-3" />

      <p className="font-poppins text-[12.5px] lg:text-[15px] leading-[1.55] lg:leading-[1.6] text-gray-500 mb-3 lg:mb-4 max-w-[700px] break-words">
        {description}
      </p>

      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="mb-3 lg:mb-5 space-y-1.5 lg:space-y-1.5">
          {bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 font-poppins text-[12px] lg:text-[14px] text-gray-600 leading-snug"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colorScheme === 'blue' ? 'bg-[#165ba7]' : 'bg-[#D35B8F]'}`}
              />
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-col items-start pt-1">
        <Link
          to={BOOK_APPOINTMENT_TO}
          className="flex items-center gap-1.5 text-[#C1497D] hover:text-[#a86a8a] font-poppins text-[13px] font-bold cursor-pointer group/btn transition-colors"
        >
          Book Appointment
          <svg
            className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? -80 : 80, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full lg:w-[1250px] overflow-hidden rounded-2xl lg:rounded-[18px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300 h-doc ${className}`}
    >
      {imageSection}
      {contentSection}
    </motion.div>
  )
}
