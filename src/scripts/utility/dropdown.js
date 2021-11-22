const dropdown = (component) => {
  const dropdownTrigger = document.getElementById(`${component}-dropdown-trigger`);
  const dropdownLink = document.querySelectorAll(`.dropdown-content li a`);
  dropdownTrigger.addEventListener('focusin', () => {
    showDropdown(component);
  });
  dropdownTrigger.addEventListener('focusout', () => {
    hideDropdown(component);
  });
  dropdownLink.forEach((elm) => {
    elm.addEventListener('focusin', () => {
      showDropdown(component);
    });
    elm.addEventListener('focusout', () => {
      hideDropdown(component);
    });
  });
}

const showDropdown = (component) => {
  const dropdown = document.getElementById(`${component}-dropdown`);
  dropdown.style.opacity = 1;
  dropdown.style.pointerEvents = 'all';
  dropdown.style.transform = `translate("50%",0px)`;
};

const hideDropdown = (component) => {
  const dropdown = document.getElementById(`${component}-dropdown`);
  dropdown.style.opacity = 0;
  dropdown.style.pointerEvents = 'none';
  dropdown.style.transform = `translate("50%",0)`;
};

export {dropdown, hideDropdown, showDropdown};
