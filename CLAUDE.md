# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

`hrm_ui_lib` (package name) — a React + TypeScript UI component library used by Dino / People Space.
Published to npm; consumers import individual components and a single bundled stylesheet.

- Source repo: https://github.com/hrmuilibrary/hrm_ui_library
- Storybook (live demos): https://hrmuilibrary.github.io/hrm_ui_library
- Current version: see `package.json` (`version`)

## Tech Stack

- **Language**: TypeScript 5 (strict), React 18 (peer dep)
- **Bundler**: Vite 6 with a custom library build (`vite.config.ts`)
- **Styling**: SCSS (modern Sass API), bundled to a single `assets/styles/styles.css`
- **Component dev**: Storybook 10 (`@storybook/react-vite`)
- **Forms**: react-hook-form + @hookform/resolvers + yup (peer dep)
- **Tables**: @tanstack/react-table, react-table v7, react-window
- **Dates**: date-fns, dayjs, react-datepicker
- **DnD**: @dnd-kit/core, @dnd-kit/sortable
- **Animation**: motion (framer-motion)
- **Other**: classnames, react-dropzone, react-toastify, react-paginate, react-syntax-highlighter, react-input-mask, react-number-format
- **Package manager**: pnpm (lockfile is `pnpm-lock.yaml`)

## Common Commands

Use `pnpm` (npm also works for the scripts that exist in `package.json`).

```
pnpm install                    # install deps
pnpm start                      # storybook dev on :6006
pnpm build                      # vite library build into ./dist
pnpm build-storybook            # static storybook build
pnpm lint                       # eslint --fix on src/**/*.{js,jsx,ts,tsx}
pnpm prettier                   # prettier --write on src + stories
pnpm check                      # prettier + lint + tsc (run before PR)
pnpm generate-svg-component     # generate icon component from svg-icons/, then run check
```

Always run `pnpm check` before opening a PR — it is the gate for type errors, lint errors, and formatting.

## Repository Layout

```
src/
  components/         One folder per component (Button, Modal, Table, ...)
                      Each has: index.ts (barrel), <Name>.tsx, types.ts, consts.ts (optional)
  helperComponents/   Internal building blocks (Loader, Label, ErrorMessage, OptionItem, ...)
  hooks/              Reusable hooks (useGetIsMobile, useScreenSize, useFormProps, ...)
  helpers/            Pure utilities (isDeepEqual, storage, download-file, ...)
  context/            React contexts shared across components
  type/               Shared TS types (locale, file-upload, notification, status-code)
  consts/             Shared constants
  utils/              Misc utilities
  assets/
    images/           SVG/PNG illustrations shipped with the lib
    styles/
      index.scss        Entry that @use's every component partial
      components/       Per-component partials (_button.scss, _modal.scss, ...)
      helpers/_mixin.scss   Public mixins (also copied to dist for consumers)
      tokens/           Design tokens
  stories/            Storybook stories (one per component, *.stories.tsx)
  types.d.ts          Global ambient types
.storybook/           Storybook config (main.ts, preview.ts, preview-head.html)
svg-icons/            Source SVGs; run generate-svg-component to produce React icon components
bin/                  Build/codegen scripts (e.g. generate_svg_component.js)
dist/                 Build output (gitignored, published to npm)
```

## Build Output (`dist/`)

`vite.config.ts` does several non-standard things — keep them in mind when changing the build:

- Entry points are auto-discovered from `src/` (every `.ts/.tsx/.js/.jsx/.scss`, excluding `.stories.tsx`, `.stories.d.ts`, and `types.d.ts`). Each becomes its own ESM chunk with `preserveModules: true`, mirroring the `src/` tree under `dist/`.
- All deps and peer deps in `package.json` are externalized — they are NOT bundled.
- All SCSS is concatenated into a single `dist/assets/styles/styles.css`.
- Images from `src/assets/images/` are copied to `dist/assets/images/`.
- The mixin file `src/assets/styles/helpers/_mixin.scss` is copied to `dist/assets/styles/helpers/_mixin.scss` so consumers can `@use` it.
- `dist/package.json` is generated from the root `package.json` (only the fields needed for publishing — name, version, description, main, module, peerDeps, deps, sideEffects:false, repo, homepage).
- TypeScript declarations are emitted via `tsc -d` after Vite finishes (the `dts-generator` plugin).
- All emitted JS is run through Terser a second time (the `fully-minify-js` plugin) on top of esbuild minification.

Consumers import like:

```tsx
import { Button } from 'hrm_ui_lib/components/Button'
import 'hrm_ui_lib/assets/styles/styles.css'
```

```scss
@use 'hrm_ui_lib/assets/styles/helpers/mixin';
.foo { @include mixin.flexbox(); }
```

## Conventions

### Components

- One folder per component under `src/components/<Name>/`.
- Folder structure: `index.ts` (re-exports from `<Name>.tsx`), `<Name>.tsx` (implementation), `types.ts` (prop type as `T<Name>PropTypes`), optional `consts.ts`.
- Component is a named export (`export const Button = ...`), typed as `(props): ReactElement`.
- Prop types: `T<Name>PropTypes` interface, extends the appropriate HTML attributes via `Omit<...>` when wrapping a native element.
- Class names use the `classnames` package; SCSS partials use BEM-ish naming (e.g. `btn`, `btn--primary`, `btn__text`).
- Sizes are typically `'small' | 'medium' | 'large'`; visual variants use a `type` prop (e.g. `'primary' | 'secondary' | 'tertiary' | 'danger' | 'text' | 'link'`).
- Use existing helpers from `helperComponents/` (Loader, Label, ErrorMessage, OptionItem, CodeBlock, AnimatePresenceWrapper, GoToWebPage) and hooks from `hooks/` rather than reinventing them.

### Adding a new component (from README)

1. Create `src/components/<Name>/` with the files above.
2. Add `src/assets/styles/components/_<name>.scss`.
3. `@use` that partial from `src/assets/styles/index.scss`.
4. Add `src/stories/<Name>.stories.tsx` to test it in Storybook.
5. Run `pnpm check` — no type or lint errors.
6. Open a PR to `master` with a Conventional Commit message.

### Adding a new icon

1. Drop the SVG in `svg-icons/` (kebab-case filename, e.g. `chevron-right.svg`).
2. Run `pnpm generate-svg-component` (it also runs `pnpm check`).

### Code style (`.prettierrc`)

- `printWidth: 100`, `tabWidth: 2`
- `semi: false` — NO trailing semicolons
- `singleQuote: true`
- `trailingComma: 'none'`
- `arrowParens: 'always'`

ESLint (`eslint.config.js`) enforces `'quotes': single`, `'no-var'`, `'prefer-const'`, react-hooks rules, etc. `prop-types` is off (we use TS types).

### Commits & releases

- Conventional Commits enforced by commitlint + Husky (`commitlint.config.js` extends `@commitlint/config-conventional`).
  - `fix:` → patch, `feat:` → minor, `BREAKING CHANGE:` in body → major.
- `master` is the release branch; `alpha` is a prerelease branch (see `.releaserc`).
- semantic-release handles version bump, changelog, GitHub release, and npm publish on merge to `master`. Do not edit `version` in `package.json` manually.
- Publishing happens from `dist/` (see `.releaserc` `pkgRoot: dist`).

## TypeScript Notes

- `tsconfig.json` sets `rootDir: src`, `outDir: dist`, `strict: true`, `jsx: react-jsx`, `moduleResolution: bundler`.
- `src/stories` is excluded from compilation.
- Path alias: `@` → `src` (only in Vite, not in `tsconfig.json` — use relative imports in source files for safety).
- Some ambient types live in `src/types.d.ts` (e.g. `TClickEventType`, `TSVGIconComponent`, `TIconSize`); they are referenced unqualified in component code.

## Storybook

- Config: `.storybook/main.ts` points at `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`.
- Use stories as the primary way to manually verify a component (no Jest/RTL test suite is set up in this repo).

## Things to Avoid

- Do NOT bump `package.json#version` by hand — semantic-release owns it.
- Do NOT add semicolons or double quotes; Prettier will revert them and CI will fail formatting.
- Do NOT add new top-level dependencies casually — they are all externalized in the build, so every dep becomes a peer the consumer must install. Prefer reusing what's already there.
- Do NOT commit anything from `dist/`, `node_modules/`, `dts-temp/`, or `storybook-static/` (gitignored).
- Do NOT commit the `.npmrc` token. The repo's `.gitignore` already excludes `.npmrc`; keep it that way.
- Do NOT put test/story code outside `src/stories/` — stories there are excluded from the published build.

## Quick Sanity Checklist Before a PR

1. `pnpm check` passes (prettier + lint + tsc).
2. New/changed component has a story in `src/stories/`.
3. New SCSS partial is `@use`'d from `src/assets/styles/index.scss`.
4. Public prop type follows the `T<Name>PropTypes` convention and is exported.
5. Commit message follows Conventional Commits.
