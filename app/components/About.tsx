const PARTNERS = [
  { name: 'Escola de Design', type: 'Realização' },
  { name: 'Prefeitura de BH', type: 'Apoio institucional' },
  { name: 'Museu de Arte da Pampulha', type: 'Espaço parceiro' },
  { name: 'Estúdio Margem', type: 'Curadoria convidada' },
  { name: 'Editora Par(ent)êntese', type: 'Publicação' },
  { name: 'Tipografia Cambrai', type: 'Impressão' },
  { name: 'Rádio UFMG Educativa', type: 'Mídia parceira' },
  { name: 'Sesc Minas', type: 'Programação' },
];

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
          <p className="mm-about-lead">
            A Mostra+ é a <em>mostra anual de produção acadêmica</em> da Escola de Design — feita inteiramente por alunos, para alunos.
          </p>
          <div className="mm-about-grid">
            <div>
              <div className="mm-eyebrow mm-eyebrow--pink">+ Propósito</div>
              <p>Dar visibilidade ao acervo de trabalhos produzidos dentro da escola e aproximar essa produção do mercado de design e artes.</p>
            </div>
            <div>
              <div className="mm-eyebrow mm-eyebrow--pink">+ Público</div>
              <p>Alunos, professores, estúdios, editoras, museus, profissionais e curiosos. Entrada gratuita em todas as atividades.</p>
            </div>
            <div>
              <div className="mm-eyebrow mm-eyebrow--pink">+ Valor</div>
              <p>Curadoria, conexão e arquivo. A cada edição, um conjunto de projetos entra no acervo permanente da escola.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-partners" id="parcerias">
        <header className="mm-section-head">
          <div className="mm-eyebrow">+ Parcerias</div>
          <h2 className="mm-section-title">Quem faz acontecer.</h2>
          <p className="mm-section-lead">Realização, apoio institucional, espaços parceiros e colaboradores da 02ª edição.</p>
        </header>
        <div className="mm-partners-grid">
          {PARTNERS.map(p => <PartnerLogo key={p.name} {...p} />)}
        </div>
      </section>
    </>
  );
}
