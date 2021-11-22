import {getAllMealData} from '../idb/meal-favor-db';

const mealFavorList = () => {
  const favorMealList = getAllMealData();
  favorMealList
      .then((result) => {
        let mealList = '';
        result.forEach((elm) => {
          let img;
          if (navigator.onLine === false) {
            img = 'img/placeholder-image-2.png';
          } else {
            img = elm['picture'];
          }
          mealList += `
                <div class="meal">
                    <figure>
                        <img src="img/placeholder-image-2.png" data-src="${img}" class="lazyload" alt="${elm['strMeal']}">
                    </figure>
                    <div class="meal-detail">
                        <main>
                            <div class="title">
                                <a href="#meal-detail-${elm['id']}">
                                    ${elm['title']}
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            `;
        });
        const mealListComponent = document.getElementById('meal-list');
        mealListComponent.innerHTML = mealList;

        if (result.length === 0) {
          mealListComponent.innerHTML = '<h1>No Meal Data has been saved</h1>';
        }
      })
      .catch((err) => {
        console.log(err);
      });
};

export default mealFavorList;
