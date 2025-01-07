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