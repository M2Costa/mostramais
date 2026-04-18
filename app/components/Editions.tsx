'use client';

import { useState } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────

type EditionMedia =
  | { kind: 'image'; src: string; caption: string }
  | { kind: 'video'; src: string; poster?: string; caption: string }
  | { kind: 'block'; label: string; color: string };

interface EditionProject {
  id: string;
  edition: string;
  year: string;
  title: string;
  author: string;
  cat: string;
  tag: string;
  accent: string;
  bg: string;
  short: string;
  desc: string;
  role?: string;
  advisor?: string;
  tools?: string;
  coverImg?: string;
  media: EditionMedia[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

const ALL_PROJECTS: EditionProject[] = [
  // ── Edition 02 · 2026 ────────────────────────────────────────────────────
  {
    id: 'mapa-coletivos',
    edition: '02',
    year: '2026',
    title: 'Mapa dos Coletivos',
    author: 'Tiago Ramos',
    cat: 'DIGITAL',
    tag: 'PLATAFORMA WEB',
    accent: '#ed3e8c',
    bg: '#3056a6',
    short: 'Plataforma para conectar coletivos de design independente do Sul do Brasil.',
    desc: 'O Mapa dos Coletivos é uma plataforma web colaborativa que cataloga e conecta mais de 120 coletivos de design atuantes na região Sul. A interface combina um mapa interativo, filtros por área de atuação e fichas detalhadas de cada coletivo — com links para portfólios, convocatórias abertas e contatos diretos. O projeto nasceu de uma série de entrevistas conduzidas ao longo de 2025 e se propõe a ser um acervo vivo, mantido pela própria comunidade.',
    role: 'Pesquisa · Design de interface · Desenvolvimento',
    advisor: 'Prof. Carla Montano',
    tools: 'Figma · Next.js · Mapbox · Airtable',
    coverImg: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80',
    media: [
      { kind: 'image', src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80', caption: 'Home — mapa interativo com recorte regional' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', caption: 'Ficha de coletivo, com convocatórias abertas' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', caption: 'Dashboard de contribuição da comunidade' },
    ],
  },
  {
    id: 'terminal-escola',
    edition: '02',
    year: '2026',
    title: 'Terminal da Escola',
    author: 'Léo Fernandes',
    cat: 'DIGITAL',
    tag: 'FERRAMENTA INTERNA',
    accent: '#f9a52b',
    bg: '#E72818',
    short: 'Visualizador do acervo de TCCs da Escola de Design, em linha de comando.',
    desc: 'Terminal da Escola é uma ferramenta CLI + web que permite navegar pelo acervo de trabalhos de conclusão da Escola de Design sem depender de buscas genéricas. O recorte é curatorial: só TCCs aprovados, indexados por orientador, ano, tema e materiais. A versão web reproduz a experiência do terminal com atalhos de teclado e sessões persistentes.',
    role: 'Curadoria · Interface · Engenharia',
    advisor: 'Prof. Henrique Serra',
    tools: 'Svelte · xterm.js · PostgreSQL · Tailwind',
    coverImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    media: [
      { kind: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80', caption: 'Visão do terminal — listagem por orientador' },
      { kind: 'video', src: 'https://cdn.pixabay.com/video/2020/04/30/38683-415083026_large.mp4', poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80', caption: 'Walkthrough das queries e atalhos' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=1200&q=80', caption: 'Resultado de busca com filtros encadeados' },
    ],
  },
  {
    id: 'ensaio-tipografico',
    edition: '02',
    year: '2026',
    title: 'Ensaio Tipográfico',
    author: 'Helena Prado',
    cat: 'DIGITAL',
    tag: 'SITE EXPERIMENTAL',
    accent: '#3056a6',
    bg: '#f9a52b',
    short: 'Site experimental que lê textos acadêmicos e os compõe como objeto tipográfico.',
    desc: 'Um editor/leitor que recebe um artigo acadêmico e o recompõe em uma tipografia reativa: o tamanho de cada parágrafo responde à densidade semântica, as quebras de linha seguem a respiração do orador. O projeto é um ensaio sobre como a tela pode se comportar como uma página editorial, sem imitá-la.',
    role: 'Pesquisa tipográfica · Interface · Motion',
    advisor: 'Prof. Ana Beatriz Lins',
    tools: 'Variable fonts · p5.js · React',
    coverImg: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    media: [
      { kind: 'image', src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80', caption: 'Home — composição reativa por densidade' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80', caption: 'Vista editorial do artigo lido' },
    ],
  },
  {
    id: 'acervo-som',
    edition: '02',
    year: '2026',
    title: 'Acervo em Som',
    author: 'Marcos Vieira',
    cat: 'DIGITAL',
    tag: 'APP MÓVEL',
    accent: '#ed3e8c',
    bg: '#2D155B',
    short: 'App que narra em áudio peças do acervo permanente da Escola.',
    desc: 'Acervo em Som é um aplicativo móvel que combina áudio-descrições curtas, entrevistas e paisagens sonoras para apresentar peças do acervo permanente da Escola de Design. O objetivo é permitir que visitantes e alunos explorem o acervo mesmo à distância — e que trabalhos menos conhecidos ganhem uma nova camada de leitura.',
    role: 'Produto · Roteiro · Som',
    advisor: 'Prof. Daniela Rocha',
    tools: 'Swift · Firebase · Audition',
    coverImg: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
    media: [
      { kind: 'image', src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80', caption: 'Tela de reprodução — ficha sonora' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80', caption: 'Exploração por trilhas curatoriais' },
    ],
  },
  {
    id: 'retina',
    edition: '02',
    year: '2026',
    title: 'Retina',
    author: 'Juliana Alves & Rafael Lima',
    cat: 'DIGITAL',
    tag: 'INSTALAÇÃO GENERATIVA',
    accent: '#f9a52b',
    bg: '#000',
    short: 'Instalação generativa que traduz o ritmo da sala em composições visuais.',
    desc: 'Retina é uma instalação digital instalada no saguão da Escola durante a MOSTRA+ 02. Câmeras e sensores capturam movimento e luminosidade no espaço e traduzem esses dados, em tempo real, numa composição tipográfica projetada em três superfícies. A cada visitante a peça se reconfigura — convidando a permanência, não o clique.',
    role: 'Design generativo · Instalação · Som',
    advisor: 'Prof. Bruno Ferraz',
    tools: 'TouchDesigner · OpenCV · Ableton Live',
    coverImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    media: [
      { kind: 'video', src: 'https://cdn.pixabay.com/video/2020/04/30/38683-415083026_large.mp4', poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80', caption: 'Captura da instalação no saguão' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80', caption: 'Composição tipográfica gerada em tempo real' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1200&q=80', caption: 'Detalhe da projeção lateral' },
    ],
  },
  {
    id: 'arquivo-aberto',
    edition: '02',
    year: '2026',
    title: 'Arquivo Aberto',
    author: 'Beatriz Nogueira',
    cat: 'DIGITAL',
    tag: 'PUBLICAÇÃO DIGITAL',
    accent: '#3056a6',
    bg: '#ed3e8c',
    short: 'Publicação digital com os bastidores da curadoria da 02ª edição.',
    desc: 'Arquivo Aberto é uma publicação digital em formato scrollytelling que documenta o processo curatorial da MOSTRA+ 02: critérios de seleção, dúvidas, discussões e a lista final. A proposta é tornar transparente um processo que costuma ser invisível — e servir de referência para as próximas edições.',
    role: 'Design editorial · Redação · Engenharia',
    advisor: 'Prof. Carla Montano',
    tools: 'Astro · Scrollama · Figma',
    coverImg: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
    media: [
      { kind: 'image', src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80', caption: 'Capa da publicação' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80', caption: 'Capítulo sobre critérios curatoriais' },
      { kind: 'image', src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80', caption: 'Nota de rodapé, reformulada' },
    ],
  },

  // ── Edition 06 · 2025 ────────────────────────────────────────────────────
  {
    id: 'p6',
    edition: '06',
    year: '2025',
    title: 'Atlas de Feiras Populares',
    author: 'Clara Siqueira',
    cat: 'GRÁFICO',
    tag: 'PUBLICAÇÃO',
    accent: '#ed3e8c',
    bg: '#f9a52b',
    short: 'Cartografia ilustrada das feiras livres de Belo Horizonte — tipologia de barracas, fluxos humanos e vocabulário sonoro.',
    desc: 'Cartografia ilustrada das feiras livres de Belo Horizonte — tipologia de barracas, fluxos humanos e vocabulário sonoro. Apresentado na 06ª edição da MOSTRA+ como parte do recorte curatorial de gráfico. O projeto integra o arquivo permanente da Escola de Design.',
    media: [
      { kind: 'block', label: 'Capa', color: '#ed3e8c' },
      { kind: 'block', label: 'Interior p.24', color: '#3056a6' },
      { kind: 'block', label: 'Folheio 0:42', color: '#000' },
      { kind: 'block', label: 'Expositor', color: '#f9a52b' },
    ],
  },
  {
    id: 'p5',
    edition: '06',
    year: '2025',
    title: 'Luminária Samambaia',
    author: 'Diego Machado',
    cat: 'PRODUTO',
    tag: 'OBJETO',
    accent: '#f9a52b',
    bg: '#3056a6',
    short: 'Luminária modular em bambu laminado, inspirada na estrutura de folhagem tropical.',
    desc: 'Luminária modular em bambu laminado, inspirada na estrutura de folhagem tropical. Apresentado na 06ª edição da MOSTRA+ como parte do recorte curatorial de produto. O projeto integra o arquivo permanente da Escola de Design.',
    media: [
      { kind: 'block', label: 'Peça acesa', color: '#000' },
      { kind: 'block', label: 'Módulos', color: '#f9a52b' },
      { kind: 'block', label: 'Montagem 1:18', color: '#ed3e8c' },
      { kind: 'block', label: 'Expositor', color: '#3056a6' },
    ],
  },

  // ── Edition 05 · 2024 ────────────────────────────────────────────────────
  {
    id: 'p4',
    edition: '05',
    year: '2024',
    title: 'Tipo Curral',
    author: 'Nina Barreto',
    cat: 'GRÁFICO',
    tag: 'TIPOGRAFIA',
    accent: '#ed3e8c',
    bg: '#2D155B',
    short: 'Fonte display inspirada nas pichações de currais mineiros dos anos 1950.',
    desc: 'Fonte display inspirada nas pichações de currais mineiros dos anos 1950. Apresentado na 05ª edição da MOSTRA+ como parte do recorte curatorial de gráfico. O projeto integra o arquivo permanente da Escola de Design.',
    media: [
      { kind: 'block', label: 'Espécimen', color: '#ed3e8c' },
      { kind: 'block', label: 'Glifos', color: '#fff' },
      { kind: 'block', label: 'Expositor', color: '#2D155B' },
    ],
  },
  {
    id: 'p3',
    edition: '05',
    year: '2024',
    title: 'Vestir o Caminho',
    author: 'Helena Farias',
    cat: 'MODA',
    tag: 'COLEÇÃO',
    accent: '#ed3e8c',
    bg: '#E72818',
    short: 'Coleção cápsula sobre uniformes de ciclistas de entrega urbana.',
    desc: 'Coleção cápsula sobre uniformes de ciclistas de entrega urbana. Apresentado na 05ª edição da MOSTRA+ como parte do recorte curatorial de moda. O projeto integra o arquivo permanente da Escola de Design.',
    media: [
      { kind: 'block', label: 'Look 01', color: '#000' },
      { kind: 'block', label: 'Look 04', color: '#f9a52b' },
      { kind: 'block', label: 'Desfile 2:30', color: '#ed3e8c' },
      { kind: 'block', label: 'Expositor', color: '#E72818' },
    ],
  },
];

const EDITIONS = [
  { id: '02', year: '2026' },
  { id: '06', year: '2025' },
  { id: '05', year: '2024' },
  { id: '04', year: '2023' },
  { id: '03', year: '2022' },
];

const DEFAULT_EDITION = '06';

// ── Cover helper ─────────────────────────────────────────────────────────────

function ColorCover({ title, accent, bg, style }: { title: string; accent: string; bg: string; style?: React.CSSProperties }) {
  const word = title.split(' ')[0].toUpperCase();
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', ...style }}>
      <span className="mm-past-cover-w" style={{ color: '#fff', mixBlendMode: 'multiply' }}>{word}</span>
      <span className="mm-past-cover-w b" style={{ color: accent, mixBlendMode: 'multiply', position: 'absolute' }}>{word}</span>
    </div>
  );
}

// ── Grid card ────────────────────────────────────────────────────────────────

function EditionCard({ p, i, onOpen }: { p: EditionProject; i: number; onOpen: (id: string) => void }) {
  return (
    <article
      className="mm-pjcard"
      style={{ '--acc': p.accent } as React.CSSProperties}
      onClick={() => onOpen(p.id)}
    >
      <div className="mm-pjcard-cover">
        {p.coverImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.coverImg} alt="" />
        ) : (
          <ColorCover title={p.title} accent={p.accent} bg={p.bg} />
        )}
        <div className="mm-pjcard-tag">+ {p.tag}</div>
        <div className="mm-pjcard-num">0{i + 1}</div>
      </div>
      <div className="mm-pjcard-body">
        <div className="mm-pjcard-cat" style={{ color: p.accent }}>+ {p.cat}</div>
        <h3 className="mm-pjcard-title">{p.title}</h3>
        <div className="mm-pjcard-meta">
          <span>{p.author}</span>
          <span>{p.year}</span>
        </div>
        <p className="mm-pjcard-desc">{p.short}</p>
        <div className="mm-pjcard-cta">Ver projeto <span className="arr">→</span></div>
      </div>
    </article>
  );
}

// ── List card ────────────────────────────────────────────────────────────────

function EditionListCard({ p, onOpen }: { p: EditionProject; onOpen: (id: string) => void }) {
  return (
    <article
      className="mm-past-card"
      style={{ '--lift': p.accent } as React.CSSProperties}
      onClick={() => onOpen(p.id)}
    >
      <button className="mm-past-head" onClick={(e) => { e.preventDefault(); onOpen(p.id); }}>
        <div className="mm-past-cover" style={{ background: p.bg, overflow: 'hidden' }}>
          {p.coverImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.coverImg}
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.7 }}
            />
          ) : null}
          <span className="mm-past-cover-w" style={{ color: '#fff', mixBlendMode: 'multiply', position: 'relative' }}>{p.title.split(' ')[0].toUpperCase()}</span>
          <span className="mm-past-cover-w b" style={{ color: p.accent, mixBlendMode: 'multiply', position: 'relative' }}>{p.title.split(' ')[0].toUpperCase()}</span>
        </div>
        <div className="mm-past-info">
          <div className="mm-past-ed">Edição {p.edition} · {p.year}</div>
          <div className="mm-past-cat" style={{ color: p.accent }}>+ {p.cat} · {p.tag}</div>
          <h4 className="mm-past-title">{p.title}</h4>
          <div className="mm-past-author">{p.author}</div>
        </div>
        <div className="mm-past-toggle" aria-hidden>→</div>
      </button>
    </article>
  );
}

// ── Edition list ──────────────────────────────────────────────────────────────

export function EditionsList({ onOpen }: { onOpen: (id: string) => void }) {
  const [ed, setEd] = useState(DEFAULT_EDITION);
  const [view, setView] = useState<'grade' | 'lista'>('grade');

  const filtered = ALL_PROJECTS.filter(p => p.edition === ed);
  const edMeta = EDITIONS.find(e => e.id === ed);

  return (
    <>
      <section className="mm-past" id="edicoes">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Edições</div>
          <h2 className="mm-section-title">Tudo o que passou pela MOSTRA<span style={{ color: 'var(--mm-pink)' }}>+</span>.</h2>
          <p className="mm-section-lead">Seis edições, mais de 240 projetos no acervo. Escolha uma edição e explore os projetos em grade ou lista.</p>
        </header>

        <div className="mm-projetos-toolbar">
          <div className="mm-pgrid-filters" >
            {EDITIONS.map(e => (
              <button
                key={e.id}
                className={`mm-filter ${ed === e.id ? 'on' : ''}`}
                onClick={() => { setEd(e.id); setView('grade'); }}
              >
                Ed. {e.id}
              </button>
            ))}
          </div>
          <div className="mm-projetos-viewswitch" role="tablist" aria-label="Modo de visualização">
            <button className={`mm-vs ${view === 'grade' ? 'on' : ''}`} onClick={() => setView('grade')}>+ Grade</button>
            <button className={`mm-vs ${view === 'lista' ? 'on' : ''}`} onClick={() => setView('lista')}>+ Lista</button>
          </div>
        </div>

        {filtered.length > 0 ? (
          view === 'grade' ? (
            <div className="mm-projetos-grid">
              {filtered.map((p, i) => <EditionCard key={p.id} p={p} i={i} onOpen={onOpen} />)}
            </div>
          ) : (
            <div className="mm-past-list mm-past-list--projetos">
              {filtered.map(p => <EditionListCard key={p.id} p={p} onOpen={onOpen} />)}
            </div>
          )
        ) : (
          <div style={{ padding: '80px 0', textAlign: 'center', fontFamily: 'var(--font-body-wide)', fontSize: 14, letterSpacing: '0.1em', color: '#888' }}>
            EDIÇÃO {ed} · {edMeta?.year} — ACERVO EM DIGITALIZAÇÃO
          </div>
        )}
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

// ── Project detail ────────────────────────────────────────────────────────────

export function EditionProjetoPagina({ id, onBack, onOpen }: { id: string; onBack: () => void; onOpen: (id: string) => void }) {
  const idx = ALL_PROJECTS.findIndex(p => p.id === id);
  const p = ALL_PROJECTS[idx];

  if (!p) {
    return (
      <section className="mm-projeto">
        <header className="mm-section-head">
          <h2 className="mm-section-title">Projeto não encontrado.</h2>
          <button className="mm-btn mm-btn--ghost" onClick={onBack}>← Voltar</button>
        </header>
      </section>
    );
  }

  const editionProjects = ALL_PROJECTS.filter(ep => ep.edition === p.edition);
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
        <span className="mm-crumb-cat" style={{ color: p.accent }}>+ {p.cat}</span>
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
            <div><dt>Área</dt><dd>{p.cat}</dd></div>
            {p.advisor && <div><dt>Orientação</dt><dd>{p.advisor}</dd></div>}
            {p.role && <div><dt>Papéis</dt><dd>{p.role}</dd></div>}
            {p.tools && <div className="w"><dt>Tecnologias</dt><dd>{p.tools}</dd></div>}
          </dl>
        </div>
        <figure className="mm-projeto-hero-media" style={!p.coverImg ? { background: p.bg, minHeight: 360 } : undefined}>
          {hero.kind === 'block' ? (
            <ColorCover title={p.title} accent={p.accent} bg={p.bg} style={{ position: 'relative', aspectRatio: '16/10' }} />
          ) : hero.kind === 'video' ? (
            <video src={hero.src} poster={hero.poster} controls playsInline />
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
                    <video src={m.src} poster={m.poster} controls playsInline />
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

      <nav className="mm-projeto-pager" aria-label="Outros projetos">
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
