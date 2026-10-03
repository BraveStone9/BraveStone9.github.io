import type { SkillGroupData } from '../data/skills'

export default function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="card-lift rounded-lg border border-border bg-surface p-5">
      <h3 className="text-sm font-semibold text-accent">{group.name}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.items.map((i) => (
          <li key={i} className="rounded-md border border-border px-2.5 py-1 text-sm">{i}</li>
        ))}
      </ul>
    </div>
  )
}
