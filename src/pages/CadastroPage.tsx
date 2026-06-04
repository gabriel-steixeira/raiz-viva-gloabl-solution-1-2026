import React from 'react'
import { Link } from 'react-router-dom'
import { Satellite, Leaf, Smartphone } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import BenefitItem from '@/components/cadastro/BenefitItem'
import CadastroForm from '@/components/cadastro/CadastroForm'

/**
 * Raiz Viva — Tela 1: Cadastro
 * Rota: / → /cadastro | Pública | Sem sidebar
 *
 * Layout fiel ao Figma frame 8:2:
 *  - Header: branco, logo à esquerda, "Já tenho conta" à direita
 *  - Hero: coluna esquerda verde-raiz (pitch + benefícios + depoimento)
 *          coluna direita branco (formulário)
 */
export default function CadastroPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        className="h-[72px] flex items-center justify-between px-20 bg-white"
        style={{ borderBottom: '1px solid rgba(191,200,193,0.20)' }}
      >
        <Logo variant="dark" height={45} />
        <Link
          to="/mapa"
          className="text-sm font-medium leading-5 tracking-[0.14px] transition-colors hover:opacity-80"
          style={{ color: '#0F5238' }}
        >
          Já tenho conta
        </Link>
      </header>

      {/* ── HERO 2 COLUNAS ─────────────────────────────── */}
      <main className="flex flex-1 flex-col lg:flex-row">

        {/* ── COLUNA ESQUERDA: pitch verde ─────────────── */}
        <section
          className="flex flex-col justify-center gap-10 px-16 py-24 lg:w-1/2"
          style={{ backgroundColor: '#0F5238' }}
        >
          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h1
              className="text-[2rem] font-bold leading-tight text-white"
              style={{ letterSpacing: '-0.32px' }}
            >
              Proteja sua lavoura com alertas de satélite
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#95D5B2' }}>
              Receba avisos gratuitos de seca, calor e risco do solo direto no
              seu celular. Dados da NASA, linguagem simples.
            </p>
          </div>

          {/* Benefícios */}
          <div className="flex flex-col gap-6">
            <BenefitItem
              icon={<Satellite size={22} strokeWidth={1.5} style={{ color: '#95D5B2' }} />}
              title="Dados de satélite NASA"
              description="SMAP, MODIS, GPM IMERG e Sentinel-2 processados em tempo real"
            />
            <BenefitItem
              icon={<Leaf size={22} strokeWidth={1.5} style={{ color: '#95D5B2' }} />}
              title="100% gratuito para agricultores"
              description="Alertas de risco sempre grátis, sem burocracia"
            />
            <BenefitItem
              icon={<Smartphone size={22} strokeWidth={1.5} style={{ color: '#95D5B2' }} />}
              title="WhatsApp, SMS ou ligação"
              description="Você escolhe como quer ser avisado"
            />
          </div>

          {/* Depoimento */}
          <blockquote
            className="border-l-4 pl-4"
            style={{ borderColor: '#52B788' }}
          >
            <p className="text-sm italic" style={{ color: '#95D5B2' }}>
              &ldquo;Quando recebi o aviso, ainda tinha tempo de salvar o feijão.&rdquo;
            </p>
            <footer className="text-xs mt-1" style={{ color: '#74C69D' }}>
              — Dona Maria, Quixadá, CE
            </footer>
          </blockquote>
        </section>

        {/* ── COLUNA DIREITA: formulário branco ─────────── */}
        <section
          className="flex flex-col justify-center px-16 py-16 lg:w-1/2"
          style={{ backgroundColor: '#FAFAF7' }}
        >
          <div className="max-w-[448px] w-full mx-auto">
            <h2
              className="text-[2rem] font-semibold mb-8"
              style={{
                color: '#101F17',
                letterSpacing: '-0.32px',
                lineHeight: '40px',
              }}
            >
              Criar conta gratuita
            </h2>
            <CadastroForm />
          </div>
        </section>

      </main>
    </div>
  )
}
