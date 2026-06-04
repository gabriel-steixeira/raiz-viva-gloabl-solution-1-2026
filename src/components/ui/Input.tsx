import React from 'react'

/**
 * Raiz Viva — Componente: Input
 *
 * Border: 1.5px solid #E5E0D5 | Border-radius: 8px | Padding: 10px 14px
 * Focus: border-color #2D6A4F | Background: #FAFAF7
 * Label: Inter SemiBold 12px, #6B7280, uppercase
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export default function Input({
  label,
  error,
  hint,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-caption font-semibold text-cinza-solo uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[
          'w-full rounded-input px-3.5 py-2.5 bg-branco-campo',
          'border-[1.5px] text-body-s text-carbon placeholder:text-cinza-solo',
          'transition-colors duration-150',
          'focus:outline-none focus:border-verde-raiz',
          error
            ? 'border-terracota focus:border-terracota'
            : 'border-borda-suave',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
      {error && (
        <span className="text-caption text-terracota">{error}</span>
      )}
      {hint && !error && (
        <span className="text-caption text-cinza-solo">{hint}</span>
      )}
    </div>
  )
}
