import React from 'react'

export interface TopBarAction {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
}

export interface TopBarProps {
  title: string
  subtitle?: string
  actions?: TopBarAction[]
  badge?: string
}

/**
 * TopBar — Barra superior das telas autenticadas
 * Reutilizável em: Tela 2, Tela 3, Tela 4, Tela 5, Tela 6, Tela 7, Tela 8
 */
export default function TopBar({ title, subtitle, actions = [], badge }: TopBarProps) {
  return (
    <div
      className="flex items-center justify-between h-14 px-6 border-b flex-shrink-0"
      style={{ borderColor: '#E5E0D5', backgroundColor: '#FAFAF7' }}
    >
      <div className="flex items-center gap-3">
        <h1 className="text-h3 font-bold" style={{ color: '#1B2A22' }}>{title}</h1>
        {subtitle && (
          <span className="text-caption" style={{ color: '#6B7280' }}>{subtitle}</span>
        )}
        {badge && (
          <span
            className="text-caption px-2 py-0.5 rounded-[4px]"
            style={{ backgroundColor: '#F4ECD8', color: '#6B7280' }}
          >
            {badge}
          </span>
        )}
      </div>

      {actions.length > 0 && (
        <div className="flex items-center gap-2">
          {actions.map((action, idx) => (
            <button
              key={idx}
              onClick={action.onClick}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-[24px] text-button font-semibold transition-colors"
              style={
                action.variant === 'primary'
                  ? { backgroundColor: '#2D6A4F', color: '#FAFAF7' }
                  : { border: '1.5px solid #2D6A4F', color: '#2D6A4F', backgroundColor: 'transparent' }
              }
            >
              {action.icon && <span>{action.icon}</span>}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
