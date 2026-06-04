import React from 'react'

/**
 * Raiz Viva — Componente: BenefitItem
 *
 * Exibe um benefício na coluna esquerda da Tela de Cadastro.
 * Composto por ícone (emoji ou ReactNode), título e descrição.
 * Reutilizável em banners e seções de marketing.
 */
export interface BenefitItemProps {
  icon: React.ReactNode
  title: string
  description?: string
}

export default function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-body-s font-semibold text-white">{title}</p>
        {description && (
          <p className="text-caption text-verde-menta mt-0.5">{description}</p>
        )}
      </div>
    </div>
  )
}
