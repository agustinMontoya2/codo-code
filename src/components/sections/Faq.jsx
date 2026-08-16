import { useEffect, useRef } from 'react'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import LinkArrow from '../ui/LinkArrow'
import { ChevronDownIcon } from '../ui/icons'
import './Faq.css'

const EASE_OUT = (t) => 1 - Math.pow(1 - t, 3)
const DURATION = 380

const FAQ_ITEMS = [
  {
    id: 'soluciones',
    q: '¿Qué tipo de soluciones desarrolla Codo Code?',
    a: 'Desarrollamos sitios web, tiendas online, sistemas internos y software a medida, adaptados a las necesidades de cada negocio.',
  },
  {
    id: 'a-medida',
    q: '¿Desarrollan soluciones a medida o utilizan plantillas?',
    a: 'Desarrollamos soluciones adaptadas a las necesidades de cada proyecto. Podemos utilizar herramientas y tecnologías existentes cuando aportan valor, pero buscamos que el resultado se ajuste realmente a tu negocio.',
  },
  {
    id: 'precio',
    q: '¿Cuánto cuesta desarrollar una solución?',
    a: 'El precio depende de las características y el alcance de cada proyecto. Analizamos lo que necesitás y te presentamos una propuesta clara antes de comenzar.',
  },
  {
    id: 'tiempos',
    q: '¿Cuánto tiempo lleva desarrollar un proyecto?',
    a: 'El tiempo depende de la complejidad y las funcionalidades del proyecto. Definimos los tiempos estimados junto con el alcance antes de comenzar el desarrollo.',
  },
  {
    id: 'alcance',
    q: '¿Qué incluye el desarrollo?',
    a: 'Cada proyecto tiene un alcance definido previamente. La propuesta especifica las funcionalidades, características y servicios incluidos para que tengas claridad sobre qué recibirás al finalizar.',
  },
  {
    id: 'dominio',
    q: '¿Se encargan también del dominio y hosting?',
    a: 'Sí. Podemos encargarnos de la configuración y puesta en producción de tu solución, incluyendo dominio y hosting cuando sea necesario.',
  },
  {
    id: 'empezar',
    q: '¿Cómo puedo empezar un proyecto con Codo Code?',
    a: 'Podés contactarnos y contarnos qué necesitás. Analizamos tu idea, evaluamos la solución más adecuada y te presentamos una propuesta para comenzar.',
  },
]

function FaqItem({ item }) {
  const detailsRef = useRef(null)
  const wrapRef = useRef(null)
  const innerRef = useRef(null)
  const animRef = useRef(null)
  const curRef = useRef(0)

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  const animate = (from, to, opening) => {
    const start = performance.now()
    const step = (now) => {
      const t = Math.min(1, (now - start) / DURATION)
      curRef.current = from + (to - from) * EASE_OUT(t)
      wrapRef.current.style.height = `${curRef.current}px`
      if (t < 1) {
        animRef.current = requestAnimationFrame(step)
      } else {
        curRef.current = to
        wrapRef.current.style.height = `${to}px`
        if (!opening) detailsRef.current.open = false
      }
    }
    animRef.current = requestAnimationFrame(step)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const opening = !detailsRef.current.open
    if (opening) detailsRef.current.open = true
    animate(curRef.current, opening ? innerRef.current.scrollHeight : 0, opening)
  }

  return (
    <details className="faq-item" ref={detailsRef}>
      <summary onClick={handleClick}>
        {item.q}
        <span className="faq-toggle" aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </summary>
      <div className="faq-a" ref={wrapRef} style={{ overflow: 'hidden', height: 0 }}>
        <p ref={innerRef}>{item.a}</p>
      </div>
    </details>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container faq-grid">
        <Reveal className="faq-intro">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2>Lo que nos preguntan antes de empezar.</h2>
          <p className="lead">Si la duda es otra, contanos qué necesitás y te respondemos directo.</p>
          <LinkArrow href="#contacto" className="faq-cta">
            Hablar con Codo Code
          </LinkArrow>
        </Reveal>
        <Reveal className="faq-list" delay={0.1}>
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}