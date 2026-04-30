import { ABOUT_CONTENT, PARTNERS } from './data';

function PartnerLogo({ name, type }: { name: string; type: string }) {
  const initials = name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('');
  return (
    <div className="mm-partner">
      <div className="mm-partner-mark">
        <span>{initials || name[0]}</span>
      </div>
      <div className="mm-partner-meta">
        <div className="mm-partner-name">{name}</div>
        <div className="mm-partner-type">{type}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="mm-about" id="sobre">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Sobre</div>
          <h2 className="mm-section-title">O que é a MOSTRA<span style={{ color: 'var(--mm-pink)' }}>+</span>.</h2>
        </header>
        <div className="mm-about-body">
          <p className="mm-about-lead">{ABOUT_CONTENT.lead}</p>
          <div className="mm-about-grid">
            <div>
              <div className="mm-eyebrow mm-eyebrow--pink">+ Propósito</div>
              <p>{ABOUT_CONTENT.purpose}</p>
            </div>
            <div>
              <div className="mm-eyebrow mm-eyebrow--pink">+ Público</div>
              <p>{ABOUT_CONTENT.audience}</p>
            </div>
            <div>
              <div className="mm-eyebrow mm-eyebrow--pink">+ Valor</div>
              <p>{ABOUT_CONTENT.value}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-partners" id="parcerias">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Parcerias</div>
          <h2 className="mm-section-title">Quem faz acontecer.</h2>
          <p className="mm-section-lead">{ABOUT_CONTENT.partnersLead}</p>
        </header>
        <div className="mm-partners-grid">
          {PARTNERS.map(p => <PartnerLogo key={p.name} {...p} />)}
        </div>
      </section>
    </>
  );
}
