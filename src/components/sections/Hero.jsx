import Reveal from '../ui/Reveal'
import { ArrowIcon, CheckIcon } from '../ui/icons'
import './Hero.css'

const TRUST_ITEMS = ['Sin conocimientos técnicos', 'Comunicación directa', 'Presupuesto claro']

const CHART_BARS = [
  { height: 55, strong: true },
  { height: 75, strong: false },
  { height: 40, strong: false },
  { height: 90, strong: true },
  { height: 60, strong: false },
]

function HeroVisual() {
  return (
    <Reveal as="div" className="hero-visual" delay={0.2} aria-hidden="true">
      <div className="hv-grid" />
      <div className="hv-ring" />
      <div className="hv-card-main">
        <div className="hv-bar">
          <i />
          <i />
          <i />
          <span className="hv-bar-line" />
        </div>
        <div className="hv-lines">
          <span className="hv-l" />
          <span className="hv-l w60" />
          <span className="hv-l w45" />
        </div>
        <div className="hv-chart">
          {CHART_BARS.map(({ height, strong }) => (
            <div className="hv-bar-col" key={`${height}-${strong}`}>
              <span className={`hv-col${strong ? ' strong' : ''}`} style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="hv-card-side">
        <div className="hv-node-head">
          <span />
          <em />
        </div>
        <div className="hv-nodes">
          <svg viewBox="0 0 100 40" fill="none" aria-hidden="true">
            <path d="M15 20 H 50 M 50 20 H 85" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="3 4" />
          </svg>
          <span className="hv-node" />
          <span className="hv-node mid" />
          <span className="hv-node on" />
        </div>
      </div>
      <span className="hv-pill">
        Web · Tienda online · <b>A medida</b>
      </span>
    </Reveal>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <Reveal as="p" className="eyebrow">
            Estudio de desarrollo de software
          </Reveal>
          <Reveal as="h1" delay={0.08}>
            Software pensado <span className="codo">codo a codo</span>.
          </Reveal>
          <Reveal as="p" className="lead" delay={0.16}>
            Desarrollamos páginas web, tiendas online y soluciones digitales adaptadas a las necesidades reales de tu
            negocio. Sin jerga técnica: vos contás qué necesitás, nosotros nos encargamos del resto.
          </Reveal>
          <Reveal as="div" className="hero-ctas" delay={0.24}>
            <a className="btn btn-primary" href="#contacto">
              Hablemos de tu proyecto
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#proyectos">
              Ver proyectos
            </a>
          </Reveal>
          <Reveal as="div" className="hero-trust" delay={0.32}>
            {TRUST_ITEMS.map((item) => (
              <span key={item}>
                <CheckIcon />
                {item}
              </span>
            ))}
          </Reveal>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}