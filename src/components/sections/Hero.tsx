import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { heroContent, siteMeta } from '@/data/presentationData'
import { scrollToSection } from '@/hooks/useLenis'
import { ManagementDashboard } from '@/components/sections/ManagementDashboard'
import { AnimatedBadge } from '@/components/ui/AnimatedBadge'
import { Button } from '@/components/ui/button'
import { easePremium } from '@/constants/motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] scroll-mt-0 flex-col justify-center px-5 pt-24 pb-16 md:px-8 md:pt-28 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="max-w-xl lg:max-w-none">
          <AnimatedBadge>{siteMeta.statusLabel}</AnimatedBadge>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/60 px-3 py-1 text-xs text-graphite-light"
          >
            <TrendingUp className="h-3.5 w-3.5" />
            Системный рост · Управляемая клиника
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easePremium }}
            className="heading-display mt-6 text-[2.5rem] leading-[1.05] md:text-5xl lg:text-[3.5rem]"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="meta-text mt-6 max-w-lg text-base md:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" onClick={() => scrollToSection('#overview')}>
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('#it')}>
              {heroContent.secondaryCta}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easePremium }}
        >
          <ManagementDashboard />
        </motion.div>
      </div>
    </section>
  )
}
