class Card extends HTMLElement {
    constructor() {
        self = super()
    }

    connectedCallback() {
        const githubLink = self.getAttribute("github"),
              imgPreviewName = self.getAttribute("img-name"),projectTitle = self.getAttribute("title"),
              projectCategory = self.getAttribute("category"),
              projectAccessCounterName = self.getAttribute("counter-name"),
              directoryName = self.getAttribute("directory-name");

        this.innerHTML = `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <link rel="stylesheet" href="./jvhub/components/card/card.css"/>
            <script src="./jvhub/script/access.js"></script>

            <div id="card-div-master" onClick="accessCard('${projectAccessCounterName}', '${directoryName}')">
                <div class="card-div-img-preview">
                    <img class="card-img-preview" src="./jvhub/assets/img-preview/${imgPreviewName}.png" alt="Preview ${projectTitle}"/>
                </div>

                <div class="card-div-content">
                    <div class="card-div-content-title">
                        <h2 class="text-title text-extra-light">${projectTitle}</h2>
                        <h3 id="text-counter-${projectAccessCounterName}" class="text-subtitle text-extra-light">0000</h3>
                    </div>

                    <div class="card-div-content-social">
                        <p class="text-content text-extra-light">${projectCategory}</p>
                        
                        <a class="card-social-a" href="${githubLink}">
                            <i class="card-social-icons" data-feather="github"></i>
                        </a>
                    </div> 
                </div>
            </div>
        `
        getAccessCardNum(`text-counter-${projectAccessCounterName}`, projectAccessCounterName)
    }
}

customElements.define("card-component", Card);