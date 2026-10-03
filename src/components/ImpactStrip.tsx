import { impact } from '../data/impact'

export default function ImpactStrip() {
  return (
    <section aria-labelledby="impact-title" className="mx-auto max-w-7xl px-6 pb-8">
      <h2 id="impact-title" className="mb-3 font-mono text-sm text-accent">What I bring</h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((i) => (
          <li key={i.value} className="rounded-lg border border-border bg-surface px-4 py-3">
            <p className="text-lg font-bold leading-snug text-accent">{i.value}</p>
            <p className="mt-1 text-sm text-muted">
              {i.parts.map((p, n) =>
                typeof p === 'string' ? (
                  p
                ) : (
                  <a key={n} href={p.href} target="_blank" rel="noreferrer" className="font-medium text-fg underline decoration-accent underline-offset-2 hover:text-accent">
                    {p.text}
                  </a>
                ),
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
