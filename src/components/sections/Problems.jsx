import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import LinkArrow from '../ui/LinkArrow'
import './Problems.css'

const PROBLEMS = [
  {
    num: '01',
    text: 'Tu negocio creció y las herramientas que usás ya no alcanzan.',
    delay: 0,
  },
  {
    num: '02',
    text: 'Seguís manejando información a mano: planillas, cuadernos o mensajes.',
    delay: 0.05,
  },
  {
    num: '03',
    text: 'Tus clientes te escriben por WhatsApp para hacer cosas que podrían hacerse solas.',
    delay: 0.1,
  },
  {
    num: '04',
    text: 'Tenés una idea clara, pero no sabés cómo convertirla en software.',
    delay: 0.15,
  },
  {
    num: '05',
    text: 'Necesitás una web, pero no querés terminar con una plantilla genérica.',
    delay: 0.2,
  },
]

export default function Problems() {
  return (
    <section id="problemas" className="section">
      <div className="container problems-grid">
        <Reveal className="problems-intro">
          <Eyebrow>Problemas que resolvemos</Eyebrow>
          <h2>Si esto te suena familiar, no sos vos. Son las herramientas que ya no dan más.</h2>
          <p className="note">
            Son las situaciones que más escuchamos antes de empezar un proyecto. Si te reconocés en alguna, hay
            solución.
          </p>
        </Reveal>
        <ul className="problems-list">
          {PROBLEMS.map(({ num, text, delay }) => (
            <Reveal as="li" key={num} delay={delay}>
              <span className="num">{num}</span>
              <p className="txt">{text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="problems-cta">
          <p>Si te reconocés en más de una, la solución existe.</p>
          <LinkArrow href="#contacto">Hablemos</LinkArrow>
        </Reveal>
      </div>
    </section>
  )
}