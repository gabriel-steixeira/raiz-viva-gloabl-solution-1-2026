/**
 * Mock de dados para a tela Carbono Solidário (Tela 8)
 * Em produção: substituir por chamadas à API/backend
 */

export interface EligibilityCard {
  id: string
  icon: 'tree' | 'sprout' | 'trees'
  title: string
  description: string
}

export interface ProcessStep {
  id: number
  title: string
  description: string
  icon: 'satellite' | 'users' | 'clipboard' | 'camera'
}

// Cards de elegibilidade
export const eligibilityCards: EligibilityCard[] = [
  {
    id: 'vegetacao-preservada',
    icon: 'tree',
    title: 'Vegetação Preservada',
    description: 'Áreas de mata nativa mantidas intactas além das reservas legais obrigatórias, atuando como sumidouros vitais de carbono.',
  },
  {
    id: 'recuperacao-area',
    icon: 'sprout',
    title: 'Recuperação de Área',
    description: 'Terras degradadas que estão em processo de reflorestamento ou regeneração natural monitorada através de satélites.',
  },
  {
    id: 'agrofloresta',
    icon: 'trees',
    title: 'Sistemas Agroflorestais',
    description: 'Integração de árvores e arbustos nas áreas de cultivo e pastagem, melhorando a saúde do solo e sequestrando carbono.',
  },
]

// Etapas do modelo coletivo
export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Satélite',
    description: 'Monitoramento espacial das áreas de manejo.',
    icon: 'satellite',
  },
  {
    id: 2,
    title: 'Cooperativa',
    description: 'Agrupamento dos dados e formalização técnica.',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Verificação',
    description: 'Auditoria independente dos créditos gerados.',
    icon: 'clipboard',
  },
  {
    id: 4,
    title: 'Receita',
    description: 'Venda no mercado e distribuição financeira.',
    icon: 'camera',
  },
]
