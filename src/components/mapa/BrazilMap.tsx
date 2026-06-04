import React from 'react'
import { RegionData } from './RegionSidePanel'
import { getLevel, levelConfig } from '@/components/ui/IssBadge'

export interface BrazilMapProps {
  regions: RegionData[]
  selectedRegionId?: string | null
  onRegionClick: (region: RegionData) => void
}

const statePositions: Record<string, { cx: number; cy: number; rx: number; ry: number }> = {
  'AC': { cx: 108, cy: 295, rx: 28, ry: 18 },
  'AM': { cx: 188, cy: 188, rx: 62, ry: 52 },
  'RR': { cx: 202, cy: 126, rx: 28, ry: 26 },
  'PA': { cx: 328, cy: 188, rx: 66, ry: 50 },
  'AP': { cx: 342, cy: 116, rx: 22, ry: 22 },
  'TO': { cx: 348, cy: 278, rx: 26, ry: 36 },
  'MA': { cx: 390, cy: 194, rx: 34, ry: 28 },
  'PI': { cx: 468, cy: 220, rx: 27, ry: 30 },
  'CE': { cx: 468, cy: 192, rx: 25, ry: 23 },
  'RN': { cx: 506, cy: 182, rx: 17, ry: 15 },
  'PB': { cx: 498, cy: 202, rx: 19, ry: 13 },
  'PE': { cx: 478, cy: 218, rx: 27, ry: 15 },
  'AL': { cx: 496, cy: 232, rx: 13, ry: 11 },
  'SE': { cx: 488, cy: 246, rx: 12, ry: 10 },
  'BA': { cx: 478, cy: 280, rx: 46, ry: 52 },
  'MG': { cx: 448, cy: 354, rx: 48, ry: 42 },
  'ES': { cx: 458, cy: 328, rx: 13, ry: 17 },
  'RJ': { cx: 438, cy: 358, rx: 17, ry: 13 },
  'SP': { cx: 388, cy: 408, rx: 38, ry: 28 },
  'PR': { cx: 368, cy: 418, rx: 32, ry: 21 },
  'SC': { cx: 362, cy: 428, rx: 27, ry: 17 },
  'RS': { cx: 334, cy: 500, rx: 34, ry: 27 },
  'MS': { cx: 328, cy: 352, rx: 31, ry: 27 },
  'MT': { cx: 308, cy: 292, rx: 53, ry: 50 },
  'GO': { cx: 368, cy: 312, rx: 31, ry: 31 },
  'DF': { cx: 383, cy: 306, rx: 8, ry: 8 },
  'RO': { cx: 193, cy: 298, rx: 31, ry: 25 },
}

export default function BrazilMap({ regions, selectedRegionId, onRegionClick }: BrazilMapProps) {
  const regionById = Object.fromEntries(regions.map((r) => [r.id, r]))
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  const visibleStates = ['MT', 'BA', 'SP', 'RS', 'AM', 'PA', 'PI', 'MG']

  // Função para retornar as cores oficiais vibrantes das bolhas do Figma
  function getPinColors(iss: number) {
    if (iss >= 70) {
      return { bg: '#52B788', text: '#FAFAF7' } // Seguro (Verde Claro)
    }
    if (iss >= 40) {
      return { bg: '#E9C46A', text: '#1B2A22' } // Atenção (Amarelo)
    }
    return { bg: '#C1440E', text: '#FAFAF7' } // Crítico (Vermelho Terracota)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Imagem do Brasil centralizada e reta (sem rotação de -15deg) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={`${base}/images/map-brazil.png`}
          alt="Mapa do Brasil ISS"
          aria-hidden="true"
          style={{
            height: '92%',
            width: 'auto',
            maxHeight: '100%',
            opacity: 1, // Opacidade total para cores nítidas e vibrantes
            userSelect: 'none',
          }}
        />
      </div>

      {/* SVG de estados sobrepostos */}
      <svg
        viewBox="80 100 480 410"
        className="relative w-full h-full max-h-full"
        style={{ maxWidth: '680px' }}
      >
        {Object.entries(statePositions).map(([uf, pos]) => {
          const region = regionById[uf]
          const isSelected = selectedRegionId === uf
          const isVisiblePin = visibleStates.includes(uf)

          if (!region) return null

          if (isVisiblePin) {
            const { bg, text } = getPinColors(region.iss)
            // Raio de 26px para círculos perfeitos destacados como no Figma
            const radius = 26

            return (
              <g
                key={uf}
                onClick={() => onRegionClick(region)}
                className="cursor-pointer group"
                style={{ outline: 'none' }}
              >
                {/* Sombra sutil sob a bolha */}
                <circle
                  cx={pos.cx}
                  cy={pos.cy}
                  r={radius}
                  fill="rgba(0,0,0,0.1)"
                  transform="translate(0, 2)"
                  className="transition-transform duration-200 group-hover:scale-105"
                  style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                />
                {/* Bolha principal */}
                <circle
                  cx={pos.cx}
                  cy={pos.cy}
                  r={radius}
                  fill={bg}
                  stroke={isSelected ? '#1B2A22' : '#FAFAF7'}
                  strokeWidth={isSelected ? 3 : 2}
                  className="transition-transform duration-200 group-hover:scale-105"
                  style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                />
                {/* Rótulo da sigla do estado */}
                <text
                  x={pos.cx}
                  y={pos.cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="12px"
                  fontWeight="700"
                  fill={text}
                  className="select-none pointer-events-none font-sans"
                >
                  {uf}
                </text>
              </g>
            )
          }
        })}
      </svg>

      {/* Tooltip hint */}
      <p
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-caption px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm font-medium"
        style={{ backgroundColor: 'rgba(27,42,34,0.85)', color: '#FAFAF7' }}
      >
        Clique em um ponto de monitoramento para ver detalhes
      </p>
    </div>
  )
}
