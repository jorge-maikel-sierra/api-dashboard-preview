// Checklist generada a partir del curso The Odin Project – React con Next.js
// Cada artículo del curso se convierte en una sección con tareas accionables.
// Optimizada: sin duplicados, sin redundancias, con orden lógico progresivo.

export const checklistReact = [
  // ═══════════════════════════════════════════════════════
  // FASE 1: SETUP & ENTORNO
  // ═══════════════════════════════════════════════════════
  {
    section: "⚙️ Configuración del Entorno React",
    color: "#61DAFB",
    items: [
      "Instalar la versión LTS más reciente de Node.js — verificar con `node -v` antes de crear el proyecto",
      "Comprender por qué se necesitan toolchains (gestor de paquetes, bundler, compilador) y no construir uno desde cero",
      "Elegir la toolchain adecuada según el caso: Vite para SPAs, Next.js para apps con SSR/SSG — CRA está deprecado desde 2023",
      "Usar Vite para prototipado y aprendizaje: `npm create vite@latest my-app -- --template react`",
      "Para proyectos con Next.js: `npx create-next-app@latest my-app` — responder las preguntas del CLI según el proyecto (App Router Yes para Next.js 13+)",
      "Confirmar que el servidor de desarrollo levanta sin errores — `http://localhost:3000` (Next.js) o `http://localhost:5173` (Vite)",
      "Familiarizarse con los archivos generados: `package.json`, `next.config.js` / `vite.config.js`, `.gitignore`, `README.md`",
    ],
  },
  {
    section: "📁 Estructura del Proyecto y Punto de Entrada",
    color: "#A78BFA",
    items: [
      "Entender la carpeta `public/` — archivos estáticos accesibles directamente por URL (imágenes, íconos, `robots.txt`)",
      "Entender la carpeta `src/` — todo el código fuente de la aplicación vive aquí",
      "Mantener una estructura de carpetas clara: `components/`, `hooks/`, `lib/`, `data/`, `app/` (o `pages/` en Next.js Pages Router)",
      "Crear componentes en archivos `.jsx` (o `.tsx` si usas TypeScript) — un componente por archivo como convención",
      "EN VITE — `main.jsx` es el punto de entrada: `createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)` monta la app en el `<div id='root'>` de `index.html`",
      "Saber qué hace `<StrictMode>` — activa advertencias adicionales y doble-montaje en desarrollo para detectar bugs; no afecta producción",
      "EN NEXT.JS — `app/layout.js` es el layout raíz que envuelve todas las páginas (equivalente al StrictMode + root); `app/page.js` es la página raíz (`/`)",
      "En Next.js, cada carpeta dentro de `app/` es un segmento de ruta — no poner lógica de negocio en archivos de ruta, extraerla a `lib/` o `services/`",
      "Entender que en Next.js las páginas son Server Components por defecto (sin estado, sin hooks) — añadir `'use client'` solo cuando se necesite interactividad",
    ],
  },
  {
    section: "🔗 Control de Versiones con Git & GitHub",
    color: "#60A5FA",
    items: [
      "Inicializar Git en el proyecto local si no existe: `git init`",
      "Verificar que `.gitignore` incluye `node_modules/`, `.env`, `.next/` (Next.js) o `dist/` (Vite)",
      "Crear un repositorio vacío en GitHub (sin README ni .gitignore — ya los tienes en el proyecto local)",
      "Agregar el remote: `git remote add origin <URL del repo>`",
      "Hacer el primer commit: `git add .` → `git commit -m 'feat: initial project setup'`",
      "Subir al repositorio: `git push -u origin main` — verificar en GitHub que `node_modules/` NO aparece",
      "Proteger la rama `main` con reglas de branch protection en GitHub (opcional pero recomendado desde el inicio)",
    ],
  },
  {
    section: "🧹 Limpiar el Proyecto Inicial",
    color: "#34D399",
    items: [
      "Eliminar el contenido de ejemplo generado por Vite/Next.js — no dejar código de plantilla en producción",
      "En Vite: vaciar `App.jsx` y dejar un componente mínimo; en Next.js: reemplazar el contenido de `app/page.js`",
      "Eliminar los estilos de ejemplo en `App.css` e `index.css` y los assets de ejemplo (`react.svg`, `vite.svg`) que no se usen",
      "Confirmar que el contenido mínimo propio se muestra correctamente en el navegador sin errores en consola",
      "Hacer un commit del proyecto limpio antes de empezar a desarrollar features",
    ],
  },
  {
    section: "🎨 Formateo & Calidad de Código",
    color: "#FBBF24",
    items: [
      "Instalar las extensiones ESLint y Prettier en VS Code — lint en tiempo real y formateo automático al guardar",
      "Configurar VS Code: `\"editor.formatOnSave\": true` en `settings.json`",
      "Verificar que `eslint.config.js` / `.eslintrc` está configurado con las reglas de React y que `eslint-plugin-react-hooks` está activo",
      "Instalar y configurar Prettier si no viene incluido: `npm install -D prettier eslint-config-prettier`",
      "Crear `.prettierrc` con las preferencias del proyecto — asegurarse de que ESLint y Prettier no conflictúen usando `eslint-config-prettier`",
    ],
  },
  {
    section: "🛠 React Developer Tools",
    color: "#FB7185",
    items: [
      "Instalar la extensión React Developer Tools en Chrome o Firefox — hacerlo desde el inicio del proyecto como hábito",
      "Usar la pestaña 'Components' para inspeccionar el árbol de componentes, props y state en tiempo real",
      "Usar la pestaña 'Profiler' para medir el rendimiento de renders",
      "Practicar modificar props/state desde DevTools para entender cómo reacciona la UI",
      "Usar el ícono de selector (⊕) para hacer click en un elemento de la página y localizar el componente que lo renderiza",
      "Entender que React DevTools solo funciona plenamente en modo desarrollo — en producción está limitado",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 2: FUNDAMENTOS DE REACT
  // ═══════════════════════════════════════════════════════
  {
    section: "🧩 Componentes de React",
    color: "#F97316",
    items: [
      "Entender qué es un componente: un fragmento de UI reutilizable e independiente — una función JavaScript que devuelve JSX",
      "Identificar cómo dividir una UI en componentes: App (raíz), Navbar, MainArticle, NewsletterForm, etc.",
      "Crear un componente funcional básico en su propio archivo dentro de `src/components/` — empezar por un `Greeting.jsx` propio",
      "El nombre del componente SIEMPRE en PascalCase: `Greeting`, no `greeting` — React lo usa para distinguir componentes de etiquetas HTML",
      "Exportar con `export default NombreComponente` — importar con `import Greeting from './Greeting.jsx'`",
      "Entender la diferencia entre `export default` (un export por archivo, sin llaves) y named export (múltiples exports, con llaves `{}`)",
      "Desde React v17+ NO es necesario `import React from 'react'` en cada archivo — el nuevo JSX transform lo gestiona",
      "Usar el componente en JSX como etiqueta auto-cerrada: `<Greeting />` — practicar con contenido real, no solo 'Hello World'",
    ],
  },
  {
    section: "🏷️ JSX — Sintaxis y Reglas",
    color: "#FBBF24",
    items: [
      "Entender qué es JSX: extensión de sintaxis de JavaScript que compila a `React.createElement()` — no es HTML, son objetos JavaScript",
      "JSX une lógica de renderizado y markup en el mismo lugar (el componente) — esa es su ventaja frente a separar HTML/JS",
      "REGLA 1 — Retornar un único elemento raíz: usar `<div>` para un nodo real en el DOM, o `<>...</>` (Fragment) si no quieres nodo extra",
      "REGLA 2 — Cerrar todas las etiquetas explícitamente: `<input />`, `<li></li>` — no existen etiquetas auto-cerradas implícitas en JSX",
      "REGLA 3 — camelCase en atributos: `class` → `className`, `for` → `htmlFor`, `stroke-width` → `strokeWidth`, `font-size` → `fontSize`",
      "Usar `{}` en JSX para insertar cualquier expresión JavaScript válida: variables, llamadas a funciones, operadores ternarios",
      "Practicar la conversión de HTML a JSX: envolver en raíz, cerrar tags, convertir atributos a camelCase — usar `react.new` para pruebas rápidas",
      "Distinguir el tipo de error en consola: raíz única faltante vs. tag no cerrado vs. atributo incorrecto — React muestra mensajes específicos",
      "Leer las docs oficiales 'Writing Markup with JSX' y 'JavaScript in JSX with Curly Braces'",
    ],
  },
  {
    section: "📦 Props — Pasar Datos entre Componentes",
    color: "#FB7185",
    items: [
      "Entender el flujo de datos unidireccional: los datos viajan de padre a hijo a través de props — nunca al revés directamente",
      "Pasar props con sintaxis de atributos: strings con comillas `text='Hola'`, otros tipos con llaves `fontSize={12}` `active={true}`",
      "Desestructurar las props en los parámetros para código más conciso: `function Button({ text, color, fontSize })`",
      "Definir valores por defecto en la desestructuración: `function Button({ text = 'Click Me!', color = 'blue' })` — protege de `undefined`",
      "Las props son de solo lectura dentro del componente hijo — nunca mutar `props.x = valor`",
      "Pasar funciones como props (callback): `<Button handleClick={handleButtonClick} />` — pasar la referencia, NUNCA la llamada `handleClick={handleButtonClick()}` ❌",
      "Cuando la función necesita argumentos, envolverla en arrow function: `handleClick={() => handleButtonClick('url')}` para evitar ejecución inmediata",
      "Cada instancia del componente puede recibir props distintas — un solo `<Button />` reemplaza múltiples variantes hardcodeadas",
      "Leer la doc oficial 'Passing Props to a Component'",
    ],
  },
  {
    section: "🔁 Renderizado de Listas y Condicional",
    color: "#34D399",
    items: [
      "Renderizar listas con `.map()` dentro de JSX usando `{}` — nunca hardcodear elementos repetidos cuando hay un array de datos",
      "Separar componentes de lista: `<List />` para el contenedor y `<ListItem />` para cada elemento — mejora la legibilidad y reutilización",
      "RENDERIZADO CONDICIONAL — Ternario: `condición ? <Elemento /> : null` — `null` no renderiza nada",
      "RENDERIZADO CONDICIONAL — Operador `&&`: `condición && <Elemento />` — PITFALL: `0 && <X />` renderiza `0` porque React muestra valores numéricos",
      "RENDERIZADO CONDICIONAL — Early returns: `if (!data) return <Loading />` → `if (data.length === 0) return <EmptyState />` → return principal con datos",
      "Preferir `if/else` con early returns sobre ternarios anidados — los ternarios encadenados son difíciles de leer y mantener",
      "Leer las guías oficiales de React sobre Conditional Rendering y Rendering Lists",
    ],
  },
  {
    section: "🔑 Keys en React",
    color: "#A78BFA",
    items: [
      "Entender para qué sirve `key`: permite a React identificar qué elemento de una lista cambió, se añadió o se eliminó — optimiza el re-render",
      "Cada elemento renderizado con `.map()` DEBE tener una prop `key` única y estable — típicamente el `id` de los datos",
      "Generar ids con `crypto.randomUUID()` al definir la estructura de datos — almacenar el id EN el objeto, nunca generarlo durante el render",
      "ANTI-PATRÓN: `key={Math.random()}` o `key={crypto.randomUUID()}` en el render crea una key nueva cada vez, inutilizando su propósito",
      "El índice del array como `key` solo es aceptable si la lista es completamente estática — en listas dinámicas provoca bugs sutiles al reordenar o eliminar",
      "`key` no es accesible dentro del componente con `props.key` — si necesitas el id internamente, pásalo como otra prop",
      "Las `keys` deben ser únicas entre hermanos (siblings) del mismo nivel — no necesitan ser globalmente únicas",
      "Uso avanzado: cambiar la `key` de un componente fuerza su reinicio completo (desmontaje + montaje) — útil para resetear estado interno",
      "Leer la sección oficial de React docs sobre keys",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 3: ESTADO Y CICLO DE VIDA
  // ═══════════════════════════════════════════════════════
  {
    section: "🧠 Introducción al Estado (State)",
    color: "#00D4FF",
    items: [
      "Entender qué es el estado: la 'memoria' de un componente — información que persiste entre renders",
      "Distinguir estado de props: props son externas y de solo lectura; estado es interno y el componente lo gestiona",
      "Sintaxis: `const [valor, setValor] = useState(valorInicial)` — nombrar la función actualizadora con prefijo `set`",
      "El valor inicial solo se usa en el primer render — en renders posteriores React provee el estado más reciente",
      "Añadir múltiples variables de estado con múltiples llamadas a `useState` — cada una es independiente",
      "Llamar a `setValor(nuevoValor)` desencadena un re-render: React re-ejecuta la función del componente y aplica al DOM solo los cambios necesarios (reconciliación via Virtual DOM)",
      "REGLAS DE LOS HOOKS — Solo llamar hooks en el nivel superior del componente (nunca dentro de `if`, `for`, funciones anidadas) y solo desde componentes funcionales o custom hooks",
      "Leer las docs oficiales 'State: A Component\\'s Memory' y 'Render and Commit'",
    ],
  },
  {
    section: "🔄 Estado Avanzado",
    color: "#E879F9",
    items: [
      "REGLA DE ORO: nunca mutar el estado directamente — siempre crear un nuevo objeto/array y pasarlo a la función `set`",
      "No guardar en estado valores que se puedan calcular a partir de estado o props — derivarlos directamente en el render",
      "Objetos en estado: usar spread para copiar y sobrescribir: `setPerson({ ...person, age: person.age + 1 })`",
      "Arrays en estado: usar métodos inmutables (`map`, `filter`, `concat`, spread) — nunca `push`, `splice` o mutación directa",
      "React usa `Object.is()` para comparar estado anterior con nuevo — pasar la misma referencia NO dispara re-render",
      "Objetos/arrays anidados requieren copiar todos los niveles — con nesting profundo considerar Immer",
      "El estado es una SNAPSHOT: `person` tiene el mismo valor antes y después de llamar a `setPerson` dentro del mismo handler — el nuevo valor llega en el próximo render",
      "FUNCIÓN ACTUALIZADORA: `setCount(prev => prev + 1)` garantiza recibir el estado más reciente — usar cuando se actualiza basándose en el valor anterior",
      "React agrupa (batches) múltiples `setState` en el mismo evento — el componente solo re-renderiza una vez",
      "Nunca llamar a `setState` directamente en el cuerpo del componente fuera de un handler — causa bucle infinito de re-renders",
      "INPUTS CONTROLADOS: vincular `value` a estado y actualizar con `onChange`: `<input value={value} onChange={e => setValue(e.target.value)} />`",
      "Leer las docs oficiales 'State as a Snapshot', 'Choosing the State Structure' y 'Sharing State Between Components'",
    ],
  },
  {
    section: "⚡ Efectos Secundarios — useEffect",
    color: "#38BDF8",
    items: [
      "Entender qué es un side-effect: interacción con el mundo exterior — fetch a API, timers, manipulación del DOM, suscripciones",
      "Distinguir rendering code (puro) de effects (sincronización con sistemas externos) y de event handlers (respuesta a acciones del usuario)",
      "Sintaxis: `useEffect(() => { /* efecto */ }, [dependencias])` — sin array se ejecuta en CADA render (raramente deseado)",
      "Array vacío `[]`: se ejecuta solo al montar — Array con valores `[a, b]`: se ejecuta al montar Y cuando `a` o `b` cambien",
      "Nunca poner `setInterval`, `fetch` u otros side-effects directamente en el cuerpo del componente — causan bucles infinitos",
      "CLEANUP: retornar una función de limpieza para timers, suscripciones y event listeners — evita memory leaks",
      "StrictMode en desarrollo monta-desmonta-remonta para detectar efectos sin cleanup correcto",
      "Dejar que el linter (`eslint-plugin-react-hooks`) infiera las dependencias — nunca suprimir warnings sin entenderlos",
      "CUÁNDO NO USAR useEffect — valores derivados del estado (calcularlos en el render), eventos del usuario (usar handlers), resetear estado por props (usar `key`), compartir estado entre hermanos (lifting state up)",
      "Pregunta de diagnóstico: '¿Necesito sincronizarme con un sistema externo (servidor, API, DOM)?' — si no, probablemente no necesitas el efecto",
      "Leer las docs oficiales 'You Might Not Need an Effect' y sobre el ciclo de vida con `useEffect`",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 4: HOOKS AVANZADOS
  // ═══════════════════════════════════════════════════════
  {
    section: "📌 useRef — Referencias y Valores Persistentes",
    color: "#2DD4BF",
    items: [
      "Entender qué es una `ref`: objeto `{ current: valor }` que persiste entre renders SIN causar re-renders al mutar `current`",
      "Dos usos principales: 1) referencias al DOM para manipularlo directamente, 2) persistir valores entre renders (ej: IDs de timers)",
      "Adjuntar al DOM: `<input ref={inputRef} />` → acceder con `inputRef.current` — para enfocar, reproducir video, leer dimensiones",
      "Preferir `useRef` sobre `querySelector`: `querySelector` puede encontrar elementos fuera del componente, `useRef` garantiza scope correcto",
      "Usar `useRef` para guardar el ID de `setInterval` y limpiarlo en el cleanup de `useEffect`",
      "Leer la guía interactiva de React docs para `useRef` y el artículo 'Making setInterval Declarative with React Hooks' de Dan Abramov",
    ],
  },
  {
    section: "🚀 useMemo & useCallback — Memoización",
    color: "#F59E0B",
    items: [
      "Entender memoización: almacenar el resultado de una operación costosa y reutilizarlo si los inputs no cambiaron",
      "Cuándo aplicar memoización: SOLO ante un problema de rendimiento medible — NO preventivamente (overhead + complejidad innecesaria)",
      "`useMemo` memoiza un VALOR: `const resultado = useMemo(() => calcularCostoso(a, b), [a, b])` — retorna el valor cacheado si deps no cambian",
      "`useCallback` memoiza una FUNCIÓN: `const handleClick = useCallback(() => setCount(c => c + 1), [])` — retorna la misma referencia de función",
      "Equivalencia: `useCallback(fn, deps)` === `useMemo(() => fn, deps)` — `useCallback` es syntax sugar para funciones",
      "Igualdad referencial: `{} !== {}` en JavaScript — sin memoización, cada render crea nuevos objetos/funciones que rompen `React.memo` en hijos",
      "Caso de uso con Context API: memoizar el objeto `value` del Provider para evitar re-renders innecesarios en todos los consumidores",
      "Leer 'When to useMemo and useCallback' de Kent C. Dodds — entender cuándo NO vale la pena",
    ],
  },
  {
    section: "⚙️ useReducer — Estado Complejo",
    color: "#F87171",
    items: [
      "Entender qué es un reducer: función pura `(state, action) => newState` — recibe estado anterior y acción, retorna nuevo estado",
      "Una acción es un objeto con `type` que describe lo que pasó: `{ type: 'incremented_count' }` o `{ type: 'set_count', value: 5 }`",
      "Usar `switch` con `case` por tipo de acción — incluir `default` que lance error informativo",
      "Sintaxis: `const [state, dispatch] = useReducer(reducer, estadoInicial)` — `dispatch({ type: 'accion' })` actualiza el estado",
      "CUÁNDO usarlo: lógica de estado compleja, múltiples sub-estados relacionados o muchos handlers que actualizan el mismo estado — si es simple, `useState` basta",
      "Ventajas: separa lógica de estado del componente (puede vivir en archivo separado), facilita debugging (acciones con type explícito) y testing (funciones puras)",
      "Mismas reglas de inmutabilidad y comparación que `useState` — el reducer nunca debe mutar el estado",
      "Refactorizar `useState` complejo: identificar las formas en que el estado cambia → convertirlas en tipos de acción → extraer al reducer",
      "Leer las docs oficiales 'Extracting state logic into a reducer' y la referencia de `useReducer`",
    ],
  },
  {
    section: "🌍 Context API — Estado Global",
    color: "#818CF8",
    items: [
      "Entender el problema: prop drilling — pasar datos por múltiples niveles de componentes intermedios que no los necesitan",
      "Distinguir cuándo usar Context vs props: props para padre-hijo directo; Context para datos que necesitan muchos componentes en distintos niveles",
      "Tres piezas: `createContext(default)` (crear), el Context Object como Provider (proveer), `useContext(Context)` (consumir)",
      "Crear: `export const ShopContext = createContext(valorDefault)` — definir un objeto default descriptivo para autocompletado y tests",
      "Proveer: `<ShopContext value={{ cartItems, addToCart }}>` — en React 19+ usar el Context directamente; en React <19 usar `.Provider`",
      "Consumir: `const { cartItems } = useContext(ShopContext)` en cualquier componente descendiente, sin importar nivel de anidamiento",
      "DESVENTAJA: actualizar el contexto re-renderiza TODOS los consumidores aunque no usen el dato que cambió",
      "SOLUCIONES: múltiples contextos pequeños y específicos; composición de componentes (`children`, render props); librerías como Zustand para optimización avanzada",
      "Antes de crear un Context, considerar si la composición de componentes resuelve el problema sin estado global",
      "Leer la doc oficial de `useContext`, 'Prop Drilling' de Kent C. Dodds y 'React Component Composition' de Robin Wieruch",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 5: ENRUTAMIENTO, DATOS Y ESTILOS
  // ═══════════════════════════════════════════════════════
  {
    section: "🗺️ React Router — Enrutamiento Cliente",
    color: "#00D4FF",
    items: [
      "Entender el enrutamiento client-side: JavaScript intercepta cambios de URL sin recargar la página — SPA vs MPA",
      "Instalar: `npm install react-router` — configurar con `createBrowserRouter([{ path, element }])`",
      "Envolver la app con `<RouterProvider router={router} />` en `main.jsx`",
      "Usar `<Link to='ruta'>` en lugar de `<a href='ruta'>` — `<a>` provoca recarga de página completa",
      "RUTAS ANIDADAS: `children: [{ path, element }]` + `<Outlet />` en el padre para renderizar hijos según la ruta activa",
      "Ruta índice: `{ index: true, element: <Default /> }` — se muestra en el Outlet cuando no hay ruta hija activa",
      "SEGMENTOS DINÁMICOS: `profile/:name` — acceder con `const { name } = useParams()`",
      "Manejar rutas no encontradas con `errorElement` en la configuración del router",
      "Navegar programáticamente con `useNavigate()`: `navigate('/ruta')` o `navigate(-1)` para ir atrás",
      "Pasar datos a hijos del Outlet con `<Outlet context={valor} />` → leerlos con `useOutletContext()` en el hijo",
      "REFACTORIZAR las rutas a un archivo `routes.jsx` separado — permite reutilizarlas en `main.jsx` y en tests con `createMemoryRouter`",
      "TESTING: los componentes con `<Link>`, `useNavigate`, etc. necesitan contexto de router — usar `<MemoryRouter>` o `createMemoryRouter`",
      "Leer el tutorial oficial de React Router y la documentación de `useNavigate`, `useOutletContext`",
    ],
  },
  {
    section: "🌐 Fetching de Datos en React",
    color: "#4ADE80",
    items: [
      "Envolver siempre el `fetch` dentro de un `useEffect` con array vacío `[]` cuando se necesita datos al montar",
      "Patrón de los tres estados obligatorios: `data`, `loading` (inicializar en `true`) y `error` (inicializar en `null`)",
      "Usar `.finally(() => setLoading(false))` para desactivar loading tanto en éxito como en error",
      "El `fetch` nativo NO lanza error por HTTP 4xx/5xx — verificar: `if (response.status >= 400) throw new Error('server error')`",
      "Capturar errores de red Y de respuesta en `.catch()`: `setError(error)` — nunca dejar solo `console.error`",
      "Early returns en el render: `if (loading)` → `if (error)` → return principal con datos",
      "CUSTOM HOOK: extraer la lógica de fetch a un hook con prefijo `use` (`useUserData`, etc.) que retorne `{ data, loading, error }`",
      "WATERFALL DE REQUESTS: elevar el fetch del hijo al padre (lifting the request) para que ambos se lancen en paralelo — o usar `Promise.all` para requests independientes",
      "En aprendizaje usar vanilla `fetch` — las librerías (React Query, SWR) resuelven caché y revalidación, estudiarlas después de dominar lo básico",
      "Leer 'How to fetch data in React with performance in mind'",
    ],
  },
  {
    section: "🎨 Estilos en React",
    color: "#F472B6",
    items: [
      "Entender el problema del scope global en CSS: a medida que la app crece, los nombres de clases colisionan entre componentes",
      "CSS MODULES: archivos `.module.css` con scope local — `import styles from './Comp.module.css'` → `className={styles.miClase}`",
      "CSS Modules genera nombres únicos en build (`Comp_miClase_x7k2`) — sin colisiones en el scope global",
      "CSS-IN-JS: estilos en JavaScript con scope automático y estilos dinámicos — `styled-components` es la librería más popular",
      "CSS UTILITY FRAMEWORKS: Tailwind CSS — clases de utilidad predefinidas directamente en el JSX",
      "COMPONENT LIBRARIES: componentes estilizados con accesibilidad incorporada — Material UI, Radix UI, Chakra UI",
      "ICON LIBRARIES: `lucide-react` — iconos como componentes React, recomendado usarlas desde el inicio",
      "Para aprendizaje: implementar estilos desde cero con CSS Modules — no usar frameworks CSS ni component libraries hasta dominar los fundamentos",
      "Leer la documentación de CSS Modules y 'CSS vs CSS-in-JS' para entender los trade-offs",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 6: TESTING
  // ═══════════════════════════════════════════════════════
  {
    section: "🧪 Testing en React — Vitest + RTL",
    color: "#34D399",
    items: [
      "En proyectos con Vite usar Vitest como test runner — se integra nativamente con la configuración de Vite",
      "Instalar: `npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom`",
      "Configurar `globals: true` en `vite.config.js` O importar explícitamente `describe`, `it`, `expect` desde `vitest`",
      "`@testing-library/react` → `render` y `screen`; `@testing-library/jest-dom` → matchers semánticos; `@testing-library/user-event` → simulación de interacciones; `jsdom` → DOM en memoria",
      "Patrón básico: `render(<App />)` → consultar con `screen.getBy*()` → assertion con `expect()` — preferir `screen` sobre desestructurar `render`",
      "PRIORIDAD DE QUERIES: `ByRole` > `ByLabelText` > `ByPlaceholderText` > `ByText` > `ByTestId` — las queries por rol garantizan accesibilidad",
      "Tipos de queries: `getBy*` (error si no encuentra), `queryBy*` (null si no encuentra), `findBy*` (async, espera a que aparezca)",
      "Simular eventos: `const user = userEvent.setup()` → `await user.click(button)` — los tests con userEvent deben ser `async`",
      "RTL desmonta el componente después de cada test — renderizar de nuevo o crear una función `setup()` para tests repetitivos",
      "SNAPSHOT TESTS: usar de forma selectiva — detectan cambios pero generan falsos positivos/negativos; no sustituyen assertions semánticas",
      "Leer 'Testing Implementation Details' de Kent C. Dodds — testear comportamiento observable, no implementación interna",
    ],
  },
  {
    section: "🎭 Mocking — Callbacks y Componentes",
    color: "#C084FC",
    items: [
      "Entender qué es un mock: función/módulo simulado que reemplaza la implementación real para aislar lo que se prueba",
      "Crear función mock con `vi.fn()` → pasarla como prop → assertions: `expect(onClick).toHaveBeenCalled()` / `.not.toHaveBeenCalled()`",
      "Configurar `userEvent.setup()` ANTES de `render()` — práctica recomendada por RTL",
      "Preferir mocks dentro de cada `it` sobre `beforeEach` — si se repite mucho, extraer función `setup()` personalizada",
      "Mockear módulos completos con `vi.mock('../ruta/modulo', () => implementacion)` — renderizar solo lo mínimo necesario del componente mockeado",
      "Usar `data-testid` en componentes mockeados para identificarlos en queries (último recurso para queries)",
      "Patrón Arrange-Act-Assert (AAA): organizar datos/mocks → actuar (simular evento) → assertions — aplicarlo en todos los tests",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 7: VERIFICACIÓN DE TIPOS
  // ═══════════════════════════════════════════════════════
  {
    section: "🔎 Verificación de Tipos con PropTypes",
    color: "#FB923C",
    items: [
      "IMPORTANTE: PropTypes y defaultProps están deprecados a partir de React 19 — considerar TypeScript en proyectos nuevos",
      "Instalar: `npm install --save prop-types` → importar: `import PropTypes from 'prop-types'`",
      "Definir: `NombreComponente.propTypes = { nombre: PropTypes.string.isRequired }` — warnings en consola en desarrollo",
      "Tipos: `string`, `number`, `bool`, `func`, `array`, `object`, `node`, `element` — compuestos: `arrayOf()`, `shape()`, `oneOf()`, `oneOfType()`",
      "Valores por defecto: preferir defaults en la desestructuración de parámetros sobre `defaultProps` (deprecado en funcionales)",
      "Se pueden crear validadores personalizados: función `(props, propName, componentName)` que retorna `Error` si falla",
      "En producción moderna considerar TypeScript — type-safety en compilación vs. solo runtime con PropTypes; aprender TS después de consolidar JS/React",
      "Leer la documentación oficial de PropTypes",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FASE 8: CONOCIMIENTO LEGACY (Class Components)
  // ═══════════════════════════════════════════════════════
  {
    section: "🏛️ Componentes de Clase (Legacy)",
    color: "#FBBF24",
    items: [
      "Entender por qué existen: antes de React 16.8 (2019) los componentes funcionales no tenían estado — los hooks cambiaron eso",
      "Reconocer class components en codebases legacy — es probable encontrarlos en proyectos de trabajo reales",
      "Estructura: clase que extiende `Component` con método `render()` obligatorio que retorna JSX",
      "Props con `this.props.x`; estado con `this.state = {}` en constructor (llamar `super(props)`) y `this.setState({})` para actualizar",
      "Métodos de clase no se vinculan automáticamente — usar bind en constructor o definirlos como arrow functions",
      "Equivalencia con hooks: `useState` → `this.state` + `this.setState`; función componente → `render()`; desestructurar props → `this.props.x`",
    ],
  },
  {
    section: "🔃 Métodos del Ciclo de Vida (Legacy)",
    color: "#F97316",
    items: [
      "Tres etapas: Mounting (inserción en DOM), Updating (re-render) y Unmounting (eliminación del DOM)",
      "`componentDidMount()` — se ejecuta una vez al montar; lugar para fetch de datos y operaciones del DOM",
      "`componentDidUpdate(prevProps, prevState)` — se ejecuta tras cada re-render; comparar prev vs actual para evitar bucles infinitos",
      "`componentWillUnmount()` — se ejecuta al desmontar; limpiar timers, suscripciones y listeners; nunca llamar `setState` aquí",
      "EQUIVALENCIAS con useEffect: `[]` → `componentDidMount`; `[dep]` → `didMount` + `didUpdate` (solo cuando dep cambia); cleanup → `willUnmount`",
      "En proyectos nuevos usar siempre componentes funcionales con hooks — lifecycle methods son para leer código legacy, no para código nuevo",
    ],
  },
];
