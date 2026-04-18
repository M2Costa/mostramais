'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import About from './components/About';
import { PastEditions, PastEditionPagina } from './components/PastEditions';
import Faq from './components/Faq';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import MostraMais from './components/MostraMais';
import { MMProjetosList, MMProjetoPagina } from './components/Projetos';
import Footer from './components/Footer';

type Route = 'sobre' | 'anteriores' | 'projetos' | 'cronograma' | 'faq' | 'contato' | 'mais';

export default function Home() {
  const [route, setRoute] = useState<Route>('sobre');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedEdition, setSelectedEdition] = useState<string | null>(null);

  useEffect(() => {
    const r = localStorage.getItem('mm-route') as Route | null;
    if (r) setRoute(r);
    const proj = localStorage.getItem('mm-project');
    if (proj) setSelectedProject(proj);
    const ed = localStorage.getItem('mm-edition');
    if (ed) setSelectedEdition(ed);
  }, []);

  useEffect(() => { localStorage.setItem('mm-route', route); }, [route]);
  useEffect(() => {
    if (selectedProject) localStorage.setItem('mm-project', selectedProject);
    else localStorage.removeItem('mm-project');
  }, [selectedProject]);
  useEffect(() => {
    if (selectedEdition) localStorage.setItem('mm-edition', selectedEdition);
    else localStorage.removeItem('mm-edition');
  }, [selectedEdition]);

  const onNav = (r: Route) => {
    setRoute(r);
    if (r !== 'projetos') setSelectedProject(null);
    if (r !== 'anteriores') setSelectedEdition(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openProject = (id: string) => { setSelectedProject(id); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const closeProject = () => { setSelectedProject(null); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const openEdition = (id: string) => { setSelectedEdition(id); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const closeEdition = () => { setSelectedEdition(null); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <div className="mm-app">
      <Header active={route} onNav={onNav} />

      {route === 'sobre' && (
        <main className="mm-main">
          <Hero onCta={() => onNav('projetos')} onSchedule={() => onNav('cronograma')} />
          <Ticker color="orange" items={['02ª EDIÇÃO', '28 MAI— 31 MAI', 'ESCOLA DE DESIGN', '42 PROJETOS', 'INSCRIÇÕES FINALIZADAS']} />
          <About />
          <Manifesto />
        </main>
      )}

      {route === 'anteriores' && (
        <main className="mm-main">
          {selectedEdition ? (
            <PastEditionPagina id={selectedEdition} onBack={closeEdition} onOpen={openEdition} />
          ) : (
            <>
              <PastEditions onOpen={openEdition} />
              <Ticker color="pink" items={['ACERVO ABERTO', '06 EDIÇÕES', '240+ PROJETOS', 'GRÁFICO · PRODUTO · MODA · DIGITAL']} />
            </>
          )}
        </main>
      )}

      {route === 'projetos' && (
        <main className="mm-main">
          {selectedProject ? (
            <MMProjetoPagina id={selectedProject} onBack={closeProject} onOpen={openProject} />
          ) : (
            <>
              <MMProjetosList onOpen={openProject} />
              <Ticker color="pink" items={['PROJETOS 2026', 'RECORTE DIGITAL', '06 PROJETOS SELECIONADOS', 'ESCOLA DE DESIGN']} />
            </>
          )}
        </main>
      )}

      {route === 'cronograma' && (
        <main className="mm-main">
          <Schedule />
          <Ticker color="blue" items={['EDITAL 02', 'INSCRIÇÕES ATÉ 20/02', 'RESULTADO 08/03', 'ABERTURA 27/05']} />
        </main>
      )}

      {route === 'faq' && (
        <main className="mm-main">
          <Faq />
          <Ticker color="orange" items={['AINDA COM DÚVIDAS?', 'ESCREVE PARA CURADORIA@MOSTRAMAIS.EDU', 'RESPOSTA EM 48H', '+']} />
        </main>
      )}

      {route === 'contato' && (
        <main className="mm-main">
          <Contact />
        </main>
      )}

      {route === 'mais' && (
        <main className="mm-main">
          <MostraMais />
        </main>
      )}

      <Footer />
    </div>
  );
}
