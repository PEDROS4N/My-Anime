// Event listener para os botões
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    adicionarElemento("naruto");
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    adicionarElemento("frieren");
});

const btn3 = document.getElementById("btn3"); 
btn3.addEventListener("click", () => {
    adicionarElemento("koe"); 
});


// Função para adicionar elemento com base no tipo
function adicionarElemento(tipo) {
    let elementos = JSON.parse(sessionStorage.getItem("elementos")) || [];
    elementos.push(tipo);
    sessionStorage.setItem("elementos", JSON.stringify(elementos));
}