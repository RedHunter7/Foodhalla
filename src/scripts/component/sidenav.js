const showSidenav = () => {
  const sidenav = document.getElementById('sidenav');
  const sidenavOverlay = document.getElementById('sidenav-overlay');

  sidenavOverlay.style.display = 'block';
  sidenav.style.transform = 'translateX(0%)';
};

const hideSidenav = () => {
  const sidenav = document.getElementById('sidenav');
  const sidenavOverlay = document.getElementById('sidenav-overlay');
  sidenavOverlay.style.display = 'none';
  sidenav.style.transform = 'translate(-105%)';
};

export {showSidenav, hideSidenav};
