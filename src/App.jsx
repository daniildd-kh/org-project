import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutProjectPage } from './pages/AboutProjectPage.jsx'
import { SectionPage } from './pages/SectionPage.jsx'
import { SectionsPage } from './pages/SectionsPage.jsx'
import { SourcesPage } from './pages/SourcesPage.jsx'
import { sections } from './data/sections.js'

const normalizeHash = () => window.location.hash.replace(/^#/, '') || '/'

function App() {
  const [route, setRoute] = useState(normalizeHash)

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = normalizeHash()
      setRoute(nextRoute)
      if (nextRoute !== '/about/team') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (route !== '/about/team') return

    window.requestAnimationFrame(() => {
      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [route])

  const currentSection = useMemo(() => {
    const match = route.match(/^\/sections\/([^/]+)$/)
    return match ? sections.find((section) => section.id === match[1]) : null
  }, [route])

  let page = <HomePage />

  if (route === '/about' || route === '/about/team') {
    page = <AboutProjectPage />
  } else if (route === '/sections') {
    page = <SectionsPage />
  } else if (route === '/sources') {
    page = <SourcesPage />
  } else if (currentSection) {
    page = <SectionPage section={currentSection} />
  }

  return (
    <div className="site-shell">
      <Header route={route} />
      <main>{page}</main>
      <Footer />
    </div>
  )
}

export default App
