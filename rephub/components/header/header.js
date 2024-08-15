class Header extends HTMLElement {
    constructor() {
        self = super();
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="./components/header/header.css"/>

            <div id="header-div-master">
                <a class="header-a header-mobile-icons">
                    <img class="header-icons" src="./assets/img/icons/list.svg"/>
                </a>

                <a class="header-a">
                    <img class="header-logo" src="./assets/img/logos/Logo-JV-Branco.svg">
                </a>

                <a class="header-a header-mobile-icons">
                    <img class="header-icons" src="./assets/img/icons/filter.svg"/>
                </a>


                <nav id="header-nav-container">
                    <div class="nav-option-div-master" name="inicio">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <img class="nav-option-icon" src="./assets/img/icons/header/icon-home-preto.svg" />
                            <p class="nav-option-text">Início</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="inicio">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <img class="nav-option-icon" src="./assets/img/icons/header/icon-home-preto.svg" />
                            <p class="nav-option-text">Início</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="inicio">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <img class="nav-option-icon" src="./assets/img/icons/header/icon-home-preto.svg" />
                            <p class="nav-option-text">Início</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="inicio">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <img class="nav-option-icon" src="./assets/img/icons/header/icon-home-preto.svg" />
                            <p class="nav-option-text">Início</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="inicio">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <img class="nav-option-icon" src="./assets/img/icons/header/icon-home-preto.svg" />
                            <p class="nav-option-text">Início</p>
                        </a>
                    </div>
                </nav>

                <h1 class="header-access-counter">0002</h1>
            </div>
        `

        const selectedName = self.getAttribute("selectedName")

        console.log(selectedName)
    }
}

customElements.define("header-component", Header);