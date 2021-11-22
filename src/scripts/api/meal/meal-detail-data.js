import mealDetail from '../../page-manager/meal-detail';
import loadPage from '../../rendering/load-page';
import { getMealData } from '../../idb/meal-favor-db';

const renderMealDetail = (mealId) => {
  getMealData(mealId).then((result) => {
    if (
      // eslint-disable-next-line max-len
      ((result === undefined || result !== undefined) && navigator.onLine === true) ||
      (result === undefined && navigator.onLine === false)
    ) {
      fetchData();
    } else {
      getIDBMealData(result);
    }
  });

  const getIDBMealData = (result) => {
    let img;

    if (navigator.onLine === false) {
      img = 'img/placeholder-image-1.png';
    } else {
      img = result['picture'];
    }

    const mealCover = document.getElementById('meal-cover');
    mealCover.innerHTML = `
            <img src="${img}"
            alt="meal cover">
            <div class="meal-info">
                <h2>${result['title']}</h1>
                <h3>
                ${result['area']}
                </h3>
                <h5>${result['tags']}</h5>
            </div>
        `;

    const mealInstruction = document.querySelector('.meal-instruction ol');
    result['instruction'].forEach((elm) => {
      mealInstruction.innerHTML += `<li>${elm}</lim>`
    });

    const mealIngredient = document.querySelector('.meal-ingredient .ingredient ul');
    result['ingredient'].forEach((elm, index) => {
      mealIngredient.innerHTML += `<li>${elm}</li>`;
    });

    const mealMeasure = document.querySelector('.meal-ingredient .measure ul');
    result['measure'].forEach((elm) => {
      mealMeasure.innerHTML += `<li>${elm}</li>`;
    });

    const mealData = {
      id: result['id'],
      title: result['title'],
      picture: result['picture'],
      area: result['area'],
      tags: result['tags'],
      instruction: result['instruction'],
      ingredient: result['ingredient'],
      measure: result['measure'],
    };
    mealDetail(mealData);
  };

  const fetchData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        renderMealDetailData(result);
      })
      .catch((error) => {
        console.log(error);
        mealDetail();
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
      });
  };

  const renderMealDetailData = (result) => {
    let data = result['meals'][0];

    let tagsText = '';
    if (data['strTags'] == null) {
      tagsText = '';
    } else {
      let tags = data['strTags'].split(',');
      tags.forEach((elm) => {
        tagsText += `#${elm} `;
      });
    }

    const mealCover = document.getElementById('meal-cover');
    mealCover.innerHTML = `
    <img src="img/placeholder-image-1.png" data-src="${data['strMealThumb']}"
    class="lazyload" alt="meal cover">
    <div class="meal-info">
        <h2>${data['strMeal']}</h1>
        <h3>
        ${data['strArea']} 
        </h3>
        <h5>${tagsText}</h5>
    </div>
`;
    const ingredient = [];
    const measure = [];

    for (let index = 1; index <= 20; index++) {
      if (data[`strIngredient${index.toString()}`] != "") {
        ingredient.push(data[`strIngredient${index.toString()}`]);
        measure.push(data[`strMeasure${index.toString()}`]);
      }
    }

    const mealInstruction = document.querySelector('.meal-instruction ol');
    let instruction = data['strInstructions'].split('.');
    instruction.pop();
    instruction.forEach((elm) => {
      mealInstruction.innerHTML += `<li>${elm}</lim>`
    });

    const mealIngredient = document.querySelector('.meal-ingredient .ingredient ul');
    ingredient.forEach((elm, index) => {
      mealIngredient.innerHTML += `<li>${elm}</li>`;
    });

    const mealMeasure = document.querySelector('.meal-ingredient .measure ul');
    measure.forEach((elm) => {
      mealMeasure.innerHTML += `<li>${elm}</li>`;
    });

    const mealData = {
      id: data['idMeal'],
      title: data['strMeal'],
      picture: data['strMealThumb'],
      area: data['strArea'],
      tags: tagsText,
      instruction: instruction,
      ingredient: ingredient,
      measure: measure,
    };
    mealDetail(mealData);
  };
};

export default renderMealDetail;
