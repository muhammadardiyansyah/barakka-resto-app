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
    this._toTop.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        this.classList.add('active');
      } else {
        this.classList.remove('active');
      }
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
