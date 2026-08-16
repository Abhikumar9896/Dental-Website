import { motion, useReducedMotion, useInView, animate } from 'framer-motion'
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

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
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: blur ? 'blur(8px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
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
  const reduce = useReducedMotion()
  if (reduce)
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: delay + Math.min(index * gap, 0.8), ease: EASE }}
    >
      {children}
    </motion.div>
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
    <motion.div
      className={className}
      animate={{ y: [-amplitude / 2, amplitude / 2, -amplitude / 2] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
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
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
