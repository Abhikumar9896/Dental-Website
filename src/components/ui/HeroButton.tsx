import { Link } from 'react-router-dom'
import type { To } from 'react-router-dom'
import { scrollToId } from '../../utils/scroll'

interface HeroButtonProps {
  to?: To
  href?: string
  text?: string
  className?: string
  variant?: 'solid' | 'outline'
}

/** Home page Book Your Appointment form */
export const BOOK_APPOINTMENT_TO: To = { pathname: '/', hash: 'book-appointment' }

export default function HeroButton({
  to = BOOK_APPOINTMENT_TO,
  href,
  text = 'Book an Appointment',
  className = '',
  variant = 'solid',
}: HeroButtonProps) {
  const isOutline = variant === 'outline'

  const baseClasses =
    'group flex h-[36px] md:h-[38px] lg:h-[48px] w-max items-center justify-center gap-1.5 md:gap-2 rounded-md px-3.5 md:px-4 lg:px-6 font-poppins text-[11px] md:text-[12px] lg:text-[14px] transition-all'
  const solidClasses = 'bg-[#A66689] font-medium text-white hover:bg-[#8F5675] shadow-sm'
  const outlineClasses =
    'border-[1.5px] border-[#D35B8F] bg-transparent font-semibold text-[#D35B8F] hover:bg-[#D35B8F]/5'

  const combinedClasses = `${baseClasses} ${isOutline ? outlineClasses : solidClasses} ${className}`

  const content = (
    <>
      {text}
      {!isOutline && (
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </>
  )

  if (href) {
    const isHash = href.startsWith('#')
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={
          isHash
            ? (e) => {
                e.preventDefault()
                scrollToId(href)
              }
            : undefined
        }
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={combinedClasses}>
      {content}
    </Link>
  )
}
