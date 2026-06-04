import React from 'react'

export type IssRiskLevel = 'baixo' | 'moderado' | 'alto' | 'critico'

/**
 * Raiz Viva — Componente: Badge
 *
 * Variantes de risco ISS:
 *  baixo:    bg #D8F3DC  | texto #2D6A4F
 *  moderado: bg #FFF3CD  | texto #856404
 *  alto:     bg #FFE0D5  | texto #C1440E
 *  critico:  bg #C1440E  | texto #FAFAF7
 *
 * Border-radius: 4px
 */
export interface BadgeProps {
  risk?: IssRiskLevel
  label: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const riskClasses: Record<IssRiskLevel, string> = {
  baixo:    'bg-[#D8F3DC] text-verde-raiz',
  moderado: 'bg-[#FFF3CD] text-[#856404]',
  alto:     'bg-[#FFE0D5] text-terracota',
  critico:  'bg-terracota text-branco-campo',
}

const sizeClasses = {
  sm: 'text-[10px] px-1.5 py-0.5',
  md: 'text-caption px-2 py-1',
  lg: 'text-body-s px-3 py-1.5',
}

export default function Badge({
  risk = 'baixo',
  label,
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-badge font-semibold',
        riskClasses[risk],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  )
}
