import { links } from './links'

export interface ProjectLink {
  label: string
  href: string
}

export interface FlowStep {
  label: string
  sub?: string
  highlight?: boolean
}

export interface Project {
  id: string
  title: string
  summary: string
  howItWorks: string[]
  highlights: string[]
  tech: string[]
  links: ProjectLink[]
  demo?: 'devos' | 'pr-reviewer'
  flow: FlowStep[]
}

export interface LearningProject {
  id: string
  title: string
  summary: string
  tech: string[]
  repo: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    id: 'devos-mcp',
    title: 'DevOS MCP',
    summary:
      'A Model Context Protocol server that gives an LLM sandboxed, read-only access to a local project’s files, logs and git history.',
    howItWorks: [
      'Every filesystem call passes through a single security chokepoint.',
      'Paths are resolved against a sandbox root; traversal and symlink escapes are rejected.',
      'File-type and size limits apply, and the server is read-only by design.',
    ],
    highlights: [
      '38 automated tests, including path traversal, symlink escape and command injection cases.',
      'Demonstrated with Gemini autonomously chaining four tool calls to find a real bug from only “something is wrong with the app”.',
    ],
    tech: ['Python', 'MCP', 'Gemini API', 'pytest'],
    links: [
      { label: 'Repository', href: links.devosRepo },
      { label: 'README', href: links.devosReadme },
      { label: 'SAMPLE_OUTPUT.md', href: links.devosSampleOutput },
    ],
    demo: 'devos',
    flow: [
      { label: 'LLM', sub: 'Gemini' },
      { label: 'MCP server', sub: 'tool calls' },
      { label: 'Security chokepoint', sub: 'sandbox root · no traversal or symlink escapes · type and size limits', highlight: true },
      { label: 'Project files', sub: 'files · logs · git history, read-only' },
    ],
  },
  {
    id: 'pr-reviewer',
    title: 'Automated PR Reviewer & Security Scanner',
    summary:
      'A FastAPI service on Fly.io that reviews every pull request for security issues and posts the findings back as a PR comment.',
    howItWorks: [
      'Receives GitHub webhooks and verifies their cryptographic signature.',
      'Fetches the pull request diff and runs it through the Gemini API for security review.',
      'Posts the findings back to the pull request as a comment, automatically.',
    ],
    highlights: [
      'Catches hardcoded secrets, SQL injection and three other vulnerability classes.',
      '24 tests; GitHub Actions runs the suite and redeploys the service on every push.',
    ],
    tech: ['Python', 'FastAPI', 'PyGithub', 'Gemini API', 'Docker', 'Fly.io', 'GitHub Actions'],
    links: [
      { label: 'Repository', href: links.prReviewerRepo },
      { label: 'Real review on PR #5', href: links.prReviewerPr5 },
    ],
    demo: 'pr-reviewer',
    flow: [
      { label: 'GitHub webhook', sub: 'PR opened or updated' },
      { label: 'Verify signature', sub: 'reject anything unsigned', highlight: true },
      { label: 'Fetch diff' },
      { label: 'Gemini review', sub: 'security findings' },
      { label: 'PR comment', sub: 'posted automatically' },
    ],
  },
]

export const learningProjects: LearningProject[] = [
  {
    id: 'sliding-puzzle',
    title: 'Sliding Box Puzzle',
    summary: 'Browser puzzle game with selectable map backgrounds.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    repo: links.slidingPuzzleRepo,
    image: '/images/Puzzle1.png',
    imageAlt: 'Sliding box puzzle game board',
  },
  {
    id: 'chat-analyzer',
    title: 'WhatsApp Chat Analyzer',
    summary: 'Streamlit app for chat sentiment and activity analysis.',
    tech: ['Python', 'Streamlit', 'NLP'],
    repo: links.chatAnalyzerRepo,
    image: '/images/ChatAnalysis.png',
    imageAlt: 'WhatsApp chat analyzer dashboard',
  },
  {
    id: 'ana-chatbot',
    title: 'Ana — College Enquiry Chatbot',
    summary: 'College enquiry chatbot built on IBM Watson speech-to-text and text-to-speech.',
    tech: ['Python', 'IBM Watson', 'STT/TTS'],
    repo: links.anaChatbotRepo,
    image: '/images/Chatbot.JPG',
    imageAlt: 'Ana chatbot interface',
  },
  {
    id: 'hepatitis-eda',
    title: 'Hepatitis A&B EDA in R',
    summary: 'Data visualisation coursework.',
    tech: ['R', 'Data Visualisation'],
    repo: links.hepatitisRepo,
    image: '/images/map2.png',
    imageAlt: 'US map shaded by recorded Hepatitis B cases per 1000 people',
  },
]
