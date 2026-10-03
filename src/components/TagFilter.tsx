interface Props {
  tags: string[]
  active: string | null
  onChange: (tag: string | null) => void
}

export default function TagFilter({ tags, active, onChange }: Props) {
  return (
    <div role="group" aria-label="Filter by technology" className="mb-8 flex flex-wrap gap-2">
      <button type="button" aria-pressed={active === null} onClick={() => onChange(null)} className="chip">
        All
      </button>
      {tags.map((t) => (
        <button key={t} type="button" aria-pressed={active === t} onClick={() => onChange(active === t ? null : t)} className="chip">
          {t}
        </button>
      ))}
    </div>
  )
}
