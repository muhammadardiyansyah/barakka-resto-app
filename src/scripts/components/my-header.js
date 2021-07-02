class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
            <div class="header-inner">
                <h1 class="header-inner__title">
                    BARAKKA RESTO APP
                </h1>
            </div>
            <button id="hamburger-button" class="header-menu" href="#" aria-label="hamburge-menu">☰</button>
        </header>
    `;
  }
}

customElements.define('header-custom', Header);
