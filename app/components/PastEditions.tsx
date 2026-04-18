'use client';

import { useState } from 'react';

export interface PastEdition {
  id: string;
  edition: string;
  year: string;
  title: string;
  author: string;
  cat: string;
  cColor: string;
  bg: string;
  summary: string;
  media: { kind: string; label: string; color: string }[];
}

export const PAST: PastEdition[] = [
  {
    id: 'p6',
    edition: '06',
    year: '2025',
    title: 'Atlas de Feiras Populares',
    author: 'Clara Siqueira',
    cat: 'GRÁFICO',
    cColor: '#ed3e8c',
    bg: '#f9a52b',
    summary: 'Cartografia ilustrada das feiras livres de Belo Horizonte — tipologia de barracas, fluxos humanos e vocabulário sonoro.',
    media: [
      { kind: 'image', label: 'Capa', color: '#ed3e8c' },
      { kind: 'image', label: 'Interior p.24', color: '#3056a6' },
      { kind: 'video', label: 'Folheio 0:42', color: '#000' },
      { kind: 'image', label: 'Expositor', color: '#f9a52b' },
    ],
  },
  {
    id: 'p5',
    edition: '06',
    year: '2025',
    title: 'Luminária Samambaia',
    author: 'Diego Machado',
    cat: 'PRODUTO',
    cColor: '#f9a52b',
    bg: '#3056a6',
    summary: 'Luminária modular em bambu laminado, inspirada na estrutura de folhagem tropical.',
    media: [
      { kind: 'image', label: 'Peça acesa', color: '#000' },
      { kind: 'image', label: 'Módulos', color: '#f9a52b' },
      { kind: 'video', label: 'Montagem 1:18', color: '#ed3e8c' },
      { kind: 'image', label: 'Expositor', color: '#3056a6' },
    ],
  },
  {
    id: 'p4',
    edition: '05',
    year: '2024',
    title: 'Tipo Curral',
    author: 'Nina Barreto',
    cat: 'GRÁFICO',
    cColor: '#ed3e8c',
    bg: '#2D155B',
    summary: 'Fonte display inspirada nas pichações de currais mineiros dos anos 1950.',
    media: [
      { kind: 'image', label: 'Espécimen', color: '#ed3e8c' },
      { kind: 'image', label: 'Glifos', color: '#fff' },
      { kind: 'image', label: 'Expositor', color: '#2D155B' },
    ],
  },
  {
    id: 'p3',
    edition: '05',
    year: '2024',
    title: 'Vestir o Caminho',
    author: 'Helena Farias',
    cat: 'MODA',
    cColor: '#ed3e8c',
    bg: '#E72818',
    summary: 'Coleção cápsula sobre uniformes de ciclistas de entrega urbana.',
    media: [
      { kind: 'image', label: 'Look 01', color: '#000' },
      { kind: 'image', label: 'Look 04', color: '#f9a52b' },
      { kind: 'video', label: 'Desfile 2:30', color: '#ed3e8c' },
      { kind: 'image', label: 'Expositor', color: '#E72818' },
    ],
  },
];

function PastCard({ p, onOpen }: { p: PastEdition; onOpen: (id: string) => void }) {
  return (
    <article className="mm-past-card" style={{ '--lift': p.cColor } as React.CSSProperties} onClick={() => onOpen(p.id)}>
      <button className="mm-past-head" onClick={(e) => { e.preventDefault(); onOpen(p.id); }}>
        <div className="mm-past-cover" style={{ background: p.bg }}>
          <span className="mm-past-cover-w" style={{ color: '#fff', mixBlendMode: 'multiply' }}>{p.title.split(' ')[0].toUpperCase()}</span>
          <span className="mm-past-cover-w b" style={{ color: p.cColor, mixBlendMode: 'multiply' }}>{p.title.split(' ')[0].toUpperCase()}</span>
        </div>
        <div className="mm-past-info">
          <div className="mm-past-ed">Edição {p.edition} · {p.year}</div>
          <div className="mm-past-cat" style={{ color: p.cColor }}>+ {p.cat}</div>
          <h4 className="mm-past-title">{p.title}</h4>
          <div className="mm-past-author">{p.author}</div>
        </div>
        <div className="mm-past-toggle" aria-hidden>→</div>
      </button>
    </article>
  );
}

export function PastEditions({ onOpen }: { onOpen: (id: string) => void }) {
  const [ed, setEd] = useState('TODAS');
  const EDS = ['TODAS', '06', '05', '04', '03'];
  const filtered = ed === 'TODAS' ? PAST : PAST.filter(p => p.edition === ed);

  return (
    <>
      <section className="mm-past" id="edicoes-anteriores">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Edições anteriores</div>
          <h2 className="mm-section-title">O que já passou pela MOSTRA<span style={{ color: 'var(--mm-pink)' }}>+</span>.</h2>
          <p className="mm-section-lead">Seis edições, mais de 240 projetos no acervo. Cada ficha reúne resumo, imagens, vídeos e foto do expositor na montagem.</p>
        </header>
        <div className="mm-pgrid-filters">
          {EDS.map(e => (
            <button key={e} className={`mm-filter ${ed === e ? 'on' : ''}`} onClick={() => setEd(e)}>
              {e === 'TODAS' ? e : `Ed. ${e}`}
            </button>
          ))}
        </div>
        <div className="mm-past-list">
          {filtered.map(p => <PastCard key={p.id} p={p} onOpen={onOpen} />)}
        </div>
      </section>

      <section className="mm-livro" id="livro">
        <div className="mm-livro-inner">
          <div className="mm-livro-book" aria-hidden>
            <div className="mm-livro-spine"></div>
            <div className="mm-livro-cover">
              <div className="mm-livro-cover-eye">+ EDIÇÃO 01</div>
              <div className="mm-livro-cover-title">MOSTRA<span>+</span></div>
              <div className="mm-livro-cover-year">2025</div>
            </div>
          </div>
          <div className="mm-livro-copy">
            <div className="mm-eyebrow mm-eyebrow--white">+ Livro da edição</div>
            <h3 className="mm-livro-title">O livro da 01ª edição já está disponível.</h3>
            <p className="mm-livro-lead">192 páginas, 42 projetos, 4 áreas. Impresso em papel pólen e offset 2 cores, com ensaios curatoriais e registros fotográficos da montagem.</p>
            <div className="mm-livro-cta">
              <button className="mm-btn mm-btn--pink">Baixar PDF (22 MB)</button>
              <button className="mm-btn mm-btn--ghost mm-btn--on-dark">Ver online →</button>
            </div>
            <div className="mm-livro-meta">ISBN 978-65-00-00000-0 · Editora Par(ent)êntese · BH, 2025</div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PastEditionPagina({ id, onBack, onOpen }: { id: string; onBack: () => void; onOpen: (id: string) => void }) {
  const idx = PAST.findIndex(p => p.id === id);
  const p = PAST[idx];

  if (!p) {
    return (
      <section className="mm-projeto">
        <header className="mm-section-head">
          <h2 className="mm-section-title">Ficha não encontrada.</h2>
          <button className="mm-btn mm-btn--ghost" onClick={onBack}>← Voltar</button>
        </header>
      </section>
    );
  }

  const prev = PAST[(idx - 1 + PAST.length) % PAST.length];
  const next = PAST[(idx + 1) % PAST.length];

  return (
    <article className="mm-projeto" style={{ '--acc': p.cColor } as React.CSSProperties}>
      <div className="mm-projeto-crumb">
        <button className="mm-crumb-link" onClick={onBack}>← Edições anteriores</button>
        <span className="mm-crumb-sep">·</span>
        <span className="mm-crumb-now">ED. {p.edition} · {p.year}</span>
        <span className="mm-crumb-sep">·</span>
        <span className="mm-crumb-cat" style={{ color: p.cColor }}>+ {p.cat}</span>
      </div>

      <header className="mm-projeto-hero">
        <div className="mm-projeto-hero-text">
          <div className="mm-eyebrow mm-eyebrow--pink">+ Ficha de acervo</div>
          <h1 className="mm-projeto-title">{p.title}</h1>
          <p className="mm-projeto-lead">{p.summary}</p>
          <dl className="mm-projeto-meta">
            <div><dt>Autoria</dt><dd>{p.author}</dd></div>
            <div><dt>Ano</dt><dd>{p.year}</dd></div>
            <div><dt>Edição</dt><dd>{p.edition}ª MOSTRA+</dd></div>
            <div><dt>Área</dt><dd>{p.cat}</dd></div>
          </dl>
        </div>
        <figure className="mm-projeto-hero-media" style={{ background: p.bg, minHeight: 360 }}>
          <div style={{ position: 'relative', aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="mm-past-cover-w" style={{ color: '#fff', mixBlendMode: 'multiply', fontSize: 140 }}>{p.title.split(' ')[0].toUpperCase()}</span>
            <span className="mm-past-cover-w b" style={{ color: p.cColor, mixBlendMode: 'multiply', fontSize: 140, position: 'absolute' }}>{p.title.split(' ')[0].toUpperCase()}</span>
          </div>
          <figcaption>Capa da ficha de acervo</figcaption>
        </figure>
      </header>

      <div className="mm-projeto-body">
        <div className="mm-projeto-copy">
          <h2 className="mm-projeto-h2">+ Sobre o projeto</h2>
          <p>{p.summary} Apresentado na {p.edition}ª edição da MOSTRA+ como parte do recorte curatorial de {p.cat.toLowerCase()}. O projeto integra o arquivo permanente da Escola de Design.</p>
        </div>

        {p.media.length > 0 && (
          <section className="mm-projeto-gallery">
            <h2 className="mm-projeto-h2">+ Mídia</h2>
            <div className="mm-projeto-gallery-grid">
              {p.media.map((m, i) => (
                <figure key={i} className="mm-projeto-mitem mm-projeto-mitem--block" style={{ background: m.color }}>
                  <div style={{ aspectRatio: '16/10', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: 20, color: '#fff' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>{m.kind === 'video' ? '▶' : '⌂'}</span>
                    <span style={{ fontFamily: 'var(--font-body-wide)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{m.label}</span>
                  </div>
                  <figcaption>{m.label} · {m.kind === 'video' ? 'Vídeo' : 'Imagem'}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>

      <nav className="mm-projeto-pager" aria-label="Outras fichas">
        <button className="mm-pager-btn" onClick={() => onOpen(prev.id)}>
          <span className="mm-pager-dir">← Anterior</span>
          <span className="mm-pager-title">{prev.title}</span>
        </button>
        <button className="mm-pager-btn mm-pager-btn--next" onClick={() => onOpen(next.id)}>
          <span className="mm-pager-dir">Próximo →</span>
          <span className="mm-pager-title">{next.title}</span>
        </button>
      </nav>
    </article>
  );
}
