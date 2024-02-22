import CONFIG from '../../globals/config';

const createRestaurantTemplate = (resto) => `
<div class="restaurant-list">
  <a href="/#/detail/${resto.id}">
    <img class="restaurant-list-thumb lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name || '-'}" title="${resto.name || '-'}" crossorigin="anonymous">
      <div class="deskripsi-restaurant-list">
          <h4 class="restaurant-list-title" id="restaurant__title">${resto.name || '-'}</h4>
          <p class="city">${resto.city || '-'}</p>
      </div>
      <p class="restaurant-list-rating" title="Rating">${resto.rating || '-'}</p>
  </a>
</div>
`;

const createDetailRestaurant = (resto) => `
  <div class="detail-restaurant">
  
    <h2 class="title-restaurant" id="restaurant-title">
      ${resto.name}
    </h2>
    <div class="content-detail-restaurant">
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous"/>

      <div class="info">
        <ul>
          <li>
            <h3>Kota</h3>
            <p>${resto.city}</p>
          </li>
          <li>
            <h3>Alamat</h3>
            <p>${resto.address}</p>
          </li>
          <li>
            <h3>Rating</h3>
            <p>${resto.rating}</p>
          </li>
          <li>
            <h3>Foods Menu</h3>
            <span id="food">
            <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
            </span>
          </li>
          <li>
            <h3>Drinks Menu</h3>
            <span id="drink">
              <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
            </span>
          </li>
        </ul>
        
        <div class="overview">
        <h3>Overview</h3>
        <p>${resto.description}</p>
      </div>

    </div>
    </div>
  </div>
  `;

const createRestaurantReview = (review) => `
  <div class="review">
    <div class="posisi">
      <p class="name">${review.name}</p>
      <p class="date">${review.date}</p>
    </div>
    <p>${review.review}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createDetailRestaurant,
  createRestaurantReview,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
