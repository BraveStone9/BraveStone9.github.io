import { useId, useState, type PointerEvent } from 'react'
import { ChevronDown, ExternalLink, FileText } from 'lucide-react'
import { Github } from './BrandIcons'
import type { Project } from '../data/projects'
import PrReviewDemo from './PrReviewDemo'
import DevosDemo from './DevosDemo'
import FlowDiagram from './FlowDiagram'

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  // Feeds the cursor position to the card's hover spotlight (see .card-spot in index.css)
  const spotlight = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <article onPointerMove={spotlight} className="card-spot rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
      <p className="mt-3 text-muted">{project.summary}</p>

      <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm marker:text-accent">
        {project.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>

      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted">{t}</li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="btn btn-ghost -ml-2 text-accent"
        >
          How it works
          <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        <div id={panelId} hidden={!open} className="mt-3 border-l-2 border-accent pl-4 text-sm text-muted">
          <FlowDiagram steps={project.flow} label={`${project.title} architecture`} />
          <ol className="list-decimal space-y-1.5 pl-4">
            {project.howItWorks.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </div>
      </div>

      {project.demo === 'devos' && <DevosDemo />}
      {project.demo === 'pr-reviewer' && <PrReviewDemo />}

      <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
        {project.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
             className="btn btn-primary">
            {l.icon === 'github' && <Github size={14} />}
            {l.icon === 'file' && <FileText size={14} aria-hidden />}
            {l.label}
            {(!l.icon || l.icon === 'external') && <ExternalLink size={14} aria-hidden />}
          </a>
        ))}
      </div>
    </article>
  )
}
