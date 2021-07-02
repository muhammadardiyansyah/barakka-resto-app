import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/my-footer';
import './components/my-hero';
import './components/my-nav';
import './components/my-header';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#main-content'),
  toTop: document.querySelector('.to-top'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
