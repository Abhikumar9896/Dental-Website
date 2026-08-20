import type { ReactNode } from 'react'
import SectionPill from './SectionPill'

export default function SectionHeading({
  pill,
  title,
  description,
  pillColor,
  pillVariant,
  align = 'left',
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: {
  pill: ReactNode
  title: ReactNode
  description?: ReactNode
  pillColor?: 'pink' | 'blue'
  pillVariant?: 'light' | 'solid'
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start'
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <SectionPill color={pillColor} variant={pillVariant}>
        {pill}
      </SectionPill>
      <h2 className={`mt-4 text-[36px] font-bold leading-tight text-[#28231F] ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-[600px] font-poppins text-[15px] leading-[1.6] text-[#767676] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
