# QA Automation `data-id` Spec

Reference for QA and contributors on how test hooks are exposed by `hrm_ui_lib`
components. This is the contract automation should target. Keep it stable.

## TL;DR

- Every component accepts an optional **`dataId?: string`** prop.
- It renders as a **`data-id`** HTML attribute on the component's **root element**.
- Interactive / assertable **inner elements** get a suffixed id derived from the
  root: `` `${dataId}-<suffix>` `` (e.g. `user-menu-close`, `country-select-option-0`).
- If `dataId` is not supplied, **no** `data-id` attribute is emitted (never
  `data-id=""` on inner elements, never `data-id="undefined"`).

```tsx
<Button dataId="save-profile" buttonText="Save" />
// → <button data-id="save-profile" …><span data-id="save-profile-text">Save</span></button>
```

## Why `data-id` (not `data-testid`)

This is the library's pre-existing convention (used in 350+ render sites). We
standardize on it rather than introducing a second attribute. Point your
automation framework at `data-id`:

- Playwright: `page.locator('[data-id="save-profile"]')`
- Cypress: `cy.get('[data-id="save-profile"]')`
- Testing Library: `container.querySelector('[data-id="save-profile"]')`

## Naming rules

1. **Consumer owns the root id.** The app passes a meaningful, page-unique
   `dataId` (kebab-case recommended, e.g. `employee-form-submit`). The library
   does not invent root ids.
2. **Library owns the suffixes.** Inner elements append a stable, semantic
   suffix to the root id. Suffixes are part of the public contract — renaming
   one is a breaking change for QA.
3. **Kebab-case**, lowercase, no spaces.
4. **Lists/collections** append a zero-based index: `` `${dataId}-item-${i}` ``,
   `` `${dataId}-row-${i}` ``.
5. **Guard empties**: emit the attribute only when `dataId` is truthy —
   `` data-id={dataId ? `${dataId}-text` : ''} `` (or omit entirely).

## Standard suffixes

Use these across components so QA can predict them:

| Suffix            | Applies to                                   |
| ----------------- | -------------------------------------------- |
| `-text` / `-label`| Primary text / label element                 |
| `-icon`           | Icon (leading/standalone)                     |
| `-left-icon`      | Leading icon when a component has two         |
| `-right-icon`     | Trailing icon                                 |
| `-close`          | Close / dismiss control                       |
| `-action`         | Primary action control                        |
| `-input`          | Native input/textarea/select element          |
| `-item-${i}`      | Repeated list/menu items                      |
| `-row-${i}`       | Table body rows                               |
| `-cell-${col}`    | Table cell (by column key)                    |
| `-header-${col}`  | Table header cell (by column key)             |
| `-prev` / `-next` | Pagination / stepper navigation               |
| `-page-${n}`      | Pagination page buttons                       |
| `-error`          | Inline error message                          |
| `-content`        | Popover / modal / sidesheet content container |
| `-trigger`        | Element that opens a popover/menu/tooltip     |

Component-specific suffixes beyond this table are fine — document them in the
component's PR description so QA can add them to their locator map.

## Composite components

When a component renders other library components, it **threads `dataId` down**
so nested elements stay addressable, either by:

- passing a derived `dataId` to the child (`` dataId={`${dataId}-increment`} ``), or
- passing a `dataIdPrefix` when the child fans out to many elements (see
  `DatePicker`).

Example (`Counter` → `Input`): the increment/decrement icons receive
`` `${dataId}-increment` `` / `` `${dataId}-decrement` ``.

## Author checklist (per component)

1. `dataId?: string` declared in `types.ts` on the `T<Name>PropTypes` interface.
2. Root element renders `data-id={dataId}`.
3. Every interactive / assertable inner element renders a suffixed `data-id`.
4. Empty guard in place (no `undefined` / stray `""`).
5. Nested library components receive a derived `dataId`.
6. Story in `src/stories/<Name>.stories.tsx` passes a sample `dataId`.
7. `pnpm check` passes.

## Reference implementations

- `src/components/Button/Button.tsx` — root + `-text`, `-icon`
- `src/components/Chips/Chips.tsx` — `-icon`, `-text` on inner components
- `src/components/Counter/Counter.tsx` — threads `-increment` / `-decrement` to `Input`
- `src/components/Skeleton/Skeleton.tsx` — indexed `` `${dataId}-${i}` ``
- `src/components/DatePicker/` — `dataIdPrefix` fan-out
