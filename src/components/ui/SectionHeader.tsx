import { motion } from 'framer-motion'
import { easePremium } from '@/constants/motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  number?: string
  label: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeader({
  number,
  label,
  title,
  subtitle,
  className,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: easePremium }}
      className={cn(
        'mb-14 md:mb-16',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        {number && (
          <span
            className={cn(
              'font-mono text-xs font-medium tracking-widest',
              dark ? 'text-ivory/40' : 'text-muted',
            )}
          >
            {number}
          </span>
        )}
        <span className={cn('label-caps', dark && 'text-ivory/50')}>{label}</span>
      </div>
      <h2
        className={cn(
          'heading-display text-3xl md:text-4xl lg:text-[2.85rem] lg:leading-[1.08]',
          dark && 'text-ivory',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'meta-text mt-5 max-w-2xl text-base md:text-lg',
            align === 'center' && 'mx-auto',
            dark && 'text-ivory/65',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
