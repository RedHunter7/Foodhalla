import loadPage from '../rendering/load-page';
import loader from '../component/loader';
import swal from 'sweetalert';
import {addData, updateData, getData, deleteData} from '../idb/idb';

const restoDetail = (restoData = 0) => {
  let restoName;
  if (restoData === 0) {
    restoName = 'resto-detail';
  } else {
    restoName = restoData['title'];
  }

  const renderNav = (navTitle) => {
    const nav = document.querySelector('nav');
    nav.innerHTML = `
            <div class="nav-wrapper">
                <a class="back-btn material-icons" href="#home" id="back-btn" 
                href="javascript:void(0)">arrow_back</a>
                <a class="logo resto-name" href="javascript:void(0)">
                ${navTitle}
                </a>
                <div id="action"></div>
            </div>
      `;

    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
      loader();
      loadPage('home');
    });
  };

  if (restoData !== 0) {
    const checkRestoStatus = () => {
      getData(restoData['id']).then((result) => {
        renderNav(restoName);

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
              addData(restoData);
              restoDetail(restoData);
              // eslint-disable-next-line max-len
              swal('Good job!', `You save ${restoName} resto to favorite list`, 'success');
              checkRestoStatus();
            } else {
              swal(`Error`, `Can't save resto on offline mode`, 'error');
            }
          });
        } else {
          if (navigator.onLine === true) {
            updateData(restoData);
          }
          action.innerHTML = `
              <a class="delete-btn material-icons" id="delete"  
                aria-label="Remove this restaurant from favorite list"
                href="javascript:void(0)">
                delete
              </a>
            `;

          const deleteBtn= document.getElementById('delete');
          deleteBtn.addEventListener('click', () => {
            swal({
              title: 'Warning',
              // eslint-disable-next-line max-len
              text: `Are you sure want to remove ${restoName} from favourite list?`,
              icon: 'warning',
              dangerMode: true,
              buttons: [true, 'remove'],
            })
                .then((willDelete) => {
                  if (willDelete) {
                    swal(`${restoName} has been removed from favorite list`, {
                      icon: 'success',
                    });
                    deleteData(restoData['id']);
                    checkRestoStatus();
                  }
                });
          });
        }
      });
    };
    checkRestoStatus();
  } else {
    renderNav(restoName);
  }

  const modalTrigger = document.getElementById('modal-trigger');
  modalTrigger.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.visibility = 'visible';
    const modalContent = document.querySelector('#modal .modal-content');
    modalContent.style.animation = 'openModal 0.3s';
    modal.addEventListener('animationend', () => {
      modal.style.visibility = 'visible';
    });
  });

  const closeModal = document.getElementById('close-modal');
  closeModal.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('#modal .modal-content');
    modalContent.style.animation = 'closeModal 0.3s';
    modal.addEventListener('animationend', () => {
      modal.style.visibility = 'hidden';
    });
  });

  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', () => {
    const nameInput = document.getElementById('input-name');
    const reviewInput = document.getElementById('input-review');
    if (nameInput.value === '' || reviewInput.value === '') {
      swal(`Can't Submit`, 'you must input all required fileds', 'warning');
    } else if (navigator.onLine === false) {
      swal(`Error`, `Can't submit review on offline mode`, 'error');
    } else {
      fetch('https://dicoding-restaurant-api.el.r.appspot.com/review', {
        method: 'POST',
        headers: {
          'X-Auth-Token': 12345,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'id': restoData['id'],
          'name': nameInput.value,
          'review': reviewInput.value,
        }),
      }).then((response) => {
        return response.json();
      }).then((result) => {
        // eslint-disable-next-line max-len
        swal('Good work!', `You're review has been successfully submitted`, 'success')
            .then(() => {
              loadPage(`resto-detail-${restoData['id']}`);
            });
      }).catch((err) => {
        console.log(err);
      });
    }
  });
};

export default restoDetail;
