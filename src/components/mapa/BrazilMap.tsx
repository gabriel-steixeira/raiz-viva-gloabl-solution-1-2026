import React from 'react'
import { RegionData } from './RegionSidePanel'
import { getLevel, levelConfig } from '@/components/ui/IssBadge'

export interface BrazilMapProps {
  regions: RegionData[]
  selectedRegionId?: string | null
  onRegionClick: (region: RegionData) => void
}

/**
 * BrazilMap — Mapa simplificado do Brasil com regiões clicáveis
 * Usa SVG com coordenadas aproximadas dos estados
 * Componente exclusivo da Tela 2 (Mapa Nacional)
 *
 * NOTA: Em produção substituir por react-simple-maps ou Mapbox
 */
const statePositions: Record<string, { cx: number; cy: number; rx: number; ry: number }> = {
  'AC':  { cx: 120, cy: 290, rx: 30, ry: 20 },
  'AM':  { cx: 180, cy: 230, rx: 60, ry: 50 },
  'RR':  { cx: 200, cy: 130, rx: 30, ry: 28 },
  'PA':  { cx: 310, cy: 200, rx: 65, ry: 48 },
  'AP':  { cx: 340, cy: 120, rx: 22, ry: 24 },
  'TO':  { cx: 350, cy: 280, rx: 28, ry: 38 },
  'MA':  { cx: 390, cy: 195, rx: 35, ry: 30 },
  'PI':  { cx: 430, cy: 220, rx: 28, ry: 32 },
  'CE':  { cx: 470, cy: 195, rx: 26, ry: 24 },
  'RN':  { cx: 508, cy: 185, rx: 18, ry: 16 },
  'PB':  { cx: 500, cy: 205, rx: 20, ry: 14 },
  'PE':  { cx: 480, cy: 220, rx: 28, ry: 16 },
  'AL':  { cx: 498, cy: 233, rx: 14, ry: 12 },
  'SE':  { cx: 490, cy: 248, rx: 13, ry: 11 },
  'BA':  { cx: 455, cy: 275, rx: 45, ry: 50 },
  'MG':  { cx: 410, cy: 335, rx: 48, ry: 42 },
  'ES':  { cx: 460, cy: 330, rx: 14, ry: 18 },
  'RJ':  { cx: 440, cy: 360, rx: 18, ry: 14 },
  'SP':  { cx: 390, cy: 370, rx: 38, ry: 28 },
  'PR':  { cx: 370, cy: 400, rx: 32, ry: 22 },
  'SC':  { cx: 365, cy: 430, rx: 28, ry: 18 },
  'RS':  { cx: 350, cy: 460, rx: 35, ry: 28 },
  'MS':  { cx: 330, cy: 355, rx: 32, ry: 28 },
  'MT':  { cx: 270, cy: 305, rx: 52, ry: 48 },
  'GO':  { cx: 370, cy: 315, rx: 32, ry: 32 },
  'DF':  { cx: 385, cy: 308, rx: 8,  ry: 8  },
  'RO':  { cx: 195, cy: 300, rx: 32, ry: 26 },
}

export default function BrazilMap({ regions, selectedRegionId, onRegionClick }: BrazilMapProps) {
  const regionById = Object.fromEntries(regions.map((r) => [r.id, r]))

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundColor: '#E8F4F0' }}>
      <svg
        viewBox="80 100 480 410"
        className="w-full h-full max-h-full"
        style={{ maxWidth: '680px' }}
      >
        {Object.entries(statePositions).map(([uf, pos]) => {
          const region = regionById[uf]
          const isSelected = selectedRegionId === uf
          const level = region ? getLevel(region.iss) : null
          const fillColor = level ? levelConfig[level].bg : '#D1E8DF'

          return (
            <g key={uf} onClick={() => region && onRegionClick(region)} style={{ cursor: region ? 'pointer' : 'default' }}>
              <ellipse
                cx={pos.cx}
                cy={pos.cy}
                rx={pos.rx}
                ry={pos.ry}
                fill={fillColor}
                stroke={isSelected ? '#2D6A4F' : '#B5CFC4'}
                strokeWidth={isSelected ? 2.5 : 1}
                opacity={region ? 1 : 0.6}
                style={{ transition: 'all 0.15s ease' }}
              />
              <text
                x={pos.cx}
                y={pos.cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={pos.rx > 35 ? 10 : 8}
                fontWeight="600"
                fill={level && (level === 'alto' || level === 'critico') ? '#7A2500' : '#1B4D35'}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {uf}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Tooltip hint */}
      <p
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-caption px-3 py-1 rounded-full"
        style={{ backgroundColor: 'rgba(27,42,34,0.7)', color: '#FAFAF7' }}
      >
        Clique em um estado para ver detalhes
      </p>
    </div>
  )
}
