import { links } from './links'

export type Part = string | { text: string; href: string }

export interface Stat {
  value: string
  parts: Part[]
}

// Only claims that already appear elsewhere on the page.
export const impact: Stat[] = [
  {
    value: '3 yrs',
    parts: [
      'building LLM systems at ',
      { text: 'Sogedes', href: links.sogedes },
      ' for the ',
      { text: 'ai.fctry', href: links.aiFctry },
      ' platform',
    ],
  },
  { value: 'Agents with boundaries', parts: ['LangGraph harnesses with explicit tool limits and execution state'] },
  { value: 'Voice, end to end', parts: ['STT → LLM → TTS with intent routing and human escalation'] },
  { value: 'Quality · latency · cost', parts: ['How I benchmark and evaluate models'] },
]
