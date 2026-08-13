import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { ArrowIcon, WhatsAppIcon } from '../ui/icons'
import { SITE } from '../../data/site'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <Reveal className="cta-final">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-inner">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h2>¿Tenés una idea o un problema que podría resolverse con software?</h2>
              <p className="sub">Contanos qué necesitás. Nosotros nos encargamos de pensar cómo hacerlo realidad.</p>
            </div>
            <div className="cta-actions">
              <div className="btn-row">
                <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
                  Hablemos de tu proyecto
                  <ArrowIcon />
                </a>
                <a className="btn btn-band" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}