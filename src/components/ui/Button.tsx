import React from 'react'

/**
 * Raiz Viva — Componente: Button
 *
 * Variantes:
 *  - primary:   bg verde-raiz, texto branco, hover #1B4D35
 *  - secondary: transparente, borda verde-raiz, hover bege-terra
 *  - ghost:     sem borda/bg, texto verde-raiz, hover bg surface-verde-suave
 *  - danger:    bg terracota para ações críticas
 *
 * Border-radius: rounded-btn (24px) | Padding: 12px 24px | Font: text-btn
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-verde-raiz text-branco-campo border border-transparent hover:bg-[#1B4D35] active:bg-[#163D29]',
  secondary:
    'bg-transparent text-verde-raiz border border-verde-raiz hover:bg-bege-terra active:bg-borda-suave',
  ghost:
    'bg-transparent text-verde-raiz border border-transparent hover:bg-surface-verde-suave active:bg-surface-verde-claro',
  danger:
    'bg-terracota text-branco-campo border border-transparent hover:bg-[#A03A0C] active:bg-[#8A3209]',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-btn',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2 rounded-btn font-semibold',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-verde-raiz focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        leftIcon
      )}
      {children}
    </button>
  )
}
