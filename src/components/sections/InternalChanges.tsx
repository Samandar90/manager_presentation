import { motion } from 'framer-motion'
import {
  operationalPhases,
  operationalProcesses,
} from '@/data/operationalData'
import {
  internalChangesTitle,
  sectionHeaders,
  sectionNumbers,
} from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { ImpactBadge } from '@/components/ui/ImpactBadge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeUp, staggerContainer } from '@/constants/motion'

export function InternalChanges() {
  return (
    <Section id="internal" showDivider>
      <SectionHeader
        number={sectionNumbers.internal}
        label={sectionHeaders.internal.label}
        title={internalChangesTitle}
        subtitle="Вертикальная операционная модель: от контроля процессов до роста и удержания пациентов."
      />

      <div className="relative">
        <div
          className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-[var(--color-border)] md:left-8 lg:block"
          aria-hidden
        />

        <div className="space-y-16">
          {operationalPhases.map((phase, phaseIndex) => {
            const processes = operationalProcesses.filter((p) => p.phaseId === phase.id)
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.05 }}
                className="relative"
              >
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white font-mono text-lg font-semibold text-graphite lg:flex">
                      {phase.number}
                    </span>
                    <div>
                      <p className="label-caps">Фаза {phase.number}</p>
                      <h3 className="heading-display mt-1 text-2xl md:text-3xl">
                        {phase.title}
                      </h3>
                      <p className="meta-text mt-2 max-w-xl">{phase.description}</p>
                    </div>
                  </div>
                  <ImpactBadge variant="neutral">
                    {processes.length} процессов
                  </ImpactBadge>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {processes.map((process, i) => (
                    <motion.article
                      key={process.id}
                      variants={fadeUp}
                      custom={i}
                      className="premium-card p-5 md:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-sm font-semibold text-graphite">
                          {process.title}
                        </h4>
                        <ImpactBadge variant="success">{process.impact}</ImpactBadge>
                      </div>
                      <p className="meta-text mt-2 text-sm">{process.description}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
