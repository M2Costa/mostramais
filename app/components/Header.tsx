'use client';

import { useState } from 'react';
import Image from 'next/image';

type Route = 'sobre' | 'anteriores' | 'projetos' | 'cronograma' | 'faq' | 'contato' | 'mais';

interface HeaderProps {
  active: Route;
  onNav: (r: Route) => void;
}

const NAV_ITEMS: [Route, string][] = [
  ['anteriores', 'Edições Anteriores'],
  ['projetos',   'Projetos'],
  ['cronograma', 'Cronograma'],
  ['faq',        'FAQ'],
  ['contato',    'Contato'],
  ['mais',       'Mostra + um pouco'],
];

export default function Header({ active, onNav }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="mm-header">
      <div className="mm-header-inner">
        <button
          className="mm-mark"
          onClick={() => { onNav('sobre'); setMobileOpen(false); }}
          aria-label="MOSTRA+ home"
        >
          <Image src="/assets/logo_colorida.png" alt="MOSTRA+" width={200} height={56} style={{ height: '100%', width: 'auto' }} />
        </button>
        <nav className={`mm-nav ${mobileOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(([k, l]) => (
            <a
              key={k}
              className={active === k ? 'active' : ''}
              onClick={() => { onNav(k); setMobileOpen(false); }}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="mm-header-right">
          <div className="mm-chip-edition">EDIÇÃO 02 · 2026</div>
          <button
            className="mm-burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
