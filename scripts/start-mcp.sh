#!/usr/bin/env bash
# Script para iniciar el servidor MCP "awesome-copilot" en Docker
# Ejecutar desde la raíz del repo: ./scripts/start-mcp.sh

set -euo pipefail

IMAGE="ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker no está instalado o no está en PATH. Instala Docker primero."
  exit 1
fi

echo "Iniciando contenedor MCP: ${IMAGE}"

docker run -i --rm "${IMAGE}"

# Nota: este proceso quedará en primer plano y usa stdin/stdout como transporte (stdio).
# Para ejecutarlo en background, use: ./scripts/start-mcp.sh &
