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
  { to: '/dashboard', icon: BarChart2, label: 'Dashboard' },
  { to: '/mapa',      icon: MapPin,    label: 'Mapa Nacional de Risco' },
  { to: '/alertas',   icon: Bell,      label: 'Central de Alertas' },
  { to: '/impacto',   icon: Users,     label: 'Impacto Social' },
  { to: '/carbono',   icon: TreePine,  label: 'Carbono Solidário' },
]

/**
 * Sidebar — Navegação lateral autenticada
 * Fiel ao Figma: fundo #1B2A22, logo no topo, avatar + nome/perfil,
 * nav com active state borda esquerda verde-claro (#52B788) e fundo #2D6A4F.
 */
export default function Sidebar({
  userName = 'Agronomist User',
  userProfile = 'Profile & Settings',
}: SidebarProps) {
  return (
    <aside
      className="flex flex-col flex-shrink-0"
      style={{ width: '280px', minHeight: '100vh', backgroundColor: '#1B2A22' }}
    >
      {/* Logo */}
      <div
        className="px-6 py-4 flex items-center"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', minHeight: '70px', backgroundColor: '#FFFFFF' }}
      >
        <Logo variant="dark" height={40} />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 pt-4 flex flex-col gap-1.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'border-l-[4px]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#2D6A4F',
                    color: '#FFFFFF',
                    borderColor: '#52B788',
                    paddingLeft: '12px',
                  }
                : {}
            }
          >
            <Icon size={18} strokeWidth={1.5} />
            <span className="font-sans">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Avatar + User */}
      <div
        className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: '#2D6A4F', color: '#FAFAF7' }}
        >
          {userName.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-white truncate font-sans">{userName}</span>
          <span className="text-xs font-sans" style={{ color: '#95D5B2' }}>{userProfile}</span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-6 py-3 flex items-center gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <HelpCircle size={13} strokeWidth={1.5} style={{ color: '#95D5B2' }} />
        <span className="text-xs font-sans" style={{ color: '#95D5B2' }}>Suporte · v1.0.0</span>
      </div>
    </aside>
  )
}
