# @hrm/design-tokens

The single source of truth for `hrm_ui_lib` visual design. Design values live as **W3C DTCG**
JSON tokens and compile — via [Style Dictionary](https://styledictionary.com) — into CSS custom
properties, SCSS aliases, and typed TypeScript.

This package is **additive and isolated**: it does not touch the existing library build, release,
or Storybook. It is the foundation for the design→code separation described in the architecture
proposal (Phases 0–1).

## Layout

```
tokens/
  primitive/        Raw palette & scales (color, space, size, font, border, shadow, overlay)
  themes/dark/      Dark-theme overrides for the same primitive paths (color, shadow)
  semantic/         Intent tokens that ALIAS primitives (color.action / surface / text / border …)
build/              Generated output (gitignored)
  css/tokens.css      :root (light) + [data-theme="dark"] — drop-in replacement for the hand-authored token SCSS
  scss/_tokens.scss   $token: var(--token) aliases (themeable, autocompletes)
  ts/tokens.ts        typed const of resolved light values + `TokenName` type
scripts/
  scss-to-dtcg.mjs    Reverse-generate DTCG JSON from the current src/assets/styles/tokens/_*.scss
  verify-parity.mjs   Assert generated CSS reproduces every current token value exactly
build.mjs             Style Dictionary build (custom name transform preserves original var names)
```

## Commands

```bash
pnpm build            # import from SCSS -> build -> verify parity (full cycle)
pnpm tokens:import    # regenerate tokens/**/*.json from the current SCSS
pnpm tokens:build     # tokens JSON -> build/{css,scss,ts}
pnpm tokens:verify    # golden parity check vs the current SCSS
```

## How it works

- **Parity by construction.** The build registers *no value transforms* and a custom name
  transform that restores each token's original css-var name from `$extensions["com.hrm"].cssVar`.
  Values pass through byte-identical to the source SCSS, so `tokens.css` is a safe swap-in.
  `pnpm tokens:verify` proves it (currently: 322 original tokens reproduced exactly).
- **Semantics cascade.** Semantic tokens (e.g. `color-action-primary-bg`) are emitted as
  `var(--brand-500)` references, not literals — so under `[data-theme="dark"]` they automatically
  resolve to the dark primitive with no duplicate definitions. This is the mechanism that lets a
  designer recolor "primary" by editing **one primitive** with **zero component changes**.

## Migration path (see the architecture proposal)

1. **Now (done):** tokens are the source of truth; `tokens.css` reproduces today's values exactly.
2. **Next:** components repoint from primitive vars (`var(--brand-500)`) to semantic vars
   (`var(--color-action-primary-bg)`), one SCSS partial at a time, pixel-verified.
3. **Then:** the Figma → Tokens Studio → Git sync feeds `tokens/**/*.json` automatically;
   `tokens.css` replaces the hand-authored `src/assets/styles/tokens/_*.scss`.
