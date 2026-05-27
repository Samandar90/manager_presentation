import { footerContent } from '@/data/presentationData'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-graphite">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.06]" />

      <div className="mx-auto max-w-6xl px-5 pt-14 pb-10 md:px-8 md:pt-16 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight text-ivory">
              {footerContent.clinic}
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.22em] text-ivory/50 uppercase">
              {footerContent.title}
            </p>
            <p className="mt-2 font-mono text-sm tracking-widest text-ivory/55">
              {footerContent.year}
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-xs font-medium tracking-[0.22em] text-ivory/45 uppercase">
              {footerContent.preparedFor}
            </p>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>© {footerContent.year} {footerContent.clinic}. Все права защищены.</p>
          <p className="font-mono tracking-widest">EXECUTIVE / STRATEGY</p>
        </div>
      </div>
    </footer>
  )
}
