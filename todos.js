document.addEventListener("DOMContentLoaded", () => {
  const elementos = JSON.parse(sessionStorage.getItem("elementos")) || [];
  const container = document.getElementById("container");

  elementos.forEach((tipo) => {
    const div = document.createElement("div");
    div.classList.add(`box-${tipo}`);

    if (tipo === "naruto") {
      div.innerHTML = `
                <img src="/assets/naruto.png" alt="Naruto">
                <div class="text-box">
                <img class="close" src="/assets/close.png" alt="close">
                    <h2>Naruto</h2>
                    <p class="p">Trocar lista</p>
                    <select id="select-${tipo}" required="required" title="select">
                    <option selected disabled></option>
                      <option id="assistindoN" value="assistindoN">Assistindo</option>
                      <option id="pretendoN" value="pretendo assistir">Pretendo assistir</option>
                      <option id="finalizadosN" value="finalizados">Finalizados</option>
                    </select> 
                </div>
            `;
    } else if (tipo === "frieren") {
      div.innerHTML = `
                <img src="/assets/frieren.png" alt="Sousou no Frieren">
                <div class="text-box">
                <img class="close" src="/assets/close.png" alt="close">
                    <h2>Sousou no Frieren</h2>
                    <p class="p">Trocar lista</p>
                    <select id="select-${tipo}" required="required" title="select">
                    <option selected disabled></option>
                      <option id="assistindoF" value="assistindoF">Assistindo</option>
                      <option id="pretendoF" value="pretendo assistir">Pretendo assistir</option>
                      <option id="finalizadosF" value="finalizados">Finalizados</option>
                    </select> 
                </div>
            `;
    } else if (tipo === "koe") {
      div.innerHTML = `
                <img src="/assets/koe-no-katachi.jpeg" alt="Koe no katachi">
                <div class="text-box">
                <img class="close" src="/assets/close.png" alt="close">
                    <h2>Koe no katachi</h2>
                    <p class="p">Trocar lista</p>
                    <select id="select-${tipo}" required="required" title="select">
                      <option selected disabled></option>
                        <option id="assistindoK" value="assistindoK">Assistindo</option>
                        <option id="pretendoK" value="pretendo assistir">Pretendo assistir</option>
                        <option id="finalizadosK" value="finalizados">Finalizados</option>
                    </select> 
                </div> 
            `;
    }
    container.appendChild(div);

    const selectN = div.querySelector(`#select-${tipo}`);
    selectN.addEventListener("change", (event) => {
      if (event.target.value === "assistindoN") {
        const assistindoN = document.querySelector("#assistindoN");
        if (assistindoN) {
          addElement("naruto");
        }
      }   
    });
    const selectF = div.querySelector(`#select-${tipo}`);
    selectF.addEventListener("change", (event) => {
      if (event.target.value === "assistindoF") {
        const assistindoF = document.querySelector("#assistindoF");
        if (assistindoF) {
          addElement("frieren");
        }
      }   
    });
    const selectK = div.querySelector(`#select-${tipo}`);
    selectK.addEventListener("change", (event) => {
      if (event.target.value === "assistindoK") {
        const assistindoK = document.querySelector("#assistindoK");
        if (assistindoK) {
          addElement("koe");
        }
      }   
    });
    function addElement(tipos) {
      let elemento = JSON.parse(sessionStorage.getItem("elemento")) || [];
      elemento.push(tipos);
      sessionStorage.setItem("elemento", JSON.stringify(elemento));
    }

    // exclui o elemento que esta dentro do container usar umas das opcoes do "select", nesse caso em especifico o "assistindo"
    const select = div.querySelector(`#select-${tipo}`);
    select.addEventListener("change", (event) => {
      if (Array.from(event.target.selectedOptions).map(option => option.value)) {
        const elementoParaRemover = document.querySelectorAll(
          "#assistindoN, #assistindoF, #assistindoK"
        );
        if (elementoParaRemover) {
          container.removeChild(div);
          // Atualizar a lista de elementos e salvar no sessionStorage
          const elementosRestantes = elementos.filter((e) => e !== tipo);
          sessionStorage.setItem(
            "elementos",
            JSON.stringify(elementosRestantes)
          );
        }
      }
    });
  });
});
// remove o elemento que esta dentro do container ao clicar no "X"
document.getElementById("container").addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    const container = document.getElementById("container");
    const elementToRemove = event.target.closest(
      ".box-naruto, .box-frieren, .box-koe"
    );
    if (elementToRemove) {
      container.removeChild(elementToRemove);
      const elementos = JSON.parse(sessionStorage.getItem("elementos")) || [];
      const tipoToRemove = elementToRemove.classList[0].split("-")[1];
      const indexToRemove = elementos.indexOf(tipoToRemove);
      if (indexToRemove !== -1) {
        elementos.splice(indexToRemove, 1);
        sessionStorage.setItem("elementos", JSON.stringify(elementos));
      }
    }
  }
});
