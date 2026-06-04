import React, { useState } from 'react'
import MapaRisco from './components/MapaRisco.jsx'
import PainelISS from './components/PainelISS.jsx'
import Alertas from './components/Alertas.jsx'
import './App.css'

const TABS = [
  { id: 'mapa', label: '🗺️ Mapa de Risco' },
  { id: 'iss', label: '📊 Índice ISS' },
  { id: 'alertas', label: '🔔 Alertas' },
]

export default function App() {
  const [tab, setTab] = useState('mapa')

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <span className="logo-text">🌱 Raiz Viva</span>
          <p className="tagline">Transformando dados de satélite em proteção para quem vive da terra</p>
        </div>
      </header>

      <nav className="tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab-btn ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className="main">
        {tab === 'mapa' && <MapaRisco />}
        {tab === 'iss' && <PainelISS />}
        {tab === 'alertas' && <Alertas />}
      </main>

      <footer className="footer">
        <p>Raiz Viva · FIAP Global Solution 2026 · Dados: NASA SMAP, MODIS, GPM IMERG, Sentinel-2</p>
      </footer>
    </div>
  )
}
