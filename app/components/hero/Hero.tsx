import Image from 'next/image';
import { HERO_CONTENT } from './data';

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
          <div className="mm-eyebrow">{HERO_CONTENT.eyebrow}</div>
          <h2 className="mm-hero-sub">{HERO_CONTENT.tagline}</h2>
          <div className="mm-hero-cta">
            <button className="mm-btn mm-btn--pink" onClick={onCta}>Ver projetos</button>
            <button className="mm-btn mm-btn--ghost" onClick={onSchedule}>Programação →</button>
          </div>
        </div>
        <div className="mm-hero-dates">
          <span><b>{HERO_CONTENT.dateStart}</b> {HERO_CONTENT.month}</span>
          <span className="sep">—</span>
          <span><b>{HERO_CONTENT.dateEnd}</b> {HERO_CONTENT.month}</span>
          <span className="sep">·</span>
          <span>{HERO_CONTENT.year}</span>
        </div>
      </div>
    </section>
  );
}
