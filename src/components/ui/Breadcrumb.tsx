import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumb — Trilha de navegação reutilizável
 * Reutilizável em: Tela 3, Tela 4
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-1 text-body-s ${className}`}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <ChevronRight size={14} strokeWidth={1.5} style={{ color: '#6B7280' }} />
          )}
          {item.to ? (
            <Link
              to={item.to}
              className="font-medium hover:underline"
              style={{ color: '#2D6A4F' }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: '#1B2A22' }} className="font-semibold">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
