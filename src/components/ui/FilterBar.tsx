import React from 'react'
import { ChevronDown } from 'lucide-react'

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
 * FilterBar — Barra de filtros fiel ao Figma
 * Fundo branco, label em maiúsculas, selects com borda sutil,
 * shadow suave na borda inferior.
 */
export default function FilterBar({ filters }: FilterBarProps) {
  return (
    <div
      className="flex items-center gap-4 px-10 flex-shrink-0"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid rgba(191,200,193,0.2)',
        minHeight: '74px',
        boxShadow: '0 2px 4px -1px rgba(15,31,23,0.02), 0 4px 6px -1px rgba(15,31,23,0.04)',
      }}
    >
      {filters.map((f) => (
        <div key={f.id} className="flex items-center gap-2">
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: '#52735F' }}
          >
            {f.label}
          </span>
          <div className="relative">
            <select
              value={f.value}
              onChange={(e) => f.onChange(e.target.value)}
              className="appearance-none pr-8 pl-3 py-2 rounded-lg text-sm font-medium cursor-pointer focus:outline-none"
              style={{
                border: '1px solid rgba(191,200,193,0.5)',
                color: '#101F17',
                backgroundColor: '#FFFFFF',
                minWidth: '140px',
              }}
            >
              <option value="">Todos</option>
              {f.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: '#52735F' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
