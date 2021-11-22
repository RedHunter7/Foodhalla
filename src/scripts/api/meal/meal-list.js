import renderDetailTopNav from "../../rendering/load-detail-topnav";
const renderMealList = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Side')
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          mealList(result);
        })
        .catch((err) => {
          const mealList = document.getElementById('meal-list');
          mealList.innerHTML = `
          <div class="error-message">
              <h2>Ooops can't load meal data on offline mode</h2>
          </div>
          `;
          const interval = setInterval(() => {
            if (navigator.onLine === true) {
              renderMealList();
              clearInterval(interval);
            };
          }, 1000);
          console.log(err);
        });
  
    const mealList = (result) => {
      let mealList = '';
      result['meals'].forEach((elm) => {
        mealList += `
                  <div class="meal">
                     <figure>
                         <img src="img/placeholder-image-2.png" data-src="${elm['strMealThumb']}" class="lazyload" alt="${elm['strMeal']}">
                     </figure>
                     <div class="meal-detail">
                         <main>
                             <div class="title">
                                 <a href="#meal-detail-${elm['idMeal']}">
                                 ${elm['strMeal']}
                                 </a>
                             </div>
                         </main>
                     </div>
                 </div>
              `;
      });
      const mealListComponent = document.getElementById('meal-list');
      mealListComponent.innerHTML = mealList;
  
      // eslint-disable-next-line max-len
      const mealDetailLink = document.querySelectorAll('.meal-list a');
      mealDetailLink.forEach((elm) => {
        elm.addEventListener('click', (event) => {
          renderDetailTopNav('loading..', 'meal-list')
        });
      });
    };
  };
  
  export default renderMealList;
  