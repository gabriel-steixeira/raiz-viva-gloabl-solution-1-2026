import { Routes, Route, Navigate } from 'react-router-dom'
import CadastroPage from '@/pages/CadastroPage'
import MapaPage from '@/pages/MapaPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" replace />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/mapa" element={<MapaPage />} />
    </Routes>
  )
}
