// Menu lateral
let menu_visible = false;
const menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (!menu_visible) {
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Ocultar menú luego de seleccionar una opción
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener('click', function() {
        menu.style.display = "none";
        menu_visible = false;
    });
});

// Porcentaje de habilidades
function crearBarra(id_barra) {
    for (let i = 0; i < 20; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Manipular las barras
const html = document.getElementById("html");
crearBarra(html);

const javascript = document.getElementById("javascript");
crearBarra(javascript);

const c = document.getElementById("c");
crearBarra(c);

const redes = document.getElementById("redes");
crearBarra(redes);

const mysql = document.getElementById("mysql");
crearBarra(mysql);

const mongo = document.getElementById("mongo");
crearBarra(mongo);

// Porcentajes
const contadores = [-1, -1, -1, -1, -1, -1];
let entro = false; // bandera

function efectoHabilidades() {
    const habilidades = document.getElementById("habilidades");
    const distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;
        const intervalhtml = setInterval(() => {
            pintarBarra(html, 14, 1, intervalhtml);
        }, 100);
        const intervaljavascript = setInterval(() => {
            pintarBarra(javascript, 10, 0, intervaljavascript);
        }, 100);
        const intervalc = setInterval(() => {
            pintarBarra(c, 18, 2, intervalc);
        }, 100);
        const intervalredes = setInterval(() => {
            pintarBarra(redes, 14, 3, intervalredes);
        }, 100);
        const intervalmysql = setInterval(() => {
            pintarBarra(mysql, 14, 4, intervalmysql);
        }, 100);
        const intervalmongo = setInterval(() => {
            pintarBarra(mongo, 4, 5, intervalmongo);
        }, 100);
    }
}

// Llenar barras
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    const x = contadores[indice];
    if (x < cantidad) {
        const elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.background = "#3e74c2";
    } else {
        clearInterval(interval);
    }
}

// Scroll
window.addEventListener('scroll', efectoHabilidades);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});
