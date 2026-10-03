import { useEffect, useRef, useState } from 'react'
import { Loader2, Play, RotateCcw } from 'lucide-react'
import { prDemo } from '../data/demo'

type State = 'idle' | 'running' | 'done'

export default function PrReviewDemo() {
  const [state, setState] = useState<State>('idle')
  const timer = useRef<number>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const run = () => {
    setState('running')
    timer.current = window.setTimeout(() => setState('done'), 1400)
  }

  return (
    <div className="no-print mt-6 rounded-lg border border-border bg-bg p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium">See what the reviewer flags in this diff</p>
        <p className="text-xs text-muted">
          Sample run from{' '}
          <a href={prDemo.source} target="_blank" rel="noreferrer" className="text-accent underline">PR #1</a>
          {' '}on my demo repo. The findings are copied from what the bot actually posted.
        </p>
      </div>

      <figure className="mt-3">
        <figcaption className="font-mono text-xs text-muted">{prDemo.filename}</figcaption>
        <pre className="mt-1 overflow-x-auto rounded-md border border-border bg-surface p-3 font-mono text-xs leading-relaxed">
          {prDemo.code.map((line, i) => (
            <div key={i}>
              <span aria-hidden className="mr-3 inline-block w-4 select-none text-right text-muted">{i + 1}</span>
              {line || ' '}
            </div>
          ))}
        </pre>
      </figure>

      <div className="mt-3">
        {state === 'done' ? (
          <button type="button" onClick={() => setState('idle')} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        ) : (
          <button
            type="button"
            onClick={run}
            disabled={state === 'running'}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-on-accent disabled:opacity-70"
          >
            {state === 'running' ? <Loader2 size={14} aria-hidden className="animate-spin motion-reduce:animate-none" /> : <Play size={14} aria-hidden />}
            {state === 'running' ? 'Reviewing…' : 'Run security review'}
          </button>
        )}
      </div>

      <div aria-live="polite">
        {state === 'done' && (
          <ul className="mt-4 space-y-3">
            {prDemo.findings.map((f) => (
              <li key={f.location} className="rounded-md border border-border bg-surface p-3 text-sm">
                <p><span className="font-mono text-accent">{f.location}</span> — {f.issue}</p>
                <p className="mt-1 text-muted">Fix: {f.fix}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
