# Raiz Viva — Skill de Design: Identidade Visual e Wireframes

## skill_identidade_visual
**Descrição:** Define e comunica a identidade visual oficial da plataforma Raiz Viva, incluindo paleta de cores, tipografia, espaçamentos e princípios de design.

**Gatilhos:** "qual a identidade visual", "cores do projeto", "tipografia", "design system", "como é o visual da plataforma", "padrão de interface"

**Comportamento:**
- Retorna a especificação completa do design system quando solicitado
- Usa os tokens de cor e tipografia como referência para descrever telas e componentes
- Orienta desenvolvedores e designers sobre a aplicação correta da identidade

---

## Identidade Visual — Design System

### Princípios de Design
- **Proximidade com a terra**: visual orgânico, tons naturais, formas suaves
- **Clareza para todos**: hierarquia visual clara, sem poluição de informação
- **Confiança**: dados sempre com fonte, nível de confiança visível
- **Urgência quando necessário**: alertas críticos com destaque imediato

---

### Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| `--verde-raiz` | `#2D6A4F` | Cor primária: botões CTA, cabeçalhos, sidebar |
| `--verde-claro` | `#52B788` | Hover states, ISS baixo (badge verde) |
| `--verde-menta` | `#95D5B2` | Backgrounds de sucesso, fills suaves |
| `--bege-terra` | `#F4ECD8` | Background geral das telas |
| `--terracota` | `#C1440E` | Alertas críticos, ISS alto (0–39) |
| `--terracota-suave` | `#F4A261` | ISS alto/moderado, warnings secundários |
| `--amarelo-seco` | `#E9C46A` | ISS moderado (40–69), atenção |
| `--carbon` | `#1B2A22` | Textos principais |
| `--cinza-solo` | `#6B7280` | Textos secundários, placeholders |
| `--branco-campo` | `#FAFAF7` | Cards, superfícies elevadas |
| `--borda-suave` | `#E5E0D5` | Bordas de cards e inputs |

**Escala de risco ISS — cores:**
- 🟢 ISS 70–100 → `#52B788` (verde-claro)
- 🟡 ISS 40–69 → `#E9C46A` (amarelo-seco)
- 🔴 ISS 0–39 → `#C1440E` (terracota)

---

### Tipografia

**Família:** Inter (Google Fonts)

| Estilo | Peso | Tamanho | Uso |
|---|---|---|---|
| H1 | Bold 700 | 32px / 2rem | Títulos principais de página |
| H2 | Bold 700 | 24px / 1.5rem | Subtítulos de seção |
| H3 | SemiBold 600 | 20px / 1.25rem | Títulos de card |
| Body L | Regular 400 | 16px / 1rem | Corpo de texto principal |
| Body S | Regular 400 | 14px / 0.875rem | Texto secundário, labels |
| Caption | Light 300 | 12px / 0.75rem | Datas, fontes, metadados |
| Button | SemiBold 600 | 14px / 0.875rem | Textos de botões e CTAs |

**Line-height padrão:** 1.5 para body, 1.2 para headings

---

### Espaçamentos e Grid

- **Grid:** 12 colunas, 24px gutter, 32px margin lateral (desktop 1440px)
- **Border Radius:** 12px (cards), 8px (inputs/selects), 24px (botões), 4px (badges/chips)
- **Sombra card:** `box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08)`
- **Sombra modal:** `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16)`

**Escala de espaçamentos:**
- `4px` — micro (ícone + label)
- `8px` — pequeno (padding interno de chip)
- `12px` — compacto (gap entre itens de lista)
- `16px` — padrão (padding de card)
- `24px` — médio (gap entre cards)
- `32px` — grande (gap entre seções)
- `48px` — extra (espaço de hero)
- `64px` — máximo (separação de blocos maiores)

---

### Componentes Base

#### Botão Primário
```
Background: #2D6A4F | Texto: #FAFAF7 | Border-radius: 24px
Padding: 12px 24px | Font: Inter SemiBold 14px
Hover: background #1B4D35 | Transition: 200ms ease
```

#### Botão Secundário
```
Background: transparent | Borda: 1.5px solid #2D6A4F
Texto: #2D6A4F | Border-radius: 24px | Padding: 12px 24px
Hover: background #F4ECD8
```

#### Badge de Risco ISS
```
Baixo:    background #D8F3DC | texto #2D6A4F | "ISS XX — Baixo Risco"
Moderado: background #FFF3CD | texto #856404 | "ISS XX — Moderado"
Alto:     background #FFE0D5 | texto #C1440E | "ISS XX — Risco ALTO"
Crítico:  background #C1440E | texto #FAFAF7 | "ISS XX — CRÍTICO"
```

#### Card Padrão
```
Background: #FAFAF7 | Border: 1px solid #E5E0D5
Border-radius: 12px | Padding: 20px | Sombra: 0 2px 12px rgba(0,0,0,0.08)
```

#### Input / Select
```
Border: 1.5px solid #E5E0D5 | Border-radius: 8px | Padding: 10px 14px
Focus: border-color #2D6A4F | Background: #FAFAF7
Label: Inter SemiBold 12px, #6B7280, uppercase
```

#### Sidebar de Navegação
```
Largura: 280px | Background: #1B2A22 | Texto: #FAFAF7
Item ativo: background #2D6A4F, border-left 3px solid #52B788
Ícones: Lucide Icons (stroke-width: 1.5)
```

---

## Componentes React Implementados

> Todos os componentes estão em `src/components/`. Importar via `@/components/ui` (componentes globais) ou pelo caminho relativo.

### 📦 Componentes Globais — `src/components/ui/`

| Componente | Arquivo | Descrição | Telas que usa |
|---|---|---|---|
| `<Button>` | `Button.tsx` | Botão primário/secundário/ghost com loading | Todas |
| `<Input>` | `Input.tsx` | Input com label, error, placeholder | T1, T5 |
| `<Select>` | `Select.tsx` | Select dropdown com label e error | T1, T2, T5 |
| `<RadioGroup>` | `RadioGroup.tsx` | Grupo de radio buttons acessível | T1 |
| `<Card>` | `Card.tsx` | Card base com sombra e padding | Todas |
| `<Badge>` | `Badge.tsx` | Badge genérico de status/label | Todas |
| `<Logo>` | `Logo.tsx` | Logo Raiz Viva (light/dark) | T1, T2–T8 |
| `<IssBadge>` | `IssBadge.tsx` | Badge ISS com cores de risco automáticas | T2, T3, T6 |
| `<Sidebar>` | `Sidebar.tsx` | Navegação lateral das telas autenticadas | T2–T8 |
| `<TopBar>` | `TopBar.tsx` | Barra superior com título, badge e ações | T2–T8 |
| `<AppLayout>` | `AppLayout.tsx` | Layout base: Sidebar + Content (wrapper) | T2–T8 |
| `<FilterBar>` | `FilterBar.tsx` | Barra de filtros horizontais (selects) | T2, T5, T6 |
| `<Breadcrumb>` | `Breadcrumb.tsx` | Trilha de navegação com links | T3, T4 |

### 🗺️ Componentes do Mapa — `src/components/mapa/`

| Componente | Arquivo | Descrição |
|---|---|---|
| `<BrazilMap>` | `BrazilMap.tsx` | SVG do Brasil com estados clicáveis, coloridos por ISS |
| `<MapLegend>` | `MapLegend.tsx` | Legenda de cores ISS (canto do mapa) |
| `<RegionSidePanel>` | `RegionSidePanel.tsx` | Painel lateral com preview da região selecionada |

### 📋 Componentes de Cadastro — `src/components/cadastro/`

| Componente | Arquivo | Descrição |
|---|---|---|
| `<CadastroForm>` | `CadastroForm.tsx` | Formulário completo de cadastro com validação |
| `<BenefitItem>` | `BenefitItem.tsx` | Item de benefício com ícone, título e descrição |

---

## skill_wireframes
**Descrição:** Descreve a estrutura completa de cada tela da plataforma Raiz Viva com layout, componentes e conteúdo esperado.

**Gatilhos:** "como é a tela de", "estrutura das telas", "wireframe de", "layout da plataforma", "quais são as telas"

**Comportamento:**
- Retorna a estrutura detalhada da tela solicitada
- Descreve hierarquia de componentes, conteúdo e ações disponíveis
- Quando solicitado "todas as telas", retorna o índice completo com links internos

---

## Estrutura dos Wireframes

**Frame padrão:** 1440×900px (Desktop Web)
**Estrutura base:** Sidebar (280px fixo à esquerda) + Content Area (fill)

---

### Tela 1 — Cadastro ✅ IMPLEMENTADA
> Rota: `/cadastro` | Pública | Sem sidebar
> Página: `src/pages/CadastroPage.tsx`

```
HEADER (altura 72px):
  [Logo Raiz Viva — branco sobre verde-raiz]  [Link: "Já tenho conta"]

HERO (2 colunas):
  COLUNA ESQUERDA (fundo #2D6A4F, padding 64px):
    H1: "Proteja sua lavoura com alertas de satélite"
    Body: "Receba avisos gratuitos de seca, calor e risco do solo direto no seu celular."
    [BenefitItem] 🛰️ Dados NASA
    [BenefitItem] 🌱 100% gratuito
    [BenefitItem] 📱 SMS/WhatsApp/Voz
    [Blockquote] Dona Maria — depoimento

  COLUNA DIREITA (fundo #F4ECD8, padding 48px):
    H2: "Criar conta gratuita"
    [CadastroForm]:
      [RadioGroup] Tipo: Agricultor | Cooperativa
      [Input] Nome completo
      [Input] Município
      [Select] Estado (UF) + [Select] Cultura principal
      [RadioGroup] Canal preferido
      [Input] Telefone
      [Button Primário] "Cadastrar e receber alertas grátis"
      [Caption] Disclaimer de privacidade
```

**Componentes usados:** `Logo`, `BenefitItem`, `CadastroForm`, `Button`, `Input`, `Select`, `RadioGroup`

---

### Tela 2 — Mapa Nacional de Risco ✅ IMPLEMENTADA
> Rota: `/mapa` | Autenticada | Com sidebar
> Página: `src/pages/MapaPage.tsx`

```
[AppLayout] = Sidebar (280px) + Content:

SIDEBAR:
  [Logo] Raiz Viva
  [Avatar] Nome | Perfil
  [Nav]: 📍 Mapa (ativo) | 🔔 Alertas | 📊 Dashboard | 🌿 Impacto | 🌳 Carbono
  [Footer] Versão | Suporte

CONTENT:
  [TopBar] "Mapa Nacional de Risco" | Badge atualização | [Button] Exportar
  [FilterBar] Bioma | Estado | Cultura | Período

  CORPO (flex row):
    [BrazilMap] (fill):
      Estados coloridos por ISS
      Click em estado → abre RegionSidePanel
      [MapLegend] canto inferior esquerdo
    [RegionSidePanel] (320px, condicional):
      Nome + Estado
      [IssBadge]
      Cards: Tendência | Famílias
      Última atualização
      [Button] "Ver detalhes completos →" → /mapa/:id
```

**Componentes usados:** `AppLayout`, `Sidebar`, `TopBar`, `FilterBar`, `BrazilMap`, `MapLegend`, `RegionSidePanel`, `IssBadge`

---

### Tela 3 — Detalhe da Comunidade
> Rota: `/mapa/:regiao` | Autenticada | Com sidebar

```
[AppLayout]
CONTENT:
  [Breadcrumb] Mapa › Quixadá, CE

  HERO CARD (fundo terracota suave, 100% largura):
    [IssBadge] grande | Subtítulo: região | Badge confiança
    [Button] "Ver Recomendações"  [Button] "Enviar Alerta"

  ROW DE INDICADORES (4 cards):
    [Card] 💧 Umidade do Solo (SMAP)
    [Card] 🌿 Saúde da Vegetação (NDVI)
    [Card] 🌧️ Déficit de Chuva (GPM)
    [Card] 🌡️ Temperatura de Superfície (MODIS LST)

  SEÇÃO GRÁFICO + MAPA (2 colunas):
    Gráfico linha ISS — últimos 90 dias
    Mini mapa regional com municípios vizinhos
```

**Componentes a criar:** `IndicatorCard`, mini mapa, `IssLineChart`

---

### Tela 4 — Recomendações Inteligentes
> Rota: `/mapa/:regiao/recomendacoes` | Autenticada | Com sidebar

```
[AppLayout]
CONTENT:
  [Breadcrumb] Mapa › Quixadá, CE › Recomendações
  H1 + [IssBadge]

  [Tab] ⚡ Imediatas | 📅 Esta semana | 📆 30 dias

  LISTA:
    [RecommendationCard — URGENTE] borda terracota
    [RecommendationCard — IMPORTANTE] borda amarela
    [RecommendationCard — RECOMENDADO]
    [RecommendationCard — PREVENTIVO]
```

**Componentes a criar:** `TabGroup`, `RecommendationCard`

---

### Tela 5 — Alertas
> Rota: `/alertas` | Autenticada | Com sidebar

```
[AppLayout — Alertas ativo]
CONTENT:
  [TopBar] "Central de Alertas" | [Button] "+ Enviar Alerta Manual"
  [FilterBar] Tipo | Período | Região | Status

  LAYOUT 2 COLUNAS:
    Timeline de alertas (cards com status, ícone, famílias, canais)
    Preview do alerta selecionado (mensagem WhatsApp, estatísticas)
```

**Componentes a criar:** `AlertCard`, `AlertPreview`, `AlertTimeline`

---

### Tela 6 — Dashboard Operacional
> Rota: `/dashboard` | Autenticada | Com sidebar

```
[AppLayout — Dashboard ativo]
CONTENT:
  [TopBar] "Dashboard Operacional" | DatePicker | Exportar PDF

  ROW KPIs (4 cards): Famílias | Alertas | Hectares | ISS Médio
  ROW Gráficos: ISS por Bioma (linhas) | Distribuição de Risco (donut)
  Tabela: Regiões Críticas
```

**Componentes a criar:** `KpiCard`, `IssMultiLineChart`, `RiskDonutChart`, `CriticalRegionsTable`

---

### Tela 7 — Impacto Social
> Rota: `/impacto` | Autenticada | Com sidebar

```
[AppLayout — Impacto ativo]
CONTENT:
  HERO verde com contadores animados
  Caso de uso Dona Maria (foto + citação + badge de perda evitada)
  Gráfico barras: perdas evitadas vs estimadas
  Mapa com pins de impacto por município
```

**Componentes a criar:** `ImpactCounter`, `TestimonialCard`, `ImpactBarChart`

---

### Tela 8 — Carbono Solidário
> Rota: `/carbono` | Autenticada | Com sidebar

```
[AppLayout — Carbono ativo]
CONTENT:
  HERO terracota-suave + chips
  3 cards de elegibilidade
  Infográfico 4 etapas do modelo coletivo
  Mapa de áreas elegíveis + CTA card
```

**Componentes a criar:** `EligibilityCard`, `ProcessStep`, `CarbonPotentialCard`

---

## Fluxo de Protótipo

```
[T1 Cadastro]
  └─ "Cadastrar e receber alertas grátis" ──────────→ [T2 Mapa Nacional]

[T2 Mapa Nacional]
  └─ Click em estado do mapa ───────────────────────→ [RegionSidePanel]
  └─ "Ver detalhes completos" no SidePanel ──────────→ [T3 Detalhe Comunidade]
  └─ Sidebar: Alertas ──────────────────────────────→ [T5 Alertas]
  └─ Sidebar: Dashboard ────────────────────────────→ [T6 Dashboard]
  └─ Sidebar: Impacto Social ───────────────────────→ [T7 Impacto Social]
  └─ Sidebar: Carbono Solidário ────────────────────→ [T8 Carbono Solidário]

[T3 Detalhe Comunidade]
  └─ "Ver Recomendações" ───────────────────────────→ [T4 Recomendações]
  └─ Breadcrumb "Mapa" ─────────────────────────────→ [T2 Mapa Nacional]

[T4 Recomendações]
  └─ Breadcrumb "Quixadá, CE" ──────────────────────→ [T3 Detalhe Comunidade]

[T5 Alertas]
  └─ Sidebar: Mapa ─────────────────────────────────→ [T2 Mapa Nacional]

[T6 Dashboard]
  └─ Click em linha "Ver detalhes" ─────────────────→ [T3 Detalhe Comunidade]

[T7, T8] └─ Sidebar: Mapa ────────────────────────→ [T2 Mapa Nacional]
```

---

## Estrutura do Projeto React

```
src/
├── components/
│   ├── ui/                  ← Componentes globais reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── RadioGroup.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Logo.tsx
│   │   ├── IssBadge.tsx     ← Badge ISS com escala de cores
│   │   ├── Sidebar.tsx      ← Nav lateral autenticada
│   │   ├── TopBar.tsx       ← Barra superior autenticada
│   │   ├── AppLayout.tsx    ← Wrapper Sidebar + Content
│   │   ├── FilterBar.tsx    ← Filtros horizontais
│   │   ├── Breadcrumb.tsx   ← Trilha de navegação
│   │   └── index.ts
│   ├── mapa/                ← Componentes exclusivos Tela 2
│   │   ├── BrazilMap.tsx
│   │   ├── MapLegend.tsx
│   │   ├── RegionSidePanel.tsx
│   │   └── index.ts
│   └── cadastro/            ← Componentes exclusivos Tela 1
│       ├── CadastroForm.tsx
│       └── BenefitItem.tsx
├── pages/
│   ├── CadastroPage.tsx     ← T1 ✅
│   └── MapaPage.tsx         ← T2 ✅
├── data/
│   ├── estados.ts
│   ├── culturas.ts
│   └── regioes.ts           ← Mock dados das regiões
└── tokens/
    ├── colors.ts
    ├── spacing.ts
    ├── typography.ts
    └── index.ts
```
