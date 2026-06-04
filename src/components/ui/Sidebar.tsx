import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  MapPin,
  Bell,
  BarChart2,
  Users,
  TreePine,
  HelpCircle,
} from 'lucide-react'
import Logo from '@/components/ui/Logo'

export interface SidebarProps {
  userName?: string
  userProfile?: string
}

const navItems = [
  { to: '/mapa',      icon: MapPin,    label: 'Mapa' },
  { to: '/alertas',   icon: Bell,      label: 'Alertas' },
  { to: '/dashboard', icon: BarChart2, label: 'Dashboard' },
  { to: '/impacto',   icon: Users,     label: 'Impacto Social' },
  { to: '/carbono',   icon: TreePine,  label: 'Carbono Solidário' },
]

/**
 * Sidebar — Navegação lateral autenticada
 * Fiel ao Figma: fundo #1B2A22, logo no topo, avatar + nome/perfil,
 * nav com active state borda esquerda verde-claro, footer com suporte.
 */
export default function Sidebar({ userName = 'Usuário', userProfile = 'Agricultor' }: SidebarProps) {
  return (
    <aside
      className="flex flex-col flex-shrink-0"
      style={{ width: '280px', minHeight: '100vh', backgroundColor: '#1B2A22' }}
    >
      {/* Logo */}
      <div
        className="px-6 py-4 flex items-center"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', minHeight: '70px' }}
      >
        <Logo variant="light" height={40} />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 pt-2 flex flex-col gap-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'border-r-[3px]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: 'rgba(149,213,178,0.1)',
                    color: '#FFFFFF',
                    borderRight: '4px solid #92F2B8',
                  }
                : {}
            }
          >
            <Icon size={18} strokeWidth={1.5} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Avatar + User */}
      <div
        className="flex items-center gap-3 px-6 py-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: '#2D6A4F', color: '#FAFAF7' }}
        >
          {userName.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-white truncate">{userName}</span>
          <span className="text-xs" style={{ color: '#95D5B2' }}>{userProfile}</span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-6 py-3 flex items-center gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <HelpCircle size={13} strokeWidth={1.5} style={{ color: '#95D5B2' }} />
        <span className="text-xs" style={{ color: '#95D5B2' }}>Suporte · v1.0.0</span>
      </div>
    </aside>
  )
}
