'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import About from './components/About';
import { EditionsPage, EditionDetail } from './components/editions';
import Faq from './components/Faq';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import MostraMais from './components/MostraMais';
import Footer from './components/Footer';

type Route = 'sobre' | 'edicoes' | 'cronograma' | 'faq' | 'contato' | 'mais';

export default function Home() {
  const [route, setRoute] = useState<Route>(() => {
    if (typeof window === 'undefined') return 'sobre';
    return (localStorage.getItem('mm-route') as Route) || 'sobre';
  });
  const [selectedProject, setSelectedProject] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('mm-project');
  });

  useEffect(() => { localStorage.setItem('mm-route', route); }, [route]);
  useEffect(() => {
    if (selectedProject) localStorage.setItem('mm-project', selectedProject);
    else localStorage.removeItem('mm-project');
  }, [selectedProject]);

  const onNav = (r: Route) => {
    setRoute(r);
    if (r !== 'edicoes') setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openProject = (id: string) => { setSelectedProject(id); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const closeProject = () => { setSelectedProject(null); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <div className="mm-app">
      <Header active={route} onNav={onNav} />

      {route === 'sobre' && (
        <main className="mm-main">
          <Hero onCta={() => onNav('edicoes')} onSchedule={() => onNav('cronograma')} />
          <Ticker color="orange" items={['02ª EDIÇÃO', '28 MAI— 31 MAI', 'ESCOLA DE DESIGN', '42 PROJETOS', 'INSCRIÇÕES FINALIZADAS']} />
          <About />
          <Manifesto />
        </main>
      )}

      {route === 'edicoes' && (
        <main className="mm-main">
          {selectedProject ? (
            <EditionDetail id={selectedProject} onBack={closeProject} onOpen={openProject} />
          ) : (
            <>
              <EditionsPage onOpen={openProject} />
              <Ticker color="pink" items={['ACERVO ABERTO', '06 EDIÇÕES', '240+ PROJETOS', 'GRÁFICO · PRODUTO · MODA · DIGITAL']} />
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
