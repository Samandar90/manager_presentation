import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite/20 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-graphite text-ivory shadow-sm hover:bg-graphite-light hover:-translate-y-0.5',
        outline:
          'border border-[var(--color-border)] bg-white/80 text-graphite hover:border-[var(--color-border-hover)] hover:-translate-y-0.5 hover:shadow-md',
        ghost: 'text-graphite hover:bg-black/[0.04]',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
