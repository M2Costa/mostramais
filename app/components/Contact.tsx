const CHANNELS = [
  { label: 'Curadoria', value: 'curadoria@mostramais.edu', href: 'mailto:curadoria@mostramais.edu' },
  { label: 'Parcerias', value: 'parcerias@mostramais.edu', href: 'mailto:parcerias@mostramais.edu' },
  { label: 'Imprensa',  value: 'imprensa@mostramais.edu',  href: 'mailto:imprensa@mostramais.edu' },
];

const SOCIAL = [
  { name: 'Instagram', handle: '@mostramais', href: '#', color: 'var(--mm-pink)' },
  { name: 'Behance',   handle: '/mostramais', href: '#', color: 'var(--mm-blue)' },
  { name: 'YouTube',   handle: '@mostramais', href: '#', color: 'var(--mm-orange)' },
  { name: 'TikTok',    handle: '@mostramais', href: '#', color: '#111' },
];

const LINKS = [
  { label: 'Edital 2026 (PDF)',          meta: '1.2 MB · 24 páginas', href: '#' },
  { label: 'Regulamento da curadoria',   meta: '0.4 MB · 8 páginas',  href: '#' },
  { label: 'Manual de marca MOSTRA+',    meta: '3.1 MB · 8 páginas',  href: '#' },
  { label: 'Arquivo aberto (CSV)',        meta: '240 projetos · 06 edições', href: '#' },
  { label: 'Política de acessibilidade', meta: 'Web · Montagem · Publicações', href: '#' },
];

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
          <p>Escola de Design<br />Av. Antônio Carlos, 6627 · Pampulha<br />Belo Horizonte · MG · 31270-901</p>
        </div>
        <div>
          <div className="mm-eyebrow">+ Atendimento</div>
          <p>Segunda a sexta · 14h00 às 18h00<br />Sala 112 · Bloco B<br />Durante a Mostra: 10h00 às 21h00</p>
        </div>
      </div>
    </section>
  );
}
