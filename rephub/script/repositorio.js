function getData() {
    fetch("./content/cards-content.json").then(async (res) => {
        result = await res.json();

        insertCards(result);
    })
}

getData()


function insertCards(data) {
    const divCards = document.getElementById("container-cards-master");

    for(info of data) {
        divCards.innerHTML += `
        <repcard-component type="${info.type}" name="${info.name}" project-name="${info.projectName}" project-category="${info.projectCategory}" card-index="${info.id}" project-url="${info.projectUrl}" instagram-url="${info.instagramUrl}" github-url="${info.githubUrl}" counter-name="${info.counterName}" image-source="${info.imageSource}"></repcard-component>
        `

        getAccessCardNum(`card-${info.id}`, info.counterName);
    }
}

function getAccessCardNum(counterPath, webCounterName) {
    fetch(`https://api.counterapi.dev/v1/rephubifro2024/${webCounterName}/`)
        .then(async (res) => {
            const responseContent = await res.json();

            let resNum = responseContent.count;

            let resStr = `${"0".repeat(4 - (JSON.stringify(resNum).length))}${resNum}`;

            document.getElementById(counterPath).innerHTML = resStr;
        })
}

function accessCard(webCounterName, webPath) {
    fetch(`https://api.counterapi.dev/v1/rephubifro2024/${webCounterName}/up`).then(async (res) => {
        await res.json();

        window.location.href = webPath;
    })
}