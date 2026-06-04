import {
  Download,
  Calendar,
  Layers,
  MapPin,
  AlertTriangle,
} from 'lucide-react'
import { AppLayout, TopBar, FilterChip } from '@/components/ui'
import { KpiCard, IssLineChart, RiskDonutChart, CriticalRegionsTable } from '@/components/dashboard'
import {
  kpiData,
  criticalRegions,
  biomeIssEvolution,
  riskDistribution,
} from '@/data/dashboard'

/**
 * DashboardPage — Tela 6: Dashboard Operacional
 * Usa componentes compartilhados (AppLayout, TopBar) e componentes
 * do dashboard (KpiCard, IssLineChart, RiskDonutChart, CriticalRegionsTable).
 */
export default function DashboardPage() {
  return (
    <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
      <TopBar showSearch />

      {/* Dashboard Content */}
      <div className="flex flex-col gap-6 px-6 md:px-10 lg:px-20 py-6 pb-16 flex-1">
        {/* Page Header + Filters */}
        <div className="flex flex-col gap-4">
          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1
                className="font-bold leading-tight"
                style={{ color: '#101F17', fontSize: '32px', letterSpacing: '-0.32px' }}
              >
                Dashboard Operacional
              </h1>
              <p className="text-base" style={{ color: '#404943' }}>
                Visão geral em tempo real
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#0F5238', color: '#FFFFFF' }}
              >
                <Download size={15} strokeWidth={1.5} />
                Exportar PDF
              </button>
            </div>
          </div>

          {/* Filters row */}
          <div className="flex flex-wrap items-center gap-3">
            <FilterChip icon={Calendar} label="Últimos 30 dias" />
            <FilterChip icon={Layers} label="Todos os biomas" />
            <FilterChip icon={MapPin} label="Todos os estados" />
            <FilterChip icon={AlertTriangle} label="Todos os níveis" />
          </div>
        </div>

        {/* Row 1: KPI Cards */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Indicadores-chave de performance"
        >
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.id} data={kpi} />
          ))}
        </section>

        {/* Row 2: Charts */}
        <section
          className="flex flex-col lg:flex-row gap-6"
          aria-label="Gráficos analíticos"
        >
          <IssLineChart data={biomeIssEvolution} />
          <RiskDonutChart data={riskDistribution} />
        </section>

        {/* Row 3: Critical Regions Table */}
        <section aria-label="Tabela de regiões em estado crítico">
          <CriticalRegionsTable regions={criticalRegions} />
        </section>
      </div>
    </AppLayout>
  )
}
