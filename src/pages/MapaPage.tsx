import React, { useState } from 'react'
import { Download } from 'lucide-react'
import AppLayout from '@/components/ui/AppLayout'
import TopBar from '@/components/ui/TopBar'
import FilterBar from '@/components/ui/FilterBar'
import BrazilMap from '@/components/mapa/BrazilMap'
import MapLegend from '@/components/mapa/MapLegend'
import RegionSidePanel, { RegionData } from '@/components/mapa/RegionSidePanel'
import { regioesMock, biomas } from '@/data/regioes'
import { estados } from '@/data/estados'

/**
 * Raiz Viva — Tela 2: Mapa Nacional de Risco
 * Rota: /mapa | Autenticada | Com sidebar
 *
 * Layout:
 *  Sidebar (280px) + Content:
 *    TopBar (56px)
 *    FilterBar (48px)
 *    Mapa (fill) + RegionSidePanel (320px, condicional)
 */
export default function MapaPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null)
  const [filters, setFilters] = useState({ bioma: '', estado: '', cultura: '' })

  function setFilter(key: string, value: string) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const filterItems = [
    {
      id: 'bioma',
      label: 'Bioma',
      options: biomas,
      value: filters.bioma,
      onChange: (v: string) => setFilter('bioma', v),
    },
    {
      id: 'estado',
      label: 'Estado',
      options: estados,
      value: filters.estado,
      onChange: (v: string) => setFilter('estado', v),
    },
  ]

  return (
    <AppLayout userName="João da Silva" userProfile="Agricultor Familiar">
      {/* TopBar */}
      <TopBar
        title="Mapa Nacional de Risco"
        badge="Última atualização: há 3h"
        actions={[
          {
            label: 'Exportar Relatório',
            variant: 'secondary',
            icon: <Download size={14} strokeWidth={1.5} />,
          },
        ]}
      />

      {/* FilterBar */}
      <FilterBar filters={filterItems} />

      {/* Mapa + SidePanel */}
      <div className="flex flex-1 min-h-0 relative">
        {/* Mapa */}
        <div className="flex-1 min-w-0 relative">
          <BrazilMap
            regions={regioesMock}
            selectedRegionId={selectedRegion?.id}
            onRegionClick={(region) =>
              setSelectedRegion((prev) => (prev?.id === region.id ? null : region))
            }
          />

          {/* Legenda — canto inferior esquerdo */}
          <div className="absolute bottom-6 left-6">
            <MapLegend />
          </div>
        </div>

        {/* Painel lateral direito */}
        <RegionSidePanel
          region={selectedRegion}
          onClose={() => setSelectedRegion(null)}
        />
      </div>
    </AppLayout>
  )
}
