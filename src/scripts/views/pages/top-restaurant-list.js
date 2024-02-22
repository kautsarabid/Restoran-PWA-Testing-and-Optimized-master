import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const TopRestaurantList = {
  async render() {
    return `
    <custom-hero></custom-hero>
    <list-restaurant></list-restaurant>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurant();
    const restaurantsContainer = document.querySelector('.list-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default TopRestaurantList;
