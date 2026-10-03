import Nav from './components/Nav'
import Hero from './components/Hero'
import ImpactStrip from './components/ImpactStrip'
import Projects from './components/Projects'
import LearningPath from './components/LearningPath'
import Experience from './components/Experience'
import Skills from './components/Skills'
import OffTheClock from './components/OffTheClock'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a href="#projects" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <ImpactStrip />
        <Projects />
        <Experience />
        <Skills />
        <LearningPath />
        <OffTheClock />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Aditya Yadav
      </footer>
    </>
  )
}
