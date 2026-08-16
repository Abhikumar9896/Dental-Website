import { Link } from 'react-router-dom'

interface HeroButtonProps {
  to?: string
  href?: string
  text?: string
  className?: string
  variant?: 'solid' | 'outline'
}

export default function HeroButton({
  to,
  href,
  text = 'Book an Appointment',
  className = '',
  variant = 'solid',
}: HeroButtonProps) {
  const isOutline = variant === 'outline'

  const baseClasses =
    'group flex h-[48px] w-max items-center justify-center gap-2 rounded-md px-6 font-poppins text-[14px] transition-all'
  const solidClasses = 'bg-[#A66689] font-medium text-white hover:bg-[#8F5675] shadow-sm'
  const outlineClasses =
    'border-[1.5px] border-[#C187A4] bg-transparent font-semibold text-[#C187A4] hover:bg-[#C187A4]/5'

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
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to || '/'} className={combinedClasses}>
      {content}
    </Link>
  )
}
