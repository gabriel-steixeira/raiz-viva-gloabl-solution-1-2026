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
 * Design tokens: bg-white border-borda-suave | busca arredondada | notificações
 */
export default function TopBar({
  title,
  badge,
  actions = [],
  showSearch = true,
}: TopBarProps) {
  return (
    <header
      className="flex items-center justify-between px-10 py-4 flex-shrink-0 sticky top-0 z-10 bg-white border-b border-borda-suave"
      style={{ minHeight: 'var(--topbar-height)' }}
    >
      {/* Left: title + badge */}
      <div className="flex items-center gap-3">
        {title && (
          <h1
            className="text-xl font-bold leading-none font-sans text-verde-carbon"
          >
            {title}
          </h1>
        )}
        {badge && title && (
          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-micro font-medium font-sans"
            style={{
              backgroundColor: 'var(--surface-verde-suave)',
              color: 'var(--verde-raiz)',
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
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cinza-solo"
            />
            <input
              type="text"
              placeholder="Buscar alertas..."
              className="w-full pl-10 pr-4 py-2 text-body-s rounded-full border border-borda-suave bg-[#F3F4F6] text-verde-carbon focus:outline-none focus:border-verde-raiz transition-all font-sans"
              aria-label="Buscar alertas"
            />
          </div>
        )}

        {/* Custom Actions */}
        {actions.length > 0 && (
          <div className="flex items-center gap-2">
            {actions.map((action, i) => (
              <button
                key={i}
                onClick={action.onClick}
                className={[
                  'flex items-center gap-2 px-4 py-2 rounded-btn text-body-s font-medium transition-colors font-sans',
                  action.variant === 'primary'
                    ? 'bg-verde-raiz text-branco-campo border border-verde-raiz hover:bg-verde-carbon'
                    : 'bg-white text-verde-raiz border border-verde-raiz hover:bg-bege-terra',
                ].join(' ')}
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
        )}

        {/* Utility icons (Bell, Settings, HelpCircle) */}
        <div
          className="flex items-center gap-2 border-l border-borda-suave pl-4"
        >
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-verde-carbon"
            aria-label="Notificações"
          >
            <Bell size={18} strokeWidth={1.8} />
            <span
              className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-terracota"
              style={{ border: '1.5px solid #FFFFFF' }}
            />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-verde-carbon"
            aria-label="Configurações"
          >
            <Settings size={18} strokeWidth={1.8} />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-verde-carbon"
            aria-label="Ajuda"
          >
            <HelpCircle size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  )
}
