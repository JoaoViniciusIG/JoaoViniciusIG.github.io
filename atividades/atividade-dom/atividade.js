document.querySelectorAll('.miniatura').forEach(element => {
    element.addEventListener("click", () => abreAi(element.getAttribute("id")))
});

function abreAi(id) {
    document.querySelectorAll(".miniatura").forEach(element => {
        if(element.getAttribute("id") != id) element.style.opacity = "0.4"
        else element.style.opacity = 1;
    })
    
    const imgAmpliada = document.getElementById("imgAmpliada");
    
    imgAmpliada.src = document.getElementById(id).getAttribute("src");
    imgAmpliada.style.display = "block";
}