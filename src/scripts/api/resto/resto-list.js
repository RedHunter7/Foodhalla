import renderDetailTopNav from "../../rendering/load-detail-topnav";

const renderRestoList = () => {
  fetch('https://restaurant-api.dicoding.dev/list')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        restoList(result);
      })
      .catch((err) => {
        const restaurantList = document.getElementById('restaurant-list');
        restaurantList.innerHTML = `
        <div class="error-message">
            <h2>Ooops can't load restaurant data on offline mode</h2>
        </div>
        `;
        const interval = setInterval(() => {
          if (navigator.onLine === true) {
            renderRestoList();
            clearInterval(interval);
          };
        }, 1000);
        console.log(err);
      });

  const restoList = (result) => {
    let restoList = '';
    result['restaurants'].forEach((elm) => {
      restoList += `
                <div class="restaurant">
                   <figure>
                       <img src="img/placeholder-image-2.png" data-src="https://restaurant-api.dicoding.dev/images/small/${elm['pictureId']}" class="lazyload" alt="${elm['name']}">
                   </figure>
                   <div class="restaurant-detail">
                       <main>
                           <div class="title">
                               <a href="#resto-detail-${elm['id']}">
                               ${elm['name']}
                               </a>
                           </div>
                       <div class="rating">
                           ${elm['city']} | ${elm['rating']}&nbsp;
                           <i class="material-icons">stars</i>
                       </div>
                       <div class="description">
                           ${elm['description'].substr(0, 100)}...
                       </div>
                       </main>
                   </div>
               </div>
            `;
    });
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = restoList;

    // eslint-disable-next-line max-len
    const restoDetailLink = document.querySelectorAll('.restaurant-list a');
    restoDetailLink.forEach((elm) => {
      elm.addEventListener('click', (event) => {
        renderDetailTopNav('loading..');
      });
    });
  };
};

export default renderRestoList;
