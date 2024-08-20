class Header extends HTMLElement {
    constructor() {
        self = super();
    }

    connectedCallback() {
        let isDark = 1;
        const themeName = ["light", "dark"];

        this.innerHTML = `
            <link rel="stylesheet" href="./components/header/header.css"/>

            <header id="header-div-master">
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
                            <svg class="svg-icons-header" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p class="nav-option-text">Início</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="repositorio">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <svg class="svg-icons-header" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 3V15M6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18M6 15C7.65685 15 9 16.3431 9 18M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p class="nav-option-text">Repositórios</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master premium" name="premium">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <svg class="svg-icons-header sgv-premium" width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.42 16.8H4.48313C4.30433 16.8016 4.12967 16.7449 3.98445 16.6383C3.83923 16.5317 3.731 16.3804 3.67543 16.2066L0.0464506 4.88693C-0.00914437 4.72416 -0.0149804 4.54793 0.0297277 4.38168C0.0744244 4.21544 0.167561 4.06703 0.296725 3.95622C0.424297 3.84176 0.582731 3.76939 0.751234 3.74864C0.919726 3.72787 1.09044 3.75968 1.24094 3.83988L7.86183 7.21369L11.2747 0.442807C11.3534 0.307831 11.465 0.196053 11.5985 0.118432C11.7322 0.0408114 11.8832 0 12.0369 0C12.1906 0 12.3415 0.0408114 12.4752 0.118432C12.6087 0.196053 12.7203 0.307831 12.7991 0.442807L16.2119 7.22533L22.8442 3.85152C22.993 3.77229 23.1617 3.74101 23.3282 3.76177C23.4948 3.78254 23.6512 3.85439 23.777 3.96786C23.8859 4.08991 23.9587 4.24109 23.9869 4.40379C24.0151 4.56649 23.9976 4.73404 23.9363 4.88693L20.2277 16.195C20.1741 16.371 20.0667 16.5247 19.9213 16.6336C19.7759 16.7425 19.6002 16.8008 19.42 16.8ZM5.1657 15.0549H18.817L21.6724 6.34116L16.1323 9.15654C16.0331 9.20843 15.9248 9.23972 15.8136 9.24845C15.7026 9.25729 15.5909 9.24333 15.485 9.20761C15.3792 9.1719 15.2813 9.11513 15.1971 9.04044C15.113 8.96575 15.0441 8.87477 14.9946 8.77263L11.9914 2.7463L8.99944 8.77263C8.94993 8.87477 8.88109 8.96575 8.79691 9.04044C8.71274 9.11513 8.6149 9.1719 8.50908 9.20761C8.40326 9.24333 8.29155 9.25729 8.18044 9.24845C8.06933 9.23972 7.96104 9.20843 7.86183 9.15654L2.29892 6.30626L5.1657 15.0549Z"/>
                            </svg>

                            <p class="nav-option-text">Premium</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="sobre">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <svg class="svg-icons-header" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p class="nav-option-text">Sobre</p>
                        </a>
                    </div>

                    <div class="nav-option-div-master" name="contato">
                        <span class="nav-option-div-selected"></span>
                        <a class="nav-option-a">
                            <svg class="svg-icons-header" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p class="nav-option-text">Contatos</p>
                        </a>
                    </div>
                </nav>

                <h1 class="header-access-counter">0002</h1>
            </header>
        `


        const selectedName = self.getAttribute("selectedName")

        const selectedElement = self.querySelector(`div[name="${selectedName}"]`);
        
        selectedElement.classList.add("div-selected");
        if (self.getAttribute("selectedName") !== "premium") {
            selectedElement.querySelector("path").style = `stroke: var(--color-icons-emphasis);`;
        }
    }
}

customElements.define("header-component", Header);