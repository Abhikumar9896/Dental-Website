import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  duration?: number
  once?: boolean
  blur?: boolean
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  duration = 0.7,
  once = true,
  blur = false,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return
    setHidden(true)
    if (typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false)
          if (once) io.disconnect()
        } else if (!once) {
          setHidden(true)
        }
      },
      { rootMargin: '-60px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  const style: CSSProperties = {
    opacity: hidden ? 0 : 1,
    transform: hidden ? `translate3d(${x}px, ${y}px, 0)` : 'translate3d(0, 0, 0)',
    filter: blur && hidden ? 'blur(8px)' : 'none',
    transition: `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s, filter ${duration}s ${EASE} ${delay}s`,
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

export function Stagger({
  children,
  delay = 0,
  gap = 0.12,
  className = '',
}: {
  children: ReactNode
  delay?: number
  gap?: number
  className?: string
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) =>
        isValidElement<{ index?: number; gap?: number; delay?: number }>(child)
          ? cloneElement(child, {
              index: i,
              gap,
              delay: i === 0 ? delay : 0,
            })
          : child,
      )}
    </div>
  )
}

export function StaggerItem({
  children,
  y = 36,
  x = 0,
  className = '',
  style,
  index = 0,
  gap = 0.12,
  delay = 0,
}: {
  children: ReactNode
  y?: number
  x?: number
  className?: string
  style?: React.CSSProperties
  index?: number
  gap?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return
    setHidden(true)
    if (typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false)
          io.disconnect()
        }
      },
      { rootMargin: '-40px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const d = delay + Math.min(index * gap, 0.8)
  const merged: CSSProperties = {
    ...style,
    opacity: hidden ? 0 : 1,
    transform: hidden ? `translate3d(${x}px, ${y}px, 0)` : 'translate3d(0, 0, 0)',
    transition: `opacity 0.6s ${EASE} ${d}s, transform 0.6s ${EASE} ${d}s`,
  }

  return (
    <div ref={ref} className={className} style={merged}>
      {children}
    </div>
  )
}

export function Float({
  children,
  amplitude = 12,
  duration = 4,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  amplitude?: number
  duration?: number
  delay?: number
  className?: string
}) {
  return (
    <div
      className={className}
      style={
        {
          animation: `h-float ${duration}s ease-in-out ${delay}s infinite`,
          '--float-a': `${amplitude}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}

export function CountUp({
  value,
  suffix = '',
  duration = 1.6,
  className = '',
}: {
  value: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(Math.round(value).toString())
      return
    }
    const el = ref.current
    if (!el) return
    let raf = 0
    const run = () => {
      if (started.current) return
      started.current = true
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - t0) / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(Math.round(value * eased).toString())
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          run()
        }
      },
      { rootMargin: '-40px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
