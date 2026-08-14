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
    <div className="relative w-full h-[720px] bg-[#F9F4F1] flex justify-center overflow-hidden shrink-0">
      <div className="relative w-[1440px] h-full">
        <HeroToothCollage />
        <div
          className="absolute left-[80px] top-[240px] flex w-[634px] flex-col z-20"
          style={{ gap: 40 }}
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
    </div>
  )
}
