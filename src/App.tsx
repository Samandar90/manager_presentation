import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { PageBackground } from '@/components/layout/PageBackground'
import { ProgressIndicator } from '@/components/layout/ProgressIndicator'
import { Advertising } from '@/components/sections/Advertising'
import { BloggersSection } from '@/components/sections/BloggersSection'
import { Departments } from '@/components/sections/Departments'
import { FinalStatement } from '@/components/sections/FinalStatement'
import { Finance } from '@/components/sections/Finance'
import { FirstSteps } from '@/components/sections/FirstSteps'
import { Hero } from '@/components/sections/Hero'
import { InternalChanges } from '@/components/sections/InternalChanges'
import { ITAutomation } from '@/components/sections/ITAutomation'
import { MarketingTeam } from '@/components/sections/MarketingTeam'
import { Opening } from '@/components/sections/Opening'
import { Overview } from '@/components/sections/Overview'
import { progressSections } from '@/data/presentationData'
import type { SectionId } from '@/data/presentationData'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLenis } from '@/hooks/useLenis'

const trackedSections: SectionId[] = progressSections.map((s) => s.id)

function App() {
  useLenis()
  const activeId = useActiveSection(trackedSections)

  return (
    <>
      <PageBackground />
      <Navbar activeId={activeId} />
      <ProgressIndicator sections={progressSections} activeId={activeId} />
      <main className="relative z-[1]">
        <Hero />
        <Overview />
        <MarketingTeam />
        <Departments />
        <Advertising />
        <BloggersSection />
        <InternalChanges />
        <Finance />
        <FirstSteps />
        <ITAutomation />
        <Opening />
        <FinalStatement />
      </main>
      <Footer />
    </>
  )
}

export default App
