// Batch-append semantic color tokens into tokens/semantic/color.json and
// tokens/themes/dark-semantic/color.json from a flat input list, then leaves the
// caller to run `node build.mjs` + the root visual-regression gate.
//
// Input: JSON array on stdin, each item:
//   { cssVar: 'color-status-circle-bg-danger', light: 'red-800', dark?: 'red-600', description?: '...' }
// `light`/`dark` are either a primitive css-var name (e.g. 'red-800', 'white', 'color-5')
// resolved to a {color.x.y} alias, or a literal value (anything not found in the primitive
// map is emitted as a literal, e.g. a raw hex color or an rgba()/color-mix() expression).
//
//   node scripts/add-semantic-tokens.mjs < batch.json

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SEMANTIC = resolve(PKG, 'tokens/semantic/color.json')
const DARK_SEMANTIC = resolve(PKG, 'tokens/themes/dark-semantic/color.json')
const PRIMITIVE = resolve(PKG, 'tokens/primitive/color.json')

function buildAliasMap(file) {
  const data = JSON.parse(readFileSync(file, 'utf8'))
  const map = new Map()
  ;(function walk(o, path) {
    for (const k of Object.keys(o)) {
      const v = o[k]
      if (v && typeof v === 'object') {
        if (v.$value !== undefined) {
          const cssVar = v.$extensions?.['com.hrm']?.cssVar
          if (cssVar) map.set(cssVar, path.concat(k).join('.'))
        } else {
          walk(v, path.concat(k))
        }
      }
    }
  })(data, [])
  return map
}

function setPath(root, path, leaf) {
  let node = root
  for (let i = 0; i < path.length - 1; i++) {
    node[path[i]] = node[path[i]] || {}
    node = node[path[i]]
  }
  node[path[path.length - 1]] = leaf
}

function resolveValue(v, aliasMap) {
  if (v === undefined) return undefined
  return aliasMap.has(v) ? `{${aliasMap.get(v)}}` : v
}

const aliasMap = buildAliasMap(PRIMITIVE)
const input = JSON.parse(readFileSync(0, 'utf8'))

const semantic = JSON.parse(readFileSync(SEMANTIC, 'utf8'))
const darkSemantic = JSON.parse(readFileSync(DARK_SEMANTIC, 'utf8'))

let added = 0
let addedDark = 0
for (const item of input) {
  const { cssVar, light, dark, description } = item
  const slug = cssVar.replace(/^color-/, '')
  const parts = slug.split('-')
  const group = parts[0]
  const rest = parts.slice(1).join('-')
  const leaf = {
    $type: 'color',
    $value: resolveValue(light, aliasMap),
    $extensions: { 'com.hrm': { cssVar } }
  }
  if (description) leaf.$description = description
  setPath(semantic, ['color', group, rest || group], leaf)
  added++

  if (dark !== undefined) {
    const darkLeaf = {
      $type: 'color',
      $value: resolveValue(dark, aliasMap),
      $extensions: { 'com.hrm': { cssVar } }
    }
    setPath(darkSemantic, ['dark', group, rest || group], darkLeaf)
    addedDark++
  }
}

writeFileSync(SEMANTIC, JSON.stringify(semantic, null, 2) + '\n')
writeFileSync(DARK_SEMANTIC, JSON.stringify(darkSemantic, null, 2) + '\n')

console.log(`Added ${added} light token(s), ${addedDark} dark override(s).`)
