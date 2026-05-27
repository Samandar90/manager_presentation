import { motion } from 'framer-motion'
import type { ITDeliverableCard as ITDeliverableCardType } from '@/data/itSectionData'
import { easePremium } from '@/constants/motion'

interface ITDeliverableCardProps {
  card: ITDeliverableCardType
  index: number
}

export function ITDeliverableCard({ card, index }: ITDeliverableCardProps) {
  const Icon = card.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: easePremium }}
      className="group flex h-full flex-col rounded-[24px] border border-[#e7e5e1] bg-[#f8f8f7] p-6 shadow-[0_1px_2px_rgba(28,28,28,0.04),0_12px_32px_rgba(28,28,28,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6d3d1] hover:shadow-[0_16px_40px_rgba(28,28,28,0.08)] md:p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e7e5e1] bg-[#f5f3ef]">
        <Icon className="h-5 w-5 text-[#2a2a2a]" strokeWidth={1.5} />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#1c1c1c]">
        {card.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#525252] line-clamp-3">
        {card.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#e7e5e1] bg-[#f5f3ef] px-2.5 py-1 text-[11px] font-medium text-[#8a7f74]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
