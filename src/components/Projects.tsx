import { useState } from 'react'
import { projects } from '../data/projects'
import Section from './Section'
import TagFilter from './TagFilter'
import ProjectCard from './ProjectCard'

const allTags = [...new Set(projects.flatMap((p) => p.tech))]

export default function Projects() {
  const [tag, setTag] = useState<string | null>(null)
  const shown = tag ? projects.filter((p) => p.tech.includes(tag)) : projects
  return (
    <Section id="projects" title="Projects" intro="Two things I built from start to finish. Poke around, the code is all there.">
      <TagFilter tags={allTags} active={tag} onChange={setTag} />
      <div className="space-y-8" aria-live="polite">
        {shown.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  )
}
