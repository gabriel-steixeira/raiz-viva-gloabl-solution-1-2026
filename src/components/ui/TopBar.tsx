import React from 'react'
import { Bell, Settings, HelpCircle, Search, Clock } from 'lucide-react'

export interface TopBarAction {
  label: string
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
  onClick?: () => void
}

export interface TopBarProps {
  title?: string
  badge?: string
  actions?: TopBarAction[]
  showSearch?: boolean
}

/**
 * TopBar — Barra superior global de utilidades
 * Fiel ao Figma: fundo branco, busca arredondada, notificações, configurações e ajuda.
 */
export default function TopBar({
  title,
  badge,
  actions = [],
  showSearch = true,
}: TopBarProps) {
  return (
    <header
      className="flex items-center justify-between px-10 py-4 flex-shrink-0"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E0D5',
        minHeight: '72px',
      }}
    >
      {/* Left: title + badge */}
      <div className="flex items-center gap-3">
        {title && (
          <h1
            className="text-xl font-bold leading-none font-sans"
            style={{ color: '#1B2A22' }}
          >
            {title}
          </h1>
        )}
        {badge && title && (
          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium font-sans"
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

      {/* Right side: search, custom actions, utility icons */}
      <div className="flex items-center gap-6 ml-auto">
        {showSearch && (
          <div className="relative" style={{ width: '280px' }}>
            <Search
              size={16}
              strokeWidth={1.8}
              className="absolute left-3.5 top-1/2 -translate-y-1/2"
              style={{ color: '#6B7280' }}
            />
            <input
              type="text"
              placeholder="Buscar alertas..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full border focus:outline-none focus:border-[#2D6A4F] transition-all font-sans"
              style={{
                backgroundColor: '#F3F4F6',
                borderColor: '#E5E7EB',
                color: '#1B2A22',
              }}
              aria-label="Buscar alertas"
            />
          </div>
        )}

        {/* Custom Actions if any */}
        {actions.length > 0 && (
          <div className="flex items-center gap-2">
            {actions.map((action, i) => (
              <button
                key={i}
                onClick={action.onClick}
                className="flex items-center gap-2 px-4 py-2 rounded-3xl text-sm font-medium transition-colors font-sans"
                style={{
                  backgroundColor: action.variant === 'primary' ? '#2D6A4F' : '#FFFFFF',
                  color: action.variant === 'primary' ? '#FFFFFF' : '#2D6A4F',
                  border: '1.5px solid #2D6A4F',
                }}
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
        )}

        {/* Utility icons (Bell, Settings, HelpCircle) */}
        <div
          className="flex items-center gap-2 border-l pl-4"
          style={{ borderColor: '#E5E0D5' }}
        >
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: '#1B2A22' }}
            aria-label="Notificações"
          >
            <Bell size={18} strokeWidth={1.8} />
            <span
              className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: '#C1440E', border: '1.5px solid #FFFFFF' }}
            />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: '#1B2A22' }}
            aria-label="Configurações"
          >
            <Settings size={18} strokeWidth={1.8} />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: '#1B2A22' }}
            aria-label="Ajuda"
          >
            <HelpCircle size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  )
}
