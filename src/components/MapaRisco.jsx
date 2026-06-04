import React from 'react'
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Dados simulados de regiões monitoradas (MVP)
const REGIOES = [
  { id: 1, nome: 'Sertão Nordestino', lat: -7.2, lng: -36.8, iss: 28, risco: 'alto' },
  { id: 2, nome: 'Vale do São Francisco', lat: -9.4, lng: -40.5, iss: 45, risco: 'moderado' },
  { id: 3, nome: 'Cerrado Baiano', lat: -12.1, lng: -44.9, iss: 72, risco: 'baixo' },
  { id: 4, nome: 'Mata Atlântica Sul', lat: -26.0, lng: -51.0, iss: 85, risco: 'baixo' },
  { id: 5, nome: 'Pantanal MT', lat: -16.5, lng: -56.0, iss: 35, risco: 'alto' },
]

const COR_RISCO = {
  alto: '#E63946',
  moderado: '#F4A261',
  baixo: '#40916C',
}

const LABEL_RISCO = {
  alto: '🔴 Risco Alto/Crítico',
  moderado: '🟡 Risco Moderado',
  baixo: '🟢 Baixo Risco',
}

export default function MapaRisco() {
  return (
    <div>
      <h2 style={{ marginBottom: 16, color: 'var(--verde-solo)' }}>Mapa Nacional de Risco Climático</h2>
      <p style={{ marginBottom: 16, fontSize: '0.9rem', color: '#888' }}>
        Dados simulados para o MVP · Fonte real: NASA SMAP + MODIS + GPM IMERG
      </p>
      <MapContainer center={[-14.0, -48.0]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {REGIOES.map(r => (
          <Circle
            key={r.id}
            center={[r.lat, r.lng]}
            radius={150000}
            pathOptions={{ color: COR_RISCO[r.risco], fillColor: COR_RISCO[r.risco], fillOpacity: 0.45 }}
          >
            <Popup>
              <strong>{r.nome}</strong><br />
              ISS: <strong>{r.iss}/100</strong><br />
              {LABEL_RISCO[r.risco]}
            </Popup>
          </Circle>
        ))}
      </MapContainer>
      <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
        {Object.entries(LABEL_RISCO).map(([k, v]) => (
          <span key={k} style={{ fontSize: '0.85rem' }}>{v}</span>
        ))}
      </div>
    </div>
  )
}
