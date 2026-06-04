import React from 'react'

const legendItems = [
  { color: '#52B788', label: 'ISS 70–100', sublabel: 'Baixo Risco' },
  { color: '#E9C46A', label: 'ISS 40–69', sublabel: 'Moderado' },
  { color: '#C1440E', label: 'ISS 0–39',  sublabel: 'Alto / Crítico' },
]

/**
 * MapLegend — Legenda de cores ISS para o mapa
 * Componente exclusivo da Tela 2 (Mapa)
 */
export default function MapLegend() {
  return (
    <div
      className="flex flex-col gap-2 p-3 rounded-xl"
      style={{ backgroundColor: 'rgba(27,42,34,0.85)', backdropFilter: 'blur(4px)' }}
    >
      <p className="text-caption font-semibold uppercase tracking-wide" style={{ color: '#95D5B2' }}>Legenda ISS</p>
      {legendItems.map((item) => (
        <div key={item.color} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-caption text-white">{item.label}</span>
          <span className="text-caption" style={{ color: '#95D5B2' }}>· {item.sublabel}</span>
        </div>
      ))}
    </div>
  )
}
