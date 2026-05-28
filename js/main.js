'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // Elementos del DOM
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('backToTop');
    const revealElements = document.querySelectorAll('.reveal');

    // ========== MENÚ MÓVIL ==========
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ========== HEADER SCROLL ==========
    const toggleHeaderScrolled = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', toggleHeaderScrolled);
    toggleHeaderScrolled();

    // ========== BOTÓN VOLVER ARRIBA (VISIBILIDAD) ==========
    const toggleBackToTop = () => {
        if (window.scrollY > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    // ========== FUNCIÓN DE SCROLL SUAVE (USANDO NATIVO) ==========
    function smoothScrollTo(targetY, duration = 800) {
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easing cúbico suave
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startY + distance * ease);
            if (elapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    // ========== EVENTO CLICK DEL BOTÓN "SUBIR" ==========
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(0, 800);
        });
    }

    // ========== SCROLL SUAVE PARA ENLACES INTERNOS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                smoothScrollTo(targetPosition, 900);
            }
        });
    });

    // ========== ANIMACIONES REVEAL AL SCROLL ==========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    revealElements.forEach(el => observer.observe(el));

    // ========== ENVÍO ASÍNCRONO DEL FORMULARIO ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

            const formData = new FormData(contactForm);
            formData.append('_next', 'gracias.html');

            try {
                const response = await fetch('https://formsubmit.co/ajax/9f723988e5fe8bf4dcea1c3533d64e77', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (response.ok && data.success !== false) {
                    window.location.href = 'gracias.html';
                } else {
                    throw new Error(data.message || 'Error al enviar');
                }
            } catch (error) {
                console.error(error);
                alert('❌ No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde o escríbeme directamente a alvaro.ramirezn833@gmail.com');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});