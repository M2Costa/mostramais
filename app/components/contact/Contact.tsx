import { CHANNELS, SOCIAL, LINKS, ADDRESS, HOURS } from './data';

export default function Contact() {
  return (
    <section className="mm-contact" id="contato">
      <header className="mm-section-head">
        <div className="mm-eyebrow">+ Contato</div>
        <h2 className="mm-section-title">Fale com a MOSTRA<span style={{ color: 'var(--mm-pink)' }}>+</span>.</h2>
        <p className="mm-section-lead">Três caixas de e-mail, quatro redes sociais, cinco documentos abertos. Respondemos em até 48h úteis.</p>
      </header>

      <div className="mm-contact-grid">
        <div className="mm-contact-col">
          <div className="mm-eyebrow mm-eyebrow--pink">+ E-mail</div>
          <ul className="mm-link-list">
            {CHANNELS.map(c => (
              <li key={c.value}>
                <a className="mm-link-row" href={c.href}>
                  <span className="mm-link-lbl">{c.label}</span>
                  <span className="mm-link-val">{c.value}</span>
                  <span className="mm-link-arrow" aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mm-contact-col">
          <div className="mm-eyebrow mm-eyebrow--pink">+ Redes sociais</div>
          <ul className="mm-social-grid">
            {SOCIAL.map(s => (
              <li key={s.name}>
                <a className="mm-social-card" href={s.href} style={{ '--acc': s.color } as React.CSSProperties}>
                  <span className="mm-social-name">{s.name}</span>
                  <span className="mm-social-handle">{s.handle}</span>
                  <span className="mm-social-arrow" aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mm-contact-col mm-contact-col--wide">
          <div className="mm-eyebrow mm-eyebrow--pink">+ Links úteis</div>
          <ul className="mm-link-list">
            {LINKS.map(l => (
              <li key={l.label}>
                <a className="mm-link-row" href={l.href}>
                  <span className="mm-link-val">{l.label}</span>
                  <span className="mm-link-lbl">{l.meta}</span>
                  <span className="mm-link-arrow" aria-hidden>↓</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mm-contact-addr">
        <div>
          <div className="mm-eyebrow">+ Endereço</div>
          <p>{ADDRESS.map((line, i) => <span key={i}>{line}{i < ADDRESS.length - 1 && <br />}</span>)}</p>
        </div>
        <div>
          <div className="mm-eyebrow">+ Atendimento</div>
          <p>{HOURS.map((line, i) => <span key={i}>{line}{i < HOURS.length - 1 && <br />}</span>)}</p>
        </div>
      </div>
    </section>
  );
}
