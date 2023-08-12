const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const submenu = document.querySelector("#submenu1");
const submenu2 = document.querySelector("#submenu2");
const submenu3 = document.querySelector("#submenu3");
const Dashboard = document.querySelector("#sub");
const About = document.querySelector("#about");
const collapse = document.querySelector("#sub2");

// const navLink = document.querySelector('nav-link');
burger.addEventListener('click', () => {
    if (menu.classList.contains('visually-hidden')) {
        menu.classList.remove('visually-hidden');
    } else {
        menu.classList.add('visually-hidden')
    }
})

Dashboard.addEventListener('click', () => {
    if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');

    } else {
        submenu.classList.add('show');
    }
})

About.addEventListener('click', () => {
    if (submenu2.classList.contains('collapse')) {
        submenu2.classList.remove('collapse');
    } else {
        submenu2.classList.add('collapse')
    }
})


collapse.addEventListener('click', () => {
    if (submenu3.classList.contains('show')) {
        submenu3.classList.remove('show')
    } else {
        submenu3.classList.add('show')
    }
})