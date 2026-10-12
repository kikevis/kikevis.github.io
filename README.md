# Portafolio · Geovanny Villa Sánchez

Portafolio personal de **Geovanny E. Villa Sánchez (Kike)**, Ingeniero de Sistemas
con perfil Full Stack, de ciberseguridad y de cloud en Microsoft 365.

Es una sola página (landing) con un fondo 3D animado en WebGL y tres temas de color.
Muestra el perfil, los proyectos, la experiencia, el stack, la formación y los datos
de contacto. Todo el contenido sale de la hoja de vida y está en un único archivo de
datos (`src/data/cv.ts`).

En línea: **https://kikevis.github.io/**

---

## Resumen rápido

| Qué es | Sitio estático de una sola página (SPA) en React |
| ------ | ------------------------------------------------ |
| Para quién | Reclutadores, clientes y cualquier persona que quiera conocer el trabajo de Kike |
| Login | No tiene. Todo es público y de solo lectura |
| Backend / base de datos | No tiene. No guarda ni envía datos de los visitantes |
| Formularios | No tiene. El contacto abre el correo, el teléfono, LinkedIn o GitHub del visitante |
| Edición del contenido | Solo el dueño, cambiando `src/data/cv.ts` y volviendo a publicar |
| Hosting | GitHub Pages (repositorio `kikevis.github.io`) |

---

## Recorrido por la página

La barra superior tiene siete secciones (pestañas). Al hacer clic en una, la página
se desplaza suavemente hasta ella. La sección que se está viendo queda resaltada en
el menú.

### Pantalla de arranque

Al abrir el sitio aparece por un segundo una “cortina” estilo terminal
(*inicializando entorno seguro… · cargando perfil · render 3d listo*). Luego se
desvanece sola. No aparece si el visitante tiene activada la opción del sistema
“reducir movimiento”.

### Barra superior (siempre visible)

- **Monograma “GV”**: lleva al inicio de la página.
- **Menú de secciones**: Perfil, Capacidades, Proyectos, Experiencia, Stack, Formación
  y Contacto. Se resalta la sección visible.
- **Selector de tema**: tres botones (Default, Noir, Papel). Ver [Temas](#temas).
- **Barra de progreso**: una línea fina bajo el menú indica cuánto se ha recorrido
  de la página.
- **En celular**: el menú se convierte en un botón ☰ que abre un menú a pantalla
  completa, numerado, con la ubicación al pie.
- Al bajar, la barra se vuelve sólida y con desenfoque para que se lea sobre el
  contenido.

### Portada (inicio)

- Estado **“Disponible para proyectos y posiciones full-time”** con un indicador
  animado y la ubicación (Barranquilla, Colombia).
- Nombre completo, cargo (*Ingeniero de Sistemas — egresado, grado en trámite*) y
  frase de presentación.
- Botón **Ver trayectoria**, que baja a Experiencia.
- Botón **Escríbeme**, que abre el correo del visitante con la dirección ya puesta.
- Foto de perfil con una etiqueta `ID · kikevis — ONLINE`.
- Marquesina en movimiento con tecnologías: React, Django, TypeScript, OWASP,
  ISO 27001, Microsoft 365, RBAC, DevSecOps, SQL, Cloudflare, Redes y Hardening.

### 01 · Perfil

- Resumen profesional en dos párrafos (desarrollo, cloud y seguridad).
- Etiquetas: DevSecOps, OWASP, ISO/IEC 27001, RBAC y Microsoft 365.
- Cuatro cifras: años de experiencia, organizaciones, titulaciones y frentes de
  trabajo.
- **Nota sobre el título**: explica que el plan de estudios está terminado, que el
  grado está previsto para finales de 2026 y que el certificado del diplomado está
  en expedición.
- Enlace **También dirijo TPrime ↗**, que abre tprime.com.co en otra pestaña.

### 02 · Capacidades

Cuatro tarjetas con los frentes de trabajo:

1. Desarrollo Full Stack seguro
2. Arquitectura Cloud y Microsoft 365
3. Gestión del riesgo humano
4. Infraestructura y soporte crítico

Solo informativas. Al pasar el mouse se resalta la tarjeta.

### 03 · Proyectos

Cuadrícula de tarjetas, una por proyecto. Cada tarjeta muestra:

- **Portada**: la captura del proyecto (si existe en `public/proyectos/`). Si no hay
  captura o no carga, aparece una **portada tipográfica** con el nombre del proyecto.
- Número, nombre, año, contexto (personal, empresa o cliente) y estado
  (**en línea**, **en desarrollo** o **privado**).
- Descripción, tres puntos destacados y las tecnologías usadas.
- Botón **Ver sitio** (abre el proyecto en otra pestaña) y, solo si el repositorio
  es público, botón **Código** (abre GitHub).

Proyectos publicados hoy:

| # | Proyecto | Contexto | Enlace |
| - | -------- | -------- | ------ |
| 1 | Portafolio 2026 | Proyecto personal | kikevis.github.io |
| 2 | TPrime | Sitio corporativo de la empresa propia | tprime.com.co |
| 3 | SF Worship | Grupo de alabanza, Sin Fronteras Church Barranquilla | sfworship.tprime.com.co |
| 4 | Liquida2026 | Calculadora de liquidaciones laborales (Colombia) | calculi.tprime.com.co |
| 5 | Sin Fronteras Church | Web de la iglesia con todas sus sedes | sfchurch.tprime.com.co |
| 6 | Agendar Citas Barbería | Plataforma multi-barbería de T-Prime | barberia.tprime.com.co |
| 7 | Agenda tu Cita Especializada | Plataforma multi-clínica de T-Prime | clinicas.tprime.com.co |
| 8 | Dentística | Rediseño para cliente (Dr. Jorge De La Rosa) | dentistica.tprime.com.co |

La sección aclara que los proyectos de clientes que involucran infraestructura o
seguridad no se muestran por acuerdos de confidencialidad.

### 04 · Experiencia

Trayectoria en forma de **acordeón**: cada empresa es una fila que se abre o se
cierra con el botón **+**. Al cargar, la primera viene abierta.

- Fila cerrada: periodo, empresa, cargo y resumen. El trabajo actual lleva la marca
  *· reciente*.
- Fila abierta: lista de funciones y etiquetas de tecnologías.

Empresas: SAINGE S.A.S (Analista TI), Universidad de la Costa (Programador Full
Stack) y Fundación IDI (Webmaster).

### 05 · Stack

Herramientas agrupadas en cuatro bloques: **Desarrollo**, **Ciberseguridad**,
**Cloud e Infraestructura** y **Producto y Personas**. Cada herramienta es una
etiqueta que se resalta al pasar el mouse.

### 06 · Formación

- **Educación**: Ingeniería de Sistemas (en trámite), Tecnología y Técnico del SENA,
  y Bachiller.
- **Certificaciones**: Diplomado en Seguridad Informática (en trámite) y Bootcamp en
  Ciberseguridad (MinTIC · Universidad Libre · Etraining).
- **Idiomas**: Español nativo, inglés intermedio.

Lo que está *en trámite* se marca con el color de acento en lugar del año.

### 07 · Contacto

- Título grande **“Cuéntame qué hay que construir”** y una frase con los tipos de
  trabajo que acepta.
- Cuatro tarjetas que se pueden pulsar:
  - **Correo**: abre la aplicación de correo del visitante.
  - **Teléfono**: en celular, inicia la llamada.
  - **LinkedIn** y **GitHub**: abren el perfil en otra pestaña.
- Botón **Enviar un mensaje**: abre el correo, igual que la tarjeta.

### Pie de página

Año y nombre, el tema activo con el recordatorio *(tecla T)* y el enlace **Volver
arriba**.

---

## Qué puede y qué no puede hacer cada quien

El sitio no tiene cuentas ni roles. Solo hay dos tipos de persona: quien lo visita y
quien lo mantiene.

### Visitante (cualquier persona)

| Puede | No puede |
| ----- | -------- |
| Ver todas las secciones sin registrarse | Iniciar sesión ni crear una cuenta (no existen) |
| Moverse por el menú, abrir y cerrar la experiencia | Editar, comentar o subir nada |
| Cambiar el tema con los botones o la tecla **T** | Enviar mensajes desde la página (no hay formulario) |
| Abrir los proyectos, el repositorio público, TPrime, LinkedIn y GitHub | Ver el código de proyectos privados o de clientes |
| Contactar por correo o teléfono con su propia aplicación | Descargar la hoja de vida desde el sitio (no hay botón de descarga) |

### Dueño del sitio

Edita el contenido desde el código y vuelve a publicar. No hay panel de
administración: todos los cambios se hacen en los archivos de la tabla
[Dónde editar qué](#dónde-editar-qué).

---

## Datos y privacidad

- **No hay login, cookies de seguimiento ni analítica.** El sitio no recoge datos de
  quien lo visita.
- Lo único que se guarda es el **tema elegido**, en el navegador del visitante
  (`localStorage`, clave `gv-theme`). No sale de su equipo. Si el navegador lo
  bloquea (modo privado), el sitio funciona igual, pero el tema no se recuerda.
- Peticiones externas: solo las fuentes de **Google Fonts** (JetBrains Mono y Space
  Grotesk). Los enlaces a otros sitios se abren en una pestaña nueva con
  `rel="noreferrer noopener"`.

---

## Temas

Tres paletas, con selector en la barra superior y atajo de teclado **T** (no se
activa mientras se escribe en un campo de texto). La elección se aplica antes del
primer pintado, así que no hay parpadeo al recargar.

| Tema (`id`) | Nombre en pantalla | Descripción |
| ----------- | ------------------ | ----------- |
| `hacker` | Default | Verde terminal sobre negro (tema por defecto) |
| `noir` | Noir | Blanco y negro, predomina el negro |
| `light` | Papel | Blanco y negro, predomina el blanco |

El tema cambia los colores de toda la página, de la escena 3D y el color de la barra
del navegador en celular.

Los colores no están escritos en los componentes. Son variables CSS en
`src/index.css` (bloque de tokens) más los colores de la escena 3D en
`src/theme/ThemeProvider.tsx`. Para retocar una paleta, cambia solo esos dos sitios.

---

## Fondo 3D

- Esfera de unos 2.600 puntos que “respira” con ondas, un icosaedro y un anillo de
  alambre que giran en sentidos opuestos, y polvo de partículas al fondo.
- La cámara sigue el mouse (efecto parallax) y se acerca y gira al hacer scroll.
- Al salir de la portada, la escena baja su opacidad para no competir con el texto.
- No recibe clics: es solo decorativa y está oculta a los lectores de pantalla.

---

## Accesibilidad y rendimiento

- **Reducir movimiento**: si el sistema lo pide (`prefers-reduced-motion`), se quitan
  la pantalla de arranque y las animaciones, y la escena 3D deja de animarse.
- El selector de tema es un `radiogroup` con nombres de texto, no solo colores.
- Foco visible al navegar con teclado y botones con etiquetas (`aria-label`).
- La escena 3D carga aparte (`React.lazy`), y `three` y `@react-three/fiber` van en
  archivos separados. La resolución del 3D está limitada a 1.75× para no forzar
  equipos modestos.
- La foto se sirve en WebP con respaldo en JPG.
- Metadatos para compartir (Open Graph y Twitter): título, descripción e imagen.

---

## Arrancar en local

```bash
npm install
npm run dev      # http://localhost:5173
```

Otros comandos:

```bash
npm run build    # compila en dist/ (revisa tipos con tsc antes)
npm run preview  # sirve dist/ para revisarlo antes de publicar
npm run lint     # solo revisión de tipos (tsc --noEmit)
```

---

## Publicar en kikevis.github.io

El sitio publicado vive en otro repositorio, `kikevis.github.io`, que solo contiene
el resultado compilado (no el código fuente). Se actualiza a mano desde **cmd**:

```batch
cd /d E:\CLAUDE\Portafolio-Geovanny-Villa && npm run build
cd /d E:\CLAUDE\kikevis.github.io
rmdir /S /Q assets
xcopy /E /I /Y "E:\CLAUDE\Portafolio-Geovanny-Villa\dist\*" .
git add -A
git commit -m "Actualiza el sitio publicado"
git push
```

GitHub Pages tarda uno o dos minutos. Si no se ve el cambio, recarga con **Ctrl+F5**.

Notas:

- `rmdir … assets` borra el build anterior para no acumular archivos viejos.
- `kikevis.github.io` también conserva la carpeta `pagina-antigua/` (la web anterior)
  y un archivo `.nojekyll`. El `xcopy` no los toca.
- También funciona en Vercel o Cloudflare Pages: framework **Vite**, build
  `npm run build`, carpeta de salida `dist`.

---

## Páginas de error y servidor Apache

- `public/400.html`, `401.html`, `403.html`, `404.html` y `500.html` son páginas de
  error con la marca TPrime. Se copian a `dist/` al compilar. GitHub Pages usa
  `404.html` cuando alguien entra a una ruta que no existe.
- `.htaccess` solo aplica si el sitio se sube a un hosting Apache (cPanel). Oculta el
  listado de carpetas, añade cabeceras de seguridad (anti-clickjacking, `nosniff`,
  `Referrer-Policy`), redirige las rutas a `index.html` y define la caché de los
  archivos estáticos. GitHub Pages lo ignora.

---

## Dónde editar qué

| Quiero cambiar… | Archivo |
| --------------- | ------- |
| Textos, experiencia, proyectos, stack, formación, contacto | `src/data/cv.ts` |
| Secciones del menú | `navItems` en `src/data/cv.ts` |
| Capturas de los proyectos | `public/proyectos/<slug>.png` + campo `preview` en `cv.ts` |
| Colores de los temas | `src/index.css` + `src/theme/ThemeProvider.tsx` |
| Fondo 3D | `src/components/Scene3D.tsx` |
| Pantalla de arranque | `Boot` en `src/App.tsx` |
| Marquesina de tecnologías de la portada | `marquee` en `src/components/Hero.tsx` |
| Foto de perfil | `public/geovanny.webp` y `public/geovanny.jpg` |
| Título y metadatos para compartir | `index.html` |

`src/data/cv.ts` es la fuente única de verdad: si actualizas la hoja de vida,
actualiza ese archivo y el sitio entero se reordena solo.

### Agregar un proyecto

Añade un objeto al arreglo `projects` en `src/data/cv.ts`:

```ts
{
  slug: 'mi-proyecto',
  name: 'Mi Proyecto',
  context: 'Proyecto personal',
  year: '2026',
  summary: 'Qué es y para qué sirve, en dos líneas.',
  highlights: ['Punto 1', 'Punto 2', 'Punto 3'],
  stack: ['React', 'Firebase'],
  url: 'https://mi-proyecto.tprime.com.co/',        // opcional: botón "Ver sitio"
  repo: 'https://github.com/kikevis/mi-proyecto',   // opcional: solo si es público
  preview: './proyectos/mi-proyecto.png',           // opcional: sin él sale la portada tipográfica
  status: 'en línea',                               // 'en línea' | 'en desarrollo' | 'privado'
},
```

> Si tienes `cv.ts` abierto en el editor mientras otra herramienta lo modifica,
> recárgalo antes de guardar. Si no, el editor puede sobrescribir los cambios con
> la versión vieja.

---

## Estructura

```
src/
├─ components/
│  ├─ Scene3D.tsx        escena WebGL (esfera de puntos + anillos + polvo)
│  ├─ Navbar.tsx         navegación, barra de progreso y menú móvil
│  ├─ ThemeSwitcher.tsx  selector de los tres temas
│  ├─ Hero.tsx           portada
│  ├─ About.tsx          01 · perfil y cifras
│  ├─ Capabilities.tsx   02 · los cuatro frentes de trabajo
│  ├─ Projects.tsx       03 · tarjetas de proyectos
│  ├─ Experience.tsx     04 · trayectoria en acordeón
│  ├─ Skills.tsx         05 · stack agrupado
│  ├─ Formation.tsx      06 · educación, certificaciones e idiomas
│  ├─ Contact.tsx        07 · canales de contacto
│  ├─ Footer.tsx         pie
│  ├─ Section.tsx        contenedor y encabezado de sección
│  └─ Reveal.tsx         animaciones de entrada al hacer scroll
├─ theme/ThemeProvider.tsx   temas, persistencia y tecla T
├─ data/cv.ts                todo el contenido
├─ App.tsx                   pantalla de arranque y orden de secciones
└─ index.css                 tokens de color y estilos base
public/                      foto, favicon, páginas de error
pagina-antigua/              copia de la web anterior (referencia)
```

---

## Stack

React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · Framer Motion · Three.js
(`@react-three/fiber`) · Lucide (iconos).

## Licencia

MIT © 2026 Geovanny E. Villa Sánchez
