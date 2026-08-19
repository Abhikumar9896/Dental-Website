/** Shared in-page scroll: fixed short duration so every jump feels the same and fast. */
const SCROLL_DURATION_MS = 320
const DEFAULT_OFFSET = 100

let activeFrame = 0

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function smoothScrollTo(top: number, duration = SCROLL_DURATION_MS): void {
  if (activeFrame) cancelAnimationFrame(activeFrame)

  const start = window.scrollY
  const distance = top - start
  if (Math.abs(distance) < 2) {
    window.scrollTo(0, top)
    return
  }

  const startTime = performance.now()

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration)
    window.scrollTo(0, start + distance * easeOutCubic(progress))
    if (progress < 1) {
      activeFrame = requestAnimationFrame(step)
    } else {
      activeFrame = 0
    }
  }

  activeFrame = requestAnimationFrame(step)
}

export function scrollToId(id: string, offset = DEFAULT_OFFSET): boolean {
  const element = document.getElementById(id.replace(/^#/, ''))
  if (!element) return false
  const top = element.getBoundingClientRect().top + window.scrollY - offset
  smoothScrollTo(Math.max(0, top))
  return true
}
