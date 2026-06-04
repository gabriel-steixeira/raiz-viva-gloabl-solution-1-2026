import {
  TreePine,
  Sprout,
  Trees,
  Satellite,
  Users,
  ClipboardCheck,
  Camera,
  Leaf,
  ArrowRight,
} from 'lucide-react'
import { AppLayout, TopBar } from '@/components/ui'
import {
  eligibilityCards,
  processSteps,
} from '@/data/carbono'
import type { EligibilityCard, ProcessStep } from '@/data/carbono'

/* Icon maps */
const eligibilityIconMap = {
  tree: TreePine,
  sprout: Sprout,
  trees: Trees,
} as const

const stepIconMap = {
  satellite: Satellite,
  users: Users,
  clipboard: ClipboardCheck,
  camera: Camera,
} as const

/**
 * CarbonoPage — Tela 8: Carbono Solidário
 * Layout fiel ao Figma: Hero, Critérios de Elegibilidade,
 * Como funciona o modelo (4 etapas), Mapa + CTA Potencial
 */
export default function CarbonoPage() {
  return (
    <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
      <TopBar showSearch />

      <div className="flex flex-col gap-8 px-6 md:px-10 lg:px-20 py-6 pb-16 flex-1">
        {/* ─── HERO SECTION ─── */}
        <section
          aria-label="Carbono Solidário — introdução"
          className="relative overflow-hidden rounded-2xl p-8 lg:p-12"
          style={{
            background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4D35 50%, #0F5238 100%)',
          }}
        >
          <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left content */}
            <div className="flex flex-col gap-5 max-w-[480px]">
              {/* Badge */}
              <span
                className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}
              >
                <Leaf size={12} strokeWidth={1.5} />
                100% Opcional
              </span>

              {/* Title */}
              <h1
                className="font-bold leading-tight"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  letterSpacing: '-0.8px',
                }}
              >
                Carbono Solidário
              </h1>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: 'rgba(236, 254, 241, 0.9)' }}
              >
                Transforme as boas práticas agrícolas da sua propriedade em ativos financeiros.
                Nosso modelo valoriza quem preserva e recupera a terra, conectando sua cooperativa
                ao mercado global de carbono.
              </p>
            </div>

            {/* Right: decorative icon */}
            <div
              className="hidden lg:flex items-center justify-center w-[120px] h-[120px] rounded-full flex-shrink-0"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Leaf size={48} strokeWidth={1.2} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
            </div>
          </div>
        </section>

        {/* ─── CRITÉRIOS DE ELEGIBILIDADE ─── */}
        <section aria-label="Critérios de elegibilidade para geração de créditos de carbono">
          <div className="flex flex-col gap-1 mb-5">
            <h2
              className="text-2xl font-bold"
              style={{ color: '#101F17', letterSpacing: '-0.3px' }}
            >
              Critérios de Elegibilidade
            </h2>
            <p className="text-sm" style={{ color: '#404943' }}>
              Áreas elegíveis para geração de créditos de carbono.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eligibilityCards.map((card) => (
              <EligibilityCardComponent key={card.id} data={card} />
            ))}
          </div>
        </section>

        {/* ─── COMO FUNCIONA O MODELO ─── */}
        <section
          aria-label="Como funciona o modelo de créditos de carbono em 4 etapas"
          className="rounded-2xl bg-white p-8 lg:p-10"
          style={{
            border: '1px solid rgba(191, 201, 193, 0.15)',
            boxShadow: '0px 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          <div className="flex flex-col items-center text-center mb-10">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: '#101F17', letterSpacing: '-0.3px' }}
            >
              Como funciona o modelo
            </h2>
            <p className="text-sm" style={{ color: '#404943' }}>
              Um processo transparente e tecnológico para certificar suas práticas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.id} data={step} />
            ))}
          </div>
        </section>

        {/* ─── MAPA + CTA POTENCIAL ─── */}
        <section
          aria-label="Potencial da sua cooperativa — mapa e chamada para ação"
          className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl"
          style={{
            boxShadow: '0px 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          {/* Left: Map / Photo */}
          <div className="lg:col-span-7 relative min-h-[380px] overflow-hidden" style={{ backgroundColor: '#2D4A3A' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/carbono-area-agricola.jpg`}
              alt="Vista aérea de áreas agrícolas elegíveis para créditos de carbono"
              className="absolute inset-0 w-full h-full object-cover m-0 p-0"
            />

            {/* Legend overlay */}
            <div
              className="absolute top-4 left-4 flex flex-col gap-2 px-4 py-3 rounded-xl"
              style={{
                backgroundColor: 'rgba(27, 42, 34, 0.85)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#2D6A4F' }} />
                <span className="text-xs font-medium text-white">Região Mapeada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#52B788' }} />
                <span className="text-xs font-medium text-white">Alta Elegibilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#E9C46A' }} />
                <span className="text-xs font-medium text-white">Em Análise</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-5 bg-white p-8 flex flex-col justify-center gap-5">
            <h3
              className="text-2xl font-bold leading-tight"
              style={{ color: '#101F17', letterSpacing: '-0.3px' }}
            >
              Potencial da sua cooperativa
            </h3>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#707973' }}>
                Área total elegível estimada
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold" style={{ color: '#101F17' }}>
                  4.2k
                </span>
                <span className="text-lg font-medium" style={{ color: '#404943' }}>
                  ha
                </span>
              </div>
            </div>

            <div
              className="p-4 rounded-xl text-sm leading-relaxed"
              style={{
                backgroundColor: '#F0FAF4',
                border: '1px solid rgba(191, 201, 193, 0.2)',
                color: '#404943',
              }}
            >
              Baseado nos dados preliminares de satélite, sua propriedade possui forte aptidão para o programa.
            </div>

            <button
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0F5238', color: '#FFFFFF' }}
            >
              Quero participar
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}

/* ─── INTERNAL COMPONENTS ─── */

function EligibilityCardComponent({ data }: { data: EligibilityCard }) {
  const Icon = eligibilityIconMap[data.icon]

  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-xl bg-white transition-shadow hover:shadow-md"
      style={{
        border: '1px solid rgba(191, 201, 193, 0.15)',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: 'rgba(45, 106, 79, 0.08)' }}
      >
        <Icon size={20} strokeWidth={1.5} style={{ color: '#2D6A4F' }} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold" style={{ color: '#101F17' }}>
        {data.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: '#404943' }}>
        {data.description}
      </p>
    </div>
  )
}

function ProcessStepCard({ data }: { data: ProcessStep }) {
  const Icon = stepIconMap[data.icon]

  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* Icon circle */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: '#F0FAF4',
          border: '1px solid rgba(191, 201, 193, 0.2)',
        }}
      >
        <Icon size={24} strokeWidth={1.5} style={{ color: '#2D6A4F' }} />
      </div>

      {/* Step badge */}
      <span
        className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
        style={{ backgroundColor: '#D8F3DC', color: '#2D6A4F' }}
      >
        Etapa {data.id}
      </span>

      {/* Title */}
      <h4 className="text-sm font-bold" style={{ color: '#101F17' }}>
        {data.title}
      </h4>

      {/* Description */}
      <p className="text-xs leading-relaxed" style={{ color: '#707973' }}>
        {data.description}
      </p>
    </div>
  )
}
