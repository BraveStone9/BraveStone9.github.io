import { ArrowDown, ArrowRight } from 'lucide-react'
import type { FlowStep } from '../data/projects'

export default function FlowDiagram({ steps, label }: { steps: FlowStep[]; label: string }) {
  return (
    <ol aria-label={label} className="mb-4 flex flex-col items-stretch gap-1 lg:flex-row lg:items-center">
      {steps.map((s, i) => (
        <li key={s.label} className="flex flex-col items-center gap-1 lg:flex-1 lg:flex-row">
          <div className={`w-full flex-1 rounded-md border px-3 py-2 text-center ${s.highlight ? 'border-accent bg-accent/10' : 'border-border bg-surface'}`}>
            <p className={`text-sm font-semibold ${s.highlight ? 'text-accent' : 'text-fg'}`}>{s.label}</p>
            {s.sub && <p className="mt-0.5 text-xs text-muted">{s.sub}</p>}
          </div>
          {i < steps.length - 1 && (
            <>
              <ArrowDown size={16} aria-hidden className="shrink-0 text-muted lg:hidden" />
              <ArrowRight size={16} aria-hidden className="hidden shrink-0 text-muted lg:block" />
            </>
          )}
        </li>
      ))}
    </ol>
  )
}
