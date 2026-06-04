import React, { useState } from 'react'
import AppLayout from '@/components/ui/AppLayout'
import TopBar from '@/components/ui/TopBar'
import FilterBar from '@/components/ui/FilterBar'
import BrazilMap from '@/components/mapa/BrazilMap'
import MapLegend from '@/components/mapa/MapLegend'
import RegionSidePanel, { RegionData } from '@/components/mapa/RegionSidePanel'
import { regioesMock, biomas } from '@/data/regioes'
import { estados } from '@/data/estados'
import { culturas } from '@/data/culturas'

/**
 * Raiz Viva — Tela 2: Mapa Nacional de Risco
 * Rota: /mapa | Autenticada | Com sidebar
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
    {
      id: 'cultura',
      label: 'Cultura',
      options: culturas,
      value: filters.cultura,
      onChange: (v: string) => setFilter('cultura', v),
    },
  ]

  return (
    <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
      {/* TopBar — Fiel ao Figma: apenas barra de busca e utilidades */}
      <TopBar />

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
