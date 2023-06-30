let menu = document.getElementById("menu")
let aside = document.getElementById("aside")

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
    }
}

