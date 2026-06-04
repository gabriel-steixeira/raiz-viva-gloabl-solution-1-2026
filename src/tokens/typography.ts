/**
 * Raiz Viva — Design Tokens: Tipografia
 * ─────────────────────────────────────────────────────────────
 * Família: Inter (Google Fonts)
 * Configuração espelhada no tailwind.config.js (fontSize, fontFamily)
 *
 * Use os tokens abaixo quando precisar de valores via `style={}`:
 *   import { typography } from '@/tokens/typography'
 *   style={{ fontSize: typography.size.h1, fontWeight: typography.weight.bold }}
 *
 * Para classes Tailwind, use:
 *   text-h1 / text-h2 / text-h3
 *   text-body-l / text-body-s / text-caption / text-btn
 * ──────────────────────────────────────────────────────────────
 */

export const typography = {
  // ── Família ─────────────────────────────────────────────────
  family: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
  },

  // ── Escala de tamanhos ───────────────────────────────────────
  size: {
    /** H1 — Títulos principais de página */
    h1: '2rem',          // 32px
    /** H2 — Subtítulos de seção */
    h2: '1.5rem',        // 24px
    /** H3 — Títulos de card */
    h3: '1.25rem',       // 20px
    /** Body L — Corpo de texto principal */
    bodyL: '1rem',       // 16px
    /** Body S — Texto secundário, labels */
    bodyS: '0.875rem',   // 14px
    /** Caption — Datas, fontes, metadados */
    caption: '0.75rem',  // 12px
    /** Button — Textos de botões e CTAs */
    btn: '0.875rem',     // 14px
    /** Micro — Badges, chips, muito pequeno */
    micro: '0.6875rem',  // 11px
    /** Display — Números KPI grandes (ex: impacto) */
    display: '2.5rem',   // 40px
  },

  // ── Pesos ─────────────────────────────────────────────────
  weight: {
    light:    '300',
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
    extrabold:'800',
  },

  // ── Line-heights ────────────────────────────────────────────
  lineHeight: {
    /** Headings */
    heading: '1.2',
    /** Body text */
    body: '1.5',
    /** Relaxado — para parágrafos longos */
    relaxed: '1.65',
    /** Compacto — badges, labels */
    tight: '1',
  },

  // ── Letter-spacing ──────────────────────────────────────────
  tracking: {
    /** Labels uppercase */
    wide: '0.05em',
    /** Badges muito pequenos */
    wider: '0.08em',
    /** Títulos grandes */
    tight: '-0.03em',
  },
} as const

// ── Estilos compostos — use em `style={}` ─────────────────────
export const textStyles = {
  h1: {
    fontSize: typography.size.h1,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.heading,
    letterSpacing: typography.tracking.tight,
  },
  h2: {
    fontSize: typography.size.h2,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.heading,
    letterSpacing: typography.tracking.tight,
  },
  h3: {
    fontSize: typography.size.h3,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.lineHeight.heading,
  },
  bodyL: {
    fontSize: typography.size.bodyL,
    fontWeight: typography.weight.regular,
    lineHeight: typography.lineHeight.body,
  },
  bodyS: {
    fontSize: typography.size.bodyS,
    fontWeight: typography.weight.regular,
    lineHeight: typography.lineHeight.body,
  },
  caption: {
    fontSize: typography.size.caption,
    fontWeight: typography.weight.light,
    lineHeight: typography.lineHeight.body,
  },
  btn: {
    fontSize: typography.size.btn,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.lineHeight.tight,
  },
  label: {
    fontSize: typography.size.caption,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.lineHeight.body,
    letterSpacing: typography.tracking.wide,
    textTransform: 'uppercase' as const,
  },
  kpi: {
    fontSize: typography.size.display,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.heading,
    letterSpacing: typography.tracking.tight,
  },
} as const
