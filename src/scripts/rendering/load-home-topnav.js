import renderSidenav from './load-sidenav.js';
import {dropdown, hideDropdown } from '../utility/dropdown.js';
import { showSidenav, hideSidenav } from '../utility/sidenav.js';
import trans from '../utility/theme-transition.js';
import setAutoMode from '../utility/auto-mode.js';
import loadPage from './load-page';

const renderHomeTopNav = () => {
  fetch(`./topnav/home.html`)
    .then((response) => {
      return response.text();
    })
    .then((result) => {
      const nav = document.querySelector('nav');
      nav.innerHTML = result;

      const chooseTheme = localStorage.getItem('data-theme');

      dropdown('favor');
      dropdown('theme');
      
      const dark = document.getElementById('dark');
      const light = document.getElementById('light');
      const auto = document.getElementById('auto');

      if (chooseTheme === 'auto') {
        auto.classList.add('active');
        setAutoMode();
      } else if (chooseTheme === 'light') {
        light.classList.add('active');
      } else if (chooseTheme === 'dark') {
        dark.classList.add('active');
      }

      // Click auto menu on dropdown in Tablet/ PC Version
      auto.addEventListener('click', () => {
        hideDropdown('favor')
        trans();
        localStorage.setItem('data-theme', 'auto');

        auto.classList.add('active');
        dark.classList.remove('active');
        light.classList.remove('active');

        setAutoMode();
      });

      // Click dark menu on dropdown in Tablet/ PC Version
      dark.addEventListener('click', () => {
        hideDropdown('favor')
        trans();
        localStorage.setItem('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');

        dark.classList.add('active');
        auto.classList.remove('active');
        light.classList.remove('active');
      });

      // Click light menu on dropdown in Tablet/PC Version
      light.addEventListener('click', () => {
        hideDropdown('favor')
        trans();
        localStorage.setItem('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');

        light.classList.add('active');
        auto.classList.remove('active');
        dark.classList.remove('active');

      });

      const sidenavTrigger = document.getElementById('target');
      const sidenavOverlay = document.getElementById('sidenav-overlay');

      // Show sidenav when click burger menu
      sidenavTrigger.addEventListener('click', () => {
        renderSidenav('main-menu');
        showSidenav();
      });

      // hide sidenav when click object outside sidenav
      sidenavOverlay.addEventListener('click', () => {
        hideSidenav();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default renderHomeTopNav;
