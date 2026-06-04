/**
 * Mock de dados para o Dashboard Operacional (Tela 6)
 * Em produção: substituir por chamadas à API/backend
 */

export interface KpiData {
  id: string
  label: string
  value: string
  trend: { type: 'up' | 'down' | 'stable'; text: string }
  icon: 'users' | 'bell' | 'map' | 'activity'
  color: string
}

export interface CriticalRegion {
  id: string
  regiao: string
  estado: string
  iss: number
  issLevel: 'critico' | 'alerta'
  familias: string
  tendencia: 'queda' | 'estavel' | 'subindo'
  ultimoAlerta: string
}

export interface BiomeIssData {
  mes: string
  Caatinga: number
  Cerrado: number
  Amazônia: number
  'Mata Atlântica': number
}

export const kpiData: KpiData[] = [
  {
    id: 'familias',
    label: 'Famílias\nMonitoradas',
    value: '12.450',
    trend: { type: 'up', text: '+2.4% este mês' },
    icon: 'users',
    color: '#0F5238',
  },
  {
    id: 'alertas',
    label: 'Alertas Enviados',
    value: '847',
    trend: { type: 'up', text: '+12% vs última semana' },
    icon: 'bell',
    color: '#AB3700',
  },
  {
    id: 'hectares',
    label: 'Hectares Cobertos',
    value: '284.000',
    trend: { type: 'stable', text: 'Estável' },
    icon: 'map',
    color: '#0F5238',
  },
  {
    id: 'iss',
    label: 'ISS Médio Nacional',
    value: '61',
    trend: { type: 'down', text: 'Moderado' },
    icon: 'activity',
    color: '#AB3700',
  },
]

export const criticalRegions: CriticalRegion[] = [
  {
    id: '1',
    regiao: 'Vale do Jequitinhonha',
    estado: 'Minas Gerais',
    iss: 34,
    issLevel: 'critico',
    familias: '1.205',
    tendencia: 'queda',
    ultimoAlerta: 'Há 2 horas',
  },
  {
    id: '2',
    regiao: 'Sertão do São Francisco',
    estado: 'Bahia',
    iss: 38,
    issLevel: 'critico',
    familias: '840',
    tendencia: 'queda',
    ultimoAlerta: 'Há 5 horas',
  },
  {
    id: '3',
    regiao: 'Agreste Potiguar',
    estado: 'Rio Grande do Norte',
    iss: 42,
    issLevel: 'alerta',
    familias: '532',
    tendencia: 'estavel',
    ultimoAlerta: 'Ontem',
  },
]

export const biomeIssEvolution: BiomeIssData[] = [
  { mes: 'Jan', Caatinga: 45, Cerrado: 62, Amazônia: 78, 'Mata Atlântica': 72 },
  { mes: 'Fev', Caatinga: 42, Cerrado: 60, Amazônia: 80, 'Mata Atlântica': 70 },
  { mes: 'Mar', Caatinga: 38, Cerrado: 58, Amazônia: 82, 'Mata Atlântica': 68 },
  { mes: 'Abr', Caatinga: 35, Cerrado: 55, Amazônia: 79, 'Mata Atlântica': 65 },
  { mes: 'Mai', Caatinga: 33, Cerrado: 52, Amazônia: 76, 'Mata Atlântica': 63 },
  { mes: 'Jun', Caatinga: 30, Cerrado: 50, Amazônia: 74, 'Mata Atlântica': 61 },
]

export const riskDistribution = [
  { name: 'Crítico', value: 35, color: '#AB3700' },
  { name: 'Moderado', value: 40, color: '#FFB59C' },
  { name: 'Baixo', value: 25, color: '#95D4B3' },
]
