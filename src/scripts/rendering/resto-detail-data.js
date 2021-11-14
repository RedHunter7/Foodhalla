import restoDetail from '../page-manager/resto-detail';
import loadPage from '../rendering/load-page';
import {getData} from '../idb/idb';

const renderRestoDetail = (restoId) => {
  getData(restoId).then((result) => {
    if (
      // eslint-disable-next-line max-len
      ((result === undefined || result !== undefined) && navigator.onLine === true) ||
      (result === undefined && navigator.onLine === false)
    ) {
      fetchData();
    } else {
      getIDBRestoData(result);
    }
  });

  const getIDBRestoData = (result) => {
    let img;

    if (navigator.onLine === false) {
      img = 'img/placeholder-image-1.png';
    } else {
      img = result['picture'];
    }

    const restoCover = document.getElementById('resto-cover');
    restoCover.innerHTML = `
        <img src="${img}"
        alt="resto cover">
        <div class="resto-info">
            <h1>${result['title']}</h1>
            <h3>
            ${result['city']} | 
            ${result['rating']} 
            <i class="material-icons">stars</i>
            </h3>
            <h4>${result['address']}</h4>
            <h5>${result['categories']}</h5>
        </div>
    `;

    const restoDescription = document.querySelector('.resto-description p');
    restoDescription.innerHTML = result['description'];

    const restoFood = document.querySelector('.resto-menu .food ul');
    result['food'].forEach((food) => {
      restoFood.innerHTML += `<li>${food['name']}</li>`;
    });

    const restoDrink = document.querySelector('.resto-menu .drink ul');
    result['drink'].forEach((drink) => {
      restoDrink.innerHTML += `<li>${drink['name']}</li>`;
    });

    const consumerReviews = document.getElementById('consumer-review');
    result['reviews'].forEach((review) => {
      consumerReviews.innerHTML += `
        <div class="review">
          <h3>${review['name']}</h3>
          <h4>${review['date']}</h4>
          <h3>“${review['review']}”</h3>
         </div>
      `;
    });

    const restoData = {
      id: restoId,
      title: result['title'],
      picture: result['picture'],
      city: result['city'],
      rating: result['rating'],
      address: result['address'],
      categories: result['categories'],
      description: result['description'],
      food: result['food'],
      drink: result['drink'],
      reviews: result['reviews'],
    };
    restoDetail(restoData);
  };

  const fetchData = () => {
    fetch(`https://restaurant-api.dicoding.dev/detail/${restoId}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          renderRestoDetail(result);
        })
        .catch((error) => {
          console.log(error);
          restoDetail();
          const mainContent = document.getElementById('main-content');
          mainContent.innerHTML = `
      <div class="error">
        <div class="svg-wrapper">
            <svg class="error-icon" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="190" stroke-width="20"/>
              <line x1="149.17" y1="130.507" x2="96.5637" 
              y2="183.964" stroke-width="10"/>
              <line x1="146.934" y1="183.089" x2="92.8912" 
              y2="131.085" stroke-width="10"/>
              <line x1="301.17" y1="130.507" x2="248.564" 
              y2="183.964" stroke-width="10"/>
              <line x1="298.934" y1="183.089" x2="244.891" 
              y2="131.085" stroke-width="10"/>
              <line x1="96" y1="268.5" x2="305" y2="268.5" stroke-width="15"/>
            </svg>
        </div>
        <h1>Ooops can't load page on offline mode</h1>
      </div>
      `;

          const interval = setInterval(() => {
            if (navigator.onLine === true) {
              loadPage(`resto-detail-${restoId}`);
              clearInterval(interval);
            };
          }, 1000);
        });
  };

  const renderRestoDetail = (result) => {
    let categories = '';
    result['restaurant']['categories'].forEach((elm) => {
      categories += `#${elm['name']} `;
    });

    const restoCover = document.getElementById('resto-cover');
    restoCover.innerHTML = `
    <img src="img/placeholder-image-1.png" data-src="https://restaurant-api.dicoding.dev/images/large/${result['restaurant']['pictureId']}"
    class="lazyload" alt="resto cover">
    <div class="resto-info">
        <h1>${result['restaurant']['name']}</h1>
        <h3>
        ${result['restaurant']['city']} | 
        ${result['restaurant']['rating']} 
        <i class="material-icons">stars</i>
        </h3>
        <h4>${result['restaurant']['address']}</h4>
        <h5>${categories}</h5>
    </div>
`;

    // eslint-disable-next-line max-len
    const restoDescription = document.querySelector('.resto-description p');
    restoDescription.innerHTML = result['restaurant']['description'];

    const restoFood = document.querySelector('.resto-menu .food ul');
    result['restaurant']['menus']['foods'].forEach((elm) => {
      restoFood.innerHTML += `<li>${elm['name']}</li>`;
    });

    const restoDrink = document.querySelector('.resto-menu .drink ul');
    result['restaurant']['menus']['drinks'].forEach((elm) => {
      restoDrink.innerHTML += `<li>${elm['name']}</li>`;
    });

    const consumerReviews = document.getElementById('consumer-review');
    result['restaurant']['customerReviews'].forEach((elm) => {
      consumerReviews.innerHTML += `
    <div class="review">
        <h3>${elm['name']}</h3>
        <h4>${elm['date']}</h4>
        <h3>“${elm['review']}”</h3>
    </div>
    `;
    });

    const restoData = {
      id: restoId,
      title: result['restaurant']['name'],
      picture: `https://restaurant-api.dicoding.dev/images/large/${result['restaurant']['pictureId']}`,
      city: result['restaurant']['city'],
      rating: result['restaurant']['rating'],
      address: result['restaurant']['address'],
      categories: categories,
      description: result['restaurant']['description'],
      food: result['restaurant']['menus']['foods'],
      drink: result['restaurant']['menus']['drinks'],
      reviews: result['restaurant']['customerReviews'],
    };
    restoDetail(restoData);
  };
};

export default renderRestoDetail;
