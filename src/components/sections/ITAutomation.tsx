import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { itDeliverableCards, itSectionContent } from '@/data/itSectionData'
import { ITDeliverableCard } from '@/components/sections/it/ITDeliverableCard'
import { easePremium } from '@/constants/motion'

export function ITAutomation() {
  return (
    <section
      id="it"
      className="relative scroll-mt-28 overflow-hidden bg-[#f5f3ef] py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_0%,rgba(255,255,255,0.9)_0%,transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(231,229,225,0.5)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="section-divider absolute top-0 right-0 left-0" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14 xl:gap-16">
          {/* LEFT — executive narrative */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: easePremium }}
              className="text-[11px] font-semibold tracking-[0.22em] text-[#8a7f74] uppercase"
            >
              {itSectionContent.label}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, ease: easePremium }}
              className="mt-5 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1c1c1c] md:text-4xl lg:text-[2.65rem]"
            >
              {itSectionContent.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: easePremium }}
              className="mt-5 text-base leading-relaxed text-[#525252] md:text-[17px]"
            >
              {itSectionContent.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: easePremium }}
              className="mt-6 text-sm leading-relaxed text-[#525252] md:text-[15px]"
            >
              {itSectionContent.executiveParagraph}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easePremium }}
              className="mt-8 space-y-3"
            >
              {itSectionContent.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e7e5e1] bg-[#f8f8f7]">
                    <Check className="h-3 w-3 text-[#2a2a2a]" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-[#2a2a2a]">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — 4 deliverable cards (2×2) */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {itDeliverableCards.map((card, index) => (
              <ITDeliverableCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
