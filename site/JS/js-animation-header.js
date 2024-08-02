const headerElement = document.getElementsByTagName("header")[0];
let lastScrollPosition = 0;

addEventListener("scroll", (event) => {
    let deltaY = window.scrollY - lastScrollPosition;
    lastScrollPosition = window.scrollY;
    
    let headerClass = headerElement.classList,
        headerHeight = headerElement.offsetHeight,
        scroolTop = window.pageYOffset;

    if(deltaY > 0 && headerClass.value){
        hiddenHeader(headerClass, scroolTop);
    }
    else if (deltaY < 0 && !headerClass.value) {
        showHeader(headerClass, scroolTop, headerHeight);
    }
    else if(deltaY < 0 && headerClass.value == "header-active") {
        fixedHeader(headerClass, scroolTop);
    }
})


function hiddenHeader(headerClass ,scroolTop) {
    headerElement.style.position = "absolute";
    headerElement.style.top = `${scroolTop}px`;
    headerClass.value = "";
}

function showHeader(headerClass, scroolTop, headerHeight) {
    headerPosition = scroolTop - headerHeight < 0 ? "0px" : `${scroolTop - headerHeight}px`;

    headerElement.style.position = "absolute";
    headerElement.style.top = headerPosition;

    headerClass.add("header-active");
}

function fixedHeader(headerClass, scroolTop) {
    let headerPos = headerElement.style.top;
    headerPos = parseInt(headerPos.substring(0, headerPos.length - 2));

    if (headerPos >= scroolTop) {
        headerElement.style.position = "fixed";
        headerElement.style.top = "0px";

        headerClass.add("fixed");
    }
}