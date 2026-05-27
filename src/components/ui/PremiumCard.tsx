import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PremiumCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  tag?: string
  children?: React.ReactNode
  className?: string
  index?: number
  onClick?: () => void
}

export function PremiumCard({
  title,
  description,
  icon: Icon,
  tag,
  children,
  className,
  index = 0,
  onClick,
}: PremiumCardProps) {
  const Component = onClick ? motion.button : motion.div

  return (
    <Component
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        'premium-card group flex h-full flex-col p-6 text-left md:p-8',
        onClick && 'cursor-pointer',
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-ivory-dark">
            <Icon className="h-5 w-5 text-graphite" strokeWidth={1.5} />
          </div>
        )}
        {tag && (
          <span className="rounded-full border border-[var(--color-border)] bg-ivory px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-graphite">{title}</h3>
      {description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-light">
          {description}
        </p>
      )}
      {children}
    </Component>
  )
}
