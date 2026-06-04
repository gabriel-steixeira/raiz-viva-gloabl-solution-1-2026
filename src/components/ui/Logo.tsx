import React from 'react'

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
      src={`${import.meta.env.BASE_URL}images/logo.png`}
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
