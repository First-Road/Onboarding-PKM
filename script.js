let menu = document.getElementById("menu")
let aside = document.getElementById("aside")
let posicao = document.getElementById("posicao")

function mostrarMenu() {
    if (window.getComputedStyle(aside).left == "0px") {
        aside.style.left = "-19vw"
    }
    else {
        aside.style.left = "0px"
    
    }
}




