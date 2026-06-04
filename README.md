# 🌱 Raiz Viva — v2.0

> Transformando dados espaciais em proteção para quem vive da terra

**Global Solution 1 — Space Connect | Turma 4SIOA**

---

## O que é

O **Raiz Viva** é uma plataforma de monitoramento climático e proteção comunitária que transforma dados de observação da Terra (NASA e parceiros) em alertas preventivos e recomendações práticas para agricultores familiares, comunidades rurais e populações vulneráveis.

> *"A NASA observa o planeta do espaço. O Raiz Viva transforma esses sinais em proteção para quem vive da terra."*

---

## Estrutura do Repositório

```
raiz-viva/
├── agent/
│   ├── raiz_viva_agent_system_prompt.md   # System prompt do agente IA
│   ├── raiz_viva_knowledge_base.md        # Base de conhecimento completa
│   └── raiz_viva_skills.md               # Skills e comportamentos do agente
└── README.md
```

---

## Stack Técnico

- **Frontend**: React + Vite, Leaflet/Mapbox
- **Backend**: Python (FastAPI), rasterio, xarray, numpy, geopandas
- **IA/ML**: scikit-learn (MVP), LSTM/Prophet (fase 2)
- **Banco de dados**: PostgreSQL + PostGIS
- **Alertas**: Twilio / WhatsApp Cloud API
- **Dados**: NASA SMAP, MODIS, GPM IMERG, Sentinel-2 (ESA)

---

## Índice de Sobrevivência do Solo (ISS)

Indicador de 0 a 100 que sintetiza o risco climático-agrícola de uma região:

```
ISS = 100 - (w1×Du + w2×Dn + w3×Dc + w4×Dt)
```

| Componente | Indicador | Fonte |
|---|---|---|
| Du | Déficit de umidade do solo | NASA SMAP |
| Dn | Queda do NDVI | MODIS / Sentinel-2 |
| Dc | Déficit acumulado de chuva | NASA GPM IMERG |
| Dt | Anomalia de temperatura | MODIS LST |

---

## Turma
4SIOA — FIAP — Global Solution 1 — Space Connect — 2026
