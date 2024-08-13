class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <link rel="stylesheet" href="./components/footer/footer.css"/>

            <div id="footer-div-master">
                <div id="footer-div-logo">
                    <img src="./assets/img/logos/Logo-JV-Branco.svg">
                </div>

                <div id="footer-div-content">
                    <div class="div-content-components">
                        <div>
                            <div>
                                <h2 class="footer-text-title">Contatos pessoais:</h2>

                                <div>
                                    <img class="footer-icons" src="./assets/img/icons/instagram.svg"/>
                                    <img class="footer-icons" src="./assets/img/icons/github.svg"/>
                                    <img class="footer-icons" src="./assets/img/icons/twitter.svg"/>
                                </div>
                            </div>

                            <div>
                            </div>
                        </div>

                        <div>
                        </div>
                    </div>

                    <div class="div-content-components">
                        <hr>
                        <p></p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("footer-component", Footer);

