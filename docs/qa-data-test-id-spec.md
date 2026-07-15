# QA Automation `data-test-id` Spec

Reference for QA and contributors on how test hooks are exposed by `hrm_ui_lib`
components. This is the contract automation should target. Keep it stable.

## TL;DR

- Every component accepts an optional **`dataTestId?: string`** prop.
- It renders as a **`data-test-id`** HTML attribute on the component's **root element**.
- Interactive / assertable **inner elements** get a suffixed id derived from the
  root: `` `${dataTestId}-<suffix>` `` (e.g. `user-menu-close`, `country-select-option-0`).
- If `dataTestId` is not supplied, **no** `data-test-id` attribute is emitted (never
  `data-test-id=""` on inner elements, never `data-test-id="undefined"`).

```tsx
<Button dataTestId="save-profile" buttonText="Save" />
// → <button data-test-id="save-profile" …><span data-test-id="save-profile-text">Save</span></button>
```

## Why `data-test-id` (not `data-testid`)

This is the library's pre-existing convention (used in 350+ render sites). We
standardize on it rather than introducing a second attribute. Point your
automation framework at `data-test-id`:

- Playwright: `page.locator('[data-test-id="save-profile"]')`
- Cypress: `cy.get('[data-test-id="save-profile"]')`
- Testing Library: `container.querySelector('[data-test-id="save-profile"]')`

## Naming rules

1. **Consumer owns the root id.** The app passes a meaningful, page-unique
   `dataTestId` (kebab-case recommended, e.g. `employee-form-submit`). The library
   does not invent root ids.
2. **Library owns the suffixes.** Inner elements append a stable, semantic
   suffix to the root id. Suffixes are part of the public contract — renaming
   one is a breaking change for QA.
3. **Kebab-case**, lowercase, no spaces.
4. **Lists/collections** append a zero-based index: `` `${dataTestId}-item-${i}` ``,
   `` `${dataTestId}-row-${i}` ``.
5. **Guard empties**: emit the attribute only when `dataTestId` is truthy —
   `` data-test-id={dataTestId ? `${dataTestId}-text` : ''} `` (or omit entirely).

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

When a component renders other library components, it **threads `dataTestId` down**
so nested elements stay addressable, either by:

- passing a derived `dataTestId` to the child (`` dataTestId={`${dataTestId}-increment`} ``), or
- passing a `dataTestIdPrefix` when the child fans out to many elements (see
  `DatePicker`).

Example (`Counter` → `Input`): the increment/decrement icons receive
`` `${dataTestId}-increment` `` / `` `${dataTestId}-decrement` ``.

## Author checklist (per component)

1. `dataTestId?: string` declared in `types.ts` on the `T<Name>PropTypes` interface.
2. Root element renders `data-test-id={dataTestId}`.
3. Every interactive / assertable inner element renders a suffixed `data-test-id`.
4. Empty guard in place (no `undefined` / stray `""`).
5. Nested library components receive a derived `dataTestId`.
6. Story in `src/stories/<Name>.stories.tsx` passes a sample `dataTestId`.
7. `pnpm check` passes.

## Reference implementations

- `src/components/Button/Button.tsx` — root + `-text`, `-icon`
- `src/components/Chips/Chips.tsx` — `-icon`, `-text` on inner components
- `src/components/Counter/Counter.tsx` — threads `-increment` / `-decrement` to `Input`
- `src/components/Skeleton/Skeleton.tsx` — indexed `` `${dataTestId}-${i}` ``
- `src/components/DatePicker/` — `dataTestIdPrefix` fan-out
