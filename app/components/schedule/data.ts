export type PhaseStatus = 'done' | 'current' | 'next';

export interface SchedulePhase {
  phase: string;
  date: string;
  title: string;
  body: string;
  status: PhaseStatus;
  color: string;
}

export const SCHEDULE_META = {
  lead: 'Nove fases, de janeiro a maio de 2026. ECED e Auditório da ED. Salve as datas — elas não se mexem.',
};

export const SCHEDULE: SchedulePhase[] = [
  {
    phase: '01',
    date: '05 – 18 JAN 2026',
    title: 'Atualização do projeto e elaboração do edital',
    body: 'A equipe revisita o projeto da edição anterior, define os critérios curatoriais e redige o edital oficial da 02ª MOSTRA+.',
    status: 'done',
    color: 'var(--mm-pink)',
  },
  {
    phase: '02',
    date: '26 JAN 2026',
    title: 'Divulgação do edital',
    body: 'O edital é publicado no site e divulgado nos canais oficiais da escola. Alunos têm acesso a todos os critérios, prazos e áreas aceitas.',
    status: 'done',
    color: 'var(--mm-blue)',
  },
  {
    phase: '03',
    date: '02 FEV – 15 MAR 2026',
    title: 'Inscrições',
    body: 'Período de submissão de projetos de conclusão de curso pelo formulário online. Aberto a alunos matriculados e egressos da Escola de Design.',
    status: 'done',
    color: 'var(--mm-orange)',
  },
  {
    phase: '04',
    date: '16 – 29 MAR 2026',
    title: 'Comitê curatorial',
    body: 'O comitê formado por alunos, professores e curador convidado avalia os projetos inscritos com base em pesquisa, execução e potencial expositivo.',
    status: 'done',
    color: 'var(--mm-pink)',
  },
  {
    phase: '05',
    date: '30 MAR 2026',
    title: 'Divulgação dos resultados',
    body: 'Resultado enviado por e-mail a todos os inscritos, com comentários da curadoria. Lista dos selecionados publicada no site.',
    status: 'done',
    color: 'var(--mm-blue)',
  },
  {
    phase: '06',
    date: '31 MAR – 03 MAI 2026',
    title: 'Preparação da Mostra',
    body: 'Período de diálogo entre os selecionados e a equipe de produção: definição de suportes, iluminação, impressão e layout expográfico.',
    status: 'current',
    color: 'var(--mm-orange)',
  },
  {
    phase: '07',
    date: '04 – 05 MAI 2026',
    title: 'Montagem',
    body: 'Instalação das obras na ECED e no Auditório da ED. A equipe de montagem trabalha junto com os autores para posicionar e ajustar cada projeto.',
    status: 'next',
    color: 'var(--mm-pink)',
  },
  {
    phase: '08',
    date: '05 – 19 MAI 2026',
    title: 'Exposição',
    body: 'A MOSTRA+ abre as portas na ECED e no Auditório da ED. Entrada gratuita para o público em geral durante todo o período.',
    status: 'next',
    color: 'var(--mm-blue)',
  },
  {
    phase: '09',
    date: '20 MAI 2026',
    title: 'Desmontagem',
    body: 'Encerramento da montagem e devolução dos projetos aos autores. Registro fotográfico final para o acervo e para o livro da edição.',
    status: 'next',
    color: 'var(--mm-orange)',
  },
];
