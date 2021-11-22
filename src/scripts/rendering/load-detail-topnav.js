const renderDetailTopNav = (name, back_page = 'home') => {
    const nav = document.querySelector('nav');
          nav.innerHTML = `
            <div class="nav-wrapper">
              <a class="back-btn material-icons" href="#${back_page}" id="back-btn">arrow_back</a>
              <a class="logo nav-title" href="javascript:void(0)">
                ${name}
              </a>
              <div id="action"></div>
            </div>
          `;
}
export default renderDetailTopNav;