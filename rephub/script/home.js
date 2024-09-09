function getDataToHome() {
    fetch("./content/cards-content.json").then(async (res) => {
        result = await res.json();
        
        // Preenchendo Num Cards
        document.querySelector("#text-num-cards").innerHTML = result.length;

        //
    })
}

getDataToHome()

function accessCard(webCounterName, webPath) {
    fetch(`https://api.counterapi.dev/v1/rephubifro2024/${webCounterName}/up`).then(async (res) => {
        await res.json();

        window.location.href = webPath;
    })
}