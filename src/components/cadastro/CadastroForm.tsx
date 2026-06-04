import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { estados } from '@/data/estados'
import { culturas } from '@/data/culturas'

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
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

/* ───────────────────────────────────────────
   Radio customizado — fiel ao Figma:
   selecionado: círculo preenchido verde #0F5238
   não selecionado: círculo com borda #BFC8C1
─────────────────────────────────────────── */
interface RadioOptionItem {
  value: string
  label: string
}

function RadioField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string
  name: string
  options: RadioOptionItem[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-sm font-medium"
        style={{ color: '#404944', letterSpacing: '0.14px', lineHeight: '20px' }}
      >
        {label}
      </span>
      <div className="flex flex-row flex-wrap gap-6">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-[7px] cursor-pointer select-none"
            onClick={() => onChange(opt.value)}
          >
            {/* Círculo radio fiel ao Figma */}
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{
                width: 22,
                height: 22,
                backgroundColor: value === opt.value ? '#0F5238' : 'white',
                border: value === opt.value ? 'none' : '1px solid #BFC8C1',
                transition: 'background-color 0.15s',
              }}
            >
              {value === opt.value && (
                <span
                  className="rounded-full bg-white"
                  style={{ width: 7.5, height: 7.5 }}
                />
              )}
            </span>
            <span
              className="text-base"
              style={{ color: '#101F17', lineHeight: '24px' }}
            >
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────
   Campo de input fiel ao Figma:
   Label: 14px Medium #404944
   Input: bg branco, borda #BFC8C1, radius 8px
─────────────────────────────────────────── */
function FieldInput(props: {
  label: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
  autoComplete?: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium"
        style={{ color: '#404944', letterSpacing: '0.14px', lineHeight: '20px' }}
      >
        {props.label}
      </label>
      <input
        type={props.type ?? 'text'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        inputMode={props.inputMode}
        autoComplete={props.autoComplete}
        className="w-full px-3.5 py-[10px] text-sm rounded-lg bg-white transition-colors"
        style={{
          border: props.error ? '1.5px solid #E63946' : '1px solid #BFC8C1',
          color: '#101F17',
          outline: 'none',
          lineHeight: '20px',
        }}
        onFocus={(e) => { e.target.style.borderColor = '#0F5238'; e.target.style.borderWidth = '1.5px' }}
        onBlur={(e) => { e.target.style.borderColor = props.error ? '#E63946' : '#BFC8C1'; e.target.style.borderWidth = '1px' }}
      />
      {props.error && (
        <span className="text-xs" style={{ color: '#E63946' }}>{props.error}</span>
      )}
    </div>
  )
}

function FieldSelect(props: {
  label: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
  error?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium"
        style={{ color: '#404944', letterSpacing: '0.14px', lineHeight: '20px' }}
      >
        {props.label}
      </label>
      <select
        value={props.value}
        onChange={props.onChange}
        className="w-full px-3.5 py-[10px] text-sm rounded-lg bg-white transition-colors appearance-none"
        style={{
          border: props.error ? '1.5px solid #E63946' : '1px solid #BFC8C1',
          color: props.value ? '#101F17' : '#9CA3AF',
          outline: 'none',
          lineHeight: '20px',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: '40px',
        }}
      >
        <option value="" disabled>{props.placeholder}</option>
        {props.options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {props.error && (
        <span className="text-xs" style={{ color: '#E63946' }}>{props.error}</span>
      )}
    </div>
  )
}

/* ───────────────────────────────────────────
   Formulário principal
─────────────────────────────────────────── */
export default function CadastroForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.nome.trim()) e.nome = 'Informe seu nome completo'
    if (!form.municipio.trim()) e.municipio = 'Informe seu município'
    if (!form.estado) e.estado = 'Selecione o estado'
    if (!form.cultura) e.cultura = 'Selecione a cultura principal'
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, '').length < 10)
      e.telefone = 'Informe um telefone válido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => navigate('/mapa'), 1800)
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle size={56} strokeWidth={1.5} style={{ color: '#52B788' }} />
        <h3 className="text-xl font-bold" style={{ color: '#0F5238' }}>Cadastro realizado!</h3>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          Você receberá alertas pelo{' '}
          {form.canal === 'whatsapp' ? 'WhatsApp' : form.canal === 'sms' ? 'SMS' : 'ligação'}.
        </p>
        <p className="text-xs" style={{ color: '#9CA3AF' }}>Redirecionando para o mapa…</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Tipo de perfil */}
      <RadioField
        label="Tipo de perfil"
        name="tipo"
        value={form.tipo}
        onChange={(v) => set('tipo', v as FormState['tipo'])}
        options={[
          { value: 'agricultor', label: 'Agricultor Familiar' },
          { value: 'cooperativa', label: 'Cooperativa / Organização' },
        ]}
      />

      {/* Nome completo */}
      <FieldInput
        label="Nome completo"
        placeholder="Ex.: João da Silva"
        value={form.nome}
        onChange={(e) => set('nome', e.target.value)}
        error={errors.nome}
        autoComplete="name"
      />

      {/* Município */}
      <FieldInput
        label="Município"
        placeholder="Ex.: Quixadá"
        value={form.municipio}
        onChange={(e) => set('municipio', e.target.value)}
        error={errors.municipio}
      />

      {/* Estado + Cultura */}
      <div className="grid grid-cols-2 gap-4">
        <FieldSelect
          label="Estado (UF)"
          placeholder="Selecione"
          options={estados}
          value={form.estado}
          onChange={(e) => set('estado', e.target.value)}
          error={errors.estado}
        />
        <FieldSelect
          label="Cultura principal"
          placeholder="Selecione"
          options={culturas}
          value={form.cultura}
          onChange={(e) => set('cultura', e.target.value)}
          error={errors.cultura}
        />
      </div>

      {/* Canal preferido */}
      <RadioField
        label="Canal preferido de alerta"
        name="canal"
        value={form.canal}
        onChange={(v) => set('canal', v as FormState['canal'])}
        options={[
          { value: 'whatsapp', label: '\uD83D\uDCAC WhatsApp' },
          { value: 'sms', label: '\uD83D\uDCF1 SMS' },
          { value: 'voz', label: '\uD83D\uDCDE Voz' },
        ]}
      />

      {/* Telefone */}
      <FieldInput
        label="Telefone"
        placeholder="(85) 99999-9999"
        value={form.telefone}
        onChange={(e) => set('telefone', formatTelefone(e.target.value))}
        error={errors.telefone}
        inputMode="tel"
        autoComplete="tel"
      />

      {/* CTA Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 rounded-full text-sm font-semibold text-white transition-opacity"
        style={{
          backgroundColor: loading ? '#40916C' : '#0F5238',
          opacity: loading ? 0.75 : 1,
          letterSpacing: '0.14px',
        }}
      >
        {loading ? 'Cadastrando…' : 'Cadastrar e receber alertas grátis'}
      </button>

      {/* Disclaimer */}
      <p className="flex items-center gap-1.5 text-xs justify-center text-center" style={{ color: '#6B7280' }}>
        <Shield size={12} className="flex-shrink-0" />
        Seus dados são protegidos. Alertas são gratuitos e sem condições.
      </p>

    </form>
  )
}
