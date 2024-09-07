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
        const cardType = self.getAttribute("type");
        let cardContent, cardImageClass;



        if(cardType === "premium") {
            cardImageClass = "img-premium"
            cardContent = `<div class="card-especial card-premium">
                        <svg class="svg-icons-header" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.42 16.8H4.48313C4.30433 16.8016 4.12967 16.7449 3.98445 16.6383C3.83923 16.5317 3.731 16.3804 3.67543 16.2066L0.0464506 4.88693C-0.00914437 4.72416 -0.0149804 4.54793 0.0297277 4.38168C0.0744244 4.21544 0.167561 4.06703 0.296725 3.95622C0.424297 3.84176 0.582731 3.76939 0.751234 3.74864C0.919726 3.72787 1.09044 3.75968 1.24094 3.83988L7.86183 7.21369L11.2747 0.442807C11.3534 0.307831 11.465 0.196053 11.5985 0.118432C11.7322 0.0408114 11.8832 0 12.0369 0C12.1906 0 12.3415 0.0408114 12.4752 0.118432C12.6087 0.196053 12.7203 0.307831 12.7991 0.442807L16.2119 7.22533L22.8442 3.85152C22.993 3.77229 23.1617 3.74101 23.3282 3.76177C23.4948 3.78254 23.6512 3.85439 23.777 3.96786C23.8859 4.08991 23.9587 4.24109 23.9869 4.40379C24.0151 4.56649 23.9976 4.73404 23.9363 4.88693L20.2277 16.195C20.1741 16.371 20.0667 16.5247 19.9213 16.6336C19.7759 16.7425 19.6002 16.8008 19.42 16.8ZM5.1657 15.0549H18.817L21.6724 6.34116L16.1323 9.15654C16.0331 9.20843 15.9248 9.23972 15.8136 9.24845C15.7026 9.25729 15.5909 9.24333 15.485 9.20761C15.3792 9.1719 15.2813 9.11513 15.1971 9.04044C15.113 8.96575 15.0441 8.87477 14.9946 8.77263L11.9914 2.7463L8.99944 8.77263C8.94993 8.87477 8.88109 8.96575 8.79691 9.04044C8.71274 9.11513 8.6149 9.1719 8.50908 9.20761C8.40326 9.24333 8.29155 9.25729 8.18044 9.24845C8.06933 9.23972 7.96104 9.20843 7.86183 9.15654L2.29892 6.30626L5.1657 15.0549Z"/>
                        </svg>
                        
                        <h1>Premium</h1>
                    </div>`;
        }
        else if(cardType === "gold") {
            cardImageClass = "img-gold"
            cardContent = `<div class="card-especial card-gold">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_67_263)">
                            <path d="M3.08786 8.73754C3.07914 8.72886 3.07079 8.7199 3.06212 8.71118L1.93997 12.6313C1.86858 12.8806 2.01782 13.0408 2.27155 12.9872L3.66167 12.6939C3.6801 12.69 3.6992 12.6871 3.71863 12.6849L4.54107 9.78443C4.01003 9.52042 3.51955 9.16918 3.08786 8.73754Z" fill="white"/>
                            <path d="M4.39999 12.8748C4.42145 12.8912 4.44196 12.9081 4.46026 12.926L5.45009 13.8935C5.63559 14.0747 5.8457 14.0191 5.91705 13.7697L6.89401 10.3567C6.30851 10.3458 5.73801 10.2443 5.19844 10.0591L4.39999 12.8748Z" fill="white"/>
                            <path d="M7.10596 10.3567L8.08292 13.7697C8.15431 14.0191 8.36442 14.0747 8.54988 13.8935L9.53971 12.926C9.55621 12.9099 9.57446 12.8946 9.59356 12.8798L8.80082 10.0593C8.26149 10.2444 7.69122 10.3458 7.10596 10.3567Z" fill="white"/>
                            <path d="M10.9379 8.71114C10.9292 8.71991 10.9209 8.72882 10.9121 8.73749C10.4804 9.16923 9.98969 9.52056 9.45842 9.78457L10.2733 12.6842C10.2955 12.6865 10.3174 12.6894 10.3383 12.6938L11.7284 12.9872C11.9821 13.0408 12.1314 12.8806 12.06 12.6312L10.9379 8.71114Z" fill="white"/>
                            <path d="M11.8253 4.82535C11.8253 2.16036 9.66495 0 6.99996 0C4.33506 0 2.1747 2.16036 2.1747 4.82535C2.1747 7.49034 4.33506 9.6507 6.99996 9.6507C9.66495 9.6507 11.8253 7.49034 11.8253 4.82535ZM6.99996 8.67431C4.87769 8.67431 3.15109 6.94771 3.15109 4.82535C3.15109 2.703 4.87769 0.976397 6.99996 0.976397C9.12231 0.976397 10.8489 2.703 10.8489 4.82535C10.8489 6.94771 9.12231 8.67431 6.99996 8.67431Z" fill="white"/>
                            <path d="M6.99995 7.96701C8.73225 7.96701 10.1416 6.55766 10.1416 4.82535C10.1416 3.09305 8.73225 1.68369 6.99995 1.68369C5.26774 1.68369 3.85838 3.09305 3.85838 4.82535C3.85838 6.55766 5.26774 7.96701 6.99995 7.96701Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_67_263">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        
                        <h1>Gold</h1>
                    </div>`;
        }
        else if(cardType === "silver") {
            cardImageClass = "img-silver"
            cardContent = `<div class="card-especial card-silver">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_77_432)">
                            <path d="M3.16054 13.5126C2.82279 13.6859 2.43954 13.3822 2.50779 12.9946L3.23404 8.85587L0.151417 5.91937C-0.136458 5.64462 0.0131675 5.14237 0.399042 5.08812L4.68479 4.47912L6.59579 0.692995C6.76817 0.351745 7.23454 0.351745 7.40692 0.692995L9.31792 4.47912L13.6037 5.08812C13.9895 5.14237 14.1392 5.64462 13.8504 5.91937L10.7687 8.85587L11.4949 12.9946C11.5632 13.3822 11.1799 13.6859 10.8422 13.5126L7.00004 11.5386L3.16054 13.5126Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_77_432">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                        <h1>Silver</h1>
                    </div>`;
        }
        else {
            cardImageClass = "img-normal";
            cardContent = "";
        }

        this.innerHTML = `
            <link rel="stylesheet" href="./components/repCard/rep-card.css"/>

            <div class="container-master">
                <img class="img-card ${cardImageClass}" src="./assets/img/card-img/${imgSource}"/>

                <div class="div-content">
                    ${cardContent}

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