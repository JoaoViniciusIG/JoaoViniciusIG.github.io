let animActive = false;

function changeSlider(sliderAcr, next) {
    if (animActive == true) {return}

    //SliderInfos structure: [currentSlider, numOfSliders]
    let sliderInfos = JSON.parse(sessionStorage.getItem(`slider-${sliderAcr}`)),
    currentSlider = document.getElementById(`ul-slider-${sliderAcr}-${sliderInfos[0]}`);

    if (sliderInfos[0] < sliderInfos[1] && next === true) {
        sliderInfos[0]++;
    } 
    else if (sliderInfos[0] == sliderInfos[1] && next === true) {
        sliderInfos[0] = 1; 
    }
    else if (sliderInfos[0] == 1) {
        sliderInfos[0] = sliderInfos[1];
    }
    else {
        sliderInfos[0]--;
    }

    let nextSlider = document.getElementById(`ul-slider-${sliderAcr}-${sliderInfos[0]}`);

    nextSlider.classList.remove("ul-disabled")
    nextSlider.classList.add("ul-active");
    animActive = true;

    if (next == true) {
        currentSlider.style.animationName = "ul-back-1";
        nextSlider.style.animationName = "ul-enter-1";
    }
    else {
        currentSlider.style.animationName = "ul-back-2";
        nextSlider.style.animationName = "ul-enter-2";
    }
    
    setTimeout(() => {
        currentSlider.classList.remove("ul-active")
        currentSlider.classList.add("ul-disabled");
        animActive = false;
    }, 900);

    sessionStorage.setItem(`slider-${sliderAcr}`, JSON.stringify(sliderInfos));
}