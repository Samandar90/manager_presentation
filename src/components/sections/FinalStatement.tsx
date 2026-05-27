import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { finalContent } from '@/data/presentationData'
import { scrollToSection } from '@/hooks/useLenis'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'

export function FinalStatement() {
  return (
    <Section id="final" variant="dark" showDivider={false}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="label-caps text-ivory/50">Итог</p>
        <h2 className="heading-display mt-4 text-3xl text-ivory md:text-4xl lg:text-5xl">
          {finalContent.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ivory/65 md:text-lg">
          {finalContent.text}
        </p>
        <Button
          size="lg"
          variant="outline"
          className="mt-10 border-white/20 bg-white/10 text-ivory hover:bg-white/20 hover:text-ivory"
          onClick={() => scrollToSection('#hero')}
        >
          {finalContent.cta}
          <ArrowUp className="h-4 w-4" />
        </Button>
      </motion.div>
    </Section>
  )
}
