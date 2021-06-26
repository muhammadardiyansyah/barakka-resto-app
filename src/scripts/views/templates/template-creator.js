import CONFIG from '../../globals/config';

const restaurantListTemplate = (restaurant) => `
  <article class="post-item">
    <h2 class="post-item__title">${restaurant.city}</h2>
    <figure>
        <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL_SML + restaurant.pictureId}"/>
        <figcaption class="post-item__rating">Rating ${restaurant.rating}</figcaption>
    </figure>
    <div class="post-item__content">
        <a href="#/detail/${restaurant.id}" class="post-item__content__title">${restaurant.name}</a>
        <p class="post-item__content__description">${restaurant.description}</p>
    </div>
  </article>
`;

const restaurantDetailTemplate = (detail) => `
<div class="detail">
    <div>
        <div>
            <img class="detail-img__res2" alt="image ${detail.name}" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" crossorigin="anonymous"/>
        </div>
    </div>
    <ul class="detail-info">
        <li>
            <span>
                <i title="restaurant" class="fa fa-store"></i>&emsp;${detail.name}
            </span>
        </li>
        <li>
            <span>
                <i title="address" class="fa fa-map-marker-alt"></i>&emsp;${detail.address}, ${detail.city}
            </span>
        </li>
        <li>
            <span>
                <i title="ratings" class="fa fa-star"></i>&emsp;${detail.rating}
            </span>
        </li>
        <li>
            <p class="truncate2">Description: ${detail.description}</p>
        </li>
        <li>
            ${detail.categories.map((category) => `
                <span class="detail-info__category">${category.name}</span>
                `).join('')}
        </li>
    </ul>
    <h3>MENU</h3>
    <div class="detail-menu grid-2">
        <div class="detail-menu__food">
            <h4>FOOD</h4>
            <ul>
                ${detail.menus.foods.map((food) => `
                    <li>${food.name}</li>
                `).join('')}
            </ul>
        </div>
        <div class="detail-menu__drink">
            <h4>DRINK</h4>
            <ul>
                ${detail.menus.drinks.map((drink) => `
                <li>${drink.name}</li>
                `).join('')}
            </ul>
        </div>
    </div>
    <h3 class="detail-title__review">Review</h3>
    <div class="detail-review grid-3">
        ${detail.customerReviews.map((review) => `
        <div class="detail-review__item">
            <div class="detail-review__item__header">
                <p class="detail-review__item__header__name">
                    <i title="restaurant" class="fa fa-user-circel" style="font-size:1.3em;"></i>&nbsp;${review.name}
                </P>
                <p class="detail-review__item__header__date">${review.date}</p>
            </div>
            <div class="review-body">
                ${review.review}
            </div>
        </div>
        `).join('')}
    </div>
</div>
`;

export { restaurantListTemplate, restaurantDetailTemplate };
