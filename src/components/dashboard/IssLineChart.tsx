import { MoreHorizontal } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { BiomeIssData } from '@/data/dashboard'

const biomeColors = [
  { key: 'Cerrado', color: '#2D6A4F', dash: false },
  { key: 'Caatinga', color: '#AB3700', dash: true },
  { key: 'Amazônia', color: '#52B788', dash: false },
  { key: 'Mata Atlântica', color: '#95D5B2', dash: false },
]

export interface IssLineChartProps {
  data: BiomeIssData[]
}

/**
 * IssLineChart — Gráfico de evolução ISS por Bioma
 * Reutilizável em: Dashboard, Detalhe da Comunidade
 */
export default function IssLineChart({ data }: IssLineChartProps) {
  return (
    <div
      className="flex flex-col flex-[2] rounded-xl min-w-0"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(191,201,193,0.15)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="flex items-center justify-between px-6 py-5"
        style={{ borderBottom: '1px solid rgba(191,201,193,0.15)' }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold" style={{ color: '#101F17' }}>
            Evolução ISS por Bioma
          </h3>
          <div className="flex items-center gap-4">
            {biomeColors.map((b) => (
              <div key={b.key} className="flex items-center gap-1.5">
                <div
                  className="w-4 h-0.5 rounded-full"
                  style={{
                    backgroundColor: b.dash ? 'transparent' : b.color,
                    ...(b.dash ? { backgroundImage: `repeating-linear-gradient(90deg, ${b.color} 0 4px, transparent 4px 7px)` } : {}),
                  }}
                />
                <span className="text-xs" style={{ color: '#707973' }}>{b.key}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-[#D5E7DA] transition-colors" aria-label="Mais opções do gráfico">
          <MoreHorizontal size={16} strokeWidth={1.5} style={{ color: '#707973' }} />
        </button>
      </div>

      <div className="px-6 py-6 flex-1" style={{ minHeight: 300 }}>
        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#BFC9C1" strokeOpacity={0.25} vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: '#707973', fontSize: 12 }} axisLine={false} tickLine={false} dy={8} />
            <YAxis tick={{ fill: '#707973', fontSize: 12 }} axisLine={false} tickLine={false} domain={[20, 90]} dx={-4} />
            <Tooltip
              contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #D5E7DA', borderRadius: 8, fontSize: 13, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              cursor={{ stroke: '#2D6A4F', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Line type="monotone" dataKey="Cerrado" stroke="#2D6A4F" strokeWidth={3} dot={false} activeDot={{ r: 4, strokeWidth: 2 }} />
            <Line type="monotone" dataKey="Caatinga" stroke="#AB3700" strokeWidth={2.5} strokeDasharray="5 4" dot={false} activeDot={{ r: 4, strokeWidth: 2 }} />
            <Line type="monotone" dataKey="Amazônia" stroke="#52B788" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 2 }} />
            <Line type="monotone" dataKey="Mata Atlântica" stroke="#95D5B2" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
