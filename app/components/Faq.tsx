'use client';

import { useState } from 'react';

const FAQS = [
  { q: 'Quem pode se inscrever na MOSTRA+?', a: 'Qualquer aluno matriculado na Escola de Design em cursos de graduação, tecnólogo ou pós-graduação. Projetos em co-autoria são bem-vindos — basta que pelo menos um dos autores esteja matriculado.' },
  { q: 'Posso enviar um projeto de uma disciplina anterior?', a: 'Sim. Aceitamos trabalhos produzidos dentro da escola nos últimos 24 meses, em qualquer disciplina, projeto de extensão, TCC ou pesquisa.' },
  { q: 'Quantos projetos posso submeter?', a: 'Até três projetos por edição, em qualquer combinação de áreas (Gráfico, Produto, Moda, Digital). Cada inscrição é avaliada individualmente.' },
  { q: 'Como funciona a curadoria?', a: 'Um conselho formado por alunos, professores e um curador convidado avalia cada projeto segundo critérios de pesquisa, execução, pertinência e potencial de diálogo com o mercado.' },
  { q: 'Existe algum custo para o aluno?', a: 'Não. Inscrição, curadoria, montagem, catálogo e programação são gratuitos. A Mostra+ é financiada pela escola e pelos parceiros institucionais.' },
  { q: 'Meu projeto é 100% digital — como ele é exposto?', a: 'Projetos digitais ocupam a Sala 204, equipada com monitores, tablets e projeção interativa. Você trabalha junto com a equipe de montagem para definir o melhor suporte.' },
  { q: 'Quando saem os resultados?', a: 'Até 14 dias após o encerramento das inscrições. Você recebe por e-mail, independentemente do resultado, com comentários da curadoria.' },
  { q: 'E se meu projeto não for selecionado?', a: 'Você pode reinscrevê-lo em edições futuras ou participar da Mostra+Um Pouco — uma seção aberta de curta duração na semana de abertura.' },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mm-faq" id="faq">
      <header className="mm-section-head">
        <div className="mm-eyebrow">+ FAQ</div>
        <h2 className="mm-section-title">Perguntas frequentes.</h2>
        <p className="mm-section-lead">Dúvidas sobre inscrição, curadoria e exposição. Se a sua não estiver aqui, fale com a gente.</p>
      </header>
      <ul className="mm-faq-list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={i} className={`mm-faq-item ${isOpen ? 'open' : ''}`}>
              <button
                className="mm-faq-q"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="mm-faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="mm-faq-text">{f.q}</span>
                <span className="mm-faq-plus" aria-hidden>{isOpen ? '−' : '+'}</span>
              </button>
              <div className="mm-faq-a" role="region" aria-hidden={!isOpen}>
                <p>{f.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
