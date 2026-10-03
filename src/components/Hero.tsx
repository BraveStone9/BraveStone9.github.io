import { Download, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { links } from '../data/links'

const btn = 'inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors'
const iconBtn = 'inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors'

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-8 px-6 pb-12 pt-16 sm:pt-24 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="font-mono text-sm text-accent">AI Engineer · GenAI Developer · Mannheim, Germany</p>
        <h1 id="hero-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Aditya Yadav</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          I build production LLM systems — agent orchestration, retrieval pipelines, and real-time voice AI.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={links.cv} download className={`${btn} border-accent bg-accent text-on-accent hover:opacity-90`}>
            <Download size={16} aria-hidden /> CV
          </a>
          <a href={links.github} aria-label="GitHub" title="GitHub" className={`${iconBtn} border-border hover:border-accent`}><Github size={18} /></a>
          <a href={links.linkedin} aria-label="LinkedIn" title="LinkedIn" className={`${iconBtn} border-border hover:border-accent`}><Linkedin size={18} /></a>
          <a href={links.email} aria-label="Email" title="Email" className={`${iconBtn} border-border hover:border-accent`}><Mail size={18} aria-hidden /></a>
        </div>
      </div>
      {/* Swap the photo by replacing public/images/main.jpg (square works best) */}
      <img
        src="/images/main.jpg"
        alt="Portrait of Aditya Yadav"
        width={600}
        height={600}
        className="h-36 w-36 shrink-0 rounded-full border border-border object-cover sm:h-44 sm:w-44 md:h-56 md:w-56"
      />
    </section>
  )
}
