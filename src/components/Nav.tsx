import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Archive' },
  { id: 'off-the-clock', label: 'Offline' },
  { id: 'contact', label: 'Contact' },
]
const ids = sections.map((s) => s.id)

interface Box {
  left: number
  top: number
  width: number
  height: number
}

export default function Nav() {
  const active = useActiveSection(ids)
  const [hovered, setHovered] = useState<string | null>(null)
  const [box, setBox] = useState<Box | null>(null)
  const links = useRef<Record<string, HTMLAnchorElement | null>>({})
  const target = hovered ?? active

  // The highlight glides to the hovered link, and rests on the active section.
  const measure = useCallback(() => {
    const el = links.current[target]
    if (el) setBox({ left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight })
  }, [target])

  useLayoutEffect(measure, [measure])
  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur print:hidden">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="font-mono text-sm font-bold text-accent">AY</a>
        <ul
          className="relative flex min-w-0 items-center gap-1 overflow-x-auto text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseLeave={() => setHovered(null)}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute rounded-md border-b-2 border-accent bg-accent/15 transition-[left,top,width,height] duration-300 ease-out motion-reduce:transition-none"
            style={box ? { ...box, opacity: 1 } : { opacity: 0 }}
          />
          {sections.map((s) => (
            <li key={s.id}>
              <a
                ref={(el) => {
                  links.current[s.id] = el
                }}
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                onMouseEnter={() => setHovered(s.id)}
                onFocus={() => setHovered(s.id)}
                onBlur={() => setHovered(null)}
                className={`relative block whitespace-nowrap rounded-md px-2.5 py-1.5 transition-colors ${
                  active === s.id ? 'text-accent' : 'text-muted hover:text-fg'
                }`}
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
