class RepCard extends HTMLElement {
    constructor() {
        self = super();
    }

    connectedCallback() {
        const name = self.getAttribute("name");
        const projectName = self.getAttribute("project-name");
        const counterCard = self.getAttribute("counter-card");
        const projectCategory = self.getAttribute("project-category");
        const imgSource = self.getAttribute("image-name");

        this.innerHTML = `
            <link rel="stylesheet" href="./components/repCard/rep-card.css"/>

            <div class="container-master">
                <img class="img-card" src="./assets/img/card-img/card-0001-img.png"/>

                <div class="div-content">
                    <div class="div-content-text">
                        <h1 class="poppins text-title">${name}</h1>
                        <h2 class="poppins text-subtitle">${projectName}</h2>
                        <h3 class="poppins text-content">${counterCard}</h3>
                    </div>

                    <div class="div-content-icons">
                        <h3 class="poppins text-content">${projectCategory}</h3>
                        <a></a>
                        <a></a>
                    </div>
                </div>
            </div>
        `
        
    }
}

customElements.define("repcard-component", RepCard);