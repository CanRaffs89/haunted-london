function menuToggle() {
    document.querySelector('.first-line').classList.toggle('menu-active')
    document.querySelector('.third-line').classList.toggle('menu-active')
    const links = document.querySelectorAll('.nav-link')
    links.forEach(nav => nav.classList.toggle('active'));
}

document.querySelector('.menu-toggle')
    .addEventListener('click', menuToggle);