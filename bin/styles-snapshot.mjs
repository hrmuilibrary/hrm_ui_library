// Visual-regression gate for the token/color layer.
//
// Compiles src/assets/styles/index.scss, then resolves every PAINT declaration (color,
// background, border, box-shadow, fill, ...) to its FINAL value — following var() chains in
// BOTH the light (:root) and dark ([data-theme="dark"]) contexts. The result is a normalized
// golden snapshot. Because token repoints only change *how* a value is expressed (var names),
// not the resolved value, a faithful migration produces ZERO snapshot drift. Any real visual
// change shows up as a reviewable diff and requires regenerating the golden.
//
//   node bin/styles-snapshot.mjs            # check: diff vs committed golden, exit 1 on drift
//   node bin/styles-snapshot.mjs --write    # regenerate the committed golden
//
// No browser, no external service — deterministic and CI-friendly.

import * as sass from 'sass'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ENTRY = resolve(ROOT, 'src/assets/styles/index.scss')
const GOLDEN = resolve(ROOT, 'styles-snapshot.json')

// Properties whose value is a color/paint and that theming is expected to affect.
const PAINT = new Set([
  'color',
  'background',
  'background-color',
  'background-image',
  'border',
  'border-color',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'outline',
  'outline-color',
  'box-shadow',
  '-webkit-box-shadow',
  'fill',
  'stroke',
  'opacity',
  'caret-color',
  'accent-color',
  'text-decoration-color',
  'column-rule-color',
  '-webkit-text-fill-color'
])

const DARK = /\[data-theme=["']?dark["']?\]/
const DARK_ONLY = /^\[data-theme=["']?dark["']?\]$/
const VAR = /var\(\s*(--[A-Za-z0-9-]+)\s*(?:,\s*([^,()]+))?\)/g

function compile() {
  return sass.compile(ENTRY, { style: 'expanded', silenceDeprecations: ['import', 'global-builtin', 'color-functions'] }).css
}

function buildSnapshot(css) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/@import[^;]+;/g, '')
  const light = new Map()
  const dark = new Map()
  // Fallback maps: custom properties declared inside a component-scoped selector
  // (e.g. `.chips { --ds-chips-bg: ...; }`), not just bare `:root`/`[data-theme="dark"]`.
  // Without these, a component-local var() chain is unresolvable and the tool falls back to
  // emitting the raw `var(--name)` text as its "value" — masking any real color behind it and
  // turning a same-value rename into a false-positive diff.
  const scopedLight = new Map()
  const scopedDark = new Map()
  const rules = []
  const RULE = /([^{}]+)\{([^{}]*)\}/g
  let m
  while ((m = RULE.exec(css)) !== null) {
    const selGroup = m[1].trim()
    if (!selGroup || selGroup.startsWith('@')) continue
    const decls = m[2]
      .split(';')
      .map((d) => d.trim())
      .filter(Boolean)
      .map((d) => {
        const i = d.indexOf(':')
        return i === -1 ? null : [d.slice(0, i).trim(), d.slice(i + 1).trim()]
      })
      .filter(Boolean)
    for (const sel of selGroup.split(',').map((s) => s.trim())) {
      const isDarkSel = DARK.test(sel)
      if (sel === ':root') for (const [p, v] of decls) if (p.startsWith('--')) light.set(p.slice(2), v)
      if (DARK_ONLY.test(sel))
        for (const [p, v] of decls) if (p.startsWith('--')) dark.set(p.slice(2), v)
      // Component-scoped custom-property declarations (any other selector): keep as a
      // fallback resolution source, split by whether the scope itself is a dark override.
      if (sel !== ':root' && !DARK_ONLY.test(sel)) {
        for (const [p, v] of decls) {
          if (!p.startsWith('--')) continue
          if (isDarkSel) scopedDark.set(p.slice(2), v)
          else scopedLight.set(p.slice(2), v)
        }
      }
      rules.push({ sel, isDark: isDarkSel, decls })
    }
  }

  const resolveOnce = (v, isDark) =>
    v.replace(VAR, (whole, name, fb) => {
      const key = name.slice(2)
      let r = isDark && dark.has(key) ? dark.get(key) : light.has(key) ? light.get(key) : undefined
      if (r === undefined) r = isDark && scopedDark.has(key) ? scopedDark.get(key) : undefined
      if (r === undefined) r = scopedLight.has(key) ? scopedLight.get(key) : undefined
      if (r === undefined) r = fb !== undefined ? fb.trim() : whole
      return r
    })
  const resolveVal = (v, isDark) => {
    let prev = v
    for (let i = 0; i < 25; i++) {
      const next = resolveOnce(prev, isDark)
      if (next === prev) break
      prev = next
    }
    return prev.replace(/\s+/g, ' ').trim().toLowerCase()
  }

  const out = {}
  for (const { sel, isDark, decls } of rules) {
    for (const [prop, value] of decls) {
      if (!PAINT.has(prop.toLowerCase())) continue
      const key = `${sel} :: ${prop}`
      if (isDark) {
        out[key] = `dark:${resolveVal(value, true)}`
      } else {
        const l = resolveVal(value, false)
        const d = resolveVal(value, true)
        out[key] = l === d ? l : `${l} ⇒ dark:${d}`
      }
    }
  }
  // stable ordering
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)))
}

const snapshot = buildSnapshot(compile())
const serialized = JSON.stringify(snapshot, null, 2) + '\n'
const write = process.argv.includes('--write')

if (write) {
  writeFileSync(GOLDEN, serialized)
  console.log(`✓ Wrote golden snapshot: ${Object.keys(snapshot).length} paint declarations -> styles-snapshot.json`)
  process.exit(0)
}

if (!existsSync(GOLDEN)) {
  console.error('✗ No golden snapshot found. Run: pnpm test:visual:update')
  process.exit(1)
}

const golden = JSON.parse(readFileSync(GOLDEN, 'utf8'))
const keys = new Set([...Object.keys(golden), ...Object.keys(snapshot)])
const problems = []
for (const k of [...keys].sort()) {
  const g = golden[k]
  const c = snapshot[k]
  if (g === undefined) problems.push(`  + added:   ${k} = ${c}`)
  else if (c === undefined) problems.push(`  - removed: ${k} = ${g}`)
  else if (g !== c) problems.push(`  ≠ changed: ${k}\n      golden: ${g}\n      now:    ${c}`)
}

if (problems.length) {
  console.error(`✗ Visual regression: ${problems.length} paint value(s) drifted from the golden snapshot.\n`)
  console.error(problems.slice(0, 60).join('\n'))
  if (problems.length > 60) console.error(`  … and ${problems.length - 60} more`)
  console.error(
    '\nIf this change is intentional, regenerate the golden and commit it:\n  pnpm test:visual:update\n'
  )
  process.exit(1)
}
console.log(`✓ Visual regression OK — ${Object.keys(snapshot).length} paint declarations match the golden snapshot.`)
