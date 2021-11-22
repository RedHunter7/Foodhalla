/* eslint-disable linebreak-style */
import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import loadPage from './rendering/load-page.js';
import setAutoMode from './utility/auto-mode.js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        }).catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let page = window.location.hash.substring(1);
  if (page === '') page = 'home';
  loadPage(page);
});
window.addEventListener('hashchange', () => {
  let page = window.location.hash.substring(1);
  if (page === '') page = 'home';
  loadPage(page);
})
const checkStorage = localStorage.getItem('data-theme');

if (typeof(Storage) !== undefined) {
  // set auto mode for data-theme key as default value
  if (checkStorage === null) {
    localStorage.setItem('data-theme', 'auto');
    setAutoMode();
  } else {
    const chooseTheme = localStorage.getItem('data-theme');
    if (chooseTheme === 'auto') {
      setAutoMode();
    } else if (chooseTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (chooseTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
}
