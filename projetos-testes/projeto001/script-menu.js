const hamburguer = document.getElementById("hamburguer");
const navList = document.querySelector(".nav-list");
const mobileMenu = document.querySelector('.mobile-menu')

hamburguer.addEventListener('click', () => {

    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})