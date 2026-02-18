# LleidaHack Frontend

Frontend de **LleidaHack** con dos zonas dentro de la misma app:

- Landing pública: `/`
- Panel de administración: `/admin`

## Requisitos

- Node.js 18+
- pnpm 10+

Comprobar versiones:

```bash
node -v
pnpm -v
```

## Configuración de entorno

1. Copia el archivo de ejemplo:

```bash
cp .env.sample .env
```

2. Configura las variables en `.env`:

```env
PORT=6969
REACT_APP_DOMAIN="https://tu-backend"
REACT_APP_DEBUG=0
REACT_APP_MAIN=1
```

Notas:

- `PORT`: puerto local del frontend.
- `REACT_APP_DOMAIN`: URL base del backend (se recomienda incluir `https://`).
- `REACT_APP_DEBUG=1`: activa logs de debug en cliente.

## Instalación

```bash
pnpm install
```

## Ejecutar en desarrollo

```bash
pnpm start
```

Abre:

- Landing: [http://localhost:6969/](http://localhost:6969/)
- Admin login: [http://localhost:6969/admin/login](http://localhost:6969/admin/login)

## Build de producción

```bash
pnpm build
```

Salida en:

- `build/`

## Tests

```bash
pnpm test --watchAll=false
```

## Formateo

```bash
pnpm format
```

## Servir build localmente (opcional)

```bash
pnpm dlx serve -s build -l 6969
```

## Docker (opcional)

El repositorio incluye `Dockerfile` + `nginx.conf` para servir la build estática.

Ejemplo:

```bash
docker build \
  --build-arg REACT_APP_DOMAIN=https://tu-backend \
  --build-arg REACT_APP_DEBUG=0 \
  --build-arg REACT_APP_MAIN=1 \
  --build-arg GIT_BRANCH=main \
  -t lleidahack-frontend .

docker run --rm -p 8080:80 lleidahack-frontend
```

Abrir:

- [http://localhost:8080/](http://localhost:8080/)

## Solución rápida de problemas

- Si ves `Unexpected token '<' ... is not valid JSON`:
  - revisa `REACT_APP_DOMAIN` (normalmente apunta mal al backend o devuelve HTML).
- Si una ruta directa devuelve 404 en servidor:
  - asegúrate de mantener fallback SPA (`try_files ... /index.html`) en Nginx.
