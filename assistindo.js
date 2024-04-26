document.addEventListener("DOMContentLoaded", () => {
    const elemento = JSON.parse(sessionStorage.getItem("elemento")) || [];
    const container2 = document.getElementById("container2");
  
    elemento.forEach((tipo) => {
      const div = document.createElement("div");
      div.classList.add(`box-${tipo}`);
  
      if (tipo === "naruto") {
        div.innerHTML = `
                  <img src="/assets/naruto.png" alt="Naruto">
                  <div class="text-box">
                  <img class="close" src="/assets/close.png" alt="close">
                      <h2>Naruto</h2>
                      <p class="p">Trocar lista</p>
                      <select id="select-${tipo}" required="required">
                      <option selected disabled></option>
                        <option id="assistindoN" value="assistindo">Assistindo</option>
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
                      <select id="select-${tipo}" required="required">
                      <option selected disabled></option>
                        <option id="assistindoF" value="assistindo">Assistindo</option>
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
                      <select id="select-${tipo}" required="required">
                        <option selected disabled></option>
                          <option id="assistindoK" value="assistindo">Assistindo</option>
                          <option id="pretendoK" value="pretendo assistir">Pretendo assistir</option>
                          <option id="finalizadosK" value="finalizados">Finalizados</option>
                      </select> 
                  </div> 
              `;
      }
      container2.appendChild(div);
    });
  });
  // remove o elemento que esta dentro do container ao clicar no "X"
  document.getElementById("container2").addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
      const container = document.getElementById("container2");
      const removeElement = event.target.closest(
        ".box-naruto, .box-frieren, .box-koe"
      );
      if (removeElement) {
        container.removeChild(removeElement);
        const elemento = JSON.parse(sessionStorage.getItem("elemento")) || [];
        const removeType = removeElement.classList[0].split("-")[1];
        const indexToRemove2 = elemento.indexOf(removeType);
        if (indexToRemove2 !== -1) {
          elemento.splice(indexToRemove2, 1);
          sessionStorage.setItem("elemento", JSON.stringify(elemento));
        }
      }
    }
  });
  