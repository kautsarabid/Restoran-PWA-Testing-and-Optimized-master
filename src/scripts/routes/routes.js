import TopRestaurantList from '../views/pages/top-restaurant-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

// import HeroCustom from '../component/custom-hero';

const routes = {
  '/': TopRestaurantList,
  '/top-restaurant-list': TopRestaurantList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
