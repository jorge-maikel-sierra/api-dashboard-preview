// Checklist React + Next.js — Optimizada para proyectos reales con App Router
// Fuente base: The Odin Project React course
// Adaptaciones: Next.js 14+ App Router, eliminados items legacy y duplicados,
// agregadas secciones de Server Components, Server Actions, Metadata API y next/* components
// Ordenada en flujo lógico de proyecto real

export const checklistReact = [

  // ═══════════════════════════════════════════════════════
  // FASE 1: SETUP & ENTORNO
  // ═══════════════════════════════════════════════════════

  {
    section: "⚙️ Setup del Proyecto Next.js",
    color: "#61DAFB",
    items: [
      "Verificar instalación de Node.js LTS `node -v`",
      "Crear el proyecto con `npx create-next-app@latest my-app`",
      "Levantar el servidor de desarrollo: `npm run dev`",
      "Limpiar el contenido de ejemplo",
    ],
  },
  {
    section: "🔗 Control de Versiones",
    color: "#60A5FA",
    items: [
      "Verificar contenido de .gitignore",
      "Crear y conectar repositorio en GitHub",
      "Subir cambios al repositorio",
    ],
  },
  {
    section: "🎨 Calidad de Código",
    color: "#FBBF24",
    items: [
      "Verificar que ESLint y Prettier están configurados",
      "Configurar VS Code: `\"editor.formatOnSave\": true`",
    ],
  },

  
  // ═══════════════════════════════════════════════════════
  // FASE 6: ESTILOS & TESTING
  // ═══════════════════════════════════════════════════════

  {
    section: "🎨 Estilos en Next.js",
    color: "#F472B6",
    items: [
      "Estilos globales en `src/app/globals.css` — importarlo solo en `layout.js` raíz",
      "CSS MODULES: archivos `.module.css` con scope local — `import styles from './Button.module.css'` → `className={styles.boton}`",
      "CSS Modules genera nombres únicos en build — sin colisiones entre componentes aunque usen el mismo nombre de clase",
      "TAILWIND CSS (si se eligió en setup): clases de utilidad directamente en el JSX — configurar `tailwind.config.js` con las rutas del proyecto",
      "Evitar estilos inline en producción — usar CSS Modules o Tailwind — los estilos inline no son optimizables ni reusables",
      "Para animaciones: considerar Framer Motion (Client Components) o CSS animations/transitions",
      "Para temas (dark/light): usar CSS variables en `:root` y cambiarlas con una clase en `<html>` — almacenar preferencia en `localStorage` (Client Component)",
    ],
  },
  {
    section: "🧪 Testing con Vitest + React Testing Library",
    color: "#34D399",
    items: [
      "En proyectos Next.js con App Router: instalar `jest` o `vitest` con `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`",
      "Configurar `vitest.config.js` con `environment: 'jsdom'` y `globals: true`",
      "Patrón básico: `render(<Componente />)` → consultar con `screen.getBy*()` → assertion con `expect()` — preferir `screen` sobre desestructurar `render`",
      "PRIORIDAD DE QUERIES: `ByRole` > `ByLabelText` > `ByPlaceholderText` > `ByText` > `ByTestId` — las de rol garantizan accesibilidad",
      "Tipos de queries: `getBy*` (error si no encuentra), `queryBy*` (null si no encuentra), `findBy*` (async, espera a que aparezca)",
      "Simular interacciones: `const user = userEvent.setup()` → `await user.click(btn)` — tests con userEvent DEBEN ser async",
      "Mockear callbacks: `const onClick = vi.fn()` → pasar como prop → `expect(onClick).toHaveBeenCalledTimes(1)`",
      "Mockear módulos: `vi.mock('../ruta/modulo', () => implementacion)` — para aislar el componente bajo test",
      "Patrón Arrange-Act-Assert: organizar datos/mocks → actuar (simular evento) → verificar resultado",
      "Testear comportamiento observable (qué ve el usuario) — NO implementación interna (qué hace el código por dentro)",
      "Los Client Components con `<Link>`, `useRouter`, etc. necesitan wrapper de router en los tests — usar `createMemoryRouter` de `react-router` o el mock de Next.js",
    ],
  },

];