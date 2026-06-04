import { Routes, Route, Navigate } from 'react-router-dom'
import CadastroPage from '@/pages/CadastroPage'
import MapaPage from '@/pages/MapaPage'
import DetalheRegiaoPage from '@/pages/DetalheRegiaoPage'
import RecomendacoesPage from '@/pages/RecomendacoesPage'
import AlertasPage from '@/pages/AlertasPage'

/**
 * App — Roteamento principal
 * / → /cadastro (tela inicial no deploy)
 * /cadastro → Tela 1: Cadastro
 * /mapa → Tela 2: Mapa de Risco
 * /mapa/:regiaoId → Tela 3: Detalhe da Região
 * /mapa/:regiaoId/recomendacoes → Tela 4: Recomendações Inteligentes
 * * → /cadastro (fallback)
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" replace />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/mapa" element={<MapaPage />} />
      <Route path="/mapa/:regiaoId" element={<DetalheRegiaoPage />} />
      <Route path="/mapa/:regiaoId/recomendacoes" element={<RecomendacoesPage />} />
      <Route path="/alertas" element={<AlertasPage />} />
      <Route path="*" element={<Navigate to="/cadastro" replace />} />
    </Routes>
  )
}


