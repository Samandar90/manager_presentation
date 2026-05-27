import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Activity } from 'lucide-react'
import {
  heroDashboardMetrics,
  heroDashboardModules,
  heroFloatingCards,
} from '@/data/heroData'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { floatTransition, floatY } from '@/constants/motion'
import { cn } from '@/lib/utils'

export function ManagementDashboard() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="relative" onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="glass-panel relative overflow-hidden p-6 md:p-8"
      >
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/55 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-beige/30 blur-3xl" />

        <div className="relative mb-6 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-graphite/50" />
              </span>
              <p className="label-caps">Clinic Command Center</p>
            </div>
            <p className="mt-2 text-lg font-semibold tracking-tight text-graphite">
              Панель управления
            </p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-graphite/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-graphite/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-graphite/15" />
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-3">
          {heroDashboardMetrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.id}
                animate={{ y: floatY }}
                transition={{ ...floatTransition, delay: i * 0.4 }}
                className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white/90 p-4"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-muted" strokeWidth={1.5} />
                  <span className="text-[10px] font-medium text-emerald-700">
                    {metric.trend}
                  </span>
                </div>
                <p className="mt-3 text-[10px] font-medium tracking-wide text-muted uppercase">
                  {metric.label}
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-graphite">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.value % 1 !== 0 ? 1 : 0}
                  />
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="relative mt-4 space-y-2">
          {heroDashboardModules.map((mod) => (
            <div
              key={mod.id}
              className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white/70 px-3 py-2.5"
            >
              <Activity className="h-3.5 w-3.5 shrink-0 text-muted" />
              <span className="flex-1 text-xs font-medium text-graphite">{mod.label}</span>
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-ivory-dark">
                <div
                  className="h-full rounded-full bg-graphite transition-all duration-700"
                  style={{ width: `${mod.progress ?? 0}%` }}
                />
              </div>
              <span className="w-8 text-right text-[10px] font-semibold text-muted">
                {mod.progress}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {heroFloatingCards.map((card, i) => (
        <motion.div
          key={card.id}
          animate={{ y: floatY }}
          transition={{ ...floatTransition, delay: 1 + i * 0.6 }}
          className={cn(
            'absolute z-10 hidden rounded-2xl border border-[var(--color-border)] bg-white/95 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-md lg:block',
            i === 0 ? '-top-4 -left-6' : '-right-4 bottom-8',
          )}
        >
          <p className="text-[10px] font-medium tracking-wide text-muted uppercase">
            {card.label}
          </p>
          <p className="text-sm font-semibold text-graphite">{card.value}</p>
        </motion.div>
      ))}
    </div>
  )
}
