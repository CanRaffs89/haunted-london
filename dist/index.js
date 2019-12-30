function menuToggle() {
    const lines = document.querySelectorAll('.hidden')
    lines.forEach(svg => svg.classList.toggle('menu-active'));

    const links = document.querySelectorAll('.nav-link')
    links.forEach(nav => nav.classList.toggle('active'));
}

document.querySelector('.menu-toggle')
    .addEventListener('click', menuToggle);