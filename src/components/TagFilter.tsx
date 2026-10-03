interface Props {
  tags: string[]
  active: string | null
  onChange: (tag: string | null) => void
}

const base = 'rounded-full border px-3 py-1 font-mono text-xs transition-colors'
const on = 'border-accent bg-accent text-on-accent'
const off = 'border-border text-muted hover:border-accent hover:text-fg'

export default function TagFilter({ tags, active, onChange }: Props) {
  return (
    <div role="group" aria-label="Filter by technology" className="mb-8 flex flex-wrap gap-2">
      <button type="button" aria-pressed={active === null} onClick={() => onChange(null)} className={`${base} ${active === null ? on : off}`}>
        All
      </button>
      {tags.map((t) => (
        <button key={t} type="button" aria-pressed={active === t} onClick={() => onChange(active === t ? null : t)} className={`${base} ${active === t ? on : off}`}>
          {t}
        </button>
      ))}
    </div>
  )
}
