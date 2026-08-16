import { type ReactNode } from 'react'
import HeroToothCollage from '../HeroToothCollage'
import { Stagger, StaggerItem } from './Reveal'

interface PageHeroProps {
  tagline: string
  title: string
  description?: string
  children?: ReactNode
  taglineColor?: string
  taglineBgColor?: string
  titleColor?: string
  titleFont?: string
  height?: string
  backgroundImage?: string
  bgPosition?: string
  hideCollage?: boolean
}

export default function PageHero({
  tagline,
  title,
  description,
  children,
  taglineColor = 'text-[#C187A4]',
  taglineBgColor = 'bg-[#C187A4]/10',
  titleColor = 'text-[#28231F]',
  titleFont = 'font-poppins',
  height = 'h-[720px]',
  backgroundImage,
  bgPosition = 'object-cover',
  hideCollage = false,
}: PageHeroProps) {
  return (
    <div
      className={`relative w-full ${height} ${backgroundImage ? 'bg-white' : 'bg-[#F9F4F1]'} flex justify-center overflow-hidden shrink-0`}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 w-full h-full z-0 ${bgPosition}`}
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/95 via-white/70 to-transparent z-0" />
        </>
      )}
      <div className="relative w-[1440px] h-full z-10">
        {!hideCollage && <HeroToothCollage />}
        <Stagger
          className="absolute left-[80px] top-1/2 -translate-y-[35%] flex w-[634px] flex-col z-20 gap-[40px]"
          gap={0.15}
        >
          <StaggerItem y={30} className="flex w-[634px] flex-col gap-[8px]">
            <p
              className={`font-poppins text-[11px] font-bold tracking-[0.1em] px-4 py-1.5 rounded-full w-max uppercase ${taglineColor} ${taglineBgColor}`}
            >
              {tagline}
            </p>
            <h1
              className={`w-[634px] ${titleFont} text-[54px] font-semibold leading-tight ${titleColor}`}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-2 w-[493px] font-poppins text-base font-normal leading-[1.5] tracking-[0.03em] text-[#767676]">
                {description}
              </p>
            )}
          </StaggerItem>
          {children && (
            <StaggerItem y={30} className="flex h-12 w-[634px] items-center gap-[12px]">
              {children}
            </StaggerItem>
          )}
        </Stagger>
      </div>
    </div>
  )
}
