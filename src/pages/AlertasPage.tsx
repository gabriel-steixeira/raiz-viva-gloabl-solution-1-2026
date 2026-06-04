import React, { useState } from 'react'
import AppLayout from '@/components/ui/AppLayout'
import TopBar from '@/components/ui/TopBar'
import {
  Bell,
  Users,
  MessageSquare,
  RefreshCw,
  BarChart2,
  ChevronDown,
  Smartphone,
  Send,
  CheckCheck,
  AlertTriangle,
  Droplets,
  Sun,
  Leaf,
  Clock,
} from 'lucide-react'

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Severity = 'critico' | 'moderado' | 'normalizacao'

interface Alerta {
  id: string
  severity: Severity
  tipo: string
  titulo: string
  descricao: string
  horario: string
  atingidos: number
  canais: string[]
  status: 'ativo' | 'enviado' | 'concluido'
  mensagemWhatsApp: string
  familias: number
  confirmacoes: number
}

// ─────────────────────────────────────────────
// Mock data
// ─────────────────────────────────────────────
const alertasMock: Alerta[] = [
  {
    id: 'a1',
    severity: 'critico',
    tipo: 'Seca Extrema',
    titulo: 'Alerta em Quixadá',
    descricao: 'ISS crítico detectado. Estiagem severa com déficit hídrico acima de 85% nos últimos 30 dias.',
    horario: 'Hoje, 08:30',
    atingidos: 1200,
    canais: ['SMS', 'WhatsApp'],
    status: 'ativo',
    mensagemWhatsApp: '🚨 *ALERTA RAIZ VIVA — CRÍTICO*\n\nOlá! Identificamos seca extrema em *Quixadá, CE*.\n\n📊 ISS atual: *12 — CRÍTICO*\n💧 Déficit hídrico: 87%\n\n⚠️ *AÇÕES URGENTES:*\n• Suspenda irrigação imediatamente\n• Proteja reservatórios de água\n• Acione Defesa Civil se necessário\n\nResponda *CIENTE* para confirmar recebimento.',
    familias: 1200,
    confirmacoes: 847,
  },
  {
    id: 'a2',
    severity: 'moderado',
    tipo: 'Chuvas Intensas',
    titulo: 'Aviso no Sertão Central',
    descricao: 'Previsão de chuvas intensas nas próximas 48h. Risco de alagamento em áreas de baixada.',
    horario: 'Hoje, 06:15',
    atingidos: 340,
    canais: ['WhatsApp'],
    status: 'enviado',
    mensagemWhatsApp: '⚠️ *AVISO RAIZ VIVA — MODERADO*\n\nOlá! Há previsão de *chuvas intensas* no *Sertão Central, CE*.\n\n🌧️ Acumulado previsto: 80–120mm em 48h\n💨 Rajadas de vento: até 45 km/h\n\n📋 *RECOMENDAÇÕES:*\n• Proteja insumos e equipamentos\n• Evite áreas de baixada\n• Verifique sistemas de drenagem\n• Monitore animais em pastagens\n\nResponda *CIENTE* para confirmar recebimento.',
    familias: 340,
    confirmacoes: 212,
  },
  {
    id: 'a3',
    severity: 'normalizacao',
    tipo: 'Normalização',
    titulo: 'Estabilidade no Cariri',
    descricao: 'Condições climáticas voltaram à normalidade. ISS em 72 — baixo risco. Chuvas regulares previstas.',
    horario: 'Ontem, 14:00',
    atingidos: 850,
    canais: ['SMS', 'WhatsApp', 'Voz'],
    status: 'concluido',
    mensagemWhatsApp: '✅ *ATUALIZAÇÃO RAIZ VIVA — BOA NOTÍCIA*\n\nOlá! As condições climáticas no *Cariri, CE* voltaram à normalidade.\n\n📊 ISS atual: *72 — Baixo Risco*\n🌱 Vegetação: saudável\n🌧️ Chuvas regulares previstas\n\n🌿 *OPORTUNIDADES:*\n• Momento ideal para plantio\n• Reative o sistema de irrigação gradualmente\n• Boa janela para adubação\n\nContinuaremos monitorando sua região.',
    familias: 850,
    confirmacoes: 850,
  },
]

// ─────────────────────────────────────────────
// Severity config
// ─────────────────────────────────────────────
const severityConfig = {
  critico: {
    label: 'Crítico',
    borderColor: '#C1440E',
    badgeBg: '#FFE0D5',
    badgeText: '#C1440E',
    dotColor: '#C1440E',
    Icon: AlertTriangle,
  },
  moderado: {
    label: 'Moderado',
    borderColor: '#E9C46A',
    badgeBg: '#FFF9E6',
    badgeText: '#856404',
    dotColor: '#E9C46A',
    Icon: Droplets,
  },
  normalizacao: {
    label: 'Normalização',
    borderColor: '#52B788',
    badgeBg: '#D8F3DC',
    badgeText: '#2D6A4F',
    dotColor: '#52B788',
    Icon: Leaf,
  },
}

// ─────────────────────────────────────────────
// AlertCard
// ─────────────────────────────────────────────
function AlertCard({
  alerta,
  selected,
  onClick,
}: {
  alerta: Alerta
  selected: boolean
  onClick: () => void
}) {
  const cfg = severityConfig[alerta.severity]
  const Icone = cfg.Icon

  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        background: selected ? '#F0FBF4' : '#FFFFFF',
        border: selected ? `1.5px solid ${cfg.borderColor}` : '1.5px solid #E5E0D5',
        borderLeft: `4px solid ${cfg.borderColor}`,
        borderRadius: '12px',
        padding: '18px 20px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: selected ? `0 4px 16px ${cfg.borderColor}22` : '0 1px 6px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '3px 10px',
            borderRadius: '20px',
            background: cfg.badgeBg,
            color: cfg.badgeText,
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <Icone size={11} strokeWidth={2} />
          {cfg.label} · {alerta.tipo}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#6B7280', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
          <Clock size={12} strokeWidth={1.5} />
          {alerta.horario}
        </div>
      </div>

      {/* Title + description */}
      <p style={{ fontSize: '15px', fontWeight: 700, color: '#1B2A22', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>
        {alerta.titulo}
      </p>
      <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.5, fontFamily: 'Inter, sans-serif', marginBottom: '14px' }}>
        {alerta.descricao}
      </p>

      {/* Footer metrics */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
          <Users size={13} strokeWidth={1.5} />
          {alerta.atingidos.toLocaleString('pt-BR')} atingidos
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
          <MessageSquare size={13} strokeWidth={1.5} />
          {alerta.canais.join(' / ')}
        </span>
        <span
          style={{
            marginLeft: 'auto',
            padding: '2px 10px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            background:
              alerta.status === 'ativo' ? '#FFF9E6' :
                alerta.status === 'enviado' ? '#EEF2FF' :
                  '#D8F3DC',
            color:
              alerta.status === 'ativo' ? '#856404' :
                alerta.status === 'enviado' ? '#4338CA' :
                  '#2D6A4F',
          }}
        >
          {alerta.status === 'ativo' ? '● Ativo' : alerta.status === 'enviado' ? '▶ Enviado' : '✔ Concluído'}
        </span>
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────
// AlertDetail panel
// ─────────────────────────────────────────────
function AlertDetail({ alerta }: { alerta: Alerta }) {
  const cfg = severityConfig[alerta.severity]
  const pct = Math.round((alerta.confirmacoes / alerta.familias) * 100)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header card */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          border: '1.5px solid #E5E0D5',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: cfg.dotColor,
              flexShrink: 0,
            }}
          />
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2A22', fontFamily: 'Inter, sans-serif' }}>
            {alerta.titulo}
          </h2>
        </div>
        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>
          {alerta.descricao}
        </p>
      </div>

      {/* KPI chips */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '18px 20px',
            border: '1.5px solid #E5E0D5',
            boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
          }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
            Famílias Atingidas
          </p>
          <p style={{ fontSize: '32px', fontWeight: 800, color: '#2D6A4F', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>
            {alerta.familias >= 1000 ? `${(alerta.familias / 1000).toFixed(1)}k` : alerta.familias}
          </p>
        </div>
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '18px 20px',
            border: '1.5px solid #E5E0D5',
            boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
          }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
            Confirmações
          </p>
          <p style={{ fontSize: '32px', fontWeight: 800, color: '#2D6A4F', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>
            {alerta.confirmacoes}
          </p>
        </div>
      </div>

      {/* Taxa de confirmação */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '18px 20px',
          border: '1.5px solid #E5E0D5',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>
            Taxa de Leitura
          </p>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#2D6A4F', fontFamily: 'Inter, sans-serif' }}>
            {pct}%
          </p>
        </div>
        <div style={{ background: '#E5E0D5', borderRadius: '999px', height: '6px', overflow: 'hidden' }}>
          <div
            style={{
              background: `linear-gradient(90deg, #52B788, #2D6A4F)`,
              width: `${pct}%`,
              height: '100%',
              borderRadius: '999px',
              transition: 'width 0.6s ease',
            }}
          />
        </div>
      </div>

      {/* WhatsApp preview */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px',
          border: '1.5px solid #E5E0D5',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Smartphone size={16} strokeWidth={1.5} style={{ color: '#2D6A4F' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1B2A22', fontFamily: 'Inter, sans-serif' }}>
            Preview — Mensagem WhatsApp
          </span>
        </div>

        {/* Phone mockup */}
        <div
          style={{
            background: '#E5DDD5',
            borderRadius: '16px',
            padding: '16px',
            position: 'relative',
            minHeight: '200px',
          }}
        >
          {/* WhatsApp header bar */}
          <div
            style={{
              background: '#075E54',
              borderRadius: '10px 10px 0 0',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '-16px -16px 12px -16px',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageSquare size={16} strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                Raiz Viva Alertas
              </p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                online
              </p>
            </div>
          </div>

          {/* Message bubble */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '0 12px 12px 12px',
              padding: '12px 14px',
              maxWidth: '90%',
              boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            }}
          >
            {alerta.mensagemWhatsApp.split('\n').map((line, i) => {
              // Render bold markdown
              const parts = line.split(/\*([^*]+)\*/g)
              return (
                <p key={i} style={{ fontSize: '13px', color: '#1B2A22', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', margin: 0, minHeight: line === '' ? '8px' : 'auto' }}>
                  {parts.map((part, j) =>
                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                  )}
                </p>
              )
            })}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
              <span style={{ fontSize: '11px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                {alerta.horario}
              </span>
              <CheckCheck size={14} strokeWidth={1.5} style={{ color: '#4FC3F7' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px',
            borderRadius: '12px',
            border: '1.5px solid #2D6A4F',
            background: 'transparent',
            color: '#2D6A4F',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F0FBF4')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <RefreshCw size={16} strokeWidth={1.5} />
          Reenviar
        </button>
        <button
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px',
            borderRadius: '12px',
            border: 'none',
            background: '#2D6A4F',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1B4D35')}
          onMouseLeave={e => (e.currentTarget.style.background = '#2D6A4F')}
        >
          <BarChart2 size={16} strokeWidth={1.5} />
          Ver Relatório
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// FilterDropdown
// ─────────────────────────────────────────────
function FilterDropdown({ label }: { label: string }) {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        borderRadius: '999px',
        border: '1.5px solid #B7DCC8',
        background: '#FFFFFF',
        color: '#2D6A4F',
        fontSize: '13px',
        fontWeight: 500,
        fontFamily: 'Inter, sans-serif',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#F0FBF4'; e.currentTarget.style.borderColor = '#2D6A4F' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = '#B7DCC8' }}
    >
      {label}
      <ChevronDown size={14} strokeWidth={1.8} />
    </button>
  )
}

// ─────────────────────────────────────────────
// AlertasPage
// ─────────────────────────────────────────────
export default function AlertasPage() {
  const [selectedId, setSelectedId] = useState<string>(alertasMock[1].id)
  const selectedAlerta = alertasMock.find(a => a.id === selectedId) ?? alertasMock[0]

  return (
    <AppLayout>
      <TopBar />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#ECFEF1',
          padding: '32px',
          overflowY: 'auto',
        }}
      >
        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1B2A22', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
              Central de Alertas
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
              Monitore e gerencie comunicações climáticas com as comunidades.
            </p>
          </div>

          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '24px',
              border: 'none',
              background: '#2D6A4F',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              boxShadow: '0 2px 8px rgba(45,106,79,0.3)',
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1B4D35')}
            onMouseLeave={e => (e.currentTarget.style.background = '#2D6A4F')}
          >
            <Send size={14} strokeWidth={1.5} />
            Enviar Alerta Manual
          </button>
        </div>

        {/* Filter bar + contagem */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <FilterDropdown label="Tipo" />
          <FilterDropdown label="Período" />
          <FilterDropdown label="Região" />
          <FilterDropdown label="Status" />

          <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
            <strong style={{ color: '#C1440E' }}>1</strong> crítico ·{' '}
            <strong style={{ color: '#856404' }}>1</strong> moderado ·{' '}
            <strong style={{ color: '#2D6A4F' }}>1</strong> concluído
          </span>
        </div>

        {/* 2-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Left: Alert timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Bell size={15} strokeWidth={1.5} style={{ color: '#2D6A4F' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#2D6A4F', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Alertas Ativos
              </span>
              <span
                style={{
                  padding: '1px 8px',
                  borderRadius: '999px',
                  background: '#2D6A4F',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {alertasMock.length}
              </span>
            </div>

            {alertasMock.map(alerta => (
              <AlertCard
                key={alerta.id}
                alerta={alerta}
                selected={selectedId === alerta.id}
                onClick={() => setSelectedId(alerta.id)}
              />
            ))}
          </div>

          {/* Right: Detail panel */}
          <div style={{ position: 'sticky', top: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sun size={15} strokeWidth={1.5} style={{ color: '#2D6A4F' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#2D6A4F', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Detalhes do Alerta
              </span>
            </div>
            <AlertDetail alerta={selectedAlerta} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
