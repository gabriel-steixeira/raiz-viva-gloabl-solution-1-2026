/**
 * Raiz Viva — Design Tokens: Cores
 * ─────────────────────────────────────────────────────────────
 * Este arquivo é a ÚNICA fonte de verdade para todas as cores
 * da plataforma. Use os tokens abaixo em vez de hexadecimais
 * hardcoded em components e pages.
 *
 * Padrão de importação:
 *   import { colors } from '@/tokens/colors'
 *   style={{ backgroundColor: colors.verde.raiz }}
 *
 * ── Escala de cores do design system ──────────────────────────
 * Primárias (Verde):   verde.raiz  →  verde.menta
 * Background:          bege.terra  |  branco.campo
 * Alertas:             terracota   |  terracota.suave
 * Atenção:             amarelo.seco
 * Texto:               carbon (escuro) | cinza.solo (secundário)
 * Superfícies:         borda.suave
 * ──────────────────────────────────────────────────────────────
 */

export const colors = {
  // ── Verde (Primárias) ──────────────────────────────────────
  verde: {
    /** Cor primária: botões CTA, sidebar ativa, cabeçalhos */
    raiz:  '#2D6A4F',
    /** Hover states, ISS Baixo (badge), destaques positivos */
    claro: '#52B788',
    /** Backgrounds de sucesso, fills suaves, ícones sobre escuro */
    menta: '#95D5B2',
    /** Verde profundo para heroes escuros */
    profundo: '#0F5238',
    /** Verde muito escuro para overlay e sidebar bg */
    carbon: '#1B2A22',
  },

  // ── Background / Superfície ────────────────────────────────
  bege: {
    /** Background geral das telas e hover secundário */
    terra: '#F4ECD8',
  },

  branco: {
    /** Cards, superfícies elevadas, textos sobre fundo escuro */
    campo: '#FAFAF7',
  },

  // ── Alerta / Risco ─────────────────────────────────────────
  terracota: {
    /** Alertas críticos, ISS alto (0–39), botão danger */
    puro:   '#C1440E',
    /** ISS alto/moderado, warnings secundários */
    suave:  '#F4A261',
    /** Dark para texto de erro em fundo branco */
    escuro: '#832800',
  },

  // ── Atenção ────────────────────────────────────────────────
  /** ISS moderado (40–69), badges de atenção */
  amarelo: {
    seco: '#E9C46A',
  },

  // ── Texto ──────────────────────────────────────────────────
  texto: {
    /** Textos principais e títulos */
    primario:   '#1B2A22',
    /** Textos secundários, placeholders, labels */
    secundario: '#6B7280',
    /** Texto forte sobre surfaces brancas (alternativa a primario) */
    forte:      '#101F17',
    /** Texto médio/suave sobre surfaces brancas */
    medio:      '#404943',
    /** Texto de ajuda / muito sutil */
    sutil:      '#707973',
  },

  // ── Bordas e Divisores ─────────────────────────────────────
  borda: {
    /** Bordas de cards e inputs */
    suave: '#E5E0D5',
    /** Bordas em contexts verdes (com transparência) */
    verde: 'rgba(191, 201, 193, 0.3)',
  },

  // ── ISS Badge — cores fixas de risco ──────────────────────
  iss: {
    baixo: {
      /** ISS 70–100 */
      bg:   '#D8F3DC',
      text: '#2D6A4F',
    },
    moderado: {
      /** ISS 40–69 */
      bg:   '#FFF3CD',
      text: '#856404',
    },
    alto: {
      /** ISS 20–39 */
      bg:   '#FFE0D5',
      text: '#C1440E',
    },
    critico: {
      /** ISS 0–19 */
      bg:   '#C1440E',
      text: '#FAFAF7',
    },
  },

  // ── Glassmorphism / Overlays ───────────────────────────────
  overlay: {
    branco10:  'rgba(255, 255, 255, 0.10)',
    branco15:  'rgba(255, 255, 255, 0.15)',
    branco20:  'rgba(255, 255, 255, 0.20)',
    verde80:   'rgba(27, 42, 34, 0.80)',
    verde85:   'rgba(27, 42, 34, 0.85)',
    terracota: 'rgba(193, 68, 14, 0.12)',
  },

  // ── Fundos de seção ───────────────────────────────────────
  surface: {
    /** Background suave verde para seções e cards internos */
    verdeSuave:  '#F0FAF4',
    /** Background suave verde para pages (content area) */
    verdeClaro:  '#ECFEF1',
    /** Background levemente verde para layout raiz */
    verdePale:   '#D5E7DA',
    /** Background levemente verde para cadastro/splash */
    begeVerde:   '#EAF3EE',
    /** Branco puro — cards e seções principais */
    branco:      '#FFFFFF',
  },
} as const

// ── Re-exporta cores individuais para uso direto ──────────────
export const {
  verde,
  bege,
  branco,
  terracota,
  amarelo,
  texto,
  borda,
  iss,
  overlay,
  surface,
} = colors

// ── Gradientes pré-definidos ───────────────────────────────────
export const gradients = {
  /** Hero do Carbono Solidário */
  carbonoHero: 'linear-gradient(135deg, #2D6A4F 0%, #1B4D35 50%, #0F5238 100%)',
  /** Hero escuro do Impacto Social */
  impactoHero: '#0F5238',
  /** Sidebar lateral */
  sidebar: '#1B2A22',
} as const
