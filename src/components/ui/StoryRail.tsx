import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { StoryStep } from '@/data/presentationData'
import { staggerContainer, fadeUp } from '@/constants/motion'

interface StoryRailProps {
  steps: StoryStep[]
}

export function StoryRail({ steps }: StoryRailProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {steps.map((step, i) => (
        <motion.div
          key={step.id}
          variants={fadeUp}
          custom={i}
          className="group relative glass-panel p-5"
        >
          <span className="label-caps">{step.label}</span>
          <p className="mt-2 text-sm font-semibold text-graphite">{step.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-graphite-light">{step.hint}</p>
          {i < steps.length - 1 && (
            <ArrowRight className="absolute top-1/2 -right-2 hidden h-4 w-4 -translate-y-1/2 text-muted lg:block" />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
