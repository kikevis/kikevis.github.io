# kikevis.github.io

Sitio personal de Geovanny Villa Sánchez, publicado con GitHub Pages.

### → **https://kikevis.github.io/**

---

## Qué contiene este repositorio

El sitio **ya compilado**: exactamente lo que GitHub Pages sirve. Aquí no hay
código fuente ni dependencias que instalar.

| Ruta | Qué es |
| --- | --- |
| `index.html` · `assets/` | Portafolio 2026 — build de producción |
| `geovanny.jpg` · `geovanny.webp` · `favicon.svg` | Imágenes del sitio |
| [`pagina-antigua/`](https://kikevis.github.io/pagina-antigua/) | Versión anterior del portafolio, archivada |
| `.nojekyll` | Evita que GitHub procese el sitio con Jekyll |

## Código fuente

El portafolio se desarrolla en **[kikevis/portafolio-2026](https://github.com/kikevis/portafolio-2026)**:
React · TypeScript · Vite · Tailwind CSS, con una escena WebGL en Three.js y
tres temas intercambiables (verde terminal, blanco y negro, y su inverso).

## Cómo actualizar el sitio

Compila en el repositorio del portafolio:

```bash
npm run build
```

Y reemplaza el contenido de este:

```bat
rmdir /S /Q assets
xcopy /E /I /Y "..\Portafolio-Geovanny-Villa\dist\*" .
git add -A
git commit -m "Actualiza el sitio"
git push
```

El borrado de `assets/` no es opcional: los archivos compilados llevan un hash
en el nombre, así que sin limpiar se van acumulando versiones muertas.

Los cambios tardan un par de minutos en verse en línea.

---

**Geovanny Villa Sánchez** — Ingeniero de Sistemas · Full Stack y Ciberseguridad
Barranquilla, Colombia

[LinkedIn](https://www.linkedin.com/in/kikevis) · [GitHub](https://github.com/kikevis) · villasanchezg22@gmail.com
