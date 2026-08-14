import { type ReactNode } from 'react'
import HeroToothCollage from '../HeroToothCollage'

interface PageHeroProps {
  tagline: string
  title: string
  description?: string
  children?: ReactNode
}

export default function PageHero({ tagline, title, description, children }: PageHeroProps) {
  return (
    <div className="absolute left-0 top-0 h-[649px] w-[1440px] overflow-visible bg-[#F9F4F1]">
      <HeroToothCollage />
      <div
        className="absolute left-[80px] top-[197px] flex w-[634px] flex-col"
        style={{ gap: 40, zIndex: 20 }}
      >
        <div className="flex w-[634px] flex-col" style={{ gap: 8 }}>
          <p className="font-[family-name:var(--font-poppins)] text-sm font-medium tracking-[0.04em] text-[#C187A4]">
            {tagline}
          </p>
          <h1 className="w-[634px] font-[family-name:var(--font-fraunces)] text-[54px] font-semibold leading-none text-[#28231F]">
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
