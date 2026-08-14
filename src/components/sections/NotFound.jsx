import { useEffect } from "react";
import { ArrowIcon, LogoIcon } from "../ui/icons";
import Eyebrow from "../ui/Eyebrow";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Codo Code - Página no encontrada";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="notfound-page">
      <section className="notfound-shell">
        <div className="notfound-brand">
          <a className="logo" href="/" aria-label="Codo Code — inicio">
            <LogoIcon />
            <span>
              Codo <b>Code</b>
            </span>
          </a>
          <span className="notfound-kicker">404</span>
        </div>

        <div className="notfound-copy">
          <Eyebrow>Error 404</Eyebrow>
          <h1>Página no encontrada.</h1>
          <p>
            La URL que buscás no existe o fue movida. Volvé al inicio o
            escribinos si querés retomar desde el contacto.
          </p>
        </div>

        <div className="notfound-actions">
          <a className="btn btn-primary" href="/">
            Volver al inicio
            <ArrowIcon />
          </a>
          <a className="btn btn-ghost" href="/#contacto">
            Ir a contacto
          </a>
        </div>
      </section>
    </main>
  );
}
