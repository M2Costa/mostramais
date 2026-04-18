'use client';

import type { EditionProject } from './data';

function ColorCover({ title, accent, bg, style }: { title: string; accent: string; bg: string; style?: React.CSSProperties }) {
  const word = title.split(' ')[0].toUpperCase();
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', ...style }}>
      <span className="mm-past-cover-w" style={{ color: '#fff', mixBlendMode: 'multiply' }}>{word}</span>
      <span className="mm-past-cover-w b" style={{ color: accent, mixBlendMode: 'multiply', position: 'absolute' }}>{word}</span>
    </div>
  );
}

function isDriveEmbed(src: string): boolean {
  return src.includes('drive.google.com/file/d/') && src.endsWith('/preview');
}

function VideoMedia({ src, poster, caption }: { src: string; poster?: string; caption: string }) {
  if (isDriveEmbed(src)) {
    return (
      <iframe
        src={src}
        allow="autoplay"
        style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
        title={caption}
      />
    );
  }
  return <video src={src} poster={poster} controls playsInline />;
}

export default function EditionDetail({ id, onBack, onOpen, projects }: {
  id: string;
  onBack: () => void;
  onOpen: (id: string) => void;
  projects: EditionProject[];
}) {
  const idx = projects.findIndex(p => p.id === id);
  const p = projects[idx];

  if (!p) {
    return (
      <section className="mm-projeto">
        <header className="mm-section-head">
          <h2 className="mm-section-title">Project not found.</h2>
          <button className="mm-btn mm-btn--ghost" onClick={onBack}>← Back</button>
        </header>
      </section>
    );
  }

  const editionProjects = projects.filter(ep => ep.edition === p.edition);
  const edIdx = editionProjects.findIndex(ep => ep.id === id);
  const prev = editionProjects[(edIdx - 1 + editionProjects.length) % editionProjects.length];
  const next = editionProjects[(edIdx + 1) % editionProjects.length];
  const hero = p.media[0];

  return (
    <article className="mm-projeto" style={{ '--acc': p.accent } as React.CSSProperties}>
      <div className="mm-projeto-crumb">
        <button className="mm-crumb-link" onClick={onBack}>← Edições</button>
        <span className="mm-crumb-sep">·</span>
        <span className="mm-crumb-now">ED. {p.edition} · {p.year}</span>
        <span className="mm-crumb-sep">·</span>
        <span className="mm-crumb-cat" style={{ color: p.accent }}>+ {p.area}</span>
      </div>

      <header className="mm-projeto-hero">
        <div className="mm-projeto-hero-text">
          <div className="mm-eyebrow mm-eyebrow--pink">+ {p.tag}</div>
          <h1 className="mm-projeto-title">{p.title}</h1>
          <p className="mm-projeto-lead">{p.short}</p>
          <dl className="mm-projeto-meta">
            <div><dt>Autoria</dt><dd>{p.author}</dd></div>
            <div><dt>Ano</dt><dd>{p.year}</dd></div>
            <div><dt>Edição</dt><dd>{p.edition}ª MOSTRA+</dd></div>
            <div><dt>Área</dt><dd>{p.area}</dd></div>
            {p.advisor && <div><dt>Orientação</dt><dd>{p.advisor}</dd></div>}
          </dl>
        </div>
        <figure className="mm-projeto-hero-media" style={!p.coverImg ? { background: p.bg, minHeight: 360 } : undefined}>
          {hero.kind === 'block' ? (
            <ColorCover title={p.title} accent={p.accent} bg={p.bg} style={{ position: 'relative', aspectRatio: '16/10' }} />
          ) : hero.kind === 'video' ? (
            <VideoMedia src={hero.src} poster={hero.poster} caption={hero.caption} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.src} alt={hero.caption} />
          )}
          <figcaption>{hero.kind === 'block' ? hero.label : hero.caption}</figcaption>
        </figure>
      </header>

      <div className="mm-projeto-body">
        <div className="mm-projeto-copy">
          <h2 className="mm-projeto-h2">+ Sobre o projeto</h2>
          <p>{p.desc}</p>
        </div>

        {p.media.length > 1 && (
          <section className="mm-projeto-gallery">
            <h2 className="mm-projeto-h2">+ Mídia</h2>
            <div className="mm-projeto-gallery-grid">
              {p.media.slice(1).map((m, i) => (
                <figure key={i} className={`mm-projeto-mitem${m.kind === 'block' ? ' mm-projeto-mitem--block' : ''}`} style={m.kind === 'block' ? { background: m.color } : undefined}>
                  {m.kind === 'block' ? (
                    <div style={{ aspectRatio: '16/10', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: 20, color: '#fff' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>⌂</span>
                      <span style={{ fontFamily: 'var(--font-body-wide)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{m.label}</span>
                    </div>
                  ) : m.kind === 'video' ? (
                    <VideoMedia src={m.src} poster={m.poster} caption={m.caption} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.src} alt={m.caption} />
                  )}
                  <figcaption>{m.kind === 'block' ? m.label : m.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>

      <nav className="mm-projeto-pager" aria-label="Other projects">
        <button className="mm-pager-btn" onClick={() => onOpen(prev.id)}>
          <span className="mm-pager-dir">← Previous</span>
          <span className="mm-pager-title">{prev.title}</span>
        </button>
        <button className="mm-pager-btn mm-pager-btn--next" onClick={() => onOpen(next.id)}>
          <span className="mm-pager-dir">Next →</span>
          <span className="mm-pager-title">{next.title}</span>
        </button>
      </nav>
    </article>
  );
}
