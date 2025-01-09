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
const carousel =
document.querySelector('.carousel');

const leftArrow =
document.getElementById('left-arrow');
const rightArrow =
    document.getElementById('right-arrow');

let currentIndex = 0;
let prevIndex;
const articles =
document.querySelectorAll(".new-article";)

const totalArticles =
Objects.keys(articles).length;

const articleWidth = 520;
console.log("getbounding1", articles[3].getBoundingClientRect());

leftArrow.addEventListener("click",() => {
    prevIndex = currentIndex;
    currentIndex = (currentIndex - 1 + totalArticles) % totalArticles;
    carousel.style.transform =
    `translateX(-${imageWidth}px)`;

    carousel.insertBefore(images[currentIndex], carousel.firstChild);

        setTimeout(() => {
            carousel.style.transform = "";
            carousel.classList.add("sliding-transition");
        },10)

        setTimeout(() => {
            carousel.classList.remove("sliding-transition");
        },490);
});

rightArrow.addEventListener("click", () => {
    carousel.classList.add("sliding-transition");

        prevIndex = (currentIndex + 1) % totalArticles;

        carousel.style.transform =
        `translateX(-${imageWidth}px)`;

        setTimeout(() => {

carousel.appendChild(articles[prevIndex]);

carousel.classList.remove("sliding-transition");
        carousel.style.transform = "";
        }, 500);
});