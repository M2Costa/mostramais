'use client';

import { useState } from 'react';

const GALLERY = [
  { kind: 'image', title: 'Vernissage ed. 02', sub: 'Galeria Principal · 2026', color: 'var(--mm-pink)', span: 'big' },
  { kind: 'video', title: 'Making-of montagem', sub: '4:12 · 2025', color: '#111' },
  { kind: 'image', title: 'Portfolio Night',   sub: 'Foyer · 2025', color: 'var(--mm-blue)' },
  { kind: 'image', title: 'Workshop tipografia', sub: 'Sala 204 · 2025', color: 'var(--mm-orange)' },
  { kind: 'image', title: 'Mesa: Design e mercado', sub: 'Auditório B · 2025', color: '#2D155B', span: 'tall' },
  { kind: 'gif',   title: 'Loop vinheta',       sub: '00:06 · 2025', color: '#E72818' },
  { kind: 'image', title: 'Prêmio MOSTRA+',     sub: 'Encerramento · 2025', color: 'var(--mm-pink)' },
  { kind: 'image', title: 'Acervo físico',      sub: 'Sala de arquivo · 2025', color: 'var(--mm-blue)' },
  { kind: 'video', title: 'Entrevista curatorial', sub: '6:30 · 2025', color: '#111' },
];

const MEDIA_LABELS: Record<string, string> = { image: '⌂ Foto', video: '▶ Vídeo', gif: '∞ GIF' };

type InterestState = { name: string; email: string; role: string; topics: string[] };
type Status = 'idle' | 'sending' | 'done' | 'error';

const TOPICS = ['Abertura', 'Workshops', 'Portfolio Night', 'Visitas guiadas', 'Livro da edição', 'Curadoria aberta'];
const ROLES: [string, string][] = [
  ['aluno', 'Aluno(a)'],
  ['ex-aluno', 'Ex-aluno(a)'],
  ['externo', 'Público externo'],
  ['estudio', 'Estúdio / mercado'],
];

function InterestForm() {
  const [state, setState] = useState<InterestState>({ name: '', email: '', role: 'aluno', topics: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');

  const toggleTopic = (t: string) => setState(s => ({
    ...s,
    topics: s.topics.includes(t) ? s.topics.filter(x => x !== t) : [...s.topics, t],
  }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!state.name.trim()) e.name = 'Informe seu nome.';
    if (!state.email.trim()) e.email = 'Informe um e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) e.email = 'E-mail inválido.';
    if (state.topics.length === 0) e.topics = 'Escolha pelo menos um tema.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) { setStatus('error'); return; }
    setStatus('sending');
    setTimeout(() => setStatus('done'), 650);
  };

  if (status === 'done') {
    return (
      <div className="mm-interest mm-interest--done">
        <div className="mm-eyebrow mm-eyebrow--pink">+ Recebido</div>
        <h3 className="mm-interest-title">Anotado, {state.name.split(' ')[0] || 'pessoa'}.</h3>
        <p className="mm-interest-lead">
          Você entrou na lista de <b>{state.topics.join(', ').toLowerCase()}</b>. A primeira novidade chega no seu e-mail em até 7 dias.
        </p>
        <button className="mm-btn mm-btn--ghost" onClick={() => { setState({ name: '', email: '', role: 'aluno', topics: [] }); setStatus('idle'); setErrors({}); }}>
          Cadastrar outra pessoa
        </button>
      </div>
    );
  }

  return (
    <form className="mm-interest" onSubmit={submit} noValidate>
      <div className="mm-form-row">
        <div className={`mm-field ${errors.name ? 'err' : ''}`}>
          <label>Nome</label>
          <input value={state.name} onChange={e => setState(s => ({ ...s, name: e.target.value }))} placeholder="Como podemos te chamar" />
          {errors.name && <span className="mm-field-err">{errors.name}</span>}
        </div>
        <div className={`mm-field ${errors.email ? 'err' : ''}`}>
          <label>E-mail</label>
          <input type="email" value={state.email} onChange={e => setState(s => ({ ...s, email: e.target.value }))} placeholder="voce@dominio.com" />
          {errors.email && <span className="mm-field-err">{errors.email}</span>}
        </div>
      </div>

      <div className="mm-field">
        <label>Você é</label>
        <div className="mm-role-row">
          {ROLES.map(([k, l]) => (
            <button type="button" key={k} className={`mm-role-chip ${state.role === k ? 'on' : ''}`} onClick={() => setState(s => ({ ...s, role: k }))}>{l}</button>
          ))}
        </div>
      </div>

      <div className={`mm-field ${errors.topics ? 'err' : ''}`}>
        <label>Sobre o que quer receber novidades <span className="mm-field-hint">(escolha quantos quiser)</span></label>
        <div className="mm-topic-row">
          {TOPICS.map(t => (
            <button type="button" key={t} className={`mm-topic-chip ${state.topics.includes(t) ? 'on' : ''}`} onClick={() => toggleTopic(t)} aria-pressed={state.topics.includes(t)}>
              <span className="mm-topic-check" aria-hidden>{state.topics.includes(t) ? '+' : ''}</span>
              {t}
            </button>
          ))}
        </div>
        {errors.topics && <span className="mm-field-err">{errors.topics}</span>}
      </div>

      <div className="mm-form-cta">
        <button type="submit" className="mm-btn mm-btn--pink" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Quero receber'}
        </button>
        <span className="mm-form-hint">Sem spam. Você pode sair da lista a qualquer momento.</span>
      </div>

      {status === 'error' && (
        <div className="mm-form-alert" role="alert">Ajuste os campos marcados e tente de novo.</div>
      )}
    </form>
  );
}

export default function MostraMais() {
  return (
    <>
      <section className="mm-more" id="mostra-mais">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Mostra + um pouco</div>
          <h2 className="mm-section-title">Uma amostra a mais.</h2>
          <p className="mm-section-lead">A seção paralela da MOSTRA+ — um compilado de bastidores, workshops, entrevistas e projetos-surpresa. Entre na lista e siga a galeria.</p>
        </header>

        <div className="mm-more-grid">
          <div className="mm-more-form">
            <div className="mm-eyebrow mm-eyebrow--pink">+ Formulário de interesse</div>
            <h3 className="mm-more-h">Entre na lista.</h3>
            <InterestForm />
          </div>
          <aside className="mm-more-side">
            <div className="mm-more-stat">
              <div className="mm-more-stat-n">2.4k</div>
              <div className="mm-more-stat-l">Pessoas na lista</div>
            </div>
            <div className="mm-more-stat">
              <div className="mm-more-stat-n" style={{ color: 'var(--mm-blue)' }}>18</div>
              <div className="mm-more-stat-l">Conteúdos exclusivos em 2026</div>
            </div>
            <div className="mm-more-stat">
              <div className="mm-more-stat-n" style={{ color: 'var(--mm-orange)' }}>02ª</div>
              <div className="mm-more-stat-l">Edição em curso</div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mm-gal" id="galeria">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Galeria</div>
          <h2 className="mm-section-title">Bastidores recentes.</h2>
          <p className="mm-section-lead">Foto, vídeo, GIF — um recorte do que aconteceu nas últimas edições.</p>
        </header>
        <div className="mm-gal-grid">
          {GALLERY.map((g, i) => (
            <figure key={i} className={`mm-gal-tile mm-gal-tile--${g.span || 'std'}`} style={{ background: g.color }}>
              <span className="mm-gal-badge">{MEDIA_LABELS[g.kind]}</span>
              <figcaption>
                <div className="mm-gal-title">{g.title}</div>
                <div className="mm-gal-sub">{g.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
