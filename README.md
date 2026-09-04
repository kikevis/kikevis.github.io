# Portafolio · Geovanny Villa Sánchez

Landing de una sola página con fondo WebGL animado y tres temas intercambiables.
Todo el contenido sale de la hoja de vida y vive en un único archivo de datos.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
```

## Publicar

```bash
npm run build    # genera dist/
npm run preview  # revisa el build antes de subirlo
```

Para Vercel o Cloudflare Pages: framework **Vite**, build `npm run build`,
carpeta de salida `dist`. No hace falta configurar nada más.

### GitHub Pages

`.github/workflows/deploy.yml` compila y publica en cada push a `main`.
El repositorio `kikevis.github.io` debe tener **Settings → Pages → Source:
GitHub Actions** (no "Deploy from a branch").

El workflow también copia la carpeta `pagina-antigua/`, si existe, dentro del
sitio publicado: el portafolio queda en la raíz y la web anterior en
`/pagina-antigua/`.

## Temas

Tres paletas, con selector en la barra superior y atajo de teclado **T**.
La elección se guarda en `localStorage` y se aplica antes del primer pintado
(no hay parpadeo al recargar).

| Tema     | Descripción                          |
| -------- | ------------------------------------ |
| `hacker` | Verde terminal sobre negro           |
| `noir`   | Blanco y negro, predomina el negro   |
| `light`  | Blanco y negro, predomina el blanco  |

Los colores no están escritos en los componentes: son variables CSS en
`src/index.css` (bloque de tokens) más los colores de la escena 3D en
`src/theme/ThemeProvider.tsx`. Para retocar una paleta, toca solo esos dos sitios.

## Dónde editar qué

| Quiero cambiar…                        | Archivo                            |
| -------------------------------------- | ---------------------------------- |
| Textos, experiencia, stack, contacto   | `src/data/cv.ts`                   |
| Colores de los temas                   | `src/index.css` + `ThemeProvider`  |
| El fondo 3D                            | `src/components/Scene3D.tsx`       |
| Foto de perfil                         | `public/geovanny.webp` y `.jpg`    |
| Título y metadatos para compartir      | `index.html`                       |

`src/data/cv.ts` es la fuente única de verdad: si actualizas la hoja de vida,
actualiza ese archivo y el sitio entero se reordena solo.

## Estructura

```
src/
├─ components/
│  ├─ Scene3D.tsx      escena WebGL (esfera de puntos + anillos + polvo)
│  ├─ Navbar.tsx       navegación, barra de progreso y menú móvil
│  ├─ Hero.tsx         portada
│  ├─ About.tsx        perfil y cifras
│  ├─ Capabilities.tsx los cuatro frentes de trabajo
│  ├─ Experience.tsx   trayectoria en acordeón
│  ├─ Skills.tsx       stack agrupado
│  ├─ Formation.tsx    educación y certificaciones
│  ├─ Contact.tsx      canales de contacto
│  ├─ Footer.tsx       pie
│  ├─ Section.tsx      contenedor y encabezado de sección
│  └─ Reveal.tsx       animaciones de entrada al hacer scroll
├─ theme/ThemeProvider.tsx
├─ data/cv.ts
└─ index.css
```

## Detalles de implementación

- **3D**: Three.js vía `@react-three/fiber`. La esfera de ~2.600 puntos se
  deforma con ondas seno en `useFrame`; la cámara sigue el mouse y retrocede con
  el scroll. La escena baja de opacidad al salir del hero para no competir con
  el texto.
- **Rendimiento**: `dpr` limitado a 1.75, `three` y `@react-three/fiber` salen en
  chunks aparte y la escena se carga con `React.lazy`.
- **Accesibilidad**: `prefers-reduced-motion` desactiva animaciones y la pantalla
  de arranque; foco visible; el selector de tema es un `radiogroup` con etiquetas
  de texto, no solo color.
- **Stack**: React 18 · TypeScript · Vite 5 · Tailwind 3 · Framer Motion · Three.js.
