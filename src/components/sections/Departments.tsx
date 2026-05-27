import { motion } from 'framer-motion'
import { Building2, ShieldCheck } from 'lucide-react'
import { departments, sectionHeaders, sectionNumbers } from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { ImpactBadge } from '@/components/ui/ImpactBadge'
import { SectionHeader } from '@/components/ui/SectionHeader'

const deptIcons = [Building2, ShieldCheck]

export function Departments() {
  return (
    <Section id="departments" variant="elevated" showDivider>
      <SectionHeader
        number={sectionNumbers.departments}
        label={sectionHeaders.departments.label}
        title={sectionHeaders.departments.title}
        subtitle="Структура ответственности: набор персонала и контроль качества."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {departments.map((dept, index) => {
          const Icon = deptIcons[index]
          return (
            <motion.article
              key={dept.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="premium-card p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-ivory-dark">
                  <Icon className="h-7 w-7 text-graphite" strokeWidth={1.5} />
                </div>
                <ImpactBadge>Отдел</ImpactBadge>
              </div>
              <h3 className="heading-display mt-6 text-2xl">{dept.title}</h3>
              <ul className="mt-8 divide-y divide-[var(--color-border)]">
                {dept.items.map((item) => (
                  <li key={item.label} className="flex flex-col gap-1 py-5 first:pt-0">
                    <span className="label-caps">{item.label}</span>
                    <span className="text-lg font-semibold text-graphite">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
