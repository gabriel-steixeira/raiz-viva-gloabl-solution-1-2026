/**
 * copy-assets.mjs
 * Copia assets da raiz para public/images antes do build/dev.
 * Executa automaticamente via prebuild e dev scripts.
 */
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const dest = resolve(root, 'public/images')
if (!existsSync(dest)) mkdirSync(dest, { recursive: true })

const assets = [
  {
    src: resolve(root, 'ChatGPT Image 4 de jun. de 2026, 12_13_06 1.png'),
    dst: resolve(dest, 'logo.png'),
  },
]

for (const { src, dst } of assets) {
  if (existsSync(src)) {
    copyFileSync(src, dst)
    console.log(`✓ Copiado: ${src} -> ${dst}`)
  } else {
    console.warn(`⚠ Não encontrado (pular): ${src}`)
  }
}
