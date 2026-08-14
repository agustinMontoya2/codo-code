import { InstagramIcon, LogoIcon } from "../ui/icons";
import { NAV_LINKS } from "../../data/nav";
import { SITE } from "../../data/site";
import "./Footer.css";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/codo_code.dev",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#inicio" aria-label="Codo Code — inicio">
              <LogoIcon />
              <span>
                Codo <b>Code</b>
              </span>
            </a>
            <p>
              Software pensado codo a codo para las necesidades reales de cada
              negocio. Web, tiendas online y soluciones a medida.
            </p>
            <div className="footer-social">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  href={href}
                  aria-label={label}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <nav className="footer-col" aria-label="Navegación">
            <h4>Navegación</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a className="c-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  className="c-link"
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contacto">Hablemos de tu proyecto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Codo Code. Todos los derechos reservados.</span>
          <span>Software pensado codo a codo.</span>
        </div>
      </div>
    </footer>
  );
}
