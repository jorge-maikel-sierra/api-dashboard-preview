export const tools = [
  {
    category: "Runtime & Framework",
    icon: "⚙️",
    color: "#00D4FF",
    items: [
      { name: "Node.js", role: "Runtime de JavaScript en el servidor" },
      { name: "Express.js", role: "Framework backend – manejo de rutas, middleware y HTTP" },
      { name: "Nodemon", role: "Reinicio automático en desarrollo (devDependency)" },
    ],
  },
  {
    category: "Base de Datos & ORM",
    icon: "🗄️",
    color: "#A78BFA",
    items: [
      { name: "PostgreSQL", role: "Base de datos relacional principal" },
      { name: "Prisma ORM", role: "Acceso a datos tipado, migraciones y schema (JS mode)" },
      { name: "node-postgres (pg)", role: "Driver directo para consultas complejas y autenticación" },
    ],
  },
  {
    category: "Autenticación & Seguridad",
    icon: "🔐",
    color: "#34D399",
    items: [
      { name: "Passport.js", role: "Middleware de autenticación (estrategias modulares)" },
      { name: "passport-local", role: "Estrategia de autenticación usuario/contraseña" },
      { name: "passport-jwt", role: "Estrategia de autenticación por JWT" },
      { name: "jsonwebtoken (JWT)", role: "Generación y verificación de tokens de acceso" },
      { name: "bcryptjs", role: "Hashing seguro de contraseñas con salt" },
      { name: "express-session", role: "Gestión de sesiones del lado del servidor" },
      { name: "cors", role: "Control de acceso entre orígenes (Cross-Origin)" },
      { name: "helmet", role: "Headers HTTP de seguridad automáticos" },
    ],
  },
  {
    category: "Validación & Sanitización",
    icon: "✅",
    color: "#FBBF24",
    items: [
      { name: "express-validator", role: "Validación y sanitización de inputs del usuario" },
    ],
  },
  {
    category: "Variables de Entorno & Config",
    icon: "🌍",
    color: "#F87171",
    items: [
      { name: "dotenv", role: "Carga de variables de entorno desde .env" },
    ],
  },
  {
    category: "Performance & Cache",
    icon: "⚡",
    color: "#FB923C",
    items: [
      { name: "apicache", role: "Cache de respuestas HTTP para endpoints frecuentes" },
    ],
  },
  {
    category: "Documentación",
    icon: "📄",
    color: "#60A5FA",
    items: [
      { name: "swagger-jsdoc", role: "Genera spec OpenAPI desde comentarios JSDoc" },
      { name: "swagger-ui-express", role: "Interfaz visual interactiva de la documentación" },
    ],
  },
  {
    category: "Testing",
    icon: "🧪",
    color: "#E879F9",
    items: [
      { name: "Jest", role: "Framework de testing – unitario e integración" },
      { name: "Supertest", role: "Testing de endpoints HTTP sin levantar servidor" },
    ],
  },
];
