import { cn } from '@/lib/utils'

interface ImpactBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'neutral'
  className?: string
}

export function ImpactBadge({
  children,
  variant = 'default',
  className,
}: ImpactBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase',
        variant === 'default' && 'border-[var(--color-border)] bg-ivory-dark text-graphite-light',
        variant === 'success' && 'border-emerald-200/80 bg-emerald-50/80 text-emerald-800',
        variant === 'neutral' && 'border-[var(--color-border)] bg-white text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
