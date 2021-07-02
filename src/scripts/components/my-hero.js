class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-inner__title">Resto Terbaik, Termurah dan Terpercaya </h1>
                <p class="hero-inner__tagline">Anda sedang jalan-jalan? traveling? perut lapar? pusing mau makan di mana? Barakka Restaurant App Solusinya.</p>
            </div>
        </div>
      `;
  }
}

customElements.define('hero-custom', Hero);
