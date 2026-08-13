# Codo Code — Software pensado codo a codo

Sitio web oficial de **Codo Code**, un estudio de desarrollo de software que construye páginas web, tiendas online y soluciones a medida para las necesidades reales de cada negocio. Sin jerga técnica: el cliente cuenta qué necesita y el equipo se encarga del resto.

## El proyecto

Single Page Application (SPA) construida con React y Vite. Una sola página con scroll a secciones ancladas:

- **Inicio** (`#inicio`) — Hero con propuesta de valor y CTA.
- **Servicios** (`#servicios`) — Desarrollo a medida, páginas web, tiendas online y sistemas internos.
- **Proyectos** (`#proyectos`) — Casos de trabajo con visuales en CSS/SVG.
- **Proceso** (`#proceso`) — Cómo trabajamos, en cuatro pasos.
- **Sobre nosotros** (`#sobre`) — Qué es Codo Code.
- **Contacto** (`#contacto`) — Email y WhatsApp.

## Stack y herramientas

| Herramienta | Uso |
| --- | --- |
| [React 19](https://react.dev) | UI de la página |
| [Vite 8](https://vite.dev) | Dev server, bundling y build de producción |
| [Oxlint](https://oxc.rs) | Linter (reglas `react` y `oxc`) |
| CSS puro + tokens | Estilos con variables de diseño (`src/styles/tokens.css`) y tema claro/oscuro |

No se usa TypeScript ni frameworks CSS: los estilos son CSS por componente con tokens centralizados y un sistema de diseño consistente (colores, spacing, tipografía).

## Estructura

```
src/
  components/
    layout/     # Navbar y Footer
    sections/   # Secciones de la página (Hero, Services, Projects, etc.)
    ui/         # Componentes reutilizables (Reveal, Eyebrow, icons, etc.)
  data/         # Fuente única de datos: contacto (site.js) y navegación (nav.js)
  hooks/        # useScrolled y useTheme
  styles/       # tokens.css (design tokens) y base.css (estilos globales)
```

Los datos de contacto (email y WhatsApp) y la navegación están centralizados en `src/data/`, para no duplicar información en los componentes.

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # dev server con HMR
npm run lint     # oxlint
npm run build    # build de producción en dist/
npm run preview  # sirve el build localmente
```

## Contacto

- Email: `devcompanyam@gmail.com`
- Instagram: [@codo_code.dev](https://www.instagram.com/codo_code.dev)
- WhatsApp: [Escribinos](https://wa.me/5491138717699)
