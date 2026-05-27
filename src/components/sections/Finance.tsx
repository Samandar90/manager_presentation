import { motion } from 'framer-motion'
import { ArrowRight, Wallet } from 'lucide-react'
import {
  financeContent,
  financeItems,
  sectionHeaders,
  sectionNumbers,
} from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { staggerContainer, fadeUp } from '@/constants/motion'

export function Finance() {
  return (
    <Section id="finance" variant="muted" showDivider>
      <SectionHeader
        number={sectionNumbers.finance}
        label={sectionHeaders.finance.label}
        title={sectionHeaders.finance.title}
        subtitle={financeContent.subtitle}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12 grid gap-4 md:grid-cols-3"
      >
        {financeItems.map((item, index) => (
          <motion.div key={item.id} variants={fadeUp} custom={index}>
            <PremiumCard
              title={item.title}
              description={item.description}
              icon={Wallet}
              index={0}
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card overflow-hidden p-8 md:p-12"
      >
        <p className="label-caps text-center">Финансовый цикл управления</p>
        <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
          {financeContent.flowSteps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-3 md:flex-col md:gap-4">
              <div className="flex flex-1 flex-col items-center rounded-2xl border border-[var(--color-border)] bg-ivory-dark/50 px-6 py-5 md:w-full">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 text-base font-semibold text-graphite">{step}</span>
              </div>
              {i < financeContent.flowSteps.length - 1 && (
                <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 text-muted md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
