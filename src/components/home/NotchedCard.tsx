import type { CSSProperties, ReactNode } from 'react'
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

function ArrowBtn({
  className = '',
  height = 46,
  width = 54,
}: {
  className?: string
  height?: number
  width?: number
}) {
  return (
    <Link
      to="/services"
      className={`flex shrink-0 items-center justify-center rounded-[10px] bg-[#0A5BA8] ${className}`}
      style={{
        width,
        height,
        padding: height <= 39 ? '7px 12px' : '11px 15px',
      }}
      aria-label="View treatment"
    >
      <img
        src={`${IMG}/arrow-up.svg`}
        alt=""
        width={height <= 36 ? 18 : 24}
        height={height <= 36 ? 18 : 24}
      />
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

  const mobileBg: CSSProperties =
    imageSrc != null
      ? {
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {
          background:
            fill === 'gum-gradient'
              ? 'linear-gradient(135deg, #F2F8FF 1%, #C6E2FF 100%)'
              : fill || '#fff',
          border: bordered ? '1px solid rgba(0,0,0,0.22)' : undefined,
        }

  return (
    <div
      className={`relative w-full h-auto overflow-hidden rounded-[20px] lg:absolute lg:overflow-visible lg:rounded-none h-treat-notch ${className}`}
      style={
        {
          '--notch-w': `${width}px`,
          '--notch-h': `${height}px`,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 lg:hidden rounded-[20px]" style={mobileBg} />

      <svg
        className="pointer-events-none absolute inset-0 hidden lg:block"
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
              <stop offset="1%" stopColor="#F2F8FF" />
              <stop offset="100%" stopColor="#C6E2FF" />
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

      <div className="relative z-10 p-5 pb-14 lg:p-0 h-treat-notch-body">{children}</div>

      <ArrowBtn className="flex lg:hidden absolute right-3 bottom-3 z-30" height={36} width={40} />

      <ArrowBtn
        className={
          cut === 'top-right'
            ? 'hidden lg:flex absolute right-0 top-0 z-30'
            : 'hidden lg:flex absolute bottom-0 right-0 z-30'
        }
        height={arrowHeight}
      />
    </div>
  )
}
