import { skills } from '../data/skills'
import Section from './Section'
import SkillGroup from './SkillGroup'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => <SkillGroup key={g.name} group={g} />)}
      </div>
    </Section>
  )
}
