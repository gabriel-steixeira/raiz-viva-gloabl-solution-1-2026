import { Routes, Route, Navigate } from 'react-router-dom'
import CadastroPage from '@/pages/CadastroPage'
import MapaPage from '@/pages/MapaPage'
import DetalheRegiaoPage from '@/pages/DetalheRegiaoPage'

/**
 * App — Roteamento principal
 * / → /cadastro (tela inicial no deploy)
 * /cadastro → Tela 1: Cadastro
 * /mapa → Tela 2: Mapa de Risco
 * /mapa/:regiaoId → Tela 3: Detalhe da Região
 * * → /cadastro (fallback)
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" replace />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/mapa" element={<MapaPage />} />
      <Route path="/mapa/:regiaoId" element={<DetalheRegiaoPage />} />
      <Route path="*" element={<Navigate to="/cadastro" replace />} />
    </Routes>
  )
}

