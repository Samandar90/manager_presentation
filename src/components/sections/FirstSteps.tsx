import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { priorityLabels, roadmapWeeks } from '@/data/roadmapData'
import {
  firstStepsContent,
  sectionHeaders,
  sectionNumbers,
} from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { ImpactBadge } from '@/components/ui/ImpactBadge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

export function FirstSteps() {
  return (
    <Section id="first-steps" variant="muted" showDivider>
      <SectionHeader
        number={sectionNumbers['first-steps']}
        label={sectionHeaders.firstSteps.label}
        title={firstStepsContent.title}
        subtitle={firstStepsContent.subtitle}
      />

      <div className="relative mb-10 hidden h-1 overflow-hidden rounded-full bg-white md:block">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-graphite"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {roadmapWeeks.map((week, index) => (
          <motion.article
            key={week.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="premium-card relative flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-ivory-dark">
              <div
                className="h-full bg-graphite transition-all duration-700"
                style={{ width: `${week.progress}%` }}
              />
            </div>

            <div className="p-6 pt-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">W{week.week}</span>
                <ImpactBadge
                  variant={week.priority === 'critical' ? 'success' : 'default'}
                >
                  {priorityLabels[week.priority]}
                </ImpactBadge>
              </div>
              <h3 className="heading-display mt-3 text-xl">{week.title}</h3>
              <p className="meta-text mt-1 text-sm">{week.subtitle}</p>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ivory-dark">
                  <div
                    className="h-full rounded-full bg-graphite"
                    style={{ width: `${week.progress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-muted">{week.progress}%</span>
              </div>

              <ul className="mt-6 space-y-3">
                {week.milestones.map((m) => (
                  <li key={m.id} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                        m.done
                          ? 'border-graphite bg-graphite text-ivory'
                          : 'border-[var(--color-border)] bg-white',
                      )}
                    >
                      {m.done && <Check className="h-3 w-3" strokeWidth={2.5} />}
                    </span>
                    <span
                      className={cn(
                        'text-sm leading-snug',
                        m.done ? 'font-medium text-graphite' : 'text-graphite-light',
                      )}
                    >
                      {m.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
