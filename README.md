# Portfolio Web - Álvaro Ramírez | Ingeniero Informático & Especialista en Redes

[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Desplegado en GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white)](https://arctteam.github.io/website/)

---

## 📖 Descripción

Este es el repositorio del sitio web profesional de **Álvaro Ramírez**, ingeniero informático especializado en redes, sistemas Linux, contenedores Docker, automatización con scripting (Bash/PowerShell), reparación y mantenimiento de equipos, y comercialización de hardware.

El sitio está diseñado como una carta de presentación moderna, completamente responsive, con animaciones suaves y un estilo técnico (terminal, puntos de fondo, gradientes azul/cyan) que refleja la identidad del desarrollador.

**URL en producción:** [https://arctteam.github.io/website/](https://arctteam.github.io/website/)

---

## 🚀 Tecnologías utilizadas

- **HTML5 semántico** – Estructura clara y accesible.
- **CSS3** – Variables CSS, Flexbox, Grid, animaciones, diseño responsive.
- **JavaScript (ES6+)** – Interactividad, smooth scroll, menú móvil, observador de scroll.
- **Font Awesome 6** – Iconografía moderna.
- **Google Fonts** – Tipografías *Inter* (texto) y *JetBrains Mono* (código).
- **FormSubmit.co** – Backend simple para el formulario de contacto (sin necesidad de servidor propio).

---

## 📂 Estructura del proyecto

El proyecto sigue buenas prácticas de organización y separación de responsabilidades:
website/
├── index.html # Página principal
├── gracias.html # Página de agradecimiento tras envío del formulario
├── css/
│ └── styles.css # Todos los estilos
├── js/
│ └── main.js # Comportamiento (menú, scroll, observador, back to top)
├── assets/ # (opcional) Imágenes, iconos, etc.
└── README.md # Este archivo


> **Nota:** El proyecto no requiere dependencias externas más allá de las CDNs mencionadas. No se necesita Node.js ni gestores de paquetes.

---

## 🛠️ Instalación y uso local

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/ARCTTeam/website.git
   cd website

2. Abre el archivo index.html en tu navegador (doble clic o usando un servidor local, por ejemplo Live Server de VS Code).
npx serve .
3. Edita los archivos según necesites. Los cambios en CSS/JS se reflejan al recargar.
4. Para desplegar en GitHub Pages (si tienes permisos de escritura en el repositorio):

    Ve a Settings > Pages.

    En "Source", selecciona la rama main y la carpeta / (root).

    Guarda. El sitio estará disponible en https://ARCTTeam.github.io/website/.

 🎨 Personalización
Colores y variables globales

Todas las variables CSS se definen en el bloque :root dentro de css/styles.css. Puedes modificar fácilmente la paleta:

--accent-blue: #3b82f6;      /* Azul principal */
--accent-cyan: #06b6d4;      /* Cyan para detalles */
--bg-primary: #060b14;       /* Fondo oscuro principal */
--text-primary: #e2e8f0;     /* Texto principal */

Contenido

    Datos personales: Edita el nombre, título, descripciones y enlaces en index.html.

    Proyectos: La sección .projects-grid contiene las tarjetas de proyectos. Cambia títulos, descripciones y enlaces.

    Experiencia: La línea de tiempo (.timeline) lista los puestos de trabajo. Ajusta fechas, empresas y funciones.

    Formulario de contacto: El action del formulario apunta a formsubmit.co. Puedes cambiar el correo destino modificando el valor action. Para usar tu propio correo, regístrate en formsubmit.co y genera un nuevo endpoint.

Imágenes e iconos

El proyecto no usa imágenes externas pesadas; se apoya en iconos de Font Awesome. Si deseas añadir imágenes reales a los proyectos, colócalas en la carpeta assets/ y referencia su ruta dentro de .project-image.

✨ Características destacadas

    Fondo animado de puntos que se desplazan lentamente en todo el sitio (incluyendo header y hero).

    Efecto "terminal" en el área principal con comandos simulados (whoami, docker ps, etc.).

    Revelado de elementos al hacer scroll con efectos escalonados (stagger).

    Menú responsivo que se colapsa en móviles con botón hamburguesa.

    Botón "Volver arriba" con diseño moderno (píldora) y gradiente al hover.

    Formulario de contacto funcional sin backend propio (usa FormSubmit).

    Accesibilidad básica: atributos aria-label, contraste suficiente, navegación por teclado.

    Rendimiento optimizado: CSS y JS externos, carga asíncrona de fuentes, evitando reflows innecesarios.

📱 Compatibilidad

El sitio es compatible con los navegadores modernos:

    Chrome (últimas 2 versiones)

    Firefox (últimas 2 versiones)

    Safari (últimas 2 versiones)

    Edge (últimas 2 versiones)

    Navegadores móviles (iOS Safari, Chrome Android)

No se soportan versiones antiguas de Internet Explorer.
👤 Autor

Álvaro Ramírez

    Ingeniero Informático & Especialista en Redes

    📧 alvaro.ramirezn833@gmail.com

    🔗 LinkedIn (actualiza si tienes perfil real)

    🐙 GitHub

📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente siempre que se incluya el aviso de copyright original.

    Copyright (c) 2026 Álvaro Ramírez

🙏 Agradecimientos

    Font Awesome por los iconos.

    Google Fonts por las tipografías.

    FormSubmit por simplificar el envío de correos.

    Inspiración en diseños de terminal y fondos de puntos de la comunidad de desarrolladores.

🚧 Posibles mejoras futuras

    Añadir un blog o sección de artículos técnicos.

    Internacionalización (español/inglés).

    Modo claro/oscuro persistente.

    Mejorar la accesibilidad con lectores de pantalla.

    Integrar un CMS ligero para actualizar proyectos desde un panel.

Si deseas contribuir o reportar un problema, abre un issue en este repositorio. ¡Toda sugerencia es bienvenida!

Hecho con ❤️ por Álvaro Ramírez – Sueña, Construye y Vence.


Simplemente copia todo el contenido (desde ````markdown` hasta la línea final) y pégalo en un nuevo archivo llamado `README.md` en la raíz de tu repositorio. Si ya existe, reemplázalo. Los badges y el formato se mostrarán correctamente en GitHub.
