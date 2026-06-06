# 🌱 Raiz Viva — v2.0

> **Global Solution 1 — Space Connect | Turma 4SIOA**  
> *Transformando dados espaciais em proteção para quem vive da terra.*

---

## 📋 Sobre o Projeto

O **Raiz Viva** é uma plataforma de monitoramento climático e proteção comunitária voltada para agricultores familiares, comunidades rurais, cooperativas agrícolas e órgãos de defesa civil. A nossa missão é traduzir dados científicos e espaciais complexos de satélite (como umidade do solo, anomalias de temperatura e saúde da vegetação) em alertas preventivos simples, acessíveis e em recomendações práticas de adaptação agrícola.

> *"A NASA observa o planeta do espaço. O Raiz Viva transforma esses sinais em proteção para quem vive da terra."*

### 🧪 Índice de Sobrevivência do Solo (ISS)

O núcleo da inteligência de dados da plataforma reside no **ISS**, um indicador sintético que varia de **0 a 100** e representa o nível de risco climático-agrícola de uma determinada região:

$$ISS = 100 - (w_1 \times Du + w_2 \times Dn + w_3 \times Dc + w_4 \times Dt)$$

Os componentes de entrada e suas respectivas fontes de dados espaciais são:

| Componente | Indicador | Fonte de Dados | Descrição |
| :---: | :--- | :--- | :--- |
| **Du** | Déficit de Umidade do Solo | NASA SMAP | Mede a quantidade de água no solo comparada à média histórica |
| **Dn** | Queda do NDVI | MODIS / Sentinel-2 | Avalia a perda de vigor vegetativo e saúde das folhas |
| **Dc** | Déficit Acumulado de Chuva | NASA GPM IMERG | Quantifica a falta de precipitação no período recente |
| **Dt** | Anomalia de Temp. de Superfície | MODIS LST | Identifica estresse térmico na superfície do solo |

**Escala de Risco:**
- 🟢 **70 a 100:** Risco Baixo (Solo saudável, monitoramento de rotina)
- 🟡 **40 a 69:** Risco Moderado (Alerta de manejo, mulching, ajuste de irrigação)
- 🔴 **0 a 39:** Risco Alto / Crítico (Medidas de mitigação urgentes, acionar cooperativa/defesa civil)

---

## 🛠️ Tecnologias Utilizadas

A aplicação web foi desenvolvida com foco em alta fidelidade visual, performance e fidelidade ao design system.

### Frontend
- **React 18** & **Vite**: Ambiente de desenvolvimento rápido e moderno.
- **TypeScript**: Tipagem estática para robustez do código.
- **Tailwind CSS**: Estilização baseada em tokens de design.
- **React Leaflet** / **Leaflet**: Mapas interativos e visualização espacial do risco.
- **Recharts**: Gráficos interativos para histórico do ISS e indicadores.
- **React Router Dom (v6)**: Gerenciamento de rotas e navegação da SPA.
- **Lucide React**: Biblioteca de ícones (strokeWidth padronizado em 1.5).

### Design System (Tokens)
O design system do projeto é centralizado e exportado em `src/tokens/`:
- `colors.ts`: Paleta de cores oficial (Verde Raiz, Terracota, Bege Terra, etc.).
- `typography.ts`: Escala tipográfica estruturada utilizando a fonte Google Fonts **Inter**.
- `spacing.ts`: Grid, espaçamento, sombras e bordas arredondadas consistentes.

---

## 🖥️ Telas da Plataforma

O sistema conta com 8 telas totalmente implementadas em `src/pages/`:

1. **Cadastro** (`/cadastro`): Formulário guiado para novos usuários (agricultores ou cooperativas).
2. **Mapa Nacional de Risco** (`/mapa`): Mapa interativo exibindo o ISS por região geográfica.
3. **Detalhe da Região** (`/mapa/:regiao`): Indicadores detalhados e gráficos históricos do ISS.
4. **Recomendações Inteligentes** (`/mapa/:regiao/recomendacoes`): Ações práticas baseadas no nível de risco.
5. **Central de Alertas** (`/alertas`): Painel de gerenciamento e envio de notificações para a comunidade.
6. **Dashboard Operacional** (`/dashboard`): Métricas agregadas e controle administrativo para cooperativas.
7. **Impacto Social** (`/impacto`): KPIs de impacto ecológico e social, além de histórias reais de produtores.
8. **Carbono Solidário** (`/carbono`): Triagem de elegibilidade para crédito de carbono agrupado.

---

## 📂 Estrutura do Repositório

```
raiz-viva-global-solution/
├── agent/                                # Prompts e bases de conhecimento da IA
│   ├── raiz_viva_agent_system_prompt.md
│   ├── raiz_viva_knowledge_base.md
│   └── raiz_viva_skills.md
├── public/                               # Arquivos estáticos e ativos públicos
├── scripts/                              # Scripts auxiliares de build e ativos
├── src/
│   ├── assets/                           # Imagens e ícones da aplicação
│   ├── components/                       # Componentes reutilizáveis (Card, Header, Sidebar...)
│   ├── pages/                            # As 8 telas principais da aplicação
│   ├── tokens/                           # Centralização de tokens do Design System
│   ├── App.tsx                           # Definição de rotas e Layout principal
│   ├── index.css                         # Estilos globais e fontes
│   └── main.tsx                          # Ponto de entrada da aplicação
├── tailwind.config.js                    # Configuração integrada ao Design System
├── tsconfig.json                         # Configurações do TypeScript
└── package.json                          # Scripts e dependências do projeto
```

---

## 🚀 Instruções de Execução

Siga os passos abaixo para configurar e executar a aplicação frontend localmente:

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) e o gerenciador de pacotes **npm** instalado em sua máquina.

### 1. Instalar as Dependências
Abra o terminal na pasta raiz do projeto e execute:
```bash
npm install
```

### 2. Executar o Servidor de Desenvolvimento
Inicie o Vite localmente com o comando:
```bash
npm run dev
```
Após o início, a aplicação estará disponível por padrão em: [http://localhost:5173](http://localhost:5173)

### 3. Compilar para Produção (Build)
Para gerar os arquivos otimizados e prontos para deploy no diretório `dist/`, execute:
```bash
npm run build
```

### 4. Visualizar o Build Local
Para testar localmente a versão compilada de produção:
```bash
npm run preview
```

---

## 👥 Integrantes e Turma

- **Turma:** 4SIOA
- **Instituição:** FIAP
- **Desafio:** Global Solution 1 — Space Connect — 2026

![alt text](image.png)