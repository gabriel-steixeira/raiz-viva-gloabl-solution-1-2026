# Raiz Viva — Base de Conhecimento

## 1. O que é o Raiz Viva
Plataforma de monitoramento climático que transforma dados de observação da Terra (NASA e parceiros) em alertas preventivos e recomendações práticas para agricultores familiares, comunidades rurais e populações vulneráveis. Entrega alertas via SMS, WhatsApp ou voz — no canal que a família já usa.

## 2. O Problema
Milhões de famílias vivem da agricultura de subsistência e são afetadas por:
- Secas prolongadas e veranicos
- Degradação e perda de capacidade produtiva do solo
- Aumento da temperatura de superfície
- Perda de vegetação e queda de produtividade

Os sinais de risco existem em bases públicas de satélite, mas estão em formatos científicos complexos (HDF, NetCDF, GeoTIFF) e não chegam a quem mais precisa.

## 3. Índice de Sobrevivência do Solo (ISS)
Indicador de 0 a 100 que sintetiza o risco climático-agrícola de uma região.

**Fórmula:**
ISS = 100 - (w1×Du + w2×Dn + w3×Dc + w4×Dt)

**Componentes:**
| Sigla | Indicador | Fonte |
|-------|-----------|-------|
| Du | Déficit de umidade do solo | NASA SMAP |
| Dn | Queda do NDVI vs. tendência esperada | MODIS / Sentinel-2 |
| Dc | Déficit acumulado de chuva | NASA GPM IMERG |
| Dt | Anomalia de temperatura de superfície | MODIS LST |

**Escala de risco:**
- 70–100: Baixo risco (verde)
- 40–69: Risco moderado (amarelo)
- 0–39: Risco alto / crítico (vermelho)

Os pesos (w1–w4) são calibráveis por bioma e cultura. No MVP, pesos fixos baseados em literatura.

## 4. Fontes de Dados de Satélite
- **NASA SMAP**: umidade do solo (~9 km de resolução, alta frequência)
- **MODIS LST** (Terra/Aqua) + **VIIRS**: temperatura de superfície
- **MODIS / Landsat 8-9 / Sentinel-2 (ESA)**: saúde da vegetação (NDVI)
- **NASA GPM IMERG**: precipitação (histórico e tendência)
- **NASA Earthdata**: séries históricas e climatologia

**Limitação técnica importante:** O SMAP tem resolução grosseira (~9 km), suficiente para alerta regional. Para nível de propriedade, o sistema combina com Sentinel-2 (10 m) quando disponível. O nível de confiança do alerta é sempre comunicado ao usuário.

## 5. Fluxo do Sistema
1. **Coleta**: rotina agendada baixa dados das APIs NASA Earthdata
2. **Processamento**: recorte da área, cálculo de anomalias e ISS
3. **Classificação**: IA/regras definem nível de risco e tendência
4. **Alerta**: risco vira mensagem simples enviada pelo canal certo
5. **Recomendação**: sistema sugere ações práticas de adaptação

## 6. Recomendações por Nível de Risco

**Risco BAIXO (ISS 70–100):**
- Manter práticas atuais de irrigação e manejo
- Monitorar tendência do ISS semanalmente

**Risco MODERADO (ISS 40–69):**
- Ajustar frequência de irrigação (reduzir evapotranspiração)
- Aplicar cobertura de solo (mulching)
- Verificar reservas hídricas

**Risco ALTO / CRÍTICO (ISS 0–39):**
- Considerar antecipação parcial da colheita (culturas em estágio final)
- Acionar a cooperativa para apoio logístico e técnico
- Proteger reservas hídricas (cisternas, açudes)
- Priorizar culturas de subsistência
- Comunicar à defesa civil se houver risco de deslocamento

## 7. Telas da Plataforma
1. **Cadastro**: Agricultura Familiar e Cooperativa
2. **Mapa Nacional de Risco**: regiões coloridas por ISS, filtros por bioma/estado
3. **Detalhe da Comunidade**: série temporal do ISS, 4 indicadores, nível de confiança
4. **Recomendações Inteligentes**: ações práticas priorizadas por urgência
5. **Alertas**: histórico 30 dias, alertas por tema, envio manual
6. **Dashboard Operacional**: KPIs, gráficos, métricas de impacto
7. **Impacto Social**: famílias protegidas, hectares, redução de perdas
8. **Carbono Solidário**: áreas elegíveis, potencial de captura, receita estimada

## 8. Público-Alvo
- Agricultores familiares
- Comunidades rurais
- Cooperativas agrícolas
- Prefeituras e defesa civil
- Organizações socioambientais
- Instituições de pesquisa

## 9. Modelo de Negócio
**Princípio:** separar quem usa de quem paga. Alertas básicos são gratuitos para famílias vulneráveis.

**Fontes de receita:**
- **B2G**: governos e defesa civil (painel regional, relatórios, planejamento)
- **B2B**: cooperativas e cadeia do agronegócio (assinatura, ESG)
- **Seguro paramétrico**: ISS aciona pagamento automático de microseguro agrícola
- **Editais e fundos climáticos**: financiam acesso gratuito
- **Carbono Solidário**: receita opcional para áreas elegíveis via agregação coletiva

## 10. Carbono Solidário
- Triagem automática de elegibilidade com os mesmos dados de satélite
- Apenas para áreas com vegetação preservada, recuperação ou sistemas agroflorestais
- Funciona por agregação: cooperativa reúne várias áreas pequenas para atingir escala mínima
- MRV simplificado apoia — não substitui — verificação independente
- **Alerta é gratuito e independente. Carbono é bônus opcional.**

## 11. Stack Técnico
- **Frontend**: React + Vite, Leaflet/Mapbox
- **Backend**: Python (FastAPI), rasterio, xarray, numpy, geopandas
- **IA/ML**: scikit-learn (MVP), LSTM/Prophet (fase 2)
- **Banco de dados**: PostgreSQL + PostGIS (ou SQLite/GeoJSON no MVP)
- **Alertas**: Twilio / WhatsApp Cloud API (ou simulação no MVP)
- **Deploy**: Docker, Render/Railway/Vercel

## 12. Roadmap
- **Fase 1 (MVP)**: ISS em 1–2 regiões, painel web, alerta simulado/integrado
- **Fase 2**: previsão por IA de série temporal; cobertura ampliada; app + SMS reais
- **Fase 3**: integração com cooperativas e defesa civil; módulo MRV de carbono
- **Fase 4**: expansão regional/nacional e parcerias institucionais
