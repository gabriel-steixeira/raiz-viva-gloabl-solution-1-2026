# Raiz Viva — Roteiro de Pitch Executivo

> **Duração total:** ~4 minutos  
> **Formato:** Fala do apresentador + texto sugerido para cada slide  
> **Equipe:** Ester Silva · Gabriel Teixeira · Gustavo Mendes · Pedro Diniz · Vitoria Lana

---

## 🎬 BLOCO 1 — ABERTURA (0:00 – 0:15)

### 📽️ Slide 1: Capa — Logo Raiz Viva

**Texto do slide:**
> **Raiz Viva**  
> Monitoramento climático por satélite para quem vive da terra.

**Fala:**

> "Boa tarde. Meu nome é [NOME], e junto com a equipe, vou apresentar o Raiz Viva — uma plataforma de monitoramento climático que transforma dados de observação da Terra em alertas preventivos para comunidades que dependem da agricultura para sobreviver."

---

## 🎬 BLOCO 2 — O TIME (0:15 – 0:30)

### 📽️ Slide 2: Logo 3D (transição)

**Texto do slide:**
> *(Logo Raiz Viva em destaque — slide de transição visual)*

**Fala:**

> "Antes de entrar no problema, quero apresentar brevemente quem construiu isso."

---

### 📽️ Slide 3: Time — Estrutura de Execução

**Texto do slide:**
> **Time: Estrutura de Execução**  
> Ester Silva · Gabriel Teixeira · Gustavo Mendes · Pedro Diniz · Vitoria Lana  
> *O Raiz Viva foi estruturado por uma equipe multidisciplinar com responsabilidades claras.*

**Fala:**

> "Somos cinco integrantes com funções definidas. A plataforma foi construída de ponta a ponta por essa equipe — do levantamento de dados de satélite ao front-end funcional."

---

## 🎬 BLOCO 3 — A FRICÇÃO / O PROBLEMA (0:30 – 1:15)

### 📽️ Slide 4: O Problema

**Texto do slide:**
> **O Problema**  
> A terra dá sinais antes de colapsar.  
> Mas quem depende dela nem sempre recebe esse aviso a tempo.

**Fala:**

> "O problema que o Raiz Viva endereça é estrutural. Milhões de famílias vivem da agricultura de subsistência e são atingidas por secas prolongadas, veranicos, degradação do solo e perda de vegetação. Os sinais de que esses eventos estão se formando já existem — estão nos satélites da NASA, em bases públicas como o SMAP, o MODIS, o GPM IMERG e o Sentinel-2. Os dados estão lá."
>
> *(pausa breve)*
>
> "O gargalo está no formato. Esses dados chegam em HDF, NetCDF, GeoTIFF — formatos científicos complexos. Eles não alcançam o agricultor familiar que precisa decidir agora se irriga, se colhe antes, se protege a cisterna. O dado existe, a informação não chega."

---

## 🎬 BLOCO 4 — A ARQUITETURA / A SOLUÇÃO (1:15 – 2:15)

### 📽️ Slide 5: Slide de Transição (texto de rodapé)

**Texto do slide:**
> *O Raiz Viva foi estruturado por uma equipe multidisciplinar com responsabilidades claras.*

**Fala:**

> "É exatamente essa lacuna que o Raiz Viva preenche. A plataforma opera em cinco etapas."

---

### 📽️ Slide 6: Arquitetura da Solução — React + Vite

**Texto do slide:**
> **Arquitetura da Solução**  
> React + Vite  
> Frontend: React · Vite · TypeScript · TailwindCSS  
> Backend: Python (FastAPI) · rasterio · xarray · numpy · geopandas  
> IA/ML: scikit-learn (MVP) · LSTM/Prophet (fase 2)  
> Banco: PostgreSQL + PostGIS  
> Alertas: Twilio / WhatsApp Cloud API  
> Deploy: Docker · Render / Railway / Vercel

**Fala:**

> "Tecnicamente, o Raiz Viva funciona assim: uma rotina agendada baixa dados das APIs NASA Earthdata. O processamento recorta a área de interesse, calcula anomalias e gera o que chamamos de ISS — o Índice de Sobrevivência do Solo."
>
> "O ISS é um indicador de 0 a 100 que sintetiza quatro variáveis: o déficit de umidade do solo, via NASA SMAP; a queda de vegetação medida pelo NDVI, via MODIS e Sentinel-2; o déficit acumulado de chuva, pelo GPM IMERG; e a anomalia de temperatura de superfície, pelo MODIS LST."
>
> "A partir desse índice, o sistema classifica o risco — baixo, moderado ou alto — e transforma o resultado técnico em uma mensagem simples, entregue por SMS, WhatsApp ou voz. No canal que a família já usa."
>
> "Hoje o front-end é construído em React com Vite, TypeScript e TailwindCSS com dados mockados. No roadmap da fase 2, pretendemos fazer o back-end com FastAPI e bibliotecas geoespaciais — rasterio, xarray, geopandas e também a implementação da IA com regressão via scikit-learn e a previsão por séries temporais com LSTM."

---

## 🎬 BLOCO 5 — DEMONSTRAÇÃO DO PROTÓTIPO (2:15 – 3:00)

### 📽️ Slide 7: Demonstração prática do protótipo

**Texto do slide:**
> **Demonstração Prática do Protótipo**  
> *(Espaço para demonstração ao vivo ou gravação de tela)*

**Fala:**

> "A plataforma já tem oito telas implementadas. Vou mostrar rapidamente o fluxo."
>
> "No **Mapa Nacional de Risco**, o gestor público ou a cooperativa visualiza todo o território com indicadores de ISS por região. Clicando em uma região, entra no **Detalhe da Comunidade**, que exibe quatro indicadores climáticos: umidade do solo, saúde da vegetação, déficit de chuva e temperatura de superfície, com gráfico histórico do ISS."
>
> "Na tela de **Recomendações Inteligentes**, o sistema entrega ações práticas — ajustar irrigação, aplicar cobertura de solo, verificar reservas hídricas — tudo calibrado pelo nível de risco da região."
>
> "A **Central de Alertas** permite o envio manual ou automático de avisos. O **Dashboard Operacional** dá visão gerencial de famílias monitoradas e hectares cobertos. E o módulo de **Carbono Solidário** faz triagem automática de elegibilidade — apenas para áreas com vegetação preservada ou em recuperação — usando os mesmos dados de satélite."
>
> "O cadastro coleta nome, município, cultura principal e canal preferido de comunicação. Os alertas básicos são gratuitos e sem condições."

---

## 🎬 BLOCO 6 — A MECÂNICA FINANCEIRA (3:00 – 3:30)

### 📽️ Slide 8: Resultados Esperados

**Texto do slide:**
> **Resultados Esperados**  
>  
> **Objetivo da Solução:**  
> O Raiz Viva transforma dados espaciais da NASA em alertas simples, acessíveis e acionáveis para comunidades que dependem da terra para sobreviver. A solução antecipa riscos climáticos e produtivos, permitindo decisões antes que a perda aconteça.  
>  
> Dados da NASA + Inteligência + Ação Humana = Comunidades Protegidas  
>  
> **5 pilares:** Monitoramento Inteligente · Alertas Antecipados de Risco · Apoio à Tomada de Decisão · Gestão Pública Mais Preventiva · Uso Sustentável dos Recursos  
>  
> **Impacto:** Para as Famílias · Para as Comunidades · Para a Sociedade · Para o Meio Ambiente  
>  
> *Mais do que prever riscos, o Raiz Viva ajuda comunidades a agir antes que seja tarde.*

**Fala:**

> "O modelo de negócio opera por um princípio claro: separar quem usa de quem paga. Alertas básicos são universais e gratuitos para famílias vulneráveis."
>
> "A receita vem de quatro fontes complementares. Primeiro, **B2G**: governos e defesa civil pagam pelo painel regional, relatórios e planejamento. Segundo, **B2B**: cooperativas e cadeias do agronegócio assinam para ter visão ESG e monitoramento de seus associados. Terceiro, **editais e fundos climáticos** financiam a expansão do acesso gratuito."
>
> "O Carbono Solidário é uma camada opcional. Ele agrega áreas pequenas por cooperativa para atingir escala mínima de comercialização de crédito de carbono. É um bônus — nunca uma condição."

---

## 🎬 BLOCO 7 — ENCERRAMENTO (3:30 – 4:00)

### 📽️ Slide 9: Identidade Visual / Encerramento

**Texto do slide:**
> **Raiz Viva**  
> Paleta de Cores · Logo Principal · Versões Monocromáticas · Aplicações  
> Selo / Badge · Ícone App · Elementos de Apoio  
>  
> *A NASA observa o planeta do espaço. O Raiz Viva transforma esses sinais em proteção para quem vive da terra.*

**Fala:**

> "Famílias protegidas, comunidades mais fortes, gestão pública preventiva, recursos preservados. Esses resultados só acontecem quando o dado certo chega na mão certa, na hora certa. É isso que o Raiz Viva faz: pega sinais que já existem no espaço e os transforma em decisões no campo — antes que a perda aconteça."
>
> *(pausa)*
>
> "Obrigado."

---

## 📋 RESUMO DE TEMPOS

| Bloco | Conteúdo | Tempo |
|-------|----------|-------|
| 1 | Abertura | 0:00 – 0:15 |
| 2 | Time | 0:15 – 0:30 |
| 3 | O Problema (Fricção) | 0:30 – 1:15 |
| 4 | Arquitetura da Solução | 1:15 – 2:15 |
| 5 | Demonstração do Protótipo | 2:15 – 3:00 |
| 6 | Mecânica Financeira | 3:00 – 3:30 |
| 7 | Encerramento | 3:30 – 4:00 |

---

## 📝 NOTAS PARA O APRESENTADOR

- **Ritmo:** As falas estão calibradas para ~4 minutos em ritmo natural de apresentação. Ensaie cronometrando.
- **Demonstração (Bloco 5):** Se for ao vivo, tenha uma gravação de backup. Se for vídeo, grave navegando pelas telas Mapa → Detalhe → Recomendações → Alertas → Carbono.
- **Tom:** Direto, confiante, sem exageros. Cada afirmação tem base no material técnico. Não prometa o que não está implementado.
- **ISS:** Se houver perguntas sobre resolução, informe que o SMAP tem ~9 km de resolução — suficiente para alerta regional, não para talhão individual. O sistema combina com Sentinel-2 (10 m) quando disponível.
- **Carbono:** Sempre reforçar que é opcional e que alertas são incondicionais.
