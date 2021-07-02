class Nav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="navigation-drawer" class="navigation">
            <div class="logo-navigation">
                <img src="/images/img/bs.png" alt="logo navigasi barakka app" class="logo-navigation__bar">
            </div>
            <ul class="navigation-list">
                <li class="navigation-list__item"><a href="#/home">Home</a></li>
                <li class="navigation-list__item"><a href="#/favorite">Favorite</a></li>
                <li class="navigation-list__item"><a href="https://www.instagram.com/ardi_iyn/" target="_blank" rel="noopener noreferrer">About Us</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('nav-custom', Nav);
