import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, CheckCircle } from 'lucide-react'
import { Button, Input, Select, RadioGroup } from '@/components/ui'
import { estados } from '@/data/estados'
import { culturas } from '@/data/culturas'

/**
 * Raiz Viva — Componente: CadastroForm
 *
 * Formulário completo de cadastro do agricultor/cooperativa.
 * Rota: /cadastro | Público | Sem sidebar
 *
 * Campos:
 *  - Tipo: Agricultor Familiar | Cooperativa/Organização
 *  - Nome completo
 *  - Município
 *  - Estado (UF)
 *  - Cultura principal
 *  - Canal preferido: WhatsApp | SMS | Voz
 *  - Telefone
 */
interface FormState {
  tipo: 'agricultor' | 'cooperativa'
  nome: string
  municipio: string
  estado: string
  cultura: string
  canal: 'whatsapp' | 'sms' | 'voz'
  telefone: string
}

const initialForm: FormState = {
  tipo: 'agricultor',
  nome: '',
  municipio: '',
  estado: '',
  cultura: '',
  canal: 'whatsapp',
  telefone: '',
}

function formatTelefone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2)  return digits
  if (digits.length <= 7)  return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

export default function CadastroForm() {
  const navigate = useNavigate()
  const [form, setForm]       = useState<FormState>(initialForm)
  const [errors, setErrors]   = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.nome.trim())      e.nome      = 'Informe seu nome completo'
    if (!form.municipio.trim()) e.municipio = 'Informe seu município'
    if (!form.estado)           e.estado    = 'Selecione o estado'
    if (!form.cultura)          e.cultura   = 'Selecione a cultura principal'
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, '').length < 10)
      e.telefone = 'Informe um telefone válido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulação de chamada à API
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => navigate('/mapa'), 1800)
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle className="text-verde-claro" size={56} strokeWidth={1.5} />
        <h3 className="text-h3 font-bold text-verde-raiz">Cadastro realizado!</h3>
        <p className="text-body-s text-cinza-solo">
          Você receberá alertas pelo {form.canal === 'whatsapp' ? 'WhatsApp' : form.canal === 'sms' ? 'SMS' : 'ligação'}.
        </p>
        <p className="text-caption text-cinza-solo">Redirecionando para o mapa…</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Tipo de conta */}
      <RadioGroup
        label="Tipo de conta"
        name="tipo"
        value={form.tipo}
        onChange={(v) => set('tipo', v as FormState['tipo'])}
        options={[
          { value: 'agricultor',  label: 'Agricultor Familiar' },
          { value: 'cooperativa', label: 'Cooperativa / Organização' },
        ]}
      />

      {/* Nome */}
      <Input
        label="Nome completo"
        placeholder="Ex.: João da Silva"
        value={form.nome}
        onChange={(e) => set('nome', e.target.value)}
        error={errors.nome}
        autoComplete="name"
      />

      {/* Município */}
      <Input
        label="Município"
        placeholder="Ex.: Quixadá"
        value={form.municipio}
        onChange={(e) => set('municipio', e.target.value)}
        error={errors.municipio}
      />

      {/* Estado + Cultura — linha dupla */}
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Estado (UF)"
          placeholder="Selecione"
          options={estados}
          value={form.estado}
          onChange={(e) => set('estado', e.target.value)}
          error={errors.estado}
        />
        <Select
          label="Cultura principal"
          placeholder="Selecione"
          options={culturas}
          value={form.cultura}
          onChange={(e) => set('cultura', e.target.value)}
          error={errors.cultura}
        />
      </div>

      {/* Canal preferido */}
      <RadioGroup
        label="Canal preferido de alerta"
        name="canal"
        value={form.canal}
        onChange={(v) => set('canal', v as FormState['canal'])}
        options={[
          { value: 'whatsapp', label: '💬 WhatsApp' },
          { value: 'sms',      label: '📱 SMS' },
          { value: 'voz',      label: '📞 Voz' },
        ]}
      />

      {/* Telefone */}
      <Input
        label="Telefone"
        placeholder="(85) 99999-9999"
        value={form.telefone}
        onChange={(e) => set('telefone', formatTelefone(e.target.value))}
        error={errors.telefone}
        inputMode="tel"
        autoComplete="tel"
      />

      {/* CTA */}
      <Button type="submit" fullWidth loading={loading} size="lg">
        Cadastrar e receber alertas grátis
      </Button>

      {/* Disclaimer */}
      <p className="flex items-center gap-1.5 text-caption text-cinza-solo justify-center text-center">
        <Shield size={12} className="flex-shrink-0" />
        Seus dados são protegidos. Alertas são gratuitos e sem condições.
      </p>
    </form>
  )
}
