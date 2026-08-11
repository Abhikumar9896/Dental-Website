import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const IMG = '/images/home'

function notchedPath(
  w: number,
  h: number,
  cut: 'top-right' | 'bottom-right',
  nw: number,
  nh: number,
  r: number,
) {
  const ir = Math.min(10, Math.floor(Math.min(nw, nh) / 3))

  if (cut === 'top-right') {
    return [
      `M ${r} 0`,
      `H ${w - nw - ir}`,
      `Q ${w - nw} 0 ${w - nw} ${ir}`,
      `V ${nh - ir}`,
      `Q ${w - nw} ${nh} ${w - nw + ir} ${nh}`,
      `H ${w - ir}`,
      `Q ${w} ${nh} ${w} ${nh + ir}`,
      `V ${h - r}`,
      `Q ${w} ${h} ${w - r} ${h}`,
      `H ${r}`,
      `Q 0 ${h} 0 ${h - r}`,
      `V ${r}`,
      `Q 0 0 ${r} 0`,
      'Z',
    ].join(' ')
  }

  return [
    `M ${r} 0`,
    `H ${w - r}`,
    `Q ${w} 0 ${w} ${r}`,
    `V ${h - nh - ir}`,
    `Q ${w} ${h - nh} ${w - ir} ${h - nh}`,
    `H ${w - nw + ir}`,
    `Q ${w - nw} ${h - nh} ${w - nw} ${h - nh + ir}`,
    `V ${h - ir}`,
    `Q ${w - nw} ${h} ${w - nw - ir} ${h}`,
    `H ${r}`,
    `Q 0 ${h} 0 ${h - r}`,
    `V ${r}`,
    `Q 0 0 ${r} 0`,
    'Z',
  ].join(' ')
}

function ArrowBtn({ className = '', height = 46 }: { className?: string; height?: number }) {
  return (
    <Link
      to="/services"
      className={`flex w-[54px] shrink-0 items-center justify-center rounded-[10px] bg-[#68A391] ${className}`}
      style={{
        height,
        padding: height === 39 ? '7px 15px' : '11px 15px',
      }}
      aria-label="View treatment"
    >
      <img src={`${IMG}/arrow-up.svg`} alt="" width={24} height={24} />
    </Link>
  )
}

export function NotchedCard({
  className = '',
  width,
  height,
  cut,
  arrowHeight,
  bordered = false,
  radius = 16,
  fill,
  gradientId,
  imageSrc,
  children,
}: {
  className?: string
  width: number
  height: number
  cut: 'top-right' | 'bottom-right'
  arrowHeight: number
  bordered?: boolean
  radius?: number
  fill?: string
  gradientId?: string
  imageSrc?: string
  children?: ReactNode
}) {
  const AW = 54
  const GAP = 8
  const nw = AW + GAP
  const nh = arrowHeight + GAP
  const d = notchedPath(width, height, cut, nw, nh, radius)
  const patternId = `notch-img-${width}-${height}-${cut}`
  const gradId = gradientId || `notch-grad-${width}-${height}`

  return (
    <div className={`absolute ${className}`} style={{ width, height }}>
      <svg
        className="pointer-events-none absolute inset-0"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden
      >
        <defs>
          {imageSrc ? (
            <pattern id={patternId} patternUnits="userSpaceOnUse" width={width} height={height}>
              <image
                href={imageSrc}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          ) : null}
          {fill === 'gum-gradient' ? (
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="1%" stopColor="#E3F3EE" />
              <stop offset="100%" stopColor="#A9DFCE" />
            </linearGradient>
          ) : null}
        </defs>
        <path
          d={d}
          fill={
            imageSrc
              ? `url(#${patternId})`
              : fill === 'gum-gradient'
                ? `url(#${gradId})`
                : fill || '#fff'
          }
          stroke={bordered ? 'rgba(0,0,0,0.22)' : 'none'}
          strokeWidth={bordered ? 1 : 0}
          strokeLinejoin="round"
        />
      </svg>
      {children}
      <ArrowBtn
        className={
          cut === 'top-right' ? 'absolute right-0 top-0 z-30' : 'absolute bottom-0 right-0 z-30'
        }
        height={arrowHeight}
      />
    </div>
  )
}
