export interface SkillGroupData {
  name: string
  items: string[]
}

// Fill each group with your real skills. Languages carries proficiency levels.
export const skills: SkillGroupData[] = [
  { name: 'Core AI & Agentic', items: ['LangGraph', 'LangChain', 'RAG', 'MCP', 'Gemini API', 'Tool Calling', 'Agent Harness Design', 'Vector Search', 'Prompt & Context Engineering'] },
  { name: 'Backend & Data', items: ['Python', 'FastAPI', 'Pydantic', 'Redis', 'ChromaDB', 'PostgreSQL', 'REST APIs', 'Async', 'Data Pipelines'] },
  { name: 'Cloud & DevOps', items: ['Docker', 'Fly.io', 'GitHub Actions', 'Azure AI', 'Google Cloud (Vertex AI)', 'CI/CD', 'Git', 'pytest'] },
  { name: 'ML & NLP', items: ['Hugging Face', 'PyTorch', 'TensorFlow', 'spaCy', 'NER', 'Microsoft Presidio', 'Intent Classification', 'GANs'] },
  { name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'HTML/CSS'] },
  { name: 'Languages', items: ['English (fluent)', 'German (A2)'] },
]
