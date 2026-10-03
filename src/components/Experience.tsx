import { ExternalLink } from 'lucide-react'
import { education, employer } from '../data/experience'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="border-l border-border pl-6">
        <h3 className="text-lg font-semibold">{employer.company}</h3>
        <p className="text-sm text-muted">{employer.location}</p>
        <ul className="mt-6 space-y-8">
          {employer.roles.map((r) => (
            <li key={r.title} className="relative">
              <span
                aria-hidden
                className={`absolute rounded-full ${r.minor ? '-left-[1.7rem] top-2 h-2 w-2 bg-border' : '-left-[1.85rem] top-2 h-2.5 w-2.5 bg-accent'}`}
              />
              <h4 className={r.minor ? 'text-sm font-semibold' : 'font-semibold'}>{r.title}</h4>
              <p className="font-mono text-xs text-muted">{r.period}</p>
              {r.bullets &&
                (r.minor ? (
                  <div className="mt-2 space-y-1 text-sm text-muted">
                    {r.bullets.map((b) => <p key={b}>{b}</p>)}
                  </div>
                ) : (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm marker:text-accent">
                    {r.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border-l border-border pl-6">
        <h3 className="text-lg font-semibold">Education</h3>
        <p className="mt-2 font-semibold">{education.degree}</p>
        <p className="text-sm text-muted">{education.institution}</p>
        <p className="font-mono text-xs text-muted">{education.period}</p>
        {education.thesis && (
          <p className="mt-3 max-w-2xl text-sm text-muted">
            <span className="font-medium text-fg">Thesis: </span>
            {education.thesis.text}{' '}
            <a href={education.thesis.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 whitespace-nowrap font-medium text-accent hover:underline">
              Thesis PDF <ExternalLink size={12} aria-hidden />
            </a>
          </p>
        )}
      </div>
    </Section>
  )
}
