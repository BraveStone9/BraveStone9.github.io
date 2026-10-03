import { useEffect, useRef, useState } from 'react'
import { Play, RotateCcw, Wrench } from 'lucide-react'
import { devosDemo } from '../data/demo'

const STEP_MS = 900

export default function DevosDemo() {
  // -1 = not started; 0..n-1 = steps shown so far; n = steps done and answer shown
  const [shown, setShown] = useState(-1)
  const timer = useRef<number>(undefined)
  const total = devosDemo.steps.length

  useEffect(() => () => window.clearInterval(timer.current), [])

  const play = () => {
    window.clearInterval(timer.current)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(total)
      return
    }
    setShown(0)
    timer.current = window.setInterval(() => {
      setShown((n) => {
        if (n >= total) {
          window.clearInterval(timer.current)
          return n
        }
        return n + 1
      })
    }, STEP_MS)
  }

  const running = shown >= 0 && shown < total
  const done = shown >= total

  return (
    <div className="no-print mt-6 rounded-lg border border-border bg-bg p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium">Watch the model debug an app on its own</p>
        <p className="text-xs text-muted">
          Replay of a{' '}
          <a href={devosDemo.source} target="_blank" rel="noreferrer" className="text-accent underline">sample run</a>
          {' '}with Gemini. The tool calls are straight from the log; the answer is trimmed for length.
        </p>
      </div>

      <p className="mt-3 rounded-md border border-border bg-surface p-3 text-sm">
        <span className="font-mono text-xs text-muted">prompt › </span>{devosDemo.prompt}
      </p>

      <div className="mt-3">
        {done ? (
          <button type="button" onClick={() => setShown(-1)} className="btn btn-ghost">
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        ) : (
          <button type="button" onClick={play} disabled={running} className="btn btn-primary">
            <Play size={14} aria-hidden /> {running ? 'Investigating…' : 'Replay the run'}
          </button>
        )}
      </div>

      <div aria-live="polite">
        {shown > 0 && (
          <ol className="mt-4 space-y-2">
            {devosDemo.steps.slice(0, shown).map((s, i) => (
              <li key={i} className="flex flex-wrap items-baseline gap-x-3 rounded-md border border-border bg-surface px-3 py-2 text-sm">
                <Wrench size={13} aria-hidden className="translate-y-0.5 text-accent" />
                <span className="font-mono text-xs">{s.tool}({s.args})</span>
                <span className="text-muted">{s.note}</span>
              </li>
            ))}
          </ol>
        )}
        {done && (
          <div className="mt-4 rounded-md border border-accent p-3 text-sm">
            <p className="font-medium text-accent">What it found</p>
            {devosDemo.answer.map((p) => <p key={p} className="mt-2 text-muted">{p}</p>)}
          </div>
        )}
      </div>
    </div>
  )
}
