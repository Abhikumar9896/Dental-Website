import { type ReactNode } from 'react'
import HeroToothCollage from '../HeroToothCollage'

interface PageHeroProps {
  tagline: string
  title: string
  description?: string
  children?: ReactNode
  taglineColor?: string
  titleColor?: string
  titleFont?: string
}

export default function PageHero({ 
  tagline, 
  title, 
  description, 
  children,
  taglineColor = "text-[#C187A4]",
  titleColor = "text-[#28231F]",
  titleFont = "font-[family-name:var(--font-poppins)]"
}: PageHeroProps) {
  return (
    <div className="absolute left-0 top-0 h-[800px] w-[1440px] overflow-visible bg-[#F9F4F1]">
      <HeroToothCollage />
      <div
        className="absolute left-[80px] top-[200px] flex w-[634px] flex-col"
        style={{ gap: 40, zIndex: 20 }}
      >
        <div className="flex w-[634px] flex-col" style={{ gap: 8 }}>
          <p className={`font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.04em] ${taglineColor}`}>
            {tagline}
          </p>
          <h1 className={`w-[634px] ${titleFont} text-[54px] font-semibold leading-tight ${titleColor}`}>
            {title}
          </h1>
          {description && (
            <p className="mt-2 w-[493px] font-[family-name:var(--font-poppins)] text-base font-normal leading-[1.5] tracking-[0.03em] text-[#767676]">
              {description}
            </p>
          )}
        </div>
        {children && (
          <div className="flex h-12 w-[634px] items-center" style={{ gap: 12 }}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
