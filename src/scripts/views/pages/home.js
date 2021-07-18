import RestaurantSource from '../../data/restaurant-source';
import { restaurantListTemplate } from '../templates/template-creator';
import Loading from '../templates/template-loading';

const Home = {
  async render() {
    return `
    <section class="content">
      <article class="content-headline">
        <figure class="content-headline__figure">
          <picture>
            <source type="image/webp" srcset="/img/27356.webp">
            <source type="image/jpeg" srcset="/img/27356.jpg">
            <img class="lazyload" data-src="/img/27356.jpg" alt="headline romantic date dan public house">
          </picture>
          <figcaption>Penyesuaian Tema Reservasi</figcaption>
        </figure>
        <div class="content-headline__content">
          <h1 class="content-headline__content___title">Reservasi sekarang dapatkan promo</h1>
          <p class="content-headline__content__description">Reservasi di aplikasi kami dapatkan discount dan anda dapat menyesuaikan tema restaurant anda, apapun suasana hati anda kami akan melayani dengan maksimal. kepuasan pelanggan serta kenyamanan adalah keutamaan kami. Tunggu apa lagi jangan sampai kehabisan meja sehingga membuat anda menyesal. Anda tak perlu khaatir jika pelayan kami tidak memuaskan, kami memberikan garansi 100% gratis. Tunggu apa lagi klik tombol di bawah sekarang juga.</p>
          <button class="content-headline__content__button">Pesan Sekarang</button>
        </div>
      </article>
      <div class="container">
        <div id="loading"></div>
        <div class="contaner-main">
          <h1 class="contaner-main__label">Explore Your Favorite Restaurant</h1>
          <section class="contaner-main__posts" id="list-restaurant">
          </section>
        </div>
        </div>
      </div>
    </section>
  `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.contaner-main');
    loading.innerHTML = Loading();
    main.style.display = 'none';
    const listContainer = document.querySelector('#list-restaurant');
    listContainer.innerHTML = '';

    try {
      const data = await RestaurantSource.listRestaurant();
      const totalRestaurant = data.restaurants.length;
      data.restaurants.forEach((restaurant, index) => {
        listContainer.innerHTML += restaurantListTemplate(restaurant, index, totalRestaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${error}, please check your connection and refresh this page!`;
    }
  },
};

export default Home;
