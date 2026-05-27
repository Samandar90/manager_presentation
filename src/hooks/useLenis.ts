import Lenis from 'lenis'
import { useEffect } from 'react'

let lenisRef: Lenis | null = null

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef = lenis
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef = null
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])
}

export function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return

  if (lenisRef) {
    lenisRef.scrollTo(el, { offset: -72, duration: 1.15 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
