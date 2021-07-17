const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "You don't have any favorite restaurant, please select your favorite restaurant";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#list-restaurant');
  I.see(firstCondition, '#list-restaurant');
});

Scenario('favorite one restaurant', async ({ I }) => {
  I.see(firstCondition, '#list-restaurant');

  I.amOnPage('/');

  I.seeElement('.post-item a');
  const firstItem = locate('.post-item__link__detail').first();
  const firstItemDetail = await I.grabTextFrom(firstItem);
  I.click(firstItem);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedItemDetail = await I.grabTextFrom('.post-item__link__detail');

  assert.strictEqual(firstItemDetail, likedItemDetail);
});

Scenario('unfavorite one restaurant', async ({ I }) => {
  I.see(firstCondition, '#list-restaurant');

  I.amOnPage('/');

  // melihat item restaurant pertama dan mengkliknya ke detail
  I.seeElement('.post-item a');
  const firstItem = locate('.post-item__link__detail').first();
  const firstItemDetail = await I.grabTextFrom(firstItem);
  I.click(firstItem);

  // memfavoritkan restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite dan melihat restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const favoriteItemDetail = await I.grabTextFrom('.post-item__link__detail');
  assert.strictEqual(firstItemDetail, favoriteItemDetail);

  // mengklik item restaurant yg ada di halaman favorite
  I.click('.post-item__link__detail');

  // mengunfavoritkan restaurant yang ada di halaman favorite
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('#list-restaurant');
  const noFavoriteRestaurant = await I.grabTextFrom('#list-restaurant');

  // mengecek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavoriteRestaurant, firstCondition);
});

Scenario('Customer review', async ({ I }) => {
  I.see(firstCondition, '#list-restaurant');

  I.amOnPage('/');

  I.seeElement('.post-item a');
  I.click(locate('.post-item a').first());

  I.seeElement('.contaner-main__form__review form');

  const textReview = 'Review from E2E testing';
  I.fillField('inputName', 'Muhammad Ardiyansyah');
  I.fillField('inputReview', textReview);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
