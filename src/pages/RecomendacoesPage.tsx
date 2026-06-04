import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  AlertTriangle,
  Droplet,
  Tractor,
  Truck,
  Home,
  CheckCircle2,
  Sprout,
  LucideIcon
} from 'lucide-react'
import AppLayout from '@/components/ui/AppLayout'
import TopBar from '@/components/ui/TopBar'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { regioesMock } from '@/data/regioes'

// Cidades de referência agrícola por estado
interface CidadeRef {
  cidade: string
  uf: string
  microrregiao: string
}

const cidadesReferencia: Record<string, CidadeRef> = {
  CE: { cidade: 'Quixadá', uf: 'CE', microrregiao: 'Sertão Central' },
  PE: { cidade: 'Petrolina', uf: 'PE', microrregiao: 'Sertão do São Francisco' },
  BA: { cidade: 'Juazeiro', uf: 'BA', microrregiao: 'Sertão Baiano' },
  MT: { cidade: 'Sorriso', uf: 'MT', microrregiao: 'Médio Norte' },
  MS: { cidade: 'Dourados', uf: 'MS', microrregiao: 'Grande Dourados' },
  SP: { cidade: 'Ribeirão Preto', uf: 'SP', microrregiao: 'Norte Paulista' },
  RS: { cidade: 'Passo Fundo', uf: 'RS', microrregiao: 'Planalto Médio' },
  AM: { cidade: 'Tefé', uf: 'AM', microrregiao: 'Médio Solimões' },
  MG: { cidade: 'Patrocínio', uf: 'MG', microrregiao: 'Triângulo Mineiro' },
  GO: { cidade: 'Rio Verde', uf: 'GO', microrregiao: 'Sudoeste Goiano' },
  PR: { cidade: 'Cascavel', uf: 'PR', microrregiao: 'Oeste Paranaense' },
  MA: { cidade: 'Balsas', uf: 'MA', microrregiao: 'Gerais de Balsas' },
  PI: { cidade: 'Picos', uf: 'PI', microrregiao: 'Vale do Guaribas' },
  RN: { cidade: 'Caicó', uf: 'RN', microrregiao: 'Seridó Ocidental' },
  PB: { cidade: 'Sousa', uf: 'PB', microrregiao: 'Sousa' },
  SE: { cidade: 'Lagarto', uf: 'SE', microrregiao: 'Agreste de Lagarto' },
  AL: { cidade: 'Arapiraca', uf: 'AL', microrregiao: 'Agreste Alagoano' },
  PA: { cidade: 'Paragominas', uf: 'PA', microrregiao: 'Paragominas' },
}

function obterCidadeReferencia(regiaoId: string, nomeEstado: string): CidadeRef {
  const uf = regiaoId.toUpperCase()
  if (cidadesReferencia[uf]) {
    return cidadesReferencia[uf]
  }
  return {
    cidade: `Região de ${nomeEstado}`,
    uf: uf,
    microrregiao: 'Zona Agrícola Local'
  }
}

interface Recomendacao {
  id: string
  titulo: string
  descricao: string
  nivelUrgencia: 'URGENTE' | 'IMPORTANTE' | 'RECOMENDADO' | 'PREVENTIVO'
  categoria: string
  icone: LucideIcon
}

export default function RecomendacoesPage() {
  const { regiaoId } = useParams<{ regiaoId: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'imediatas' | 'semana' | 'mes'>('imediatas')
  const [concluidas, setConcluidas] = useState<Record<string, boolean>>({})

  // Encontrar estado nos dados mockados
  const estadoData = regioesMock.find((r) => r.id === regiaoId?.toUpperCase())

  if (!estadoData) {
    return (
      <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 p-10 bg-[#FAFAF7]">
          <h2 className="text-2xl font-bold text-[#1B2A22]">Região não encontrada</h2>
          <p className="text-[#6B7280]">O estado "{regiaoId}" não está mapeado no sistema.</p>
          <button
            onClick={() => navigate('/mapa')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: '#2D6A4F' }}
          >
            <ArrowLeft size={16} /> Voltar ao Mapa
          </button>
        </div>
      </AppLayout>
    )
  }

  const infoLocal = obterCidadeReferencia(estadoData.id, estadoData.nome)

  // Classificação de risco a partir do ISS
  let risco: 'baixo' | 'moderado' | 'critico' = 'baixo'
  let labelRisco = 'Risco BAIXO'
  let corRisco = '#2D6A4F'
  let bgRiscoBadge = '#D1FAE5'
  let textRiscoBadge = '#065F46'

  if (estadoData.iss < 40) {
    risco = 'critico'
    labelRisco = 'Risco ALTO'
    corRisco = '#C1440E'
    bgRiscoBadge = '#FFE5E5'
    textRiscoBadge = '#900A0A'
  } else if (estadoData.iss < 70) {
    risco = 'moderado'
    labelRisco = 'Risco MODERADO'
    corRisco = '#D97706'
    bgRiscoBadge = '#FEF3C7'
    textRiscoBadge = '#B45309'
  }

  // Obter Recomendações Dinâmicas (no caso crítico, bate 100% com o Figma)
  const obterRecomendacoes = (): Recomendacao[] => {
    if (risco === 'critico') {
      return {
        imediatas: [
          {
            id: 'crit-i-1',
            titulo: 'Antecipar colheita do feijão em estágio final',
            descricao: 'Previsão de chuvas fortes nas próximas 48h pode comprometer a safra madura.',
            nivelUrgencia: 'URGENTE' as const,
            categoria: 'Feijão',
            icone: Tractor
          },
          {
            id: 'crit-i-2',
            titulo: 'Irrigar apenas nas horas frescas',
            descricao: 'Alta evapotranspiração no período da tarde reduz eficiência. Priorize início da manhã ou noite.',
            nivelUrgencia: 'URGENTE' as const,
            categoria: 'Manejo de Água',
            icone: Droplet
          },
          {
            id: 'crit-i-3',
            titulo: 'Cobrir solo com mulching',
            descricao: 'Necessário para reter umidade e reduzir temperatura do solo nas áreas recém-plantadas.',
            nivelUrgencia: 'IMPORTANTE' as const,
            categoria: 'Solo',
            icone: Sprout
          },
          {
            id: 'crit-i-4',
            titulo: 'Acionar cooperativa para apoio logístico',
            descricao: 'Garantir transporte antecipado para a safra de feijão para evitar perdas pós-colheita.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Logística',
            icone: Truck
          },
          {
            id: 'crit-i-5',
            titulo: 'Verificar e proteger nível das cisternas',
            descricao: 'Garantir captação eficiente das próximas chuvas sem risco de transbordamento.',
            nivelUrgencia: 'PREVENTIVO' as const,
            categoria: 'Infraestrutura',
            icone: Home
          }
        ],
        semana: [
          {
            id: 'crit-s-1',
            titulo: 'Cobrir tanques de armazenamento comunitários',
            descricao: 'Reduzir perda por evaporação direta sob altas temperaturas de superfície.',
            nivelUrgencia: 'URGENTE' as const,
            categoria: 'Manejo de Água',
            icone: Droplet
          },
          {
            id: 'crit-s-2',
            titulo: 'Aplicar biofertilizante à base de silício',
            descricao: 'Aumenta a tolerância das plantas contra o estresse térmico prolongado.',
            nivelUrgencia: 'IMPORTANTE' as const,
            categoria: 'Solo',
            icone: Sprout
          }
        ],
        mes: [
          {
            id: 'crit-m-1',
            titulo: 'Planejar cultivo consorciado com Palma Forrageira',
            descricao: 'Implementar a palma como barreira física e reserva estratégica de água para o rebanho.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Planejamento',
            icone: Sprout
          },
          {
            id: 'crit-m-2',
            titulo: 'Revisar tubulações e filtros de gotejamento',
            descricao: 'Evitar perdas por vazamento invisível e garantir uniformidade na aplicação de água.',
            nivelUrgencia: 'PREVENTIVO' as const,
            categoria: 'Infraestrutura',
            icone: Home
          }
        ]
      }[activeTab]
    } else if (risco === 'moderado') {
      return {
        imediatas: [
          {
            id: 'mod-i-1',
            titulo: 'Ajustar frequência de irrigação localizada',
            descricao: 'Reduzir evapotranspiração mantendo ciclos curtos de irrigação no amanhecer.',
            nivelUrgencia: 'IMPORTANTE' as const,
            categoria: 'Manejo de Água',
            icone: Droplet
          },
          {
            id: 'mod-i-2',
            titulo: 'Monitorar plantas espontâneas concorrentes',
            descricao: 'Remover plantas concorrentes para otimizar o uso da água disponível no solo.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Solo',
            icone: Sprout
          },
          {
            id: 'mod-i-3',
            titulo: 'Revisar nível das cisternas domésticas',
            descricao: 'Verificar reservas e direcionar calhas para captação emergencial de orvalho e garoa.',
            nivelUrgencia: 'PREVENTIVO' as const,
            categoria: 'Infraestrutura',
            icone: Home
          }
        ],
        semana: [
          {
            id: 'mod-s-1',
            titulo: 'Aplicar cobertura morta fina (mulching orgânico)',
            descricao: 'Ajuda a diminuir a evaporação direta da água e preserva a biologia do solo.',
            nivelUrgencia: 'IMPORTANTE' as const,
            categoria: 'Solo',
            icone: Sprout
          },
          {
            id: 'mod-s-2',
            titulo: 'Coordenar colheita parcial com associados',
            descricao: 'Evitar gargalos logísticos se as previsões indicarem avanço de seca na semana seguinte.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Logística',
            icone: Truck
          }
        ],
        mes: [
          {
            id: 'mod-m-1',
            titulo: 'Adquirir sementes precoces adaptadas',
            descricao: 'Variedades que completam ciclo com menor consumo de água para a safra seguinte.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Planejamento',
            icone: Sprout
          }
        ]
      }[activeTab]
    } else {
      // Risco Baixo
      return {
        imediatas: [
          {
            id: 'baixo-i-1',
            titulo: 'Manter cronograma padrão de irrigação',
            descricao: 'A umidade do solo está na faixa adequada. Continue com as boas práticas regulares.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Manejo de Água',
            icone: Droplet
          },
          {
            id: 'baixo-i-2',
            titulo: 'Registrar crescimento e desenvolvimento foliar',
            descricao: 'Acompanhar a sanidade das culturas principais aproveitando a excelente fase de umidade.',
            nivelUrgencia: 'PREVENTIVO' as const,
            categoria: 'Solo',
            icone: Sprout
          }
        ],
        semana: [
          {
            id: 'baixo-s-1',
            titulo: 'Inspeção preventiva de bicos de aspersão',
            descricao: 'Limpar filtros para garantir distribuição de água uniforme em toda a área.',
            nivelUrgencia: 'PREVENTIVO' as const,
            categoria: 'Infraestrutura',
            icone: Home
          }
        ],
        mes: [
          {
            id: 'baixo-m-1',
            titulo: 'Planejar incorporação de matéria orgânica',
            descricao: 'Aproveitar a umidade do solo para adubar com esterco curtido visando a próxima estação.',
            nivelUrgencia: 'RECOMENDADO' as const,
            categoria: 'Planejamento',
            icone: Sprout
          }
        ]
      }[activeTab]
    }
  }

  const recomendacoes = obterRecomendacoes()

  const alternarConcluida = (id: string) => {
    setConcluidas((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <AppLayout userName="Agronomist User" userProfile="Profile & Settings">
      <TopBar showSearch={true} />

      {/* Área de conteúdo principal com fundo verde claro pastel do Figma (#EAF3EE) */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col gap-6" style={{ backgroundColor: '#ECFEF1' }}>

        {/* Container com largura máxima limitada e centralizado */}
        <div className="flex flex-col gap-6">

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Mapa', link: '/mapa' },
              { label: `${infoLocal.cidade}, ${infoLocal.uf}`, link: `/mapa/${regiaoId}` },
              { label: 'Recomendações' }
            ]}
          />

          {/* Título Principal e Badge do ISS na mesma linha (flex justify-between) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-2">
            <div className="flex flex-col gap-1 max-w-3xl">
              <h1 className="text-3xl font-extrabold text-[#1B2A22] tracking-tight">
                Recomendações — <span style={{ color: corRisco }}>{labelRisco}</span>
              </h1>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mt-0.5">
                Baseado no índice de sustentabilidade atual e previsões meteorológicas para os próximos dias na região de {infoLocal.cidade}.
              </p>
            </div>

            {/* Badge do ISS exatamente como no Figma: fundo claro com borda e ícone de aviso */}
            <div
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold self-start whitespace-nowrap border"
              style={{
                color: textRiscoBadge,
                backgroundColor: bgRiscoBadge,
                borderColor: textRiscoBadge + '33'
              }}
            >
              <AlertTriangle size={13} strokeWidth={2.5} />
              ISS {estadoData.iss}
            </div>
          </div>

          {/* Abas Temporais (Tabs) */}
          <div className="flex gap-8 border-b border-[#CADAD0] mt-4">
            <button
              onClick={() => setActiveTab('imediatas')}
              className={`pb-3 text-sm transition-all mb-[-1px] ${activeTab === 'imediatas'
                ? 'font-bold border-b-2 border-[#2D6A4F] text-[#1B2A22]'
                : 'font-medium border-b-2 border-transparent text-[#6B7280] hover:text-[#1B2A22]'
                }`}
            >
              Imediatas
            </button>
            <button
              onClick={() => setActiveTab('semana')}
              className={`pb-3 text-sm transition-all mb-[-1px] ${activeTab === 'semana'
                ? 'font-bold border-b-2 border-[#2D6A4F] text-[#1B2A22]'
                : 'font-medium border-b-2 border-transparent text-[#6B7280] hover:text-[#1B2A22]'
                }`}
            >
              Esta semana
            </button>
            <button
              onClick={() => setActiveTab('mes')}
              className={`pb-3 text-sm transition-all mb-[-1px] ${activeTab === 'mes'
                ? 'font-bold border-b-2 border-[#2D6A4F] text-[#1B2A22]'
                : 'font-medium border-b-2 border-transparent text-[#6B7280] hover:text-[#1B2A22]'
                }`}
            >
              Próximos 30 dias
            </button>
          </div>

          {/* Lista de Cards de Recomendação */}
          <div className="flex flex-col gap-4 mt-2">
            {recomendacoes.length === 0 ? (
              <div className="bg-white border rounded-2xl p-10 text-center flex flex-col items-center justify-center gap-2" style={{ borderColor: '#CADAD0' }}>
                <p className="text-sm font-semibold text-gray-500">Nenhuma recomendação cadastrada para este período.</p>
              </div>
            ) : (
              recomendacoes.map((rec) => {
                const Icon = rec.icone
                const isConcluida = concluidas[rec.id] || false

                // Cores do Card conforme o nível de urgência
                let borderLeftColor = '#2D6A4F'
                let badgeBg = '#2D6A4F'
                let badgeText = '#FFFFFF'
                let iconBg = '#EAF3EE'
                let iconText = '#2D6A4F'

                if (rec.nivelUrgencia === 'URGENTE') {
                  borderLeftColor = '#C1440E'
                  badgeBg = '#C1440E'
                  badgeText = '#FFFFFF'
                  iconBg = '#FFE0D5'
                  iconText = '#C1440E'
                } else if (rec.nivelUrgencia === 'IMPORTANTE') {
                  borderLeftColor = '#C17A0E'
                  badgeBg = '#C17A0E'
                  badgeText = '#FFFFFF'
                  iconBg = '#FFF3CD'
                  iconText = '#C17A0E'
                } else if (rec.nivelUrgencia === 'PREVENTIVO') {
                  borderLeftColor = '#52B788'
                  badgeBg = '#52B788'
                  badgeText = '#FFFFFF'
                  iconBg = '#EBF7F1'
                  iconText = '#52B788'
                }

                return (
                  <div
                    key={rec.id}
                    className={`bg-white rounded-2xl p-5 md:p-6 flex flex-row items-center justify-between gap-5 shadow-sm transition-all duration-200 border border-[#E2E8E4] ${isConcluida ? 'opacity-55' : ''
                      }`}
                    style={{ borderLeft: `5px solid ${borderLeftColor}` }}
                  >
                    <div className="flex flex-row items-start gap-4 md:gap-5 flex-1 w-full">

                      {/* Box do Ícone — quadradinho com espaçamento (Figma) */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: iconBg, color: iconText }}
                      >
                        <Icon size={24} strokeWidth={2.5} />
                      </div>

                      {/* Conteúdo Central */}
                      <div className="flex-1 flex flex-col gap-1">

                        {/* Nível de Urgência + Categoria */}
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wide"
                            style={{ backgroundColor: badgeBg, color: badgeText }}
                          >
                            {rec.nivelUrgencia}
                          </span>
                          <span className="text-xs text-gray-500">
                            {rec.categoria}
                          </span>
                        </div>

                        {/* Título da Recomendação */}
                        <h3 className={`text-base font-bold text-[#1B2A22] mt-1 leading-snug ${isConcluida ? 'line-through text-gray-400' : ''}`}>
                          {rec.titulo}
                        </h3>

                        {/* Descrição */}
                        <p className={`text-sm text-gray-500 leading-relaxed mt-0.5 ${isConcluida ? 'text-gray-400' : ''}`}>
                          {rec.descricao}
                        </p>
                      </div>
                    </div>

                    {/* Botão de Conclusão à Direita */}
                    <div className="flex-shrink-0 flex items-center justify-center sm:self-center">
                      <button
                        onClick={() => alternarConcluida(rec.id)}
                        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all border active:scale-[0.98] ${isConcluida
                          ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                          : 'border-[#2D6A4F] text-[#2D6A4F] bg-transparent hover:bg-[#2D6A4F]/5'
                          }`}
                      >
                        <CheckCircle2 size={14} />
                        {isConcluida ? 'Concluído' : 'Marcar como feito'}
                      </button>
                    </div>

                  </div>
                )
              })
            )}
          </div>

        </div>

      </div>
    </AppLayout>
  )
}
