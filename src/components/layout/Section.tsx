import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'muted' | 'dark' | 'elevated'
  showDivider?: boolean
}

export function Section({
  id,
  children,
  className,
  variant = 'default',
  showDivider = true,
}: SectionProps) {
  return (
    <>
      {showDivider && <div className="section-divider" aria-hidden />}
      <section
        id={id}
        className={cn(
          'section-padding relative scroll-mt-28',
          variant === 'muted' && 'bg-ivory-dark/40',
          variant === 'elevated' && 'bg-white/50',
          variant === 'dark' && 'bg-graphite text-ivory',
          className,
        )}
      >
        <div className="relative z-[1] mx-auto max-w-6xl">{children}</div>
      </section>
    </>
  )
}
