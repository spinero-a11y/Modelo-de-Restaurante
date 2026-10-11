// 1. Configurar Fecha Mínima (Hoy) y Máxima (+5 Años en el futuro)
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('reservation-date');
    if (dateInput) {
        const now = new Date();
        const todayStr = now.toISOString().split('T')[0];
        
        // Permite reservas hasta dentro de 5 años
        const maxDate = new Date(now.getFullYear() + 5, now.getMonth(), now.getDate());
        const maxStr = maxDate.toISOString().split('T')[0];

        dateInput.setAttribute('min', todayStr);
        dateInput.setAttribute('max', maxStr);
        dateInput.value = todayStr;
    }
});

// 2. Control del campo de teléfono (+34 obligatorio + 9 dígitos)
const phoneInput = document.getElementById('reservation-phone');
if (phoneInput) {
    phoneInput.addEventListener('focus', () => {
        if (!phoneInput.value.startsWith('+34')) {
            phoneInput.value = '+34';
        }
    });

    phoneInput.addEventListener('input', (e) => {
        let val = e.target.value;
        if (!val.startsWith('+34')) {
            val = '+34' + val.replace(/[^0-9]/g, '');
        } else {
            val = '+34' + val.slice(3).replace(/[^0-9]/g, '');
        }
        e.target.value = val;
    });
}

// Menú móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cambiar de pestañas en el Menú
function switchTab(category) {
    const contents = document.querySelectorAll('.menu-content');
    contents.forEach(c => c.classList.add('hidden'));

    const tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(t => {
        t.classList.remove('bg-gold', 'text-black');
        t.classList.add('bg-darkCard', 'text-gray-400');
    });

    document.getElementById(`content-${category}`).classList.remove('hidden');

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

// Manejo del formulario de reserva con validación de teléfono
function handleReservation(e) {
    e.preventDefault();

    const phoneVal = phoneInput ? phoneInput.value.trim() : '';
    const phoneError = document.getElementById('phone-error');

    // Validación oficial: +34 seguido de 9 números que inicien con 6, 7, 8 o 9
    const phoneRegex = /^\+34[6789]\d{8}$/;

    if (!phoneRegex.test(phoneVal)) {
        if (phoneError) phoneError.classList.remove('hidden');
        if (phoneInput) phoneInput.classList.add('border-red-500');
        return;
    } else {
        if (phoneError) phoneError.classList.add('hidden');
        if (phoneInput) phoneInput.classList.remove('border-red-500');
    }

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