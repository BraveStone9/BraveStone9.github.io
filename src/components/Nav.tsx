import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Origins' },
  { id: 'contact', label: 'Contact' },
]
const ids = sections.map((s) => s.id)

export default function Nav() {
  const active = useActiveSection(ids)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur print:hidden">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="font-mono text-sm font-bold text-accent">AY</a>
        <ul className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 transition-colors ${active === s.id ? 'text-accent' : 'text-muted hover:text-fg'}`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  )
}
