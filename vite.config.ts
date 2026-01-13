import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { readdirSync, statSync, existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'fs'
import { exec } from 'child_process'
import { minify } from 'terser'
import pkg from './package.json' with { type: 'json' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')
const extensions = ['.ts', '.tsx', '.js', '.jsx']
const ignoreExtensions = ['.stories.tsx', '.stories.d.ts', 'types.ts']

// Create input config for each file (similar to rollup config)
const getInputOptions = (localPath = 'src', currentInputOptions: Record<string, string> = {}): Record<string, string> => {
  return readdirSync(resolve(__dirname, localPath)).reduce((initial, current) => {
    const fullPath = resolve(__dirname, localPath, current)
    if (statSync(fullPath).isDirectory()) {
      getInputOptions(`${localPath}/${current}`, initial)
    } else {
      const regexExecResult = /(.+?)(\.[^.]*$|$)/g.exec(current)
      if (regexExecResult) {
        const chunkName = `${localPath}/${regexExecResult[1]}`.replace(/^src\/?/g, '')
        if (
          extensions.includes(regexExecResult[2]) &&
          !ignoreExtensions.some((e) => regexExecResult[0].endsWith(e))
        ) {
          initial[chunkName] = fullPath
        }
      }
    }
    return initial
  }, currentInputOptions)
}

// Plugin to generate TypeScript declarations (similar to rollup config)
const dtsGenerator = () => {
  return {
    name: 'dts-generator',
    async buildEnd() {
      try {
        // Generate declaration files using TypeScript compiler directly
        // This avoids API Extractor issues with string enums
        // Use --emitDeclarationOnly to only generate .d.ts files
        // Use --declarationMap false to avoid .d.ts.map files
        exec(
          'tsc -d --declarationDir dist --outDir dts-temp --project ./tsconfig.json',
          (err) => {
            if (err) {
              console.log(err)
              throw "Couldn't generate .d.ts files..."
            }
            exec('rm -rf dts-temp')
            console.log('Declaration files generated successfully')
          }
        )
      } catch (err: any) {
        console.error('Error generating declaration files:', err.message)
      }
    }
  }
}

// Plugin to handle CSS output and copy assets
const handleCSSAndAssets = () => {
  return {
    name: 'handle-css-and-assets',
    async writeBundle(options: any, bundle: any) {
      const distPath = resolve(__dirname, 'dist')
      const stylesDir = resolve(distPath, 'assets/styles')

      // Ensure styles directory exists
      if (!existsSync(stylesDir)) {
        mkdirSync(stylesDir, { recursive: true })
      }

      // Find and rename CSS file to styles.css
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css')) {
          const cssPath = resolve(distPath, fileName)
          const targetPath = resolve(stylesDir, 'styles.css')
          if (existsSync(cssPath)) {
            const content = readFileSync(cssPath)
            writeFileSync(targetPath, content)
            // Remove the original CSS file if it's not in the styles directory
            if (cssPath !== targetPath) {
              rmSync(cssPath, { force: true })
            }
          }
        }
      }

      // Copy images
      const imagesSrc = resolve(__dirname, 'src/assets/images')
      const imagesDest = resolve(distPath, 'assets/images')
      if (existsSync(imagesSrc)) {
        if (!existsSync(imagesDest)) {
          mkdirSync(imagesDest, { recursive: true })
        }
        // Use a simple copy approach - in production you might want to use a proper copy plugin
        const copyRecursive = (src: string, dest: string) => {
          if (!existsSync(dest)) {
            mkdirSync(dest, { recursive: true })
          }
          const entries = readdirSync(src, { withFileTypes: true })
          for (const entry of entries) {
            const srcPath = resolve(src, entry.name)
            const destPath = resolve(dest, entry.name)
            if (entry.isDirectory()) {
              copyRecursive(srcPath, destPath)
            } else {
              const content = readFileSync(srcPath)
              writeFileSync(destPath, content)
            }
          }
        }
        copyRecursive(imagesSrc, imagesDest)
      }

      // Copy mixin file
      const mixinSrc = resolve(__dirname, 'src/assets/styles/helpers/_mixin.scss')
      const mixinDest = resolve(distPath, 'assets/styles/helpers')
      if (existsSync(mixinSrc)) {
        if (!existsSync(mixinDest)) {
          mkdirSync(mixinDest, { recursive: true })
        }
        const content = readFileSync(mixinSrc)
        writeFileSync(resolve(mixinDest, '_mixin.scss'), content)
      }

      // Copy README
      const readmeSrc = resolve(__dirname, 'README.md')
      if (existsSync(readmeSrc)) {
        const content = readFileSync(readmeSrc)
        writeFileSync(resolve(distPath, 'README.md'), content)
      }

      // Generate package.json
      const distPackageJson = {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        main: './index.cjs',
        module: './index.js',
        author: pkg.author,
        license: pkg.license,
        repository: pkg.repository,
        peerDependencies: pkg.peerDependencies,
        dependencies: pkg.dependencies,
        sideEffects: false,
        homepage: pkg.homepage
      }

      // Note: Individual component files are also available at their respective paths
      // e.g., './components/Button.js', './helpers/index.js', etc.
      writeFileSync(
        resolve(distPath, 'package.json'),
        JSON.stringify(distPackageJson, null, 2)
      )
    }
  }
}

// Plugin to fully minify all JS files using Terser
const fullyMinifyJS = () => {
  return {
    name: 'fully-minify-js',
    async writeBundle() {
      const distPath = resolve(__dirname, 'dist')

      // Terser minification options
      const terserOptions = {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: [],
        },
        mangle: {
          toplevel: false,
        },
        format: {
          comments: /@__PURE__/i, // Preserve @__PURE__ comments
          preserve_annotations: true,
        },
      }

      // Recursively find and minify all JS files
      const minifyJSFiles = async (dir: string): Promise<void> => {
        if (!existsSync(dir)) return

        const entries = readdirSync(dir, { withFileTypes: true })
        const minifyPromises: Promise<void>[] = []

        for (const entry of entries) {
          const fullPath = resolve(dir, entry.name)

          if (entry.isDirectory()) {
            // Skip node_modules and hidden directories
            if (entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
              minifyPromises.push(minifyJSFiles(fullPath))
            }
          } else if (entry.isFile() && entry.name.endsWith('.js')) {
            // Skip declaration files
            if (!entry.name.includes('.d.ts')) {
              minifyPromises.push(
                (async () => {
                  try {
                    const content = readFileSync(fullPath, 'utf-8')
                    const result = await minify(content, terserOptions)

                    if (result.code) {
                      writeFileSync(fullPath, result.code, 'utf-8')
                    }
                  } catch (err: any) {
                    console.warn(`Failed to minify ${fullPath}:`, err.message)
                  }
                })()
              )
            }
          }
        }

        await Promise.all(minifyPromises)
      }

      // Wait for all files to be written, then minify
      await new Promise(resolve => setTimeout(resolve, 200))
      await minifyJSFiles(distPath)
      console.log('All JS files fully minified with Terser')
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    dtsGenerator(),
    handleCSSAndAssets(),
    fullyMinifyJS()
  ],
  build: {
    lib: {
      entry: (() => {
        const inputs = getInputOptions()
        // Add main index.ts as 'index' entry point if it exists
        const indexPath = resolve(__dirname, 'src/index.ts')
        if (existsSync(indexPath)) {
          inputs['index'] = indexPath
        }
        return inputs
      })(),
    },
    rollupOptions: {
      // Externalize dependencies and peer dependencies
      external: (id) => {
        return (
          [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]
            .some(dep => id === dep || id.startsWith(dep + '/'))
        )
      },
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
          compact: true, // Fully minify code (remove whitespace, newlines)
          assetFileNames: (assetInfo) => {
            // Output CSS to assets/styles/styles.css
            const fileName = assetInfo.names?.[0] || assetInfo.originalFileNames?.[0]
            if (fileName && fileName.endsWith('.css')) {
              return 'assets/styles/styles.css'
            }
            // Only handle actual asset files (images, fonts, etc.), not JS files
            // Images should go to assets/images, but we'll copy them manually
            // So we return a generic assets path for other assets
            const ext = fileName?.split('.').pop()?.toLowerCase()
            const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'ico']
            if (ext && imageExts.includes(ext)) {
              return 'assets/images/[name][extname]'
            }
            return 'assets/[name][extname]'
          }
        },
      ]
    },
    cssCodeSplit: false,
    sourcemap: false,
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild', // Ensure JS is minified too
    cssMinify: 'esbuild' // Explicitly enable CSS minification
  },
  esbuild: {
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // Use the modern Sass API
      }
    },
    devSourcemap: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
})
