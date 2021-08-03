const boton = document.querySelectorAll(".navbar-toggler-icon");
const menu = document.querySelector(".hamburger");
const cruz = document.querySelector(".cruz");

const navLink = document.querySelectorAll(".nav-link-menu");
const hijosNavLink = document.querySelector(".nav-link-menu").firstElementChild;


boton.forEach(element =>
    element.addEventListener('click',() => {
        menu.classList.toggle("desaparecer");
        cruz.classList.toggle("desaparecer");
    })
);

navLink.forEach(element => {
    element.addEventListener('click',() => {
        element.classList.toggle("flecha");
    });
})
