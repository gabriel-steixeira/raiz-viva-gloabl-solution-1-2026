/**
 * Raiz Viva — Design Tokens: Espaçamento, Radii & Sombras
 * ─────────────────────────────────────────────────────────────
 * Todos os valores de spacing, border-radius e box-shadow
 * estão centralizados aqui e no tailwind.config.js.
 *
 * Para uso via Tailwind: rounded-card, shadow-card, etc.
 * Para uso via style={}: import { spacing, radii, shadows }
 * ──────────────────────────────────────────────────────────────
 */

// ── Escala de espaçamentos ────────────────────────────────────
export const spacing = {
  /** 4px — micro (ícone + label) */
  xs:  '4px',
  /** 8px — pequeno (padding interno de chip) */
  sm:  '8px',
  /** 12px — compacto (gap entre itens de lista) */
  md:  '12px',
  /** 16px — padrão (padding de card) */
  base:'16px',
  /** 24px — médio (gap entre cards) */
  lg:  '24px',
  /** 32px — grande (gap entre seções) */
  xl:  '32px',
  /** 48px — extra (espaço de hero) */
  '2xl':'48px',
  /** 64px — máximo (separação de blocos maiores) */
  '3xl':'64px',
} as const

// ── Border Radius ─────────────────────────────────────────────
export const radii = {
  /** Badges, chips, muito pequenos */
  badge:    '4px',
  /** Inputs, selects */
  input:    '8px',
  /** Ícones quadrados de card */
  icon:     '8px',
  /** Cards padrão */
  card:     '12px',
  /** Cards de seção, heroes */
  section:  '16px',
  /** Cards maiores, seções hero */
  xl:       '20px',
  /** Botões, pílulas */
  btn:      '24px',
  /** Totalmente redondo (avatares, pílulas) */
  full:     '9999px',
} as const

// ── Sombras ─────────────────────────────────────────────────
export const shadows = {
  /** Cards padrão */
  card:    '0 2px 12px rgba(0, 0, 0, 0.08)',
  /** Cards de seção */
  section: '0px 4px 20px -2px rgba(16, 31, 23, 0.04)',
  /** Modais, popovers */
  modal:   '0 8px 32px rgba(0, 0, 0, 0.16)',
  /** Nenhuma sombra */
  none:    'none',
} as const

// ── Grid ─────────────────────────────────────────────────────
export const grid = {
  /** Largura máxima de referência */
  maxWidth: '1440px',
  /** Colunas base */
  columns: 12,
  /** Gutter entre colunas */
  gutter: '24px',
  /** Margem lateral da content area */
  margin: {
    sm:  '24px',
    md:  '40px',
    lg:  '80px',
  },
} as const

// ── Breakpoints ───────────────────────────────────────────────
export const breakpoints = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl': '1440px',
} as const

// ── Sidebar ───────────────────────────────────────────────────
export const layout = {
  /** Largura fixa da sidebar */
  sidebarWidth: '280px',
  /** Altura mínima da TopBar */
  topBarHeight: '72px',
  /** Altura mínima da FilterBar */
  filterBarHeight: '56px',
} as const
