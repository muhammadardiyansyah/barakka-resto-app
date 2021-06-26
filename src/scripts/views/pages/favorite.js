import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { restaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <h2 class="title-container">Your Favorite Restaurant</h2>
    <section id="list-restaurant"></section>
    </div>
  </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const listContainer = document.querySelector('#list-restaurant');
    if (data.length === 0) {
      listContainer.innerHTML = `
        You don't have any favorite restaurant, please select your favorite restaurant
      `;
    }
    const totalRestaurant = data.length;
    data.forEach((restaurant, index) => {
      listContainer.innerHTML += restaurantListTemplate(restaurant, index, totalRestaurant);
    });
  },
};

export default Favorite;
