import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { scrollToSection } from '@/hooks/useLenis'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import type { SectionId } from '@/data/presentationData'
import { sectionNumbers } from '@/data/presentationData'

interface ProgressIndicatorProps {
  sections: { id: SectionId; label: string }[]
  activeId: SectionId
}

export function ProgressIndicator({ sections, activeId }: ProgressIndicatorProps) {
  const scrollProgress = useScrollProgress()
  const activeIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === activeId),
  )
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(true)
  const idleTimer = useRef<number | null>(null)

  const activeNumber = sectionNumbers[activeId]
  const activeLabel = useMemo(() => {
    return sections.find((s) => s.id === activeId)?.label ?? ''
  }, [activeId, sections])

  useEffect(() => {
    const setIdle = () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
      setVisible(true)
      idleTimer.current = window.setTimeout(() => {
        setVisible(false)
      }, 2200)
    }

    const onActivity = () => setIdle()
    window.addEventListener('scroll', onActivity, { passive: true })
    window.addEventListener('mousemove', onActivity, { passive: true })
    window.addEventListener('keydown', onActivity)
    setIdle()

    return () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
      window.removeEventListener('scroll', onActivity)
      window.removeEventListener('mousemove', onActivity)
      window.removeEventListener('keydown', onActivity)
    }
  }, [])

  return (
    <aside
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Прогресс презентации"
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={false}
        animate={{
          opacity: visible || hovered ? 1 : 0,
          x: visible || hovered ? 0 : 10,
        }}
        transition={{ duration: 0.35 }}
        className={cn(
          'group relative flex items-end gap-3 rounded-full border border-white/10 bg-graphite/60 px-2.5 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl',
          'supports-[backdrop-filter]:bg-graphite/45',
        )}
      >
        {/* Collapsed rail */}
        <div className="relative flex flex-col items-center gap-2">
          <div className="relative h-40 w-[2px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute top-0 left-0 w-full origin-top bg-white/70"
              style={{ height: `${scrollProgress * 100}%` }}
            />
            <motion.div
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_4px_rgba(0,0,0,0.25)]"
              style={{ top: `${scrollProgress * 100}%` }}
              layout
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            />
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-[10px] font-semibold tracking-widest text-white/80">
            {activeNumber}
          </div>
        </div>

        {/* Expanded on hover */}
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden pr-2"
            >
              <div className="mb-2">
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/45 uppercase">
                  Раздел
                </p>
                <p className="mt-1 text-xs font-semibold text-white/85">
                  {activeLabel}
                </p>
              </div>

              <ul className="flex flex-col gap-1.5">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(`#${section.id}`)}
                      className={cn(
                        'flex items-center gap-2 rounded-full px-2 py-1.5 text-left text-[11px] transition-all duration-200',
                        activeId === section.id
                          ? 'bg-white/10 text-white'
                          : 'text-white/55 hover:text-white/80',
                      )}
                    >
                      <span className="w-6 font-mono text-[10px] tracking-widest text-white/45">
                        {sectionNumbers[section.id]}
                      </span>
                      <span className="whitespace-nowrap">{section.label}</span>
                      <span
                        className={cn(
                          'ml-2 h-1.5 w-1.5 rounded-full',
                          i <= activeIndex ? 'bg-white/75' : 'bg-white/15',
                        )}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  )
}
