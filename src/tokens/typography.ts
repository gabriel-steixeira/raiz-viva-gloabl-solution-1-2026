/**
 * Raiz Viva — Design Tokens: Tipografia
 * Fonte: agent/raiz_viva_design_skill.md
 */
export const typography = {
  fontFamily: "'Inter', sans-serif",
  weights: {
    light:    300,
    regular:  400,
    semibold: 600,
    bold:     700,
  },
  sizes: {
    h1:      { size: '2rem',       lineHeight: '1.2' },
    h2:      { size: '1.5rem',     lineHeight: '1.2' },
    h3:      { size: '1.25rem',    lineHeight: '1.2' },
    bodyL:   { size: '1rem',       lineHeight: '1.5' },
    bodyS:   { size: '0.875rem',   lineHeight: '1.5' },
    caption: { size: '0.75rem',    lineHeight: '1.5' },
    btn:     { size: '0.875rem',   lineHeight: '1'   },
  },
} as const
