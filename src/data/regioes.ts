import type { RegionData } from '@/components/mapa/RegionSidePanel'

/**
 * Mock de dados de regiões para a Tela 2 — Mapa Nacional
 * Em produção: substituir por chamada à API NASA/backend
 */
export const regioesMock: RegionData[] = [
  { id: 'CE', nome: 'Ceará',               estado: 'CE — Nordeste',  iss: 34,  tendencia: 'caindo',  familias: 12450, ultimaAtualizacao: 'há 3h' },
  { id: 'PE', nome: 'Pernambuco',          estado: 'PE — Nordeste',  iss: 41,  tendencia: 'estavel', familias: 9800,  ultimaAtualizacao: 'há 3h' },
  { id: 'BA', nome: 'Bahia',               estado: 'BA — Nordeste',  iss: 55,  tendencia: 'subindo', familias: 18200, ultimaAtualizacao: 'há 4h' },
  { id: 'PI', nome: 'Piauí',               estado: 'PI — Nordeste',  iss: 28,  tendencia: 'caindo',  familias: 6300,  ultimaAtualizacao: 'há 3h' },
  { id: 'MA', nome: 'Maranhão',            estado: 'MA — Nordeste',  iss: 62,  tendencia: 'subindo', familias: 11000, ultimaAtualizacao: 'há 5h' },
  { id: 'RN', nome: 'Rio Grande do Norte', estado: 'RN — Nordeste',  iss: 38,  tendencia: 'caindo',  familias: 4100,  ultimaAtualizacao: 'há 3h' },
  { id: 'PB', nome: 'Paraíba',             estado: 'PB — Nordeste',  iss: 45,  tendencia: 'estavel', familias: 5200,  ultimaAtualizacao: 'há 3h' },
  { id: 'SE', nome: 'Sergipe',             estado: 'SE — Nordeste',  iss: 70,  tendencia: 'subindo', familias: 2100,  ultimaAtualizacao: 'há 4h' },
  { id: 'AL', nome: 'Alagoas',             estado: 'AL — Nordeste',  iss: 60,  tendencia: 'estavel', familias: 3400,  ultimaAtualizacao: 'há 4h' },
  { id: 'GO', nome: 'Goiás',               estado: 'GO — Centro-Oeste', iss: 75, tendencia: 'estavel', familias: 7800, ultimaAtualizacao: 'há 2h' },
  { id: 'MT', nome: 'Mato Grosso',         estado: 'MT — Centro-Oeste', iss: 15, tendencia: 'caindo',  familias: 5500, ultimaAtualizacao: 'há 2h' },
  { id: 'MS', nome: 'Mato Grosso do Sul',  estado: 'MS — Centro-Oeste', iss: 72, tendencia: 'estavel', familias: 4200, ultimaAtualizacao: 'há 2h' },
  { id: 'MG', nome: 'Minas Gerais',        estado: 'MG — Sudeste',  iss: 65,  tendencia: 'subindo', familias: 22000, ultimaAtualizacao: 'há 2h' },
  { id: 'SP', nome: 'São Paulo',           estado: 'SP — Sudeste',  iss: 78,  tendencia: 'estavel', familias: 15000, ultimaAtualizacao: 'há 1h' },
  { id: 'PR', nome: 'Paraná',              estado: 'PR — Sul',      iss: 82,  tendencia: 'subindo', familias: 12000, ultimaAtualizacao: 'há 1h' },
  { id: 'RS', nome: 'Rio Grande do Sul',   estado: 'RS — Sul',      iss: 77,  tendencia: 'estavel', familias: 14500, ultimaAtualizacao: 'há 1h' },
  { id: 'PA', nome: 'Pará',                estado: 'PA — Norte',    iss: 85,  tendencia: 'subindo', familias: 9200,  ultimaAtualizacao: 'há 3h' },
  { id: 'AM', nome: 'Amazonas',            estado: 'AM — Norte',    iss: 88,  tendencia: 'estavel', familias: 3100,  ultimaAtualizacao: 'há 6h' },
]

export const biomas = [
  { value: 'caatinga',       label: 'Caatinga' },
  { value: 'cerrado',        label: 'Cerrado' },
  { value: 'amazonia',       label: 'Amazônia' },
  { value: 'mata-atlantica', label: 'Mata Atlântica' },
  { value: 'pampa',          label: 'Pampa' },
  { value: 'pantanal',       label: 'Pantanal' },
]
