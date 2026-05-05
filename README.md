# MOSTRA+

Site oficial da MOSTRA+, exposição de projetos de conclusão de curso da Escola de Design | UEMG. A 02ª edição acontece de 05 a 19 de maio de 2026 na ECED e no Auditório da ED, em Belo Horizonte.

## Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Google Sheets API v4** — CMS para projetos e edições
- **Google Drive** — hospedagem de imagens e PDFs dos projetos

## Estrutura

```
app/
├── page.tsx                  # SPA router principal
├── api/projects/route.ts     # Endpoint que lê do Google Sheets
├── components/
│   ├── header/               # Navegação
│   ├── hero/                 # Seção de abertura
│   ├── about/                # Sobre a mostra e parceiros
│   ├── manifesto/            # Manifesto
│   ├── editions/             # Acervo de projetos (EditionsPage + EditionDetail)
│   ├── schedule/             # Cronograma (9 fases)
│   ├── faq/                  # Perguntas frequentes
│   ├── contact/              # Contato, redes e links úteis
│   ├── mostra-mais/          # Mostra+ um pouco (galeria + formulário)
│   └── footer/               # Rodapé
└── globals.css               # Estilos globais (design system)
```

Cada componente tem um `data.ts` co-localizado com todo o conteúdo textual. Apenas títulos e nomes de botões ficam no JSX.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```
GOOGLE_API_KEY=AIza...
GOOGLE_SHEETS_ID=<id-da-planilha>
```

- A chave de API deve ter acesso apenas à **Google Sheets API**
- A planilha precisa estar compartilhada como **Visualizador (Anyone with the link)**
- Sem essas variáveis, o site usa os dados estáticos de `data.ts` como fallback

## Google Sheets — estrutura da aba `projects`

| Coluna | Campo       | Observação                                  |
| ------ | ----------- | ------------------------------------------- |
| A      | `id`        | identificador único (número ou slug)        |
| B      | `edition`   | número da edição (`1`, `2`…)                |
| C      | `year`      | ano (`2026`)                                |
| D      | `title`     | título do projeto                           |
| E      | `author`    | nome do aluno                               |
| F      | `area`      | `gráfico`, `produto`, `moda` ou `ambientes` |
| G      | `tag`       | subtítulo curto (ex: `IDENTIDADE VISUAL`)   |
| H      | `short`     | descrição de uma linha                      |
| I      | `desc`      | descrição completa                          |
| J      | `advisor`   | orientador (opcional)                       |
| K      | `coverImg`  | URL de imagem no Drive (`/file/d/ID/view`)  |
| L–AN   | `media_N_*` | até 8 slots de mídia (4 colunas cada)       |

**Tipos de mídia:** `image`, `video`, `block`, `pdf`

URLs do Google Drive são normalizadas automaticamente para o formato de thumbnail.

## Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com). Adicione `GOOGLE_API_KEY` e `GOOGLE_SHEETS_ID` nas variáveis de ambiente do projeto na Vercel.
