import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  link?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumb — Trilha de navegação para a plataforma
 * Exibe a hierarquia da página atual de forma elegante e clicável.
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 py-3 px-1 font-sans text-sm" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight
                size={14}
                className="flex-shrink-0"
                style={{ color: '#6B7280' }}
              />
            )}
            {isLast ? (
              <span className="font-semibold" style={{ color: '#1B2A22' }}>
                {item.label}
              </span>
            ) : item.link ? (
              <Link
                to={item.link}
                className="hover:underline transition-colors font-medium"
                style={{ color: '#2D6A4F' }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#6B7280' }}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
