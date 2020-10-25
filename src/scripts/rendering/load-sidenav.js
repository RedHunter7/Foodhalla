import {hideSidenav} from '../component/sidenav.js';
import trans from '../component/theme-transition.js';
import setAutoMode from '../component/auto-mode.js';
import loadPage from '../rendering/load-page';
const renderSidenav = (page) => {
  fetch(`./sidenav/${page}.html`)
      .then((response) => {
        return response.text();
      })
      .then((result) => {
        const sidenav = document.getElementById('sidenav');
        sidenav.innerHTML = result;
        if (page === 'theme-menu') {
          // CLick back button to load main sidenav
          const backBtn = document.getElementById('back-nav');
          backBtn.addEventListener('click', () => {
            renderSidenav('main-menu');
          });
          const chooseTheme = localStorage.getItem('data-theme');
          const light = document.getElementById('light-mobile');
          const dark = document.getElementById('dark-mobile');
          const auto = document.getElementById('auto-mobile');

          if (chooseTheme === 'auto') {
            auto.classList.add('active');
          } else if (chooseTheme === 'light') {
            light.classList.add('active');
          } else if (chooseTheme === 'dark') {
            dark.classList.add('active');
          }

          const sidenav = document.getElementById('sidenav');

          // Click auto menu on sidenav menu on mobile/Tablet
          auto.addEventListener('click', () => {
            trans();
            localStorage.setItem('data-theme', 'auto');

            hideSidenav();
            sidenav.innerHTML = '';

            setAutoMode();
          });

          // Click light menu on sidenav menu on mobile/Tablet
          light.addEventListener('click', () => {
            trans();
            localStorage.setItem('data-theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');

            hideSidenav();
            sidenav.innerHTML = '';
          });

          // Click dark menu on sidenav menu on mobile/Tablet
          dark.addEventListener('click', () => {
            trans();
            localStorage.setItem('data-theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');

            hideSidenav();
            sidenav.innerHTML = '';
          });
        } else if (page === 'main-menu') {
          const sidenavLink = document.querySelectorAll('.sidenav .link');
          sidenavLink.forEach((elm) => {
            elm.addEventListener('click', (event) => {
              const page = event.target.getAttribute('href').substr(1);
              loadPage(page);
              hideSidenav();
            });
          });
          // Click close button to hide sidenav
          const closeSidenav = document.getElementById('close-nav');
          closeSidenav.addEventListener('click', () => {
            hideSidenav();
          });

          // Click theme menu to load Theme sidenav
          const themeLink = document.getElementById('theme');
          themeLink.addEventListener('click', () => {
            renderSidenav('theme-menu');
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
};
export default renderSidenav;
