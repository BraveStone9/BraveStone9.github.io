import { useState } from 'react'
import { BarChart3 } from 'lucide-react'
import { Github } from './BrandIcons'
import { learningProjects } from '../data/projects'
import Section from './Section'
import TagFilter from './TagFilter'

const allTags = [...new Set(learningProjects.flatMap((p) => p.tech))]

export default function LearningPath() {
  const [tag, setTag] = useState<string | null>(null)
  const shown = tag ? learningProjects.filter((p) => p.tech.includes(tag)) : learningProjects
  return (
    <Section id="learning" title="Where It Started" intro="Older projects from my bachelor’s and master’s. Not the main show, but have a look if you’re curious.">
      <TagFilter tags={allTags} active={tag} onChange={setTag} />
      <div className="grid gap-4 sm:grid-cols-2" aria-live="polite">
        {shown.map((p) => (
          <article key={p.id} className="flex flex-col rounded-lg border border-border bg-surface p-5">
            {!p.image && (
              <div aria-hidden className="mb-4 flex h-36 w-full items-center justify-center rounded-md border border-border bg-bg text-muted">
                <BarChart3 size={32} />
              </div>
            )}
            {p.image && <img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" className="mb-4 h-48 w-full rounded-md border border-border object-cover object-top" />}
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1.5 flex-1 text-sm text-muted">{p.summary}</p>
            <ul aria-label="Technologies" className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => <li key={t} className="font-mono text-xs text-muted">#{t}</li>)}
            </ul>
            <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              <Github size={14} /> View repository
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
