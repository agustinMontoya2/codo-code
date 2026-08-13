import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import LinkArrow from '../ui/LinkArrow'
import { ResultCheckIcon } from '../ui/icons'
import './Projects.css'

function BarHeader({ chip, online = false }) {
  return (
    <div className="pv-bar">
      <span className="pv-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="pv-chip">
        <i className={online ? 'on' : ''} />
        {chip}
      </span>
      <span className="pv-barline" />
    </div>
  )
}

function StoreVisual() {
  return (
    <div className="pv-grid">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <div className="pv-tile" key={index}>
          <div className={`pv-img${index === 0 || index === 4 ? ' hot' : ''}`} />
          <div className="pv-l" />
          <div className="pv-l s" />
          <div className="pv-l price" />
        </div>
      ))}
    </div>
  )
}

const CALENDAR_ROWS = [
  [0, 1, 0, 1, 2, 0, 1],
  [2, 0, 1, 0, 0, 1, 0],
]

function CalendarVisual() {
  return (
    <div className="pv-cal">
      {Array.from({ length: 7 }).map((_, index) => (
        <span className="pv-dow" key={`dow-${index}`} />
      ))}
      {CALENDAR_ROWS.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const classNames = ['pv-day']
          if (cell === 1) classNames.push('on')
          if (cell === 2) classNames.push('sel')
          return <span className={classNames.join(' ')} key={`${rowIndex}-${cellIndex}`} />
        }),
      )}
    </div>
  )
}

const BAR_WIDTHS = [82, 47, 68, 90]

function BarsVisual() {
  return (
    <div className="pv-rows">
      {BAR_WIDTHS.map((width, index) => (
        <div className="pv-row" key={index}>
          <span className="pv-label" />
          <span className="pv-track">
            <span className={`pv-fill${index === 1 ? ' warn' : ''}`} style={{ width: `${width}%` }} />
          </span>
        </div>
      ))}
    </div>
  )
}

function Project({ featured = false, bar, Visual, chip, title, desc, tags, result, linkLabel, delay = 0 }) {
  return (
    <Reveal as="article" className={featured ? 'project project-featured' : 'project'} delay={delay}>
      <div className="pv" aria-hidden="true">
        <BarHeader chip={bar} online={featured} />
        <Visual />
      </div>
      <div className="project-body">
        <span className="chip">{chip}</span>
        <h3>{title}</h3>
        <p className="desc">{desc}</p>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="result">
          <ResultCheckIcon />
          <span>
            <b>Resultado:</b> {result}
          </span>
        </p>
        <LinkArrow href="#contacto">{linkLabel}</LinkArrow>
      </div>
    </Reveal>
  )
}

const STACK_PROJECTS = [
  {
    bar: 'Agenda online',
    Visual: CalendarVisual,
    chip: 'Web + turnos',
    title: 'Estudio Dental Roca',
    desc: 'Los pacientes reservaban por teléfono y la agenda se manejaba en papel.',
    tags: ['Turnos online', 'Recordatorios automáticos'],
    result: 'los pacientes se autogestionan y el equipo recuperó horas de administración cada semana.',
    linkLabel: 'Ver el proyecto',
    delay: 0.08,
  },
  {
    bar: 'Sistema interno',
    Visual: BarsVisual,
    chip: 'Sistema a medida',
    title: 'Distribuidora Andina',
    desc: 'El stock se controlaba en planillas compartidas. Un error de tipeo podía costar un pedido entero.',
    tags: ['Stock en tiempo real', 'Reportes automáticos'],
    result: 'inventario al día para más de 4.000 productos, sin planillas, sin errores, sin doble carga.',
    linkLabel: 'Ver el proyecto',
    delay: 0.16,
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <Reveal className="projects-head">
          <div>
            <Eyebrow>Proyectos</Eyebrow>
            <h2>Trabajos que hablan por nosotros.</h2>
          </div>
        </Reveal>
        <div className="projects-grid">
          <Project
            featured
            bar="Tienda en línea"
            Visual={StoreVisual}
            chip="Tienda online"
            title="Doña Rosa — Dulces artesanales"
            desc={
              <>
                Un productor local que vendía por mensajes de texto necesitaba <b>vender solo, sin intermediarios</b> y
                cobrar de forma confiable.
              </>
            }
            tags={['Catálogo', 'Pagos online', 'Envíos integrados']}
            result="la tienda funciona 24/7 y el dueño pasó de perseguir pedidos por mensaje a recibir pedidos y pagos en su web."
            linkLabel="Ver el caso"
          />
          <div className="project-stack">
            {STACK_PROJECTS.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </div>
        <Reveal as="p" className="projects-outro">
          El próximo caso podría ser el tuyo — <LinkArrow href="#contacto">Contanos tu proyecto</LinkArrow>
        </Reveal>
      </div>
    </section>
  )
}