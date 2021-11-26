const botNav = (index = 0) => {
    const botNav = document.querySelectorAll('#bot-nav ul li');
    botNav.forEach(elm => {
        const icon = elm.firstElementChild.firstElementChild;
        icon.classList.remove("material-icons");
        icon.classList.add('material-icons-outlined')
    })
    const child = botNav[index];
    const icon = child.firstElementChild.firstElementChild;
    icon.classList.remove('material-icons-outlined');
    icon.classList.add("material-icons");
}

export default botNav;