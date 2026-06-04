import {
  Users,
  Map,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Minus,
  Plus,
} from 'lucide-react'
import { AppLayout, TopBar } from '@/components/ui'
import {
  impactoKpis,
  historiaReal,
  perdasEvitadas,
} from '@/data/impacto'

const iconMap = {
  users: Users,
  map: Map,
  clock: Clock,
} as const

/**
 * ImpactoPage — Tela 7: Impacto Social
 * Seções: Hero com KPIs glassmorphism, História Real,
 * Perdas Evitadas, Mapa de Impacto
 */
export default function ImpactoPage() {
  return (
    <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
      <TopBar showSearch />

      <div className="flex flex-col gap-6 px-6 md:px-10 lg:px-20 py-12 pb-16 flex-1">
        {/* ─── HERO SECTION ─── */}
        <section
          aria-label="Raiz Viva em números — métricas de impacto"
          className="relative overflow-hidden rounded-xl bg-verde-profundo"
        >
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-12">
            {/* Left: Heading + subtitle */}
            <div className="flex flex-col gap-4">
              <h1
                className="font-bold leading-tight text-white"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  letterSpacing: '-0.96px',
                }}
              >
                Raiz Viva em Números
              </h1>
              <p
                className="text-lg leading-relaxed text-verde-menta"
              >
                Monitoramento contínuo gerando impacto real no campo e na vida de quem produz.
              </p>
            </div>

            {/* Right: 3 Glassmorphism KPI cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {impactoKpis.map((kpi) => {
                const Icon = iconMap[kpi.icon]
                return (
                  <div
                    key={kpi.id}
                    className="flex flex-col justify-center gap-2 p-6 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(12px)',
                      minWidth: '140px',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} style={{ color: '#92F7C3' }} />
                    <span
                      className="text-2xl font-semibold text-white"
                    >
                      {kpi.value}
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider whitespace-pre-line text-verde-menta"
                      style={{ letterSpacing: '0.6px' }}
                    >
                      {kpi.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── BENTO GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* História Real (span 7) */}
          <section
            aria-label="História real de uma agricultora beneficiada"
            className="lg:col-span-7 rounded-xl overflow-hidden bg-white flex flex-col md:flex-row"
            style={{ boxShadow: '0px 4px 20px -2px rgba(16, 31, 23, 0.04)' }}
          >
            {/* Image */}
            <div className="md:w-[45%] min-h-[280px] relative">
              <img
                src={`${import.meta.env.BASE_URL}${historiaReal.imagemUrl}`}
                alt="Dona Maria em sua plantação em Quixadá, Ceará"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 gap-4 flex-1">
              {/* Badge */}
              <div
                className="flex items-center gap-2 w-fit px-3 py-1 rounded-full"
                style={{ backgroundColor: 'var(--surface-verde-suave, #F0FAF4)', border: '1px solid rgba(191,201,193,0.3)' }}
              >
                <Sparkles size={10} strokeWidth={1.5} className="text-verde-profundo" />
                <span className="text-xs font-semibold text-text-medio">
                  História Real
                </span>
              </div>

              {/* Name */}
              <h2
                className="text-h2 font-semibold leading-tight text-text-forte"
              >
                Dona Maria,<br />Quixadá - CE
              </h2>

              {/* Blockquote */}
              <blockquote
                className="text-lg leading-relaxed pl-4 text-text-medio"
                style={{
                  borderLeft: '4px solid var(--verde-raiz)',
                  textAlign: 'justify',
                }}
              >
                {historiaReal.citacao}
              </blockquote>

              {/* CTA Button */}
              <button
                className="flex items-center gap-2 w-fit px-4 py-2 rounded-xl text-body-s font-medium transition-colors hover:bg-surface-verde-suave text-verde-profundo border-2 border-verde-profundo"
              >
                Ver história completa
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </section>

          {/* Perdas Evitadas (span 5) */}
          <section
            aria-label="Comparativo de perdas evitadas com Raiz Viva"
            className="lg:col-span-5 rounded-xl bg-white p-6 flex flex-col shadow-section"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between pb-4"
              style={{ borderBottom: '1px solid rgba(191,201,193,0.2)' }}
            >
              <h2 className="text-h2 font-semibold text-text-forte">
                Perdas Evitadas
              </h2>
              <Minus size={16} strokeWidth={1.5} style={{ color: '#707973' }} />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 mt-4 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#C1440E' }} />
                <span className="text-xs font-medium" style={{ color: '#707973' }}>Sem Alerta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#2D6A4F' }} />
                <span className="text-xs font-medium" style={{ color: '#707973' }}>Com Raiz Viva</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div
              className="flex-1 rounded-lg flex flex-col justify-end px-6 pt-8 pb-4 min-h-[220px] bg-surface-verde-suave"
              style={{ border: '1px solid rgba(191,201,193,0.15)' }}
            >
              {/* Bars row */}
              <div className="flex items-end justify-around w-full h-full gap-3">
                {perdasEvitadas.anos.map((d) => (
                  <div key={d.ano} className="flex flex-col items-center flex-1 h-full justify-end gap-2">
                    <div className="flex items-end gap-1.5 w-full justify-center h-full">
                      {/* Sem alerta bar */}
                      <div
                        className="rounded-t-md w-[36px]"
                        style={{
                          height: `${(d.semAlerta / 310) * 100}%`,
                          backgroundColor: '#C1440E',
                          opacity: 0.85,
                        }}
                      />
                      {/* Com Raiz Viva bar */}
                      {d.comRaizViva > 0 && (
                        <div
                          className="rounded-t-md w-[36px]"
                          style={{
                            height: `${(d.comRaizViva / 310) * 100}%`,
                            backgroundColor: '#2D6A4F',
                          }}
                        />
                      )}
                    </div>
                    {/* Year label */}
                    <span className="text-[11px] font-semibold" style={{ color: '#404943' }}>
                      {d.ano}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom totals */}
            <div className="flex items-center gap-4 mt-5 pt-4" style={{ borderTop: '1px solid var(--borda-verde)' }}>
              <div className="flex flex-col items-center flex-1 gap-1">
                <span className="text-xs font-semibold text-text-sutil">
                  Sem Alerta
                </span>
                <span className="text-base font-semibold text-terracota">
                  {perdasEvitadas.semAlerta}
                </span>
              </div>
              <div
                className="w-px h-8"
                style={{ backgroundColor: 'var(--borda-verde)' }}
              />
              <div className="flex flex-col items-center flex-1 gap-1">
                <span className="text-xs font-semibold text-text-sutil">
                  Com Raiz Viva
                </span>
                <span className="text-base font-semibold text-verde-profundo">
                  {perdasEvitadas.comRaizViva}
                </span>
              </div>
            </div>
          </section>

          {/* Mapa de Impacto no Brasil (span 12) */}
          <section
            aria-label="Mapa de impacto com distribuição de alertas preventivos"
            className="lg:col-span-12 rounded-xl bg-white p-6"
            style={{ boxShadow: '0px 4px 20px -2px rgba(16, 31, 23, 0.04)' }}
          >
            {/* Header */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4"
              style={{ borderBottom: '1px solid var(--borda-verde)' }}
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-h2 font-semibold text-text-forte">
                  Mapa de Impacto no Brasil
                </h2>
                <p className="text-body-l text-text-medio">
                  Distribuição de alertas preventivos enviados na última safra.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="p-2 rounded-lg transition-colors hover:bg-surface-verde-medio"
                  style={{ backgroundColor: 'var(--surface-verde-suave)' }}
                  aria-label="Diminuir zoom"
                >
                  <Minus size={18} strokeWidth={1.5} style={{ color: '#404943' }} />
                </button>
                <button
                  className="p-2 rounded-lg transition-colors hover:bg-[#D5E7DA]"
                  style={{ backgroundColor: '#E0F2E6' }}
                  aria-label="Aumentar zoom"
                >
                  <Plus size={18} strokeWidth={1.5} style={{ color: '#404943' }} />
                </button>
              </div>
            </div>

            {/* Map container */}
            <div
              className="relative mt-6 rounded-lg overflow-hidden"
              style={{
                backgroundColor: 'var(--surface-verde-pale, #CDDED2)',
                border: '1px solid rgba(191,201,193,0.2)',
                height: '460px',
              }}
            >
              {/* Brazil map image */}
              <img
                src={`${import.meta.env.BASE_URL}images/map-brazil-impacto.jpg`}
                alt="Mapa do Brasil mostrando pontos de impacto do Raiz Viva"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                role="img"
              />

              {/* Proportional pins — positions match Figma layout */}
              {/* Pin 1: small dark green (32px) — NE region */}
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  width: '32px',
                  height: '32px',
                  top: '26%',
                  left: '60%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#0F5238',
                  border: '2px solid #FFFFFF',
                  boxShadow: '0px 4px 6px -4px rgba(15, 82, 56, 0.3), 0px 10px 15px -3px rgba(15, 82, 56, 0.3)',
                }}
              >
                <MapPin size={14} strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
              </div>

              {/* Pin 2: medium green-neon (48px) — "1.2k" */}
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  width: '48px',
                  height: '48px',
                  top: '39%',
                  left: '40%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#92F7C3',
                  border: '2px solid #FFFFFF',
                  opacity: 0.9,
                  boxShadow: '0px 4px 6px -4px rgba(15, 82, 56, 0.3), 0px 10px 15px -3px rgba(15, 82, 56, 0.3)',
                }}
              >
                <span className="text-xs font-bold" style={{ color: '#00734D' }}>1.2k</span>
              </div>

              {/* Pin 3: small dark red (24px) — SE region */}
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  width: '24px',
                  height: '24px',
                  top: '52%',
                  left: '70%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#832800',
                  border: '2px solid #FFFFFF',
                  opacity: 0.8,
                  boxShadow: '0px 4px 6px -4px rgba(15, 82, 56, 0.3), 0px 10px 15px -3px rgba(15, 82, 56, 0.3)',
                }}
              />

              {/* Pin 4: large blurred green (64px) — "4.5k" */}
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  width: '64px',
                  height: '64px',
                  top: '65%',
                  left: '55%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(15, 82, 56, 0.8)',
                  border: '2px solid #FFFFFF',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)',
                }}
              >
                <span className="text-sm font-bold" style={{ color: '#FFFFFF' }}>4.5k</span>
              </div>
            </div>
          </section>
        </div>
      </div >
    </AppLayout >
  )
}
