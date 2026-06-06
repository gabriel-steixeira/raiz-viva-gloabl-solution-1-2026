# Prompt para o Manus — Criação dos Slides do Raiz Viva

> Copie todo o conteúdo abaixo e cole diretamente no Manus.

---

## CONTEXTO

Preciso que você crie uma apresentação de slides (PowerPoint ou Google Slides) para um vídeo de pitch de 4 minutos de um projeto acadêmico chamado **Raiz Viva**. O projeto é uma plataforma de monitoramento climático que transforma dados de satélite da NASA em alertas preventivos para agricultores familiares e comunidades vulneráveis.

## REQUISITOS DA ATIVIDADE

O vídeo de até 4 minutos deve conter:
1. **Identificação do Problema:** O problema real que o projeto está resolvendo.
2. **Solução Proposta:** Como a solução digital aborda o problema, quais tecnologias/plataformas/recursos foram utilizados, como foi implementada (frameworks, linguagens, APIs, componentes em nuvem, ferramentas de visualização de dados).
3. **Demonstração prática do protótipo:** Espaço para telas funcionando.
4. **Resultados Esperados e Impacto:** Objetivos da solução e impacto positivo esperado.

## IDENTIDADE VISUAL (OBRIGATÓRIO)

A apresentação DEVE seguir rigorosamente esta identidade:

- **Paleta principal:** Tons de verde (verde-raiz escuro #1B4332, verde-claro #52B788, verde-profundo #2D6A4F), terracota/marrom dourado para destaques (#A0734C), fundo verde-suave/menta muito claro (#E8F5E9 / #F1F8E9)
- **Tipografia:** Inter (Google Fonts) — títulos em bold, corpo em regular/medium
- **Estilo:** Ondas suaves em degradê verde na parte inferior dos slides, elementos geométricos de pixels/quadrados no canto superior direito, visual limpo e orgânico, com ícones de apoio (folha, gota, sol, satélite, plantação)
- **Logo:** O slide 1 e o último slide devem ter o logo Raiz Viva em destaque (ícone circular com folha + pixels + wordmark "Raiz Viva")
- **Rodapé:** Logo pequeno do Raiz Viva no canto inferior direito de cada slide (exceto capa)

## ESTRUTURA DOS 9 SLIDES

### SLIDE 1 — CAPA
- Logo "Raiz Viva" centralizado (versão principal: ícone + wordmark)
- Subtítulo: "Monitoramento climático por satélite para quem vive da terra."
- Fundo verde-suave com ondas decorativas na parte inferior
- Pixels decorativos no canto superior direito

### SLIDE 2 — TRANSIÇÃO (Logo 3D)
- Logo Raiz Viva em destaque centralizado, versão estilizada/3D
- Sem texto adicional, serve como transição visual
- Mesmo fundo verde-suave com ondas

### SLIDE 3 — TIME: ESTRUTURA DE EXECUÇÃO
- Título: "Time: Estrutura de Execução"  (título em preto, "Estrutura de Execução" em terracota/marrom dourado)
- 5 membros lado a lado com:
  - Foto circular com borda degradê suave
  - Nome em bold abaixo da foto: ESTER SILVA · GABRIEL TEIXEIRA · GUSTAVO MENDES · PEDRO DINIZ · VITORIA LANA
  - LinkedIn handle abaixo do nome (em azul claro)
  - RM abaixo: 552424 · 552378 · 99728 · 97935 · 97845
- Barra inferior com fundo terracota: "O Raiz Viva foi estruturado por uma equipe multidisciplinar com responsabilidades claras."
- Use fotos placeholder circulares se necessário

### SLIDE 4 — O PROBLEMA
- Título: "O Problema" (bold, preto/verde escuro)
- Lado esquerdo — dois textos:
  - "A terra dá sinais antes de colapsar."
  - "Mas quem depende dela nem sempre recebe esse aviso a tempo." (em bold)
- Lado direito — imagem impactante de uma agricultora olhando uma terra seca/rachada com um satélite no céu ao fundo (estilo cinematográfico, tons quentes dourados/sépia)
- Fundo verde-suave

### SLIDE 5 — TRANSIÇÃO (Solução)
- Slide limpo, majoritariamente branco/verde muito claro
- Barra inferior centralizada com fundo terracota:
  "O Raiz Viva foi estruturado por uma equipe multidisciplinar com responsabilidades claras."
- Serve como respiração visual antes da arquitetura

### SLIDE 6 — ARQUITETURA DA SOLUÇÃO
- Título duplo: "Arquitetura da Solução:" (itálico, verde/terracota) à esquerda + "Arquitetura da Solução" (bold, preto) à direita
- Elementos visuais grandes:
  - Logo React (ícone 3D azul) à esquerda
  - Sinal de "+" grande no centro
  - Logo Vite (ícone 3D roxo/amarelo) à direita
- Lista de stack técnico do lado direito (pode ser em texto menor):
  - Frontend: React · Vite · TypeScript · TailwindCSS
  - Backend (fase 2): Python (FastAPI) · rasterio · xarray · geopandas
  - IA/ML (fase 2): scikit-learn · LSTM/Prophet
  - Banco: PostgreSQL + PostGIS
  - Alertas: Twilio / WhatsApp Cloud API
  - Deploy: Docker · Render / Railway / Vercel

### SLIDE 7 — DEMONSTRAÇÃO PRÁTICA DO PROTÓTIPO
- Texto centralizado: "Inclua uma demonstração prática do protótipo"
- Este slide será substituído por gravação de tela no vídeo final
- Manter visual limpo com fundo verde-suave e ondas

### SLIDE 8 — RESULTADOS ESPERADOS (slide mais denso)
- Título: "Resultados Esperados" ("Resultados" em preto, "Esperados" em verde/terracota itálico)
- Seção superior esquerda — card com fundo branco:
  - Ícone de alvo/check (verde)
  - Título: "OBJETIVO DA SOLUÇÃO"
  - Texto: "O Raiz Viva transforma dados espaciais da NASA em alertas simples, acessíveis e acionáveis para comunidades que dependem da terra para sobreviver. A solução antecipa riscos climáticos e produtivos, permitindo decisões antes que a perda aconteça."
- Seção superior direita — equação visual com ícones:
  - DADOS DA NASA (ícone satélite) + INTELIGÊNCIA (ícone gráfico) + AÇÃO HUMANA (ícone pessoas) = COMUNIDADES PROTEGIDAS (ícone planta)
  - Subtextos descritivos abaixo de cada ícone
- Seção do meio — 5 cards horizontais com ícones:
  1. MONITORAMENTO INTELIGENTE — "Acompanhar áreas vulneráveis por meio de dados de satélite, analisando umidade do solo, temperatura, vegetação e histórico de chuvas."
  2. ALERTAS ANTECIPADOS DE RISCO — "Identificar regiões com risco de seca, estresse da vegetação ou queda da capacidade produtiva nas próximas semanas."
  3. APOIO À TOMADA DE DECISÃO — "Oferecer recomendações práticas para preservar água, ajustar irrigação, antecipar colheitas ou acionar apoio de cooperativas e órgãos públicos."
  4. GESTÃO PÚBLICA MAIS PREVENTIVA — "Ajudar prefeituras, defesa civil e instituições sociais a priorizarem recursos e planejarem ações antes que a situação se torne crítica."
  5. USO SUSTENTÁVEL DOS RECURSOS — "Incentivar práticas sustentáveis no campo, promovendo a preservação do solo, da água e da vegetação nativa."
- Seção inferior — 4 cards de impacto:
  - PARA AS FAMÍLIAS — "Redução da perda de colheitas, maior segurança alimentar e proteção da renda de pequenos agricultores."
  - PARA AS COMUNIDADES — "Maior capacidade de adaptação climática, fortalecimento de cooperativas e redução do abandono de áreas produtivas."
  - PARA A SOCIEDADE — "Uso da tecnologia espacial para gerar impacto social real, conectando dados da NASA, IA e ação humana."
  - PARA O MEIO AMBIENTE — "Incentivo à preservação do solo, uso mais consciente da água e apoio a práticas sustentáveis no campo."
- Barra inferior em verde: "MAIS DO QUE PREVER RISCOS, O RAIZ VIVA AJUDA COMUNIDADES A AGIR ANTES QUE SEJA TARDE."

### SLIDE 9 — IDENTIDADE VISUAL / ENCERRAMENTO
- Exibir a identidade visual completa do Raiz Viva:
  - Topo: Paleta de cores (7-8 círculos de cor) + Elementos de apoio (ícones da marca)
  - Dois painéis lado a lado mostrando:
    - Logo principal (Ícone + Wordmark)
    - Logo alternativa (Wordmark com elemento)
    - Versões monocromáticas
    - Versões negativas (fundo escuro)
    - Selo/Badge circular
    - Ícone App (quadrado arredondado)
    - Aplicações em produtos (boné, garrafa, celular)
  - Rodapé: Logo Raiz Viva

## DIRETRIZES DE DESIGN

1. **NÃO** usar fundo branco puro. Sempre usar o verde-suave/menta (#E8F5E9 ou similar) como fundo base.
2. Os títulos devem ter a primeira parte em preto/verde escuro e a segunda parte (destaque) em verde ou terracota itálico.
3. As ondas decorativas na parte inferior devem ser suaves, em degradê de verde (do claro ao médio), presentes em todos os slides.
4. Os pixels/quadrados geométricos no canto superior direito devem estar presentes em todos os slides — são marca visual do Raiz Viva (representam dados digitais).
5. Proporção 16:9 (widescreen).
6. Fontes: usar Inter se disponível, senão Roboto ou Montserrat como fallback.
7. Ícones devem ter estilo line/outline com traço fino, em verde ou terracota — não ícones preenchidos pesados.
8. Cards devem ter fundo branco com bordas suaves arredondadas e sombra sutil.

## FORMATO DE ENTREGA

- Arquivo PowerPoint (.pptx) ou Google Slides
- 9 slides na ordem acima
- Proporção 16:9
- Todas as fontes embeddadas ou usando fontes web seguras
- Imagens com boa resolução (mínimo 1920x1080)

## TOM GERAL

A apresentação deve transmitir: profissionalismo, maturidade técnica e propósito social. Visual limpo, orgânico e premium — sem poluição visual. Cada slide deve ter espaço para respirar.
