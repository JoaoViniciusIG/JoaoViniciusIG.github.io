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
                    <img id="footer-logo" src="./assets/img/logos/Logo-JV-Branco.svg">
                </div>

                <div id="footer-div-content">
                    <div class="div-content-components">
                        <div>
                            <div class="footer-div-contact">
                                <h2 class="footer-text-title">Contatos pessoais:</h2>

                                <div class="footer-div-icons">
                                    <a class="footer-a-icons">
                                        <img class="footer-icons" src="./assets/img/icons/instagram.svg"/>
                                    </a>
                                    <a class="footer-a-icons">
                                        <img class="footer-icons" src="./assets/img/icons/github.svg"/>
                                    </a>
                                    <a class="footer-a-icons">
                                        <img class="footer-icons" src="./assets/img/icons/twitter.svg"/>
                                    </a>
                                </div>
                            </div>

                            <div class="footer-div-contact">
                                <h2 class="footer-text-title">Contatos IFRO:</h2>

                                <div class="footer-div-icons">
                                    <a class="footer-a-icons">
                                        <img class="footer-icons" src="./assets/img/icons/instagram.svg"/>
                                    </a>
                                    <a class="footer-a-icons">
                                        <img class="footer-icons" src="./assets/img/icons/facebook.svg"/>
                                    </a>
                                    <a class="footer-a-icons">
                                        <img class="footer-icons" src="./assets/img/icons/twitter.svg"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 class="footer-text-title">Parceiros:</h2>

                            <div class="footer-div-parceiros">
                                <ul>
                                    <li>Cappeleto</li>
                                    <li>Carlos</li>
                                    <li>Hiago André</li>
                                    <li>João Corso</li>
                                    <li>João Inglez</li>
                                </ul>

                                <ul>
                                    <li>João Guerini</li>
                                    <li>João Andrade</li>
                                    <li>João Oliveira</li>
                                    <li>Marcos</li>
                                    <li>Nathan</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="div-content-registration">
                        <hr>
                        <p class="footer-registration-text"><i class="bi bi-c-circle"></i> 2024 - All rights reserved</p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("footer-component", Footer);