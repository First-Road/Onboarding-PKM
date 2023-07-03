let menu = document.getElementById("menu")
let aside = document.getElementById("aside")
let posicao = document.getElementById("posicao")

function mostrarMenu() {
    if (window.getComputedStyle(aside).left == "0px") {
        aside.style.left = "-19vw"
    }
    else {
        aside.style.left = "0px"
        // aside.style.width = "50px"
        // posicao.style.width = "20px"
       
    }
}

const botaoAnimar = document.getElementById("animar");
const botaoAnimar1 = document.getElementById("animar1");
const botaoAnimar2 = document.getElementById("animar2");
const botaoAnimar3 = document.getElementById("animar3");
const botaoAnimar4 = document.getElementById("animar4");
const botaoAnimar5 = document.getElementById("animar5");
const botaoAnimar6 = document.getElementById("animar6");
const botaoAnimar7 = document.getElementById("animar7");
const botaoAnimar8 = document.getElementById("animar8");
const botaoAnimar9 = document.getElementById("animar9");

const carro = document.querySelector(".carro");

botaoAnimar.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic1 3s ease-in-out");
  carro.style.top = "0px";
  carro.style.right = "90px";
});

botaoAnimar1.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic2 3s ease-in-out");
  carro.style.top = "0px";
  carro.style.right = "300px";
});

botaoAnimar2.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic3 3s ease-in-out");
  carro.style.top = "-120px";
  carro.style.right = "400px";
  // carro.style.transform = scaleX(-1)
});

botaoAnimar3.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic4 3s ease-in-out");
  carro.style.top = "-130px";
  carro.style.right = "155px";
  // carro.style.transform = scaleX(-1)

});

botaoAnimar4.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic5 3s ease-in-out");
  carro.style.top = "-130px";
  carro.style.right = "-5px";
});

botaoAnimar5.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic6 3s ease-in-out");
  carro.style.top = "-265px";
  carro.style.right = "-150px";
});

botaoAnimar6.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic7 3s ease-in-out");
  carro.style.top = "-300px";
  carro.style.right = "80px";
});

botaoAnimar7.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic8 3s ease-in-out");
  carro.style.top = "-300px";
  carro.style.right = "250px";

});

botaoAnimar8.addEventListener("click", ()=> {
  carro.style.animation = "";
  setTimeout(() => carro.style.animation = "veic9 3s ease-in-out");
  carro.style.top = "-250px";
  carro.style.right = "413px";
});

// botaoAnimar8.addEventListener("click", ()=> {
//   carro.style.animation = "";
//   setTimeout(() => carro.style.animation = "veic10 3s ease-in-out");
//   carro.style.top = "-250px";
//   carro.style.right = "413px";
// });






