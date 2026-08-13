import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { ProcessCheckIcon } from '../ui/icons'
import './Process.css'

const STEPS = [
  {
    num: '01',
    title: 'Entendemos',
    text: 'Conocemos tu negocio, tus necesidades y qué querés conseguir.',
    delay: 0,
  },
  {
    num: '02',
    title: 'Diseñamos',
    text: 'Definimos cómo debería funcionar la solución antes de desarrollar nada.',
    delay: 0.08,
  },
  {
    num: '03',
    title: 'Desarrollamos',
    text: 'Construimos el producto con tecnología moderna y buenas prácticas.',
    delay: 0.16,
  },
  {
    num: '04',
    title: 'Lanzamos',
    text: 'Ponemos la solución en funcionamiento y te acompañamos en el proceso.',
    delay: 0.24,
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container">
        <SectionHead eyebrow="Cómo trabajamos" title="Cuatro pasos simples. Vos ponés la idea, nosotros el resto." />
        <div className="steps">
          {STEPS.map(({ num, title, text, delay }) => (
            <Reveal as="div" className="step" key={num} delay={delay}>
              <p className="step-num">{num}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="process-note">
          <ProcessCheckIcon />
          <div>
            <h3>Vos no necesitás saber nada de tecnología.</h3>
            <p>
              Nosotros nos encargamos de la parte técnica y te vamos explicando cada paso en simple, para que siempre
              sepas en qué punto está tu proyecto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}