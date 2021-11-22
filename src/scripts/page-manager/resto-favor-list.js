import {getAllRestoData} from '../idb/resto-favor-db';

const restoFavorList = () => {
  const favorRestoList = getAllRestoData();
  favorRestoList
      .then((result) => {
        let restoList = '';
        result.forEach((elm) => {
          let img;
          if (navigator.onLine === false) {
            img = 'img/placeholder-image-2.png';
          } else {
            img = elm['picture'];
          }
          restoList += `
                <div class="restaurant">
                   <figure>
                       <img loading="lazy" src="${img}" 
                       alt="${elm['title']}">
                   </figure>
                   <div class="restaurant-detail">
                       <main>
                           <div class="title">
                               <a href="#resto-detail-${elm['id']}">
                               ${elm['title']}
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

        if (result.length === 0) {
          restaurantList.innerHTML = '<h1>No Resto Data has been saved</h1>';
        }
      })
      .catch((err) => {
        console.log(err);
      });
};

export default restoFavorList;
