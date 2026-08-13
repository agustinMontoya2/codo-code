import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import './About.css'

const ABOUT_POINTS = [
  'Trabajás directo con quien desarrolla tu proyecto.',
  'Te explicamos todo en simple, sin jerga.',
  'El proyecto es tuyo. La tecnología, nuestra.',
]

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
        </Reveal>
      </div>
    </section>
  )
}