export function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="ambient-light absolute inset-0" />
      <div className="ambient-light-bottom absolute inset-0" />
      <div className="ambient-warm absolute inset-0" />
      <div className="ambient-cool absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  )
}
