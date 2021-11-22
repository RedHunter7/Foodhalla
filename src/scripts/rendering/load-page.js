import renderHomeTopNav from './load-home-topnav.js';
import renderDetailTopNav from "./load-detail-topnav";
import renderRestoDetail from '../api/resto/resto-detail-data.js';
import restoFavorList from '../page-manager/resto-favor-list';
import renderRestoList from '../api/resto/resto-list';
import renderMealList from '../api/meal/meal-list.js';
import renderMealDetail from '../api/meal/meal-detail-data.js';
import mealFavorList from '../page-manager/meal-favor-list';

const loadPage = (page) => {
  let restoId, mealId;
  if (page.substr(0, 12) === 'resto-detail') {
    restoId = page.slice(13);
    page = 'resto-detail';
  } else if (page.substr(0, 18) === 'resto-favor-detail') {
    restoId = page.slice(19);
    page = 'resto-favor-detail';
  } else if (page === 'home' || page === '') {
    page = 'home';
  } else if (page === 'meal-list') {
    page = 'meal-list';
  } else if (page.substr(0, 11) == 'meal-detail') {
    mealId = page.slice(12);
    page = 'meal-detail';
  } else if (page === 'resto-favor-list') {
    page = 'resto-favor-list';
  } else if (page === 'meal-favor-list') {
    page = 'meal-favor-list';
  } else if (page === 'about-us') {
    page = 'about-us';
  } else {
    page = '404';
  }

  fetch(`page/${page}.html`)
      .then((response) => {
        return response.text();
      })
      .then((result) => {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = result;
        if (page === 'home') {
          renderHomeTopNav();
          renderRestoList();
        } else if (page === 'resto-detail') {
          renderRestoDetail(restoId);
        } else if (page === 'meal-list') {
          renderHomeTopNav();
          renderMealList();
        } else if (page === 'meal-detail') {
          renderMealDetail(mealId);
        } else if (page === 'resto-favor-list') {
          renderDetailTopNav('Your Favorite Resto');
          restoFavorList();
        } else if (page === 'meal-favor-list') {
          renderDetailTopNav('Your Favorite Meal');
          mealFavorList();
        } else if (page === 'about-us') {
          renderHomeTopNav();
        } else {
          renderHomeTopNav();
          home();
          const goHomeBtn = document.querySelector('.page-not-found a');
          goHomeBtn.addEventListener('click', () => {
            loadPage('home');
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
};

export default loadPage;
