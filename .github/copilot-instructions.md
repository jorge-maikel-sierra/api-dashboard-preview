# Copilot Instructions — api-dashboard-preview

## Project Overview

Interactive **React + Vite** dashboard for learning courses. Displays a multi-course selector with two views per course: a **Tools tab** (stack reference cards) and a **Checklist tab** (quality checklist with progress tracking). No backend; purely client-side.

## Architecture

```
src/
  App.jsx              # Root: COURSES catalog, active course/tab state, renders Header + tabs
  components/
    Header.jsx         # Course selector pills + tab navigation + progress bar
    ChecklistTab.jsx   # Collapsible sections with togglable checklist items
    ToolsTab.jsx       # Read-only tool reference cards (only shown for "nodejs" course)
  hooks/
    useChecklistByData.js  # ← preferred hook; accepts any dataset array
    useChecklist.js        # Legacy hook hardcoded to checklist.js — do not use for new courses
  data/
    checklist.js       # Node.js API course dataset (sections with color + items[])
    checklist-react.js # React/Next.js course dataset
    tools.js           # Tools reference data (category + icon + color + items[])
```

## Adding a New Course

1. Create `src/data/checklist-<name>.js` exporting an array of `{ section, color, items[] }`.
2. Add an entry to the `COURSES` constant in `App.jsx`:
   ```js
   { id: "vue", label: "Vue.js", badge: "...", subtitle: "...", data: checklistVue, showTools: false }
   ```
3. Set `showTools: true` only if a ToolsTab variant is required; otherwise the tab is hidden automatically.
4. Use `useChecklistByData(course.data)` — never `useChecklist()` (legacy, hardcoded).

## Data Shape Conventions

Checklist dataset:
```js
{ section: "📁 Section Title", color: "#HEX", items: ["item text", ...] }
```

Tools dataset:
```js
{ category: "Name", icon: "emoji", color: "#HEX", items: [{ name, role }] }
```

- Colors are hex strings used for borders (`${color}22`), backgrounds (`${color}0D`), and text.
- All UI theming is inline styles — **no CSS classes** except utility hover classes defined in `App.jsx` (`hov`, `hovbg`, `card`).

## Styling Rules

- Background palette: `#0A0E1A` (page), `#0D1229` (header), `#0F1629` (cards).
- Text: `#E2E8F0` (primary), `#CBD5E1` (secondary), `#64748B` (muted/checked).
- Font: `JetBrains Mono` / `Fira Code` (monospace) for body; `Space Grotesk` for headings/labels.
- All styles are **inline**; do not add Tailwind or CSS modules.
- Hover interactions use className `hov` (opacity) or `hovbg` (background tint), defined in the `<style>` block in `App.jsx`.

## Dev Workflows

```bash
npm run dev      # Start dev server (Vite HMR)
npm run build    # Production build → dist/
npm run preview  # Serve production build locally
npm run lint     # ESLint (flat config, eslint.config.js)
```

No tests are configured. ESLint uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.

## Key Patterns

- **Tab gating**: `Header.jsx` filters `ALL_TABS` based on `activeCourse`; `App.jsx` forces `activeTab = "checklist"` when switching to a course with `showTools: false`.
- **Checked state key**: items are keyed as `"${sectionIndex}-${itemIndex}"` strings in a flat `{}` object — not nested arrays.
- **Section open/close default**: sections are open by default; `expanded[si] !== false` is the truthy check (avoids `undefined` being falsy).
- **Progress color thresholds**: `pct < 30 → #F87171` (red), `< 70 → #FBBF24` (yellow), `≥ 70 → #34D399` (green).

## Instruction Files (`.github/instructions/`)

Scope-specific guidelines that apply to this codebase. When generating code matching a file pattern, follow the corresponding file:

| File | Applies to |
|------|-----------|
| `reactjs.instructions.md` | `**/*.jsx, **/*.tsx` |
| `self-explanatory-code-commenting.instructions.md` | All files — prefer WHY comments, avoid obvious WHAT comments |
| `html-css-style-color-guide.instructions.md` | Inline styles and color choices |
| `tailwind-v4-vite.instructions.md` | Only if Tailwind is added in the future |
| `context7.instructions.md` | Fetch external API/framework docs before generating non-trivial config |
