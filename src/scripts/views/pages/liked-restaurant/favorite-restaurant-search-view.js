import { createRestaurantTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="top-restaurant">
        <input id="query" type="text" class="search-button" placeholder="Masukkan nama restaurant">
        <h3>Favorite Restaurant</h3>
          <div id="top-restaurant-list" class="list-restaurant">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    if (!restaurants) return;
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, resto) => carry.concat(createRestaurantTemplate(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('top-restaurant-list').innerHTML = html;

    document.getElementById('top-restaurant-list').dispatchEvent(new Event('top-restaurant-list:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurant__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
