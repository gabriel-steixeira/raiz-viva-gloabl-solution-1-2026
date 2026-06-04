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
 * Fiel ao Figma: ícone de filtro, rótulos compactos integrados e calendário "Últimos 30 dias".
 */
export default function FilterBar({ filters }: FilterBarProps) {
  return (
    <div
      className="flex items-center gap-4 px-10 flex-shrink-0"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E0D5',
        minHeight: '56px',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      {/* Filtros label + ícone */}
      <div className="flex items-center gap-2 mr-2" style={{ color: '#52735F' }}>
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
              className="appearance-none pr-8 pl-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer focus:outline-none transition-all font-sans"
              style={{
                border: '1.5px solid #E5E0D5',
                color: '#1B2A22',
                backgroundColor: '#FFFFFF',
                minWidth: '100px',
              }}
            >
              {/* O próprio select age como label quando sem seleção */}
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
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: '#6B7280' }}
            />
          </div>
        ))}

        {/* Período: Últimos 30 dias com calendário */}
        <div className="relative">
          <div
            className="flex items-center gap-2 pr-4 pl-3 py-1.5 rounded-lg text-xs font-semibold border font-sans cursor-pointer hover:bg-gray-50 transition-colors"
            style={{
              borderColor: '#E5E0D5',
              backgroundColor: '#FFFFFF',
              color: '#1B2A22',
            }}
          >
            <Calendar size={13} strokeWidth={2} style={{ color: '#6B7280' }} />
            <span>Últimos 30 dias</span>
          </div>
        </div>
      </div>
    </div>
  )
}
