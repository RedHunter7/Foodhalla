const renderBtn = (btnType) => {
  const body = document.querySelector('body');
  body.innerHTML = `
         <div id="action"></div>
    `;

  if (btnType === 'favor') {
    btnType = `
        <a aria-label="Add this restaurant to favorite list" 
            class="fav-btn material-icons" id="favor" 
            href="javascript:void(0)">
            star_border
        </a>
    `;
  } else if (btnType === 'delete') {
    btnType = `
        <a class="delete-btn material-icons" id="delete"  
            aria-label="Remove this restaurant from favorite list"
            href="javascript:void(0)">
            delete
        </a>
      `;
  };

  const action = document.getElementById('action');
  action.innerHTML = btnType;
};

export default renderBtn;
