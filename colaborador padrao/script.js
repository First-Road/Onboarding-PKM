let menu = document.getElementById("menu")
let aside = document.getElementById("aside")
let sombra = document.getElementById("sombra")
let body = document.getElementById("body")



addEventListener("resize", () => {
    if (window.innerWidth >= "768"){
        aside.style.left = "0px"
    }
    else{
        aside.style.left = "-140px"

    }
});


function mostrarMenu() {
    if (window.getComputedStyle(aside).left == "0px") {
        aside.style.left = "-140px"
        sombra.style.right ="110vw"
        body.style.overflow = "auto"
    }
    else {
        aside.style.left = "0px"
        sombra.style.right = "0px"
        body.style.overflow = "hidden"
    }
}

