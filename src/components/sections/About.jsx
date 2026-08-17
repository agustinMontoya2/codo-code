import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { ExternalIcon } from '../ui/icons'
import './About.css'

const ABOUT_POINTS = [
  'Trabajás directo con quien desarrolla tu proyecto.',
  'Te explicamos todo en simple, sin jerga.',
  'El proyecto es tuyo. La tecnología, nuestra.',
]

const PORTFOLIO_URL = 'https://agustin-montoya.codo-code.dev/'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <Reveal className="about-intro">
          <Eyebrow>Sobre Codo Code</Eyebrow>
          <h2>Un estudio, no una corporación.</h2>
        </Reveal>
        <Reveal className="about-body" delay={0.1}>
          <p>
            Codo Code nace con una idea simple: trabajar <b>codo a codo</b> con cada cliente para construir software
            que realmente resuelva sus necesidades. Nada de grandes estructuras ni mensajes corporativos. Un equipo
            chico, directo y con foco.
          </p>
          <p>
            Creemos que la tecnología no debería exigirte ser técnico. Nuestro trabajo es entender tu problema, pensarlo
            juntos y hacértelo fácil.
          </p>
          <div className="about-pull">“Trabajamos codo a codo. De la primera idea al lanzamiento.”</div>
          <ul className="about-list">
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <i />
                {point}
              </li>
            ))}
          </ul>
          <Reveal className="about-person" delay={0.2}>
            <p className="p-label">Detrás de Codo Code</p>
            <h3>
              Agustín <span>— Fundador de Codo Code</span>
            </h3>
            <p className="bio">
              Soy quien está detrás de cada proyecto, de la primera idea a la puesta en marcha: te escucho, lo pienso
              con vos y me encargo de que funcione. Sin intermediarios ni mensajes corporativos.
            </p>
            <a
              className="link-arrow"
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mi portfolio
              <ExternalIcon />
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  )
}