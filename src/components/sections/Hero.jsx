import Reveal from "../ui/Reveal";
import { ArrowIcon, CheckIcon } from "../ui/icons";
import "./Hero.css";

const TRUST_ITEMS = [
  "Sin conocimientos técnicos",
  "Comunicación directa",
  "Presupuesto claro",
];

const CHART_BARS = [
  { height: 55, strong: true },
  { height: 75, strong: false },
  { height: 40, strong: false },
  { height: 90, strong: true },
  { height: 60, strong: false },
];

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
            Desarrollamos páginas web, tiendas online y soluciones digitales
            adaptadas a las necesidades reales de tu negocio. Sin jerga técnica:
            vos contás qué necesitás, nosotros nos encargamos del resto.
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
      </div>
    </section>
  );
}
