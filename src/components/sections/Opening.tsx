import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { openingContent, openingItems, sectionNumbers } from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { staggerContainer, fadeUp } from '@/constants/motion'

export function Opening() {
  return (
    <Section id="opening" showDivider>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white/80 p-10 text-center md:p-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]" />

        <span className="label-caps relative">{sectionNumbers.opening} · Финальный этап</span>

        <div className="relative mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-ivory-dark">
          <Sparkles className="h-8 w-8 text-graphite" strokeWidth={1.5} />
        </div>

        <h2 className="heading-display relative mt-8 text-3xl md:text-5xl">
          {openingContent.title}
        </h2>
        <p className="meta-text relative mx-auto mt-6 max-w-2xl text-base md:text-lg">
          {openingContent.text}
        </p>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2"
        >
          {openingItems.map((item, i) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-[var(--color-border)] bg-ivory/80 px-5 py-4 text-sm font-medium text-graphite"
            >
              {item.text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  )
}
