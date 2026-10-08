// Menú móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cambiar de pestañas en el Menú
function switchTab(category) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.menu-content');
    contents.forEach(c => c.classList.add('hidden'));

    // Quitar clases activas de los botones
    const tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(t => {
        t.classList.remove('bg-gold', 'text-black');
        t.classList.add('bg-darkCard', 'text-gray-400');
    });

    // Mostrar contenido seleccionado
    document.getElementById(`content-${category}`).classList.remove('hidden');

    // Activar botón seleccionado
    const activeBtn = document.getElementById(`btn-${category}`);
    activeBtn.classList.remove('bg-darkCard', 'text-gray-400');
    activeBtn.classList.add('bg-gold', 'text-black');
}

// Modal de Reserva
const modal = document.getElementById('reservation-modal');

function openModal() {
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

// Cerrar modal haciendo clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Manejo del formulario de reserva
function handleReservation(e) {
    e.preventDefault();
    closeModal();
    
    // Mostrar toast de éxito
    const toast = document.getElementById('toast');
    toast.classList.remove('translate-y-32');
    
    setTimeout(() => {
        toast.classList.add('translate-y-32');
    }, 4000);
}

// Navbar transparente con efecto al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('py-3');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('py-3');
        navbar.classList.add('py-4');
    }
});