/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Raiz Viva — Design System
        'verde-raiz':      '#2D6A4F',
        'verde-claro':     '#52B788',
        'verde-menta':     '#95D5B2',
        'bege-terra':      '#F4ECD8',
        'terracota':       '#C1440E',
        'terracota-suave': '#F4A261',
        'amarelo-seco':    '#E9C46A',
        'carbon':          '#1B2A22',
        'cinza-solo':      '#6B7280',
        'branco-campo':    '#FAFAF7',
        'borda-suave':     '#E5E0D5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2rem',    { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.5rem',  { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'body-l': ['1rem',        { lineHeight: '1.5', fontWeight: '400' }],
        'body-s': ['0.875rem',    { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem',   { lineHeight: '1.5', fontWeight: '300' }],
        'btn':     ['0.875rem',  { lineHeight: '1',   fontWeight: '600' }],
      },
      borderRadius: {
        'card':   '12px',
        'input':  '8px',
        'btn':    '24px',
        'badge':  '4px',
      },
      boxShadow: {
        'card':  '0 2px 12px rgba(0,0,0,0.08)',
        'modal': '0 8px 32px rgba(0,0,0,0.16)',
      },
      spacing: {
        '4.5': '18px',
      },
    },
  },
  plugins: [],
}
