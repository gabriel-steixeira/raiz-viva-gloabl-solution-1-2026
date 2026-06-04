import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface FilterChipProps {
  icon?: LucideIcon
  label: string
  active?: boolean
  onClick?: () => void
}

/**
 * FilterChip — Chip individual de filtro com ícone + label + chevron
 * Reutilizável em: Dashboard, Mapa, Alertas, Impacto
 */
export default function FilterChip({ icon: Icon, label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors"
      style={{
        border: active ? '1px solid #2D6A4F' : '1px solid #BFC9C1',
        backgroundColor: '#FFFFFF',
        color: active ? '#2D6A4F' : '#101F17',
      }}
    >
      {Icon && <Icon size={14} strokeWidth={1.5} style={{ color: active ? '#2D6A4F' : '#404943' }} />}
      <span>{label}</span>
      <ChevronDown size={14} strokeWidth={1.5} style={{ color: active ? '#2D6A4F' : '#707973' }} />
    </button>
  )
}
