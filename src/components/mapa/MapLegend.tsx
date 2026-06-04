import React from 'react'

const legendItems = [
  { color: '#52B788', label: '70-100: Seguro' },
  { color: '#E9C46A', label: '40-69: Atenção' },
  { color: '#C1440E', label: '0-39: Crítico' },
]

/**
 * MapLegend — Legenda de cores ISS para o mapa
 * Alinhado ao Figma: card branco, borda suave, sombra e fonte Carbon
 */
export default function MapLegend() {
  return (
    <div
      className="flex flex-col gap-3 p-4 rounded-xl border"
      style={{
        backgroundColor: '#FAFAF7',
        borderColor: '#E5E0D5',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        minWidth: '240px',
      }}
    >
      <p
        className="text-xs font-bold leading-tight font-sans"
        style={{ color: '#1B2A22' }}
      >
        Índice de Sustentabilidade do Solo (ISS)
      </p>
      
      <div className="flex flex-col gap-2">
        {legendItems.map((item) => (
          <div key={item.color} className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span
              className="text-xs font-medium font-sans"
              style={{ color: '#1B2A22' }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
