import RestaurantSource from '../data/restaurant-source';

const PostingReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="detail-review__item">
      <div class="detail-review__item__header">
        <p class="detail-review__item__header__name">
            <i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${name}
        </p>
        <p class="detail-review__item__header__date">${date}</p>
      </div>
      <div class="detail-review__item__body">
        ${review}
      </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostingReview;
