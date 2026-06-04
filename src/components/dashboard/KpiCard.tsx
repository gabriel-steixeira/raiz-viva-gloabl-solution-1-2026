import { Users, Bell, Map, Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import type { KpiData } from '@/data/dashboard'

const iconMap = {
  users: Users,
  bell: Bell,
  map: Map,
  activity: Activity,
}

export interface KpiCardProps {
  data: KpiData
}

/**
 * KpiCard — Card de indicador-chave de performance
 * Reutilizável em: Dashboard, Impacto Social
 */
export default function KpiCard({ data }: KpiCardProps) {
  const Icon = iconMap[data.icon]
  const trendColor =
    data.trend.type === 'up'
      ? '#006C48'
      : data.trend.type === 'down'
      ? '#AB3700'
      : '#707973'

  const TrendIcon =
    data.trend.type === 'up'
      ? TrendingUp
      : data.trend.type === 'down'
      ? TrendingDown
      : Minus

  const iconBg =
    data.color === '#0F5238'
      ? 'rgba(45,106,79,0.08)'
      : 'rgba(171,55,0,0.08)'

  return (
    <div
      className="relative flex flex-col gap-3 p-6 rounded-xl transition-shadow hover:shadow-md"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(191,201,193,0.15)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={20} strokeWidth={1.5} style={{ color: data.color }} />
      </div>

      <span className="text-sm font-medium" style={{ color: '#707973' }}>
        {data.label.replace('\n', ' ')}
      </span>

      {data.id === 'iss' ? (
        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold leading-none" style={{ color: '#101F17', letterSpacing: '-0.5px' }}>
            {data.value}
          </span>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-0.5"
            style={{ backgroundColor: 'rgba(255,218,214,0.35)', color: '#AB3700' }}
          >
            {data.trend.text}
          </span>
        </div>
      ) : (
        <>
          <span className="text-3xl font-bold leading-none" style={{ color: '#101F17', letterSpacing: '-0.5px' }}>
            {data.value}
          </span>
          <div className="flex items-center gap-1.5">
            <TrendIcon size={14} strokeWidth={2} style={{ color: trendColor }} />
            <span className="text-xs font-semibold" style={{ color: trendColor }}>
              {data.trend.text}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
