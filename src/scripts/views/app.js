import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, toTop,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._toTop = toTop;

    this._initialAppShell();
  }

  _initialAppShell() {
    this._initialDrawer();
    this._initialToTop();
  }

  _initialDrawer() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initialToTop() {
    this._toTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
      });
    });

    window.addEventListener('scroll', () => {
      this._toTop.classList.toggle('active', window.scrollY > 500);
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
