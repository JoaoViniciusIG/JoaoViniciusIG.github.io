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
        <repcard-component type="${info.type}" name="${info.name}" project-name="${info.projectName}" counter-card="1000" project-category="${info.projectCategory}" image-name="${info.imageSource}"></repcard-component>
        `
    }
}