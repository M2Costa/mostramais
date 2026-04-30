export type GalleryKind = 'image' | 'video' | 'gif';
export type GallerySpan = 'big' | 'tall' | 'std';

export interface GalleryItem {
  kind: GalleryKind;
  title: string;
  sub: string;
  color: string;
  span?: GallerySpan;
}

export const GALLERY: GalleryItem[] = [
  { kind: 'image', title: 'Vernissage ed. 02',      sub: 'Galeria Principal · 2026', color: 'var(--mm-pink)',   span: 'big' },
  { kind: 'video', title: 'Making-of montagem',     sub: '4:12 · 2025',              color: '#111' },
  { kind: 'image', title: 'Portfolio Night',        sub: 'Foyer · 2025',             color: 'var(--mm-blue)' },
  { kind: 'image', title: 'Workshop tipografia',    sub: 'Sala 204 · 2025',          color: 'var(--mm-orange)' },
  { kind: 'image', title: 'Mesa: Design e mercado', sub: 'Auditório B · 2025',       color: '#2D155B',          span: 'tall' },
  { kind: 'gif',   title: 'Loop vinheta',           sub: '00:06 · 2025',             color: '#E72818' },
  { kind: 'image', title: 'Prêmio MOSTRA+',         sub: 'Encerramento · 2025',      color: 'var(--mm-pink)' },
  { kind: 'image', title: 'Acervo físico',          sub: 'Sala de arquivo · 2025',   color: 'var(--mm-blue)' },
  { kind: 'video', title: 'Entrevista curatorial',  sub: '6:30 · 2025',              color: '#111' },
];

export const TOPICS = [
  'Abertura',
  'Workshops',
  'Portfolio Night',
  'Visitas guiadas',
  'Livro da edição',
  'Curadoria aberta',
];

export const ROLES: [string, string][] = [
  ['aluno',     'Aluno(a)'],
  ['ex-aluno',  'Ex-aluno(a)'],
  ['externo',   'Público externo'],
  ['estudio',   'Estúdio / mercado'],
];

export const STATS = [
  { value: '2.4k', label: 'Pessoas na lista',            color: undefined },
  { value: '18',   label: 'Conteúdos exclusivos em 2026', color: 'var(--mm-blue)' },
  { value: '02ª',  label: 'Edição em curso',              color: 'var(--mm-orange)' },
];
