import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import LinkArrow from '../ui/LinkArrow'
import { BagIcon, BrowserIcon, CubeIcon, ListIcon, PlusCircleIcon } from '../ui/icons'
import './Services.css'

const SERVICES = [
  {
    num: '01',
    Icon: CubeIcon,
    title: 'Desarrollo a medida',
    text: 'Software diseñado específicamente para la forma en que funciona tu negocio, no al revés.',
    delay: 0,
  },
  {
    num: '02',
    Icon: BrowserIcon,
    title: 'Páginas web',
    text: 'Sitios profesionales para mostrar tu negocio, tus servicios y tus productos.',
    delay: 0.08,
  },
  {
    num: '03',
    Icon: BagIcon,
    title: 'Tiendas online',
    text: 'Experiencias de compra simples para vender tus productos por internet, sin dolor de cabeza.',
    delay: 0,
  },
  {
    num: '04',
    Icon: ListIcon,
    title: 'Sistemas y herramientas internas',
    text: 'Soluciones para organizar procesos, información y tareas que hoy hacés a mano.',
    delay: 0.08,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Qué hacemos"
          title="Soluciones digitales que se adaptan a cómo funciona tu negocio."
          lead="No vendemos plantillas ni productos genéricos. Construimos la solución que tu negocio necesita, explicada en simple."
        />
        <div className="services-grid">
          {SERVICES.map(({ num, Icon, title, text, delay }) => (
            <Reveal as="article" className="service" key={num} delay={delay}>
              <p className="service-num">{num}</p>
              <span className="service-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
          <Reveal as="article" className="service service--featured">
            <p className="service-num">Tu caso</p>
            <span className="service-icon" aria-hidden="true">
              <PlusCircleIcon />
            </span>
            <h3>¿Tu necesidad no encaja en ninguna de estas?</h3>
            <p>Contanos tu idea igual. Si se puede resolver con software, lo hacemos realidad.</p>
          </Reveal>
        </div>
        <Reveal className="services-cta">
          <LinkArrow href="#contacto">¿Buscás algo más específico? Contanos tu idea</LinkArrow>
        </Reveal>
      </div>
    </section>
  )
}