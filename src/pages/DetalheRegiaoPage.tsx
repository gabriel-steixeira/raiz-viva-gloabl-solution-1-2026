import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Send, Sparkles, TrendingDown, TrendingUp, Minus, Shield, HelpCircle, Droplet, Leaf, CloudRain, Thermometer, Plus } from 'lucide-react'
import AppLayout from '@/components/ui/AppLayout'
import TopBar from '@/components/ui/TopBar'
import Breadcrumb from '@/components/ui/Breadcrumb'
import IssBadge from '@/components/ui/IssBadge'
import { regioesMock } from '@/data/regioes'

// Cidades de referência agrícola por estado para a simulação dinâmica
interface Vizinho {
  nome: string
  x: number
  y: number
  iss: number
}

interface CidadeRef {
  cidade: string
  uf: string
  microrregiao: string
  vizinhos: Vizinho[]
}

const cidadesReferencia: Record<string, CidadeRef> = {
  CE: {
    cidade: 'Quixadá',
    uf: 'CE',
    microrregiao: 'Sertão Central',
    vizinhos: [
      { nome: 'Choró', x: 80, y: 70, iss: 45 },
      { nome: 'Ibaretama', x: 220, y: 110, iss: 30 },
      { nome: 'Banabuiú', x: 140, y: 160, iss: 28 },
    ]
  },
  PE: {
    cidade: 'Petrolina',
    uf: 'PE',
    microrregiao: 'Sertão do São Francisco',
    vizinhos: [
      { nome: 'Lagoa Grande', x: 90, y: 65, iss: 48 },
      { nome: 'Dormentes', x: 210, y: 120, iss: 38 },
      { nome: 'Afrânio', x: 130, y: 170, iss: 42 },
    ]
  },
  BA: {
    cidade: 'Juazeiro',
    uf: 'BA',
    microrregiao: 'Sertão Baiano',
    vizinhos: [
      { nome: 'Casa Nova', x: 75, y: 80, iss: 52 },
      { nome: 'Curaçá', x: 230, y: 105, iss: 58 },
      { nome: 'Sobradinho', x: 150, y: 155, iss: 54 },
    ]
  },
  MT: {
    cidade: 'Sorriso',
    uf: 'MT',
    microrregiao: 'Médio Norte',
    vizinhos: [
      { nome: 'Lucas do Rio Verde', x: 85, y: 75, iss: 18 },
      { nome: 'Nova Mutum', x: 215, y: 115, iss: 20 },
      { nome: 'Sinop', x: 145, y: 165, iss: 12 },
    ]
  },
  MS: {
    cidade: 'Dourados',
    uf: 'MS',
    microrregiao: 'Grande Dourados',
    vizinhos: [
      { nome: 'Maracaju', x: 80, y: 80, iss: 75 },
      { nome: 'Ponta Porã', x: 220, y: 100, iss: 68 },
      { nome: 'Fátima do Sul', x: 150, y: 160, iss: 74 },
    ]
  },
  SP: {
    cidade: 'Ribeirão Preto',
    uf: 'SP',
    microrregiao: 'Norte Paulista',
    vizinhos: [
      { nome: 'Sertãozinho', x: 90, y: 70, iss: 76 },
      { nome: 'Cravinhos', x: 210, y: 115, iss: 80 },
      { nome: 'Jardinópolis', x: 135, y: 165, iss: 79 },
    ]
  },
  RS: {
    cidade: 'Passo Fundo',
    uf: 'RS',
    microrregiao: 'Planalto Médio',
    vizinhos: [
      { nome: 'Marau', x: 85, y: 70, iss: 75 },
      { nome: 'Carazinho', x: 225, y: 110, iss: 80 },
      { nome: 'Erechim', x: 135, y: 175, iss: 78 },
    ]
  },
  AM: {
    cidade: 'Tefé',
    uf: 'AM',
    microrregiao: 'Médio Solimões',
    vizinhos: [
      { nome: 'Alvarães', x: 90, y: 75, iss: 87 },
      { nome: 'Uarini', x: 220, y: 105, iss: 90 },
      { nome: 'Coari', x: 140, y: 160, iss: 85 },
    ]
  },
  MG: {
    cidade: 'Patrocínio',
    uf: 'MG',
    microrregiao: 'Triângulo Mineiro',
    vizinhos: [
      { nome: 'Guimarânia', x: 80, y: 80, iss: 68 },
      { nome: 'Cruzeiro da Fortaleza', x: 220, y: 110, iss: 62 },
      { nome: 'Serra do Salitre', x: 140, y: 160, iss: 60 },
    ]
  },
  GO: {
    cidade: 'Rio Verde',
    uf: 'GO',
    microrregiao: 'Sudoeste Goiano',
    vizinhos: [
      { nome: 'Santa Helena de Goiás', x: 90, y: 70, iss: 78 },
      { nome: 'Montividiu', x: 210, y: 115, iss: 72 },
      { nome: 'Jataí', x: 135, y: 165, iss: 74 },
    ]
  },
  PR: {
    cidade: 'Cascavel',
    uf: 'PR',
    microrregiao: 'Oeste Paranaense',
    vizinhos: [
      { nome: 'Toledo', x: 80, y: 75, iss: 84 },
      { nome: 'Corbélia', x: 220, y: 105, iss: 81 },
      { nome: 'Tupãssi', x: 145, y: 160, iss: 85 },
    ]
  },
  MA: {
    cidade: 'Balsas',
    uf: 'MA',
    microrregiao: 'Gerais de Balsas',
    vizinhos: [
      { nome: 'Riachão', x: 90, y: 80, iss: 65 },
      { nome: 'Fortaleza dos Nogueiras', x: 210, y: 110, iss: 59 },
      { nome: 'Tasso Fragoso', x: 130, y: 170, iss: 58 },
    ]
  },
  PI: {
    cidade: 'Picos',
    uf: 'PI',
    microrregiao: 'Vale do Guaribas',
    vizinhos: [
      { nome: 'Sussuapara', x: 85, y: 75, iss: 30 },
      { nome: 'Geminiano', x: 220, y: 115, iss: 25 },
      { nome: 'Santana do Piauí', x: 140, y: 165, iss: 28 },
    ]
  },
  RN: {
    cidade: 'Caicó',
    uf: 'RN',
    microrregiao: 'Seridó Ocidental',
    vizinhos: [
      { nome: 'Jardim de Piranhas', x: 80, y: 80, iss: 35 },
      { nome: 'São Fernando', x: 220, y: 110, iss: 40 },
      { nome: 'Serra Negra do Norte', x: 140, y: 160, iss: 36 },
    ]
  },
  PB: {
    cidade: 'Sousa',
    uf: 'PB',
    microrregiao: 'Sousa',
    vizinhos: [
      { nome: 'Aparecida', x: 90, y: 75, iss: 42 },
      { nome: 'São José da Lagoa Tapada', x: 210, y: 115, iss: 48 },
      { nome: 'Marizópolis', x: 135, y: 165, iss: 44 },
    ]
  },
  SE: {
    cidade: 'Lagarto',
    uf: 'SE',
    microrregiao: 'Agreste de Lagarto',
    vizinhos: [
      { nome: 'Riachão do Dantas', x: 85, y: 70, iss: 72 },
      { nome: 'Simão Dias', x: 225, y: 110, iss: 68 },
      { nome: 'Salgado', x: 140, y: 160, iss: 71 },
    ]
  },
  AL: {
    cidade: 'Arapiraca',
    uf: 'AL',
    microrregiao: 'Agreste Alagoano',
    vizinhos: [
      { nome: 'Craíbas', x: 90, y: 70, iss: 58 },
      { nome: 'Lagoa da Canoa', x: 210, y: 115, iss: 62 },
      { nome: 'Feira Grande', x: 135, y: 165, iss: 60 },
    ]
  },
  PA: {
    cidade: 'Paragominas',
    uf: 'PA',
    microrregiao: 'Paragominas',
    vizinhos: [
      { nome: 'Ipixuna do Pará', x: 80, y: 80, iss: 83 },
      { nome: 'Ulianópolis', x: 220, y: 110, iss: 86 },
      { nome: 'Dom Eliseu', x: 140, y: 160, iss: 84 },
    ]
  },
}

// Retorna uma cidade genérica se o estado não estiver no mapeamento
function obterCidadeReferencia(regiaoId: string, nomeEstado: string): CidadeRef {
  const uf = regiaoId.toUpperCase()
  if (cidadesReferencia[uf]) {
    return cidadesReferencia[uf]
  }
  return {
    cidade: `Região de ${nomeEstado}`,
    uf: uf,
    microrregiao: 'Zona Agrícola Local',
    vizinhos: [
      { nome: 'Distrito Norte', x: 80, y: 75, iss: 65 },
      { nome: 'Distrito Sul', x: 220, y: 110, iss: 55 },
      { nome: 'Distrito Leste', x: 140, y: 160, iss: 60 },
    ]
  }
}

// Algoritmo gerador de dados climáticos realistas baseado no ISS
function gerarIndicadores(iss: number) {
  // 1. Umidade do Solo (SMAP)
  const umidade = Math.round(iss * 0.8 + 15)
  let umidadeStatus = 'Normal'
  let umidadeCor = '#52B788'
  if (umidade < 45) {
    umidadeStatus = 'Abaixo do normal'
    umidadeCor = '#C1440E'
  } else if (umidade < 65) {
    umidadeStatus = 'Moderada'
    umidadeCor = '#E9C46A'
  }

  // 2. Saúde da Vegetação (NDVI)
  const ndvi = Number(((iss - 52) / 100).toFixed(2))
  let ndviStatus = 'Vegetação Saudável'
  let ndviCor = '#52B788'
  if (ndvi < 0.15) {
    ndviStatus = 'Vegetação Estressada'
    ndviCor = '#C1440E'
  } else if (ndvi < 0.40) {
    ndviStatus = 'Atenção / Seca Leve'
    ndviCor = '#E9C46A'
  }

  // 3. Déficit Hídrico (GPM)
  const deficit = Math.round(iss * 0.8 - 65)
  let deficitCor = '#52B788'
  if (deficit < -30) {
    deficitCor = '#C1440E'
  } else if (deficit < -10) {
    deficitCor = '#E9C46A'
  }

  // 4. Temperatura de Superfície (MODIS LST)
  const anomalia = Number(((100 - iss) * 0.05).toFixed(1))
  let tempStatus = 'Normal'
  let tempCor = '#52B788'
  if (anomalia > 2.0) {
    tempStatus = 'Anomalia Térmica'
    tempCor = '#C1440E'
  } else if (anomalia > 0.5) {
    tempStatus = 'Moderada'
    tempCor = '#E9C46A'
  }

  return {
    umidade: {
      valor: `${umidade}%`,
      status: umidadeStatus,
      cor: umidadeCor,
      tendencia: iss < 50 ? 'caindo' : 'subindo',
      percentual: umidade
    },
    ndvi: {
      valor: `${ndvi >= 0 ? '+' : ''}${ndvi} NDVI`,
      status: ndviStatus,
      cor: ndviCor,
      tendencia: iss < 50 ? 'caindo' : 'subindo',
      percentual: Math.min(100, Math.max(0, Math.round((ndvi + 1) * 50)))
    },
    deficit: {
      valor: `${deficit}mm`,
      status: 'Acumulado 30d',
      cor: deficitCor,
      tendencia: 'caindo',
      percentual: Math.min(100, Math.max(0, 100 - Math.abs(deficit)))
    },
    temperatura: {
      valor: `${anomalia >= 0 ? '+' : ''}${anomalia}°C`,
      status: tempStatus,
      cor: tempCor,
      tendencia: anomalia > 0.5 ? 'subindo' : 'estavel',
      percentual: Math.min(100, Math.max(0, Math.round((anomalia / 5) * 100)))
    },
  }
}

/**
 * Raiz Viva — Tela 3: Detalhe da Região / Comunidade
 * Rota: /mapa/:regiaoId | Autenticada | Com sidebar
 */
export default function DetalheRegiaoPage() {
  const { regiaoId } = useParams<{ regiaoId: string }>()
  const navigate = useNavigate()
  const [zoomLevel, setZoomLevel] = useState(1)

  // Encontrar estado correspondente nos dados mockados
  const estadoData = regioesMock.find((r) => r.id === regiaoId?.toUpperCase())

  if (!estadoData) {
    return (
      <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 p-10 bg-branco-campo">
          <h2 className="text-h2 font-bold text-carbon">Região não encontrada</h2>
          <p className="text-cinza-solo">O estado "{regiaoId}" não está mapeado no sistema.</p>
          <button
            onClick={() => navigate('/mapa')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-btn text-white font-semibold hover:opacity-90 bg-verde-raiz"
          >
            <ArrowLeft size={16} /> Voltar ao Mapa
          </button>
        </div>
      </AppLayout>
    )
  }

  // Obter informações detalhadas do município e gerar indicadores dinâmicos
  const infoLocal = obterCidadeReferencia(estadoData.id, estadoData.nome)
  const indicadores = gerarIndicadores(estadoData.iss)

  // Estilos de cor de fundo do Hero baseados no ISS
  let heroBg = '#EBF7F1' // verde sutil (baixo risco)
  let heroBorder = '#D8F3DC'
  let labelConfianca = 'Baixo Risco'
  if (estadoData.iss < 40) {
    heroBg = '#FFEAE1' // terracota sutil (risco alto/critico)
    heroBorder = '#FFE0D5'
    labelConfianca = 'Alta confiança'
  } else if (estadoData.iss < 70) {
    heroBg = '#FFFBEA' // amarelo sutil (moderado)
    heroBorder = '#FFF3CD'
    labelConfianca = 'Média confiança'
  }

  // Gerar dados do Histórico de ISS (últimos 90 dias) de forma condicional coerente
  const pontosISS = [
    Math.min(100, Math.max(0, estadoData.iss - 15)),
    Math.min(100, Math.max(0, estadoData.iss - 5)),
    Math.min(100, Math.max(0, estadoData.iss - 20)),
    Math.min(100, Math.max(0, estadoData.iss + 10)),
    Math.min(100, Math.max(0, estadoData.iss + 22)),
    Math.min(100, Math.max(0, estadoData.iss + 18)),
    estadoData.iss // Hoje termina exatamente no valor atual
  ]

  // Mapear pontos Y do SVG: Y=150 na base (ISS=0), Y=30 no topo (ISS=100)
  const svgCoords = pontosISS.map((val, idx) => {
    const x = 50 + idx * 60 // espaçamento horizontal de 60px
    const y = 150 - (val / 100) * 120
    return { x, y }
  })

  // String de caminho para a linha do gráfico SVG
  const linePath = svgCoords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ')
  // String de caminho para a área preenchida abaixo da linha
  const areaPath = `${linePath} L ${svgCoords[svgCoords.length - 1].x} 150 L ${svgCoords[0].x} 150 Z`

  return (
    <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
      <TopBar showSearch={false} />

      <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col gap-6 bg-surface-verde-claro">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Mapa', link: '/mapa' },
            { label: `${infoLocal.cidade}, ${infoLocal.uf}` },
          ]}
        />

        {/* Hero Card */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-2xl border transition-all"
          style={{ backgroundColor: heroBg, borderColor: heroBorder }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <IssBadge value={estadoData.iss} size="lg" />
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase flex items-center gap-1.5 text-verde-carbon"
                style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
              >
                <Shield size={12} className="text-verde-raiz" />
                {labelConfianca} — Atualizado {estadoData.ultimaAtualizacao}
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-carbon">
                {infoLocal.cidade}, {infoLocal.uf}
              </h2>
              <p className="text-body-s font-semibold mt-0.5 text-cinza-solo">
                {infoLocal.microrregiao}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0 w-full md:w-auto">
            <button
              onClick={() => navigate(`/mapa/${regiaoId}/recomendacoes`)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-btn text-body-s font-semibold transition-all hover:opacity-90 active:scale-[0.98] bg-verde-raiz text-branco-campo"
            >
              <Sparkles size={16} />
              Ver Recomendações
            </button>
            <button
              onClick={() => alert('Alerta regional enviado com sucesso aos agricultores da região!')}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-btn text-body-s font-semibold transition-all hover:bg-gray-100/80 active:scale-[0.98] border border-verde-raiz text-verde-raiz bg-white"
            >
              <Send size={16} />
              Enviar Alerta
            </button>
          </div>
        </div>

        {/* Grid de Indicadores (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Umidade do Solo */}
          <div className="bg-white border border-borda-suave rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Droplet size={20} strokeWidth={2} />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-bold" style={{ color: indicadores.umidade.cor }}>
                {indicadores.umidade.tendencia === 'caindo' ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                {indicadores.umidade.tendencia === 'caindo' ? 'caindo' : 'subindo'}
              </span>
            </div>
            <div>
              <span className="text-micro font-bold uppercase tracking-wider block text-cinza-solo">
                Umidade do Solo
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-carbon">{indicadores.umidade.valor}</span>
                <span className="text-xs font-bold" style={{ color: indicadores.umidade.cor }}>
                  {indicadores.umidade.status}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${indicadores.umidade.percentual}%`, backgroundColor: indicadores.umidade.cor }}
              />
            </div>
            <span className="text-micro font-medium text-cinza-solo">
              Fonte: SMAP / INMET
            </span>
          </div>

          {/* Card 2: Saúde da Vegetação */}
          <div className="bg-white border border-borda-suave rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Leaf size={20} strokeWidth={2} />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-bold" style={{ color: indicadores.ndvi.cor }}>
                {indicadores.ndvi.tendencia === 'caindo' ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                {indicadores.ndvi.tendencia === 'caindo' ? 'caindo' : 'subindo'}
              </span>
            </div>
            <div>
              <span className="text-micro font-bold uppercase tracking-wider block text-cinza-solo">
                Saúde da Vegetação
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-carbon">{indicadores.ndvi.valor}</span>
                <span className="text-xs font-bold" style={{ color: indicadores.ndvi.cor }}>
                  {estadoData.iss < 40 ? 'Seca Severa' : 'Estável'}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${indicadores.ndvi.percentual}%`, backgroundColor: indicadores.ndvi.cor }}
              />
            </div>
            <span className="text-micro font-medium text-cinza-solo">
              Fonte: Sentinel-2 / NDVI
            </span>
          </div>

          {/* Card 3: Déficit Hídrico */}
          <div className="bg-white border rounded-2xl p-5 flex flex-col gap-4 shadow-sm" style={{ borderColor: '#E5E0D5' }}>
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <CloudRain size={20} strokeWidth={2} />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-bold" style={{ color: indicadores.deficit.cor }}>
                <TrendingDown size={14} /> caindo
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block" style={{ color: '#6B7280' }}>
                Déficit Hídrico
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#1B2A22]">{indicadores.deficit.valor}</span>
                <span className="text-xs font-bold" style={{ color: '#6B7280' }}>
                  {indicadores.deficit.status}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${indicadores.deficit.percentual}%`, backgroundColor: indicadores.deficit.cor }}
              />
            </div>
            <span className="text-[11px] font-medium" style={{ color: '#6B7280' }}>
              Fonte: NASA GPM IMERG
            </span>
          </div>

          {/* Card 4: Temperatura de Superfície */}
          <div className="bg-white border rounded-2xl p-5 flex flex-col gap-4 shadow-sm" style={{ borderColor: '#E5E0D5' }}>
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-red-50 text-red-600">
                <Thermometer size={20} strokeWidth={2} />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-bold" style={{ color: indicadores.temperatura.cor }}>
                {indicadores.temperatura.tendencia === 'subindo' ? <TrendingUp size={14} style={{ color: '#C1440E' }} /> : <Minus size={14} style={{ color: '#6B7280' }} />}
                {indicadores.temperatura.tendencia === 'subindo' ? 'subindo' : 'estável'}
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block" style={{ color: '#6B7280' }}>
                Temp. Superfície
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#1B2A22]">{indicadores.temperatura.valor}</span>
                <span className="text-xs font-bold animate-pulse" style={{ color: indicadores.temperatura.cor }}>
                  {indicadores.temperatura.status}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${indicadores.temperatura.percentual}%`, backgroundColor: indicadores.temperatura.cor }}
              />
            </div>
            <span className="text-[11px] font-medium" style={{ color: '#6B7280' }}>
              Média 7d (MODIS LST)
            </span>
          </div>
        </div>

        {/* Seção Gráfico (Histórico) + Mapa Regional */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* Histórico do ISS */}
          <div className="bg-white border border-borda-suave rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-h3 font-bold text-carbon">Histórico do ISS</h3>
              <select
                className="text-xs font-semibold py-1.5 px-3 rounded-lg border border-borda-suave outline-none cursor-pointer hover:bg-gray-50 transition-colors bg-branco-campo text-carbon"
              >
                <option>Últimos 90 dias</option>
                <option>Últimos 30 dias</option>
                <option>Último ano</option>
              </select>
            </div>

            {/* Gráfico de Linha em SVG Nativo */}
            <div className="relative w-full aspect-[2/1] min-h-[220px] flex items-center justify-center bg-gray-50/50 rounded-xl p-4 border border-dashed border-gray-200">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 450 180" aria-label="Gráfico do ISS dos últimos 90 dias">
                {/* Linhas de grade de risco horizontal */}
                <line x1="40" y1="120" x2="420" y2="120" stroke="#FFE0D5" strokeWidth="1" strokeDasharray="4 4" />
                <text x="425" y="123" fill="#C1440E" className="text-[10px] font-bold">40</text>

                <line x1="40" y1="60" x2="420" y2="60" stroke="#FFF3CD" strokeWidth="1" strokeDasharray="4 4" />
                <text x="425" y="63" fill="#D3A219" className="text-[10px] font-bold">70</text>

                {/* Eixos X e Y */}
                <line x1="40" y1="30" x2="40" y2="150" stroke="#E5E0D5" strokeWidth="1.5" />
                <line x1="40" y1="150" x2="420" y2="150" stroke="#E5E0D5" strokeWidth="1.5" />

                {/* Rótulos do Eixo Y */}
                <text x="15" y="153" fill="#6B7280" className="text-[10px] font-medium text-right">0</text>
                <text x="15" y="123" fill="#6B7280" className="text-[10px] font-medium text-right">40</text>
                <text x="15" y="63" fill="#6B7280" className="text-[10px] font-medium text-right">70</text>
                <text x="10" y="33" fill="#6B7280" className="text-[10px] font-medium text-right">100</text>

                {/* Rótulos do Eixo X */}
                <text x="50" y="168" fill="#6B7280" className="text-[10px] font-medium" textAnchor="middle">90d atrás</text>
                <text x="230" y="168" fill="#6B7280" className="text-[10px] font-medium" textAnchor="middle">45d atrás</text>
                <text x="410" y="168" fill="#6B7280" className="text-[10px] font-medium" textAnchor="middle">Hoje</text>

                {/* Preenchimento sob a curva */}
                <path
                  d={areaPath}
                  fill="url(#gradient-area)"
                  opacity="0.1"
                />

                {/* Curva do Gráfico */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="#2D6A4F"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Pontos de dados na curva */}
                {svgCoords.map((c, i) => (
                  <g key={i} className="group cursor-pointer">
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="4"
                      fill="#2D6A4F"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    {/* Tooltip ao passar o mouse ou sutil indicador de valor */}
                    {i === svgCoords.length - 1 && (
                      <g>
                        <rect x={c.x - 22} y={c.y - 28} width="44" height="20" rx="6" fill="#1B2A22" />
                        <text x={c.x} y={c.y - 15} fill="#FAFAF7" className="text-[9px] font-bold" textAnchor="middle">
                          ISS {pontosISS[i]}
                        </text>
                      </g>
                    )}
                  </g>
                ))}

                {/* Definições de Gradiente para a Área */}
                <defs>
                  <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2D6A4F" />
                    <stop offset="100%" stopColor="#FAFAF7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Legenda do Gráfico */}
            <div className="flex justify-center gap-6 mt-2 text-xs font-semibold text-[#6B7280]">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#C1440E' }} />
                Risco Crítico (&lt;40)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#E9C46A' }} />
                Atenção (40 - 69)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#52B788' }} />
                Baixo Risco (70 - 100)
              </span>
            </div>
          </div>

          {/* Mapa Regional */}
          <div className="bg-white border border-borda-suave rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-h3 font-bold text-carbon">Mapa Regional</h3>
              <span className="text-micro font-semibold text-cinza-solo uppercase tracking-wider">
                Microrregiao de {infoLocal.cidade}
              </span>
            </div>

            {/* Mini Mapa em SVG Estilizado com Relevo */}
            <div className="relative w-full aspect-[2/1] min-h-[220px] rounded-xl overflow-hidden border border-gray-100 bg-[#E5ECE7] flex items-center justify-center shadow-inner">
              <svg
                className="w-full h-full p-2 transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
                viewBox="0 0 300 200"
              >
                {/* Silhueta / Relevos topográficos concêntricos para parecer mapa real */}
                <path
                  d="M 20,100 C 40,60 80,40 140,50 C 200,60 250,30 280,80 C 310,130 270,170 200,180 C 130,190 70,160 20,100 Z"
                  fill="#DFE9E3"
                  stroke="#CADAD0"
                  strokeWidth="1.5"
                />
                <path
                  d="M 50,110 C 70,80 100,65 140,70 C 180,75 220,55 240,90 C 260,125 230,150 180,160 C 130,170 80,145 50,110 Z"
                  fill="#D3E2D8"
                  stroke="#B8CDC0"
                  strokeWidth="1"
                />
                <path
                  d="M 90,120 C 105,100 120,90 140,95 C 160,100 190,85 200,110 C 210,135 190,145 160,150 C 130,155 105,140 90,120 Z"
                  fill="#C4D7CB"
                  stroke="#A6BEAF"
                  strokeWidth="1"
                />

                {/* Pins dos Municípios Vizinhos */}
                {infoLocal.vizinhos.map((v, i) => (
                  <g key={i} className="cursor-pointer group">
                    <circle cx={v.x} cy={v.y} r="8" fill="#FAFAF7" opacity="0.6" />
                    <circle cx={v.x} cy={v.y} r="4" fill={v.iss < 40 ? '#C1440E' : v.iss < 70 ? '#E9C46A' : '#52B788'} />
                    <text
                      x={v.x}
                      y={v.y + 16}
                      fill="#6B7280"
                      className="text-[9px] font-bold text-center"
                      textAnchor="middle"
                      style={{ filter: 'drop-shadow(0px 1px 1px white)' }}
                    >
                      {v.nome} ({v.iss})
                    </text>
                  </g>
                ))}

                {/* Pin Principal (Cidade Referência) */}
                <g className="cursor-pointer">
                  {/* Efeito de radar/pulso se estiver com risco alto */}
                  {estadoData.iss < 40 && (
                    <circle cx="150" cy="110" r="16" fill="#C1440E" opacity="0.15" className="animate-ping" />
                  )}
                  <path
                    d="M150 92c-6.6 0-12 5.4-12 12 0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                    fill={estadoData.iss < 40 ? '#C1440E' : estadoData.iss < 70 ? '#E9C46A' : '#2D6A4F'}
                    stroke="#FAFAF7"
                    strokeWidth="1.5"
                  />
                  <rect x="110" y="130" width="80" height="18" rx="4" fill="#1B2A22" />
                  <text x="150" y="142" fill="#FAFAF7" className="text-[9px] font-extrabold" textAnchor="middle">
                    {infoLocal.cidade} ({estadoData.iss})
                  </text>
                </g>
              </svg>

              {/* Botões de Zoom */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-1.5">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border hover:bg-gray-50 text-[#1B2A22] transition-all"
                  aria-label="Aumentar Zoom"
                  style={{ borderColor: '#E5E0D5' }}
                >
                  <Plus size={14} strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border hover:bg-gray-50 text-[#1B2A22] transition-all"
                  aria-label="Diminuir Zoom"
                  style={{ borderColor: '#E5E0D5' }}
                >
                  <Minus size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
