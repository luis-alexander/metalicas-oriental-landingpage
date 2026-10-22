// Script para abrir/cerrar el menu

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const navbar = document.getElementById('navbar');

    const openMenu = () => {
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
        overlay.classList.remove('hidden');
    };

    const closeMenu = () => {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-closed');
        overlay.classList.add('hidden');
    };

    openBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // Cerrar el menu al elegir una seccion
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fondo solido en la barra al hacer scroll
    const updateNavbar = () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 20);
    };
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
});
