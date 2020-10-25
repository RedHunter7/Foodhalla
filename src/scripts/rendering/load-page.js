import home from '../page-manager/home.js';
import renderRestoDetail from './resto-detail-data.js';
import favorList from '../page-manager/favor-list';
import renderData from './restaurant-data';

const loadPage = (page) => {
  let restoId;
  if (page.substr(0, 12) === 'resto-detail') {
    restoId = page.slice(13);
    page = 'resto-detail';
  } else if (page.substr(0, 18) === 'resto-favor-detail') {
    restoId = page.slice(19);
    page = 'resto-favor-detail';
  } else if (page === 'home' || page === '') {
    page = 'home';
  } else if (page === 'favor-list') {
    page = 'favor-list';
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
          home();
          renderData();
        } else if (page === 'resto-detail') {
          renderRestoDetail(restoId);
        } else if (page === 'favor-list') {
          favorList();
        } else {
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
