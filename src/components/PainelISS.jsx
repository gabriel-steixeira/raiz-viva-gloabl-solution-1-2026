import React from 'react'

const DADOS = [
  { regiao: 'Sertão Nordestino', iss: 28, umidade: 12, ndvi: -0.18, chuva: -45, temp: '+3.2°C' },
  { regiao: 'Vale do São Francisco', iss: 45, umidade: 34, ndvi: -0.08, chuva: -22, temp: '+1.8°C' },
  { regiao: 'Cerrado Baiano', iss: 72, umidade: 58, ndvi: +0.04, chuva: -5, temp: '+0.6°C' },
  { regiao: 'Mata Atlântica Sul', iss: 85, umidade: 74, ndvi: +0.12, chuva: +8, temp: '-0.2°C' },
  { regiao: 'Pantanal MT', iss: 35, umidade: 18, ndvi: -0.22, chuva: -38, temp: '+2.9°C' },
]

function corISS(iss) {
  if (iss >= 70) return { bg: '#d8f3dc', color: '#2D6A4F', label: 'Baixo' }
  if (iss >= 40) return { bg: '#fff3cd', color: '#b45309', label: 'Moderado' }
  return { bg: '#fde8ea', color: '#E63946', label: 'Alto/Crítico' }
}

export default function PainelISS() {
  return (
    <div>
      <h2 style={{ marginBottom: 16, color: 'var(--verde-solo)' }}>Índice de Sobrevivência do Solo (ISS)</h2>
      <p style={{ marginBottom: 20, fontSize: '0.9rem', color: '#888' }}>
        ISS = 100 − (w1·Du + w2·Dn + w3·Dc + w4·Dt) · Dados simulados para MVP
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {DADOS.map(d => {
          const c = corISS(d.iss)
          return (
            <div key={d.regiao} style={{
              background: 'white', borderRadius: 12, padding: '16px 20px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex',
              alignItems: 'center', gap: 20, flexWrap: 'wrap'
            }}>
              <div style={{
                background: c.bg, color: c.color, borderRadius: 8,
                padding: '8px 16px', fontWeight: 700, fontSize: '1.4rem', minWidth: 72, textAlign: 'center'
              }}>
                {d.iss}
              </div>
              <div style={{ flex: 1 }}>
                <strong>{d.regiao}</strong>
                <span style={{
                  marginLeft: 10, fontSize: '0.8rem', background: c.bg,
                  color: c.color, borderRadius: 4, padding: '2px 8px'
                }}>{c.label}</span>
              </div>
              <div style={{ display: 'flex', gap: 20, fontSize: '0.85rem', color: '#666', flexWrap: 'wrap' }}>
                <span>💧 Umidade: {d.umidade}%</span>
                <span>🌿 NDVI: {d.ndvi > 0 ? '+' : ''}{d.ndvi}</span>
                <span>🌧 Chuva: {d.chuva > 0 ? '+' : ''}{d.chuva}%</span>
                <span>🌡 LST: {d.temp}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
