// Esta función se activa al hacer clic en el icono del menú en dispositivos móviles
function toggleMenu() {
    var menu = document.querySelector('.nav-links');
    menu.classList.toggle('active'); // Añade o elimina la clase 'active' para mostrar/ocultar el menú
}

// Función para desplazar los artículos hacia la izquierda
function scrollLeft() {
    var content = document.querySelector('.scroll-content');
    content.scrollBy({
        left: -250, // Desplaza 250px hacia la izquierda
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Función para desplazar los artículos hacia la derecha
function scrollRight() {
    var content = document.querySelector('.scroll-content');
    content.scrollBy({
        left: 250, // Desplaza 250px hacia la derecha
        behavior: 'smooth' // Desplazamiento suave
    });
}

function toggleSidebar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


  /* Función para mostrar/ocultar el menú principal */
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // Cambia entre mostrar y ocultar el menú
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}

/* Función para manejar la apertura/cierre de submenús */
document.querySelectorAll('.menu-item p').forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.nextElementSibling; // Selecciona el submenu correspondiente
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none'; // Ocultar submenú
        } else {
            submenu.style.display = 'block'; // Mostrar submenú
        }
    });
});




//carousel

const carousel = document.querySelector('.carousel');
const rightBtn = document.getElementById('right-btn');

//numero d cajas visibles
const boxesPerView = 3;

//funcion para mover el carousel a la derecha
rightBtn.addEventListener('click', () => {
    // Desplazar el carrousel hacia la izquierda en base al número de cajas visibles
    const currentTransform = carousel.style.transform ? parseInt(carousel.style.transform.replace('translateX(', '').replace('px)', '')) : 0;
    const maxTransform = -(carousel.scrollWidth - carousel.clientWidth); // Límite de desplazamiento a la izquierda

    if (currentTransform > maxTransform) {
        carousel.style.transform = `translateX(${currentTransform - boxWidth * boxesPerView}px)`;
    }
});


const element = document.getElementById('miElemento');
if (element) {
    element.addEventListener('click', miFuncion);
}

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('miElemento');
    if (element) {
        element.addEventListener('click', miFuncion);
    }
});
