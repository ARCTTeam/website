// Modo estricto para evitar errores comunes
'use strict';

// Esperamos a que todo el HTML esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // ========== 1. OBTENER REFERENCIAS A LOS ELEMENTOS DEL DOM ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('backToTop');
    const revealElements = document.querySelectorAll('.reveal');

    // ========== 2. MENÚ MÓVIL (HAMBURGUESA) ==========
    if (mobileMenuBtn && navLinks) {
        // Al hacer clic en el botón, se añade o quita la clase 'active'
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // Cuando se hace clic en un enlace, se cierra el menú
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ========== 3. CAMBIAR ESTILO DEL HEADER AL HACER SCROLL ==========
    const toggleHeaderScrolled = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Añade sombra y borde
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', toggleHeaderScrolled);
    toggleHeaderScrolled(); // Llamada inicial por si la página ya está scrolleada

    // ========== 4. MOSTRAR/OCULTAR BOTÓN "VOLVER ARRIBA" ==========
    const toggleBackToTop = () => {
        if (window.scrollY > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    // ========== 5. FUNCIÓN DE SCROLL SUAVE CON EASING ==========
    // Permite desplazarse de forma animada a una posición (sin saltos bruscos)
    function smoothScrollTo(targetPosition, duration = 800) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            // Función de easing cúbica: suave al inicio y al final
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startPosition + distance * ease);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    // ========== 6. SCROLL SUAVE PARA ENLACES INTERNOS (anclas) ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el salto instantáneo
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                smoothScrollTo(targetPosition, 900);
            }
        });
    });

    // ========== 7. ANIMACIONES "REVEAL" AL HACER SCROLL ==========
    // Usamos IntersectionObserver: detecta cuándo un elemento entra en la pantalla.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observarlo (mejora rendimiento)
            }
        });
    }, { threshold: 0.2 }); // Se activa cuando el 20% del elemento es visible

    revealElements.forEach(el => observer.observe(el));

    // ========== 8. ENVÍO DEL FORMULARIO DE CONTACTO (ASÍNCRONO) ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita la recarga de la página

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

            const formData = new FormData(contactForm);
            // Añadimos la redirección manual (a gracias.html)
            formData.append('_next', 'gracias.html');

            try {
                // Petición POST a FormSubmit (servicio que reenvía el correo)
                const response = await fetch('https://formsubmit.co/ajax/9f723988e5fe8bf4dcea1c3533d64e77', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();

                if (response.ok && data.success !== false) {
                    // Redirige a la página de agradecimiento
                    window.location.href = 'gracias.html';
                } else {
                    throw new Error(data.message || 'Error al enviar el mensaje');
                }
            } catch (error) {
                console.error('Error en el envío:', error);
                alert('❌ No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde o escríbeme directamente a alvaro.ramirezn833@gmail.com');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});