import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedBadgeProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedBadge({ children, className }: AnimatedBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-muted uppercase backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
