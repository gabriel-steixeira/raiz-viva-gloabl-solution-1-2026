import { Filter, ArrowDownRight, Minus } from 'lucide-react'
import type { CriticalRegion } from '@/data/dashboard'

export interface CriticalRegionsTableProps {
  regions: CriticalRegion[]
}

/**
 * CriticalRegionsTable — Tabela de regiões em estado crítico
 * Reutilizável em: Dashboard, Alertas
 */
export default function CriticalRegionsTable({ regions }: CriticalRegionsTableProps) {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(191,201,193,0.15)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex items-center justify-between px-6 py-5" style={{ backgroundColor: '#24342B' }}>
        <h3 className="text-lg font-semibold text-white">Regiões em Estado Crítico</h3>
        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Filtrar regiões">
          <Filter size={16} strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(191,201,193,0.2)' }}>
              <th className="text-left px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>Região</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>Estado</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>ISS</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>Famílias</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>Tendência</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>Último Alerta</th>
              <th className="text-right px-6 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#707973' }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((r) => (
              <tr key={r.id} className="hover:bg-[#F0FAF4] transition-colors cursor-default" style={{ borderBottom: '1px solid rgba(191,201,193,0.1)' }}>
                <td className="px-6 py-4"><span className="text-sm font-medium" style={{ color: '#101F17' }}>{r.regiao}</span></td>
                <td className="px-6 py-4"><span className="text-sm" style={{ color: '#404943' }}>{r.estado}</span></td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold" style={{ backgroundColor: r.issLevel === 'critico' ? 'rgba(193,68,14,0.1)' : 'rgba(233,196,106,0.2)', color: r.issLevel === 'critico' ? '#C1440E' : '#856404' }}>
                    {r.iss} — {r.issLevel === 'critico' ? 'Crítico' : 'Alerta'}
                  </span>
                </td>
                <td className="px-6 py-4"><span className="text-sm" style={{ color: '#101F17' }}>{r.familias}</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    {r.tendencia === 'queda' ? (
                      <><ArrowDownRight size={14} strokeWidth={2} style={{ color: '#BA1A1A' }} /><span className="text-sm font-medium" style={{ color: '#BA1A1A' }}>Em queda</span></>
                    ) : (
                      <><Minus size={12} strokeWidth={2} style={{ color: '#707973' }} /><span className="text-sm" style={{ color: '#707973' }}>Estável</span></>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4"><span className="text-sm" style={{ color: '#707973' }}>{r.ultimoAlerta}</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-[#D5E7DA] transition-colors" style={{ color: '#0F5238' }}>Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
