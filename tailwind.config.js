/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ── Cores ─────────────────────────────────────────────────
      // Espelha src/tokens/colors.ts — ÚNICA fonte de verdade
      colors: {
        // Verdes Primários
        'verde-raiz':      '#2D6A4F',
        'verde-claro':     '#52B788',
        'verde-menta':     '#95D5B2',
        'verde-profundo':  '#0F5238',
        'verde-carbon':    '#1B2A22',

        // Background / Superfície
        'bege-terra':      '#F4ECD8',
        'branco-campo':    '#FAFAF7',

        // Alerta / Risco
        'terracota':        '#C1440E',
        'terracota-suave':  '#F4A261',
        'terracota-escuro': '#832800',

        // Atenção
        'amarelo-seco':    '#E9C46A',

        // Texto
        'carbon':          '#1B2A22',   // alias de verde-carbon (retrocompatibilidade)
        'cinza-solo':      '#6B7280',   // alias de text-secondary (retrocompatibilidade)
        'text-forte':      '#101F17',
        'text-medio':      '#404943',
        'text-sutil':      '#707973',

        // Bordas
        'borda-suave':     '#E5E0D5',

        // Superfícies nomeadas
        'surface-verde-suave': '#F0FAF4',
        'surface-verde-claro': '#ECFEF1',
        'surface-verde-pale':  '#D5E7DA',
        'surface-bege-verde':  '#EAF3EE',

        // ISS Risk (para uso em JIT)
        'iss-baixo':    '#D8F3DC',
        'iss-moderado': '#FFF3CD',
        'iss-alto':     '#FFE0D5',
        'iss-critico':  '#C1440E',
      },

      // ── Fontes ────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // ── Escala tipográfica ─────────────────────────────────────
      // Espelha src/tokens/typography.ts
      fontSize: {
        'h1':      ['2rem',       { lineHeight: '1.2', fontWeight: '700' }],
        'h2':      ['1.5rem',     { lineHeight: '1.2', fontWeight: '700' }],
        'h3':      ['1.25rem',    { lineHeight: '1.2', fontWeight: '600' }],
        'body-l':  ['1rem',       { lineHeight: '1.5', fontWeight: '400' }],
        'body-s':  ['0.875rem',   { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem',    { lineHeight: '1.5', fontWeight: '300' }],
        'btn':     ['0.875rem',   { lineHeight: '1',   fontWeight: '600' }],
        'micro':   ['0.6875rem',  { lineHeight: '1.2', fontWeight: '500' }],
        'display': ['2.5rem',     { lineHeight: '1.1', fontWeight: '700' }],
      },

      // ── Border Radius ──────────────────────────────────────────
      // Espelha src/tokens/spacing.ts
      borderRadius: {
        'badge':   '4px',
        'input':   '8px',
        'icon':    '8px',
        'card':    '12px',
        'section': '16px',
        'xl':      '20px',
        'btn':     '24px',
      },

      // ── Sombras ────────────────────────────────────────────────
      boxShadow: {
        'card':    '0 2px 12px rgba(0,0,0,0.08)',
        'section': '0px 4px 20px -2px rgba(16,31,23,0.04)',
        'modal':   '0 8px 32px rgba(0,0,0,0.16)',
      },

      // ── Espaçamentos extras ─────────────────────────────────────
      spacing: {
        '4.5':  '18px',
        '18':   '72px',    // topbar height
        '70':   '280px',   // sidebar width
      },

      // ── Transições ─────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [],
}
