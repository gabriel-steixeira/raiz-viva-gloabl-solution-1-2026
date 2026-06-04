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

### Tela 1 — Cadastro
> Rota: `/cadastro` | Pública | Sem sidebar

```
HEADER (altura 72px):
  [Logo Raiz Viva — branco sobre verde-raiz]  [Link: "Já tenho conta"]

HERO (2 colunas):
  COLUNA ESQUERDA (fundo #2D6A4F, padding 64px):
    H1: "Proteja sua lavoura com alertas de satélite"
    Body: "Receba avisos gratuitos de seca, calor e risco do solo direto no seu celular."
    [Ícones de benefício: 🛰️ Dados NASA  🌱 100% gratuito  📱 SMS/WhatsApp/Voz]

  COLUNA DIREITA (fundo #FAFAF7, padding 48px):
    H2: "Criar conta gratuita"
    [Radio Group] Tipo: ● Agricultor Familiar  ○ Cooperativa/Organização
    [Input] Nome completo
    [Input] Município
    [Select] Estado (UF)
    [Select] Cultura principal
    [Radio Group] Canal preferido: ● WhatsApp  ○ SMS  ○ Voz
    [Input] Telefone (com máscara)
    [Button Primário] "Cadastrar e receber alertas grátis"
    [Caption] "🔒 Seus dados são protegidos. Alertas são gratuitos e sem condições."
```

---

### Tela 2 — Mapa Nacional de Risco
> Rota: `/mapa` | Autenticada | Com sidebar

```
SIDEBAR:
  [Logo] Raiz Viva
  [Avatar] Nome do usuário | Perfil
  [Nav]:
    📍 Mapa (ativo)
    🔔 Alertas
    📊 Dashboard
    🌿 Impacto Social
    🌳 Carbono Solidário
  [Footer sidebar] Versão | Suporte

CONTENT:
  TOP BAR (altura 56px):
    Título: "Mapa Nacional de Risco"
    [Badge] "Última atualização: há 3h"
    [Button Secundário] "Exportar Relatório"

  FILTROS (altura 48px, horizontal):
    [Select] Bioma  [Select] Estado  [Select] Cultura  [DatePicker] Período

  MAPA (fill restante):
    Mapa do Brasil — regiões coloridas por ISS
    [🟢 Verde] ISS 70–100 Baixo  [🟡 Amarelo] ISS 40–69 Moderado  [🔴 Vermelho] ISS 0–39 Alto
    Hover em região: Tooltip com [Nome, ISS atual, Nível, Tendência ↑↓]
    Click em região: navega para Tela 3

  LEGENDA (canto inferior esquerdo):
    Escala de cores ISS + valores

  PAINEL LATERAL DIREITO (320px, ao clicar numa região):
    Preview: Nome da Região | ISS badge | Indicadores resumidos
    [Button] "Ver detalhes completos →"
```

---

### Tela 3 — Detalhe da Comunidade
> Rota: `/mapa/:regiao` | Autenticada | Com sidebar

```
SIDEBAR: (igual Tela 2)

CONTENT:
  BREADCRUMB: Mapa › Quixadá, CE

  HERO CARD (fundo terracota suave, 100% largura):
    [Badge ISS] "34 — Risco ALTO 🔴" (grande, destaque)
    Subtítulo: "Quixadá, CE — Sertão Central"
    [Badge confiança] "🛰️ Alta confiança · Atualizado há 6h"
    [Button Primário] "Ver Recomendações"  [Button Secundário] "Enviar Alerta"

  ROW DE INDICADORES (4 cards iguais):
    [Card 1] 💧 Umidade do Solo
      Valor: "42% abaixo do normal" | Indicador: Du | Fonte: NASA SMAP
      Barra de progresso visual
    [Card 2] 🌿 Saúde da Vegetação
      Valor: "NDVI −0,18 ↓" | Indicador: Dn | Fonte: MODIS/Sentinel-2
    [Card 3] 🌧️ Déficit de Chuva
      Valor: "−38mm acumulado" | Indicador: Dc | Fonte: NASA GPM
    [Card 4] 🌡️ Temperatura de Superfície
      Valor: "+3,2°C acima da média" | Indicador: Dt | Fonte: MODIS LST

  SEÇÃO GRÁFICO + MAPA (2 colunas):
    ESQUERDA (60%):
      Título: "Histórico do ISS — últimos 90 dias"
      [Gráfico linha com área] — eixo X: datas, eixo Y: 0–100
      Linha de referência: 70 (baixo) e 40 (moderado)
    DIREITA (40%):
      Título: "Mapa Regional"
      [Mini mapa] zoom na região com municípios vizinhos coloridos
```

---

### Tela 4 — Recomendações Inteligentes
> Rota: `/mapa/:regiao/recomendacoes` | Autenticada | Com sidebar

```
SIDEBAR: (igual Tela 2)

CONTENT:
  HEADER:
    Breadcrumb: Mapa › Quixadá, CE › Recomendações
    H1: "Recomendações — Risco ALTO"
    [Badge ISS] "ISS 34"

  FILTRO TABS:
    [Tab ativo] ⚡ Imediatas  |  [Tab] 📅 Esta semana  |  [Tab] 📆 Próximos 30 dias

  LISTA DE RECOMENDAÇÕES (cards verticais, largura total):

    [Card — URGENTE, borda terracota]:
      Ícone 🌾 | Tag "URGENTE" | Título: "Antecipar colheita do feijão em estágio final"
      Descrição: "Com ISS crítico e previsão de piora, colheitas em fase final correm risco."
      [Button] "Marcar como feito" ✓

    [Card — URGENTE]:
      Ícone 💧 | "Irrigar apenas nas horas frescas (antes 8h / após 17h)"

    [Card — IMPORTANTE, borda amarela]:
      Ícone 🌿 | Tag "IMPORTANTE" | "Cobrir solo com mulching para reter umidade"

    [Card — RECOMENDADO]:
      Ícone 🤝 | Tag "RECOMENDADO" | "Acionar cooperativa para apoio logístico"

    [Card — PREVENTIVO]:
      Ícone 🏞️ | Tag "PREVENTIVO" | "Verificar e proteger nível das cisternas"
```

---

### Tela 5 — Alertas
> Rota: `/alertas` | Autenticada | Com sidebar

```
SIDEBAR: (igual Tela 2, item "Alertas" ativo)

CONTENT:
  TOP BAR:
    H1: "Central de Alertas"
    [Button Primário] "+ Enviar Alerta Manual"

  FILTROS (barra horizontal):
    [Select] Tipo: Seca | Chuva excessiva | Temperatura
    [Select] Período: Hoje | 7d | 30d | Personalizado
    [Select] Região / Estado
    [Select] Status: Enviado | Agendado | Rascunho

  LAYOUT 2 COLUNAS:
    COLUNA ESQUERDA — Lista de alertas (timeline):
      [Item 1 — CRÍTICO 🔴]:
        Ícone | "Seca Crítica — Quixadá, CE"
        "há 2 horas · 340 famílias notificadas · WhatsApp + SMS"
        [Badge] Enviado ✓

      [Item 2 — MODERADO 🟡]:
        "Veranico — Sertão Central, CE"
        "há 1 dia · 1.200 famílias · WhatsApp"

      [Item 3 — NORMALIZAÇÃO 🟢]:
        "Normalização detectada — Cariri, CE"
        "há 3 dias · Informativo"

    COLUNA DIREITA — Preview do alerta selecionado (card):
      Título do alerta | Nível de risco
      [Box] Mensagem enviada (como aparece no WhatsApp)
      Estatísticas:
        👨‍👩‍👧 Famílias atingidas: 340
        📱 Canais: WhatsApp (280) + SMS (60)
        ✅ Confirmações recebidas: 212 (62%)
      [Button] "Reenviar"  [Button] "Ver relatório"
```

---

### Tela 6 — Dashboard Operacional
> Rota: `/dashboard` | Autenticada (gestor/admin) | Com sidebar

```
SIDEBAR: (igual Tela 2, item "Dashboard" ativo)

CONTENT:
  TOP BAR:
    H1: "Dashboard Operacional"
    [DatePicker] Período  [Button] "Exportar PDF"

  ROW 1 — KPIs (4 cards, grid 4 colunas):
    [Card] 👨‍👩‍👧 Famílias Monitoradas: 12.450 | ↑8% vs. mês anterior
    [Card] 🔔 Alertas Enviados: 847 | Últimos 30 dias
    [Card] 🌾 Hectares Cobertos: 284.000 | ↑12%
    [Card] 📊 ISS Médio Nacional: 61 | 🟡 Moderado

  ROW 2 — Gráficos (2 colunas):
    ESQUERDA (60%):
      Título: "ISS Médio por Bioma — Últimos 6 meses"
      [Gráfico de linhas múltiplas] Caatinga | Cerrado | Amazônia | Mata Atlântica

    DIREITA (40%):
      Título: "Distribuição de Risco Atual"
      [Gráfico donut/pizza]
        🟢 Baixo: 38% | 🟡 Moderado: 45% | 🔴 Alto/Crítico: 17%

  ROW 3 — Tabela:
    Título: "Regiões em Estado Crítico"
    Colunas: Região | Estado | ISS | Famílias em Risco | Tendência | Último Alerta | Ação
    [3–5 linhas de dados] | [Button por linha] "Ver detalhes"
```

---

### Tela 7 — Impacto Social
> Rota: `/impacto` | Autenticada | Com sidebar

```
SIDEBAR: (igual Tela 2, item "Impacto Social" ativo)

CONTENT:
  HERO SECTION (fundo #2D6A4F, padding 48px, texto branco):
    H1: "Raiz Viva em Números"
    Subtítulo: "Impacto real para quem vive da terra"
    ROW DE CONTADORES (3 cards brancos semitransparentes):
      [👨‍👩‍👧] 12.450 Famílias protegidas
      [🌾] 284.000 ha Hectares monitorados
      [⏱️] 48h Antecedência média dos alertas

  SEÇÃO CASO DE USO (2 colunas, fundo bege-terra):
    ESQUERDA:
      [Foto placeholder — agricultora]
    DIREITA:
      Tag: "📖 História real"
      H2: "Dona Maria, Quixadá, CE"
      Citação: "Quando recebi o aviso, ainda tinha tempo de salvar o feijão..."
      Body: Narrativa do impacto concreto — ISS alertou com 48h de antecedência,
            colheita antecipada evitou perda total de 2,4 ha.
      [Badge] "Perda evitada estimada: R$ 4.200"

  SEÇÃO GRÁFICO:
    Título: "Perdas Agrícolas Evitadas vs. Estimadas sem Raiz Viva"
    [Gráfico de barras agrupadas] — últimos 6 meses

  MAPA DE IMPACTO:
    Título: "Municípios Atendidos"
    [Mapa do Brasil] com pins de impacto (tamanho proporcional a famílias atendidas)
```

---

### Tela 8 — Carbono Solidário
> Rota: `/carbono` | Autenticada | Com sidebar

```
SIDEBAR: (igual Tela 2, item "Carbono Solidário" ativo)

CONTENT:
  HERO (fundo terracota-suave #F4A261, padding 48px):
    H1: "Carbono Solidário"
    Subtítulo: "Renda extra pela sua terra preservada"
    [Chip] "100% opcional"  [Chip] "Não condiciona alertas"
    Body: "O mesmo satélite que monitora o risco também identifica
           áreas com potencial de crédito de carbono."

  SEÇÃO ELEGIBILIDADE (3 cards horizontais, fundo branco):
    [Card 1] 🌳 Vegetação Preservada
      "Áreas de mata nativa intacta ou em regeneração"
    [Card 2] 🔄 Recuperação de Área
      "Áreas em processo de reflorestamento ativo"
    [Card 3] 🌿 Sistemas Agroflorestais
      "Integração lavoura-árvore com práticas sustentáveis"
    [CTA Card] "Minha área é elegível?"
      [Button Primário] "Verificar elegibilidade agora"

  SEÇÃO MODELO (fundo bege-terra):
    H2: "Como funciona o modelo coletivo"
    [Infográfico horizontal — 4 etapas]:
      1. 🛰️ Satélite identifica áreas elegíveis
      2. 🤝 Cooperativa agrega áreas pequenas
      3. ✅ Verificação MRV simplificada
      4. 💰 Receita distribuída por área (R$ 120–350/ha/ano*)
    [Caption] "*Estimativa baseada em mercado voluntário de carbono. Valores podem variar."

  SEÇÃO MAPA + CTA:
    ESQUERDA (60%):
      Título: "Áreas Elegíveis Identificadas"
      [Mapa regional] áreas verdes destacadas = elegíveis
    DIREITA (40%):
      Card de destaque:
        "Potencial da sua cooperativa"
        Área elegível estimada: -- ha (aguardando dados)
        Receita potencial: -- R$/ano
        [Button Primário] "Quero participar via cooperativa"
        [Link] "Saiba mais sobre MRV e verificação independente"
```

---

## Fluxo de Protótipo

```
[T1 Cadastro]
  └─ "Cadastrar e receber alertas grátis" ──────────→ [T2 Mapa Nacional]

[T2 Mapa Nacional]
  └─ Click em região do mapa ───────────────────────→ [T3 Detalhe Comunidade]
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
  └─ Click em linha da tabela "Ver detalhes" ───────→ [T3 Detalhe Comunidade]
  └─ Sidebar: Mapa ─────────────────────────────────→ [T2 Mapa Nacional]

[T7 Impacto Social]
  └─ Sidebar: Mapa ─────────────────────────────────→ [T2 Mapa Nacional]

[T8 Carbono Solidário]
  └─ "Verificar elegibilidade agora" ───────────────→ [T3 Detalhe Comunidade]
  └─ Sidebar: Mapa ─────────────────────────────────→ [T2 Mapa Nacional]
```

---

## Estrutura do Projeto Figma

```
📁 Raiz Viva — Design System & Wireframes
├── 🎨 Página 1: Capa
│     Frame 1440×900 | Fundo #2D6A4F
│     Logo central + tagline + chips de contexto
├── 🔧 Página 2: Design System
│     Paleta de cores (swatches)
│     Tipografia (escala)
│     Componentes (botões, badges, cards, inputs, sidebar)
├── 📐 Página 3: Wireframes
│     T1 — Cadastro
│     T2 — Mapa Nacional de Risco
│     T3 — Detalhe da Comunidade
│     T4 — Recomendações Inteligentes
│     T5 — Alertas
│     T6 — Dashboard Operacional
│     T7 — Impacto Social
│     T8 — Carbono Solidário
└── 🔗 Página 4: Protótipo
      Fluxo completo com conexões entre telas
      Anotações de interação
```
