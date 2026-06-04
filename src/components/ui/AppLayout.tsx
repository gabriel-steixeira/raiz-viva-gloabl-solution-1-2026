import React from 'react'
import Sidebar, { SidebarProps } from './Sidebar'

export interface AppLayoutProps extends SidebarProps {
  children: React.ReactNode
}

/**
 * AppLayout — Layout base para todas as telas autenticadas
 * Compõe: Sidebar (280px fixo, sticky) + Content Area (scrollável)
 * TopBar dentro de children fica sticky no topo da content area.
 * Reutilizável em: Tela 2, 3, 4, 5, 6, 7, 8
 */
export default function AppLayout({ children, userName, userProfile }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-surface-verde-pale">
      <Sidebar userName={userName} userProfile={userProfile} />
      <main className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
