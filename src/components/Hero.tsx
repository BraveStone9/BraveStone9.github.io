import { Download, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { links } from '../data/links'
import EmailButton from './EmailButton'
import PhotoFlip from './PhotoFlip'

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-8 px-6 pb-12 pt-16 sm:pt-24 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="font-mono text-sm text-accent">AI Engineer · GenAI Developer · Mannheim, Germany</p>
        <h1 id="hero-title" className="grad-text mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Aditya Yadav</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          I build production LLM systems — agent orchestration, retrieval pipelines, and real-time voice AI.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={links.cv} download className="btn btn-primary">
            <Download size={16} aria-hidden /> CV
          </a>
          <a href={links.github} aria-label="GitHub" title="GitHub" className="btn btn-secondary btn-icon"><Github size={18} /></a>
          <a href={links.linkedin} aria-label="LinkedIn" title="LinkedIn" className="btn btn-secondary btn-icon"><Linkedin size={18} /></a>
          <EmailButton className="btn btn-secondary btn-icon"><Mail size={18} aria-hidden /></EmailButton>
        </div>
      </div>
      <PhotoFlip />
    </section>
  )
}
