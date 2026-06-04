import React from 'react'

/**
 * Raiz Viva — Componente: Card
 *
 * Background: #FAFAF7 | Border: 1px solid #E5E0D5
 * Border-radius: 12px | Padding: 20px | Sombra: 0 2px 12px rgba(0,0,0,0.08)
 */
export interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: boolean
  border?: boolean
}

const paddingClasses = {
  none: '',
  sm:   'p-3',
  md:   'p-5',
  lg:   'p-8',
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = true,
  border = true,
}: CardProps) {
  return (
    <div
      className={[
        'bg-branco-campo rounded-card',
        border  ? 'border border-borda-suave' : '',
        shadow  ? 'shadow-card' : '',
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
