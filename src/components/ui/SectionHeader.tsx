import React from 'react'

/**
 * Raiz Viva — Componente: SectionHeader
 *
 * Padrão recorrente em CarbonoPage, ImpactoPage, DetalheRegiaoPage:
 * título (h2) + subtítulo opcional + divisor inferior opcional
 *
 * Uso:
 *  <SectionHeader title="Critérios de Elegibilidade" subtitle="Áreas elegíveis para carbono." />
 *  <SectionHeader title="Como funciona" centered divider />
 */
export interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  divider?: boolean
  className?: string
  titleClassName?: string
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  divider = false,
  className = '',
  titleClassName = '',
}: SectionHeaderProps) {
  return (
    <div
      className={[
        'flex flex-col gap-1',
        centered ? 'items-center text-center' : '',
        divider ? 'pb-4 border-b border-[rgba(191,201,193,0.2)]' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h2
        className={[
          'text-h2 font-bold text-text-forte',
          titleClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ letterSpacing: '-0.3px' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-s text-text-medio">{subtitle}</p>
      )}
    </div>
  )
}
