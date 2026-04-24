const botao = document.querySelector(".btn-interacao")
const nomeBtn = document.querySelector(".nome-btn")

document.addEventListener("hover", ()=> {

    let evento = botao.innerHTML.style.width;

    if (evento > 300) {
        nomeBtn.innerHTML.style.display = "block";
    } else {
        nomeBtn.innerHTML.style.display = "none";
    }
    
})