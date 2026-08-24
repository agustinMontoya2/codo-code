import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import LinkArrow from "../ui/LinkArrow";
import { ResultCheckIcon } from "../ui/icons";
import { PROJECTS } from "../../data/projects";
import "./Projects.css";

function BarHeader({ chip, online = false }) {
  return (
    <div className="pv-bar">
      <span className="pv-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="pv-chip">
        <i className={online ? "on" : ""} />
        {chip}
      </span>
      <span className="pv-barline" />
    </div>
  );
}

function MockVisual() {
  return (
    <div className="pv-grid">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <div className="pv-tile" key={index}>
          <div
            className={`pv-img${index === 0 || index === 4 ? " hot" : ""}`}
          />
          <div className="pv-l" />
          <div className="pv-l s" />
          <div className="pv-l price" />
        </div>
      ))}
    </div>
  );
}

function Project({
  featured = false,
  upcoming = false,
  image,
  imageAlt,
  bar,
  chip,
  title,
  desc,
  tags,
  result,
  delay = 0,
}) {
  return (
    <Reveal
      as="article"
      className={featured ? "project project-featured" : "project"}
      delay={delay}
    >
      <div className="pv" aria-hidden={image ? undefined : "true"}>
        <BarHeader chip={bar} online={featured} />
        {image ? (
          <img
            className="pv-shot"
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
          />
        ) : (
          <MockVisual />
        )}
      </div>
      <div className="project-body">
        <div className="project-chips">
          {upcoming && <span className="chip chip-soon">Próximamente</span>}
          <span className="chip">{chip}</span>
        </div>
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
      </div>
    </Reveal>
  );
}

const featuredIndex =
  PROJECTS.findIndex((project) => project.featured) === -1
    ? 0
    : PROJECTS.findIndex((project) => project.featured);
const FEATURED = PROJECTS[featuredIndex];
const STACK = PROJECTS.filter((_, index) => index !== featuredIndex);

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
          <Project key={FEATURED.id} {...FEATURED} delay={0} />
          <div className="project-stack">
            {STACK.map((project, index) => (
              <Project
                key={project.id}
                {...project}
                delay={(index + 1) * 0.08}
              />
            ))}
          </div>
        </div>
        <Reveal as="p" className="projects-outro">
          El próximo caso podría ser el tuyo —{" "}
          <LinkArrow href="#contacto">Contanos tu proyecto</LinkArrow>
        </Reveal>
      </div>
    </section>
  );
}
