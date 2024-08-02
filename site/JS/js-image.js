const imgElement = document.getElementById("div-img-capa-id");
const progressBarElement = document.getElementsByClassName("div-progressbar-content")[0];
sessionStorage.setItem("imageIndex", "0")
const listImages = JSON.parse(sessionStorage.getItem("imagesNames"));

function changeImage() {
    setTimeout(function() {
        cont = Number(sessionStorage.getItem("imageIndex"))

        imgElement.style.opacity = "0";
        progressBarElement.opacity = "0";
        progressBarElement.style.width = "0";

        progressBarElement.classList.add("non-animation");
        setTimeout(() => {
            progressBarElement.classList.remove("non-animation");
            imgElement.src = listImages[cont]
            imgElement.style.opacity = "1";
            progressBarElement.opacity = "1";
            progressBarElement.style.width = "100%";

            if (cont == listImages.length - 1) {
                cont = 0;
            }
            else {
                cont++;
            }

            sessionStorage.setItem("imageIndex", JSON.stringify(cont))
            changeImage()
        }, 400);
    }, 5000);
}

progressBarElement.style.width = "100%";
changeImage();