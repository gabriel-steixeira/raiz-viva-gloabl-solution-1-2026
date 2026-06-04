/**
 * Mock de dados para a tela Impacto Social (Tela 7)
 * Em produção: substituir por chamadas à API/backend
 *
 * NOTA: imagemUrl é um path relativo — no componente usar
 * `${import.meta.env.BASE_URL}${imagemUrl}` para resolver.
 */

export interface ImpactoKpi {
  id: string
  value: string
  label: string
  icon: 'users' | 'map' | 'clock'
}

export interface HistoriaReal {
  nome: string
  local: string
  citacao: string
  imagemUrl: string
}

export interface PerdasEvitadas {
  semAlerta: string
  comRaizViva: string
  anos: { ano: string; semAlerta: number; comRaizViva: number }[]
}

export interface MapaImpactoPin {
  id: string
  label: string
  size: 'sm' | 'md' | 'lg' | 'xl'
  top: string
  left: string
}

// KPIs do Hero
export const impactoKpis: ImpactoKpi[] = [
  { id: 'familias', value: '12.450', label: 'FAMÍLIAS\nPROTEGIDAS', icon: 'users' },
  { id: 'hectares', value: '850k', label: 'HECTARES\nMONITORADOS', icon: 'map' },
  { id: 'antecedencia', value: '48h', label: 'ANTECEDÊNCIA\nMÉDIA\n(ALERTAS)', icon: 'clock' },
]

// História Real
export const historiaReal: HistoriaReal = {
  nome: 'Dona Maria, Quixadá - CE',
  local: 'Quixadá - CE',
  citacao:
    '"Com o alerta de geada que chegou no aplicativo, conseguimos cobrir as mudas de feijão na noite anterior. Foi a diferença entre perder a safra de dois meses e garantir o sustento do resto do ano."',
  imagemUrl: 'images/impacto-dona-maria.jpg',
}

// Perdas Evitadas
export const perdasEvitadas: PerdasEvitadas = {
  semAlerta: 'R$ 2.4M',
  comRaizViva: 'R$ 350k',
  anos: [
    { ano: '2020', semAlerta: 85, comRaizViva: 0 },
    { ano: '2021', semAlerta: 170, comRaizViva: 0 },
    { ano: '2022', semAlerta: 257, comRaizViva: 80 },
    { ano: '2023', semAlerta: 310, comRaizViva: 100 },
  ],
}

// Pins do Mapa de Impacto
export const mapaImpactoPins: MapaImpactoPin[] = [
  { id: '1', label: '4.5k', size: 'xl', top: '62%', left: '55%' },
  { id: '2', label: '1.2k', size: 'lg', top: '38%', left: '42%' },
  { id: '3', label: '', size: 'md', top: '26%', left: '60%' },
  { id: '4', label: '', size: 'sm', top: '52%', left: '70%' },
]
