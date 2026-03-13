# Guía: integración del servidor MCP "awesome-copilot" en este proyecto

Esta guía consolidada reemplaza la versión anterior. Incluye pasos validados para ejecutar el servidor MCP localmente, configurar VS Code y la CLI de Copilot, instalar plugins/agents/instructions/skills y resolver problemas comunes que aparecieron durante las pruebas.

## Requisitos
- Docker instalado y en ejecución
- VS Code (o VS Code Insiders) con la extensión GitHub Copilot
- Opcional: Copilot CLI instalada y autenticada si quieres administrar plugins desde la terminal

Si no tienes la CLI, puedes usar la interfaz de Copilot en VS Code para explorar e instalar plugins.

## 1) Iniciar el servidor MCP local

Usa el script incluido (ubicado en `scripts/start-mcp.sh`) desde la raíz del repo:

```bash
./scripts/start-mcp.sh
```

Notas importantes:
- El servidor MCP del ejemplo se ejecuta sobre stdio (usa stdin/stdout). Por eso, evita iniciar el servidor en foreground en la misma terminal donde ejecutarás la CLI: pueden mezclarse mensajes de protocolo JSON con la CLI.
- Recomendación: abre una terminal separada para el servidor MCP. Si necesitas mantenerlo en background, usa redirección de stdin y registra la salida:

```bash
# iniciar en background (capturar logs)
nohup docker run -i --rm ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest </dev/null > /tmp/mcp.log 2>&1 &
```

Usa `tail -f /tmp/mcp.log` en otra terminal para ver los logs.

## 2) Configurar VS Code para usar el servidor MCP

He incluido `.vscode/mcp-servers.json` en este repo. Si tu extensión de Copilot necesita un archivo de servidores MCP, puedes usar ese archivo. Contenido de ejemplo:

```json
{
  "servers": {
    "awesome-copilot": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest"
      ]
    }
  }
}
```

En VS Code, apunta la configuración de MCP/Servers de la extensión a este archivo si te lo solicita.

## 3) Comandos básicos de la CLI de Copilot (sintaxis válida)

Agregar marketplace (si necesitas añadirlo manualmente):

```bash
copilot plugin marketplace add github/awesome-copilot
```

Listar marketplaces registrados:

```bash
copilot plugin marketplace list
```

Explorar (browse) los plugins de un marketplace:

```bash
copilot plugin marketplace browse awesome-copilot
```

Instalar un plugin por alias (si todo está correcto):

```bash
copilot plugin install <plugin-name>@awesome-copilot
```

Donde `<plugin-name>` es el identificador mostrado por `browse` (por ejemplo `database-data-management`).

Si quieres más detalle durante la instalación, añade `--log-level debug`.

## 4) Uso desde VS Code

- En la vista de Copilot (o en una sesión de chat) puedes usar `/plugin` para explorar e instalar plugins de forma interactiva.
- Las instrucciones (files `.instructions.md`) e hooks se aplican automáticamente a archivos del repositorio según patrones; revísalas antes de instalarlas.

## 5) Auditoría y seguridad (recomendaciones rápidas)

- Revisa `llms.txt`, `AGENTS.md` y la documentación del plugin/skill antes de instalar.
- Ejecuta instalaciones primero en entornos aislados (máquinas virtuales o contenedores de desarrollo).
- Revisa permisos solicitados por hooks o agentes que puedan ejecutar comandos en tu máquina.

## 6) Solución de problemas (casos reales y correcciones aplicadas)

He consolidado los problemas encontrados durante la prueba y las acciones que resolvieron cada caso.

- Problema: "unknown option '--marketplace'" al ejecutar `copilot plugin list --marketplace ...`
  - Diagnóstico: la CLI no acepta `--marketplace` en `plugin list`; en su lugar usa el subcomando `plugin marketplace`.
  - Corrección:

    ```bash
    copilot plugin marketplace list
    copilot plugin marketplace browse awesome-copilot
    ```

- Problema: `copilot plugin marketplace browse` falla por conflicto git (fast-forward)
  - Mensaje típico: "Diverging branches can't be fast-forwarded..."
  - Corrección: mover/respaldar la cache local del marketplace para forzar una clonación limpia:

    ```bash
    mv ~/.copilot/marketplace-cache/github-awesome-copilot ~/.copilot/marketplace-cache/github-awesome-copilot.bak.$(date +%s)
    copilot plugin marketplace browse awesome-copilot
    ```

  - Esto obligará a la CLI a volver a clonar el repositorio del marketplace y regenerar la lista.

- Problema: "Plugin source directory not found" al instalar por alias
  - Diagnóstico: la CLI no encontró el directorio esperado en la caché (cache inconsistente) aunque el plugin exista en `plugins/<name>`.
  - Corrección: instalar desde la ruta local de la caché (la CLI acepta rutas locales):

    ```bash
    copilot plugin install ~/.copilot/marketplace-cache/github-awesome-copilot/plugins/database-data-management --log-level debug
    ```

  - Resultado: instalación exitosa: "Plugin \"database-data-management\" installed successfully."

- Interferencia por ejecutar MCP en la misma terminal
  - Cuando el servidor MCP está en foreground y la CLI se ejecuta en la misma terminal, puede mezclarse la salida del servidor (JSON) con la CLI. Esto produce errores o salidas malformadas.
  - Recomendación: usar terminal separada para el servidor MCP o ejecutar el servidor con stdin cerrado y logs redirigidos.

## 7) Rutas y logs importantes

- Caché de marketplaces: `~/.copilot/marketplace-cache/`
- Logs de la CLI: `~/.copilot/logs/`
- Si algo falla, prueba `--log-level debug` y revisa `~/.copilot/logs/`.

## 8) Snippets rápidos (copiar/pegar)

```bash
# Respaldar cache y forzar refresh
mv ~/.copilot/marketplace-cache/github-awesome-copilot ~/.copilot/marketplace-cache/github-awesome-copilot.bak.$(date +%s)
copilot plugin marketplace browse awesome-copilot

# Instalar plugin desde ruta local (si la instalación por alias falla)
copilot plugin install ~/.copilot/marketplace-cache/github-awesome-copilot/plugins/database-data-management --log-level debug

# Iniciar MCP en background (stdin cerrado) y capturar logs
nohup docker run -i --rm ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest </dev/null > /tmp/mcp.log 2>&1 &
tail -f /tmp/mcp.log

# Revisar logs del CLI
tail -n 200 ~/.copilot/logs/* || true
```

## 9) Automatizar: script helper (opcional)

Puedo añadir `scripts/copilot-marketplace-fix.sh` que haga:

- backup de la caché del marketplace
- re-browse del marketplace
- instalar una lista de plugins desde el marketplace o desde la cache local

¿Quieres que lo añada y lo ejecute aquí mismo?

---

Guía actualizada: ahora contiene los pasos validados, las correcciones aplicadas durante la prueba y snippets útiles para recuperación y diagnóstico.
# Guía: Integración del servidor MCP "awesome-copilot" en este proyecto

Esta guía explica cómo ejecutar el servidor MCP local (Awesome Copilot), instalar plugins, agentes, instrucciones y habilidades desde el repositorio y usar la CLI de Copilot y VS Code para gestionar las personalizaciones.

Requisitos
- Docker instalado y en ejecución
- Node.js y la CLI de Copilot (si aplica) instalados localmente
- VS Code (o VS Code Insiders) con la extensión de GitHub Copilot

1) Iniciar el servidor MCP local (contenedor Docker)

- Usar el script incluido:

  ./scripts/start-mcp.sh

- O ejecutar directamente:

  docker run -i --rm ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest

Esto expondrá un servidor MCP en stdin/stdout para que el cliente (VS Code o CLI) lo use.

2) Configurar VS Code para usar el servidor MCP local

- Copia el archivo de configuración en `.vscode/mcp-servers.json` (ya provisto). En VS Code, abre la configuración de la extensión Copilot y especifica la ruta al archivo de servidores MCP si es necesario.

Contenido relevante:

```json
{
  "servers": {
    "awesome-copilot": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest"
      ]
    }
  }
}
```

3) Añadir el marketplace Awesome Copilot a la CLI de Copilot

Si tienes la CLI de Copilot:

  copilot plugin marketplace add github/awesome-copilot

4) Instalar un plugin desde el marketplace

  copilot plugin install <plugin-name>@awesome-copilot

Ejemplo:

  copilot plugin install database-data-management@awesome-copilot

5) Explorar e instalar agentes, instrucciones y habilidades

- Desde la CLI: busca instrucciones/plugins y luego instala.
- Desde VS Code: en la vista de Copilot, usa el comando /plugin dentro de una sesión de chat para explorar e instalar.

6) Auditar recursos antes de instalar

- Revisa `llms.txt` en el repositorio remoto para ver la lista de recursos.
- Para cada agente/habilidad revisa su README, permisos y hooks.

7) Hooks y Agentic Workflows

- Hooks: coloca los archivos en `/.github/instructions/` o en el folder `hooks/` del repo y usa el plugin para instalarlos.
- Agentic Workflows: se definen en `workflows/` como Markdown para GitHub Actions; puedes activar desde Actions o instalar localmente según la documentación del plugin.

8) Seguridad y buenas prácticas

- Auditar código del agente/habilidad antes de instalar.
- Ejecutar contenedores en entornos aislados.
- No aceptar instalaciones automáticas en máquinas de producción sin revisión.

9) Ejemplos rápidos de comandos

```bash
# Iniciar servidor MCP (background)
./scripts/start-mcp.sh &

# Añadir marketplace
copilot plugin marketplace add github/awesome-copilot

# Listar plugins disponibles (ejemplo)
copilot plugin list --marketplace awesome-copilot

# Instalar plugin
copilot plugin install database-data-management@awesome-copilot
```

10) Recursos y contribución
- Revisa `AGENTS.md`, `CONTRIBUTING.md` y `llms.txt` en el repositorio upstream para guías de contribución y estándares.

---

Si quieres, puedo automatizar la descarga del `llms.txt` remoto, listar los plugins disponibles y preparar scripts adicionales para instalar agentes/instrucciones específicos.

---

11) Solución de problemas y acciones reales realizadas

Durante la prueba práctica en este proyecto aparecieron varios problemas comunes; aquí están las correcciones concretas que se aplicaron y los comandos que resolvieron cada caso.

- Sintaxis inválida: `--marketplace`
  - Problema: ejecutar `copilot plugin list --marketplace awesome-copilot` devolvía "unknown option '--marketplace'".
  - Causa: la CLI tiene el subcomando `plugin marketplace` en lugar de aceptar `--marketplace` como flag de `plugin list`.
  - Comandos correctos:

    ```bash
    copilot plugin marketplace list
    copilot plugin marketplace browse awesome-copilot
    ```

- Error al hacer `browse`: conflicto en la caché del marketplace (git fast-forward)
  - Mensaje: "Diverging branches can't be fast-forwarded... fatal: No es posible hacer fast-forward, abortando." al ejecutar `copilot plugin marketplace browse`.
  - Solución aplicada: mover/respaldar la caché local del marketplace para forzar una clonación limpia.
    ```bash
    mv ~/.copilot/marketplace-cache/github-awesome-copilot ~/.copilot/marketplace-cache/github-awesome-copilot.bak.$(date +%s)
    copilot plugin marketplace browse awesome-copilot
    ```
  - Resultado: la lista de plugins se regeneró correctamente y `browse` mostró los plugins disponibles.

- Error al instalar (Plugin source directory not found)
  - Mensaje: "Plugin source directory not found: /Users/<user>/.copilot/marketplace-cache/github-awesome-copilot/database-data-management"
  - Diagnóstico: el plugin sí existe dentro de la caché en `plugins/database-data-management`, pero la CLI no encontró el path esperado en un intento anterior (cache inconsistente o nombre de carpeta distinto).
  - Solución aplicada: instalar directamente desde la ruta local del plugin en la caché (la CLI acepta rutas locales como fuente):
    ```bash
    copilot plugin install ~/.copilot/marketplace-cache/github-awesome-copilot/plugins/database-data-management --log-level debug
    ```
  - Resultado: "Plugin \"database-data-management\" installed successfully." cuando se instaló desde la ruta local.

- Interferencia cuando el servidor MCP está en foreground
  - Observación: ejecutar el contenedor MCP con `docker run -i` en la misma terminal donde se ejecuta la CLI puede mezclar la salida de protocolo (JSON) del servidor con la CLI y producir errores/confusión.
  - Recomendación: iniciar el servidor MCP en otra terminal o en background (idealmente en una terminal separada) antes de usar la CLI en la terminal principal. Ejemplo:
    ```bash
    # En una terminal separada
    ./scripts/start-mcp.sh

    # En tu terminal de trabajo (CLI)
    copilot plugin marketplace list
    ```

- Logs y cachés relevantes
  - Caché de marketplace: `~/.copilot/marketplace-cache/`
  - Logs del CLI: `~/.copilot/logs/`
  - Usa `--log-level debug` para capturar información detallada al instalar:
    ```bash
    copilot plugin install <source> --log-level debug
    ```

12) Snippets útiles de recuperación (copiar/pegar)

```bash
# Respaldar cache y forzar refresh
mv ~/.copilot/marketplace-cache/github-awesome-copilot ~/.copilot/marketplace-cache/github-awesome-copilot.bak.$(date +%s)
copilot plugin marketplace browse awesome-copilot

# Instalar plugin desde ruta local (si la instalación por alias falla)
copilot plugin install ~/.copilot/marketplace-cache/github-awesome-copilot/plugins/database-data-management --log-level debug

# Revisar logs
tail -n 200 ~/.copilot/logs/* || true
```

Si quieres, integro estos pasos en un script helper (`scripts/copilot-marketplace-fix.sh`) para automatizar backup+browse+instalación. Dime si lo escribo y lo pruebo aquí mismo.
