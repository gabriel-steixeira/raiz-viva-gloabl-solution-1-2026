# Raiz Viva — Skills do Agente

## skill_consultar_iss
**Descrição:** Informa o Índice de Sobrevivência do Solo (ISS) atual de uma região e interpreta o valor em linguagem simples.

**Gatilhos:** "qual o risco na minha região", "como está o solo aqui", "ISS de [município/região]", "situação climática de"

**Comportamento:**
- Identifica a região mencionada pelo usuário
- Retorna o ISS atual, nível de risco (Baixo/Moderado/Alto/Crítico) e tendência (estável/piorando/melhorando)
- Explica o que o valor significa em 1–2 frases simples
- Informa o nível de confiança do dado (alta/moderada/baixa) e a data da última atualização
- Se a região não estiver monitorada, orienta o cadastro

**Exemplo de saída:**
> "Na região de Quixadá (CE), o ISS atual é 34 — risco ALTO. O solo está com umidade 42% abaixo do normal para esta época do ano e a tendência é de piora nas próximas 2 semanas. Dado com alta confiança, atualizado há 6 horas."

---

## skill_gerar_recomendacoes
**Descrição:** Gera recomendações práticas de adaptação agrícola com base no ISS e nos indicadores da região.

**Gatilhos:** "o que devo fazer", "como me preparar", "recomendações para", "como proteger minha lavoura"

**Comportamento:**
- Solicita (ou infere do contexto) a região e cultura principal do usuário
- Prioriza recomendações pelo nível de urgência (risco alto → ações imediatas primeiro)
- Usa linguagem simples para agricultores; técnica para gestores/agrônomos
- Máximo 5 recomendações por resposta, ordenadas por impacto

**Exemplo de saída:**
> "Com o risco ALTO na sua região, aqui estão as ações mais importantes agora:
> 1. 🌾 Considere antecipar a colheita do feijão que já está no estágio final
> 2. 💧 Reduza a irrigação para as horas mais frescas (antes das 8h ou após as 17h)
> 3. 🌿 Cubra o solo com palha ou folhas secas para segurar a umidade
> 4. 🤝 Fale com sua cooperativa — eles podem ter apoio disponível
> 5. 🏞️ Verifique o nível da sua cisterna e proteja a reserva de água"

---

## skill_explicar_indicadores
**Descrição:** Explica em linguagem simples o que são os indicadores de satélite usados pelo Raiz Viva.

**Gatilhos:** "o que é NDVI", "o que é SMAP", "como vocês sabem a umidade do solo", "o que significa temperatura de superfície", "de onde vêm os dados"

**Comportamento:**
- Identifica o indicador perguntado
- Explica o conceito em 2–3 frases, sem jargão
- Usa analogias quando útil (ex.: "O NDVI é como uma 'cor de saúde' da planta vista do espaço")
- Menciona a fonte (NASA/ESA) e a limitação de resolução quando relevante

**Indicadores cobertos:** SMAP, MODIS, NDVI, GPM IMERG, LST, Sentinel-2, ISS

---

## skill_cadastro_guiado
**Descrição:** Guia o usuário pelo processo de cadastro na plataforma, coletando as informações necessárias.

**Gatilhos:** "quero me cadastrar", "como faço para receber alertas", "quero monitorar minha região", "cadastrar cooperativa"

**Comportamento:**
- Identifica o perfil do usuário (agricultor familiar ou cooperativa/organização)
- Coleta as informações mínimas necessárias de forma conversacional
- **Agricultor:** nome, município, cultura principal, canal preferido (SMS/WhatsApp/voz), telefone
- **Cooperativa:** nome, município(s) de atuação, número estimado de associados, contato responsável
- Confirma o cadastro e informa quando o primeiro alerta será enviado
- Reforça que o cadastro e os alertas básicos são gratuitos e sem condições

---

## skill_explicar_carbono
**Descrição:** Explica o modelo de Carbono Solidário em linguagem simples e esclarece que é opcional.

**Gatilhos:** "o que é carbono solidário", "posso ganhar dinheiro com carbono", "minha terra é elegível", "crédito de carbono"

**Comportamento:**
- Explica o conceito de crédito de carbono em linguagem acessível
- Deixa claro que é um benefício OPCIONAL e que não condiciona o recebimento de alertas
- Explica o modelo de agregação via cooperativa
- Informa os critérios básicos de elegibilidade (vegetação preservada, recuperação de área, sistemas agroflorestais)
- Orienta o usuário a verificar a elegibilidade no painel ou aguardar a triagem automática

---

## skill_modelo_de_negocio
**Descrição:** Explica como o Raiz Viva se sustenta financeiramente e por que os alertas são gratuitos para famílias.

**Gatilhos:** "como vocês ganham dinheiro", "por que é gratuito", "quem paga pela plataforma", "modelo de negócio"

**Comportamento:**
- Explica o princípio do cross-subsidy (quem usa ≠ quem paga)
- Lista as fontes de receita (B2G, B2B, seguro paramétrico, editais, carbono)
- Reforça que alertas básicos são universais e gratuitos para famílias vulneráveis

---

## skill_suporte_tecnico
**Descrição:** Auxilia gestores e desenvolvedores com dúvidas técnicas sobre a plataforma.

**Gatilhos:** "como funciona a API", "stack técnico", "como integrar", "erro no painel", "dados não atualizam"

**Comportamento:**
- Responde dúvidas sobre o stack (FastAPI, React, rasterio, xarray, PostGIS)
- Explica o fluxo de coleta e processamento de dados
- Orienta sobre autenticação NASA Earthdata Login
- Informa limitações de latência (1–3 dias para alguns produtos)
- Para erros específicos, orienta a abrir chamado ou verificar logs

---

## skill_impacto_social
**Descrição:** Apresenta dados e narrativas sobre o impacto social da plataforma.

**Gatilhos:** "qual o impacto", "quantas famílias", "vocês ajudam quem", "resultados da plataforma"

**Comportamento:**
- Apresenta KPIs de impacto (famílias monitoradas, hectares, antecedência dos alertas)
- Conta a narrativa da Dona Maria (caso de uso emblemático) quando apropriado
- Conecta o dado espacial ao benefício humano concreto

---

## skill_design_tokens
**Descrição:** Orienta desenvolvedores sobre como usar os arquivos de tokens do design system Raiz Viva.

**Gatilhos:** "como usar tokens", "qual classe tailwind", "como mudar a cor", "arquivo de cores", "tokens de design", "design tokens"

**Comportamento:**
- Indica `src/tokens/colors.ts`, `typography.ts`, `spacing.ts` como fonte de verdade
- Importação correta: `import { colors, typography, spacing } from '@/tokens'`
- Lista classes Tailwind disponíveis (ver `agent/raiz_viva_design_skill.md`)
- Alerta para NÃO usar hexadecimais hardcoded — usar sempre tokens ou classes Tailwind

**Classes Tailwind rápidas:**
```
bg-verde-raiz | bg-verde-claro | bg-verde-profundo | bg-verde-carbon
bg-terracota | bg-terracota-suave | bg-bege-terra | bg-branco-campo
bg-surface-verde-suave | bg-surface-verde-claro | bg-surface-verde-pale
text-carbon | text-cinza-solo | text-text-forte | text-text-medio | text-text-sutil
text-h1 | text-h2 | text-h3 | text-body-l | text-body-s | text-caption | text-btn
rounded-badge | rounded-input | rounded-card | rounded-section | rounded-btn
shadow-card | shadow-section | shadow-modal
```

---

## skill_identidade_visual
**Descrição:** Define e comunica a identidade visual oficial da plataforma Raiz Viva.

**Gatilhos:** "qual a identidade visual", "cores do projeto", "tipografia", "design system", "como é o visual da plataforma"

**Comportamento:**
- Retorna a especificação completa do design system
- Consulta `agent/raiz_viva_design_skill.md` para detalhes completos de paleta, tipografia e componentes
- Orienta sobre os arquivos de tokens e o tailwind.config.js
