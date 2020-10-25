import renderSidenav from '../rendering/load-sidenav.js';
import {showDropdown, hideDropdown} from '../component/dropdown.js';
import {showSidenav, hideSidenav} from '../component/sidenav.js';
import trans from '../component/theme-transition.js';
import setAutoMode from '../component/auto-mode.js';
import loadPage from '../rendering/load-page';

const home = () => {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
        <div class="nav-wrapper">
            <a class="sidenav-trigger material-icons" id="target" 
            href="javascript:void(0)">subject</a>
            <a class="logo link" href="#home">Foodhalla</a>
            <ul>
                <li>
                    <a class="link" href="#home">Home</a>
                </li>
                <li>
                    <a class="link" href="#favor-list">Favorite</a>
                </li>
                <li>
                    <a href="javascript:void(0)" id="dropdown-trigger">
                        Theme
                        <i class="material-icons">arrow_drop_down</i>
                    </a>
                    <ul class="dropdown-content" id="dropdown">
                        <li>
                            <a id="light" href="javascript:void(0)">
                                <i class="material-icons">brightness_5</i>
                                Light
                                <i class="material-icons active-icons">
                                check_circle_outline
                                </i>
                            </a>
                        </li>
                        <li>
                            <a id="dark" href="javascript:void(0)">
                                <i class="material-icons">bedtime</i>
                                Dark
                                <i class="material-icons active-icons">
                                check_circle_outline
                                </i>
                            </a>
                        </li>
                        <li>
                            <a id="auto" href="javascript:void(0)">
                                <i class="material-icons">brightness_auto</i>
                                Auto
                                <i class="material-icons active-icons">
                                check_circle_outline
                                </i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="https://github.com/RedHunter7">About us</a>
                </li>
            </ul>
        </div>
  `;

  const navLink = document.querySelectorAll('nav .link');
  navLink.forEach((elm) => {
    elm.addEventListener('click', (event) => {
      const page = event.target.getAttribute('href').substr(1);
      loadPage(page);
    });
  });

  const chooseTheme = localStorage.getItem('data-theme');

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
    trans();
    localStorage.setItem('data-theme', 'auto');

    auto.classList.add('active');
    dark.classList.remove('active');
    light.classList.remove('active');

    setAutoMode();
  });

  // Click dark menu on dropdown in Tablet/ PC Version
  dark.addEventListener('click', () => {
    trans();
    localStorage.setItem('data-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    dark.classList.add('active');
    auto.classList.remove('active');
    light.classList.remove('active');
  });

  // Click light menu on dropdown in Tablet/PC Version
  light.addEventListener('click', () => {
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

  // Dropdown Focus Event
  const dropdownTrigger = document.getElementById('dropdown-trigger');
  const dropdownLink = document.querySelectorAll('.dropdown-content li a');
  dropdownTrigger.addEventListener('focusin', () => {
    showDropdown();
  });
  dropdownTrigger.addEventListener('focusout', () => {
    hideDropdown();
  });
  dropdownLink.forEach((elm) => {
    elm.addEventListener('focusin', () => {
      showDropdown();
    });
    elm.addEventListener('focusout', () => {
      hideDropdown();
    });
  });
};

export default home;
