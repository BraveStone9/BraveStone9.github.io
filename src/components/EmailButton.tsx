import { useEffect, useRef, useState, type ReactNode } from 'react'
import { links } from '../data/links'

const address = links.email.replace('mailto:', '')

// Copies the address on click and confirms with a small toast. Many visitors have no
// mail app set up, so a plain mailto link often does nothing; the toast still offers it.
export default function EmailButton({ className, children }: { className: string; children: ReactNode }) {
  const [shown, setShown] = useState(false)
  const timer = useRef<number>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address)
    } catch {
      const area = document.createElement('textarea')
      area.value = address
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
    }
    setShown(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setShown(false), 4000)
  }

  return (
    <>
      <button type="button" onClick={copy} aria-label="Copy email address" title="Copy email address" className={className}>
        {children}
      </button>
      <div
        role="status"
        aria-live="polite"
        className={`no-print fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-lg border border-accent bg-surface px-4 py-2.5 text-sm shadow-lg transition duration-200 ${
          shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {shown && (
          <>
            Email copied
            <a href={links.email} className="link ml-3 font-medium">Open mail app</a>
          </>
        )}
      </div>
    </>
  )
}
