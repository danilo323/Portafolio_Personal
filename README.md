# Portafolio Web — Oswaldo Danilo Angulo Tamayo

Portafolio web personal e interactivo desarrollado con **HTML5 semántico, CSS puro y JavaScript
vanilla**, sin frameworks. Presenta mi perfil profesional, mi formación, mis habilidades técnicas y los
proyectos en los que he trabajado, además de una página de **Design System** que documenta las
decisiones visuales del sitio.

> **Sitio publicado:** https://danilo323.github.io/portafolio/
> **Repositorio:** https://github.com/danilo323/portafolio

---

## Contenido del sitio

| Sección | Descripción |
|---|---|
| **Inicio / Presentación** | Nombre, rol, resumen profesional y accesos directos. |
| **Sobre mí** | Perfil profesional, línea de tiempo de experiencia y formación, datos rápidos. |
| **Habilidades / Skills** | Tecnologías agrupadas en Frontend, Backend, Bases de datos, Datos e IA y Herramientas, con nivel de dominio. |
| **Proyectos destacados** | Tres proyectos con problema que resuelven, tecnologías, imagen y enlaces. |
| **Design System** | Página aparte (`design-system.html`) con paleta, tipografía, espaciado y componentes. |
| **Contacto** | Canales directos y formulario validado. |

---

## Tecnologías utilizadas

- **HTML5 semántico** — `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`,
  `figcaption`, `footer`, `dialog`, listas de definición y formularios con `label` asociado.
- **CSS3** — Custom Properties (design tokens), Flexbox, CSS Grid, media queries,
  `clamp()`, `color-mix()` y `aspect-ratio`.
- **JavaScript (ES6, vanilla)** — sin frameworks.
- **Bootstrap Icons** — iconografía vectorial cargada desde CDN (`bi bi-*`).
- **SVG** — avatar, favicon y capturas de los proyectos (vectoriales y ligeros).
- **Git y GitHub Pages** — control de versiones y despliegue.

---

## Funcionalidades interactivas (JavaScript)

El sitio implementa **ocho** funcionalidades, todas en [`js/main.js`](js/main.js):

1. **Tema claro / oscuro** con persistencia en `localStorage` y detección de la preferencia del
   sistema (`prefers-color-scheme`) en la primera visita.
2. **Menú responsive** en móvil, con `aria-expanded`, cierre con `Escape`, al elegir un enlace y
   al volver a escritorio.
3. **Navegación dinámica (scroll spy)** — el enlace de la sección visible se resalta usando
   `IntersectionObserver`.
4. **Filtro de proyectos por tecnología** (Todos / Python / Django / JavaScript / Machine Learning),
   con mensaje de estado vacío.
5. **Modal de detalle de proyecto** construido sobre el elemento nativo `<dialog>`: se cierra con
   `Escape`, con clic fuera y devuelve el foco al botón que lo abrió.
6. **Validación del formulario de contacto** en tiempo real: campos obligatorios, longitud mínima,
   formato de correo, contador de caracteres, mensajes de error por campo y `aria-invalid`.
7. **Botón "volver arriba"** que aparece tras 400 px de scroll.
8. **Animaciones de aparición** de secciones y de las barras de nivel de habilidad, respetando
   `prefers-reduced-motion`.

---

## Design System

Todas las decisiones visuales viven en variables CSS declaradas una sola vez en `:root`
([`css/styles.css`](css/styles.css)):

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --font-primary: "Segoe UI", system-ui, sans-serif;
  --space-md: 1rem;
  --radius-md: 1rem;
  --shadow-card: 0 4px 12px rgb(15 23 42 / 0.1);
}
```

El tema oscuro **no duplica reglas**: sólo redefine el valor de esos mismos tokens bajo
`[data-theme="dark"]`.

La página [`design-system.html`](design-system.html) documenta:

- **Colores** — marca, superficies, texto y estados, cada uno con su token y su valor.
- **Tipografía** — ejemplos reales de `h1`, `h2`, `h3`, párrafo, texto secundario y enlaces.
- **Espaciado** — la escala de siete pasos (`--space-2xs` … `--space-2xl`) representada visualmente.
- **Bordes, radios y sombras** — los tres niveles de redondeo y de elevación.
- **Componentes** — botones (primario, secundario, fantasma, pequeño, deshabilitado), badges,
  skill card, card de proyecto, navbar, inputs, select, textarea, estados de error y éxito,
  modal y botón de icono.

Los componentes mostrados ahí **son los mismos** que usa el portafolio: comparten las clases y los
tokens, no son copias.

---

## Responsive

| Dispositivo | Ancho | Comportamiento |
|---|---|---|
| Móvil | `< 768px` | Una columna, menú desplegable, grillas apiladas. |
| Tablet | `≥ 768px` | Formulario y contacto en dos columnas. |
| Escritorio | `≥ 1024px` | Hero y sección "Sobre mí" en dos columnas. |

Las grillas de habilidades y proyectos usan `repeat(auto-fill, minmax(min(100%, …), 1fr))`, así
que se reacomodan solas sin necesidad de un breakpoint por cada tamaño. No hay desbordamiento
horizontal en ningún ancho.

---

## Estructura del proyecto

```
.
├── index.html              # Página principal (Inicio, Sobre mí, Skills, Proyectos, Contacto)
├── design-system.html      # Documentación de tokens y componentes
├── css/
│   └── styles.css          # Tokens, base, componentes, secciones y responsive
├── js/
│   └── main.js             # Todas las funcionalidades interactivas
├── assets/
│   └── img/
│       ├── avatar.svg
│       ├── favicon.svg
│       ├── proyecto-fraude.svg
│       ├── proyecto-ecuatrade.svg
│       └── proyecto-schedule.svg
├── .gitignore
└── README.md
```

---

## Cómo verlo

### Opción 1 — En línea

Entra a **https://danilo323.github.io/portafolio/**

### Opción 2 — En local

```bash
git clone https://github.com/danilo323/portafolio.git
cd portafolio
```

Abre `index.html` directamente en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000
```

---

## Capturas

> Reemplaza estas rutas por capturas reales del sitio ya publicado.

| Inicio (tema claro) | Inicio (tema oscuro) |
|---|---|
| ![Inicio en tema claro](assets/img/captura-inicio-claro.png) | ![Inicio en tema oscuro](assets/img/captura-inicio-oscuro.png) |

| Proyectos | Design System |
|---|---|
| ![Sección de proyectos](assets/img/captura-proyectos.png) | ![Página de Design System](assets/img/captura-design-system.png) |

---

## Accesibilidad

- Enlace "Saltar al contenido principal" para usuarios de teclado.
- Jerarquía de encabezados correcta (`h1` → `h4`, sin saltos).
- `alt` descriptivo en todas las imágenes; los iconos decorativos usan `aria-hidden="true"`.
- Foco visible en todos los elementos interactivos.
- Estados comunicados con `aria-expanded`, `aria-pressed`, `aria-current`, `aria-invalid` y
  `aria-live` en el mensaje del formulario.
- Se respeta `prefers-reduced-motion`.

---

## Autor

**Oswaldo Danilo Angulo Tamayo**
Estudiante de Ingeniería de Software — Universidad Estatal de Milagro (UNEMI)
Babahoyo, Los Ríos — Ecuador

- Correo: danioswal30@gmail.com
- GitHub: [github.com/danilo323](https://github.com/danilo323)
- LinkedIn: [linkedin.com/in/danilo](https://www.linkedin.com/in/danilo)
