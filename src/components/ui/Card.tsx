import React from 'react'

/**
 * Raiz Viva — Componente: Card
 *
 * Variantes:
 *  - default:     bg branco-campo, borda suave, sombra card
 *  - verde-suave: bg surface-verde-suave, sem borda explícita
 *  - hero:        bg verde-profundo, texto branco (heroes escuros)
 *  - outline:     bg transparent, borda borda-suave
 *
 * Border-radius: rounded-card (12px) | Padding: p-5 padrão
 */
export interface CardProps {
  variant?: 'default' | 'verde-suave' | 'hero' | 'outline'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

const variantClasses: Record<string, string> = {
  default:
    'bg-branco-campo border border-borda-suave shadow-card',
  'verde-suave':
    'bg-surface-verde-suave border border-[rgba(191,201,193,0.2)]',
  hero:
    'bg-verde-profundo text-white',
  outline:
    'bg-transparent border border-borda-suave',
}

const paddingClasses: Record<string, string> = {
  none: '',
  sm:   'p-4',
  md:   'p-5',
  lg:   'p-8',
}

export default function Card({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={[
        'rounded-card',
        variantClasses[variant],
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
