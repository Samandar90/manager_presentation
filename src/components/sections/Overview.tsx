import { motion } from 'framer-motion'
import {
  kpiCards,
  overviewContent,
  overviewStorySteps,
  sectionHeaders,
  sectionNumbers,
} from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StoryRail } from '@/components/ui/StoryRail'

export function Overview() {
  return (
    <Section id="overview" showDivider={false}>
      <SectionHeader
        number={sectionNumbers.overview}
        label={sectionHeaders.overview.label}
        title={sectionHeaders.overview.title}
        subtitle="От хаоса процессов — к измеримой системе роста клиники."
      />

      <StoryRail steps={overviewStorySteps} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="premium-card relative overflow-hidden p-8 md:p-10"
      >
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-beige/30 blur-3xl" />
        <p className="label-caps relative">{overviewContent.goalTitle}</p>
        <p className="heading-display relative mt-4 max-w-3xl text-xl leading-relaxed md:text-2xl">
          {overviewContent.goalText}
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((card, index) => (
          <PremiumCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
