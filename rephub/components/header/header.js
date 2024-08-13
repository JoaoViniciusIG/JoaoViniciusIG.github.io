class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="./components/header/header.css"/>

            <div id="header-div-master">
                <a class="header-a">
                    <img class="header-icons" src="./assets/img/icons/list.svg"/>
                </a>
            
                <a class="header-a">
                    <img class="header-logo" src="./assets/img/logos/Logo-JV-Branco.svg">
                </a>

                <a class="header-a">
                    <img class="header-icons" src="./assets/img/icons/filter.svg"/>
                </a>
            </div>
        `
    }
}

customElements.define("header-component", Header);