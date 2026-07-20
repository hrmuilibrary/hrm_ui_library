// Golden parity check: every CSS custom property defined in the library's current SCSS token
// files must appear in the generated build/css/tokens.css with an IDENTICAL value.
// Extra variables in the generated output (the new semantic layer) are allowed.
// Exits non-zero on any missing var or value mismatch.

import { readFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SCSS = resolve(PKG, '../../src/assets/styles/tokens')

const stripComments = (s) => s.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')

function extractBlock(src, selector) {
  const idx = src.indexOf(selector)
  if (idx === -1) return ''
  const open = src.indexOf('{', idx)
  let depth = 0
  for (let i = open; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}' && --depth === 0) return src.slice(open + 1, i)
  }
  return ''
}

function decls(body) {
  const map = new Map()
  const re = /--([\w-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(body)) !== null) map.set(m[1].trim(), m[2].trim().replace(/\s+/g, ' '))
  return map
}

// --- expected: union of all current SCSS token declarations, per selector -----
const expectLight = new Map()
const expectDark = new Map()
for (const f of readdirSync(SCSS).filter((f) => f.endsWith('.scss'))) {
  const src = stripComments(readFileSync(resolve(SCSS, f), 'utf8'))
  for (const [k, v] of decls(extractBlock(src, ':root'))) expectLight.set(k, v)
  for (const [k, v] of decls(extractBlock(src, '[data-theme="dark"]'))) expectDark.set(k, v)
}

// --- actual: generated tokens.css --------------------------------------------
const css = readFileSync(resolve(PKG, 'build/css/tokens.css'), 'utf8')
const gotLight = decls(extractBlock(css, ':root'))
const gotDark = decls(extractBlock(css, '[data-theme="dark"]'))

// Numeric-equality-aware compare (400 === "400", 1.15 === "1.15").
const eq = (a, b) => a === b || (a !== '' && b !== '' && Number(a) === Number(b))

const problems = []
function check(label, expect, got) {
  for (const [name, value] of expect) {
    if (!got.has(name)) problems.push(`[${label}] MISSING --${name}`)
    else if (!eq(value, got.get(name)))
      problems.push(`[${label}] --${name}: expected "${value}", got "${got.get(name)}"`)
  }
}
check('light', expectLight, gotLight)
check('dark', expectDark, gotDark)

const checked = expectLight.size + expectDark.size
if (problems.length) {
  console.error(`✗ Parity FAILED (${problems.length} problem(s) of ${checked} checked):`)
  for (const p of problems.slice(0, 40)) console.error('  ' + p)
  process.exit(1)
}
const extra = gotLight.size - expectLight.size
console.log(
  `✓ Parity OK — ${checked} original tokens reproduced exactly ` +
    `(${gotLight.size} light + ${gotDark.size} dark generated; +${extra} new semantic vars).`
)
