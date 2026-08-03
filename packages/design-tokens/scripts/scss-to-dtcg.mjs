// Reverse-generate W3C DTCG token JSON from the library's existing SCSS token files.
//
// This is the "establish the source of truth" step: today the tokens live as hand-authored
// CSS custom properties in src/assets/styles/tokens/_*.scss. We parse those `:root` and
// `[data-theme="dark"]` blocks and emit machine-readable DTCG JSON. Every token records its
// ORIGINAL css variable name under `$extensions["com.hrm"].cssVar` so Style Dictionary can
// regenerate byte-identical variable names during the migration (see build.mjs).
//
// Re-runnable and deterministic: `pnpm tokens:import`.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PKG = resolve(__dirname, '..')
const SCSS = resolve(PKG, '../../src/assets/styles/tokens')

// ---- var-name -> DTCG path + $type -----------------------------------------

const COLOR_FAMILIES = /^(brand|green|blue|purple|pink|red|yellow|grey)-(\d+)$/

function classify(name) {
  // name is the css var without the leading `--`
  // returns { path: string[], type: string, cast?: 'number' }

  // colors
  let m = name.match(COLOR_FAMILIES)
  if (m) return { path: ['color', m[1], m[2]], type: 'color' }
  if (name === 'white') return { path: ['color', 'white'], type: 'color' }
  m = name.match(/^color-(\d+)$/) // dark-only raw palette (--color-1..12)
  if (m) return { path: ['color', 'raw', m[1]], type: 'color' }

  // spacing / sizing
  m = name.match(/^space-(\d+)$/)
  if (m) return { path: ['space', m[1]], type: 'dimension' }
  m = name.match(/^size-(\d+)$/)
  if (m) return { path: ['size', m[1]], type: 'dimension' }

  // typography
  m = name.match(/^font-family-(\w+)$/)
  if (m) return { path: ['font', 'family', m[1]], type: 'fontFamily' }
  m = name.match(/^font-size-(\d+)$/)
  if (m) return { path: ['font', 'size', m[1]], type: 'dimension' }
  m = name.match(/^font-weight-(\d+)$/)
  if (m) return { path: ['font', 'weight', m[1]], type: 'fontWeight', cast: 'number' }
  m = name.match(/^line-height-(\w+)$/)
  if (m) return { path: ['font', 'lineHeight', m[1]], type: 'number', cast: 'number' }
  if (name === 'letter-spacing')
    return { path: ['font', 'letterSpacing', 'default'], type: 'dimension' }

  // borders
  m = name.match(/^border-size-(\d+)$/)
  if (m) return { path: ['border', 'size', m[1]], type: 'dimension' }
  if (name === 'border-radius-percent-100')
    return { path: ['border', 'radius', 'percent100'], type: 'dimension' }
  m = name.match(/^border-radius-(\d+)$/)
  if (m) return { path: ['border', 'radius', m[1]], type: 'dimension' }

  // shadows (kept as raw CSS strings for exact parity; structure later)
  m = name.match(/^shadow-(brand)-(\d+)$/)
  if (m) return { path: ['shadow', m[1], m[2]], type: 'shadow' }
  m = name.match(/^shadow-(\d+)$/)
  if (m) return { path: ['shadow', m[1]], type: 'shadow' }
  m = name.match(/^shadow-(\w+)$/)
  if (m) return { path: ['shadow', m[1]], type: 'shadow' }

  // overlays
  m = name.match(/^overlay-(\d+)$/)
  if (m) return { path: ['overlay', m[1]], type: 'color' }

  return null
}

// ---- block parsing ----------------------------------------------------------

function stripComments(src) {
  return src.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')
}

// Extract the body of the FIRST block matching `selector { ... }`.
function extractBlock(src, selector) {
  const idx = src.indexOf(selector)
  if (idx === -1) return null
  const open = src.indexOf('{', idx)
  if (open === -1) return null
  let depth = 0
  for (let i = open; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}') {
      depth--
      if (depth === 0) return src.slice(open + 1, i)
    }
  }
  return null
}

// Parse `--name: value;` declarations from a block body into [name, value] pairs.
function parseDecls(body) {
  const out = []
  const re = /--([\w-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(body)) !== null) {
    out.push([m[1].trim(), m[2].trim()])
  }
  return out
}

// ---- token tree assembly -----------------------------------------------------

function setPath(root, path, node) {
  let cur = root
  for (let i = 0; i < path.length - 1; i++) {
    cur[path[i]] ??= {}
    cur = cur[path[i]]
  }
  cur[path[path.length - 1]] = node
}

function toToken({ type, cast }, name, value) {
  const $value = cast === 'number' ? Number(value) : value
  return {
    $type: type,
    $value,
    $extensions: { 'com.hrm': { cssVar: name } }
  }
}

function build(decls, { skip } = {}) {
  const tree = {}
  const skipped = []
  for (const [name, value] of decls) {
    if (skip && skip(name)) continue
    const c = classify(name)
    if (!c) {
      skipped.push(name)
      continue
    }
    setPath(tree, c.path, toToken(c, name, value))
  }
  return { tree, skipped }
}

function writeJson(relPath, obj) {
  const full = resolve(PKG, relPath)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, JSON.stringify(obj, null, 2) + '\n')
  return full
}

function read(file) {
  return stripComments(readFileSync(resolve(SCSS, file), 'utf8'))
}

// ---- run ---------------------------------------------------------------------

const written = []

// colors: :root -> primitive, [data-theme="dark"] -> themes/dark
{
  const src = read('_colors.scss')
  const light = build(parseDecls(extractBlock(src, ':root')))
  const dark = build(parseDecls(extractBlock(src, '[data-theme="dark"]')))
  written.push(writeJson('tokens/primitive/color.json', light.tree))
  written.push(writeJson('tokens/themes/dark/color.json', dark.tree))
}

// shadows: :root -> primitive, [data-theme="dark"] -> themes/dark
{
  const src = read('_shadows.scss')
  const light = build(parseDecls(extractBlock(src, ':root')))
  const dark = build(parseDecls(extractBlock(src, '[data-theme="dark"]')))
  written.push(writeJson('tokens/primitive/shadow.json', light.tree))
  written.push(writeJson('tokens/themes/dark/shadow.json', dark.tree))
}

// theme-independent primitives (only :root)
for (const [file, out] of [
  ['_spaces.scss', 'tokens/primitive/space.json'],
  ['_sizes.scss', 'tokens/primitive/size.json'],
  ['_fonts.scss', 'tokens/primitive/font.json'],
  ['_borders.scss', 'tokens/primitive/border.json'],
  ['_overlays.scss', 'tokens/primitive/overlay.json']
]) {
  const src = read(file)
  const { tree, skipped } = build(parseDecls(extractBlock(src, ':root')))
  if (skipped.length) console.warn(`  [skipped in ${file}] ${skipped.join(', ')}`)
  written.push(writeJson(out, tree))
}

console.log(`Imported ${written.length} token file(s) from SCSS:`)
for (const f of written) console.log('  •', f.replace(PKG + '/', ''))
