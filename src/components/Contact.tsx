import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { links } from '../data/links'
import Section from './Section'

const rows = [
  { icon: Mail, label: 'Email', href: links.email, external: false },
  { icon: Linkedin, label: 'LinkedIn', href: links.linkedin, external: true },
  { icon: Github, label: 'GitHub', href: links.github, external: true },
]

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Got something in mind? Say hi." center>
      <ul className="flex justify-center gap-5">
        {rows.map(({ icon: Icon, label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors hover:border-accent"
            >
              <Icon size={30} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
