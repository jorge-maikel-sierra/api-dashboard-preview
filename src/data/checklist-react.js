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
      "Verificar que Node.js LTS está instalado: `node -v` — Next.js requiere Node 18.17 o superior",
      "Crear el proyecto con `npx create-next-app@latest my-app` — responder: TypeScript No, ESLint Yes, Tailwind según proyecto, App Router Yes, src/ Yes",
      "Confirmar que el servidor de desarrollo levanta sin errores: `npm run dev` → `http://localhost:3000`",
      "Revisar la estructura generada: `src/app/`, `public/`, `package.json`, `next.config.mjs`, `.gitignore`",
      "Limpiar el contenido de ejemplo de `src/app/page.js` y `src/app/globals.css` — dejar solo el esqueleto mínimo",
      "Crear `src/app/layout.js` con metadata base del proyecto: `title`, `description` — es el layout raíz de toda la app",
      "Añadir `src/components/`, `src/lib/`, `src/hooks/` como carpetas base de organización",
      "Variables de entorno en `.env.local` (nunca commitear) y `.env.example` (sí commitear con claves sin valores)",
      "Configurar `next.config.mjs` con las opciones del proyecto: dominios de imágenes permitidos en `images.remotePatterns` si se usan imágenes externas",
    ],
  },
  {
    section: "🔗 Control de Versiones",
    color: "#60A5FA",
    items: [
      "Verificar que `.gitignore` incluye: `node_modules/`, `.env.local`, `.env*.local`, `.next/`",
      "Crear repositorio vacío en GitHub (sin README ni .gitignore — ya están en el proyecto local)",
      "Conectar: `git remote add origin <URL>` → primer commit: `git add .` → `git commit -m 'feat: initial project setup'`",
      "Subir: `git push -u origin main` — verificar en GitHub que `node_modules/` y `.next/` NO aparecen",
      "Verificar que `.env.local` no está trackeado: `git ls-files --error-unmatch .env.local` debe fallar",
      "Proteger la rama `main` con branch protection rules en GitHub (requiere PR + review antes de merge)",
    ],
  },
  {
    section: "🎨 Calidad de Código",
    color: "#FBBF24",
    items: [
      "Verificar que ESLint está configurado (create-next-app lo incluye) y `eslint-plugin-react-hooks` está activo",
      "Instalar Prettier si no viene incluido: `npm install -D prettier eslint-config-prettier`",
      "Crear `.prettierrc` con las preferencias del proyecto — asegurarse de que ESLint y Prettier no conflictúen",
      "Configurar VS Code: `\"editor.formatOnSave\": true` en `settings.json`",
      "Instalar las extensiones VS Code: ESLint, Prettier, y la extensión oficial de React Developer Tools",
    ],
  },
  {
    section: "🛠 React Developer Tools",
    color: "#FB7185",
    items: [
      "Instalar la extensión React Developer Tools en el navegador — hacerlo desde el día uno como hábito",
      "Pestaña 'Components': inspeccionar árbol de componentes, props y state en tiempo real — usarla para debuggear antes de `console.log`",
      "Pestaña 'Profiler': medir el rendimiento de renders — identificar qué componentes se re-renderizan innecesariamente",
      "Usar el selector (⊕) para hacer click en un elemento de la página y localizar el componente que lo renderiza",
      "React DevTools solo muestra información completa en modo desarrollo — en producción está limitado",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 2: FUNDAMENTOS REACT
  // ═══════════════════════════════════════════════════════

  {
    section: "🧩 Componentes React",
    color: "#F97316",
    items: [
      "Entender qué es un componente: función JavaScript que retorna JSX — fragmento de UI reutilizable e independiente",
      "Nombre SIEMPRE en PascalCase: `Button`, no `button` — React usa esto para distinguir componentes de etiquetas HTML",
      "Un componente por archivo en `src/components/` — nombrar el archivo igual que el componente: `Button.jsx`",
      "Exportar con `export default NombreComponente` — importar con `import Button from '@/components/Button'`",
      "No es necesario `import React from 'react'` en cada archivo desde React 17+ — el nuevo JSX transform lo gestiona",
      "Usar el componente como etiqueta: `<Button />` si no tiene hijos, `<Button>texto</Button>` si los tiene",
      "En Next.js, los componentes en `src/app/` son Server Components por defecto — para interactividad agregar `'use client'` al inicio del archivo",
    ],
  },
  {
    section: "🏷️ JSX — Sintaxis y Reglas",
    color: "#FBBF24",
    items: [
      "JSX compila a `React.createElement()` — no es HTML, son objetos JavaScript con sintaxis similar a HTML",
      "REGLA 1 — Un único elemento raíz por return: usar `<div>` para nodo real, o `<>...</>` (Fragment) si no se quiere nodo extra en el DOM",
      "REGLA 2 — Cerrar todas las etiquetas: `<input />`, `<Image />`, `<li></li>` — no existen tags implícitamente auto-cerradas",
      "REGLA 3 — camelCase en atributos: `class` → `className`, `for` → `htmlFor`, `stroke-width` → `strokeWidth`",
      "Insertar expresiones JS en JSX con `{}`: variables, ternarios, llamadas a funciones — no statements (no `if`, no `for`)",
      "Dobles llaves `{{ }}` para estilos inline: `<div style={{ color: 'red', fontSize: 14 }}>` — el externo es JSX, el interno es el objeto",
      "Strings con atributos JSX: comillas para strings literales (`title='hola'`), llaves para expresiones (`fontSize={14}`)",
    ],
  },
  {
    section: "📦 Props — Pasar Datos entre Componentes",
    color: "#FB7185",
    items: [
      "Flujo unidireccional: datos siempre de padre → hijo a través de props — nunca al revés directamente",
      "Desestructurar props en los parámetros: `function Button({ text, color, onClick })` — más conciso que `props.text`",
      "Valores por defecto en la desestructuración: `function Button({ text = 'Click', color = 'blue' })` — protege de `undefined`",
      "Las props son de solo lectura dentro del componente hijo — nunca mutar `props.x = valor`",
      "Pasar funciones como props (callback): `<Button onClick={handleClick} />` — pasar la REFERENCIA, nunca la llamada `onClick={handleClick()}` ❌",
      "Si la función necesita argumentos, envolver en arrow: `onClick={() => handleClick(id)}` — evita ejecución inmediata",
      "Prop especial `children`: contenido JSX entre las etiquetas del componente — `<Card><p>hola</p></Card>` → `props.children`",
    ],
  },
  {
    section: "🔁 Renderizado de Listas y Condicional",
    color: "#34D399",
    items: [
      "Renderizar listas con `.map()` dentro de `{}` en JSX — nunca hardcodear elementos repetidos cuando hay un array de datos",
      "Separar componentes: `<List />` para el contenedor, `<ListItem />` para cada elemento — mejora legibilidad y reutilización",
      "CONDICIONAL con ternario: `{condición ? <Elemento /> : null}` — `null` no renderiza nada en el DOM",
      "CONDICIONAL con `&&`: `{condición && <Elemento />}` — PITFALL: `{0 && <X />}` renderiza `0` porque React muestra números",
      "CONDICIONAL con early returns: `if (!data) return <Loading />` → `if (error) return <Error />` → return principal con datos",
      "Preferir early returns sobre ternarios anidados — los ternarios encadenados son difíciles de leer",
    ],
  },
  {
    section: "🔑 Keys en Listas",
    color: "#A78BFA",
    items: [
      "Cada elemento renderizado con `.map()` DEBE tener `key` única y estable — React la usa para optimizar el re-render del DOM",
      "Usar el `id` de los datos como key — generarlo con `crypto.randomUUID()` al definir la estructura, nunca durante el render",
      "ANTI-PATRÓN: `key={Math.random()}` o `key={crypto.randomUUID()}` en el render — genera key nueva en cada render, inutilizando su propósito",
      "El índice del array como key solo es aceptable en listas completamente estáticas — en listas dinámicas causa bugs al reordenar o eliminar",
      "`key` no es accesible con `props.key` — si necesitas el id dentro del componente, pásalo también como otra prop",
      "Keys deben ser únicas entre hermanos del mismo nivel — no necesitan ser globalmente únicas",
      "Cambiar la `key` de un componente fuerza su reinicio completo (desmontaje + remontaje) — útil para resetear estado interno",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 3: ESTADO
  // ═══════════════════════════════════════════════════════

  {
    section: "🧠 useState — Estado Básico",
    color: "#00D4FF",
    items: [
      "Estado = la 'memoria' de un componente: información que persiste entre renders y que al cambiar dispara un re-render",
      "Distinguir estado de props: props son externas y de solo lectura; estado es interno y el componente lo controla",
      "Sintaxis: `const [valor, setValor] = useState(valorInicial)` — convención: prefijo `set` en la función actualizadora",
      "El valor inicial solo se usa en el primer render — en renders posteriores React provee el estado más reciente",
      "Llamar a `setValor(nuevoValor)` desencadena re-render — React actualiza el DOM solo donde hay cambios (reconciliación)",
      "REGLAS DE LOS HOOKS: solo llamar hooks en el nivel superior del componente (nunca dentro de `if`, `for`, funciones anidadas)",
      "INPUTS CONTROLADOS: vincular `value` a estado y actualizar con `onChange`: `<input value={val} onChange={e => setVal(e.target.value)} />`",
      "Solo funciona en Client Components — los Server Components de Next.js no pueden tener estado: agregar `'use client'` al archivo",
    ],
  },
  {
    section: "🔄 Estado Avanzado — Inmutabilidad",
    color: "#E879F9",
    items: [
      "REGLA FUNDAMENTAL: nunca mutar el estado directamente — siempre crear un nuevo objeto/array y pasarlo a la función `set`",
      "React usa `Object.is()` para comparar estado: pasar la misma referencia de objeto/array NO dispara re-render aunque el contenido haya cambiado",
      "Objetos en estado: usar spread para copiar y sobrescribir: `setPerson({ ...person, age: person.age + 1 })`",
      "Arrays en estado: usar métodos inmutables: `map`, `filter`, `concat`, spread (`[...arr, nuevoItem]`) — nunca `push`, `splice`, mutación directa",
      "Estado como snapshot: dentro del mismo handler, el estado tiene el mismo valor antes y después de `set` — el nuevo valor llega en el próximo render",
      "FUNCIÓN ACTUALIZADORA: `setCount(prev => prev + 1)` garantiza recibir el estado más reciente — usar siempre que se actualice basándose en el valor anterior",
      "React agrupa (batches) múltiples `setState` del mismo evento — el componente re-renderiza solo una vez al final",
      "No guardar en estado valores que se pueden calcular a partir de estado o props — derivarlos directamente en el render",
      "Nunca llamar a `setState` directamente en el cuerpo del componente (fuera de handlers o effects) — causa bucle infinito",
    ],
  },
  {
    section: "⚙️ useReducer — Estado Complejo",
    color: "#F87171",
    items: [
      "Reducer = función pura `(state, action) => newState` — recibe estado anterior y acción, retorna nuevo estado sin mutar el anterior",
      "Una acción = objeto con `type` que describe qué pasó: `{ type: 'ADDED_ITEM', payload: item }` — convención: tipos en UPPER_SNAKE_CASE",
      "Sintaxis: `const [state, dispatch] = useReducer(reducer, estadoInicial)` — `dispatch({ type: 'ACCION' })` actualiza el estado",
      "Implementar con `switch/case` por tipo de acción — incluir `default` que lanza error informativo",
      "CUÁNDO usarlo: múltiples sub-estados relacionados, muchos handlers que modifican el mismo estado, lógica compleja — si es simple, `useState` basta",
      "El reducer puede vivir en un archivo separado (ej: `src/lib/reducer.js`) — facilita testing ya que es una función pura",
      "Para refactorizar desde `useState`: identificar las formas en que el estado cambia → convertirlas en tipos de acción → extraer al reducer",
    ],
  },
  {
    section: "🌍 Context API — Estado Compartido",
    color: "#818CF8",
    items: [
      "Problema que resuelve: prop drilling — pasar datos por múltiples niveles de componentes intermedios que no los necesitan",
      "Usar Context para datos que necesitan muchos componentes en distintos niveles — no como reemplazo de props normales",
      "Tres piezas: `createContext(default)` (crear el contexto), Provider (envolver el árbol), `useContext(Context)` (consumir)",
      "Crear: `export const CartContext = createContext(null)` — definir en su propio archivo en `src/context/`",
      "Proveer (React 19+): `<CartContext value={{ items, addItem }}>` — en React 18 usar `<CartContext.Provider value={...}>`",
      "Consumir: `const { items } = useContext(CartContext)` en cualquier descendiente, sin importar nivel de anidamiento",
      "DESVENTAJA: actualizar el contexto re-renderiza TODOS los consumidores aunque no usen el dato que cambió",
      "SOLUCIÓN: múltiples contextos pequeños y específicos en lugar de un contexto global enorme",
      "Memoizar el objeto `value` del Provider con `useMemo` para evitar re-renders innecesarios en consumidores",
      "Antes de crear un Context, evaluar si composición de componentes (`children`) resuelve el problema sin estado global",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 4: HOOKS AVANZADOS
  // ═══════════════════════════════════════════════════════

  {
    section: "⚡ useEffect — Side Effects",
    color: "#38BDF8",
    items: [
      "Side-effect = interacción con el mundo exterior: fetch a API, timers, suscripciones, manipulación del DOM",
      "Distinguir: rendering code (puro, sin efectos) vs effects (sincronización con sistemas externos) vs event handlers (respuesta a acciones del usuario)",
      "Sintaxis: `useEffect(() => { /* efecto */ }, [deps])` — sin array: se ejecuta en cada render | `[]`: solo al montar | `[a, b]`: al montar y cuando cambia a o b",
      "CLEANUP: retornar función de limpieza para timers, suscripciones y event listeners — `return () => clearInterval(id)`",
      "En Next.js con App Router: preferir Server Components para fetch de datos — `useEffect` para casos que REQUIEREN el cliente (browser APIs, suscripciones en tiempo real)",
      "Dejar que el linter (eslint-plugin-react-hooks) infiera las dependencias — nunca suprimir warnings sin entenderlos",
      "CUÁNDO NO USAR useEffect: valores derivables del estado (calcularlos en el render), eventos del usuario (usar handlers), resetear estado por props (usar `key`)",
    ],
  },
  {
    section: "📌 useRef — Referencias y Valores Persistentes",
    color: "#2DD4BF",
    items: [
      "Ref = objeto `{ current: valor }` que persiste entre renders SIN causar re-render al mutar `current`",
      "Dos usos principales: 1) referencias directas al DOM, 2) persistir valores entre renders sin disparar re-renders (ej: ID de timer)",
      "Adjuntar al DOM: `<input ref={inputRef} />` → acceder con `inputRef.current` — para enfocar, leer dimensiones, reproducir video",
      "Preferir `useRef` sobre `document.querySelector` — garantiza scope correcto al componente específico",
      "Guardar el ID de `setInterval` o `setTimeout` en un ref para poder limpiarlo en el cleanup del `useEffect`",
    ],
  },
  {
    section: "🚀 useMemo & useCallback — Memoización",
    color: "#F59E0B",
    items: [
      "Memoización = almacenar el resultado de una operación costosa y reutilizarlo si los inputs no cambiaron",
      "REGLA: memoizar SOLO ante un problema de rendimiento medible — NO preventivamente (agrega overhead y complejidad)",
      "`useMemo` memoiza un VALOR: `const result = useMemo(() => calcularCostoso(a, b), [a, b])` — retorna valor cacheado si deps no cambian",
      "`useCallback` memoiza una FUNCIÓN: `const fn = useCallback(() => setCount(c => c + 1), [])` — retorna la misma referencia de función",
      "Igualdad referencial: sin memoización, cada render crea nuevos objetos/funciones que rompen las optimizaciones de `React.memo` en componentes hijos",
      "Caso de uso principal con Context: memoizar el objeto `value` del Provider para evitar re-renders en todos los consumidores",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 5: NEXT.JS — APP ROUTER
  // ═══════════════════════════════════════════════════════

  {
    section: "🗂️ Next.js App Router — Estructura y Rutas",
    color: "#00D4FF",
    items: [
      "Cada carpeta dentro de `src/app/` es un segmento de ruta — `src/app/blog/page.js` → `/blog`, `src/app/blog/[slug]/page.js` → `/blog/:slug`",
      "Archivos especiales de ruta: `page.js` (ruta), `layout.js` (layout persistente), `loading.js` (Suspense automático), `error.js` (error boundary), `not-found.js` (404)",
      "`layout.js` envuelve las rutas hijas SIN re-montarse en la navegación — ideal para sidebars, navbars persistentes",
      "Segmentos dinámicos: carpeta `[slug]` → `params.slug` llega como prop al componente de página",
      "Grupos de rutas con `(nombre)` — agrupa rutas sin afectar la URL: `(auth)/login`, `(auth)/register` → `/login`, `/register`",
      "Carpetas privadas con `_nombre` — excluidas del sistema de rutas — usar para componentes internos de un segmento",
      "Navegar con `<Link href='/ruta'>` de `next/link` — NUNCA `<a href>` (provoca recarga) ni React Router (Next.js tiene su propio router)",
      "Navegar programáticamente con `useRouter()` de `next/navigation` (App Router) — `router.push('/ruta')` o `router.replace('/ruta')`",
      "Leer params de URL: `useSearchParams()` para query strings (`?q=valor`) y `useParams()` para segmentos dinámicos (`[slug]`)",
    ],
  },
  {
    section: "⚡ Server vs Client Components",
    color: "#4ADE80",
    items: [
      "Server Components (por defecto): se ejecutan en el servidor, acceden a la DB/filesystem directamente, NO tienen estado ni hooks, NO tienen acceso a browser APIs",
      "Client Components: agregar `'use client'` como primera línea del archivo — habilitados para estado, hooks, event listeners y browser APIs",
      "Estrategia: mantener componentes como Server Components por defecto — agregar `'use client'` solo donde sea necesario",
      "El árbol de la app puede tener Server Components que importen Client Components, pero un Client Component NO puede importar un Server Component directamente",
      "Pasar Server Components como `children` a Client Components está permitido — técnica para mantener partes del árbol en el servidor",
      "Los datos de la DB/API se pueden leer directamente en Server Components con `async/await` — sin necesidad de `useEffect` ni useState para el fetch inicial",
      "Las variables de entorno con `NEXT_PUBLIC_` son accesibles en el cliente — las SIN ese prefijo solo en el servidor (nunca exponer secretos al cliente)",
    ],
  },
  {
    section: "🌐 Fetching de Datos en Next.js",
    color: "#A3E635",
    items: [
      "OPCIÓN SERVIDOR (preferida): fetch directo en Server Components con async/await — los datos llegan pre-renderizados al cliente",
      "Next.js extiende el `fetch` nativo con opciones de caché: `{ cache: 'no-store' }` para datos dinámicos, `{ next: { revalidate: 3600 } }` para ISR",
      "OPCIÓN CLIENTE (para datos interactivos): patrón obligatorio de tres estados: `data`, `loading` (inicializar en `true`), `error` (inicializar en `null`)",
      "El `fetch` nativo NO lanza error en HTTP 4xx/5xx — verificar: `if (!response.ok) throw new Error('server error')`",
      "Usar `.finally(() => setLoading(false))` para desactivar loading tanto en éxito como en error",
      "Early returns en el render: `if (loading) return <Spinner />` → `if (error) return <ErrorMsg />` → return principal con datos",
      "CUSTOM HOOK: extraer lógica de fetch cliente a un hook con prefijo `use`: `useUserData()` → retorna `{ data, loading, error }`",
      "WATERFALL de requests: ejecutar fetches independientes en paralelo con `Promise.all` — evitar esperar uno para lanzar el otro",
      "Para datos en tiempo real o con caché avanzada (deduplicación, revalidación automática) considerar React Query o SWR después de dominar lo básico",
    ],
  },
  {
    section: "🔧 Server Actions",
    color: "#F97316",
    items: [
      "Server Actions = funciones que corren en el servidor, invocadas desde el cliente — reemplazan los API Routes para mutaciones simples",
      "Definir: `'use server'` al inicio de la función (en un Server Component) o al inicio del archivo (en un archivo dedicado como `src/lib/actions.js`)",
      "Pasar la Server Action como prop a un Client Component — desde el cliente se llama como función async normal",
      "Usar con formularios: `<form action={serverAction}>` — funciona sin JavaScript en el cliente (progressive enhancement)",
      "Usar con handlers: `<button onClick={() => serverAction(id)}>` — llamada directa desde event handlers",
      "Siempre revalidar la caché después de una mutación: `revalidatePath('/ruta')` o `revalidateTag('tag')` dentro de la action",
      "Validar los datos en la Server Action con zod u otra librería — nunca confiar en el input del cliente",
      "Las Server Actions tienen acceso completo al servidor: DB, filesystem, variables de entorno secretas",
    ],
  },
  {
    section: "🔍 Metadata y SEO",
    color: "#818CF8",
    items: [
      "Definir metadata estática en cualquier `page.js` o `layout.js`: `export const metadata = { title, description, openGraph, ... }`",
      "El `layout.js` raíz define metadata base de toda la app — las páginas individuales pueden sobrescribirla",
      "Para metadata dinámica (ej: título de un post): `export async function generateMetadata({ params }) { return { title: post.title } }`",
      "Usar `title.template` en el layout raíz: `title: { default: 'Mi App', template: '%s | Mi App' }` — las páginas ponen solo su nombre en `%s`",
      "Incluir `openGraph` para previews en redes sociales: imagen, título, descripción, url — usar `next/og` para generar imágenes dinámicas",
      "Agregar `robots.js` y `sitemap.js` en `src/app/` para SEO avanzado — Next.js los sirve como rutas automáticamente",
      "Verificar que `<head>` no tiene tags duplicados — Next.js deduplicará los metadatos automáticamente",
    ],
  },
  {
    section: "🖼️ Componentes Optimizados de Next.js",
    color: "#00D4FF",
    items: [
      "IMÁGENES: usar siempre `<Image>` de `next/image` en lugar de `<img>` — optimización automática: WebP, lazy loading, tamaños responsivos",
      "`<Image>` requiere `width` y `height` (para imágenes locales) o `fill` con contenedor posicionado para imágenes que llenan el contenedor",
      "Agregar dominios externos permitidos en `next.config.mjs` bajo `images.remotePatterns` antes de usar imágenes de URLs externas",
      "FUENTES: usar `next/font` para cargar fuentes de Google Fonts o locales — elimina layout shift (CLS) y mejora performance",
      "Cargar fuentes en `src/app/layout.js` como variable CSS y aplicarlas globalmente — no cargar fuentes con `@import` en CSS",
      "SCRIPTS externos: usar `<Script>` de `next/script` en lugar de `<script>` HTML — controla la estrategia de carga (`beforeInteractive`, `afterInteractive`, `lazyOnload`)",
    ],
  },
  {
    section: "🔀 Route Handlers — API Routes",
    color: "#A78BFA",
    items: [
      "Route Handlers en `src/app/api/[recurso]/route.js` — exportar funciones con nombre del verbo HTTP: `GET`, `POST`, `PUT`, `DELETE`",
      "Cada función recibe `(request, { params })` — retorna `Response` o `NextResponse` de `next/server`",
      "Usar Route Handlers para: webhooks externos, auth con OAuth, endpoints que deben ser públicos (no Server Actions)",
      "Para mutaciones internas (desde la propia app Next.js) preferir Server Actions — Route Handlers son para API pública o integraciones externas",
      "Validar siempre el body del request en Route Handlers — nunca confiar en el input del cliente",
      "Manejar errores retornando `Response.json({ error: 'mensaje' }, { status: 400 })` con el código HTTP correcto",
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