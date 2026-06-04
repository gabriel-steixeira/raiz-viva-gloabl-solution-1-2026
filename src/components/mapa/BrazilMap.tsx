import React from 'react'
import { RegionData } from './RegionSidePanel'
import { getLevel, levelConfig } from '@/components/ui/IssBadge'

export interface BrazilMapProps {
  regions: RegionData[]
  selectedRegionId?: string | null
  onRegionClick: (region: RegionData) => void
}

const statePositions: Record<string, { cx: number; cy: number; rx: number; ry: number }> = {
  'AC':  { cx: 108, cy: 295, rx: 28, ry: 18 },
  'AM':  { cx: 178, cy: 228, rx: 62, ry: 52 },
  'RR':  { cx: 202, cy: 126, rx: 28, ry: 26 },
  'PA':  { cx: 308, cy: 198, rx: 66, ry: 50 },
  'AP':  { cx: 342, cy: 116, rx: 22, ry: 22 },
  'TO':  { cx: 348, cy: 278, rx: 26, ry: 36 },
  'MA':  { cx: 390, cy: 194, rx: 34, ry: 28 },
  'PI':  { cx: 428, cy: 220, rx: 27, ry: 30 },
  'CE':  { cx: 468, cy: 192, rx: 25, ry: 23 },
  'RN':  { cx: 506, cy: 182, rx: 17, ry: 15 },
  'PB':  { cx: 498, cy: 202, rx: 19, ry: 13 },
  'PE':  { cx: 478, cy: 218, rx: 27, ry: 15 },
  'AL':  { cx: 496, cy: 232, rx: 13, ry: 11 },
  'SE':  { cx: 488, cy: 246, rx: 12, ry: 10 },
  'BA':  { cx: 452, cy: 274, rx: 46, ry: 52 },
  'MG':  { cx: 408, cy: 334, rx: 48, ry: 42 },
  'ES':  { cx: 458, cy: 328, rx: 13, ry: 17 },
  'RJ':  { cx: 438, cy: 358, rx: 17, ry: 13 },
  'SP':  { cx: 388, cy: 368, rx: 38, ry: 28 },
  'PR':  { cx: 368, cy: 398, rx: 32, ry: 21 },
  'SC':  { cx: 362, cy: 428, rx: 27, ry: 17 },
  'RS':  { cx: 348, cy: 458, rx: 34, ry: 27 },
  'MS':  { cx: 328, cy: 352, rx: 31, ry: 27 },
  'MT':  { cx: 268, cy: 302, rx: 53, ry: 50 },
  'GO':  { cx: 368, cy: 312, rx: 31, ry: 31 },
  'DF':  { cx: 383, cy: 306, rx: 8,  ry: 8  },
  'RO':  { cx: 193, cy: 298, rx: 31, ry: 25 },
}

export default function BrazilMap({ regions, selectedRegionId, onRegionClick }: BrazilMapProps) {
  const regionById = Object.fromEntries(regions.map((r) => [r.id, r]))
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      {/* Imagem do Brasil rotacionada -15deg para alinhar com as bolinhas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={`${base}/images/map-brazil.jpg`}
          alt=""
          aria-hidden="true"
          style={{
            height: '90%',
            width: 'auto',
            maxHeight: '100%',
            opacity: 0.22,
            mixBlendMode: 'multiply',
            transform: 'rotate(-15deg)',
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
          const level = region ? getLevel(region.iss) : null
          const fillColor = level ? levelConfig[level].bg : '#C8E6DA'

          return (
            <g
              key={uf}
              onClick={() => region && onRegionClick(region)}
              style={{ cursor: region ? 'pointer' : 'default' }}
            >
              <ellipse
                cx={pos.cx}
                cy={pos.cy}
                rx={pos.rx}
                ry={pos.ry}
                fill={fillColor}
                stroke={isSelected ? '#2D6A4F' : '#A8CBBF'}
                strokeWidth={isSelected ? 2.5 : 1}
                opacity={region ? 0.85 : 0.5}
                style={{ transition: 'all 0.15s ease' }}
              />
              <text
                x={pos.cx}
                y={pos.cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={pos.rx > 35 ? 10 : pos.rx > 20 ? 8 : 7}
                fontWeight="600"
                fill={
                  level && (level === 'alto' || level === 'critico')
                    ? '#7A2500'
                    : '#1B4D35'
                }
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
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-caption px-3 py-1 rounded-full whitespace-nowrap"
        style={{ backgroundColor: 'rgba(27,42,34,0.7)', color: '#FAFAF7' }}
      >
        Clique em um estado para ver detalhes
      </p>
    </div>
  )
}
