# Raiz Viva — Skill de Design: Identidade Visual e Wireframes

## skill_identidade_visual
**Descrição:** Define e comunica a identidade visual oficial da plataforma Raiz Viva, incluindo paleta de cores, tipografia, espaçamentos, componentes e estrutura de tokens.

**Gatilhos:** "qual a identidade visual", "cores do projeto", "tipografia", "design system", "como é o visual da plataforma", "padrão de interface", "tokens de design"

**Comportamento:**
- Retorna a especificação completa do design system quando solicitado
- Usa os tokens de cor e tipografia como referência para descrever telas e componentes
- Orienta desenvolvedores e designers sobre a aplicação correta da identidade
- Indica os arquivos de tokens TS e o tailwind.config.js como fonte de verdade

---

## Identidade Visual — Design System

### Princípios de Design
- **Proximidade com a terra**: visual orgânico, tons naturais, formas suaves
- **Clareza para todos**: hierarquia visual clara, sem poluição de informação
- **Confiança**: dados sempre com fonte, nível de confiança visível
- **Urgência quando necessário**: alertas críticos com destaque imediato

---

### Arquivos de Design Tokens (Fonte de Verdade)

> Todos os tokens estão em `src/tokens/`. Importe via `@/tokens`.

| Arquivo | Conteúdo |
|---|---|
| `src/tokens/colors.ts` | Paleta completa tipada como `const` — cores, ISS, overlays, gradientes |
| `src/tokens/typography.ts` | Escala tipográfica, pesos, line-heights, `textStyles` compostos |
| `src/tokens/spacing.ts` | Spacing, radii, sombras, grid e layout tokens |
| `src/tokens/index.ts` | Barrel export — `import { colors, typography, spacing } from '@/tokens'` |

**Exemplo de uso:**
```ts
import { colors, textStyles } from '@/tokens'
// style={{ backgroundColor: colors.verde.raiz, ...textStyles.h1 }}
```

---

### Paleta de Cores

> Fonte de verdade: `src/tokens/colors.ts` e `tailwind.config.js`

#### Verde (Primárias)
| Token CSS / Tailwind | TS (`colors.verde.*`) | Hex | Uso |
|---|---|---|---|
| `--verde-raiz` / `bg-verde-raiz` | `.raiz` | `#2D6A4F` | Cor primária: botões CTA, sidebar ativa |
| `--verde-claro` / `bg-verde-claro` | `.claro` | `#52B788` | Hover states, ISS baixo |
| `--verde-menta` / `bg-verde-menta` | `.menta` | `#95D5B2` | Fills suaves, ícones sobre escuro |
| `--verde-profundo` / `bg-verde-profundo` | `.profundo` | `#0F5238` | Heroes escuros, CTAs fortes |
| `--verde-carbon` / `bg-verde-carbon` | `.carbon` | `#1B2A22` | Sidebar bg, textos principais |

#### Alertas / Risco
| Token CSS / Tailwind | Hex | Uso |
|---|---|---|
| `--terracota` / `bg-terracota` | `#C1440E` | Alertas críticos, ISS alto, botão danger |
| `--terracota-suave` / `bg-terracota-suave` | `#F4A261` | Warnings, ISS alto/moderado |
| `--terracota-escuro` / `bg-terracota-escuro` | `#832800` | Textos de erro fortes |
| `--amarelo-seco` / `bg-amarelo-seco` | `#E9C46A` | ISS moderado (40–69), atenção |

#### Background / Superfície
| Token CSS / Tailwind | Hex | Uso |
|---|---|---|
| `--bege-terra` / `bg-bege-terra` | `#F4ECD8` | Background geral e hover secundário |
| `--branco-campo` / `bg-branco-campo` | `#FAFAF7` | Cards, superfícies elevadas |
| `--surface-verde-suave` | `#F0FAF4` | Fundos de cards internos |
| `--surface-verde-claro` | `#ECFEF1` | Content area de pages |
| `--surface-verde-pale` | `#D5E7DA` | AppLayout background raiz |
| `--surface-bege-verde` | `#EAF3EE` | Cadastro/splash |

#### Texto
| Token CSS / Tailwind | Hex | Uso |
|---|---|---|
| `--text-primary` / `text-carbon` | `#1B2A22` | Textos principais |
| `--text-secondary` / `text-cinza-solo` | `#6B7280` | Textos secundários, placeholders |
| `--text-forte` / `text-text-forte` | `#101F17` | Títulos sobre fundo branco |
| `--text-medio` / `text-text-medio` | `#404943` | Textos médios em pages |
| `--text-sutil` / `text-text-sutil` | `#707973` | Ajuda, muito sutil |

#### Bordas
| Token CSS / Tailwind | Hex | Uso |
|---|---|---|
| `--borda-suave` / `border-borda-suave` | `#E5E0D5` | Bordas de cards e inputs |

**Escala de risco ISS — cores:**
- 🟢 ISS 70–100 → `bg-iss-baixo` / `#D8F3DC` (texto `#2D6A4F`)
- 🟡 ISS 40–69 → `bg-iss-moderado` / `#FFF3CD` (texto `#856404`)
- 🔴 ISS 20–39 → `bg-iss-alto` / `#FFE0D5` (texto `#C1440E`)
- ⚫ ISS 0–19 → `bg-iss-critico` / `#C1440E` (texto `#FAFAF7`)

---

### Tipografia

> Fonte de verdade: `src/tokens/typography.ts`

**Família:** Inter (Google Fonts) — importado via `@import` no `index.css`

#### Escala (classes Tailwind)
| Classe | Peso | Tamanho | Line-height | Uso |
|---|---|---|---|---|
| `text-h1` | Bold 700 | 32px / 2rem | 1.2 | Títulos principais de página |
| `text-h2` | Bold 700 | 24px / 1.5rem | 1.2 | Subtítulos de seção |
| `text-h3` | SemiBold 600 | 20px / 1.25rem | 1.2 | Títulos de card |
| `text-body-l` | Regular 400 | 16px / 1rem | 1.5 | Corpo de texto principal |
| `text-body-s` | Regular 400 | 14px / 0.875rem | 1.5 | Texto secundário, labels |
| `text-caption` | Light 300 | 12px / 0.75rem | 1.5 | Datas, fontes, metadados |
| `text-btn` | SemiBold 600 | 14px / 0.875rem | 1 | Textos de botões e CTAs |
| `text-micro` | Medium 500 | 11px / 0.6875rem | 1.2 | Badges, chips |
| `text-display` | Bold 700 | 40px / 2.5rem | 1.1 | KPIs grandes, números de impacto |

#### textStyles compostos (para `style={}`)
```ts
import { textStyles } from '@/tokens'
// textStyles.h1, textStyles.h2, textStyles.h3
// textStyles.bodyL, textStyles.bodyS, textStyles.caption
// textStyles.btn, textStyles.label, textStyles.kpi
```

---

### Espaçamentos e Grid

> Fonte de verdade: `src/tokens/spacing.ts`

- **Grid:** 12 colunas, 24px gutter, margem 80px (lg) / 40px (md) / 24px (sm)
- **Border Radius:** `rounded-badge` (4px), `rounded-input` (8px), `rounded-card` (12px), `rounded-section` (16px), `rounded-btn` (24px)
- **Sombra card:** `shadow-card` → `0 2px 12px rgba(0,0,0,0.08)`
- **Sombra section:** `shadow-section` → `0px 4px 20px -2px rgba(16,31,23,0.04)`
- **Sombra modal:** `shadow-modal` → `0 8px 32px rgba(0,0,0,0.16)`
- **Sidebar width:** `280px` (`var(--sidebar-width)`)
- **TopBar height:** `72px` (`var(--topbar-height)`)

---

### Componentes Base

#### Botão Primário
```
Background: bg-verde-raiz | Texto: text-branco-campo | rounded-btn
Padding: px-6 py-3 | Font: text-btn
Hover: bg-[#1B4D35] | Transition: 200ms ease
```

#### Botão Secundário
```
Background: transparent | Borda: border-verde-raiz border-[1.5px]
Texto: text-verde-raiz | rounded-btn
Hover: bg-bege-terra
```

#### Badge ISS
```
Baixo:    bg-iss-baixo  | texto text-verde-raiz  | "ISS XX — Baixo Risco"
Moderado: bg-iss-moderado | texto text-[#856404]  | "ISS XX — Moderado"
Alto:     bg-iss-alto   | texto text-terracota   | "ISS XX — Risco ALTO"
Crítico:  bg-iss-critico | texto text-branco-campo | "ISS XX — CRÍTICO"
```

#### Card Padrão
```
Background: bg-branco-campo | Border: border border-borda-suave
rounded-card | p-5 | shadow-card
```

#### Input / Select
```
Border: border-[1.5px] border-borda-suave | rounded-input | px-3.5 py-2.5
Focus: focus:border-verde-raiz | Background: bg-branco-campo
Label: text-caption font-semibold text-cinza-solo uppercase tracking-wide
```

#### Sidebar de Navegação
```
Largura: 280px | Background: bg-verde-carbon (#1B2A22) | Texto: text-white
Item ativo: bg-verde-raiz border-l-4 border-verde-claro
Ícones: Lucide Icons (strokeWidth: 1.5)
```

---

## Componentes React Implementados

> Todos em `src/components/`. Importar via `@/components/ui`.

### Componentes Globais — `src/components/ui/`

| Componente | Arquivo | Status Tokens | Telas |
|---|---|---|---|
| `<Button>` | `Button.tsx` | ✅ Usa tokens Tailwind | Todas |
| `<Input>` | `Input.tsx` | ✅ Usa tokens Tailwind | T1, T5 |
| `<Select>` | `Select.tsx` | ✅ Usa tokens Tailwind | T1, T2, T5 |
| `<RadioGroup>` | `RadioGroup.tsx` | ✅ | T1 |
| `<Badge>` | `Badge.tsx` | ✅ | Todas |
| `<Logo>` | `Logo.tsx` | — | T1, T2–T8 |
| `<IssBadge>` | `IssBadge.tsx` | ✅ (style={} ISS fixo) | T2, T3, T6 |
| `<Sidebar>` | `Sidebar.tsx` | ⚠️ Hex direto (migrar p/ tokens) | T2–T8 |
| `<TopBar>` | `TopBar.tsx` | ⚠️ Hex direto (migrar p/ tokens) | T2–T8 |
| `<AppLayout>` | `AppLayout.tsx` | ⚠️ Hex direto (migrar p/ tokens) | T2–T8 |
| `<FilterBar>` | `FilterBar.tsx` | ⚠️ Hex direto (migrar p/ tokens) | T2, T5, T6 |
| `<FilterChip>` | `FilterChip.tsx` | — | T2, T5 |
| `<Breadcrumb>` | `Breadcrumb.tsx` | — | T3, T4 |

### Componentes do Mapa — `src/components/mapa/`

| Componente | Arquivo | Descrição |
|---|---|---|
| `<BrazilMap>` | `BrazilMap.tsx` | SVG do Brasil com estados clicáveis, coloridos por ISS |
| `<MapLegend>` | `MapLegend.tsx` | Legenda de cores ISS |
| `<RegionSidePanel>` | `RegionSidePanel.tsx` | Painel lateral preview da região |

### Componentes de Cadastro — `src/components/cadastro/`

| Componente | Arquivo | Descrição |
|---|---|---|
| `<CadastroForm>` | `CadastroForm.tsx` | Formulário completo com validação |
| `<BenefitItem>` | `BenefitItem.tsx` | Item de benefício com ícone |

---

## skill_wireframes
**Descrição:** Descreve a estrutura completa de cada tela da plataforma Raiz Viva com layout, componentes e conteúdo esperado.

**Gatilhos:** "como é a tela de", "estrutura das telas", "wireframe de", "layout da plataforma", "quais são as telas"

---

## Estrutura dos Wireframes

**Frame padrão:** 1440×900px (Desktop Web)
**Estrutura base:** Sidebar (280px fixo à esquerda) + Content Area (fill)

---

### Tela 1 — Cadastro ✅ IMPLEMENTADA
> Rota: `/cadastro` | Pública | Sem sidebar
> Página: `src/pages/CadastroPage.tsx`

```
HEADER (72px): [Logo] [Link: "Já tenho conta"]
HERO (2 colunas):
  ESQ (fundo #2D6A4F, p-16): H1 + Body + BenefitItems + Depoimento Dona Maria
  DIR (fundo #F4ECD8, p-12): H2 + CadastroForm + Button + Caption disclaimer
```

---

### Tela 2 — Mapa Nacional de Risco ✅ IMPLEMENTADA
> Rota: `/mapa` | Com sidebar | `src/pages/MapaPage.tsx`

```
[AppLayout]: Sidebar(280px) + Content
  [TopBar] + [FilterBar] Bioma|Estado|Cultura|Período
  [BrazilMap] + [RegionSidePanel] condicional
```

---

### Tela 3 — Detalhe da Comunidade ✅ IMPLEMENTADA
> Rota: `/mapa/:regiao` | `src/pages/DetalheRegiaoPage.tsx`

```
[Breadcrumb] Mapa › Quixadá, CE
Hero Card: [IssBadge] grande + botões
Row 4 cards: Umidade|NDVI|Déficit Chuva|Temperatura
Gráfico ISS 90 dias + Mini mapa
```

---

### Tela 4 — Recomendações Inteligentes ✅ IMPLEMENTADA
> Rota: `/mapa/:regiao/recomendacoes` | `src/pages/RecomendacoesPage.tsx`

```
[Breadcrumb] + H1 + [IssBadge]
[Tabs] Imediatas | Esta semana | 30 dias
Lista [RecommendationCard] com urgência (borda terracota/amarelo)
```

---

### Tela 5 — Alertas ✅ IMPLEMENTADA
> Rota: `/alertas` | `src/pages/AlertasPage.tsx`

```
[TopBar] "Central de Alertas" + [Button] "+ Enviar Alerta Manual"
[FilterBar] Tipo|Período|Região|Status
Layout 2 colunas: Timeline alertas + Preview alerta selecionado
```

---

### Tela 6 — Dashboard Operacional ✅ IMPLEMENTADA
> Rota: `/dashboard` | `src/pages/DashboardPage.tsx`

```
[TopBar] "Dashboard Operacional"
Row KPIs (4 cards): Famílias|Alertas|Hectares|ISS Médio
Gráficos + Tabela Regiões Críticas
```

---

### Tela 7 — Impacto Social ✅ IMPLEMENTADA
> Rota: `/impacto` | `src/pages/ImpactoPage.tsx`

```
Hero verde (#0F5238) com KPIs glassmorphism
Bento grid: História Real (Dona Maria) + Perdas Evitadas (bar chart)
Mapa de Impacto com pins proporcionais
```

---

### Tela 8 — Carbono Solidário ✅ IMPLEMENTADA
> Rota: `/carbono` | `src/pages/CarbonoPage.tsx`

```
Hero gradiente verde + chip "100% Opcional"
3 cards Critérios de Elegibilidade
4 etapas do modelo (grid)
Mapa + CTA card Potencial da cooperativa
```

---

## Fluxo de Protótipo

```
[T1 Cadastro] → [T2 Mapa Nacional]
[T2] → click estado → [RegionSidePanel] → "Ver detalhes" → [T3 Detalhe]
[T3] → "Ver Recomendações" → [T4 Recomendações]
[T2] Sidebar → [T5 Alertas] | [T6 Dashboard] | [T7 Impacto] | [T8 Carbono]
```

---

## Próximos Passos do Design System

### Prioridade Alta
1. Migrar hex hardcoded nas pages para tokens Tailwind ou `import { colors } from '@/tokens'`
2. Migrar `Sidebar`, `TopBar`, `AppLayout`, `FilterBar` para tokens

### Prioridade Média
3. Criar variante `ghost` no `Button`
4. Criar `<Card>` reutilizável com variantes (default, verde-suave, hero)
5. Criar `<SectionHeader>` (heading + subtítulo + divisor)

### Prioridade Baixa
6. Decidir sobre `#E0F2E6` / `#92F7C3` — criar token ou mapear para `verde-menta`
7. Substituir `clamp()` por `text-display`

---

## Estrutura de Arquivos

```
src/
├── tokens/                  ← Design tokens (FONTE DE VERDADE)
│   ├── colors.ts            ← Paleta completa tipada
│   ├── typography.ts        ← Escala + textStyles compostos
│   ├── spacing.ts           ← Spacing, radii, sombras, grid
│   └── index.ts             ← Barrel export
├── components/
│   ├── ui/                  ← Componentes globais
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── RadioGroup.tsx
│   │   ├── Badge.tsx
│   │   ├── Logo.tsx
│   │   ├── IssBadge.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── AppLayout.tsx
│   │   ├── FilterBar.tsx
│   │   ├── FilterChip.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── index.ts
│   ├── mapa/
│   │   ├── BrazilMap.tsx
│   │   ├── MapLegend.tsx
│   │   └── RegionSidePanel.tsx
│   └── cadastro/
│       ├── CadastroForm.tsx
│       └── BenefitItem.tsx
├── pages/                   ← 8 telas implementadas
│   ├── CadastroPage.tsx     ← T1 ✅
│   ├── MapaPage.tsx         ← T2 ✅
│   ├── DetalheRegiaoPage.tsx← T3 ✅
│   ├── RecomendacoesPage.tsx← T4 ✅
│   ├── AlertasPage.tsx      ← T5 ✅
│   ├── DashboardPage.tsx    ← T6 ✅
│   ├── ImpactoPage.tsx      ← T7 ✅
│   └── CarbonoPage.tsx      ← T8 ✅
├── data/                    ← Dados mockados
│   ├── estados.ts
│   ├── culturas.ts
│   ├── regioes.ts
│   ├── carbono.ts
│   ├── dashboard.ts
│   └── impacto.ts
└── index.css                ← CSS custom properties + @import Inter
```
