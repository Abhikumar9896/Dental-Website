import type { ReactNode } from 'react'

type PillColor = 'pink' | 'blue'
type PillVariant = 'light' | 'solid'
type PillSize = 'sm' | 'md' | 'lg'

const colorMap: Record<PillColor, Record<PillVariant, string>> = {
  pink: {
    light: 'bg-[#D35B8F]/10 text-[#D35B8F]',
    solid: 'bg-[#D35B8F] text-white',
  },
  blue: {
    light: 'bg-[#165ba7]/10 text-[#165ba7]',
    solid: 'bg-[#165ba7] text-white',
  },
}

const sizeMap: Record<PillSize, string> = {
  sm: 'text-[11px] px-4 py-1.5',
  md: 'text-[12px] px-4 py-1.5',
  lg: 'text-[13px] px-4 py-2',
}

export default function SectionPill({
  children,
  color = 'pink',
  variant = 'light',
  size = 'sm',
  className = '',
}: {
  children: ReactNode
  color?: PillColor
  variant?: PillVariant
  size?: PillSize
  className?: string
}) {
  return (
    <span
      className={`font-poppins inline-block w-max rounded-full font-bold uppercase tracking-[0.1em] ${sizeMap[size]} ${colorMap[color][variant]} ${className}`}
    >
      {children}
    </span>
  )
}
