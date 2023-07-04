let menu = document.getElementById("menu")
let aside = document.getElementById("aside")
let posicao = document.getElementById("posicao")

addEventListener("resize", () => {
    if (window.innerWidth >= "769"){
        aside.style.left = "0px"

    }
});



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

