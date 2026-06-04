import { Routes, Route, Navigate } from 'react-router-dom'
import CadastroPage from '@/pages/CadastroPage'
import MapaPage from '@/pages/MapaPage'

/**
 * App — Roteamento principal
 * / → /cadastro (tela inicial no deploy)
 * /cadastro → Tela 1: Cadastro
 * /mapa → Tela 2: Mapa de Risco
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" replace />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/mapa" element={<MapaPage />} />
      {/* Fallback: qualquer rota desconhecida vai para cadastro */}
      <Route path="*" element={<Navigate to="/cadastro" replace />} />
    </Routes>
  )
}
