import React from 'react'
import { ChevronDown, SlidersHorizontal, Calendar } from 'lucide-react'

export interface FilterItem {
  id: string
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
}

export interface FilterBarProps {
  filters: FilterItem[]
}

/**
 * FilterBar — Barra de filtros horizontais
 * Design tokens: bg-white border-borda-suave | selects com border-borda-suave
 * Período "Últimos 30 dias" com ícone Calendar
 */
export default function FilterBar({ filters }: FilterBarProps) {
  return (
    <div
      className="flex items-center gap-4 px-10 flex-shrink-0 bg-white border-b border-borda-suave"
      style={{
        minHeight: 'var(--filterbar-height)',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      {/* Filtros label + ícone */}
      <div className="flex items-center gap-2 mr-2 text-verde-raiz">
        <SlidersHorizontal size={14} strokeWidth={2} />
        <span className="text-xs font-bold uppercase tracking-wider font-sans">
          Filtros:
        </span>
      </div>

      {/* Selects de filtros */}
      <div className="flex items-center gap-3">
        {filters.map((f) => (
          <div key={f.id} className="relative">
            <select
              value={f.value}
              onChange={(e) => f.onChange(e.target.value)}
              className="appearance-none pr-8 pl-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer focus:outline-none transition-all font-sans bg-white text-verde-carbon border-[1.5px] border-borda-suave focus:border-verde-raiz"
              style={{ minWidth: '100px' }}
            >
              <option value="">{f.label}</option>
              {f.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={13}
              strokeWidth={2}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-cinza-solo"
            />
          </div>
        ))}

        {/* Período: Últimos 30 dias */}
        <div className="relative">
          <div
            className="flex items-center gap-2 pr-4 pl-3 py-1.5 rounded-lg text-xs font-semibold border border-borda-suave font-sans cursor-pointer hover:bg-bege-terra transition-colors text-verde-carbon bg-white"
          >
            <Calendar size={13} strokeWidth={2} className="text-cinza-solo" />
            <span>Últimos 30 dias</span>
          </div>
        </div>
      </div>
    </div>
  )
}
