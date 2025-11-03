import fs from 'fs'
import path from 'path'

const root = process.cwd()
const svgComponentsDir = path.join(root, 'src', 'components', 'SVGIcons')
const outputFile = path.join(svgComponentsDir, 'icon-names.ts')

function toLowerCamelCase(pascal) {
  if (!pascal) return pascal
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

function main() {
  const files = fs.readdirSync(svgComponentsDir)
  const names = files
    .filter((f) => f.endsWith('.tsx') && f.startsWith('Icon'))
    .map((f) => f.replace('.tsx', '').replace(/^Icon/, ''))
    .map((name) => toLowerCamelCase(name))
    .sort()

  const content = `export const ICON_NAMES = ${JSON.stringify(names, null, 2)};
export type TIconName = typeof ICON_NAMES[number];
`

  fs.writeFileSync(outputFile, content)
  console.log(`Generated ${outputFile} with ${names.length} icon names.`)
}

main()


