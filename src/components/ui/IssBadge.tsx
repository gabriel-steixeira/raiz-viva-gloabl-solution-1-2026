import React from 'react'

export type IssLevel = 'baixo' | 'moderado' | 'alto' | 'critico'

export interface IssBadgeProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function getLevel(value: number): IssLevel {
  if (value >= 70) return 'baixo'
  if (value >= 40) return 'moderado'
  if (value >= 20) return 'alto'
  return 'critico'
}

const levelConfig: Record<IssLevel, { bg: string; text: string; label: string }> = {
  baixo:    { bg: '#D8F3DC', text: '#2D6A4F', label: 'Baixo Risco' },
  moderado: { bg: '#FFF3CD', text: '#856404', label: 'Moderado' },
  alto:     { bg: '#FFE0D5', text: '#C1440E', label: 'Risco ALTO' },
  critico:  { bg: '#C1440E', text: '#FAFAF7', label: 'CRÍTICO' },
}

const sizeClasses: Record<string, string> = {
  sm: 'text-[11px] px-2 py-0.5',
  md: 'text-body-s px-3 py-1',
  lg: 'text-body-l px-4 py-1.5 font-bold',
}

/**
 * IssBadge — Badge de risco do Índice de Sobrevivência do Solo
 * Reutilizável em: Mapa, Detalhe da Comunidade, Dashboard, Alertas
 */
export default function IssBadge({ value, size = 'md', className = '' }: IssBadgeProps) {
  const level = getLevel(value)
  const { bg, text, label } = levelConfig[level]

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-[4px] whitespace-nowrap ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      ISS {value} — {label}
    </span>
  )
}

export { getLevel, levelConfig }
