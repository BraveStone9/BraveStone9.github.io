import { links } from './links'

export interface Role {
  title: string
  period: string
  bullets?: string[]
  minor?: boolean
}

export interface Employer {
  company: string
  location: string
  roles: Role[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  thesis?: { text: string; href: string }
}

export const employer: Employer = {
  company: 'Sogedes GmbH',
  location: 'Mannheim, Germany',
  roles: [
    {
      title: 'AI Developer',
      period: '12/2024 – 04/2026',
      bullets: [
        'Built LangGraph agent harnesses with explicit tool boundaries and execution state.',
        'Implemented session-based RAG on ChromaDB with Redis session memory, held under a two-second budget for live calls.',
        'Developed end-to-end voice pipelines (STT → LLM → TTS) with intent routing and human escalation.',
        'Added PII masking with Microsoft Presidio and Hugging Face NER before LLM processing.',
        'Benchmarked and evaluated models across quality, latency and cost.',
      ],
    },
    {
      title: 'Generative AI Intern / Working Student',
      period: '04/2023 – 11/2024',
      minor: true,
      bullets: [
        'Built semantic search over vector databases, the groundwork for later RAG systems.',
        'Modernised rule-based chatbots (RASA, DialogFlow CX) into hybrid LLM architectures.',
      ],
    },
  ],
}

export const education: Education = {
  degree: 'M.Sc. Artificial Intelligence and Data Science',
  institution: 'TH Deggendorf + University of South Bohemia (joint degree)',
  period: '2022 – 2025',
  thesis: {
    text: 'GAN-generated synthetic time-series data for smart meter applications. Implemented and compared three generative architectures (TimeGAN, a modified TimeGAN variant, DoppelGANger), designed the modified variant, and built the evaluation methodology.',
    href: links.thesisPdf,
  },
}
