const hamburguer = document.getElementById("hamburguer");
const navList = document.querySelector(".nav-list");
const mobileMenu = document.querySelector('.mobile-menu')

const header = document.querySelector("#header")

hamburguer.addEventListener('click', () => {

    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})

document.addEventListener("scroll", ()=> {

    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add("rolar")
    } else {
        header.classList.remove("rolar")
    }
})