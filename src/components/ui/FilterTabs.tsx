import { cn } from '@/lib/utils'

interface FilterOption<T extends string> {
  id: T
  label: string
}

interface FilterTabsProps<T extends string> {
  options: FilterOption<T>[]
  active: T
  onChange: (id: T) => void
  className?: string
}

export function FilterTabs<T extends string>({
  options,
  active,
  onChange,
  className,
}: FilterTabsProps<T>) {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-2',
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
            active === opt.id
              ? 'border-graphite bg-graphite text-ivory shadow-sm'
              : 'border-[var(--color-border)] bg-white/80 text-graphite-light hover:border-[var(--color-border-hover)]',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
