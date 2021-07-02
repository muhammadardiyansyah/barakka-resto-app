import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import Loading from '../templates/template-loading';
import { restaurantDetailTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import PostingReview from '../../utils/posting-review';
import LikeButtonPresenter from '../../utils/like-button';

const Detail = {
  async render() {
    return `
      <div class="container">
      <div id="loading"></div>
        <div class="container-main">
          <h2 class="container-main__title">DETAIL RESTAURANT</h2>
          <section id="detail-restaurant"></section>
          <div class="container-main__like" id="likeButtonContainer"></div>
          <div class="contaner-main__form__review">
            <form>
              <div class="container-main__form__review__mb-3">
                <label for="inputName" class="contaner-main__form__review__mb-3__label">Name</label>
                <input name="inputName" type="text" class="contaner-main__form__review__mb-3__control" id="inputName">
              </div>
              <div class="container-main__form__review__mb-3">
                <label for="inputReview" class="contaner-main__form__review__mb-3__label">Review</label>
                <input name="inputReview" type="text" class="contaner-main__form__review__mb-3__control" id="inputReview">
              </div>
              <button id="submit-review" type="submit" class="contaner-main__form__review__button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-restaurant');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.container-main');
    loading.innerHTML = Loading();
    main.style.display = 'none';
    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.innerHTML += restaurantDetailTemplate(data.restaurant);
      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        data,
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      detailContainer.innerHTML = `Error: ${error}, please check your connection and refresh this page!`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }

    const buttonSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    buttonSubmit.addEventListener('click', (submit) => {
      submit.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Data tidak boleh kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostingReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
