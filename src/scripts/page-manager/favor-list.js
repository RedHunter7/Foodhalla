import {getAllData} from '../idb/idb';
import loader from '../component/loader';
import loadPage from '../rendering/load-page';

const favorList = () => {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
            <div class="nav-wrapper">
                <a class="back-btn material-icons" 
                href="#home" id="back-btn" 
                href="javascript:void(0)">arrow_back</a>
                <a class="logo resto-name" href="javascript:void(0)">
                Favorite List
                </a>
            </div>
   `;

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => {
    loader();
    loadPage('home');
  });

  const favorRestoList = getAllData();
  console.log(favorRestoList);
  favorRestoList
      .then((result) => {
        console.log(result);
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

        // eslint-disable-next-line max-len
        const restoDetailLink = document.querySelectorAll('.restaurant-list a');
        restoDetailLink.forEach((elm) => {
          elm.addEventListener('click', (event) => {
            loader();
            console.log('hey');
            const page = event.target.getAttribute('href').substr(1);
            loadPage(page);
          });
        });

        if (result.length === 0) {
          restaurantList.innerHTML = '<h1>No Resto has been saved</h1>';
        }
      })
      .catch((err) => {
        console.log(err);
      });
};

export default favorList;
