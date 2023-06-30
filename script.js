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

// const botaoAnimar = document.getElementById("animar");
// const botaoAnimar1 = document.getElementById("animar1");
// const botaoAnimar2 = document.getElementById("animar2");
// const botaoAnimar3 = document.getElementById("animar3");
// const botaoAnimar4 = document.getElementById("animar4");

// const carro = document.querySelector(".carro");

// botaoAnimar.addEventListener("click", ()=> {
//   carro.style.animation = "";
//   setTimeout(() => carro.style.animation = "veic1 5s ease-in-out");
//   carro.style.top = "0px";
//   carro.style.right = "90px";
// });

// botaoAnimar1.addEventListener("click", ()=> {
//   carro.style.animation = "";
//   setTimeout(() => carro.style.animation = "veic2 5s ease-in-out");
//   carro.style.top = "0px";
//   carro.style.right = "300px";
// });

// botaoAnimar2.addEventListener("click", ()=> {
//   carro.style.animation = "";
//   setTimeout(() => carro.style.animation = "veic3 5s ease-in-out");
//   carro.style.top = "0px";
//   carro.style.right = "300px";
// });

// botaoAnimar3.addEventListener("click", ()=> {
//   carro.style.animation = "";
//   setTimeout(() => carro.style.animation = "veic4 5s ease-in-out");
// });

// botaoAnimar4.addEventListener("click", ()=> {
//   carro.style.animation = "";
//   setTimeout(() => carro.style.animation = "veic5 5s ease-in-out");
// });



