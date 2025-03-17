const texto = document.getElementById("texto");
const btnTrocarTexto = document.getElementById("btnTrocarTexto");
const btnMudarCor = document.getElementById("btnMudarCor");
const btnAdicionar = document.getElementById("btnAdicionar");
const container = document.getElementById("container");

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];


const btnShow = document.getElementById("btnShow");

let contador = 0;

btnTrocarTexto.addEventListener("click", () => {
    texto.textContent = `O texto foi modificado ${++contador} vezes`;
});

btnMudarCor.addEventListener("click", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    texto.style.color = randomColor;
});


btnShow.addEventListener("click", () => {
    if(texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
});

btnAdicionar.addEventListener("click", () => {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = `${++contador}° elemento adicionado`;
    container.appendChild(novoParagrafo);
});
