import React from 'react'

/**
 * Raiz Viva — Componente: RadioGroup
 *
 * Grupo de opções rádio com label e valor.
 * Utilizado no cadastro: Tipo de conta e Canal preferido.
 */
export interface RadioOption {
  value: string
  label: string
  icon?: React.ReactNode
}

export interface RadioGroupProps {
  label?: string
  name: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  inline?: boolean
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  inline = true,
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-caption font-semibold text-cinza-solo uppercase tracking-wide">
          {label}
        </span>
      )}
      <div className={`flex gap-4 ${inline ? 'flex-row flex-wrap' : 'flex-col'}`}>
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="accent-verde-raiz w-4 h-4"
            />
            {opt.icon && (
              <span className="text-cinza-solo group-has-[:checked]:text-verde-raiz">
                {opt.icon}
              </span>
            )}
            <span className="text-body-s text-carbon">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
