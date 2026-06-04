import React from 'react'
import { Link } from 'react-router-dom'
import { Satellite, Leaf, Smartphone } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import CadastroForm from '@/components/cadastro/CadastroForm'

/**
 * Raiz Viva — Tela 1: Cadastro (versão Vitoria)
 * Rota: / → /cadastro | Pública | Sem sidebar
 *
 * Layout fiel ao Figma frame 12:2 (Vitoria):
 *  - Header: branco, logo à esquerda, "Já tenho conta" à direita
 *  - Hero 2 colunas dentro de card com border-radius 12px e sombra:
 *    - Coluna esquerda: fundo verde com foto overlay + gradient + benefits glassmorphism
 *    - Coluna direita: formulário branco
 */
export default function CadastroPage() {
  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFEF1 100%)' }}
    >

      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        className="flex items-center justify-between px-6 md:px-20 bg-white"
        style={{
          borderBottom: '1px solid rgba(191,200,193,0.20)',
          minHeight: '73px',
        }}
      >
        <Logo variant="dark" height={45} />
        <nav aria-label="Ações do usuário">
          <Link
            to="/mapa"
            className="text-sm font-medium transition-colors hover:underline"
            style={{ color: '#0F5238', letterSpacing: '0.14px', lineHeight: '20px' }}
            aria-label="Ir para o mapa — já tenho conta"
          >
            Já tenho conta
          </Link>
        </nav>
      </header>

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <main className="flex-1 flex items-stretch px-4 md:px-12 lg:px-20 py-8 md:py-14">

        {/* Card container com sombra */}
        <div
          className="flex flex-col lg:flex-row w-full overflow-hidden"
          style={{
            borderRadius: '12px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          }}
        >

          {/* ── COLUNA ESQUERDA: pitch com foto de fundo ── */}
          <section
            className="relative flex flex-col justify-center lg:w-1/2 overflow-hidden"
            style={{ minHeight: '560px' }}
            aria-label="Proposta de valor do Raiz Viva"
          >
            {/* Foto de fundo (agricultor) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}images/agricultor-hero.jpg)`,
              }}
              role="img"
              aria-label="Agricultor familiar sorrindo no campo"
            />

            {/* Gradient overlay — escurece para legibilidade do texto */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(15,82,56,0.80) 0%, rgba(15,82,56,0.68) 100%)',
              }}
            />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col gap-8 px-8 md:px-16 py-12 md:py-16">
              {/* Headline — 48px Bold, fiel ao Figma */}
              <h1
                className="text-white font-bold"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: '1.1',
                  letterSpacing: '-1.2px',
                }}
              >
                Proteja sua lavoura<br />
                com alertas de<br />
                satélite
              </h1>

              {/* Subheadline */}
              <p
                className="max-w-[400px]"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.625',
                  color: 'rgba(236, 254, 241, 0.92)',
                }}
              >
                Receba avisos gratuitos de seca, calor e risco do solo direto no
                seu celular.
              </p>

              {/* Benefits */}
              <div className="flex flex-col gap-6 pt-4" role="list" aria-label="Benefícios da plataforma">
                <BenefitCard
                  icon={<Satellite size={24} strokeWidth={1.5} />}
                  title="Dados NASA"
                  description="Monitoramento orbital de alta precisão"
                />
                <BenefitCard
                  icon={<Leaf size={24} strokeWidth={1.5} />}
                  title="100% gratuito"
                  description="Sem taxas ou letras miúdas"
                />
                <BenefitCard
                  icon={<Smartphone size={24} strokeWidth={1.5} />}
                  title="SMS/WhatsApp/Voz"
                  description="Alertas onde você estiver"
                />
              </div>
            </div>
          </section>

          {/* ── COLUNA DIREITA: formulário branco ─────────── */}
          <section
            className="flex flex-col justify-center px-6 md:px-14 py-10 md:py-12 lg:w-1/2 bg-white"
            aria-label="Formulário de cadastro"
          >
            <div className="max-w-[448px] w-full mx-auto flex flex-col gap-8">
              <h2
                className="font-semibold"
                style={{
                  color: '#101F17',
                  fontSize: '32px',
                  lineHeight: '1.25',
                  letterSpacing: '-0.32px',
                }}
              >
                Criar conta gratuita
              </h2>
              <CadastroForm />
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

/**
 * BenefitCard — Cartão de benefício com estilo glassmorphism
 * Ícone em container com borda translúcida + texto branco
 * Contraste ajustado para WCAG AA sobre fundo escuro
 */
function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-center gap-5" role="listitem">
      {/* Ícone container — glassmorphism */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          backgroundColor: 'rgba(236, 254, 241, 0.1)',
          border: '1px solid rgba(236, 254, 241, 0.2)',
          color: '#92F7C3',
        }}
      >
        {icon}
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-1">
        <span
          className="font-semibold text-white"
          style={{ fontSize: '20px', lineHeight: '1.4' }}
        >
          {title}
        </span>
        <span
          className="text-sm"
          style={{ color: 'rgba(236, 254, 241, 0.85)' }}
        >
          {description}
        </span>
      </div>
    </div>
  )
}
