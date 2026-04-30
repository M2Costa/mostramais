import { SCHEDULE } from './data';

export default function Schedule() {
  return (
    <section className="mm-schedule" id="cronograma">
      <header className="mm-section-head">
        <div className="mm-eyebrow">+ Cronograma</div>
        <h2 className="mm-section-title">Edital 02ª edição.</h2>
        <p className="mm-section-lead">Oito fases, de janeiro a outubro de 2026. Salve as datas — elas não se mexem.</p>
      </header>
      <ol className="mm-timeline">
        {SCHEDULE.map((s, i) => (
          <li key={i} className={`mm-tl-item mm-tl-item--${s.status}`} style={{ '--dot-color': s.color } as React.CSSProperties}>
            <div className="mm-tl-rail" aria-hidden>
              <div className="mm-tl-dot">
                <span className="mm-tl-dot-inner"></span>
              </div>
            </div>
            <div className="mm-tl-card">
              <div className="mm-tl-head">
                <span className="mm-tl-phase">Fase {s.phase}</span>
                <span className="mm-tl-status">
                  {s.status === 'done' ? 'Concluída' : s.status === 'current' ? 'Em andamento' : 'Próxima'}
                </span>
              </div>
              <div className="mm-tl-date">{s.date}</div>
              <h4 className="mm-tl-title">{s.title}</h4>
              <p className="mm-tl-body">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
