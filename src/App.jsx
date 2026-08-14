import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Problems from './components/sections/Problems'
import Process from './components/sections/Process'
import Projects from './components/sections/Projects'
import Why from './components/sections/Why'
import About from './components/sections/About'
import FinalCta from './components/sections/FinalCta'
import NotFound from './components/sections/NotFound'

const isNotFound =
  typeof window !== 'undefined' && !['/', '/index.html'].includes(window.location.pathname)

export default function App() {
  if (isNotFound) {
    return <NotFound />
  }

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Services />
        <Problems />
        <Process />
        <Projects />
        <Why />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
