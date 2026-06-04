import React from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * Raiz Viva — Componente: Select
 *
 * Mesma especificação do Input, com ícone ChevronDown
 */
export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
  placeholder?: string
  error?: string
}

export default function Select({
  label,
  options,
  placeholder,
  error,
  id,
  className = '',
  ...props
}: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={selectId}
          className="text-caption font-semibold text-cinza-solo uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={[
            'w-full appearance-none rounded-input px-3.5 py-2.5 pr-10',
            'bg-branco-campo border-[1.5px] text-body-s text-carbon',
            'transition-colors duration-150',
            'focus:outline-none focus:border-verde-raiz',
            error ? 'border-terracota' : 'border-borda-suave',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 text-cinza-solo pointer-events-none"
          size={16}
          strokeWidth={1.5}
        />
      </div>
      {error && <span className="text-caption text-terracota">{error}</span>}
    </div>
  )
}
