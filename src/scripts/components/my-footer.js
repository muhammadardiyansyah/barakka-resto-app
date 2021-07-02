class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
        <div class="footer-copyright">
            <p>Created by Muhammad Ardiyansyah, S.Pd <br> Copyright © 2021 - Barakka Resto Apps</p>
        </div>
    </footer>
      `;
  }
}

customElements.define('my-footer', MyFooter);
