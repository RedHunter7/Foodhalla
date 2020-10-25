const showDropdown = () => {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.opacity = 1;
  dropdown.style.pointerEvents = 'all';
  dropdown.style.transform = `translate("50%",10px)`;
};

const hideDropdown = () => {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.opacity = 0;
  dropdown.style.pointerEvents = 'none';
  dropdown.style.transform = `translate("50%",0)`;
};

export {showDropdown, hideDropdown};
