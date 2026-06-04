import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export interface RiskItem {
  name: string
  value: number
  color: string
}

export interface RiskDonutChartProps {
  data: RiskItem[]
}

/**
 * RiskDonutChart — Gráfico donut de distribuição de risco
 * Reutilizável em: Dashboard, Impacto Social
 */
export default function RiskDonutChart({ data }: RiskDonutChartProps) {
  return (
    <div
      className="flex flex-col flex-1 rounded-xl min-w-0"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(191,201,193,0.15)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.04)',
      }}
    >
      <div className="px-6 py-5" style={{ borderBottom: '1px solid rgba(191,201,193,0.15)' }}>
        <h3 className="text-lg font-semibold" style={{ color: '#101F17' }}>
          Distribuição de Risco
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 flex-1">
        <div className="relative">
          <ResponsiveContainer width={180} height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={78}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold" style={{ color: '#101F17', letterSpacing: '-0.5px' }}>
              {data.length}
            </span>
            <span className="text-xs font-medium" style={{ color: '#707973' }}>
              Níveis
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs font-medium" style={{ color: '#101F17' }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
