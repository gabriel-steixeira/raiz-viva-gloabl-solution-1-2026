/**
 * Raiz Viva — Design Tokens: Cores
 * Fonte: agent/raiz_viva_design_skill.md
 */
export const colors = {
  verdeRaiz:      '#2D6A4F',
  verdeClaro:     '#52B788',
  verdeMenta:     '#95D5B2',
  begeTerra:      '#F4ECD8',
  terracota:      '#C1440E',
  terracotaSuave: '#F4A261',
  amareloSeco:    '#E9C46A',
  carbon:         '#1B2A22',
  cinzaSolo:      '#6B7280',
  brancoCampo:    '#FAFAF7',
  bordaSuave:     '#E5E0D5',
} as const

/** Cores de risco ISS */
export const issRiskColors = {
  baixo:    { bg: '#D8F3DC', text: '#2D6A4F' },   // ISS 70–100
  moderado: { bg: '#FFF3CD', text: '#856404' },   // ISS 40–69
  alto:     { bg: '#FFE0D5', text: '#C1440E' },   // ISS 0–39
  critico:  { bg: '#C1440E', text: '#FAFAF7' },   // ISS crítico
} as const

export type IssRiskLevel = keyof typeof issRiskColors
