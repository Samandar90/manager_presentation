import { motion } from 'framer-motion'
import { Download, ExternalLink, Table2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  bloggersContent,
  bloggersDataFields,
  bloggersKpiBadges,
  bloggersPillars,
} from '@/data/bloggersData'
import { sectionNumbers } from '@/data/presentationData'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/button'
import { fadeUp, staggerContainer } from '@/constants/motion'
import { cn } from '@/lib/utils'

export function BloggersSection() {
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)

  useEffect(() => {
    if (embedLoaded) return
    const timer = window.setTimeout(() => setEmbedFailed(true), 12000)
    return () => window.clearTimeout(timer)
  }, [embedLoaded])

  return (
    <Section id="bloggers" variant="elevated" showDivider>
      <SectionHeader
        number={sectionNumbers.bloggers}
        label="Маркетинг · Аналитика"
        title={bloggersContent.title}
        subtitle={bloggersContent.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {bloggersPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp}
              custom={i}
              className="premium-card group p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-ivory-dark font-mono text-xs font-semibold text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-graphite">{pillar.title}</h3>
                  <p className="meta-text mt-1.5 text-sm">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <p className="meta-text border-l-2 border-graphite/15 pl-4 text-sm italic">
            {bloggersContent.footerNote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="premium-card overflow-hidden !shadow-[var(--shadow-glow)]"
        >
          <div className="border-b border-[var(--color-border)] bg-ivory-dark/30 p-5 md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white">
                  <Table2 className="h-5 w-5 text-graphite" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="label-caps">Внутренняя аналитика</p>
                  <h3 className="mt-1 font-semibold text-graphite">
                    {bloggersContent.sheetName}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {bloggersContent.status}
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[11px] text-muted">
                  {bloggersContent.lastUpdated}
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {bloggersKpiBadges.map((kpi) => (
                <div
                  key={kpi.id}
                  className="rounded-xl border border-[var(--color-border)] bg-white/90 px-3 py-2"
                >
                  <p className="text-[10px] font-medium tracking-wide text-muted uppercase">
                    {kpi.label}
                  </p>
                  <p className="text-sm font-semibold text-graphite">{kpi.value}</p>
                </div>
              ))}
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {bloggersDataFields.map((field) => (
                <li
                  key={field}
                  className="rounded-full border border-[var(--color-border)] bg-white/80 px-2.5 py-1 text-[11px] font-medium text-graphite-light"
                >
                  {field}
                </li>
              ))}
            </ul>
          </div>

          {embedFailed ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 bg-ivory-dark/20 p-8 text-center md:min-h-[360px]">
              <div className="grid w-full max-w-sm gap-2">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div
                    key={row}
                    className="flex gap-2"
                  >
                    <div className="h-8 flex-1 animate-pulse rounded-lg bg-white/80" />
                    <div className="h-8 w-16 animate-pulse rounded-lg bg-white/60" />
                    <div className="h-8 w-20 animate-pulse rounded-lg bg-white/60" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-graphite-light">
                Preview-режим недоступен. Данные доступны в Google Sheets.
              </p>
            </div>
          ) : (
            <div className="relative aspect-[4/3] w-full bg-ivory-dark/30 md:aspect-[16/11]">
              {!embedLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-graphite" />
                </div>
              )}
              <iframe
                title={bloggersContent.sheetName}
                src={bloggersContent.embedUrl}
                className={cn(
                  'absolute inset-0 h-full w-full border-0 transition-opacity duration-500',
                  embedLoaded ? 'opacity-100' : 'opacity-0',
                )}
                loading="lazy"
                onLoad={() => setEmbedLoaded(true)}
              />
            </div>
          )}

          <div className="flex flex-col gap-3 border-t border-[var(--color-border)] bg-white/50 p-5 sm:flex-row md:p-6">
            <Button asChild className="flex-1">
              <a
                href={bloggersContent.editUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bloggersContent.openButton}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={bloggersContent.pdfUrl} target="_blank" rel="noopener noreferrer">
                {bloggersContent.downloadPdf}
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
