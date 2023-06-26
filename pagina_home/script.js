let menu = document.getElementById("menu")
let aside = document.getElementById("aside")
let secao = document.getElementById("secao")

function mostrarMenu() {
    if (window.getComputedStyle(aside).left == "0px") {
        aside.style.left = "-19vw"
        secao.style.width = "100vw"
    }
    else {
        aside.style.left = "0px"
        secao.style.width = "80vw"
        // aside.style.width = "50px"
        // posicao.style.width = "20px"
       
    }
}

