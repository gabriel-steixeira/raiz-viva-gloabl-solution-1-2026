import React, { useState } from 'react'

const ALERTAS = [
  {
    id: 1, regiao: 'Sertão Nordestino', nivel: 'critico', data: '2026-06-03',
    titulo: 'ISS crítico — seca severa iminente',
    mensagem: 'O ISS atingiu 28/100. Umidade do solo 76% abaixo do normal. Recomendamos proteger reservas hídricas e acionar cooperativa imediatamente.',
    acoes: ['Proteger cisternas e açudes', 'Antecipar colheita de culturas em estágio final', 'Comunicar Defesa Civil se houver risco de deslocamento']
  },
  {
    id: 2, regiao: 'Pantanal MT', nivel: 'critico', data: '2026-06-02',
    titulo: 'Anomalia de temperatura crítica (+2.9°C)',
    mensagem: 'Temperatura de superfície 2.9°C acima da média histórica. NDVI em queda acentuada (-0.22). ISS: 35/100.',
    acoes: ['Aumentar frequência de monitoramento do gado', 'Verificar fontes de água alternativas', 'Aplicar cobertura de solo nas culturas mais sensíveis']
  },
  {
    id: 3, regiao: 'Vale do São Francisco', nivel: 'moderado', data: '2026-06-01',
    titulo: 'Déficit hídrico acumulado',
    mensagem: 'Déficit de chuva de 22% nos últimos 30 dias. ISS em 45 — risco moderado com tendência de queda.',
    acoes: ['Ajustar frequência de irrigação', 'Aplicar mulching para reduzir evapotranspiração', 'Verificar reservas hídricas']
  },
]

const COR = {
  critico: { bg: '#fde8ea', border: '#E63946', badge: '#E63946', icon: '🔴' },
  moderado: { bg: '#fff8ed', border: '#F4A261', badge: '#b45309', icon: '🟡' },
  baixo: { bg: '#d8f3dc', border: '#40916C', badge: '#2D6A4F', icon: '🟢' },
}

export default function Alertas() {
  const [aberto, setAberto] = useState(null)

  return (
    <div>
      <h2 style={{ marginBottom: 16, color: 'var(--verde-solo)' }}>Central de Alertas</h2>
      <p style={{ marginBottom: 20, fontSize: '0.9rem', color: '#888' }}>
        Últimos 30 dias · Alertas gerados pelo motor ISS · Canal real: SMS / WhatsApp
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {ALERTAS.map(a => {
          const c = COR[a.nivel]
          const open = aberto === a.id
          return (
            <div key={a.id} style={{
              background: c.bg, border: `1.5px solid ${c.border}`,
              borderRadius: 12, overflow: 'hidden'
            }}>
              <button
                onClick={() => setAberto(open ? null : a.id)}
                style={{
                  width: '100%', background: 'transparent', border: 'none',
                  padding: '14px 20px', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', gap: 12, textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: c.badge }}>{a.titulo}</strong>
                  <div style={{ fontSize: '0.8rem', color: '#888', marginTop: 2 }}>
                    {a.regiao} · {a.data}
                  </div>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{open ? '▲' : '▼'}</span>
              </button>
              {open && (
                <div style={{ padding: '0 20px 16px', borderTop: `1px solid ${c.border}20` }}>
                  <p style={{ margin: '12px 0 8px', fontSize: '0.9rem' }}>{a.mensagem}</p>
                  <strong style={{ fontSize: '0.85rem', color: c.badge }}>Ações recomendadas:</strong>
                  <ul style={{ paddingLeft: 20, marginTop: 6 }}>
                    {a.acoes.map((ac, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', marginBottom: 4 }}>{ac}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
