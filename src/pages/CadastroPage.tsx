import React from 'react'
import { Link } from 'react-router-dom'
import { Satellite, Leaf, Smartphone } from 'lucide-react'
import { Logo } from '@/components/ui'
import BenefitItem from '@/components/cadastro/BenefitItem'
import CadastroForm from '@/components/cadastro/CadastroForm'

/**
 * Raiz Viva — Tela 1: Cadastro
 * Rota: /cadastro | Pública | Sem sidebar
 *
 * Layout hero 2 colunas (1440px):
 *  - Coluna esquerda: fundo verde-raiz, pitch + benefícios
 *  - Coluna direita:  fundo branco-campo, formulário
 */
export default function CadastroPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        className="h-[72px] flex items-center justify-between px-8"
        style={{ backgroundColor: '#2D6A4F' }}
      >
        <Logo variant="light" height={40} />
        <Link
          to="/mapa"
          className="text-body-s font-semibold text-verde-menta hover:text-white transition-colors"
        >
          Já tenho conta
        </Link>
      </header>

      {/* ── HERO 2 COLUNAS ─────────────────────────────── */}
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Coluna Esquerda — pitch */}
        <section
          className="flex flex-col justify-center gap-10 px-10 py-16 lg:px-16 lg:py-24 lg:w-1/2"
          style={{ backgroundColor: '#2D6A4F' }}
        >
          {/* Tagline */}
          <div className="flex flex-col gap-4">
            <h1 className="text-h1 font-bold text-white leading-tight">
              Proteja sua lavoura com alertas de satélite
            </h1>
            <p className="text-body-l text-verde-menta">
              Receba avisos gratuitos de seca, calor e risco do solo direto no
              seu celular. Dados da NASA, linguagem simples.
            </p>
          </div>

          {/* Benefícios */}
          <div className="flex flex-col gap-6">
            <BenefitItem
              icon={<Satellite size={24} strokeWidth={1.5} className="text-verde-menta" />}
              title="Dados de satélite NASA"
              description="SMAP, MODIS, GPM IMERG e Sentinel-2 processados em tempo real"
            />
            <BenefitItem
              icon={<Leaf size={24} strokeWidth={1.5} className="text-verde-menta" />}
              title="100% gratuito para agricultores"
              description="Alertas de risco sempre grátis, sem burocracia"
            />
            <BenefitItem
              icon={<Smartphone size={24} strokeWidth={1.5} className="text-verde-menta" />}
              title="WhatsApp, SMS ou ligação"
              description="Você escolhe como quer ser avisado"
            />
          </div>

          {/* Depoimento rápido */}
          <blockquote className="border-l-4 border-verde-claro pl-4">
            <p className="text-body-s text-verde-menta italic">
              &ldquo;Quando recebi o aviso, ainda tinha tempo de salvar o feijão.&rdquo;
            </p>
            <footer className="text-caption text-[#95D5B2] mt-1">
              — Dona Maria, Quixadá, CE
            </footer>
          </blockquote>
        </section>

        {/* Coluna Direita — formulário */}
        <section className="flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-24 lg:w-1/2 bg-bege-terra">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-h2 font-bold text-carbon mb-8">
              Criar conta gratuita
            </h2>
            <CadastroForm />
          </div>
        </section>
      </main>
    </div>
  )
}
