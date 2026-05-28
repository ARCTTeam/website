'use strict';

/**
 * Archivo principal de JavaScript para el portafolio de Álvaro Ramírez.
 * Incluye:
 * - Menú móvil (toggle)
 * - Header con cambio de estilo al hacer scroll
 * - Botón "Volver arriba" con scroll suave
 * - Scroll suave para enlaces internos (anclas)
 * - Animaciones "reveal" al hacer scroll (Intersection Observer)
 * - Envío asíncrono del formulario de contacto a FormSubmit
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==================== ELEMENTOS DEL DOM ====================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('backToTop');
    const revealElements = document.querySelectorAll('.reveal');

    // ==================== MENÚ MÓVIL ====================
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ==================== HEADER SCROLL ====================
    const toggleHeaderScrolled = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', toggleHeaderScrolled);
    toggleHeaderScrolled(); // Estado inicial

    // ==================== BOTÓN BACK TO TOP ====================
    const toggleBackToTop = () => {
        if (window.scrollY > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            smoothScrollTo(0, 800);
        });
    }

    // ==================== FUNCIÓN DE SCROLL SUAVE ====================
    function smoothScrollTo(targetPosition, duration = 800) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            // Función de easing cúbica para movimiento natural
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startPosition + distance * ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);
    }

    // ==================== SCROLL SUAVE PARA ENLACES INTERNOS ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
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

    // ==================== REVEAL ON SCROLL (Intersection Observer) ====================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Mejora rendimiento
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(el => observer.observe(el));

    // ==================== ENVÍO DEL FORMULARIO DE CONTACTO (ASÍNCRONO) ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita recarga de página

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

            const formData = new FormData(contactForm);
            // Añadimos la redirección manual (solo en caso de éxito)
            formData.append('_next', 'https://arctteam.github.io/website/gracias.html');

            try {
                const response = await fetch('https://formsubmit.co/ajax/9f723988e5fe8bf4dcea1c3533d64e77', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();

                if (response.ok && data.success !== false) {
                    // Redirigir a la página de gracias
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