import { Routes, Route, Navigate } from 'react-router-dom'
import CadastroPage from '@/pages/CadastroPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" replace />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  )
}
