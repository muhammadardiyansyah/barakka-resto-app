import RestaurantSource from '../../data/restaurant-source';
import { createBaseItemTemplate, restaurantListTemplate } from '../templates/template-creator';
import Loading from '../templates/template-loading';

const Home = {
  async render() {
    return `
    <section class="content">
            <article class="headline">
                <figure class="headlineFigure">
                    <img src="/images/img/27356.jpg" alt=" headline romantic date dan public house">
                    <figcaption>Penyesuaian Tema Reservasi</figcaption>
                </figure>
                <div class="headlineContent">
                    <h1 class="headlineTitle">Reservasi sekarang dapatkan promo</h1>
                    <p class="headlineDesk">Reservasi di aplikasi kami dapatkan discount dan anda dapat menyesuaikan tema restaurant anda, apapun suasana hati anda kami akan melayani dengan maksimal. kepuasan pelanggan serta kenyamanan adalah keutamaan kami. Tunggu apa lagi jangan sampai kehabisan meja sehingga membuat anda menyesal. Anda tak perlu khaatir jika pelayan kami tidak memuaskan, kami memberikan garansi 100% gratis. Tunggu apa lagi klik tombol di bawah sekarang juga.</p>
                    <button class="headlineButton">Pesan Sekarang</button>
                </div>
            </article>
      <div class="container">
        <div id="loading"></div>
        <div class="main exploreResto">
          <h1 class="label">Explore Your Favorite Restaurant</h1>
          <section class=posts id="list-restaurant">
            ${createBaseItemTemplate(20)}
          </section>
        </div>
        </div>
      </div>
    </section>
  `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
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
