import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  adFilters,
  advertisingCards,
  sectionHeaders,
  sectionNumbers,
  type AdFilter,
} from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { FilterTabs } from '@/components/ui/FilterTabs'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Advertising() {
  const [filter, setFilter] = useState<AdFilter>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return advertisingCards
    return advertisingCards.filter((c) => c.category === filter)
  }, [filter])

  return (
    <Section id="advertising" showDivider>
      <SectionHeader
        number={sectionNumbers.advertising}
        label={sectionHeaders.advertising.label}
        title={sectionHeaders.advertising.title}
        subtitle="Каналы привлечения, лояльности и работы с отзывами — под контролем бюджета."
      />

      <FilterTabs
        options={adFilters}
        active={filter}
        onChange={setFilter}
        className="mb-10"
      />

      <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((card, index) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              className="group premium-card flex min-h-[108px] items-center p-5 md:p-6"
            >
              <div>
                <span className="text-[10px] font-semibold tracking-wide text-muted uppercase">
                  {card.category}
                </span>
                <p className="mt-2 text-sm font-medium leading-snug text-graphite">
                  {card.title}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
