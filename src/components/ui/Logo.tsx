import React from 'react'

/**
 * Raiz Viva — Componente: Logo
 *
 * Exibe o logotipo da plataforma.
 * variant 'light' usa versão sobre fundo escuro (filtro branco).
 * variant 'dark'  usa versão padrão.
 */
export interface LogoProps {
  variant?: 'light' | 'dark'
  height?: number
  className?: string
}

export default function Logo({
  variant = 'dark',
  height = 48,
  className = '',
}: LogoProps) {
  return (
    <img
      src="../../public/logo.jpg"
      alt="Raiz Viva"
      height={height}
      style={{
        height,
        width: 'auto',
        filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
      className={className}
    />
  )
}
