import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { links } from '../data/links'
import Section from './Section'

const rows = [
  { icon: Mail, label: 'adityayadav2739@gmail.com', href: links.email },
  { icon: Linkedin, label: 'linkedin.com/in/aditya27yadav', href: links.linkedin },
  { icon: Github, label: 'github.com/BraveStone9', href: links.github },
]

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Got something in mind? Say hi.">
      <ul className="space-y-3">
        {rows.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a href={href} className="inline-flex items-center gap-3 hover:text-accent">
              <Icon size={18} className="text-accent" /> {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
