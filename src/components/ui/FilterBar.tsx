import React from 'react'

export interface FilterOption {
  value: string
  label: string
}

export interface FilterItem {
  id: string
  label: string
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
}

export interface FilterBarProps {
  filters: FilterItem[]
  className?: string
}

/**
 * FilterBar — Barra de filtros horizontais reutilizável
 * Reutilizável em: Tela 2 (Mapa), Tela 5 (Alertas), Tela 6 (Dashboard)
 */
export default function FilterBar({ filters, className = '' }: FilterBarProps) {
  return (
    <div
      className={`flex items-center gap-3 px-6 py-3 border-b flex-wrap flex-shrink-0 ${className}`}
      style={{ borderColor: '#E5E0D5', backgroundColor: '#FAFAF7' }}
    >
      {filters.map((filter) => (
        <div key={filter.id} className="flex items-center gap-2">
          <label
            htmlFor={filter.id}
            className="text-caption font-semibold uppercase tracking-wide"
            style={{ color: '#6B7280' }}
          >
            {filter.label}
          </label>
          <select
            id={filter.id}
            value={filter.value}
            onChange={(e) => filter.onChange(e.target.value)}
            className="text-body-s rounded-lg px-3 py-1.5 border transition-colors focus:outline-none focus:ring-1"
            style={{
              borderColor: '#E5E0D5',
              backgroundColor: '#FAFAF7',
              color: '#1B2A22',
            }}
          >
            <option value="">Todos</option>
            {filter.options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}
