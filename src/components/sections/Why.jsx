import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import './Why.css'

const REASONS = [
  {
    num: '01',
    title: (
      <>
        Soluciones <u>a medida</u>
      </>
    ),
    text: 'No adaptamos tu negocio a una plantilla. Adaptamos la solución a cómo funciona tu negocio.',
    delay: 0,
  },
  {
    num: '02',
    title: (
      <>
        Comunicación <u>directa</u>
      </>
    ),
    text: 'Trabajás con las personas que desarrollan tu proyecto. Sin intermediarios, sin respuestas automáticas.',
    delay: 0.06,
  },
  {
    num: '03',
    title: (
      <>
        Tecnología <u>sin complicaciones</u>
      </>
    ),
    text: 'De la parte técnica nos encargamos nosotros. Vos seguís concentrado en tu negocio.',
    delay: 0.12,
  },
  {
    num: '04',
    title: (
      <>
        Calidad <u>sin costos innecesarios</u>
      </>
    ),
    text: 'Construimos soluciones profesionales, sumando solo lo que aporta valor real a tu proyecto.',
    delay: 0.18,
  },
]

export default function Why() {
  return (
    <section id="porque" className="section">
      <div className="container">
        <SectionHead eyebrow="Por qué Codo Code" title="Diferencias que se notan cuando trabajás con nosotros." />
        <div className="reasons-grid">
          {REASONS.map(({ num, title, text, delay }) => (
            <Reveal as="div" className="reason" key={num} delay={delay}>
              <p className="reason-num">{num}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}