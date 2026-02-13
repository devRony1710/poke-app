# Pokédex App

Aplicación web tipo Pokédex construida con React, enfocada en una experiencia mobile-first.  
Permite explorar Pokémon usando paginación infinita, búsqueda, ordenamiento y una vista de detalle.

---

## Features

### Pokédex List

- Listado infinito de Pokémon
- Infinite scroll usando IntersectionObserver
- Carga progresiva desde la PokéAPI
- Límite máximo de páginas consultadas para proteger la API

### Search

- Búsqueda por nombre
- Búsqueda por número (ID)
- Filtrado en tiempo real

### Sort

- Ordenamiento exclusivo por:
  - Número (ID)
  - Nombre (A–Z)
- Implementado con input type="radio"

### Pokémon Detail

- Vista individual por Pokémon
- Información básica:
  - Nombre
  - Número
  - Tipos
  - Descripción
  - Estadísticas base
- Diseño visual diferenciado por Pokémon

---

## Testing

- Tests unitarios con Vitest
- Testing de componentes con React Testing Library
- Hooks y efectos secundarios mockeados para evitar dependencias del DOM

---

## Estructura de carpetas

| Path               | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `src/`             | Código fuente principal de la aplicación                  |
| `src/main.tsx`     | Punto de entrada de la aplicación                         |
| `src/App.tsx`      | Componente raíz                                           |
| `src/routes/`      | Configuración de rutas con React Router                   |
| `src/pages/`       | Páginas principales de la aplicación                      |
| `src/components/`  | Componentes reutilizables de UI                           |
| `src/hooks/`       | Custom hooks (intersection observer, click outside, etc.) |
| `src/api/`         | Lógica de consumo de la PokéAPI                           |
| `src/test/`        | Tests unitarios y de componentes                          |
| `src/assets/`      | Recursos estáticos (imágenes, íconos)                     |
| `public/`          | Archivos públicos                                         |
| `dist/`            | Build de producción                                       |
| `vite.config.ts`   | Configuración de Vite                                     |
| `tsconfig.json`    | Configuración de TypeScript                               |
| `eslint.config.js` | Reglas de ESLint                                          |
| `.prettierrc`      | Configuración de Prettier                                 |
| `package.json`     | Scripts y dependencias                                    |
| `yarn.lock`        | Lockfile de dependencias                                  |

## Tech Stack

Este proyecto utiliza las siguientes tecnologías:

| Área       | Tecnología                    |
| ---------- | ----------------------------- |
| Lenguaje   | TypeScript                    |
| UI         | React                         |
| Routing    | React Router                  |
| Build Tool | Vite                          |
| Testing    | Vitest, React Testing Library |
| Linting    | ESLint                        |
| Formatting | Prettier                      |

---

## Scripts

Los siguientes scripts están disponibles desde `package.json`

| Script          | Uso                                    |
| --------------- | -------------------------------------- |
| `yarn dev`      | Inicia el servidor de desarrollo       |
| `yarn build`    | Compila la aplicación para producción  |
| `yarn preview`  | Vista previa de la build de producción |
| `yarn test`     | Ejecuta los tests                      |
| `yarn lint`     | Corre ESLint                           |
| `yarn lint:fix` | Arregla errores con ESLint             |
| `yarn format`   | Formatea el código con Prettier        |

---

## Getting Started

### Instalar dependencias

```bash
yarn install
```

Correr el proyecto en local

```bash
yarn dev
```

Correr test unitarios

```bash
yarn test
```

Correr linter

```bash
yarn lint
```
