import React from 'react'
import { ArrowRight, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import IssBadge from '@/components/ui/IssBadge'

export interface RegionData {
  id: string
  nome: string
  estado: string
  iss: number
  tendencia: 'subindo' | 'caindo' | 'estavel'
  familias: number
  ultimaAtualizacao: string
}

export interface RegionSidePanelProps {
  region: RegionData | null
  onClose: () => void
}

const tendenciaIcon: Record<string, string> = {
  subindo: '↑',
  caindo:  '↓',
  estavel: '→',
}

/**
 * RegionSidePanel — Painel lateral com preview de região no mapa
 * Componente exclusivo da Tela 2 (Mapa Nacional)
 */
export default function RegionSidePanel({ region, onClose }: RegionSidePanelProps) {
  const navigate = useNavigate()

  if (!region) return null

  return (
    <aside
      className="w-[320px] flex-shrink-0 flex flex-col border-l"
      style={{ borderColor: '#E5E0D5', backgroundColor: '#FAFAF7' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 border-b"
        style={{ borderColor: '#E5E0D5' }}
      >
        <h3 className="text-h3 font-bold" style={{ color: '#1B2A22' }}>Detalhes da Região</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Fechar painel"
        >
          <X size={18} strokeWidth={1.5} style={{ color: '#6B7280' }} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-5 flex-1">
        <div className="flex flex-col gap-1">
          <h4 className="text-body-l font-bold" style={{ color: '#1B2A22' }}>{region.nome}</h4>
          <p className="text-body-s" style={{ color: '#6B7280' }}>{region.estado}</p>
        </div>

        <IssBadge value={region.iss} size="lg" />

        <div className="grid grid-cols-2 gap-3">
          <div
            className="flex flex-col gap-1 p-3 rounded-xl"
            style={{ backgroundColor: '#F4ECD8' }}
          >
            <span className="text-caption font-semibold uppercase" style={{ color: '#6B7280' }}>Tendência</span>
            <span className="text-body-l font-bold" style={{ color: '#1B2A22' }}>
              {tendenciaIcon[region.tendencia]} {region.tendencia}
            </span>
          </div>
          <div
            className="flex flex-col gap-1 p-3 rounded-xl"
            style={{ backgroundColor: '#F4ECD8' }}
          >
            <span className="text-caption font-semibold uppercase" style={{ color: '#6B7280' }}>Famílias</span>
            <span className="text-body-l font-bold" style={{ color: '#1B2A22' }}>
              {region.familias.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        <p className="text-caption" style={{ color: '#6B7280' }}>Última atualização: {region.ultimaAtualizacao}</p>
      </div>

      {/* CTA */}
      <div className="p-5 border-t" style={{ borderColor: '#E5E0D5' }}>
        <button
          onClick={() => navigate(`/mapa/${region.id}`)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-[24px] text-button font-semibold transition-colors hover:opacity-90"
          style={{ backgroundColor: '#2D6A4F', color: '#FAFAF7' }}
        >
          Ver detalhes completos
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    </aside>
  )
}
