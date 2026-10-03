import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  id: string
  title: string
  intro?: string
  children: ReactNode
}

export default function Section({ id, title, intro, children }: Props) {
  const { ref, visible } = useInView<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className={`reveal mx-auto max-w-7xl px-6 py-20 ${visible ? 'is-visible' : ''}`}
    >
      <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-2 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  )
}
