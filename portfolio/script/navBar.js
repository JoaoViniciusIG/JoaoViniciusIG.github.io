let isActive = false;

function toggleNavBar() {
    const navBar = document.querySelector("#header-nav-container");
    const navLinksList = navBar.getElementsByTagName("li");
    const mobileMenu = document.querySelector("#mobile-menu");
    
    // Acionamento do botão
    (isActive) ? mobileMenu.classList.remove("active")
    : mobileMenu.classList.add("active");
    


    // Acionamento da barra lateral
    (isActive) ? navBar.classList.remove("active")
    : navBar.classList.add("active");

    // Acionamento dos links da barra lateral
    let time,
        i = 0;

    for(link of navLinksList) {
        time = i * 0.2 + 0.3;
        i++
        (isActive) ? 
        link.style.animation = ''
        : link.style.animation = `navLinkFade .5s ease forwards ${time}s`;
    }


    isActive = !isActive
}


function getAccessSiteNum(counterPath, webCounterName) {
    fetch(`https://api.counterapi.dev/v1/jvhubifro2024/${webCounterName}/`)
        .then(async (res) => {
            const responseContent = await res.json();

            let resNum = responseContent.count;

            let resStr = `${"0".repeat(4 - (JSON.stringify(resNum).length))}${resNum}`;

            document.getElementById(counterPath).innerHTML = resStr;
        })
}