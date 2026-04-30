export type PhaseStatus = 'done' | 'current' | 'next';

export interface SchedulePhase {
  phase: string;
  date: string;
  title: string;
  body: string;
  status: PhaseStatus;
  color: string;
}

export const SCHEDULE: SchedulePhase[] = [
  {
    phase: '01',
    date: '05 JAN 2026',
    title: 'Abertura de inscrições',
    body: 'Lançamento do edital e do formulário online. Alunos matriculados podem começar a submeter projetos.',
    status: 'done',
    color: 'var(--mm-pink)',
  },
  {
    phase: '02',
    date: '20 FEV 2026',
    title: 'Encerramento das inscrições',
    body: 'Último dia para submissão. 23h59 no horário de Brasília. Depois dessa data, o sistema é fechado automaticamente.',
    status: 'done',
    color: 'var(--mm-blue)',
  },
  {
    phase: '03',
    date: '25 FEV – 05 MAR 2026',
    title: 'Análise curatorial',
    body: 'O conselho curatorial avalia os projetos em três rodadas — técnica, conceitual e de arranjo expográfico.',
    status: 'current',
    color: 'var(--mm-orange)',
  },
  {
    phase: '04',
    date: '08 MAR 2026',
    title: 'Divulgação dos selecionados',
    body: 'Resultado enviado por e-mail a todos os inscritos, com comentários da curadoria. Lista pública publicada no site.',
    status: 'next',
    color: 'var(--mm-pink)',
  },
  {
    phase: '05',
    date: '12–22 MAR 2026',
    title: 'Produção e montagem',
    body: 'Período de diálogo com a equipe de montagem: suportes, iluminação, testes de interação, impressão de etiquetas.',
    status: 'next',
    color: 'var(--mm-blue)',
  },
  {
    phase: '06',
    date: '27 MAI 2026',
    title: 'Abertura ao público',
    body: 'Vernissage na Galeria Principal às 19h00. Exposição aberta de 27/05 a 31/05, todos os dias, das 10h às 21h.',
    status: 'next',
    color: 'var(--mm-orange)',
  },
  {
    phase: '07',
    date: '31 MAI 2026',
    title: 'Encerramento + Prêmio MOSTRA+',
    body: 'Cerimônia de encerramento e anúncio do Prêmio MOSTRA+ — um projeto de cada área é selecionado para o acervo permanente.',
    status: 'next',
    color: 'var(--mm-pink)',
  },
  {
    phase: '08',
    date: 'OUT 2026',
    title: 'Lançamento do livro da edição',
    body: 'Publicação impressa com ensaios curatoriais, ficha completa de cada projeto e registro fotográfico da montagem.',
    status: 'next',
    color: 'var(--mm-blue)',
  },
];
