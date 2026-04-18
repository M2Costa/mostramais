import Image from 'next/image';

interface HeroProps {
  onCta: () => void;
  onSchedule: () => void;
}

export default function Hero({ onCta, onSchedule }: HeroProps) {
  return (
    <section className="mm-hero">
      <div className="mm-hero-stack" style={{ height: '504px' }}>
        <Image
          className="mm-hero-logo"
          src="/assets/logo_colorida.png"
          alt="MOSTRA+"
          width={450}
          height={504}
          style={{ width: '450px', height: '504px' }}
          priority
        />
      </div>
      <div className="mm-hero-meta">
        <div>
          <div className="mm-eyebrow">02ª Edição · Escola de Design</div>
          <h2 className="mm-hero-sub">Uma ponte entre o universo acadêmico e o mercado.</h2>
          <div className="mm-hero-cta">
            <button className="mm-btn mm-btn--pink" onClick={onCta}>Ver projetos</button>
            <button className="mm-btn mm-btn--ghost" onClick={onSchedule}>Programação →</button>
          </div>
        </div>
        <div className="mm-hero-dates">
          <span><b>27</b> MAI</span>
          <span className="sep">—</span>
          <span><b>31</b> MAI</span>
          <span className="sep">·</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
