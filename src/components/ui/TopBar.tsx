import React from 'react'
import { Clock } from 'lucide-react'

export interface TopBarAction {
  label: string
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
  onClick?: () => void
}

export interface TopBarProps {
  title: string
  badge?: string
  actions?: TopBarAction[]
}

/**
 * TopBar — Barra de título da página autenticada
 * Fiel ao Figma: fundo branco, title h1 bold, badge com ícone de clock,
 * botão "Exportar Relatório" à direita com borda verde e texto verde.
 */
export default function TopBar({ title, badge, actions = [] }: TopBarProps) {
  return (
    <header
      className="flex items-center justify-between px-10 py-4 flex-shrink-0"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid rgba(191,200,193,0.2)',
        minHeight: '72px',
      }}
    >
      {/* Left: title + badge */}
      <div className="flex items-center gap-3">
        <h1
          className="text-xl font-bold leading-none"
          style={{ color: '#101F17' }}
        >
          {title}
        </h1>
        {badge && (
          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: '#F0F7F4',
              color: '#52735F',
              border: '1px solid rgba(149,213,178,0.4)',
            }}
          >
            <Clock size={11} strokeWidth={1.5} />
            {badge}
          </span>
        )}
      </div>

      {/* Right: actions */}
      {actions.length > 0 && (
        <div className="flex items-center gap-2">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className="flex items-center gap-2 px-4 py-2 rounded-3xl text-sm font-medium transition-colors"
              style={{
                backgroundColor: action.variant === 'primary' ? '#0F5238' : '#FFFFFF',
                color: action.variant === 'primary' ? '#FFFFFF' : '#0F5238',
                border: '1px solid #0F5238',
              }}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
