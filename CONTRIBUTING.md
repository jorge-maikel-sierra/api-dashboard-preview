# Guía de contribución — api-dashboard-preview

## Flujo de desarrollo

```bash
npm install          # Instalar dependencias (solo la primera vez)
npm run dev          # Servidor de desarrollo con HMR en http://localhost:5173
npm run lint         # Verificar estilo con ESLint antes de hacer commit
npm run build        # Build de producción → dist/
npm run preview      # Previsualizar el build local antes de desplegar
```

No hay tests configurados. El linter es la única validación automática.

---

## Añadir un nuevo curso

1. Crea `src/data/checklist-<nombre>.js` con la siguiente estructura:
   ```js
   export const checklistVue = [
     { section: "📁 Título de sección", color: "#HEX", items: ["item 1", "item 2"] },
   ];
   ```

2. Importa el dataset y añade una entrada al array `COURSES` en `src/App.jsx`:
   ```js
   { id: "vue", label: "Vue.js", badge: "Vue · Vite", subtitle: "Checklist del curso", data: checklistVue, showTools: false }
   ```

3. Usa **siempre** `useChecklistByData(course.data)`. Nunca `useChecklist()` (legacy, hardcoded).

4. Activa `showTools: true` únicamente si necesitas una pestaña de referencia de herramientas.

---

## Convenciones de estilo

- Todos los estilos son **inline** (`style={{}}`). Sin Tailwind, sin CSS modules.
- Clases utilitarias de hover (`hov`, `hovbg`, `card`) definidas en el `<style>` de `App.jsx`.
- Paleta fija:
  - Fondos: `#0A0E1A` (página), `#0D1229` (header), `#0F1629` (cards)
  - Texto: `#E2E8F0` (primario), `#CBD5E1` (secundario), `#64748B` (atenuado/checked)
- Tipografía: `JetBrains Mono`/`Fira Code` para cuerpo; `Space Grotesk` para títulos.

---

## Instrucciones para GitHub Copilot

Este repositorio usa archivos de instrucciones específicas en `.github/instructions/` para guiar a Copilot según el tipo de archivo que se esté editando.

### Archivos disponibles

| Archivo | Se aplica a |
|---------|------------|
| `reactjs.instructions.md` | `**/*.jsx, **/*.tsx` |
| `self-explanatory-code-commenting.instructions.md` | Todos los archivos |
| `html-css-style-color-guide.instructions.md` | Estilos inline y colores |
| `nextjs.instructions.md` | Si se añade Next.js |
| `tailwind-v4-vite.instructions.md` | Si se añade Tailwind |
| `context7.instructions.md` | Consultas a docs externas |

### Cómo se aplican automáticamente

Los archivos `*.instructions.md` con frontmatter `applyTo: "**/*.jsx"` son leídos automáticamente por la extensión **GitHub Copilot** (versión compatible) cuando editas un archivo que coincide con ese patrón.

El archivo `.github/copilot-instructions.md` en la raíz del repo es el contexto de proyecto global que Copilot siempre lee. Si modificas la arquitectura o añades un curso, actualiza también ese archivo.

### Para nuevos colaboradores

Al clonar este repo, instala la extensión [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) en VS Code. Las instrucciones se activan automáticamente sin pasos adicionales una vez que la extensión esté instalada y el workspace abierto.
