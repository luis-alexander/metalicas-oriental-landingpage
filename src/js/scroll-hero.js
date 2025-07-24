// Script para un scroll suave
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return; // Ignorar si es solo "#"

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcular la posición y ajustar el offset
            const offset = 80; // Ajusta según el tamaño de tu header
            const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            offset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            // Duración de la animación en milisegundos
            const duration = 800;
            let startTimestamp = null;

            // Función de animación
            function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            // Función de easing para una animación más natural
            // Esta es una función "easeInOutQuad"
            const easeInOutQuad = (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            // Calcular la posición actual
            const runtime = progress / duration;
            const ease = easeInOutQuad(Math.min(runtime, 1));

            window.scrollTo({
                top: startPosition + distance * ease,
                behavior: "auto", // Usamos 'auto' porque estamos controlando la animación manualmente
            });

            // Continuar la animación si no ha terminado
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
            }

            // Iniciar la animación
            window.requestAnimationFrame(step);
        }
        });
    });
});
