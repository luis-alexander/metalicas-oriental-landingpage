const btnTodos = document.getElementById('btn-todos');
const btnPuertas = document.getElementById('btn-puertas');
const btnPortones = document.getElementById('btn-portones');
const btnLanford = document.getElementById('btn-lanford');
const modeloItems = document.querySelectorAll('.modelo-item');

// Función para resaltar el botón activo
function setActiveButton(activeBtn) {
    // Eliminar la clase 'active' de todos los botones
    [btnTodos, btnPuertas, btnPortones, btnLanford].forEach(btn => {
        btn.classList.remove('bg-red-900');
    });
    
    // Añadir la clase 'active' al botón seleccionado
    activeBtn.classList.add('bg-red-900');
}

// Función para filtrar los elementos
function filtrarElementos(tipo) {
    modeloItems.forEach(item => {
        if (tipo === 'Todos' || item.dataset.tipo === tipo) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Configurar los event listeners
btnTodos.addEventListener('click', () => {
    filtrarElementos('Todos');
    setActiveButton(btnTodos);
});

btnPuertas.addEventListener('click', () => {
    filtrarElementos('Puertas');
    setActiveButton(btnPuertas);
});

btnPortones.addEventListener('click', () => {
    filtrarElementos('Portones');
    setActiveButton(btnPortones);
});

btnLanford.addEventListener('click', () => {
    filtrarElementos('Lanford');
    setActiveButton(btnLanford);
});

// Inicializar mostrando todos los elementos
filtrarElementos('Todos');
setActiveButton(btnTodos);