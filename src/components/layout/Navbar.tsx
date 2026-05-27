import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, siteMeta } from '@/data/presentationData'
import type { SectionId } from '@/data/presentationData'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { scrollToSection } from '@/hooks/useLenis'
import { cn } from '@/lib/utils'

interface NavbarProps {
  activeId: SectionId
}

export function Navbar({ activeId }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <>
      <div
        className="fixed top-0 right-0 left-0 z-[60] h-px origin-left bg-graphite/80 transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />

      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
          scrolled || mobileOpen
            ? 'border-b border-[var(--color-border)] bg-ivory/70 backdrop-blur-xl'
            : 'bg-ivory/35 backdrop-blur-sm',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => scrollToSection('#hero')}
            className="group text-left"
          >
            <span className="block text-sm font-semibold tracking-tight text-graphite">
              {siteMeta.clinicName}
            </span>
            <span className="block text-[10px] font-medium tracking-widest text-muted uppercase">
              Strategy 2026
            </span>
          </button>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => handleNav(item.href)}
                  className={cn(
                    'relative rounded-full px-3 py-2 text-xs font-medium transition-all duration-300',
                    activeId === item.id
                      ? 'text-graphite'
                      : 'text-graphite-light hover:text-graphite',
                  )}
                >
                  {item.label}
                  {activeId === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-graphite/70"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/90 shadow-sm lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-ivory/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35 }}
              className="flex h-full flex-col justify-center px-8"
            >
              <p className="label-caps mb-8">Навигация</p>
              <ul className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNav(item.href)}
                      className={cn(
                        'w-full border-b border-[var(--color-border)] py-4 text-left text-2xl font-semibold tracking-tight transition-colors',
                        activeId === item.id ? 'text-graphite' : 'text-graphite-light',
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
