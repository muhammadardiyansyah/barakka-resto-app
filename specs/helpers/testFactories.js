import LikeButtonPresenter from '../../src/scripts/utils/like-button';
import FavoriteRestaurantIdb from '../../src/scripts/data/restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
