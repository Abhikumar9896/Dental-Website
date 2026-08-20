import { Link } from 'react-router-dom'
import {
  FaTooth,
  FaTeeth,
  FaTeethOpen,
  FaCrown,
  FaShieldHalved,
  FaWandMagicSparkles,
} from 'react-icons/fa6'
import { GiScalpel, GiScrew } from 'react-icons/gi'
import Reveal, { Stagger, StaggerItem } from '../ui/Reveal'

const iconClass = 'h-svc-ico w-[26px] h-[26px] lg:w-[30px] lg:h-[30px] shrink-0 opacity-90'

const services = [
  {
    title: 'General Dentistry',
    description: 'Check-ups, cleanings and everyday dental care for the whole family.',
    iconColor: '#D35B8F',
    icon: <FaTooth className={iconClass} aria-hidden />,
  },
  {
    title: 'Implants',
    description: 'Permanent tooth replacement with a natural look and feel.',
    iconColor: '#165ba7',
    icon: <GiScrew className={iconClass} aria-hidden />,
  },
  {
    title: 'Dental Surgery',
    description: 'Safe extractions and surgical procedures with careful aftercare.',
    iconColor: '#D35B8F',
    icon: <GiScalpel className={iconClass} aria-hidden />,
  },
  {
    title: 'Alignment',
    description: 'Braces and aligners that straighten your smile discreetly.',
    iconColor: '#165ba7',
    icon: <FaTeeth className={iconClass} aria-hidden />,
  },
  {
    title: 'Whitening',
    description: 'Professional whitening for a brighter, more confident smile.',
    iconColor: '#165ba7',
    icon: <FaWandMagicSparkles className={iconClass} aria-hidden />,
  },
  {
    title: 'Teeth Braces',
    description: 'Traditional and modern braces for lasting alignment.',
    iconColor: '#D35B8F',
    icon: <FaTeethOpen className={iconClass} aria-hidden />,
  },
  {
    title: 'Prosthesis',
    description: 'Crowns, bridges and dentures that restore function and aesthetics.',
    iconColor: '#165ba7',
    icon: <FaCrown className={iconClass} aria-hidden />,
  },
  {
    title: 'Teeth Protection',
    description: 'Night guards and preventive care to protect your teeth.',
    iconColor: '#D35B8F',
    icon: <FaShieldHalved className={iconClass} aria-hidden />,
  },
]

export default function ServicesGridSection() {
  return (
    <div className="relative left-0 top-0 w-full flex flex-col items-center bg-[#EDEDED] pt-10 pb-10 lg:absolute lg:top-[6351px] lg:pt-16 lg:pb-0 h-svc">
      <div className="mb-6 w-full max-w-full px-5 lg:hidden h-svc-head">
        <h2 className="font-poppins text-[24px] font-semibold text-[#28231F]">Our Services</h2>
        <p className="mt-1 font-poppins text-[13px] text-[#6b6b6b] leading-relaxed">
          Comprehensive dental care for every smile need.
        </p>
      </div>

      <Stagger
        className="w-full max-w-full grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 px-5 lg:w-[1320px] lg:gap-x-10 lg:gap-y-14 lg:px-0 h-svc-grid"
        gap={0.08}
      >
        {services.map((service, index) => (
          <StaggerItem
            key={index}
            y={28}
            className="flex flex-col gap-2.5 lg:gap-4 group h-svc-item"
          >
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 items-start">
              <div
                className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ color: service.iconColor }}
              >
                {service.icon}
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-poppins text-[14px] lg:text-[17px] font-semibold text-[#28231F] leading-snug">
                  {service.title}
                </h3>
                <p className="font-poppins text-[#777] text-[12px] lg:text-[13px] leading-[1.5] lg:leading-[1.6]">
                  {service.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal y={30} className="mt-8 lg:mt-16 flex justify-center lg:mb-[-27px] px-5">
        <Link
          to="/services"
          className="inline-flex h-[40px] lg:h-[54px] items-center justify-center rounded-[10px] bg-[#D35B8F] px-4 lg:px-8 font-poppins font-medium text-white hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(193,135,164,0.4)] text-[13px] lg:text-base text-center h-svc-btn"
        >
          View Dental Esthetique Solutions
        </Link>
      </Reveal>
    </div>
  )
}
