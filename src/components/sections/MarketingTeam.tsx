import { ArrowRight } from 'lucide-react'
import { marketingTeam, sectionHeaders, sectionNumbers } from '@/data/presentationData'
import { scrollToSection } from '@/hooks/useLenis'
import { Section } from '@/components/layout/Section'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/button'

export function MarketingTeam() {
  return (
    <Section id="team" variant="muted" showDivider>
      <SectionHeader
        number={sectionNumbers.team}
        label={sectionHeaders.team.label}
        title={sectionHeaders.team.title}
        subtitle="Команда роста: контент, визуал, бренд и цифровая инфраструктура под единым управлением."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {marketingTeam.map((member, index) => (
          <PremiumCard
            key={member.id}
            title={member.title}
            description={member.description}
            tag={member.tag}
            index={index}
            className={member.scrollToIt ? 'ring-1 ring-graphite/5' : undefined}
          >
            {member.scrollToIt && (
              <Button
                variant="outline"
                size="sm"
                className="mt-6 w-full"
                onClick={() => scrollToSection('#it')}
              >
                Открыть IT-направление
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            )}
          </PremiumCard>
        ))}
      </div>
    </Section>
  )
}
