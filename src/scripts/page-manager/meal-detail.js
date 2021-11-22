import loadPage from '../rendering/load-page';
import swal from 'sweetalert';
import renderDetailTopNav from "../rendering/load-detail-topnav";
import {addMealData, updateMealData, getMealData, deleteMealData} from '../idb/meal-favor-db';

const mealDetail = (mealData = 0) => {
  let mealName;
  if (mealData === 0) {
    mealName = 'meal-detail';
  } else {
    mealName = mealData['title'];
  }

  if (mealData !== 0) {
    const checkMealStatus = () => {
      getMealData(mealData['id']).then((result) => {
        renderDetailTopNav(mealName, 'meal-list');

        const action = document.getElementById('action');
        if (result === undefined) {
          action.innerHTML = `
              <a aria-label="Add this restaurant to favorite list" 
                class="fav-btn material-icons" id="favor" 
                href="javascript:void(0)">
                star_border
              </a>
            `;
          const favorBtn = document.getElementById('favor');
          favorBtn.addEventListener('click', () => {
            if (navigator.onLine === true) {
              addMealData(mealData);
              mealDetail(mealData);
              // eslint-disable-next-line max-len
              swal('Good job!', `You save ${mealName} meal to favorite list`, 'success');
              checkMealStatus();
            } else {
              swal(`Error`, `Can't save meal on offline mode`, 'error');
            }
          });
        } else {
          if (navigator.onLine === true) {
            updateMealData(mealData);
          }
          action.innerHTML = `
              <a class="delete-btn material-icons" id="delete"  
                aria-label="Remove this meal from favorite list"
                href="javascript:void(0)">
                delete
              </a>
            `;

          const deleteBtn= document.getElementById('delete');
          deleteBtn.addEventListener('click', () => {
            swal({
              title: 'Warning',
              // eslint-disable-next-line max-len
              text: `Are you sure want to remove ${mealName} from favourite list?`,
              icon: 'warning',
              dangerMode: true,
              buttons: [true, 'remove'],
            })
                .then((willDelete) => {
                  if (willDelete) {
                    swal(`${mealName} has been removed from favorite list`, {
                      icon: 'success',
                    });
                    deleteMealData(mealData['id']);
                    checkMealStatus();
                  }
                });
          });
        }
      });
    };
    checkMealStatus();
  } else {
    renderDetailTopNav(mealName);
  }
};

export default mealDetail;
