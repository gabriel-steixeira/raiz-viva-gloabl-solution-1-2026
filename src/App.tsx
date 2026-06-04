import { Routes, Route, Navigate } from 'react-router-dom'
import CadastroPage from '@/pages/CadastroPage'
import MapaPage from '@/pages/MapaPage'
import DetalhePage from '@/pages/DetalhePage'
import DashboardPage from '@/pages/DashboardPage'
import ImpactoPage from '@/pages/ImpactoPage'
import CarbonoPage from '@/pages/CarbonoPage'

/**
 * App — Roteamento principal
 * / → /cadastro (tela inicial no deploy)
 * /cadastro → Tela 1: Cadastro
 * /mapa → Tela 2: Mapa de Risco
 * /mapa/:regiao → Tela 3: Detalhe da Comunidade
 * /dashboard → Tela 6: Dashboard Operacional
 * /impacto → Tela 7: Impacto Social
 * /carbono → Tela 8: Carbono Solidário
 * * → /cadastro (fallback)
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" replace />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/mapa" element={<MapaPage />} />
      <Route path="/mapa/:regiao" element={<DetalhePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/impacto" element={<ImpactoPage />} />
      <Route path="/carbono" element={<CarbonoPage />} />
      <Route path="*" element={<Navigate to="/cadastro" replace />} />
    </Routes>
  )
}
