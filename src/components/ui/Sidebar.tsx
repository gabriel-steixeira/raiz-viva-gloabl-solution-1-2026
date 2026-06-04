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
import { Logo } from '@/components/ui/Logo'

export interface SidebarProps {
  userName?: string
  userProfile?: string
}

const navItems = [
  { to: '/mapa',    icon: MapPin,   label: 'Mapa' },
  { to: '/alertas', icon: Bell,     label: 'Alertas' },
  { to: '/dashboard', icon: BarChart2, label: 'Dashboard' },
  { to: '/impacto', icon: Users,    label: 'Impacto Social' },
  { to: '/carbono', icon: TreePine, label: 'Carbono Solidário' },
]

/**
 * Sidebar — Navegação lateral autenticada
 * Reutilizável em: Tela 2 (Mapa), Tela 3, Tela 4, Tela 5, Tela 6, Tela 7, Tela 8
 */
export default function Sidebar({ userName = 'Usuário', userProfile = 'Agricultor' }: SidebarProps) {
  return (
    <aside
      className="flex flex-col w-[280px] min-h-screen flex-shrink-0"
      style={{ backgroundColor: '#1B2A22' }}
    >
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <Logo variant="light" height={36} />
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: '#2D6A4F', color: '#FAFAF7' }}
        >
          {userName.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-body-s font-semibold text-white truncate">{userName}</span>
          <span className="text-caption" style={{ color: '#95D5B2' }}>{userProfile}</span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-s font-medium transition-colors ${
                isActive
                  ? 'text-white border-l-[3px] border-verde-claro pl-[9px]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
            style={({ isActive }) => isActive ? { backgroundColor: '#2D6A4F' } : {}}
          >
            <Icon size={18} strokeWidth={1.5} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10 flex items-center gap-2">
        <HelpCircle size={14} strokeWidth={1.5} style={{ color: '#95D5B2' }} />
        <span className="text-caption" style={{ color: '#95D5B2' }}>Suporte · v1.0.0</span>
      </div>
    </aside>
  )
}
