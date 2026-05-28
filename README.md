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

```
website/
├── index.html
├── gracias.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── (imágenes, iconos, etc.)
└── README.md
```

> **Nota:** El proyecto no requiere dependencias externas más allá de las CDNs mencionadas. No se necesita Node.js ni gestores de paquetes.

---

## 🛠️ Instalación y uso local

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/ARCTTeam/website.git
   cd website
2. Abre el archivo index.html en tu navegador (doble clic o usando un servidor local, por ejemplo Live Server de VS Code).

Servidor local rápido:

bash
npx serve .
3. Edita los archivos según necesites. Los cambios en CSS/JS se reflejan al recargar.

4. Para desplegar en GitHub Pages (si tienes permisos de escritura en el repositorio):

Ve a Settings > Pages.

En "Source", selecciona la rama main y la carpeta / (root).

Guarda. El sitio estará disponible en https://ARCTTeam.github.io/website/.

🎨 Personalización
Colores y variables globales
Todas las variables CSS se definen en el bloque :root dentro de css/styles.css. Puedes modificar fácilmente la paleta:

css
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

text

Para **descargarlo**, simplemente selecciona todo el texto de este bloque, cópialo y pégalo en un archivo llamado `README.md` en tu ordenador. Luego súbelo a la raíz de tu repositorio de GitHub.
como elimicar archivos de un repositorio de github
Vamos a explicar cómo eliminar archivos de un repositorio de GitHub, tanto desde la interfaz web como desde la línea de comandos.

Para eliminar archivos de un repositorio de GitHub tienes dos formas principales: desde la interfaz web o usando Git desde tu terminal. Te explico ambas:

1. Desde la interfaz web de GitHub (más sencillo)
Accede a tu repositorio en github.com.

Navega hasta el archivo que quieres eliminar.

Haz clic en el nombre del archivo para abrirlo.

En la parte superior derecha del contenido, verás un icono de papelera (Delete this file). Haz clic ahí.

Confirma el mensaje de eliminación.

Abajo escribe un mensaje para el commit (por ejemplo: "Eliminar archivo X") y selecciona si quieres hacer el cambio directamente en la rama principal o crear una nueva rama.

Haz clic en Commit changes.

Nota: Si hay varios archivos, puedes ir a la pestaña "Code", presionar la tecla . (punto) para abrir el editor web de VS Code y allí eliminar varios archivos rápidamente.

2. Usando Git en tu terminal (recomendado para múltiples archivos)
bash
# 1. Clona el repositorio si no lo tienes local
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# 2. Elimina el archivo (o archivos)
git rm archivo-a-eliminar.txt
# O elimina una carpeta entera con -r
git rm -r nombre-carpeta/

# 3. Confirma el cambio
git commit -m "Eliminar archivo X"

# 4. Sube el cambio a GitHub
git push origin main   # (o la rama que uses, por ejemplo master)
Si quieres eliminar un archivo pero conservarlo en local (solo del repositorio remoto):
bash
git rm --cached archivo.txt
git commit -m "Dejar de trackear archivo"
git push origin main
Si ya has hecho git rm pero quieres recuperarlo antes de hacer push:
bash
git restore archivo.txt
3. Desde GitHub Desktop (si usas la app)
Abre GitHub Desktop y selecciona tu repositorio.

En la lista de cambios, haz clic derecho sobre el archivo que quieras eliminar y elige Delete.

Escribe un mensaje de commit.

Haz clic en Commit to main.

Luego Push origin.

Precauciones
No puedes eliminar archivos directamente de un repositorio al que no tengas permisos de escritura.

Si eliminas un archivo y luego haces push, el historial de Git conserva versiones anteriores; siempre se puede recuperar (no es como una papelera de sistema, pero sí se puede revertir el commit).

Si alguien más ha trabajado con el archivo, asegúrate de comunicar el cambio.

¿Quieres recuperar un archivo eliminado?
Busca el commit donde fue eliminado y restaura:

bash
git log --diff-filter=D --summary   # lista archivos eliminados
git checkout <hash-del-commit>~1 -- archivo.txt
git commit -m "Restaurar archivo"
git push
Si necesitas eliminar una carpeta entera o muchos archivos, la opción de terminal es la más rápida.

como subir carpetas a mi repositorio de github
Vamos a explicar cómo subir carpetas (directorios) a un repositorio de GitHub. El usuario quiere saber el proceso. Le daré instrucciones claras paso a paso usando Git (terminal) y también desde la web de GitHub (arrastrar y soltar). Además, mencionaré buenas prácticas como asegurarse de que la carpeta no esté vacía (Git no trackea directorios vacíos).

Para subir carpetas completas a un repositorio de GitHub, puedes hacerlo desde la terminal usando Git o mediante la interfaz web de GitHub (arrastrar y soltar). Te explico ambos métodos:

1. Usando Git (terminal) – Recomendado para proyectos
bash
# 1. Clona el repositorio si aún no lo tienes local
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# 2. Copia la carpeta (con su contenido) dentro del repositorio local
# Por ejemplo, copias la carpeta "mi-carpeta" a la raíz del repositorio
cp -r /ruta/de/mi-carpeta .   # En Linux/Mac
xcopy /ruta\de\mi-carpeta .   # En Windows (PowerShell usa Copy-Item)

# 3. Agrega la carpeta al área de staging (incluye su contenido)
git add mi-carpeta/

# 4. Confirma el cambio con un mensaje
git commit -m "Añadir carpeta mi-carpeta"

# 5. Sube los cambios a GitHub
git push origin main   # o master, según tu rama principal
Importante: Git no puede trackear directorios vacíos. Si tu carpeta no tiene ningún archivo, no se subirá. Añade al menos un archivo (por ejemplo, un .gitkeep o un README.md) dentro de la carpeta.

2. Desde la interfaz web de GitHub (arrastrar y soltar)
Ve a tu repositorio en github.com.

Navega hasta la ubicación donde quieras añadir la carpeta (por ejemplo, la raíz).

Haz clic en Add file → Upload files.

Arrastra la carpeta completa desde tu explorador de archivos y suéltala en el área indicada. GitHub conservará la estructura de carpetas.

Abajo, escribe un mensaje de commit (ejemplo: "Añadir carpeta proyectos").

Selecciona "Commit directly to the main branch" o crea una nueva rama.

Haz clic en Commit changes.

Nota: La interfaz web solo permite subir archivos, pero si arrastras una carpeta, también subirá los archivos respetando la jerarquía. Si quieres subir una carpeta vacía, no es posible desde la web.

3. Usando GitHub Desktop (app)
Abre GitHub Desktop y selecciona tu repositorio.

Haz clic en Repository → Show in Explorer (Windows) o Reveal in Finder (Mac).

Copia o mueve la carpeta deseada dentro del directorio del repositorio.

En GitHub Desktop, verás los archivos nuevos listados.

Escribe un mensaje de commit y haz clic en Commit to main.

Luego Push origin.

Buenas prácticas
Si una carpeta debe estar presente aunque esté vacía, crea dentro un archivo oculto llamado .gitkeep (no tiene función especial, es solo una convención).

No subas carpetas con archivos grandes o binarios innecesarios; considera usar .gitignore.

Verifica que no estás subiendo información sensible (contraseñas, claves) – añádelas al .gitignore.

¿Quieres subir una carpeta ya existente en tu PC pero no quieres clonar todo el repositorio?
Puedes inicializar Git en esa carpeta y vincularla a un remoto:

bash
cd /ruta/mi-carpeta
git init
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git add .
git commit -m "Añadir carpeta"
git push -u origin main   # fuerza el empuje si es necesario
Pero cuidado: esto puede sobrescribir archivos. Mejor clonar y copiar.

Si tienes dudas sobre algún paso, coméntame.

