import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailRestaurant, createRestaurantReview } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

import '../../component/detail-restaurant';
import '../../component/reviews-restaurant';

const Detail = {
  async render() {
    return `
      <detail-restaurant></detail-restaurant>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurantContainer = document.querySelector('#restaurant-detail');
    detailRestaurantContainer.innerHTML = createDetailRestaurant(detailRestaurant);

    detailRestaurantContainer.innerHTML += '<reviews-restaurant></reviews-restaurant>';

    const restaurantReview = document.querySelector('#reviews-restaurant');
    detailRestaurant.customerReviews.forEach((review) => {
      restaurantReview.innerHTML += createRestaurantReview(review);
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        city: detailRestaurant.city,
        pictureId: detailRestaurant.pictureId,
        rating: detailRestaurant.rating,
      },
    });
  },
};

export default Detail;
