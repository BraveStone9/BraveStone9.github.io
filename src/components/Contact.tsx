import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { links } from '../data/links'
import EmailButton from './EmailButton'
import Section from './Section'

const tile = 'btn btn-secondary btn-icon h-16 w-16 rounded-xl bg-surface text-accent'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Got something in mind? Say hi." center>
      <ul className="flex justify-center gap-5">
        <li>
          <EmailButton className={tile}><Mail size={30} aria-hidden /></EmailButton>
        </li>
        <li>
          <a href={links.linkedin} aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer" className={tile}>
            <Linkedin size={30} />
          </a>
        </li>
        <li>
          <a href={links.github} aria-label="GitHub" title="GitHub" target="_blank" rel="noreferrer" className={tile}>
            <Github size={30} />
          </a>
        </li>
      </ul>
    </Section>
  )
}
